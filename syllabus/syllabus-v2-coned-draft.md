---
title: Applied Generative AI
eyebrow: Course syllabus
summary: Course learning goals, projects, schedule, requirements, and policies.
---

# Applied Generative AI

**SHBI-GB 7151 B01, NYU Stern, Summer 2026**

## Course information

- **Format:** 6 sessions × 3 hours
- **Breaks:** Two 10-minute breaks in every three-hour session
- **Prerequisites:** None. No prior programming experience required.
- **Instructor:** Christian Grewell
- **Office hours:** By appointment. Async questions encouraged — details in the course Slack channel.

## Course description

This course equips students with hands-on skills to apply generative AI tools and techniques to real business problems. Across six intensive sessions, students move from foundational concepts — how large language models, image generators, and multi-agent systems work — to practical implementation of AI-powered workflows in marketing, operations, finance, and strategy. Topics include prompt engineering, AI-assisted coding, building automated business workflows, and evaluating AI outputs for accuracy and risk. Students complete two individual projects and a small-team capstone demonstrating how generative AI can create measurable value within a specific business context.

The shared capstone goal is to **use generative AI to improve quality of life in New York City.** Con Edison is the proposed project partner and may provide project briefs, interim feedback, and a final-presentation audience. Partnership details will be confirmed separately.

## How the course is structured

The course includes two individual projects and one team capstone. Sessions use a common learning cycle: **experience → explain → build → observe → test → reflect**. The duration of each block changes with the work; every three-hour meeting includes two 10-minute breaks. Day 1 begins with a shared definition of AI, an airline-system simulation, and a bounded course-agent setup. The afternoon connects generative AI to business work, then sends pairs into the field to gather a small evidence packet and turn it into one testable use case.

Field work uses the minimum evidence needed for the question. Students may collect structured observations, public information, photos without identifiable people, and optional non-speech audio or short process video when privacy permits. Day 1 records are reviewed before use and stored in each student's private workspace; raw media does not need to be sent to a model. Later activities may contribute permitted, de-identified records to the shared Course Field Dataset.

Practical requirements: bring a charged laptop and phone, a charger, comfortable shoes, and water. The Day 1 afternoon field mission remains within Washington Square and one adjacent block. Later activities define their own public-space radius, follow the same consent and safety rules, and include an indoor alternative when weather, mobility, or access makes the outdoor route unsuitable.

You don't learn a topic for its own sake, you learn it because the next thing you ship needs it.

Student agency is intentional. You pick the business problem you want to attack in Project 1. You pick the build path, visual asset, internal tool, or automated workflow in Project 2. You pick your capstone team, and choose among the partner briefs (or propose your own NYC problem). If a deliverable format on this syllabus doesn't fit what you're trying to learn, propose an alternative.

**IMPORTANT:** Generative AI is moving faster than any syllabus can keep up with. We will operate at the forefront of the recently possible, which means new tools, new capabilities, and sometimes new problems will surface mid-course. Expect the schedule, tools list, and even project briefs to shift as the field shifts. Besides, adaptability is a good skill to have in this new era.

## Learning outcomes

By the end of the course, you should be able to:

- Explain in plain language how LLMs, diffusion models, and agent systems work, and where each is "jagged" (strong vs. unreliable).
- Design and iterate prompts, context, and evaluations for a specific business task.
- Build a working AI-assisted prototype: a tool, a workflow, or a creative asset pipeline — without writing code from scratch.
- Identify risks (accuracy, bias, IP, privacy, cost) in a proposed AI deployment and propose mitigations.
- Choose a model for a given task with evidence — comparing open and closed options on cost, quality, latency, and governance — and articulate the switching costs of that choice.
- Articulate where human judgment and "taste" remain decisive in an AI-augmented business process.

## Topics covered

- **How the models work — and the model landscape.** Tokens, training, post-training, context, and why fluent output can still be wrong or unsupported. Open-weights and closed models, large and small models, and the practical differences among them. In Session 1, OpenCode uses a model through OpenRouter to read released course material, cite its sources, and create one bounded artifact in a private workspace.
- **Prompting & context engineering.** Specification, structure, examples, retrieval.
- **Agents & harnesses.** The difference between a chatbot response and an agent that can read files, use permitted tools, update a workspace, and stop or hand work back to a person. We will examine instructions, context, memory, tools, limits, and the agent loop.
- **Evaluation.** Building eval sets, judging outputs, knowing when a system is good enough for a real workflow.
- **Multimodal generation.** Image, video, and voice models — open and closed options in every category. What's production-ready vs. demo-only. Brand, IP, and deepfake risks.
- **AI-assisted coding.** OpenCode and other coding agents. Building working tools without writing code from scratch, with emphasis on specification, limited permissions, review, and verification.
- **Workflow automation.** n8n and similar platforms. Composing multi-step business processes with AI in the loop.
- **The economics of AI.** Model price differences; subscription, API, open-weight, and local deployment; latency and rate limits; switching costs; and evidence-based model selection using a six-model comparison.
- **Risk, governance, taste.** Accuracy, bias, IP, privacy, cost. Where human judgment stays decisive.
- **Business applications.** Patterns across marketing, operations, finance, and strategy — threaded throughout the course, not siloed into one session.

A design principle runs through all of it: **categories, not products.** Every tool in this course is taught as an instance of a category, always alongside an alternative — at least one open, one closed. The goal is that you can sit down at any AI product from any vendor and orient in minutes, because you know the anatomy underneath.

## Projects

### Project 1

Select a bounded business task. Define its user, input, output, supported decision, observable success criteria, prohibited behavior, human-review boundary, and baseline. Build a 10-item evaluation set containing five representative, two boundary or missing-information, two adversarial or conflicting, and one high-consequence case. **Run all ten cases on at least two models—one open-weights and one closed—and compare task success, hard-gate failures, latency, cost per accepted result, review work, and switching dependency.** Revise one shared system component from the evidence, then rerun the affected cases and one representative regression case on both models. The same evaluation set will be used again in Session 5. Submit the system specification, evaluation set, raw results, comparison evidence, revision evidence, and a one-page decision brief. The Day 1 pair field packet may supply an idea or evidence for Project 1, but Project 1 remains individual work.

*Exercises: How models work, prompting & context, evaluation, business applications.*

### Project 2

Respond to a brief by building one of the following. You choose.

- **Path A — The Asset.** A creative deliverable produced via a multimodal pipeline: a campaign visual set, a 30-second product video, a voice-led walkthrough, or a brand kit.
- **Path B — The Tool.** A working internal tool built via AI-assisted coding: a calculator, data cleaner, draft generator, or research assistant. It should address a specific problem in your work, studies, daily life, or a business you know. Examples include a 311-complaint explorer, apartment-listing triage tool, or alternate-transit-route summary.
- **Path C — The Workflow.** An automated multi-step business workflow built with n8n (or equivalent) plus LLMs: lead enrichment, expense triage, market scanning, report drafting.

Deliver the project, a short demonstration, and a process document explaining successful cases, failures, and resulting changes. The process document must include a **substitution paragraph**: if the main tool or model doubled in price or became unavailable, identify a replacement and estimate the switching cost.

*Exercises: Multimodal, AI-assisted coding, agents, workflows, risk, business applications.*

### Capstone: GenAI for New York (team project)

Teams of 3–4 will **demonstrate how generative AI can measurably improve quality of life in New York.**

If confirmed, **Con Edison** may provide up to three project briefs—problems where better communication, navigation, or automation could improve quality of life for New Yorkers. Teams may choose a confirmed partner brief or propose another approved NYC problem. All course work uses public or synthetic data; no confidential access is required or expected.

**Prefer your own problem?** Any team may instead propose a different NYC quality-of-life problem (transit, housing, small business, city services...) — same deliverables, needs my approval by end of Session 5.

Present in Session 6 at KMC 2-70 unless NYU confirms a formal relocation. Angela and Dany from Con Edison will be invited to the final class regardless of whether briefs are provided.

**Deliverables:** a working project, a written brief covering business context, approach, evaluation, risks, and a proposed second version, plus a 12-minute presentation followed by Q&A.

**Alternative format:** If your team's problem doesn't fit "build a thing," propose an alternative deliverable (e.g., a deployment plan with prototypes, a comparative evaluation study, a pitch with a working demo).

Approval required by end of Session 5.

## Schedule

**Official NYU meeting location:** 44 W 4th St, Kaufman Management Center, Room 2-70, Washington Square. Session 6 remains in this room unless NYU confirms a formal relocation to Con Edison.

| # | Date | Time | Lecture topic | Applied work | Partner (Con Edison) |
|---|------|------|----------------|--------------|------------------|
| 1 | Tue Jul 28 | 9am–12pm | Course introduction; what AI and generative AI are; chatbots, agents, LLMs, and context | Play The Broken Oracle airline SIM; answer live polls; configure OpenCode with OpenRouter; complete a bounded course-agent check and reviewed commit | Capstone goal introduced |
| 2 | Tue Jul 28 | 2–5pm | Generative AI in business: tasks, workflows, evidence, value, operating limits, and ownership | Work in pairs on the one-hour Field-to-Agent Sprint; return with a privacy-safe evidence packet; define one bounded use case, two tests, and a human-review condition | Field packet may seed individual Project 1 work |
| 3 | Fri Jul 31 | 9am–12pm | Multimodal AI systems | Project 1 due; Project 2 work period | Confirmed partner or instructor briefs released |
| 4 | Tue Aug 4 | 9am–12pm | Coding agents, specifications, and verification | Project 2 work period | — |
| 5 | Tue Aug 4 | 2–5pm | AI economics, model comparison, and workflow automation | Project 2 due; confirm capstone teams | Partner Q&A if confirmed |
| 6 | Tue Aug 11 | 9am–12pm | Risk, governance, taste | Capstone presentations | Final class; invited partner audience |

Applied evidence activities: **Session 1** Broken Oracle decision record and course-agent check · **Session 2** one-hour Field-to-Agent Sprint · **Session 3** Energy Infrastructure Observation · **Session 4** Dataset Collection · **Session 5** User Interviews · **Session 6** final presentations.

Between Sessions 5 and 6, teams may receive written Con Edison feedback on a one-page progress note. Project work occurs during scheduled class work periods and between sessions. Reserve the period between Sessions 5 and 6 for capstone completion.

## Assessments

| Component | Weight |
|-----------|--------|
| Participation & build logs | 15% |
| Project 1 — The Switch Test | 20% |
| Project 2 — The Build | 25% |
| Capstone — working project | 20% |
| Capstone — written brief | 12% |
| Capstone — presentation | 8% |

Build logs are short and intended to make sure you're doing work - a few sentences after each session capturing what you tried, what surprised you, and what you'd do differently. They're graded for honesty and reflection, not polish. They also satisfy the AI-disclosure requirement below.

## Tools & accounts

Complete the Setup guide before Session 1. The Day 1 agent lab assumes that installation, authentication, and repository access already work.

- **Git and GitHub:** install Git, create a GitHub account, and accept the private course-workspace invitation. Students use two repositories: a sanitized, read-only course-materials release containing only enabled sessions, and a separate private workspace for their own work.
- **OpenCode:** install [OpenCode](https://opencode.ai/docs/) and confirm that `opencode --version` works. OpenCode is the course agent interface.
- **OpenRouter:** create an [OpenRouter](https://openrouter.ai/) account, add about $5 of credit, and make your own key with a $5 spending limit. Enter the key through OpenCode's `/connect` flow; never save it in a repository.
- **Day 1 model:** select `openrouter/deepseek/deepseek-v4-flash`. Model catalogs change, so the instructor will announce a fallback if this entry is unavailable.
- **Later-course tools:** one general chat model, an image-generation tool, and n8n or an equivalent workflow tool. Free tiers are acceptable unless the instructor says otherwise.
- **Optional:** a local model runner such as [LM Studio](https://lmstudio.ai/) or Ollama for open-weights demonstrations.

The course agent may read released materials but may write only inside the student's private workspace. Students review the full diff before approving a commit or push. Do not put API keys, grades, roster data, NYU IDs, attendance, accommodations, private feedback, personal messages, or identifiable recordings into OpenCode, OpenRouter, or Git.

If you prefer a different tool later in the course, confirm that it provides the same capability and can follow the same data and permission boundaries. Projects 1 and 2 assess whether you can compare alternatives rather than depend on a single vendor.

## AI use policy

You are required to use AI in this class. You are also required to disclose how you used it: which tools, what prompts, what worked, what didn't, and where your judgment changed the output.

Submitting AI output as if it were your unmediated work, without taste, editing, or evaluation, will be treated as a failure of the assignment. Not because AI was used, but because you weren't!

## Attendance & participation

This is a six-session course. If you must miss a class, contact me in advance. Applied work periods are required course time. Come prepared to build, ask questions, and review work in progress.
