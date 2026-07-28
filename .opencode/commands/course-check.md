---
description: Verify course context and create the Session 4 agent check
agent: course-agent
---

Read `AGENTS.md`. Then read the current session guide under `sessions/` and the brief for the next assignment under `assignments/` if they are present in this repository. If either is missing, use whatever course files are present, tell the student their fork is out of date, and never cite a path you have not actually read.

Run `node scripts/init-student.mjs` to confirm the fork owner's GitHub login.

Tell me:

1. What is due next?
2. How is it submitted — Brightspace, or a pull request from this repository?
3. If it is a pull request, what public path should contain it?
4. What is one privacy or evidence rule I must follow?

Cite a repository path for each answer. Be exact about the route: **Project 1 is presented in pairs in class, and its evidence goes to Brightspace as one PDF or one zip and never enters this repository.** The fork, branch, and pull-request route applies from Project 2 onward.

Then create the local-only readiness record:

`.course-local/session-04-agent-check.md`

The file must contain the four answers and citations, the exact approved public write path for this student, one unresolved question, the exact model ID, the next action, and a statement that no other path was modified. Do not include credentials or private student information.

Show the complete contents of the new file and `git status --short`. Git status should remain clean because `.course-local/` is excluded from Git. Do not stage, commit, push, or open a pull request until I approve each step.
