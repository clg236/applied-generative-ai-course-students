---
title: Day 1 · Morning Guide
eyebrow: Tue Jul 28 · 9:00 AM–12:00 PM · KMC 2-70
summary: Meet the class, define AI, investigate the airline case, and create a course agent in your public fork.
---

# Day 1 · Morning

## By noon

You should be able to:

1. Explain the relationship among AI, machine learning, deep learning, and generative AI.
2. Separate a generated claim from the evidence that supports it.
3. Identify where a model sits inside a larger business system.
4. Explain the practical difference between a chatbot and an agent.
5. Distinguish Git from GitHub and explain commits, branches, forks, and pull requests.
6. Describe what enters an LLM's current context.
7. Use your course agent to create one bounded public artifact, inspect the diff, and prepare a draft pull request you approve.

## Schedule

| Time | Work |
|---|---|
| 9:00–9:12 | Christian, the course, schedule, and main project |
| 9:12–9:35 | Room introductions |
| 9:35–9:57 | What is AI? + *CRAFT* |
| 9:57–10:05 | Airline-case primer |
| 10:05–10:15 | **Break** |
| 10:15–10:45 | The Broken Oracle airline SIM |
| 10:45–11:00 | Live classification polls |
| 11:00–11:10 | **Break** |
| 11:10–11:25 | Chatbot, agent, and context |
| 11:25–11:40 | Source control, Git, GitHub, and pull requests |
| 11:40–12:00 | Run the course-agent check and prepare a bounded draft pull request |

## Your introduction

Please give us:

1. your name;
2. one concrete way you have used AI; and
3. one way you think you may use it in the future.

About 45 seconds is enough. If you have not used AI directly, describe a use you have observed.

## The Broken Oracle

In a team, investigate an airline assistant whose answer conflicts with the published policy. Your instructor assigns the team and analytic role.

The public case does not establish the chatbot's technical architecture. Do not assume that an LLM caused the failure. Use the evidence to identify the consequential claim, map plausible failure locations, change one system component, test a representative and failure case, and state where human review is required.

## Your course agent and fork

You will use:

- OpenCode;
- OpenRouter;
- `openrouter/deepseek/deepseek-v4-flash`;
- the public student repository containing released material; and
- your fork and work branch.

The model does not automatically know the repository. The agent reads selected files into its current context and should cite those paths.

Run `/course-check`. It creates:

```text
student-work/<github-login>/session-work/session-01/agent-check.md
```

Inspect every changed path and the complete diff. You decide whether the file is correct and separately approve the commit, push, and draft pull request.

## Public repository rules

- Everything pushed to the repository or your fork is public.
- Never publish grades, NYU IDs, email addresses, attendance, accommodations, private feedback, learning profiles, credentials, `.env` contents, private messages, proprietary records, or identifiable field media.
- Course files and other students' folders are read-only.
- Your agent writes only under your `student-work/<github-login>/session-work/` or `student-work/<github-login>/submissions/` path.
- A branch separates changes; it does not make them private.
- The agent may prepare a commit and draft pull request. You review and approve them. The agent never merges.

## Morning output

Before noon, have either:

- a draft pull request containing `student-work/<github-login>/session-work/session-01/agent-check.md`; or
- a short local blocker record containing the exact setup error and next recovery step.

Bring the working fork back for the afternoon Field-to-Agent Sprint.
