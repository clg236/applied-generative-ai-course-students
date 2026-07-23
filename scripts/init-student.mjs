import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { forkOwnerLogin } from "./student-work-policy.mjs";

const login = forkOwnerLogin();
const sessionRoot = `student-work/${login}/session-work`;
const submissionsRoot = `student-work/${login}/submissions`;

await mkdir(sessionRoot, { recursive: true });
await mkdir(submissionsRoot, { recursive: true });
await mkdir(".course-local", { recursive: true });

const profilePath = ".course-local/agent-profile.md";
if (!existsSync(profilePath)) {
  await writeFile(
    profilePath,
    [
      "# Local learning profile",
      "",
      "This ignored file stays on this computer and must not be submitted.",
      "",
      "- Preferred name or handle:",
      "- Two learning goals:",
      "- Business domain or public problem of interest:",
      "- Preferred response style:",
      "- Actions that always require confirmation:",
      "",
    ].join("\n"),
    "utf8",
  );
}

console.log(`Fork owner: ${login}`);
console.log(`Agent write paths:`);
console.log(`- ${sessionRoot}/`);
console.log(`- ${submissionsRoot}/`);
console.log(`Local-only profile: ${profilePath}`);
