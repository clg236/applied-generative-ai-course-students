# Pre-course setup guide

**Applied Generative AI · SHBI-GB 7151 · Summer 2026**

Complete this before Tuesday, July 28 at 9:00 AM. Allow 30–45 minutes. Bring a charged laptop and charger.

## Ready means

Before class, you can:

- run `git --version`;
- run `gh auth status`;
- run `opencode --version`;
- open your fork of the public student repository;
- run `node scripts/init-student.mjs` successfully;
- run `node scripts/start-course-agent.mjs --check-only` successfully;
- connect OpenCode to your own capped OpenRouter key; and
- select `openrouter/deepseek/deepseek-v4-flash`.

If a step remains blocked for more than ten minutes, save the exact error and contact the instructor through the course help channel.

## 1 · Install Git and GitHub CLI

Create a free [GitHub](https://github.com/) account if needed. Install [Git](https://git-scm.com/downloads) and the [GitHub CLI](https://cli.github.com/).

Common GitHub CLI options:

```text
winget install --id GitHub.cli
```

```text
brew install gh
```

Confirm and authenticate:

```text
git --version
gh --version
gh auth login
gh auth status
```

Choose GitHub.com, HTTPS, and browser authentication when prompted. If Git asks for an email address, use the private no-reply address from your GitHub email settings rather than an address you do not want in public commit history.

## 2 · Install OpenCode

OpenCode is the course agent interface. Follow the current [OpenCode installation guide](https://opencode.ai/docs/).

Common options:

```text
npm install -g opencode-ai
```

On Windows, OpenCode recommends WSL for the best compatibility. Chocolatey, Scoop, npm, and the downloadable binary are also supported:

```text
choco install opencode
```

```text
scoop install opencode
```

Confirm:

```text
opencode --version
```

## 3 · Create an OpenRouter key

The course uses [OpenRouter](https://openrouter.ai/) to access several models through one account.

1. Create an account.
2. Add a small amount of credit. Five dollars is enough for the planned exercises.
3. Create a key named `stern-course-agent`.
4. Set a five-dollar spending limit.
5. Copy the key once and keep it private.

Never paste the key into a repository file, GitHub issue, pull request, screenshot, shared document, chat transcript, or assignment. If it is exposed, revoke it and create a replacement.

If this cost creates a barrier, contact the instructor privately for an alternative.

## 4 · Fork and clone the student repository

The course uses two canonical repositories:

- a private instructor source containing all course and instructor material; and
- the public [student repository](https://github.com/clg236/applied-generative-ai-course-students) containing only released material and the contribution workflow.

Students use only the public repository. Create a personal fork and clone it:

```text
gh repo fork clg236/applied-generative-ai-course-students --clone
cd applied-generative-ai-course-students
```

Confirm the remotes:

```text
git remote -v
```

`origin` should point to your GitHub account. `upstream` should point to `clg236/applied-generative-ai-course-students`.

Initialize your namespaced work folders:

```text
node scripts/init-student.mjs
```

The command prints the only two folders where your agent may create public course work.

Create a branch before the first lab:

```text
git switch -c work/<github-login>/session-01-agent-check
```

Replace `<github-login>` with your lowercase GitHub username.

## 5 · Connect OpenCode to OpenRouter

Start OpenCode from the root of your fork:

```text
node scripts/start-course-agent.mjs
```

Use this launcher for course work. It derives your GitHub login from the fork remotes and gives OpenCode edit permission only for your own public `student-work/<github-login>/` path and the ignored `.course-local/` folder.

Inside OpenCode:

1. Run `/connect`.
2. Choose **OpenRouter**.
3. Paste your own key into the provider authentication prompt.
4. Run `/models`.
5. Select **DeepSeek V4 Flash**.

The configured model should display as:

```text
openrouter/deepseek/deepseek-v4-flash
```

OpenCode stores provider authentication outside the repository. Do not create a key file inside the fork.

## 6 · Check the public repository boundary

Ask the agent:

> Read `AGENTS.md`, run the student initialization check, and tell me the only folders you may edit. Cite the instruction path. Do not create or edit anything.

A correct answer names your own:

```text
student-work/<github-login>/session-work/
student-work/<github-login>/submissions/
```

It must also say that course files and other students' folders are read-only. Do not run `/course-check` before class; that command is the first controlled lab exercise.

## Public-work rule

Everything pushed to the repository or your fork is public. Never publish grades, NYU IDs, email addresses, attendance, accommodations, private feedback, learning profiles, credentials, private messages, proprietary records, or identifiable field media. Use public, synthetic, consented, de-identified, or explicitly authorized evidence. Use an instructor-approved private channel when work cannot be public.

## Troubleshooting

| Symptom | Next action |
|---|---|
| `gh` is not recognized | Reopen the terminal and confirm GitHub CLI is installed and on `PATH`. |
| GitHub authentication fails | Run `gh auth login` again, choose HTTPS and browser authentication, then run `gh auth status`. |
| `opencode` is not recognized | Reopen the terminal and confirm the installation directory is on `PATH`. On Windows, use WSL or a documented native install. |
| OpenRouter is missing | Run `/connect` again and select OpenRouter, then check `opencode auth list`. |
| Model not found | Run `/models` and verify the exact model ID. Save the error; model catalogs can change. |
| `401` | Reconnect with a valid key. |
| `402` | Check the key's credit and spending limit. |
| `init-student` rejects the remote | Confirm `origin` is your personal fork, not the upstream course repository. |
| The agent requests a course file or another student's path | Reject the request and show the instructor. |
| Setup remains blocked | Bring the exact error. Use the paired workstation fallback during the lab. |

Model availability and provider pricing can change. The instructor will verify the model before class and announce a fallback if necessary.
