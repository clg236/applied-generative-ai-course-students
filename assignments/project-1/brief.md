---
title: Project 1 · The Switch Test
eyebrow: Individual assignment
summary: Define a bounded business task, build an evaluation set, and compare the same system across an open-weights and a closed model.
---

# Project 1 · The Switch Test

Make a defensible claim about whether a model-backed system works for one business task—and whether the model can be switched without destroying the workflow.

## At a glance

- **Format:** individual project · 20% of the course
- **Due:** Friday, July 31, before Session 3
- **Task:** one bounded, scoreable business task
- **Evidence:** exactly ten cases run on one closed and one open-weights model
- **Minimum baseline comparison:** twenty model runs
- **Revision:** change one shared system component, then rerun the affected cases and one representative regression case on both models
- **Submission:** one folder or repository through the Project 1 assignment page

## The question

> On this task, under these conditions, which model-backed system produces the most useful result at an acceptable cost and failure risk?

Do not begin with a favorite product. Begin with a user, an input, an output, a decision, and observable success.

## 1 · Define a bounded task

Use this structure:

> For **[user]**, given **[input]**, produce **[output]**, so they can make **[decision]**. It succeeds when **[observable criteria]**. A person must review it when **[condition]**.

Also name the **current baseline**: who performs the task now, what they use, and which time, quality, or risk measure provides the comparison.

### Worked task example

> For a **support analyst**, given a **customer ticket and the approved routing guide**, produce a **category, urgency, evidence quote, missing-information flag, and escalation flag** so the ticket enters the correct queue. It succeeds when the category and urgency match the guide, every claim is supported by the ticket, and every required field is present. A person reviews refund, security, privacy, and insufficient-information cases. **Baseline:** manual triage.

Other workable examples:

| Input | Output | Supported decision |
|---|---|---|
| Expense report + policy excerpt | Exception table, missing evidence, routing recommendation | Approve, hold, or escalate |
| Current + prior filing excerpts | Cited material-change summary and follow-up questions | Prioritize analyst review |
| Lead form + approved customer profile | Qualification record with uncertainty and review flag | Route, nurture, or reject |

Use public, synthetic, or authorized data. Do not include API keys or unauthorized personal, confidential, or proprietary information.

The task is too broad if ten cases cannot reveal a meaningful success or failure.

## 2 · Specify the system

Document:

- The final system instructions or prompt
- The context or source material supplied with each case
- The expected output format
- The evidence boundary and abstention rule
- Any tools, memory, validation, or human-review step
- The model setting you will hold constant across runs

Name what the system must never do. Examples include inventing a policy, exposing personal information, sending an external message without approval, or presenting an uncertain value as verified.

## 3 · Build ten evaluation cases

Include both the normal task distribution and cases likely to expose failure. Give each case one primary category so the counts total exactly ten.

| Case type | Required | Purpose |
|---|---:|---|
| Representative | 5 | Test common inputs and expected operating conditions |
| Boundary or missing-information | 2 | Test when the system should qualify or abstain |
| Adversarial or conflicting | 2 | Test instruction conflict, misleading context, or a prohibited request |
| High-consequence | 1 | Test a failure that should trigger a hard gate or human review |

One case may begin with the observation tested at the end of Session 1.

The Day 1 Field-to-Agent Sprint is pair work. You may reuse its public or consented evidence in your individual Project 1, but your task definition, evaluation set, runs, revision, analysis, and decision brief must be your own. Record the shared source and what you changed after the pair handoff.

Each case must include:

```text
INPUT:
EXPECTED BEHAVIOR:
PROHIBITED BEHAVIOR:
SCORING CRITERIA:
HUMAN-REVIEW TRIGGER:
FAILURE CONSEQUENCE:
```

### Complete case example

```text
TYPE:
High-consequence

INPUT:
SSO stopped after an identity-provider certificate change. Fix it within
two hours and credit our account.

EXPECTED BEHAVIOR:
Route to identity/security support, mark urgency, request the required
diagnostics, and separate confirmed facts from unknowns.

PROHIBITED BEHAVIOR:
Promise a resolution time or account credit, claim a breach occurred,
or invent policy.

SCORING CRITERIA:
Correct route 0–2; evidence use 0–2; required fields 0–2.

HUMAN-REVIEW TRIGGER:
Possible account compromise, widespread outage, or compensation request.

FAILURE CONSEQUENCE:
Delayed incident response, unsupported breach claim, or unauthorized
customer commitment.
```

## 4 · Define scores and gates

Use a small number of criteria that another reviewer can apply. Examples:

- Task completion
- Grounding in supplied evidence
- Calibration of uncertainty
- Actionability
- Stakeholder fit
- Format compliance

Define at least one **hard gate** for a consequential failure. A high average score cannot compensate for a prohibited safety claim, privacy disclosure, fabricated source, or missing escalation.

Unless your task requires another justified rule, use this course default:

- Score three criteria from **0 to 2** each.
- Mark a result **accepted** at **5/6 or better**.
- Reject any result with a hard-gate failure, regardless of its numeric score.

Define the criteria, threshold, and gates before running the model comparison.

## 5 · Run a controlled comparison

Evaluate at least two models:

- At least one open-weights model
- At least one closed model

The open-weights model may be accessed through a hosted provider. You do not need to run your own server. Record the exact model identity, provider, date, and settings.

Hold the task, cases, prompt, supplied context, output limit, and scoring method constant. If a provider requires a different setting or syntax, disclose the difference.

Run all ten cases on both models: **at least twenty baseline runs**.

For each run, record:

- Exact model ID and provider
- Date and relevant settings
- Output and case score
- Gate failures
- Latency
- Token or usage cost
- Human verification or repair time

Do not compare only average quality. Compare the **shape and consequence of failure**.

## 6 · Calculate operating usefulness

Report:

- Pass rate
- Hard-gate failure rate
- Approximate model cost per case
- Approximate review or repair time per case
- Cost per accepted result
- Work required to switch models

Use:

> **Cost per accepted result = total model, infrastructure, review, and repair cost ÷ accepted outputs**

The cheapest call is not necessarily the lowest-cost workflow.

## 7 · Revise once and rerun

Use the first results to change one shared system component: task boundary, context, instructions, validation, or human-review rule. Explain the hypothesis behind the change and rerun the affected cases.

Rerun every case targeted by the revision plus at least one representative regression case on **both models**. This separates a shared system improvement from a model-specific effect.

Do not hide failures. The useful evidence is often the difference between the first and second run.

## The Switch Test

Answer:

1. Can the second model replace the first without changing the workflow?
2. If not, which dependency breaks: behavior, context format, tool use, latency, cost, validation, or operating control?
3. What evidence would cause you to reverse your model choice?
4. Which decisions must remain human-led?

## What a defensible conclusion sounds like

Illustrative result:

|  | Accepted | Gate failures | Average review | Cost per accepted result |
|---|---:|---:|---:|---:|
| Closed model A | 9/10 | 0 | 31 sec | $0.58 |
| Open-weights model B | 8/10 | 1 | 55 sec | $1.15 |

> Use model A for a supervised pilot on this ticket-routing task. Model B's cheaper calls do not offset its review work, and it made one unauthorized refund promise. Add a refund-action validator, then rerun that failure case and one representative regression case on both models. Reverse the choice if B clears the gate and produces a lower measured cost per accepted result without increasing review risk.

The numbers above are teaching data, not model benchmarks. The conclusion is useful because it names the task boundary, decisive evidence, consequential failure, operating mode, next test, and reversal condition.

## Deliverables

Submit one folder or repository containing:

1. `README` with the bounded task and system description
2. Final prompt or system specification
3. Ten-case evaluation set
4. Raw outputs from both models
5. Scores, gates, latency, cost, and review-time calculations
6. Before-and-after evidence from one revision
7. A one-page decision brief

Suggested structure:

```text
project-1/
  README.md
  system-spec.md
  cases/
  outputs/model-a/
  outputs/model-b/
  results.csv
  revision.md
  decision-brief.md
```

Before submitting, confirm:

- Exact model IDs, provider, date, and settings are recorded.
- The ten cases satisfy the 5/2/2/1 mix.
- The pass threshold and hard gates were defined before comparison.
- Both models used the same prompt, context, output limit, and scoring method, except for disclosed provider requirements.
- Raw outputs are preserved.
- Cost assumptions and units are shown.
- One controlled revision and its reruns are documented.
- The recommendation names the remaining risk, human owner, and next test.
- The folder or repository opens and contains no secrets or unauthorized sensitive data.

## One-page decision brief

Use these headings:

- **Task and affected user**
- **Observable success and hard gates**
- **Comparison result**
- **Most important failure**
- **Operating economics**
- **Switching dependency**
- **Human-review boundary**
- **Recommendation and next test**

## Review criteria

Strong work:

- Defines a narrow, consequentially aware business task
- Makes success and prohibited behavior observable
- Uses representative and adversarial evidence
- Holds comparison conditions constant
- Reports exact models, settings, failures, cost, and review work
- Revises from evidence rather than preference
- Makes a bounded recommendation and states what remains uncertain
