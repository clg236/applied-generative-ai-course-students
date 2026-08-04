# PRD · Buy or Pass

## What it teaches

After this run, a player can explain why a positive expected profit doesn't automatically make a vehicle worth buying, and can name the demand level that would have turned a profitable buy into dead inventory.

I would know it worked if, in the debrief, somebody says the number that mattered wasn't the profit margin — it was whether anyone would actually buy the car.

## Overview

Buy or Pass is a sim in which a player acts as a used-car dealership buyer, evaluating one vehicle at a time and deciding whether to buy it for inventory.

Each vehicle comes with a purchase price, expected resale price, estimated repair cost, and a demand level (high, medium, or low). A vehicle can look profitable on paper and still be the wrong buy, because low demand means it sits unsold, taking up space and tying up cash the dealership needs elsewhere.

## Goals

- Make the gap between "profitable" and "sellable" viscerally clear
- Force a real trade-off between expected profit and demand, not just a profit calculation
- Let a player with no dealership experience make a genuine, defensible buy/pass call
- End with a track record of decisions the player has to account for

## Non-Goals

- Negotiation, financing, auctions, or taxes
- Trade-ins or inventory-limit mechanics
- Detailed vehicle inspection or condition assessment
- Teaching how to estimate repair costs or resale prices — those are given, not derived

## Audience

Business students who've seen "expected value" in a lecture and never had to weigh it against a second, competing factor in the same decision. Solo play works well here since each round is a fast, individual call. They want each round to feel like a real bet, not a math exercise — what loses them is a vehicle where the right call is obvious from the numbers alone, with no tension between profit and demand.

## Existing solutions and issues

- **A lecture on expected value** — explains the profit calculation cleanly, but never puts a second, competing variable (demand) in tension with it, so there's nothing to actually weigh.
- **A spreadsheet exercise calculating profit margins** — the arithmetic is visible, but nothing forces the player to notice that a profitable number can still be the wrong buy.
- **Asking a model to "design a 15-minute teaching simulation where a person acts as a used-car dealership buyer deciding whether to buy for inventory"** — likely produces a heavier, more mechanic-laden design (extra variables, scoring, more rounds) than the tight profit-vs-demand rule actually needs. It adds complexity instead of isolating the one trade-off. See Part 7.

## Assumptions

- Players anchor on the profit number first, because it's the calculation with a clear right answer, and treat demand as a secondary or soft consideration rather than a hard constraint.
- A vehicle with a strong profit margin and low demand will be bought more often than it should be, because the profit number is the one that "feels" decisive.
- Repeated rounds, each with a different profit/demand combination, are enough for a player to notice the pattern themselves — the lesson doesn't need to be stated outright.

## Constraints

- Runs in a browser, no install, no account beyond icerynk
- Full run takes 15 minutes across five rounds, including debrief — about 2–3 minutes per round for the team to calculate, argue, and decide
- Each round shows exactly four inputs: purchase price, expected resale price, estimated repair cost, demand (high/medium/low)
- Recommendation logic is fixed and rule-based: recommend Buy only when expected profit is at least $2,500 and demand is Medium or High; otherwise recommend Pass
- Every vehicle, price, and dealership invented, and the sim says so on the first screen
- Buildable by a small team in about two weeks

## Key use cases

- Understand a round's four inputs within seconds — no glossary needed
- Calculate or estimate expected profit (resale − purchase − repair) without being told the answer
- Weigh that profit against the vehicle's demand level
- Commit to Buy or Pass
- See the recommended decision, whether their call matched it, and why — round after round, until the pattern is unmissable
- Understand it in seconds. One screen per round: the four inputs, and a Buy/Pass choice. No history, no glossary, no hint about which factor matters more.
- Notice the pattern, not just one round. Any single round could go either way; it's only across five rounds that a player who's anchoring on profit alone starts losing to the demand rule — and that's the point where the debrief lands.

## The card

| Field | Value |
|---|---|
| Title | Buy or Pass |
| Subtitle | The profit looks great. Nobody's buying it. |
| Summary | A dealership buyer evaluates five vehicles, one at a time, each with a purchase price, expected resale price, repair cost, and demand level, with time to actually argue each call. A vehicle can be profitable and still the wrong buy — this sim is about noticing when, and why. |
| Learning objective | After this run, a player can explain why a positive expected profit doesn't automatically make a vehicle worth buying, and can name the demand level that would have turned a profitable buy into dead inventory. |
| Duration | 15 minutes, including debrief |
| Team size | Solo, or 2–3 arguing over each call |
| Result | A five-round decision record and a performance rating |
| Tags | expected value, trade-offs, decision rules, inventory risk |
| Cover image alt text | A row of used cars on a dealership lot, one with a "reduced price" sign, under overcast light. |

## The run

| Beat | Minutes | What the room sees | What the room does |
|---|---|---|---|
| 1 | 0–3 | Round 1 vehicle: price, resale, repair cost, demand | Calculate expected profit, weigh demand, choose Buy or Pass |
| 2 | 3–6 | Feedback: expected profit, recommendation, match/mismatch, explanation, then Round 2 | Carry the lesson (if any) into the next round |
| 3 | 6–9 | Round 3 vehicle and feedback | Repeat the decision, adjusting for what they've learned |
| 4 | 9–12 | Rounds 4 and 5, back to back | Apply the pattern under less time per round |
| Debrief | 12–15 | End screen: rounds matched, performance rating, one takeaway | Name the moment a profitable vehicle should have been a Pass, and why |

- **The limit:** One call per vehicle. Once Buy or Pass is chosen for a round, it can't be revisited — the player moves to the next vehicle with whatever they learned.
- **The tempting wrong move:** Buying any vehicle with a strong profit margin without checking demand first. It's the number with the clearest, most satisfying arithmetic — and it's exactly the one the sim is testing whether players over-trust.
- **The endings (none losing):**
  - *Matched the rule most rounds.* The player weighed both profit and demand correctly, and the end screen reflects a strong record — a clean, earned result.
  - *Chased profit, ignored demand.* The player bought every profitable vehicle regardless of demand, ending with several likely-unsold cars. The lesson lands hard because it's visible in their own record.
  - *Overcorrected, passed on good buys.* The player got cautious about demand and passed on vehicles that were genuinely worth buying. Still a real, defensible pattern — caution has its own cost, and that's worth seeing too.

## Research

### Domain research — WHY DOESN'T A PROFITABLE VEHICLE AUTOMATICALLY MAKE A GOOD PURCHASE?

A profit calculation only tells you what happens if the car sells. Demand determines whether — and how fast — that sale actually happens. A low-demand vehicle can sit on a lot for months, during which it ties up the cash that could have bought two faster-moving vehicles, and inventory holding costs (space, depreciation, financing on the purchase itself) quietly erode the margin that looked solid on day one. The teachable point isn't "demand matters" in the abstract — it's that a single, satisfying number (profit) can crowd out a second constraint that isn't visible in that number at all.

### Model research — WHAT DOES IT PRODUCE WHEN ASKED TO DESIGN THIS?

See Part 7 — the bare prompt below is expected to produce a full simulation design, likely heavier on mechanics (multiple rounds, scoring, extra variables) than the tight, rule-based version here.

## Part 7 · Why this beats just asking AI

**The bare prompt**

> "Design a 15-mins teaching simulation that a person act as a used-car dealership buyer, and deciding whether to buy it for inventory."

**What it produced**

A live, improvised role-play: the model plays the seller/auction rep in character, walking through a Pitch, an Inspection & Questions phase, a "Run the Numbers" step using its own max-bid formula (retail price minus recon, transport, fees, and target margin), a Negotiation phase where the model counters the player's offer, and a Debrief. It ended by asking the learner to pick a difficulty level before starting.

**Where it fell short**

| The model's line | What is wrong with it | How I know |
|---|---|---|
| "I'll answer in character — sometimes evasively, sometimes with red flags planted on purpose, so you have to dig" | This depends on a live human or AI partner improvising the seller role for the full 15 minutes. It's not a fixed, buildable browser sim — it's a live-hosted exercise that needs a person running it every time. | The brief requires something buildable by a small team in about two weeks and playable without a live facilitator; an always-improvised counterpart can't be built as a static artifact. |
| "Max bid = Expected retail price − (recon costs + transport + fees + target profit margin)" | This formula folds demand entirely out of the decision — margin is baked into the bid calculation itself, so there's no separate moment where a profitable number still gets rejected for low demand. It replaces the one trade-off with a single blended number. | Buy or Pass works because profit and demand are two separate, visible inputs the player has to weigh against each other; folding them into one formula removes the exact tension the sim is testing. |
| "Minutes 11–13: Negotiation — I counter your offer. You negotiate — hold firm, walk away, or split the difference" | This adds a second, separate decision (how to negotiate) on top of the buy/pass call, plus multiple sub-choices within it. | The brief is explicit that a sim is one decision; a negotiation phase with its own branching choices is a second decision layered onto the first. |

**What I supplied that it could not**

- The specific, isolated trade-off — profit vs. demand as two separate visible numbers — rather than folding everything into one blended bid formula
- A fixed, rule-based recommendation (profit ≥ $2,500 and demand Medium/High) that can be built once and replayed by any learner without a live host
- Repeated rounds with the same two variables, so the pattern of over-trusting profit becomes visible on its own
- A design buildable as a static, replayable artifact instead of a live-hosted improv exercise requiring a human or AI seller every time

**The correction log**

| The model proposed | I changed it to | Why |
|---|---|---|
| A live improvised role-play requiring the model or a person to play the seller in real time | Fixed, pre-set data per round (price, resale, repair cost, demand) — no live counterpart needed | The sim has to be buildable once and replayed by any learner, not re-hosted by a live facilitator each time |
| A single blended max-bid formula folding margin, recon, transport, and fees together | Two separate, visible numbers — expected profit and demand level — the player weighs against each other | Blending the numbers removes the exact tension (profitable but low-demand) the sim exists to teach |
| A negotiation phase with its own sub-choices (hold firm, walk away, split the difference) | A single Buy or Pass call per round, no negotiation branch | The brief calls for one decision; negotiation adds a second, separate decision layered on top |

**The test a reader can run**

Show someone a vehicle with a $4,000 expected profit and Low demand, and ask if they'd buy it. If they say yes without hesitating on demand, the sim's central bet — that profit alone is what people anchor on — is confirmed, and that's the two-minute check.

## Part 8 · Generative AI outputs

| Field | Output 1 | Output 2 |
|---|---|---|
| What it is | Cover image for simulation | Simulation Design |
| Modality | Image | Text |
| Exact model ID | GPT 5.5 | Claude Sonnet 5 |
| Date generated | August 3rd 2026 | August 3rd 2026 |
| Prompt used | Create a picture about used car inventory. | Design a 15-mins teaching simulation that a person acts as a used-car dealership buyer and deciding whether to buy it for inventory. |
| What you rejected first | The picture lacks details. | The live, improvised role-play with open-ended questioning and negotiation. |
| What you edited afterwards | Add a person act as a used-car dealership buyer and deciding whether to buy the car or not. | The design shifted from an improvised, back-and-forth role-play with open-ended information and negotiation to a fixed, screen-based Buy/Pass simulation with pre-set numbers, a single rule-based recommendation, and built-in replay ability. |

**Disclosure:** The simulation is created by Claude Sonnet 5. The image is created by GPT 5.5.
