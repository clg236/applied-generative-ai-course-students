# Marava: An Emerging Markets Crisis Desk Sim

**Product Design Document · Project 2 · Anastasia Larionova**

---

## 1. The edge

The topic is emerging-market currency crises, and specifically the analyst's job during one: reading a live information flow and deciding what actually matters.

I have spent four internships on macro and EM desks — Citadel (FI & Macro), Schonfeld (Emerging Markets & Delta 1), Brevan Howard (Rates & Vol), ExodusPoint (Fixed Income RV). At Schonfeld I built a constrained least-squares estimate of Kuwait's currency-peg basket and ran daily theoretical fixing estimates against it. That work is the source of the specific claim this sim rests on:

**When a managed currency comes under pressure, the important information stops arriving as headlines.**

The reserve print, the emergency hike, the ministerial resignation — these are the items a language model surfaces and weights heavily, because they are the items that dominate the training corpus. The items that actually move the trade are an FX surrender-requirement circular posted as a technical notice, a shift in the offshore NDF against an administered onshore fix, and a line in a banking annex showing residents converting deposits into dollars. These are legible to someone who has sat on the desk and largely invisible to a default answer.

Ask a general-purpose model *"what should I watch in an EM currency crisis?"* and you get a competent list: reserves, inflation, political stability, current account. Every item on that list is true and none of them is the trade. This sim is built on the gap between the two.

### What this means concretely

Four judgments are hard-coded into the content and each one inverts or displaces a default AI answer:

| Desk judgment | Default AI answer | Why the default is wrong |
|---|---|---|
| An unscheduled 200bp hike is bearish the currency | "Rate hikes support the currency" | The *unscheduled* size is an admission of lost control. Turkey '18, Argentina '18 — currencies sold off after emergency hikes. |
| The FX surrender circular is the day's most important item | "A technical adjustment to FX regulations" | It manufactures artificial local-currency demand and reveals that reserves are gone. |
| The finance minister's resignation is noise | "Political instability is a negative catalyst" | FX policy sits at the central bank and presidency. The ministry runs fiscal. Wrong authority. |
| Reserve headlines are low-weight | "Reserves falling rapidly — crisis imminent" | Gross reserves are stale and public. Net-of-forwards is the number, and it isn't in the release. |

The sim is not a quiz on these four facts. It is an environment where the player acts on their own priors, discovers which ones failed, and is then made to defend the reasoning rather than the outcome.

---

## 2. What the player does

A fictional composite country, the **Republic of Marava**, currency the **maravi (MVI)**, running a crawling band against the dollar with an IMF programme under negotiation and heavy short-term external debt. Fictional so that nothing is retrievable and the labels are mine to set.

The loop runs across two in-sim days.

**Day 1 — the board.** Ten items arrive as a feed: central bank releases, wire copy, an unsourced local newspaper story, a sell-side note, a statistics-office print, offshore market data, a presidential press conference, a regional protest report, a regulatory circular, a banking-sector annex table. The player tags each **signal** or **noise**. No scoring is shown.

**Day 2 — escalation.** The same board moves. Some noise is promoted, some signals resolve, some resolve *against* the player. The provincial bread protests correctly tagged noise on Day 1 become a general strike in the capital, and are now the political constraint that stops the central bank hiking again. The finance minister actually resigns and nothing moves, confirming the tag. The onshore/offshore gap widens while offshore liquidity thins, so the cleanest signal on the board becomes less reliable precisely as it becomes more urgent. Three new items arrive. The player re-tags.

Nobody prompts the player to revisit Day 1. Information that changes value while you aren't looking is the mechanic, and it is why the sim runs two days rather than one board repeated.

**The call.** The portfolio manager is a voice agent, and he phones the player unscheduled, part-way through Day 2, while items are still arriving on the board. There is no compose box. He opens with the player's tag sheet in hand:

> *You flagged the resignation rumour and you didn't open the circular. Walk me through what you think the onshore fix is telling you right now.*

Three properties make this the centre of the product:

**It is live.** In text, a player composes — they pause, re-read the board, look up what a surrender requirement is, delete the bad sentence. All of that is precisely what the job does not permit. On a call the player has only the understanding they already have, which is the real distinction between someone who has read about currency crises and someone who has sat through one.

**He interrupts.** If the player rambles past roughly twenty seconds without stating a position, the PM talks over them. This is the single most desk-accurate feature in the sim and the clearest illustration of the argument in §3: a general-purpose voice assistant asked to role-play a portfolio manager is unfailingly polite. It waits, it never cuts in, it thanks you for a considered answer. The rudeness is the product.

**He hangs up.** Hard stop at three minutes — *I've got another call* — which forces the player to lead with the position and defend it second. Most will do it backwards the first time. That is the lesson.

The PM is prosecutorial, not cruel, and is scored on one axis only: **can the player defend the reasoning that was available at the time?** A player who tagged the protests noise on Day 1 and can say *provincial, no union involvement, no capital-city presence* gets full credit even after Day 2 proves them wrong. Process over outcome, explicitly, because outcome-grading teaches hindsight and desks do not run on hindsight.

A text mode runs the same PM logic, for accessibility, for non-native speakers, and for demo environments where speaking aloud is not possible.

**The ticket.** Instrument, direction, entry, target, stop, horizon, and the two things that would make the player wrong inside three weeks. The PM pushes back once on whichever field is weakest — most often the stop, which players set too tight for a crisis and rarely think about in relation to carry.

**The replay.** The trade is normalised to percentage moves from t=0 and run against the price paths of three real historical episodes. Output: maximum drawdown, whether the stop was hit before the target, and weeks-to-payoff.

The result this is designed to produce is the directionally correct trade that loses money — stopped out in week three, vindicated in week seven. That is the lesson no chatbot gives you when you ask what happens in an EM crisis, and it is the reason a simulation is the right format for this content rather than an essay.

**The debrief.** Precision and recall against the hidden labels, per day, with each miss explained. The audience for this course is largely data analysts, so a confusion matrix is the native language for the part of the sim that would otherwise feel subjective. The sharpest debrief in the set belongs to a player with perfect recall who got the direction of the emergency hike backwards.

---

## 3. How this beats asking AI directly

**More context.** The PM's questions are seeded with the player's own tagging decisions across two days. There is no prompt a user can write that supplies a general model with a record of choices they have not yet made.

**A different task entirely.** The nearest available substitute is opening a consumer voice assistant and asking it to play a portfolio manager. What that produces is an interlocutor that waits for you to finish, never interrupts, never ends the call, and treats every answer as thoughtful. The behaviours this sim depends on — barge-in on a rambling answer, a hard three-minute cut-off, an opening question built from the player's own errors — are the opposite of how a general assistant is tuned to behave, and they are what makes the exercise resemble the job.

**Better resources.** Two hand-built datasets carry the product:

*The item bank.* Every item carries a hidden label, a stated reason, and a recorded "default read" — what a general model says when handed that item cold. The default reads are captured directly and are part of the design record, not a rhetorical claim. The bank is authored, not generated: a model asked to write a plausible noise item writes something obviously trivial, and a model asked for the important item writes a headline. The whole difficulty of the board comes from that being backwards.

*The analogue set.* Normalised price paths from real episodes — candidates are Turkey 2018, Argentina 2018, Egypt 2016, Nigeria 2016, Sri Lanka 2022 — compiled by hand from primary market data. These numbers are not model-generated, because model-generated historical price data is plausible and wrong and one spot-check by a reader destroys the credibility of the whole replay. Compiling three episodes properly is roughly a day of work and it is the single highest-value day in the build.

**Sharper guidance.** The default answer to "how do I read an EM crisis" is a list of indicators. This gives a live board where the indicators conflict, a specified order of operations, and an adversary who makes you defend your reading out loud.

---

## 4. Where generative AI sits inside the product

**Audio — the PM call.** The primary generative surface. Speech-to-text on the player, a language model carrying country state, the day's board, the player's tags and the process-over-outcome grading rule, and text-to-speech back, with barge-in and a session timer. The model is constrained to the fixed fact set for Marava so it cannot invent data the player never saw. A transcript is retained for the debrief.

**Text — the debrief narrative.** Templated explanations of each miss, generated from the label reasons rather than free-form.

**Image — the artefacts.** Generated newspaper front pages, a central bank circular header, and a press-conference still, used to make items 3, 4 and 8 read as objects rather than lines in a list. This matters more than it sounds: the circular is the day's most important item and it works only if it *looks* boring. A generated regulatory notice with a document reference number and dense body copy does that; a bullet point does not.

**Not generative:** the labels, the escalation logic, the analogue price data, the scoring.

---

## 5. Scope

Two weeks, small team.

- Item bank: 10 Day 1 items, 10 escalations, 3 new Day 2 items, each with label, reason, and captured default read
- Analogue set: 3 episodes, normalised, hand-compiled from primary sources
- Tagging UI: a list with two buttons per row
- PM: one system prompt, a state object, an off-the-shelf realtime voice pipeline, barge-in and a session timer; text mode shares the prompt
- Replay: percentage-move arithmetic against stored paths
- Debrief: confusion matrix plus templated miss explanations
- Output: a one-page summary of the position and how it performed

Cut deliberately: a generated pitch PDF was in the earlier design and is out. It is the piece that most invites *I could have asked AI for that*, and it is production cost that buys nothing the argument needs. The historical-comparison panel is also out as a standalone screen — the PM raising *this looks like Turkey 2018, so why isn't the lira the trade* is more alive than a static panel and one less thing to build.

### Known risks

**Latency is the product.** A portfolio manager who takes two seconds to reply is not a portfolio manager. If round-trip cannot be held under roughly 800ms the pressure disappears and what remains is a slow chatbot with a voice. This is the constraint the voice pipeline is selected against, ahead of voice quality.

**Domain vocabulary defeats generic speech recognition.** NDF, bps, carry, the fix, roll, MVI. A mangled transcript makes the PM answer something the player did not say, which breaks the illusion instantly. Mitigation is a vocabulary hint list shipped with the recogniser, tested against the twenty terms the board actually elicits.

**Analogue data.** If the historical episodes cannot be compiled cleanly from primary sources, the replay ships with two rather than three and says so. Model-generated price history is not an acceptable substitute — it is plausible, wrong, and one reader spot-check discredits the entire section.

---

## Appendix A — Day 1 board

Ten items, delivered across a simulated trading day. The player tags each **signal** or **noise**; signal items require a second tag, **bullish MVI** or **bearish MVI**. Labels and reasoning are hidden until the debrief.

Ground truth is a clean five-five split. The difficulty is not in the ratio — it is that two of the noise items look like the most important news on the screen, and the single most important item is written to look like paperwork.

---

**A-01 · 08:14 · Central Bank of Marava, monthly release**
> Gross international reserves stood at $18.2bn at end-June, from $19.6bn at end-May.

**Noise.** The drain has been public for four months and is in the price. The number that matters is net of the FX forwards book, which this release does not contain. A player trading this headline is trading last month's news.
*Predicted default read:* "Reserves are falling rapidly — this points to an imminent currency crisis." Treated as the headline event of the day.

---

**A-02 · 08:31 · Wire service**
> Marava National Bank raises policy rate 200bp to 24.50% at an unscheduled meeting.

**Signal — bearish MVI.** The inverted item, and the one that separates readers from practitioners. An *unscheduled* hike of this size is not a show of resolve; it is an admission that control has been lost, and the size is information about how bad the internal picture is. Turkey 2018 and Argentina 2018 both saw currencies weaken after emergency hikes.
*Predicted default read:* "A rate hike increases the attractiveness of holding the currency and should support MVI." Sign is backwards.

---

**A-03 · 09:02 · *Marava Daily*, unsourced**
> Finance Minister Adeyemi expected to resign within days, sources say.

**Noise.** FX policy in Marava sits with the central bank and the presidency; the ministry runs fiscal. Three prior ministerial changes moved the currency by nothing. Tests whether the player knows *where the relevant authority sits* rather than reacting to political drama.
*Predicted default read:* "Political instability is a negative catalyst for the currency." Weighted heavily.

---

**A-04 · 09:20 · Central Bank circular MNB-2024/17, posted to website**
> Exporters shall convert 80% of foreign exchange proceeds within 5 business days, revised from 50% within 30 days.

**Signal — bearish MVI. The most important item on the board.** A soft capital control published as a technical notice with no headline and no press release. Two consequences. It manufactures artificial MVI demand, so official spot will now print *stable* while the real clearing price migrates offshore — which corrupts every onshore number the player will see for the rest of the sim. And it tells you the authorities no longer have reserves to defend with, because if they did they would defend.
*Predicted default read:* "A technical adjustment to foreign exchange surrender requirements." Ranked low or omitted entirely.

---

**A-05 · 09:45 · Sell-side EM strategy note**
> We see value in MVI local bonds at these levels; real yields are the highest in the EM complex.

**Noise.** Real yields are always highest in the EM complex immediately before they go higher. Contains no new information — it is a positioning statement, not data. Its only use is inverted: it tells you the sell-side is long, and therefore who is forced to sell next.
*Predicted default read:* "Analysts see value, suggesting the selloff may be overdone." Treated as an independent opinion rather than a position.

---

**A-06 · 10:30 · National Statistics Office**
> June CPI 31.2% y/y, below consensus of 32.8%.

**Noise.** The miss is entirely administered fuel and electricity prices, frozen ahead of the IMF review and due to be reset. Core services inflation accelerated. The headline is an artefact of a policy decision, not a disinflation. Rewards the player who asks what is *inside* the print.
*Predicted default read:* "Inflation came in below expectations, a positive sign for stabilisation efforts." Composition not examined.

---

**A-07 · 11:15 · Offshore market data**
> 1-month MVI NDF implies 12.4% depreciation versus onshore spot, from 6.1% one week ago.

**Signal — bearish MVI. The cleanest item on the board.** This is the price the market sets where the government cannot reach it. Once A-04 anchors onshore spot, the onshore rate is administered and therefore not a price at all. The gap *is* the crisis.
*Predicted default read:* "NDF pricing reflects market expectations of depreciation." Correct as far as it goes, but not connected to A-04, and the onshore fix is still cited elsewhere as though it were real.

---

**A-08 · 12:40 · Presidential press conference**
> "We have ample tools and there will be no devaluation. Speculators will not win."

**Signal — bearish MVI.** Explicit devaluation denials cluster immediately before devaluations; the base rate is high enough to trade. Weaker than A-04 or A-07, but it belongs in the signal bucket, and a player who has read one crisis account should catch it.
*Predicted default read:* "Officials sought to reassure markets." Filed as neutral or mildly stabilising.

---

**A-09 · 13:05 · Regional wire**
> Protests over bread prices in three provincial cities; several hundred participants.

**Noise — on Day 1's information.** Provincial, small, no capital-city presence, no union involvement. The escalation trigger to watch is organisation, not crowd size. Tests the distinction between political noise and a political constraint on policy. This item is promoted on Day 2, and a player who tagged it noise with sound reasoning still receives full credit.
*Predicted default read:* "Social unrest adds to pressure on the government." Flagged as a risk factor without a mechanism.

---

**A-10 · 14:20 · Banking Sector Monthly, annex table 4**
> FX share of resident deposits rose to 47.3% from 41.8% over three months.

**Signal — bearish MVI.** The fastest-moving item on the board and the one that makes devaluation self-fulfilling: every resident converting is a bid for dollars the central bank must meet. This is the mechanism that produces A-01 month after month, and it is buried in an annex.
*Predicted default read:* "A sign of declining confidence in the local currency." Named correctly, then dropped — not linked to the reserve drain as its cause.

---

### Day 1 key

| | Signal | Noise |
|---|---|---|
| **Items** | A-02, A-04, A-07, A-08, A-10 | A-01, A-03, A-05, A-06, A-09 |

Direction sub-tag applies to signal items only; all five are bearish MVI. The expected failure mode is a player who identifies A-02 as a signal and tags it bullish — full marks on recall, wrong on the trade.

---

## Appendix B — Day 2 escalation map

The same board moves. Nothing prompts the player to revisit Day 1 tags; the re-tag screen simply reopens with the updated items in place. Three new items arrive. **The PM call lands after B-07**, while B-11 through B-13 are still coming in.

### Resolutions

**B-01 · Reserves → promoted to signal.** An IMF staff document circulating among market participants puts net reserves, after the forwards book, at roughly a third of the gross figure. The Day 1 item was noise; the underlying series was not. Teaches that "already in the price" is a statement about a specific number, not about a topic.

**B-02 · The hike → confirmed, painfully.** MVI is weaker than pre-announcement across every offshore venue. The inversion is now observable rather than arguable, and the player who tagged bullish sees it priced against them.

**B-03 · The minister → resigns. Nothing happens.** MVI unchanged on the news. The cleanest confirmation on the board, and the item most players got wrong for the most understandable reason.

**B-04 · The circular → enforced and extended.** Surrender requirement raised to 100% within 3 days, with penalties for non-compliance announced. The onshore fix is now almost entirely administered. Any player still reasoning from onshore spot is reasoning from a policy variable.

**B-05 · The sell-side note → capitulation.** The same desk publishes a downgrade and cuts its recommendation. The forced selling implied on Day 1 is now happening. Still not information about Marava; it is information about positioning.

**B-06 · The CPI print → trap confirmed.** IMF review terms require energy subsidy removal. Administered prices reset; next month's print will carry the whole deferred adjustment at once.

**B-07 · The NDF → widens, and gets less reliable.** Implied depreciation extends sharply, but the bid-offer blows out and offshore liquidity thins. The best signal on the board degrades exactly when it matters most. The subtle lesson: a price you cannot transact in is a weaker signal than a price you can, and players who anchored entirely on A-07 have nowhere to stand.

**B-08 · The denial → repeated, escalated.** The presidency announces an investigation into speculative activity against the currency. Denial plus enforcement is a stronger tell than denial alone.

**B-09 · The protests → promoted to signal.** Public sector unions call a general strike in the capital. This is now the binding political constraint: the central bank cannot hike again, which removes the only remaining orthodox response. The item that was correctly noise is now the most consequential development of the day.

**B-10 · Dollarisation → suppressed, not fixed.** Banks impose limits on FX deposit withdrawals. The measured series will now improve while the underlying behaviour worsens and moves to the parallel market. A statistical artefact of exactly the kind this audience is trained to catch.

### New items

**B-11 · IMF statement.** *"Discussions were productive and staff will return in September."* **Noise, and a trap.** No staff-level agreement means no disbursement, and September falls after the external maturity the programme was meant to cover. The absence of the phrase *staff-level agreement* is the entire content of the release.
*Predicted default read:* "Constructive engagement with the IMF is a positive development."

**B-12 · Interbank plumbing.** Overnight interbank rates trade well through the policy rate; two state banks stop quoting FX to clients. **Signal — bearish MVI.** Funding stress is now visible in the plumbing, which is where crises become mechanical rather than narrative.

**B-13 · Peer moves.** A broad EM currency index is weaker on the day and EM local-debt funds report outflows. **Noise.** Generic beta, not Marava-specific. Tests whether the player separates idiosyncratic from systematic — the last item on the board and the one most likely to be over-read by a player who has spent two days primed to find danger.

### Day 2 key

| | Signal | Noise |
|---|---|---|
| **Items** | B-01, B-02, B-04, B-07, B-08, B-09, B-10, B-12 | B-03, B-05, B-06, B-11, B-13 |

Two tag changes are the target behaviour: **A-01 noise → B-01 signal**, and **A-09 noise → B-09 signal**. Neither is prompted. A player who makes both without being told has demonstrated the one thing this sim exists to teach.

## Appendix C — AI development log

Chat and agent logs, including the captured default reads used in the table in §1 and the corrections made to them.
