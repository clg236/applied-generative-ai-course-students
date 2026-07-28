---
description: Turn Day 1 field evidence into a limited, testable use case (Session 4 onward)
agent: course-agent
---

This command needs a cloned fork and the course agent, which are taught in **Session 4**. It is optional: the Day 1 Field-to-Agent packet is a document the pair owns, and nothing requires it to be published in this repository. Use this only when a student has chosen to bring that evidence in.

If `activities/session-1/field-to-agent.md` and `sessions/field-kit.md` are present in this repository, read them first. If they are not present, proceed with the rules below and tell the student their fork is out of date.

Run `node scripts/init-student.mjs` to confirm the fork owner's GitHub login.

Work only under `student-work/<github-login>/session-work/field-to-agent/`. Use only public, consented, de-identified evidence that is safe to publish. Do not add raw identifiable media.

Produce three complete files: `evidence-manifest.md`, `use-case-options.md`, and `decision.md`.

Then scaffold three more with headings and explicit TODO markers only — do not fill them in: `observations.md`, `system-spec.md`, and `tests.md`. The student completes those.

Inventory the supplied evidence without inventing anything. Separate direct observations, interpretations, unknowns, provenance, and consent status.

Propose three bounded generative-AI roles: one for understanding, one for communication, and one for workflow support. Compare usefulness, available evidence, testability, consequence, and reversibility. Ask the student to choose one.

For the selected role, prepare a task statement, one candidate artifact, one representative test case, one failure case, a human-review condition, and the next evidence needed. Show the complete diff. Do not commit, push, or open a pull request until the student approves each step.
