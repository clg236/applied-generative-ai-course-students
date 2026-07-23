---
title: Day 1 · Morning Guide
eyebrow: Tue Jul 28 · 9:00 AM–12:00 PM · KMC 2-70
summary: Meet the class, define AI, investigate the airline case, and create your private course agent.
---

# Day 1 · Morning

## By noon

You should be able to:

1. Explain the relationship among AI, machine learning, deep learning, and generative AI.
2. Separate a generated claim from the evidence that supports it.
3. Identify where a model sits inside a larger business system.
4. Explain the practical difference between a chatbot and an agent.
5. Describe what enters an LLM's current context.
6. Use your course agent to read released material, create one bounded file, inspect the diff, and prepare a commit you approve.

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
| 11:10–11:25 | Chatbot, agent, LLM, and context |
| 11:25–12:00 | Create your course agent and prepare one bounded commit |

## Your introduction

Please give us:

1. your name;
2. one concrete way you have used AI; and
3. one way you think you may use it in the future.

About 45 seconds is enough. If you have not used AI directly, describe a use you have observed.

## The Broken Oracle

In a team, investigate an airline assistant whose answer conflicts with the published policy. Your instructor assigns the team and analytic role.

The public case does not establish the chatbot's technical architecture. Do not assume that an LLM caused the failure. Use the evidence to:

- identify the consequential claim;
- map plausible failure locations;
- change one system component;
- test a representative and a failure case; and
- state where human review is required.

## Your course agent

You will use:

- OpenCode;
- OpenRouter;
- `openrouter/deepseek/deepseek-v4-flash`;
- a read-only student-materials repository; and
- a separate private workspace repository.

The model does not automatically know the repository. The agent reads selected files into its current context and should cite those paths when answering course questions.

Run `/course-check`. It creates:

```text
session-work/session-01/agent-check.md
```

Inspect every changed path and the complete diff. You decide whether the file is correct and whether the commit or push should happen.

## Privacy and repository rules

- Never give the agent grades, NYU IDs, roster data, attendance, accommodations, private feedback, student email addresses, private messages, credentials, or `.env` contents.
- Use public, synthetic, consented, or explicitly authorized data.
- Course materials are read-only.
- Your agent writes only under `session-work/`, `submissions/`, or `status/agent-status.json` in your private workspace.
- A permission file is a guardrail, not security. Private repositories, protected branches, checks, and human review enforce the boundary.
- The agent may prepare a commit; you review and approve it.

## Morning output

Before noon, have either:

- a reviewed local commit containing `session-work/session-01/agent-check.md`; or
- a short blocker record containing the exact setup error and the next recovery step.

Bring the working workspace back for the afternoon Field-to-Agent Sprint.

