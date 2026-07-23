---
description: Verify course context and create the Session 1 agent check
agent: course-agent
---

Read `AGENTS.md`, the current Session 1 student guide, and the Project 1 brief. Run `node scripts/init-student.mjs` to confirm the fork owner's GitHub login.

Tell me:

1. What is due next?
2. What public path should contain it?
3. What is one privacy or evidence rule I must follow?

Cite a repository path for each answer. Then create:

`student-work/<github-login>/session-work/session-01/agent-check.md`

The file must contain the three answers and citations, one unresolved question, the exact model ID, the next action, and a statement that no other path was modified.

Show `git diff --name-only` and the complete file diff. Do not commit, push, or open a pull request until I approve each step.
