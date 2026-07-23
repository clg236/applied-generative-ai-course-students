---
title: Day 1 Morning · What Is AI, and How Do We Work With It?
eyebrow: Applied Generative AI · Tue Jul 28 · 9:00 AM–12:00 PM
summary: Meet the course, define AI in plain language, diagnose the Broken Oracle, introduce agents and source control, and prepare a bounded public pull request.
---

# Applied Generative AI in Business

This morning we will meet one another, define the technology, diagnose a broken business system, and give everyone a working course agent.

**Christian Grewell · NYU Stern · Summer 2026**

<!-- slide -->

## Hi, I’m Christian

![Cel-shaded portrait of Christian Grewell based on his official Stern faculty photograph.](/assets/instructor/christian-grewell-cel-shaded.png)

I teach technology, operations, and AI at Stern. I also spend a lot of time building things.

<!-- slide -->

## A few things about me

- I have worked on a lot of startups.
- One current project is [DamodaranBot](https://www.damodaranbot.com/), a financial valuation agent.
- I make games. One recently reached **#1 in the App Store’s RPG category**.
- I was part of the founding team at **NYU Shanghai**. I love the place.
- I live in the Matrix more than is probably healthy.

<!-- slide -->

## What this class is about

We will treat generative AI as a **business technology**.

1. Understand how the systems work.
2. Choose a real task and build around it.
3. Test the system on cases that could actually happen.
4. Decide what should be automated, reviewed, changed, or stopped.

<!-- slide -->

## Six meetings in two weeks

| When | Focus |
|---|---|
| **Tue · Jul 28 · 9–12** | AI foundations and course agents |
| **Tue · Jul 28 · 2–5** | Generative AI in business and field evidence |
| **Fri · Jul 31 · 9–12** | Multimodal AI |
| **Tue · Aug 4 · 9–12** | Coding agents and verification |
| **Tue · Aug 4 · 2–5** | Economics, models, and workflows |
| **Tue · Aug 11 · 9–12** | Risk, governance, and final presentations |

**KMC 2-70 · We take a ten-minute break about once an hour.**

<!-- slide -->

## The main project · GenAI for New York

In teams of three or four, choose a real problem that affects quality of life in New York and build a generative-AI approach to it.

Show us:

- a working project or well-tested prototype;
- evidence that it helps;
- the important risks and limits; and
- what you would change next.

**Final class · Tue Aug 11 · Written brief · 12-minute presentation and Q&A**

<!-- slide -->

## Who is in the room?

Please tell us:

1. **Your name**
2. **One concrete way you have used AI**
3. **One way you think you may use it in the future**

**About 45 seconds is plenty.**

<!-- slide -->

# WHAT IS AI?

It is a very large category, and people do not agree on every boundary.

For this course, ask three practical questions:

**What does the system do? How does it do it? What happens after the output?**

<!-- slide -->

## AI is the broad category

![Artificial intelligence shown as one large circle.](/assets/course/ai-taxonomy-1-ai.svg)

**Artificial intelligence** describes computer systems that perform tasks we associate with intelligence: recognizing patterns, predicting, recommending, planning, generating, or controlling something.

<!-- slide -->

## Machine learning learns from examples

![Machine learning shown inside the larger artificial-intelligence category.](/assets/course/ai-taxonomy-2-ml.svg)

People choose the problem, data, model, and objective. Training adjusts the model from examples so it can handle cases nobody wrote out one by one.

<!-- slide -->

## Deep learning learns useful internal representations

![Deep learning shown inside machine learning and artificial intelligence.](/assets/course/ai-taxonomy-3-deep-learning.svg)

**Deep learning** uses layered neural networks. Training develops numerical representations that help the system work with images, sound, language, and other data.

<!-- slide -->

## Generative AI produces new candidate outputs

![Generative AI shown inside deep learning, machine learning, and artificial intelligence.](/assets/course/ai-taxonomy-4-generative-ai.svg)

Generative AI produces text, images, audio, video, code, and other content in response to an input.

**“New” does not automatically mean original, correct, useful, safe, or owned by you.**

<!-- slide -->

## Watch · *CRAFT (1979): The First Night*

Write down:

1. One thing it does surprisingly well
2. One moment when the illusion breaks
3. One human decision you think mattered

```youtube
https://www.youtube.com/watch?v=zX-e9LRR_ko
```

<!-- slide -->

## What changed for the person making it?

- A small team can attempt work that once required more people and equipment.
- Work moves into directing, selecting, fixing, editing, and maintaining continuity.
- Fast generation makes evaluation and taste more important, not less.

**The model produced material. A person still made a long series of choices.**

<!-- slide -->

## A convincing answer is not the whole system

```mermaid
flowchart LR
  accTitle: The business system around a generated answer
  accDescr: A user task enters an interface. Sources and policy shape a model or logic component, which produces a candidate output. A user decision based on that output can lead to a real consequence.
  U["USER + TASK"] --> I["INTERFACE"] --> M["MODEL OR LOGIC"]
  S["SOURCES + POLICY"] --> M
  M --> O["CANDIDATE OUTPUT"] --> D["USER DECISION"] --> C["CONSEQUENCE"]
  classDef default fill:#fffdf5,stroke:#172033,stroke-width:5px,color:#172033,font-weight:900,rx:0px,ry:0px;
  classDef focus fill:#f4dc67,stroke:#172033,stroke-width:6px,color:#172033,font-weight:900,rx:0px,ry:0px;
  class M,O focus
  linkStyle default stroke:#172033,stroke-width:5px;
```

The business owns the sources, interface, workflow, permissions, and consequences around the answer.

<!-- slide -->

## Sources, outputs, and authority are different

| Layer | Question |
|---|---|
| **Source** | What policy or evidence should control the answer? |
| **Output** | What did the system claim? |
| **Action** | What did a person or tool do because of it? |
| **Authority** | Who may approve, override, or stop the process? |

**A confident output does not become policy by sounding certain.**

<!-- slide -->

## Change one thing, then run the same cases

1. State a failure hypothesis.
2. Change one system component.
3. Hold the other conditions constant.
4. Run a normal case and a failure case.
5. Decide what the evidence supports next.

**A different answer is not automatically an improvement.**

<!-- slide -->

# Break · 10 minutes

Return ready to join **The Broken Oracle** with your profile name and avatar.

<!-- slide -->

## The Broken Oracle · an urgent journey

![Jordan Lee stands beside a retro airport information terminal with a mustard suitcase.](/assets/oracle-deck/storyboard/01-urgent-journey.webp)

Jordan Lee must make a time-sensitive trip after a family loss. Meridian Air’s own Fare Oracle appears to be the fastest authoritative source.

<!-- slide -->

## The official interface gives a clear answer

![Jordan studies a terminal that shows a buy-now-and-return-later pathway while a nearby policy binder shows a contradiction.](/assets/oracle-deck/storyboard/02-oracle-answers.webp)

> Purchase a standard fare now. After you travel, submit the reduced-fare request within 90 days and the adjustment can be applied retroactively.

**What exact claim could change Jordan’s behavior?**

<!-- slide -->

## The answer changes what the customer does

![Jordan presses the terminal confirmation control while holding a payment card as two tickets emerge beneath a clock.](/assets/oracle-deck/storyboard/03-irreversible-click.webp)

Jordan buys the outbound and return tickets at the standard price.

`official answer → customer reliance → financial consequence`

<!-- slide -->

## Then the door closes

![Jordan presents tickets and a captured assistant response while a service employee points to a contradictory policy binder.](/assets/oracle-deck/storyboard/04-door-closes.webp)

| Fare Oracle | Published policy |
|---|---|
| Request the adjustment after travel | Approval is required before travel |

**One organization. Two incompatible representations.**

<!-- slide -->

## The terminal is one component

![Jordan traces the Fare Oracle through a policy source, archive, processing machinery, refund workflow, service desk, and review gate.](/assets/oracle-deck/storyboard/05-system-map.webp)

**Policy owner → policy source → assistant → interface → purchase → refund workflow → review**

The evidence establishes the contradiction. It does **not** establish where the failure entered.

<!-- slide -->

## Responsibility stays with the organization

![A balance holds Jordan and an evidence packet opposite the connected policy, product, service, and Fare Oracle system.](/assets/oracle-deck/storyboard/06-accountability.webp)

In **Moffatt v. Air Canada, 2024 BCCRT 149**, the tribunal found that the customer relied on the representation and that the business remained responsible for information on its website.

<!-- slide -->

## Mission · repair the Fare Oracle

![Five students compare evidence and test cases around the Fare Oracle while closing a validation gate.](/assets/oracle-deck/storyboard/07-repair-the-oracle.webp)

1. Name the claim and controlling evidence.
2. Locate a plausible failure.
3. Spend one Change token on one repair.
4. Test a representative case and a failure case.
5. Decide whether to release, require review, or gather more evidence.

<!-- slide -->

## Join your party

1. Open **SIMS → The Broken Oracle**.
2. Join with your course profile name and avatar.
3. The instructor assigns teams and analytic roles.
4. Read **Story → Conflict → System → Decision → Mission**.
5. Wait for the instructor to start the run.

**The shared hand belongs to the team. Talk before anyone commits a card.**

<!-- slide -->

## Poll 1 · Which evidence matters most?

```icerynk
{
  "version": 1,
  "kind": "poll",
  "activityId": "s1-broken-oracle-debrief",
  "questionId": "strongest-evidence",
  "question": "Which evidence should carry the most weight in the Fare Oracle decision?",
  "context": [
    "The assistant promised a retroactive fare adjustment.",
    "The approved airline policy contradicted that promise."
  ],
  "options": [
    { "id": "policy", "label": "The approved policy and its owner" },
    { "id": "answer", "label": "The assistant’s confident answer" },
    { "id": "score", "label": "The team’s game score" },
    { "id": "consensus", "label": "The team’s agreement" }
  ],
  "response": { "defenseRequired": true, "maxChars": 120 },
  "display": { "results": "instructor-reveal", "defenses": "instructor-only" }
}
```

<!-- slide -->

## Poll 2 · Which repair comes first?

```icerynk
{
  "version": 1,
  "kind": "poll",
  "activityId": "s1-broken-oracle-debrief",
  "questionId": "first-repair",
  "question": "Which change most directly prevents an unsupported retroactive-fare promise?",
  "context": [
    "The team must prevent the unsupported promise, not merely make the answer sound better.",
    "Choose the first change you would test while keeping the case fixed."
  ],
  "options": [
    { "id": "source-validator", "label": "Current policy source plus a claim validator" },
    { "id": "friendlier", "label": "Friendlier wording" },
    { "id": "larger-model", "label": "A larger model" },
    { "id": "longer-answer", "label": "A longer answer" }
  ],
  "response": { "defenseRequired": true, "maxChars": 120 },
  "display": { "results": "instructor-reveal", "defenses": "instructor-only" }
}
```

<!-- slide -->

## Poll 3 · What should happen next?

```icerynk
{
  "version": 1,
  "kind": "poll",
  "activityId": "s1-broken-oracle-debrief",
  "questionId": "operating-decision",
  "question": "After one representative test and one failure test, what is the strongest defensible decision?",
  "context": [
    "Your team has only one representative result and one failure-case result.",
    "The output can affect a customer's purchase and money."
  ],
  "options": [
    { "id": "automate", "label": "Release without review" },
    { "id": "human-led", "label": "Use only with a named reviewer" },
    { "id": "more-evidence", "label": "Do not release; gather more evidence" }
  ],
  "response": { "defenseRequired": true, "maxChars": 120 },
  "display": { "results": "instructor-reveal", "defenses": "instructor-only" }
}
```

<!-- slide -->

# Break · 10 minutes

Return with your laptop, student-repository fork, GitHub CLI, and OpenRouter key ready.

<!-- slide -->

## Agent lab · build your course collaborator

By noon, your agent should be able to:

- read the enabled course material;
- tell you what is due and how to submit it;
- help only inside your own `student-work/` folder; and
- prepare one small, focused draft pull request that you inspect first.

**It should not have access to secrets or private student data, and it must not use another student's work.**

<!-- slide -->

## A chatbot answers; an agent can change the workspace

| Chatbot | Course agent |
|---|---|
| Responds in a conversation | Reads allowed repository files |
| Produces a candidate answer | Can propose and edit an artifact |
| Usually stops after the answer | Can inspect, act, check, and continue |
| Has no repo permission by default | Uses explicit file and Git permissions |

**We use both: conversation for thinking, agent tools for bounded work.**

<!-- slide -->

## An agent repeats a decide–act–check loop

```mermaid
flowchart LR
  accTitle: A controlled agent loop
  accDescr: An agent follows a goal and rules, decides a next step, acts with an allowed tool, observes the result, and then continues, stops, or asks a person before producing a result or handoff.
  G["GOAL + RULES"] --> D["DECIDE NEXT STEP"] --> A["ACT WITH AN ALLOWED TOOL"]
  A --> O["OBSERVE RESULT"] --> C{"CONTINUE · STOP · ASK"}
  C -.-> D
  C --> R["RESULT OR HANDOFF"]
  classDef default fill:#fffdf5,stroke:#172033,stroke-width:5px,color:#172033,font-weight:900,rx:0px,ry:0px;
  classDef focus fill:#f4dc67,stroke:#172033,stroke-width:6px,color:#172033,font-weight:900,rx:0px,ry:0px;
  class C focus
  linkStyle default stroke:#172033,stroke-width:5px;
```

Permissions, stopping rules, and review make the loop usable.

<!-- slide -->

## Source control keeps a usable history

Source control records deliberate checkpoints as a project changes.

It helps us answer:

- What changed?
- Who changed it, and why?
- Which version is currently shared?
- Can we review or reverse the change?

**For this course, it shows exactly what your agent changed before you publish it.**

<!-- slide -->

## Git and GitHub are different tools

| Git | GitHub |
|---|---|
| Runs on your computer | Hosts repositories online |
| Tracks files and history | Manages access and review |
| Creates branches and commits | Receives pushes and pull requests |
| Works without the internet | Connects your work to other people |

**Git records the work. GitHub is where we share and review it.**

<!-- slide -->

## A good commit records one coherent change

```mermaid
flowchart LR
  accTitle: A reviewed change becomes a commit in project history
  accDescr: Working files are inspected as a diff. The intended files, message, author, and time become one commit in project history.
  W["WORKING FILES"] --> D["INSPECT THE DIFF"] --> C["COMMIT<br/>FILES + MESSAGE"] --> H["PROJECT HISTORY"]
  classDef default fill:#fffdf5,stroke:#172033,stroke-width:5px,color:#172033,font-weight:900,rx:0px,ry:0px;
  classDef focus fill:#f4dc67,stroke:#172033,stroke-width:6px,color:#172033,font-weight:900,rx:0px,ry:0px;
  class C focus
  linkStyle default stroke:#172033,stroke-width:5px;
```

**A commit is local. `git push` sends commits to GitHub.**

<!-- slide -->

## A branch keeps a change separate from `main`

```mermaid
gitGraph
  accTitle: A student branch keeps agent work separate from the released main branch
  accDescr: The released material remains on main while a student makes and revises an agent check on a separate work branch.
  commit id: "released material"
  branch work/maya/session-01
  checkout work/maya/session-01
  commit id: "agent check"
  commit id: "revision"
  checkout main
```

`main` is the shared version. A branch is a separate line of work that can be reviewed before it joins `main`.

**A branch separates history. It does not make files private.**

<!-- slide -->

## Two course repositories, then your fork

```mermaid
flowchart LR
  accTitle: Private course source publishes selected material to a public student repository that students fork and contribute to through pull requests
  accDescr: The private course source contains all sessions and instructor material. It publishes enabled student material to one public repository. Each student forks the public repository and proposes work back through a pull request.
  P["PRIVATE COURSE SOURCE<br/>ALL COURSE MATERIAL"] -->|"RELEASE ENABLED MATERIAL"| S["PUBLIC STUDENT REPO<br/>RELEASED MATERIAL + RULES"]
  S -->|"FORK"| F["YOUR PUBLIC FORK<br/>YOUR WRITABLE COPY"]
  F -->|"PULL REQUEST"| S
  classDef default fill:#fffdf5,stroke:#172033,stroke-width:5px,color:#172033,font-weight:900,rx:0px,ry:0px;
  classDef focus fill:#8ff4d8,stroke:#172033,stroke-width:6px,color:#172033,font-weight:900,rx:0px,ry:0px;
  class S focus
  linkStyle default stroke:#172033,stroke-width:5px;
```

**Students never clone the private source. Work pushed to the public repository or a fork is public.**

<!-- slide -->

## A pull request asks to merge a change

A pull request compares:

- **your branch in your fork**, with
- **the shared repository's `main` branch**.

It gives us one place to inspect the diff, run checks, ask questions, and decide whether the change should be merged.

**Opening a pull request does not merge it. It starts a review.**

<!-- slide -->

## Let the agent work; keep the decisions human

1. Sync your fork and create a branch.
2. Give the agent one task and one allowed path.
3. Inspect `git status` and the complete diff.
4. Run the repository check.
5. Approve the commit, push, and draft PR separately.

Stop if you see a secret, private information, an unrelated file, an unexplained deletion, or a failed check.

**The agent prepares the work. You decide what becomes public.**

<!-- slide -->

## Fork the repository, then connect the model

```bash
gh repo fork clg236/applied-generative-ai-course-students --clone
cd applied-generative-ai-course-students
node scripts/init-student.mjs
git switch -c work/maya/session-01-agent-check
node scripts/start-course-agent.mjs
```

Inside OpenCode: **`/connect` → OpenRouter**, then select:

`openrouter/deepseek/deepseek-v4-flash`

<!-- slide -->

## The language model predicts one token at a time

```mermaid
flowchart LR
  accTitle: How a language model generates text one token at a time
  accDescr: The current context produces probabilities for the next token. The system chooses a token, appends it to the context, and repeats the process. This loop does not automatically verify whether a claim is true.
  C["CURRENT CONTEXT"] --> P["NEXT-TOKEN PROBABILITIES"] --> D["CHOOSE A TOKEN"] --> A["APPEND"]
  A -.-> C
  classDef default fill:#fffdf5,stroke:#172033,stroke-width:5px,color:#172033,font-weight:900,rx:0px,ry:0px;
  classDef focus fill:#8ff4d8,stroke:#172033,stroke-width:6px,color:#172033,font-weight:900,rx:0px,ry:0px;
  class P focus
  linkStyle default stroke:#172033,stroke-width:5px;
```

Truth checking is not automatically part of this loop.

<!-- slide -->

## Context is the agent’s working packet

The model receives a limited packet on each turn:

- system and course instructions;
- your current request;
- selected repository files;
- tool results and recent conversation; and
- the output generated so far.

**If important information is missing, stale, buried, or contradictory, the answer can fail. A large context window does not guarantee correct use.**

<!-- slide -->

## The course agent contract

Before acting, the agent must read the repository’s course-agent instructions.

It must:

- use enabled course files as the source for dates, tasks, and submission rules;
- ask when instructions conflict or required information is missing;
- never request, infer, store, or expose private student information;
- never expose API keys or credentials;
- edit only the fork owner's `student-work/<github-login>/` path;
- ask separately before committing, pushing, or opening a draft pull request; and
- never merge its own pull request.

<!-- slide -->

## Functional check · make the agent prove it is ready

Ask your agent:

> Read the course-agent instructions and enabled Session 1 material. Run the student initialization check. Tell me what is due next, the only public path you may edit, one thing you must never publish, and one detail you need from me before creating a file.

Pass only if it:

1. cites the course files it used;
2. names your bounded path;
3. states a real privacy or permission limit; and
4. asks for the missing detail instead of inventing it.

<!-- slide -->

## Prepare one bounded draft pull request

Create only `student-work/<github-login>/session-work/session-01/agent-check.md`, then inspect and validate the exact change:

```bash
git status --short
git diff
node scripts/validate-local-work.mjs
node scripts/commit-work.mjs "Add Session 1 agent check"
git push -u origin HEAD
gh pr create --repo clg236/applied-generative-ai-course-students --base main --draft
```

Record the model ID, sources read, readiness answer, one failed check, and your correction. **Review and approve the commit, push, and draft pull request separately. Everything pushed is public.**

