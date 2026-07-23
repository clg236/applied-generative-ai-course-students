# Pre-course setup guide

**Applied Generative AI · SHBI-GB 7151 · Summer 2026**

Complete this before Tuesday, July 28 at 9:00 AM. Allow 30–45 minutes. Bring a charged laptop and charger.

## Ready means

Before class, you can:

- run `git --version`;
- run `opencode --version`;
- open your private course workspace repository;
- open the separate student course-materials repository;
- connect OpenCode to your own capped OpenRouter key; and
- select `openrouter/deepseek/deepseek-v4-flash`.

Do not wait until the lab to install or authenticate. If a step remains blocked for more than ten minutes, save the exact error and contact the instructor through the course help channel.

## 1 · Git and GitHub

Create a free [GitHub](https://github.com/) account if you do not already have one. Install [Git](https://git-scm.com/downloads) and confirm:

```text
git --version
```

Accept the private course-workspace invitation sent by the instructor. Do not post your GitHub username in a public channel; provide it through the instructor's private collection method.

If Git asks for an email address, use the private no-reply address from your GitHub email settings rather than an NYU address you do not want in commit history.

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

or

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
2. Add a small amount of credit. Five dollars is enough for the planned course exercises.
3. Create a key named `stern-course-agent`.
4. Set a five-dollar spending limit.
5. Copy the key once and keep it private.

Never paste the key into a repository file, `.env` committed to Git, screenshot, shared document, chat transcript, or assignment. If it is exposed, revoke it and create a replacement.

If this cost creates a barrier, contact the instructor privately for an alternative.

## 4 · Clone the two course repositories

Keep both repositories in one parent folder with these exact names:

```text
courses/
  applied-generative-ai-course-students/   # read-only released materials
  applied-generative-ai-work/              # your private workspace
```

Clone the released student materials directly, then use the private workspace URL supplied by the instructor:

```text
git clone https://github.com/clg236/applied-generative-ai-course-students.git
git clone <your-private-workspace-url> applied-generative-ai-work
```

The instructor source repository is not a student repository. GitHub access to the private materials repository will be granted through the course roster.

At the start of each class, pull newly released material:

```text
cd applied-generative-ai-course-students
git pull
```

The materials repository contains only enabled sessions. Your work belongs only in the private workspace.

## 5 · Connect OpenCode to OpenRouter

Start OpenCode from your private workspace:

```text
cd applied-generative-ai-work
opencode
```

Inside OpenCode:

1. Run `/connect`.
2. Choose **OpenRouter**.
3. Paste your own key.
4. Run `/models`.
5. Select **DeepSeek V4 Flash**.

The exact configured model should display as:

```text
openrouter/deepseek/deepseek-v4-flash
```

OpenCode stores provider authentication outside the repository. Do not create a key file inside the workspace.

## 6 · Check the repository boundary

From the private workspace, ask the agent:

> Read the course-materials AGENTS.md and tell me which folders you may write to. Cite the file path. Do not create or edit anything.

A correct answer names `session-work/`, `submissions/`, and `status/agent-status.json`. It also says the sibling course-materials repository is read-only.

Do not run `/course-check` before class; that command is the first controlled lab exercise.

## Privacy rule

Do not provide the course agent with grades, NYU IDs, roster data, attendance, accommodations, private feedback, student email addresses, private messages, passwords, tokens, or identifiable recordings without permission. Use public, synthetic, consented, or explicitly authorized data.

## Troubleshooting

| Symptom | Next action |
|---|---|
| `opencode` is not recognized | Close and reopen the terminal, then confirm the installation directory is on `PATH`. On Windows, use WSL or a documented native install. |
| OpenRouter is missing | Run `/connect` again and select OpenRouter, then check `opencode auth list`. |
| Model not found | Run `/models` and verify the exact model ID. Save the error; model catalogs can change. |
| `401` | Reconnect with a valid key. |
| `402` | Check the key's credit and spending limit. |
| Course files cannot be read | Confirm the two repository folders have the exact sibling names shown above. |
| The agent requests access outside the two course folders | Reject the request and show the instructor. |
| Setup remains blocked | Bring the exact error. Use the paired workstation fallback during the lab. |

Model availability and provider pricing can change. The instructor will verify the model entry before class and announce a course fallback if necessary.
