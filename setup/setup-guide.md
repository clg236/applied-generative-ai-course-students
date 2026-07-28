# Course setup guide

**Applied Generative AI · SHBI-GB 7151 · Summer 2026**

This guide has two parts, and they happen at different times.

- **Part 1 — before Tuesday, July 28.** A browser and an OpenRouter account. About fifteen minutes. No installs, no terminal. Adding about $5 of credit is recommended but optional.
- **Part 2 — before Session 4 on Tuesday, August 4.** Node.js, Git, GitHub CLI, OpenCode, a funded OpenRouter API key, and your fork of the student repository. **Do not do this before the Session 4 instructions are released.**

Bring a charged laptop and a charger on Day 1.

---

# Part 1 · Before Tuesday, July 28

Day 1 is done entirely in a web browser. You need two things: a browser you can sign in with, and a free OpenRouter account.

## Ready means

Part 1 is complete when you can:

- open [openrouter.ai](https://openrouter.ai/) and sign in to your own free account;
- open [openrouter.ai/models](https://openrouter.ai/models) and see the model catalog with its left filter rail;
- open [openrouter.ai/chat](https://openrouter.ai/chat), the chat playground;
- click **Add Model** and see the model picker with its search box; and
- type `free` into that search box and see at least one model whose name ends in **(free)**.

That is the whole requirement. If you can do those five things, you are ready for Tuesday.

## 1 · A browser

Any current browser on a laptop you can bring to class. A phone is not a substitute — you will be reading two model outputs side by side and copying text out of them.

## 2 · A free OpenRouter account

[OpenRouter](https://openrouter.ai/) provides access to many models through one account. Create a free account — signing up is free even for the free models, so this step is required either way.

**Recommended: add about $5 of credit once you are in.** You will not spend most of it when you choose inexpensive models. Read each model card's current input and output prices and calculate your actual Project 1 cost; do not rely on a quoted estimate because the roster and prices change. The reason to add credit is reliability: the free tier is rate-limited and frequently truncates a response mid-sentence, which is a slow and confusing way to do an assignment.

**You can still complete everything for $0**, and doing so is not penalised. Project 1 still requires one confirmed open-weights model and one closed model across its three runs; the `(free)` label alone does not establish which type a model is. Check the model card. If the closed side available to you would require payment, message me privately for the no-cost route. There is an alternative and it is not a penalty.

**Do not create an API key yet.** An API key is for software making requests on your behalf, which is Part 2. The Week 1 work runs in the playground under your account login, and a key you create early is just a secret sitting around waiting to leak.

If anything at any point in this course asks you for a credit card in order to complete graded work, that is a mistake or it is not from me. Stop and ask.

## 3 · Look around before class

Optional, five minutes, and it makes Tuesday easier.

- On [openrouter.ai/models](https://openrouter.ai/models), open one model card and find its context window and its price in dollars per million input tokens and dollars per million output tokens. The prices are public and they differ by more than you would guess.
- On [openrouter.ai/chat](https://openrouter.ai/chat), add two models and send one of the sample prompt chips at the bottom of the empty screen to both at once. Watch two models disagree about something trivial. That is the whole course in one screen.

## Week 1 safety rules

These are short and they are not optional.

- **Do not paste credentials into a chat playground.** No API keys, no passwords, no tokens. Anything you type there leaves your laptop and reaches a model provider.
- **Do not paste personal, confidential, or proprietary information** into any model. Use public, synthetic, consented, de-identified, or explicitly authorized material. This applies to your employer's data, your colleagues' data, and other people's data most of all.
- **Read the outputs.** The playground says it plainly at the bottom of the page: "Responses are AI-generated and can be inaccurate. Review all outputs before relying on them."
- **If cost is a barrier of any size, contact me privately.** That conversation does not happen in the room, and it never involves you telling me a billing reason.

---

# Part 2 · The toolchain session

**Scheduled session: Tuesday, August 4, 9:00 AM–12:00 PM.** This section covers the local development toolchain and the OpenCode agent lab, which moved out of Day 1 and into Session 4. Complete it after the instructor releases the Session 4 setup instructions — not before Day 1.

Nothing in Week 1 depends on any of it. If you install it early out of enthusiasm, nothing breaks; you just will not use it yet.

If a step fails, keep the exact command, current folder, and complete error so we can diagnose it. If a step remains blocked for more than ten minutes, save the exact error and contact the instructor through the course help channel.

## Toolchain ready means

The toolchain session's setup is complete when you can:

- open a terminal and use `pwd`, `ls`, and `cd`;
- run `node --version`;
- run `git --version`;
- run `gh auth status`;
- run `opencode --version`;
- open your fork of the public student repository;
- run `node scripts/start-course-agent.mjs --check-only` successfully;
- connect OpenCode to your own capped OpenRouter key; and
- select `openrouter/deepseek/deepseek-v4-flash`.

## 1 · Open a terminal and install Node.js

Use PowerShell or Windows Terminal on Windows, or Terminal on macOS.

Confirm that you can locate a folder:

```text
pwd
ls
```

The course repository uses small Node.js scripts for setup and safety checks. Install the current Node.js long-term-support release from [nodejs.org](https://nodejs.org/) if needed, reopen the terminal, and confirm:

```text
node --version
```

Do not use an administrator command you do not understand merely to make an error disappear.

## 2 · Install Git and GitHub CLI

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

## 3 · Install OpenCode

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

## 4 · Create and fund an OpenRouter API key

This is the point where the free account from Part 1 needs a key and some credit. Not before.

An **API key** is a secret credential that software sends with a request so a service can identify the account, decide whether the request is allowed, and apply usage limits and billing. It is not the model, and it does not make an output correct or private.

**Credit and a spending limit are two different things, and you need both.** Credit is money in the account that pays for requests. A spending limit is a ceiling that stops the key once it has spent that much. A limit is not credit. A key on an account with a limit but no credit is not "capped and ready" — it is unfunded, and its very first request fails with `402`.

Fund the account first, in this order:

1. Sign in to the account you created in Part 1.
2. **Add five dollars of credit** at [openrouter.ai/credits](https://openrouter.ai/credits). This is an actual payment. Five dollars covers the planned exercises with room to spare.
3. Confirm the account balance now reads about `$5.00` and not `$0.00`. Do not continue until it does.
4. Create a key named `stern-course-agent`.
5. Set a five-dollar spending limit on that key. This caps what the key can spend; it does not add money.
6. Copy the key once and keep it private.

Never paste the key into a repository file, GitHub issue, pull request, screenshot, shared document, chat transcript, chat playground, or assignment. If it is exposed, revoke it and create a replacement.

If this cost creates a barrier, contact the instructor privately for an alternative.

## 5 · Fork and clone the student repository

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

Stop after confirming the remotes and a clean `git status`. The agent lab initializes your student-work folders and creates the first work branch together, in the room. Do not run `node scripts/init-student.mjs` before that session.

This fork is also the submission route for Project 2 onward. Project 1 is presented in class with its evidence uploaded to Brightspace as a single file, and needs none of this.

### Sync your fork at the start of every class

A fork is a snapshot taken the moment you created it. Course material added or corrected after that moment is not in your copy until you pull it in. Run this at the start of every class after you have a fork:

```text
cd applied-generative-ai-course-students
git switch main
git fetch upstream
git merge --ff-only upstream/main
```

`git fetch upstream` downloads the shared repository's latest state without changing your files. `git merge --ff-only upstream/main` moves your `main` forward to match it, and refuses rather than inventing a merge if your history has diverged.

Keep your own work on a `work/<github-login>/<task>` branch, never on `main`, so `--ff-only` always succeeds. If the merge is refused, do not try to repair it during class — say so and use the paired workstation path.

## 6 · Connect OpenCode to OpenRouter

**Sections 6 and 7 are the opening of the agent lab, and we run them together in the room.** Attempt them at home only if sections 1–5 already pass. It is fine to arrive with OpenCode installed and your key created but not yet connected — that is the expected state.

Start OpenCode from the root of your fork:

```text
node scripts/start-course-agent.mjs
```

Use this launcher for course work. It derives your GitHub login from the fork remotes and gives OpenCode edit permission only for your own public `session-work/` and `submissions/` folders plus the ignored `.course-local/` folder. `.course-local/` is local-only, not a credential store.

Inside OpenCode:

1. Run `/connect`.
2. Choose **OpenRouter**.
3. Paste your own capped OpenRouter API key into the provider authentication prompt.
4. Run `/models`.
5. Select **DeepSeek V4 Flash**.

The configured model should display as:

```text
openrouter/deepseek/deepseek-v4-flash
```

OpenCode stores provider authentication outside the repository. Do not create a key file inside the fork.

## 7 · Check the public repository boundary

Ask the agent:

> Read `AGENTS.md`, inspect the `origin` remote to determine my GitHub login, and tell me the only folders you may edit. Cite the instruction path. Do not create or edit anything.

A correct answer names your own:

```text
student-work/<github-login>/session-work/
student-work/<github-login>/submissions/
```

It must also say that course files and other students' folders are read-only. Do not run `/course-check` before class; that command is the first controlled lab exercise.

## Public-work rule

Everything pushed to the repository or your fork is public. Never publish grades, NYU IDs, email addresses, attendance, accommodations, private feedback, learning profiles, credentials, private messages, proprietary records, or identifiable field media. Use public, synthetic, consented, de-identified, or explicitly authorized evidence. Use an instructor-approved private channel when work cannot be public.

---

# Troubleshooting

## Part 1 · Browser and account

| Symptom | Next action |
|---|---|
| Cannot create or sign in to an OpenRouter account | Try a different browser or a private window with extensions disabled, then email the instructor before class. Do not create a second account to work around it. |
| The chat playground shows no models | Add one with the **Add Model** button. The playground starts empty by design. |
| No `(free)` models appear in the picker | Clear any filters and search the picker for `free`. The free roster changes, so the exact names on any slide may be stale; report what you actually see. |
| Something asks for a credit card | Stop. Nothing graded in Week 1 requires payment. Ask the instructor. |

## Part 2 · Key and model errors: 401, 402, model not found

These three are the errors that stop the agent lab. Read this table before that session and keep it open during the lab.

| Error | What it means | Next action |
|---|---|---|
| `401` | The key was not accepted. | Run `/connect` again and paste the key. If it still fails, revoke the key on OpenRouter and create a replacement. |
| `402` | The account is out of money, or was never funded. A spending limit is not credit. | Add credit at [openrouter.ai/credits](https://openrouter.ai/credits) and confirm the balance is above `$0.00`, then retry. |
| Model not found, or no endpoints found | The model ID is wrong, or the catalog changed. | Run `/models` and confirm the exact ID. If the instructor has announced a fallback model, quit OpenCode and relaunch with `node scripts/start-course-agent.mjs --model openrouter/<announced-fallback-slug>`. |

Save the exact error text before you change anything. The error is the evidence, and a screenshot of it is more useful than a description of it.

Never show anyone your key, including the instructor. Show the selected model name and the error text instead.

## Part 2 · Everything else

| Symptom | Next action |
|---|---|
| `gh` is not recognized | Reopen the terminal and confirm GitHub CLI is installed and on `PATH`. |
| GitHub authentication fails | Run `gh auth login` again, choose HTTPS and browser authentication, then run `gh auth status`. |
| `opencode` is not recognized | Reopen the terminal and confirm the installation directory is on `PATH`. On Windows, use WSL or a documented native install. |
| OpenRouter is missing | Run `/connect` again and select OpenRouter, then check `opencode auth list`. |
| `Cannot find module ... scripts/...` | You are in the wrong folder. `cd` into the folder you cloned and confirm with `pwd` and `git remote -v`. |
| `git merge --ff-only` is refused | Your `main` has diverged. Do not repair it during class; use the paired workstation path. |
| `init-student` rejects the remote | Confirm `origin` is your personal fork, not the upstream course repository. |
| The agent requests a course file or another student's path | Reject the request and show the instructor. |
| Setup remains blocked | Bring the exact error and use the paired workstation path below. |

## The paired workstation path

If your setup is still blocked after ten minutes of the agent lab, you do not sit and watch. Sit with your assigned pair partner and work on their machine:

- The partner's fork and the partner's key are used. You never enter your own key on their laptop, and they never enter theirs on yours.
- You operate for one full pass — `init-student`, branch, launcher, `/connect`, `/course-check` — then you swap and they operate.
- Keep your own notes in `.course-local/` on your own laptop.
- Complete the lab on your own fork afterward, once your setup is fixed.

Tell the instructor the category of the blocker only — the failing command and the error. Never a key, never a card, never a billing reason. If cost is the barrier, contact the instructor privately; that conversation does not happen in the room.

Model availability and provider pricing can change. The instructor will verify the model before class and announce a fallback if necessary.
