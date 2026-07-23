import { spawnSync } from "node:child_process";
import { forkOwnerLogin } from "./student-work-policy.mjs";

const login = forkOwnerLogin();
const exactEditPermission = {
  "*": "deny",
  [`student-work/${login}/**`]: "allow",
  ".course-local/**": "allow",
};

let inlineConfig = {};
if (process.env.OPENCODE_CONFIG_CONTENT) {
  try {
    inlineConfig = JSON.parse(process.env.OPENCODE_CONFIG_CONTENT);
  } catch {
    throw new Error("OPENCODE_CONFIG_CONTENT already exists but is not valid JSON.");
  }
}

inlineConfig.permission = {
  ...(inlineConfig.permission ?? {}),
  edit: exactEditPermission,
};

const environment = {
  ...process.env,
  OPENCODE_CONFIG_CONTENT: JSON.stringify(inlineConfig),
  OPENCODE_PERMISSION: JSON.stringify({ edit: exactEditPermission }),
};
const forwardedArguments = process.argv.slice(2);
const checkOnly = forwardedArguments.length === 1 && forwardedArguments[0] === "--check-only";

console.log(`Starting the course agent for ${login}.`);
console.log(`Writable public path: student-work/${login}/**`);
console.log("Local-only path: .course-local/**");

if (checkOnly) {
  console.log("Course-agent launcher check passed.");
  process.exit(0);
}

const result =
  process.platform === "win32"
    ? spawnSync(process.env.ComSpec ?? "cmd.exe", ["/d", "/s", "/c", "opencode", ...forwardedArguments], {
        env: environment,
        stdio: "inherit",
      })
    : spawnSync("opencode", forwardedArguments, { env: environment, stdio: "inherit" });

if (result.error) throw result.error;
process.exit(result.status ?? 1);
