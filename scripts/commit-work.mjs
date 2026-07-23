import { execFileSync } from "node:child_process";
import { assertSafeFile, forkOwnerLogin } from "./student-work-policy.mjs";

function git(args, options = {}) {
  return execFileSync("git", args, { encoding: "utf8", ...options }).trim();
}

function nulList(args) {
  const output = execFileSync("git", args, { encoding: "utf8" });
  return output.split("\0").filter(Boolean);
}

const login = forkOwnerLogin();
const branch = git(["branch", "--show-current"]);
if (!branch || branch === "main" || branch === "master") {
  throw new Error("Create a work branch before committing. Do not commit student work on the default branch.");
}

const changed = new Set([
  ...nulList(["diff", "--name-only", "--no-renames", "-z", "HEAD"]),
  ...nulList(["ls-files", "--others", "--exclude-standard", "-z"]),
]);
if (!changed.size) throw new Error("There are no student-work changes to commit.");

const allowed = [...changed].map((file) => assertSafeFile(file, login));
const message = process.argv.slice(2).join(" ").trim() || "Update course work";
if (message.length < 3 || message.length > 100 || /[\r\n]/.test(message)) {
  throw new Error("Use a one-line commit message between 3 and 100 characters.");
}

execFileSync("git", ["add", "--", ...allowed], { stdio: "inherit" });
const staged = nulList(["diff", "--cached", "--name-only", "-z"]);
if (!staged.length) throw new Error("No allowed student work was staged.");
staged.forEach((file) => assertSafeFile(file, login));

console.log("Validated paths:");
for (const file of staged) console.log(`- ${file}`);
console.log("\nStaged diff summary:");
console.log(git(["diff", "--cached", "--stat"]));

execFileSync("git", ["commit", "-m", message], { stdio: "inherit" });
console.log("\nCommit created. Review `git show --stat` before approving a push.");
