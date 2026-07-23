---
title: Session 1 Lecture Workbook
eyebrow: From Model Output to Business System
summary: Reusable worksheets for tracing claims, locating failures, designing evaluations, comparing operating cost, and recording controlled demonstrations.
---

# Session 1 Lecture Workbook

Use these worksheets during the lecture, Agent Lab, and Project 1 setup. Keep the case fixed when comparing system changes. Record evidence before making a release or model decision.

## 1. Claim traceability board

Use one row for each factual claim, estimate, instruction, or recommendation in an output.

**Support status**

- **Supported:** the approved source directly supports the claim.
- **Unsupported:** the output adds a claim that the approved source does not establish.
- **Conflicting:** the claim contradicts an approved source.
- **Unknown:** the available record is insufficient to decide.

| Claim / instruction | Source / gap | Status | Actor | If wrong | Control / owner |
|---|---|---|---|---|---|
| Example: “Submit after travel and the fare can be adjusted retroactively.” | Published policy requires approval before travel | Conflicting | Traveler buying two tickets | Customer relies on an ineligible path and incurs avoidable cost | Block the promise; fare-policy owner resolves the source conflict and customer operations owns escalation |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |

**Decision:** Which claims can be released now? Which must be removed, verified, or escalated?

> Release boundary:

## 2. System diagnosis canvas

### Define the task

| Field | Record |
|---|---|
| Intended user |  |
| Decision or job |  |
| Required output |  |
| Approved evidence |  |
| Observable success |  |
| Prohibited failure |  |
| Human-review trigger |  |

### Map the system

Write the actual path from input to action. Add missing steps instead of assuming they exist.

```text
INPUT → CONTEXT / RETRIEVAL → INSTRUCTIONS → MODEL → TOOLS → WORKFLOW → VALIDATION → HUMAN REVIEW → ACTION
```

### Locate the likely failure

Mark the first layer that could explain the observed result.

- [ ] Task definition: the job or success condition is unclear.
- [ ] Context or retrieval: required evidence is absent, stale, or irrelevant.
- [ ] Instructions: the rules permit the failure or conflict with one another.
- [ ] Model: capability or behavior is insufficient under the fixed conditions.
- [ ] Tool or data layer: a source, calculation, or action failed.
- [ ] Workflow: steps run in the wrong order or without a stop condition.
- [ ] Validation: no check detects the failure before use.
- [ ] Human review: ownership, authority, or escalation criteria are missing.

**Testable hypothesis:** If we change **[one component]** while holding **[case and other conditions]** fixed, then **[observable result]** will change because **[mechanism]**.

| Test field | Record |
|---|---|
| Component changed |  |
| Conditions held fixed |  |
| Representative case |  |
| Failure or adversarial case |  |
| Expected result |  |
| Result that would reject the hypothesis |  |

## 3. Evaluation-case card

Create one card per case. Include ordinary work and cases that expose important failure modes.

| Field | Record |
|---|---|
| Case ID and type | Representative / edge / adversarial / regression |
| User and decision |  |
| Input |  |
| Approved evidence |  |
| Expected behavior |  |
| Acceptable variation |  |
| Hard gate | A failure that makes the result unusable regardless of other strengths |
| Scored criteria | Name each criterion, scale, and passing threshold |
| Human-review condition |  |
| Observed result |  |
| Pass, fail, or investigate |  |
| Evidence and reviewer note |  |

Before comparing systems, confirm that both received the same case, evidence, output requirements, and scoring rules.

## 4. Cost per accepted result calculator

Low inference cost does not guarantee low operating cost. Count review and repair work, then adjust for the share of attempts that pass every hard gate.

```text
Attempt cost = model and infrastructure cost
             + review time in hours × loaded hourly review cost
             + expected repair cost

Cost per accepted result = attempt cost ÷ pass rate
```

Use pass rate as a decimal. For example, 96% is `0.96`. Compare systems over the same cases and time period.

| Cost input | System A | System B |
|---|---:|---:|
| Model and infrastructure cost per attempt | $ | $ |
| Review seconds per attempt |  |  |
| Loaded review cost per hour | $ | $ |
| Expected repair cost per attempt | $ | $ |
| Pass rate after hard gates |  |  |
| **Cost per accepted result** | **$** | **$** |

**Worked teaching example, not current vendor pricing**

| System | Model cost / attempt | Review / attempt | Pass rate | Accepted-result cost |
|---|---:|---:|---:|---:|
| A | $0.040 | 30 seconds at $60/hour | 96% | $0.56 |
| B | $0.004 | 90 seconds at $60/hour | 90% | $1.67 |

The cheaper model call is not the cheaper accepted result in this example. State which assumptions could reverse the decision.

> Decision-changing assumption:

## 5. Controlled demo record

Use this record when changing instructions, context, model, tools, or workflow behavior. Change one component per comparison.

### Fixed test conditions

| Fixed condition | Value |
|---|---|
| Task and intended user |  |
| Exact input or case ID |  |
| Approved context |  |
| Output format |  |
| Evaluation criteria and hard gates |  |
| Run settings held fixed |  |

### Run record

| Run | One change | System / settings | Evidence | Result | Cost | Latency |
|---|---|---|---|---|---:|---:|
| Baseline | None |  |  |  |  |  |
| Revision |  |  |  |  |  |  |
| Failure-case check | Same revision |  |  |  |  |  |

### Interpretation

- **Observed difference:**
- **Evidence that the change caused it:**
- **Alternative explanation:**
- **Failure that remains:**
- **Human-review boundary:**
- **Next test:**

Do not claim general improvement from one successful case. Record the narrow conclusion supported by this comparison.
