import { readFileSync } from "node:fs";
import { assertPullRequestFile, secretPatterns } from "./student-work-policy.mjs";

const eventPath = process.env.GITHUB_EVENT_PATH;
const token = process.env.GITHUB_TOKEN;
if (!eventPath || !token) throw new Error("GITHUB_EVENT_PATH and GITHUB_TOKEN are required.");

const event = JSON.parse(readFileSync(eventPath, "utf8"));
const pull = event.pull_request;
if (!pull) throw new Error("This validator requires a pull_request event.");

const baseRepository = event.repository.full_name;
const headRepository = pull.head.repo?.full_name;
const headSha = pull.head.sha;
const login = pull.user.login.toLowerCase();
if (!headRepository || !headSha) throw new Error("The pull request head repository is unavailable.");
if (!Number.isInteger(pull.changed_files) || pull.changed_files < 1) {
  throw new Error("The pull request changed-file count is unavailable.");
}
if (pull.changed_files > 100) {
  throw new Error("Student pull requests may change at most 100 files. Split this work into smaller reviews.");
}

async function github(pathname) {
  const response = await fetch(`https://api.github.com${pathname}`, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "applied-generative-ai-student-validator",
    },
  });
  if (!response.ok) throw new Error(`GitHub API ${response.status} for ${pathname}`);
  return response.json();
}

const files = [];
for (let page = 1; ; page += 1) {
  const batch = await github(
    `/repos/${baseRepository}/pulls/${pull.number}/files?per_page=100&page=${page}`,
  );
  files.push(...batch);
  if (batch.length < 100) break;
}
if (!files.length) throw new Error("The pull request contains no changed files.");
if (files.length !== pull.changed_files) {
  throw new Error(
    `GitHub reported ${pull.changed_files} changed files but returned ${files.length}; refusing incomplete validation.`,
  );
}

const trustedMaintainerRelease =
  login === "clg236" && headRepository.toLowerCase() === baseRepository.toLowerCase();

if (trustedMaintainerRelease) {
  console.log("Maintainer release pull request detected; namespace check skipped, safety scan retained.");
} else {
  for (const file of files) assertPullRequestFile(file, login);
}

const tree = await github(`/repos/${headRepository}/git/trees/${headSha}?recursive=1`);
if (tree.truncated) throw new Error("The pull request tree is too large to validate safely.");
const entries = new Map(tree.tree.map((entry) => [entry.path, entry]));

for (const file of files.filter((entry) => entry.status !== "removed")) {
  const entry = entries.get(file.filename);
  if (!entry || entry.type !== "blob") throw new Error(`Cannot validate ${file.filename}.`);
  if (entry.mode === "120000") throw new Error(`Symbolic links are not allowed: ${file.filename}`);
  if ((entry.size ?? 0) > 5_000_000) {
    throw new Error(`${file.filename} is larger than 5 MB. Submit a public-safe manifest instead.`);
  }

  const blob = await github(`/repos/${headRepository}/git/blobs/${entry.sha}`);
  const bytes = Buffer.from((blob.content ?? "").replace(/\n/g, ""), blob.encoding ?? "base64");
  const text = bytes.toString("utf8");
  if (secretPatterns.some((pattern) => pattern.test(text))) {
    throw new Error(`Possible credential detected in ${file.filename}. Remove and rotate it.`);
  }
}

console.log(`Validated ${files.length} changed path(s) for ${login}.`);
