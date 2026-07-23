import { execFileSync } from "node:child_process";
import { existsSync, lstatSync, readFileSync } from "node:fs";
import path from "node:path";

const upstreamOwner = "clg236";
const repositoryName = "applied-generative-ai-course-students";

export const secretPatterns = [
  /sk-[A-Za-z0-9_-]{20,}/,
  /sk-or-v1-[A-Za-z0-9_-]{20,}/,
  /github_pat_[A-Za-z0-9_]{20,}/,
  /gh[pousr]_[A-Za-z0-9]{20,}/,
  /AKIA[0-9A-Z]{16}/,
  /AIza[0-9A-Za-z_-]{35}/,
  /hf_[A-Za-z0-9]{30,}/,
  /sb_(?:secret|publishable)_[A-Za-z0-9_-]{20,}/,
  /xox[baprs]-[A-Za-z0-9-]{20,}/,
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
  /SUPABASE_(?:SERVICE_ROLE_)?KEY\s*=\s*[^\s#]{20,}/i,
  /GIPHY_API_KEY\s*=\s*[A-Za-z0-9]{20,}/i,
];

function git(args) {
  return execFileSync("git", args, { encoding: "utf8" }).trim();
}

export function githubRepositorySlug(remoteUrl) {
  const normalized = remoteUrl
    .trim()
    .replace(/^git@github\.com:/i, "https://github.com/")
    .replace(/^ssh:\/\/git@github\.com\//i, "https://github.com/")
    .replace(/\.git$/i, "");
  const match = normalized.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)$/i);
  if (!match) throw new Error(`Remote must use github.com: ${remoteUrl}`);
  return `${match[1]}/${match[2]}`.toLowerCase();
}

export function normalizeRepositoryPath(filePath) {
  return filePath.replaceAll("\\", "/").replace(/^\.\//, "");
}

export function loginFromRemoteUrl(remoteUrl) {
  const slug = githubRepositorySlug(remoteUrl);
  const [owner, repository] = slug.split("/");
  if (repository !== repositoryName) {
    throw new Error(`Origin must be a GitHub fork of ${upstreamOwner}/${repositoryName}.`);
  }

  const login = owner.toLowerCase();
  if (login === upstreamOwner) {
    throw new Error(`Fork ${upstreamOwner}/${repositoryName} to your account before creating student work.`);
  }
  if (!/^[a-z0-9](?:[a-z0-9-]{0,37}[a-z0-9])?$/.test(login)) {
    throw new Error(`Cannot derive a valid GitHub login from origin: ${remoteUrl}`);
  }
  return login;
}

export function forkOwnerLogin() {
  const login = loginFromRemoteUrl(git(["remote", "get-url", "origin"]));
  let upstream;
  try {
    upstream = githubRepositorySlug(git(["remote", "get-url", "upstream"]));
  } catch {
    throw new Error(`Add the canonical upstream remote for ${upstreamOwner}/${repositoryName}.`);
  }
  if (upstream !== `${upstreamOwner}/${repositoryName}`) {
    throw new Error(`Upstream must be ${upstreamOwner}/${repositoryName}, received ${upstream}.`);
  }
  return login;
}

export function allowedRoots(login) {
  const root = `student-work/${login}/`;
  return [`${root}session-work/`, `${root}submissions/`];
}

export function assertAllowedPath(filePath, login) {
  const normalized = normalizeRepositoryPath(filePath);
  const segments = normalized.split("/");
  if (
    !normalized ||
    path.isAbsolute(normalized) ||
    segments.some((segment) => segment === "." || segment === "..")
  ) {
    throw new Error(`Invalid repository path: ${filePath}`);
  }
  if (/(^|\/)\.env(?:\.|$)/i.test(normalized)) {
    throw new Error(`Environment files may not be committed: ${normalized}`);
  }
  if (!allowedRoots(login).some((root) => normalized.startsWith(root))) {
    throw new Error(`Student work for ${login} may not change ${normalized}`);
  }
  if (existsSync(normalized) && lstatSync(normalized).isSymbolicLink()) {
    throw new Error(`Symbolic links are not allowed in student work: ${normalized}`);
  }
  return normalized;
}

export function assertPullRequestFile(file, login) {
  if (!file?.filename) throw new Error("Pull request file is missing its filename.");
  const changedPaths = [file.filename, file.previous_filename].filter(Boolean);
  for (const changedPath of changedPaths) assertAllowedPath(changedPath, login);
  return changedPaths;
}

export function assertSafeFile(filePath, login) {
  const normalized = assertAllowedPath(filePath, login);
  if (!existsSync(normalized) || lstatSync(normalized).isDirectory()) return normalized;

  const bytes = readFileSync(normalized);
  if (bytes.length > 5_000_000) {
    throw new Error(`${normalized} is larger than 5 MB. Submit a public-safe manifest instead of raw media.`);
  }
  const text = bytes.toString("utf8");
  if (secretPatterns.some((pattern) => pattern.test(text))) {
    throw new Error(`Possible credential detected in ${normalized}. Remove it and rotate the credential.`);
  }
  return normalized;
}
