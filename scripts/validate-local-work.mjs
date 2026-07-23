import { execFileSync } from "node:child_process";
import { assertSafeFile, forkOwnerLogin } from "./student-work-policy.mjs";

function nulList(args) {
  const output = execFileSync("git", args, { encoding: "utf8" });
  return output.split("\0").filter(Boolean);
}

function refExists(ref) {
  try {
    execFileSync("git", ["rev-parse", "--verify", "--quiet", ref], { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

const login = forkOwnerLogin();
const branch = execFileSync("git", ["branch", "--show-current"], { encoding: "utf8" }).trim();
const changed = new Set();

if (branch && branch !== "main" && branch !== "master") {
  const base = ["upstream/main", "origin/main", "main"].find(refExists);
  if (!base) throw new Error("Cannot find main. Sync the fork before validating this branch.");
  for (const file of nulList(["diff", "--name-only", "--no-renames", "-z", `${base}...HEAD`])) changed.add(file);
}

for (const file of nulList(["diff", "--name-only", "--no-renames", "-z", "HEAD"])) changed.add(file);
for (const file of nulList(["diff", "--cached", "--name-only", "--no-renames", "-z"])) changed.add(file);
for (const file of nulList(["ls-files", "--others", "--exclude-standard", "-z"])) changed.add(file);

if (!changed.size) {
  console.log("No student-work changes to validate.");
  process.exit(0);
}

for (const file of changed) assertSafeFile(file, login);
console.log(`Validated ${changed.size} public-safe path(s) for ${login}.`);
