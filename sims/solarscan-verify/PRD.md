# SolarScan Verify — PRD

**Brief:** Solar Scanner Optimization (Con Edison capstone)
**Team:** Yongpeng, Praewa, Kenji, Tanapat, Victor
**Status:** Draft for team review

## What it teaches

SolarScan Verify is a verification layer, not a replacement: it takes the
rooftops the existing scanner cannot confidently classify and turns them into
a defensible three-way decision — **solar**, **no solar**, or **uncertain** —
with the reason and the evidence visible to a human reviewer.

I would know it worked if, during a demo, an analyst says the uncertain cases
looked *more* useful than the confident ones — because the system explains
why each roof is hard to judge instead of guessing.

## Overview

Con Edison's rooftop solar scanner already handles the easy cases. The hard
ones — rooftops with HVAC units, skylights, shadows, obstructions, or unusual
layouts — are exactly where a scanner mistakes equipment for panels. SolarScan
Verify reviews those ambiguous cases with a multimodal AI agent: it combines
the rooftop image with optional context (building footprints, permit/public
records, roof geometry, historical imagery), classifies each building as
solar / no solar / uncertain, and escalates every uncertain case for human
review. Goal: improve accuracy, reduce unnecessary manual verification, and
make the scanning process more scalable, reliable, and informative.

## Goals

- Make the ambiguity visible: for every uncertain roof, name *why* it is
  hard to classify (shading, obstruction, skylight, HVAC, unusual layout).
- Fail toward a person: escalate rather than guess when confidence is low.
- Reduce unnecessary manual verification on cases the evidence can settle.
- Produce evidence a reviewer can check, not just a label.

## Non-Goals

- Replacing the existing scanner's happy path (out of scope for v1).
- Live/streaming imagery or real-time scanning.
- Deciding anything without a human review step.
- Using private Con Edison data of any kind — v1 runs on public imagery and
  synthetic rooftop cases only.

## Why this beats just asking AI

If you paste an ambiguous rooftop image into a general-purpose multimodal
model and ask "does this roof have solar panels?", you get a confident-looking
answer with no idea how much to trust it. That is the failure this PRD is
built around: the bare prompt cannot say *which* evidence it used, cannot
admit which rooftop features make the call hard, and has no escalation
path. SolarScan Verify's job is to turn that single unverifiable answer into
a structured, reviewable, escalate-able decision.

## 1. Who uses it, and for what task?

A Con Edison solar-program analyst reviews rooftop imagery that the existing
solar scanner flagged as ambiguous or low-confidence. Today the analyst must
pull imagery, cross-check records, and decide by hand. SolarScan Verify
performs the first-pass review of those ambiguous cases and returns a
recommendation the analyst can accept, reject, or escalate.

The task is a **three-way classification**: given a rooftop image and optional
context, decide whether the roof has solar panels (**solar**), does not have
them (**no solar**), or cannot be determined from the evidence (**uncertain**).

## 2. What inputs does it accept?

- One rooftop image (JPEG/PNG, any orientation). Required.
- Optional context, each independently usable or absent:
  - building footprint polygon (GeoJSON)
  - address or parcel identifier (string)
  - permit/public-building record text (string)
  - roof geometry description (string)
  - one or more historical images of the same roof (same format as the
    primary image)

Inputs arrive as a single request object. The model must never be given
customer names, exact infrastructure coordinates beyond the parcel footprint,
or any credential.

## 3. What outputs does it produce?

For each rooftop, a structured result:

- `label`: `solar` | `no solar` | `uncertain`
- `confidence`: 0.0–1.0
- `reason`: one short sentence naming the visual evidence (e.g. "panels
  visible in the southeast quadrant"; "dark rectangles match HVAC, not
  panels")
- `difficulty_factors`: list from {shading, orientation, obstruction,
  skylight, hvac, unusual_layout, image_quality, none}
- `changed_since_prior`: `yes` | `no` | `unknown` (only when a historical
  image is supplied)
- `escalate`: `true` when `label` is `uncertain` or `confidence` is below
  0.6 — the case is flagged for human review

## 4. What three examples show correct behavior?

1. **Clear solar.** A low-slope roof with a visible grid of dark panels and
   no HVAC units near them. Output: `solar`, confidence ≥ 0.8,
   `difficulty_factors: [none]`, `escalate: false`.
2. **Clear no-solar.** A roof with several large silver HVAC boxes and no
   panel-like rectangles. Output: `no solar`, confidence ≥ 0.8,
   `difficulty_factors: [hvac]`, `escalate: false`.
3. **Genuinely ambiguous.** A roof where dark rectangles could be panels or
   skylights, shadows covering half the roof, no permit record supplied.
   Output: `uncertain`, `escalate: true`,
   `difficulty_factors: [skylight, shading]`, with a reason that names the
   competing interpretations.

## 5. What happens when an input is missing, invalid, or unsupported?

- No image: return an error `missing_image`; do not guess a label.
- Image that cannot be decoded: return `invalid_image`, `escalate: true`.
- Context fields absent: proceed with the image alone; the output must state
  which context was used (`context_used` list).
- A context field is malformed (e.g. unparsable GeoJSON): ignore that field,
  list it under `context_skipped`, and proceed.
- Image smaller than 256×256 px or with more than one image file attached:
  return `unsupported_input`, `escalate: true`.
- The model cannot reach a decision (e.g. output schema invalid, API error):
  return `uncertain` with `escalate: true`. Failure must fail toward human
  review, never toward a confident guess.

## 6. Measurable outcome (Session 5 lock-in)

On a fixed public/synthetic benchmark set of 100 rooftop images with known
labels: SolarScan Verify must classify at least **90%** of the *clear* cases
correctly and mark **every** case the benchmark labels ambiguous as
`uncertain` (escalation recall = 1.0). The benchmark and its labels are
committed to the team repository before prototype work starts.

**The test a reader can run:** take the committed benchmark, run any three
models on the same 100 images with the same prompts, and check the results
table against the rubric in §7. If a model's clear-case accuracy or
escalation recall disagrees with the table, the table is wrong.

## 7. Prototype requirement (capstone)

The first prototype compares **at least three models** on the same benchmark:
same inputs, same judging rubric. Results table (model × accuracy on clear
cases, escalation recall, cost per 100 images) is committed to the team
repository, alongside one failed approach with its evidence.

## 8. Human-review boundary

`escalate: true` results are never auto-accepted. An analyst must confirm
every `uncertain` case and every `solar` case with confidence below 0.6.
The system recommends; a person decides.

## 9. Out of scope for v1

- Replacing the existing scanner's happy path.
- Live/streaming imagery.
- Any decision that does not end in analyst review.
- Private Con Edison data of any kind: v1 runs on public imagery and
  synthetic rooftop cases only.

---

## Correction log (filled in as the team builds)

Format from ChartWise's Project 2 PRD — each entry records what the agent
did, what we expected, and what we changed. A refusal is a pass; a confident
wrong answer is the finding.

| The agent proposed | We changed it to | Why |
|---|---|---|
| _(fill in)_ | _(fill in)_ | _(fill in)_ |

Which check caught it: **critical path / failure path / data boundary /
recovery** (circle one per entry).

## Generative AI outputs (evidence table)

Per capstone evidence rules: exact model ID, provider, date, prompt, and what
was rejected/edited. Filled in as runs happen.

| Field | Output 1 | Output 2 |
|---|---|---|
| What it is | _(e.g. first classification attempt)_ | _(e.g. revised prompt)_ |
| Modality | text / image | text / image |
| Exact model ID | _(e.g. anthropic/claude-opus-5)_ | _(e.g. openrouter/...)_ |
| Date generated | _(YYYY-MM-DD)_ | _(YYYY-MM-DD)_ |
| Prompt used | _(paste exact prompt)_ | _(paste exact prompt)_ |
| What we rejected first | _(…)_ | _(…)_ |
| What we edited afterwards | _(…)_ | _(…)_ |
