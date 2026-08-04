# Two Banks, One Friday

*A 15-minute sim on how duration can kill a bank— Project 2*

Richard Tucker · 2 August 2026

## What it teaches

After this run, a player can use duration to estimate the percentage loss caused by a yield move and judge whether that loss is dangerous by scaling it to equity rather than comparing absolute dollar losses

I would know it worked if, in the debrief, somebody says the $109 billion hole was the safer one — and can explain why — without being prompted to compare either number to equity.

## Overview

Two Banks, One Friday is a 15-minute team simulation in which a company's finance team must decide which of its two banks should hold its $40 million of operating cash.

Both banks have disclosed large unrealized losses on government-backed securities in their 2022 filings. One loss is much larger in absolute terms; the other is nearly the size of the bank's equity. The team gets one calculation and must decide where to place the cash before payroll clears.

## Goals

- Make a room compute a duration loss once, on real disclosed figures, and feel the size of it
- Force the loss to be measured against equity, not against the other bank's loss
- Produce a genuine disagreement within five minutes
- Let a players make a defensible argument based on their assigned role
- End with the money placed somewhere, and a written reason that survives the reveal

## Non-Goals

- Teaching the basic Assets + Liabilities = Equity Formula
- Teaching Macaulay duration, modified duration, convexity, or how any of them are derived
- Bond pricing, discounting, or any arithmetic beyond one multiplication and one division
- Credit risk, loan books, capital ratios, or CET1
- Held-to-maturity accounting as a topic in its own right, it appears only as the reason the loss is not on the balance sheet
- The bank run itself, which is the ending, not the lesson
- Predicting bank failures, or implying that the sim's method would have
- More than one decision

## Audience

Business and finance students who have encountered duration conceptually but have never used it in a decision.

Teams of three to five, run cold at the start of a class. Everything needed is on screen.

They want the decision to feel real — their company's payroll depends on it. What loses them is guessable framing or math-heavy mechanics that crowd out judgment.

## Existing solutions and issues

- A lecture on duration — delivers the formula and a worked example on a single bond. Nobody has to decide anything, and the number never meets a balance sheet. Students leave able to define duration but unable to use it and understand implications on balance sheet health and survivability.
- A bond-pricing spreadsheet exercise — the sensitivity is visible but private. One person drives, the rest watch, and the exercise is about getting the formula right rather than about what the answer means.
- An SVB case study — read after the fact, with the collapse on the first page. Hindsight does the work. Every student concludes the duration was obviously reckless, which is the wrong conclusion, because Bank of America's book was longer and larger and Bank of America is still here.
- Asking a model to "design a class simulation about duration risk using SVB" — produces a bank-run role-play with invented bond prices and no control case. See Part 7.

## Assumptions

- Players treat larger dollar losses as larger risks
  (Observed repeatedly in class and in 2023 media coverage)
- Players do not spontaneously normalize by equity
  (Model outputs and classroom behavior both show failure to form ratios)
- "Government-backed" is interpreted as "safe from loss"
  (Common misconception; reinforced by real executive statements)
- Arithmetic under time pressure suppresses discussion
  (Observed: rooms go silent when calculating)
- Teams accept framing unless one role challenges it
  (Hence the Board Observer role)

## Constraints

- Runs in a browser, in class, no install, no account beyond icerynk
- 15 minutes including the debrief
- Teams of three to five, roles assigned by the instructor
- All evidence for a beat fits on one screen
- No arithmetic by the player beyond choosing what to multiply — the model computes and they interpret
- Every figure is real, sourced to a public filing dated on or before 3 March 2023, and cited on screen. The first screen says so, and says that no figure has been adjusted
- No figure dated after 3 March 2023 appears anywhere before the reveal
- Buildable by a small team in about two weeks — if it needs more, cut it

The real-figures constraint replaces the course default of inventing everything. It is a deliberate trade and it is the design decision the sim turns on: the lesson is that the loss was disclosed, quarterly, in public, and read by nobody. An invented bank cannot make that claim, and a reader cannot check it.

## Key use cases

| Use case | What it does |
|---|---|
| Understand the situation quickly | One screen establishes stakes: $40M cash, $20M payroll next week, board deadline today. |
| Identify the comparable number | Two panels show identical line items; only one ratio makes them comparable. |
| Execute calculation of risk | The team selects one operation; the model computes it for both banks. |
| Argue from roles | Each role holds unique context, forcing perspective-based arguments. |
| Make and record a decision | The team places the cash (or refuses) and writes one sentence of reasoning. |

## The card

| Field | Value |
|---|---|
| Title | Two Banks, One Friday |
| Subtitle | It is 3 March 2023, your company's $40 million is in one account, and both of your banks are underwater. |
| Summary | Your board wants to know by this afternoon whether the company's cash is in the right bank. Two banks have just filed 2022 annual reports, and both hold large unrealized losses on government-guaranteed bonds. One loss is seven times bigger; the other threatens the bank itself. |
| Learning objective | After this run, a player can take a bond portfolio's duration and a change in yields, estimate how much value that destroys, and say whether the loss is survivable by comparing it to the bank's equity rather than to its own size. |
| Duration | 12–16 minutes |
| Team size | 3 minimum, 5 maximum. Solo works and is worse — the split in the room is most of the lesson. |
| Result | A signed cash placement |
| Tags | risk sizing, reading disclosures, decision under deadline, quantitative judgment |
| Cover image | Landscape. See Part 8, Output 2. |
| Alt text | A dark office at night, two printed bank annual reports open side by side on a desk under a single lamp, a calculator between them, one page marked with a sticky note. |

## The run

| Beat | Minutes | What the room sees | What the room does |
|---|---|---|---|
| 1 | 0–3 | One screen: the company, the $40 million, the board's question, and today's date. Then two anonymized panels, A and B, four disclosed figures each, every one footnoted to a filing. | Reads both panels. Assigns roles. Notices, usually out loud, that B's loss is enormous. Says which bank looks worse and why. |
| 2 | 3–9 | The calculation menu: four operations, one pick, no undo. After the pick, the result appears on both panels at once so the comparison is unavoidable. | Argues about which operation to execute. Runs it. Argues about what the answer means. The Board Observer makes them state what would have to be true for them to be wrong. |
| 3 | 9–15 | The placement screen, then the reveal: A is Silicon Valley Bank, B is Bank of America, and a dated timeline of the following eight days. | Places the $40 million and types one sentence of reasoning. Then reads their own sentence back against what happened, and says whether they were right for the right reason. |

## The limit

One calculation. The room may run exactly one operation from the menu and it applies to both banks at once. They cannot run a second, and they cannot undo the first. Everything after that is argued from four disclosed numbers and one computed ratio.

## The tempting wrong move

Spending the calculation on total dollar loss, or on the loss per 1% rate rise. Both feel like the quantitative move. Both return a number seven times larger for Bank B, which is the bank that survived. A room that spends its calculation there arrives at beat three convinced Bank B is the danger, and places the money in the bank that failed.

## The endings

- **Move it to Bank B.** The room decides a $109 billion loss inside $175 billion of equity is survivable and a $15 billion loss inside $16 billion of equity is not. They own the ratio, and the timeline confirms them. The debrief asks whether their sentence says "ratio" or says "bigger bank", because only one of those was reasoning.
- **Leave it at Bank A.** The room defends the position it inherited — usually on the grounds that the securities are Treasury and agency paper and cannot default, which is true, and was the argument being made in public that week. They watch the eight days. Nobody is told they lost.
- **Refuse to place it.** The room says $40 million should not sit uninsured in any single bank, and splits it or moves it into Treasuries directly. This is a real answer, it is what a good treasurer would actually have done, and the sim records it as such. The debrief then asks the question they dodged: which of the two banks would you have used if you had to pick one, and what number decides it?

## Research

### Domain research

**HOW BIG WAS THE LOSS, AND HOW BIG WAS THE RATE MOVE THAT CAUSED IT?**

SVB's held-to-maturity book at 31 December 2022: $91.3 billion at amortised cost, $76.2 billion at fair value — a $15.1 billion unrealised loss, against $16.2 billion of book equity. That is a markdown of 16.5% on a portfolio whose weighted-average duration SVB disclosed at 6.2 years for the HTM book, and 5.6 years across total fixed income including swaps.

The rate move that produced it is the part that is routinely got wrong. The Fed raised policy rates by 425 basis points during 2022, but SVB's book was not sitting at the policy tenor. The 10-year Treasury went from about 1.51% at the end of 2021 to about 3.88% at the end of 2022 — roughly 236 basis points. Duration times yield change: 6.2 × 2.36% ≈ 14.6%, against an actual markdown of 16.5%, the gap being convexity and mortgage spread widening. Use 425 basis points instead and the estimate is 26% — off by more than half the loss. The sim uses the yield move at the portfolio's own tenor, and this is the single detail that decides whether the arithmetic reconciles or not.

**IF BOTH BANKS HAD THE SAME PROBLEM, WHAT MADE ONE OF THEM FATAL?**

Bank of America held roughly $614 billion of held-to-maturity securities at the end of 2022, carrying an unrealised loss of about $109 billion against roughly $175 billion of tangible common equity. In dollars this is seven times SVB's hole. As a fraction of equity it is about 62% against SVB's 93%, and by the third quarter of 2023 Bank of America's figure had grown to $131.6 billion without incident.

The loss becomes real only when the securities are sold, and they are only sold when deposits leave. SVB's deposits were roughly 94% uninsured, concentrated in a single industry with a shared information network. Bank of America ran at about 29% uninsured in the first half of 2023, falling to 15% by mid-year. On 8 March 2023 SVB sold about $21 billion of available-for-sale securities at a $1.8 billion after-tax loss, which converted a disclosed paper number into a realised one and told every depositor at once. Roughly $42 billion of withdrawals were attempted the following day.

The sim keeps the deposit story out of the calculation menu's winning line on purpose. Loss-to-equity is the number that separates the two banks using only the four figures on screen, and it is the number a student can carry to any bank. The deposit concentration is where the debrief goes next, in the last ninety seconds, once the arithmetic has landed.

### Model research

**WHAT DOES IT PRODUCE WHEN ASKED TO DESIGN THIS?**

Asked cold, it produced a card-based bank-run role-play: students pick a 2-year or a 10-year bond, a rate shock is announced, withdrawal rounds are called, the bank breaks. It is a well-made activity and it teaches the wrong thing. The bond prices in it are invented and wrong by roughly double; the rate shock uses the policy move rather than the yield move; and there is no control case, so nothing in the design distinguishes "long duration is dangerous" from "long duration was dangerous here". It never proposed putting a surviving bank on the screen, which is the decision this design turns on. The full output is in Part 7.

## Part 7 · Why this beats just asking AI

### The bare prompt

Design a 15-minute classroom simulation that teaches students about duration risk using the SVB collapse.

Run against Claude Opus 5 on 2 August 2026, in a session with no prior context, no web access and no follow-up. One turn, no edits.

### What it produced

Verbatim output in bare-prompt-output.md, included in the submission zip. It returned an activity called "The Bank Run Game": three colours of index card, a rate-shock table on the whiteboard, a bond choice, three withdrawal rounds, a four-question debrief, plus variants and a homework prompt. Structure below, in its own words, uncleaned.

### Where it fell short

| The model's line | What is wrong with it | How I know |
|---|---|---|
| "A 7-year duration bond in a 4% rate move loses roughly 28%." | It applies the policy-rate move to a long-duration portfolio. The Fed moved 425bp in 2022; the 10-year Treasury, which is where a 6–7 year book actually sits, moved about 236bp. The estimate is nearly double the truth, and it is the one calculation the whole activity exists to teach. | SVB disclosed 6.2 years duration on its HTM book and a 16.5% markdown ($91.3bn cost, $76.2bn fair value). 16.5 ÷ 6.2 = 2.7% implied yield move. 10-year Treasury: 1.51% at end-2021, 3.88% at end-2022. |
| "10-yr bond → worth 70% of face (lose 30%)" | Invented figure presented as the fact the class computes against. No 2022 Treasury or agency book lost 30%. Students spend four minutes doing arithmetic on it and leave with 30% as their anchor for what a rate shock does. | Same disclosure. The actual markdown on the longest of the two portfolios in question was 16.5%; Bank of America's was about 17.8% ($109bn on $614bn). |
| "A bank does not fail because its assets are bad. It fails because its assets are slow and its liabilities are fast." | A good line for a different lesson. It is the closing sentence of an activity that was asked to teach duration, and it leaves duration behind entirely — the sizing never happens, the loss never meets equity, and a student can pass the debrief without using a duration number once. | The four debrief questions the model wrote: only one mentions duration, and it introduces the formula after the activity is over, as a summary rather than as the thing that was used. |

### In my own words

The raw output was a simulation in which "You are the treasury desk at a bank in 2021. Money is pouring in from tech startups who just raised huge venture rounds. You have far more deposits than loan demand. You must park this cash somewhere." The simulation overall is pretty good in my opinion; however, I think there's too many key concepts the sim attempts to tech in 15 minutes. The sim I created, with the help of AI and manual adjustments, focused on one key concept (duration can cause unrealized losses that can exceed balance sheet equity and make a bank insolvent). My simulation focuses on the connection of unrealized losses caused by an elevated rate environment and long duration bond portfolio to a bank's equity position and ignores tradeoffs from the bank's internal Treasury perspective. Both provide a way of learning the concept of duration, but the importance of understanding impacts relative to the overall balance sheet is much clearer and easier to understand in my simulation.

### What I supplied that it could not

- The control case enables players to make the connection of losses relative to equity is the most important component in this situation. Bank of America has a longer, larger, more underwater portfolio and did not fail. Without it, nothing in the exercise separates duration from disaster, and the student's takeaway is that long bonds are reckless, which is false.
- The real disclosures. SVB 2022 Form 10-K: $91.3bn amortized cost, $76.2bn fair value, 6.2 years HTM duration, $16.2bn book equity, 94% uninsured deposits. Bank of America at the same date: ~$614bn HTM, ~$109bn unrealized loss, ~$175bn tangible common equity.
- The right rate move. The distinction between the policy rate and the yield at the portfolio's tenor is the difference between an estimate that reconciles to the filing and one that is off by 75%. The model did not make the distinction and gave no sign it knew there was one.
- The date discipline. Setting the sim on Friday 3 March 2023 means every figure on screen was public and none of the collapse had happened. The model's design opens by telling students this is SVB, which hands them the answer in the first sentence.
- The reason the deposit answer is a near miss and not a win. Deposit concentration predicts the outcome better than duration does. A design that lets a room win on it has taught them the wrong variable, and the debrief has to say so out loud.
- Overall my simulation is easier to follow, and focuses more on the key point to get across.

### The correction log

Please see AI chat logs, as well as marked up PRD in addition to what's below.

| The model proposed | I changed it to | Why |
|---|---|---|
| One bank, revealed as SVB in the opening line | Two anonymized banks, identity withheld until beat three | Naming SVB gives away the answer and converts the activity into hindsight. Anonymising it also makes the sim honest: on the day, this was a genuinely hard call and the scarier-looking bank was the safe one. |
| Invented bonds at invented prices ("10-YEAR MBS, 1.7% yield") | Four disclosed figures per bank, footnoted to the 2022 filings | Made-up numbers cannot be checked, cannot be argued with, and give the room nothing to be right about. Real ones make the debrief settle a question rather than deliver a moral. |
| A 4% rate shock applied to the whole curve | The 236bp move in the 10-year, applied at the portfolio's own tenor | The model's version overstates the loss by roughly 75% and does not reconcile to any filing. A student who runs the model's numbers and then opens the 10-K finds they disagree. |
| Students each hold a bond and compute their own loss | The model computes; the room chooses which single ratio to compute | Under a clock, arithmetic silences a room. Removing the calculation and making the choice of calculation scarce is what turns fifteen minutes into an argument instead of a worksheet. |
| Three withdrawal rounds ending in insolvency | One placement decision, before anything happens | The run is the consequence, not the lesson. Simulating it eats seven minutes and teaches liquidity dynamics the brief did not ask for. |
| A four-question debrief covering credit risk, duration, deposits and accounting | One question, asked against the sentence the room wrote | Four questions in four minutes is a lecture. Playing their own recorded reasoning back to them is the only part of a debrief that reliably lands. |

### Also ran against Kimi K3 on August 4th, 2026 before class

**What is produced:**

The SVB Duration Game: A 15-Minute Classroom Simulation

The simulation was very simple and was focused on bond math and a "core mechanic" that a bond with duration 6 loses ~18% when rates rise 3pp. Uses invest $110 in a short, medium, and long duration investment, rates increase, players review impacts.

**Where it fell short:**

Similar to above, assumes interest rate changes are uniform across all maturities which is far from the truth in real markets. This teaches a false concept to players and can introduce confusion for the players. Again the concept isn't bond and duration math, it's the importance of controlling unrealized losses and duration in an elevated rate environment relative to an institution's equity position.

### The test a reader can run

Two minutes, one filing, no expertise required.

Check one: divide the loss by the equity. Open SVB Financial Group's 2022 Form 10K and find the heldtomaturity securities table — $91.3 billion at amortized cost, $76.2 billion at fair value, a $15.1 billion unrealized loss. Book equity on the same balance sheet is $16.2 billion. Divide: 93%. Now do Bank of America at the same date — roughly $109 billion of unrealized loss against roughly $175 billion of tangible common equity. Divide: 62%.

Bank of America's hole is 7.2 times larger in dollars and its cushion is nearly two-thirds bigger than its loss. SVB's cushion was $1.1 billion — about 7% of its own equity, on a portfolio that moved by more than that in a quarter. Mark both books to market and one bank is bruised and the other is gone, and the ranking is the exact reverse of the dollar figures. That is the entire sim in one division, and it takes a reader less time to run than to read this paragraph.

## Part 8 · Generative AI outputs

| Field | Output 1 | Output 2 |
|---|---|---|
| What it is | The bare-prompt baseline in Part 7 — a complete competing sim design, generated cold, used as the control this document argues against. | The promotional catalog image: a modern fintech-style advertisement combining a quiet desk-at-night scene with annual reports, interest-rate and balance-sheet visuals, and concise simulation copy. |
| Modality | Text | Image |
| Exact model ID | claude-opus-5 | gpt-image-2 |
| Date generated | 2 August 2026 | 4 August 2026 |
| Prompt used | "Design a 15-minute classroom simulation that teaches students about duration risk using the SVB collapse." Single turn, no context, no web access, no follow-up. | "Create a simple, modern fintech-style advertisement for a classroom simulation about duration risk using the SVB collapse. Use a clean editorial layout with cool blue and slate tones, subtle gradients, ample white space, and a quiet desk-at-night scene featuring annual reports, an interest-rate chart, balance-sheet papers, a calculator, and a desk lamp. Include the title 'Duration Risk Simulation,' a short explanation of the 15-minute exercise, three learning callouts, a 'Run the Simulation' button, and the footer 'Simple. Practical. Memorable.' No logos, watermarks, or people." |
| What you rejected first | Nothing — the point of the baseline is that it is the first and only output, unedited. Rejecting a draft would have destroyed its value as a control. | Nothing. The first generated concept matched the intended quiet, paper-based desk scene and modern fintech visual language, so no alternative draft was rejected. |
| What you edited afterwards | Nothing. Reproduced verbatim, uncleaned, in bare-prompt-output.md. | Nothing. The PNG was used as generated. No cropping, color correction, compositing, retouching, or text changes were applied. |

**Disclosure.** The competing sim design quoted throughout Part 7 was generated by Claude Opus 5 on 2 August 2026 from the single prompt shown and is reproduced unedited. The promotional catalog image was generated by OpenAI's gpt-image-2 model on 4 August 2026 and was used without post-generation edits, as described above. All figures in this document are from public filings and market data and were not generated by a model.

**Note:** Ran additionally on openrouter on 8/3/26 using GPT-5.3 Chat and DeepSeek V4 Flash 0731. Both models produced a simplified version of the draft I provided, and I took some elements such as the assumptions, if just as effective but cleaner than the initial draft. Evidence of all models used included in zip.

## Before you submit

- "After this run, a player can …" is one sentence and names a capability — done
- One decision, three beats, 15 minutes — done
- Every italic prompt deleted, every heading kept — done
- Card fields all filled, alt text over 30 characters — done (alt text is 168 characters)
- Three endings, none of them losing — done
- Part 7 has a real bare prompt, its raw output, and three named failures — done
- Two outputs, two modalities, exact model IDs and dates — Output 1 complete; Output 2 complete
- Chat and agent logs included, redacted — in zip
- One zip named tucker-project2, to Brightspace — done

## Sources

- SVB Financial Group 2022 Form 10-K — HTM $91.3bn cost / $76.2bn fair value; 6.2yr HTM duration; 5.7yr total fixed income; $16.2bn book equity. Form 8-K, 8 March 2023 — $21bn AFS sale, $1.8bn after-tax loss.
- Federal Reserve, "Review of the Federal Reserve's Supervision and Regulation of Silicon Valley Bank", April 2023 — 94% uninsured deposits at year-end 2022. Fed OIG material loss review, September 2023 — ~$42bn of withdrawals attempted 9 March 2023.
- Bank of America 2022 Form 10-K and Q2/Q3 2023 filings — ~$614bn HTM at end-2022, ~$109bn unrealized loss against ~$175bn tangible common equity; $105.8bn at Q2 2023 rising to $131.6bn at Q3 2023.
- FRED series DGS10, 10-year Treasury constant maturity — 1.51% at 31 December 2021, 3.88% at 30 December 2022.
