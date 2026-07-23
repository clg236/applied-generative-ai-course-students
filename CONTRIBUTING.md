# Contributing course work

Student work enters this repository through a pull request from a personal fork. A pull request is public and must contain only material that is safe to publish.

## 1. Sync and branch

Keep `main` aligned with the upstream course release. Do all work on a branch:

```text
git fetch upstream
git switch main
git merge --ff-only upstream/main
git push origin main
git switch -c work/<github-login>/<short-task-name>
```

## 2. Use only your folder

Permitted paths are:

```text
student-work/<github-login>/session-work/
student-work/<github-login>/submissions/
```

The folder name must match the GitHub account that opens the pull request. Use the account login, not a real name, email address, or NYU identifier.

For pair work, one student owns the pull request. Mention a partner only by GitHub handle and only with permission.

## 3. Keep private material out

Do not publish credentials, grades, feedback, attendance, accommodations, student identifiers, private messages, learning profiles, proprietary records, or identifiable field media. Raw media belongs outside Git. Commit a de-identified manifest or description when permitted.

## 4. Review the agent's work

Before approving a commit:

```text
git status --short
git diff
node scripts/validate-local-work.mjs
```

Use the bounded commit wrapper after the complete diff is correct:

```text
node scripts/commit-work.mjs "Describe one coherent change"
```

## 5. Open a draft pull request

Push only after reviewing the commit:

```text
git show --stat
git push -u origin HEAD
gh pr create --repo clg236/applied-generative-ai-course-students --base main --draft
```

Explain what changed, what evidence or tests you used, what remains uncertain, and what the reviewer should inspect. The agent may draft this text; the student verifies it and approves publication.

The instructor reviews pull requests. Grades and private feedback remain in Brightspace.
