---
title: The Broken Oracle · System Run
eyebrow: Session 1 cooperative card game · 22 minutes · 3–5 players
summary: Trace a consequential airline-assistant failure, commit one controlled system change, test it, and make an evidence-based operating decision.
---

# The Broken Oracle · System Run

## Purpose

The Broken Oracle is a cooperative card roguelike played before the lecture. It begins with a dramatized customer story based on a public tribunal decision: an airline assistant gives a precise fare instruction, a traveler relies on it, and the airline's published policy later says the opposite. Your party must reconstruct the business system, locate a testable failure, commit one repair, test it, and decide what the evidence supports.

The playable airline, traveler, interface, routes, dates, and amounts are fictional. The real-case basis is [Moffatt v. Air Canada, 2024 BCCRT 149](https://www.canlii.org/en/bc/bccrt/doc/2024/2024bccrt149/2024bccrt149.html). The decision does not identify the chatbot's technical architecture, so do not assume it was an LLM or label the error a hallucination. This is not legal or travel advice. Speed does not affect the result.

## Learning goals

By the end of the run, you can:

1. Explain why a confident system answer is not evidence that the answer is supported.
2. Separate policy source, context or retrieval, assistant, interface, workflow, validation, permissions, and accountable human authority.
3. Locate a plausible failure, state a testable system hypothesis, and name the evidence that would distinguish it from alternatives.
4. Change one component while holding the case constant, compare baseline and revised behavior on a representative and failure case, and define the next operating decision.

## Case briefing · read before opening the hand

### 1 · The urgent journey

Jordan Lee must make a time-sensitive trip after a family loss. Meridian Air's official **Fare Oracle** appears to be the fastest authoritative source for the airline's reduced-fare rules.

### 2 · The promise

Fare Oracle tells Jordan:

> Purchase a standard fare now. After you travel, submit the reduced-fare request within 90 days and the adjustment can be applied retroactively.

### 3 · The action

Jordan relies on the answer and buys an outbound and return ticket at the standard price.

### 4 · The contradiction

After travel, customer care rejects the request. The published policy says the reduced fare must be approved before travel and cannot be applied retroactively to completed travel.

### Evidence packet

- the captured Fare Oracle answer;
- the published reduced-fare policy;
- the outbound and return ticket receipts;
- the submitted request; and
- customer-care correspondence applying the policy.

### Current system

**Policy owner → Policy source → Fare Oracle → Purchase decision → Refund workflow → Human review**

The public record establishes the contradictory representations, reliance, and consequence. It does **not** identify the chatbot's technical architecture or root cause. During the run, the team may change exactly one system component.

### Mission

Determine which representation is supported, locate where the contradiction could have entered or escaped, choose one controlled repair, test it on a representative and failure case, and establish the operating boundary.

Before opening the shared hand, answer:

1. What exact claim changed Jordan's decision?
2. Which evidence supports or contradicts that claim?
3. Which part of the organization owns the result?

## Analytic roles

Choose one role. Roles are discussion lenses over one shared party hand; they do not create separate decks or private cards.

| Role | Owns | Question |
|---|---|---|
| **Product** | Task | What decision must the message support? |
| **Evidence** | Context | What is supported, missing, or contradictory? |
| **Systems** | System | Where can the failure originate? |
| **Risk** | Risk | What must never pass automatically? |
| **Operations** | Operations | What must work repeatedly in practice? |

With fewer than five players, use the available roles and make sure the party still asks the unassigned questions. No one needs to perform a character.

## What is on the table

- **Focus** is the party's shared action budget for the current round. Playing a card spends Focus; it resets when the party ends the round.
- **Integrity** is the run's remaining system integrity. Unresolved Exposure reduces it at the end of a round; reaching zero stops the run safely.
- **Exposure** shows unresolved consequential risk. Unsupported claims and missing safeguards can increase it.
- **Evidence** records explicit support for the party's decisions.
- **Change token** can be spent once. The party must name the component changed and what remains fixed.

Cards are grouped as **Inspect, Design, Test, Govern,** and **Shortcut**. A Shortcut can move quickly without addressing the controlling failure. Read the card text, not just its art or category.

## How an encounter works

The game presents the customer story, evidence packet, system boundary, real-case finding, operating constraints, and mission before any cards appear. Complete that briefing first; the shared hand opens afterward.

1. Read the active story beat, evidence conflict, and operating constraint.
2. Review the five-card shared hand.
3. Discuss which card best addresses the current decision.
4. One player proposes and commits a card after the party agrees.
5. Inspect its Progress, Exposure, and Evidence result; then play another affordable card or end the round.
6. Ending the round applies unresolved Exposure to Integrity, restores Focus, and draws a new shared hand.
7. After resolving a non-final encounter, choose one reward card quickly and add it to the shared deck.

The prototype resolves each shared card when the party commits it. There is no movement, combat, character level, or speed bonus.

## Run map

| Run time | Encounter | Party decision |
|---|---|---|
| 0:00–3:00 | **Story briefing** | Follow the promise, purchase, and denial; state the decisive claim, evidence conflict, and consequence |
| 3:00–5:00 | **Signal Check** | Mark consequential claims supported, unsupported, or unknown |
| 5:00–8:00 | **System Map** | Locate possible failures across the complete business system |
| 8:00–11:00 | **Source Gap or Review Boundary** | Choose which branch to address first |
| 11:00–14:00 | **Remaining branch** | Complete the other required investigation |
| 14:00–18:00 | **Controlled Test** | Spend the single Change token and complete representative and failure coverage |
| 17:00–21:00 | **Release Decision** | Resolve what the current Evidence and Integrity support |
| 21:00–22:00 | **Record** | State the next test that could change the decision |

**Reward choice is included in each non-final encounter window.** Choose one of the offered cards in about 15 seconds and continue. The branch changes encounter order, not requirements: every run completes both Source Gap and Review Boundary before Controlled Test.

## Three valid endings

- **Ready with gates:** The run retained high Integrity and accumulated enough Evidence for a bounded release.
- **Human-led workflow:** Keep the consequential decision with a named reviewer.
- **More evidence required:** Stop release and identify the next case needed.

The game computes the ending from the run's Evidence and remaining Integrity; the party does not freely select it. A party does not lose for reaching a human-led or more-evidence result.

If Integrity reaches zero, the run stops safely with **More evidence required**. If the live game is unavailable, your instructor may use a separate printable activity with the same evidence questions.

## End-of-run record

Before leaving class, add these items to your Agent Card:

- the decisive claim and supporting evidence;
- the suspected failure location and hypothesis;
- the one component changed and what stayed fixed;
- the representative and failure test results;
- the human-review condition; and
- the next test.

## Accessibility

- Every card and branch action has a keyboard-operable control.
- Card categories use text and icons in addition to color.
- Reduced-motion mode preserves every decision and result.
- The shared tracks are also stated in text.
