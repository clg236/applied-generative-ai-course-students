# Applied Generative AI · student repository

This public repository contains the course material currently released to students and the contribution workflow for course work.

The complete instructor source is kept in a separate private repository. Future sessions, instructor notes, answer keys, and private course operations are never published here until they are intentionally released.

## Everything you push here is public

Do not commit grades, NYU IDs, email addresses, attendance, accommodations, private feedback, learning profiles, credentials, `.env` files, private messages, or identifiable field media. Use Brightspace or another instructor-approved private channel when work cannot be public.

## Start with a fork

Install and authenticate the [GitHub CLI](https://cli.github.com/), then create and clone your own fork:

```text
gh auth login
gh repo fork clg236/applied-generative-ai-course-students --clone
cd applied-generative-ai-course-students
node scripts/init-student.mjs
```

The fork is your writable copy. The original repository is called the upstream repository.

Create a branch before asking the course agent to edit anything:

```text
git switch -c work/<github-login>/session-01-agent-check
node scripts/start-course-agent.mjs
```

Replace `<github-login>` with your GitHub username in lowercase.

## Where work belongs

Your agent may write only inside:

```text
student-work/<github-login>/session-work/
student-work/<github-login>/submissions/
```

Course files and another student's folder are read-only. The launcher injects an owner-specific edit rule for your GitHub login; the commit and pull-request checks independently enforce the same boundary. Personal agent preferences belong in the ignored `.course-local/` folder and must not be submitted.

## Review and submit

The agent may prepare a commit and draft pull request only after you inspect the complete diff and approve each step.

```text
node scripts/validate-local-work.mjs
node scripts/commit-work.mjs "Add Session 1 agent check"
git push -u origin HEAD
gh pr create --repo clg236/applied-generative-ai-course-students --base main --draft
```

A pull request starts a review. It does not merge the work. The repository check permits only the author's `session-work/` and `submissions/` folders and scans submitted files for common credential patterns.

At the start of each class, sync your fork from the upstream repository. GitHub's **Sync fork** button is the simplest option, or use:

```text
git fetch upstream
git switch main
git merge --ff-only upstream/main
git push origin main
```

Read [CONTRIBUTING.md](CONTRIBUTING.md) for the complete workflow and [setup/setup-guide.md](setup/setup-guide.md) for course setup.
