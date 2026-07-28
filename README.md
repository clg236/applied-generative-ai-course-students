# Applied Generative AI · student repository

This public repository contains the course material currently released to students and the contribution workflow for course work.

The complete instructor source is kept in a separate private repository. Future sessions, instructor notes, answer keys, and private course operations are never published here until they are intentionally released.

## Week 1 does not need any of this

**Sessions 1–3 run in a browser on an [openrouter.ai](https://openrouter.ai/) account.** No terminal, no Node.js, no Git, no GitHub CLI, no fork, no clone, and no API key. Signing up is free; about $5 of credit is recommended but not required, because the free tier is rate-limited and truncates responses.

**Project 1 · The Switch Test is a pair project, presented in three minutes at the start of Session 3**, with its supporting evidence uploaded to **Brightspace** as one PDF or one zip beforehand. It is not a repository submission. Nothing below applies to it.

Everything on this page is taught in **Session 4 (Tue Aug 4)** and becomes the submission route from **Project 2 onward**. You are welcome to read ahead, but please do not install anything before the Session 4 instructions go out — you will not need it, and a half-finished setup is harder to fix in class than a clean one.

## Everything you push here is public

Do not commit grades, NYU IDs, email addresses, attendance, accommodations, private feedback, learning profiles, credentials, `.env` files, private messages, or identifiable field media. Use Brightspace or another instructor-approved private channel when work cannot be public.

## Start with a fork · Session 4

Install and authenticate the [GitHub CLI](https://cli.github.com/), then create and clone your own fork:

```text
gh auth login
gh repo fork clg236/applied-generative-ai-course-students --clone
cd applied-generative-ai-course-students
```

The fork is your writable GitHub copy. The clone is the copy on your computer. The original shared repository is called the upstream repository. The Tools of the Trade activity stops here, after verifying `git status` and `git remote -v`.

## Start the course agent · Session 4

From the root of your cloned fork, initialize your work folders and create a branch before asking the course agent to edit anything:

```text
node scripts/init-student.mjs
git switch -c work/<github-login>/session-04-agent-check
node scripts/start-course-agent.mjs
```

Replace `<github-login>` with your GitHub username in lowercase.

## Where work belongs

Your agent may write only inside:

```text
student-work/<github-login>/session-work/
student-work/<github-login>/submissions/
```

Course files and another student's folder are read-only. The launcher allows public edits only in your approved `session-work/` and `submissions/` folders; the commit and pull-request checks independently enforce the same boundary. Personal agent preferences belong in the ignored `.course-local/` folder and must not be submitted. That folder is local-only, not a credential store.

## Review and submit · Project 2 onward

The agent may prepare a commit and draft pull request only after you inspect the complete diff and approve each step.

```text
node scripts/validate-local-work.mjs
node scripts/commit-work.mjs "Describe the bounded change"
git push -u origin HEAD
gh pr create --repo clg236/applied-generative-ai-course-students --base main --draft
```

A pull request starts a review. It does not merge the work. The repository check permits only the author's `session-work/` and `submissions/` folders and scans submitted files for common credential patterns.

## Sync your fork at the start of every class

Your fork is a snapshot taken when you created it. Course material added or corrected afterwards is not in your copy until you pull it in. Run this at the start of every class from Session 4 onward:

```text
cd applied-generative-ai-course-students
git switch main
git fetch upstream
git merge --ff-only upstream/main
```

`git merge --ff-only` refuses rather than inventing a merge if your history has diverged. Keep your own work on a `work/<github-login>/<task>` branch, never on `main`, so it always succeeds. If it is refused, do not try to repair it during class.

Read [CONTRIBUTING.md](CONTRIBUTING.md) for the complete workflow and [setup/setup-guide.md](setup/setup-guide.md) for course setup.
