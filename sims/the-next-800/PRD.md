# Project 2 PRD: The Next 800

![A Chinese male distance runner checks his watch beside a track in hot and humid weather.](assets/the-next-800-cover.png)

| Item | Details |
|---|---|
| Author | Alhabor |
| Format | Individual iCerynk teaching simulation |
| Duration | Approximately 15 minutes |
| Players | One player, or a group of up to five |
| Final player artifact | A rep-by-rep adjustment record |

## 1. Concept and learning objective

*The Next 800* is a short decision simulation about adjusting a Yasso 800 workout when a capable marathon runner arrives with several imperfect but non-conclusive signals: mild ambiguous discomfort, insufficient sleep, accumulated fatigue, and hot, humid weather.

**After the simulation, a player can combine athlete-specific context with warm-up and rep-by-rep feedback to make staged, reversible changes to pace, recovery, and—only when necessary—the number of repetitions.**

The central decision is not simply “train or cancel.” It is: **How should the next 800-meter repetition be changed in response to the information available now?**

## 2. Audience and fictional athlete profile

The intended player is a self-coached experienced runner or a beginning distance-running coach. The athlete in the scenario is fictional:

- 25-year-old Chinese man
- approximately a 3:00 marathon and a 1:25 half marathon
- six weeks from a goal marathon
- recent training has been consistent, but recovery from the latest long run has been slower than usual
- no real person's training file, name, location, medical history, or device data is used

The fictional profile gives the player enough context to make a meaningful decision without pretending that one rule applies to every runner.

## 3. The iCerynk card

| Field | Content |
|---|---|
| Title | **The Next 800** |
| Subtitle | Heat, fatigue, and uncertain discomfort are changing the plan. Decide how to run the next repetition. |
| Summary | A three-hour marathon runner is six weeks from his goal race and has a Yasso 800 workout scheduled. Players receive his training context, same-day condition, warm-up response, and interval feedback in stages. They must build and explain an adaptive pace, recovery, and repetition strategy. |
| Learning objective | Combine athlete context and live feedback to make staged, reversible workout adjustments. |
| Duration | 15 minutes |
| Team size | 1–5; solo play is supported |
| Result | Rep-by-rep adjustment record |
| Tags | adaptive planning, pacing, fatigue management, risk judgment |
| Cover | `assets/the-next-800-cover.png` |

## 4. Starting scenario

The planned session is a fictional `10 × 800 m`, initially targeted at approximately `3:00` per repetition with about `2:30` of easy jogging recovery. These values describe this athlete's plan; they are not presented as universal Yasso rules.

On the day of the workout, the player learns:

- the athlete slept about 5 hours 45 minutes, less than his normal amount;
- the temperature is about 30°C (86°F) with approximately 75% humidity;
- his legs feel heavier than usual after recent training;
- one calf has common mild tightness and soreness, but walking is normal, with no sharp pain or visible swelling;
- before warming up, the meaning of the discomfort is intentionally uncertain.

## 5. The 15-minute run

| Beat | Time | Information revealed | Player action |
|---|---:|---|---|
| 1. Establish the baseline | 4 min | Athlete profile, six-week race horizon, planned workout, recent load, sleep, and weather | Identify the workout purpose and choose what information matters most before changing the plan |
| 2. Choose the cautious starting point | 5 min | After an easy warm-up, the calf is neither worse nor fully gone; gait remains normal; easy pace is slower and effort is higher than usual | Set the first one or two repetitions' pace and recovery, plus the conditions that would trigger another adjustment |
| 3. Control the workout | 6 min | Rep-by-rep effort, movement quality, discomfort trend, and recovery response | Adjust the next repetition, decide the final number of repetitions, and explain the sequence of changes |

### Feedback logic

The simulation does not reveal one automatic “correct” answer. It evaluates the quality and order of the player's reasoning.

| Player strategy | Simulated feedback | Reasonable next move |
|---|---|---|
| Starts at the original pace with short recovery | Effort rises rapidly and calf discomfort increases slightly, although movement is still controlled | Slow the next repetition and observe; lengthen recovery if control does not return |
| Starts slightly slower and keeps the planned recovery | Discomfort stays stable and breathing becomes more controlled | Hold for another repetition; if the trend improves, increase pace gradually |
| Starts slower and uses longer recovery | The session feels controlled and discomfort does not rise | Increase pace one step at a time and gradually shorten recovery rather than restoring everything at once |
| Pace and recovery adjustments still fail to preserve movement quality, or discomfort clearly worsens | The likely benefit of another hard repetition falls while uncertainty rises | Reduce the remaining repetitions; stop and seek appropriate professional assessment if clear warning signs appear |

### Three meaningful endings

1. **Improving:** The athlete begins conservatively, then gradually approaches the planned pace while recovery becomes shorter.
2. **Stable but limited:** The athlete keeps a slower pace or longer recovery and completes all or most repetitions without forcing the original numbers.
3. **Quality cannot be preserved:** After trying pace and recovery adjustments, the player reduces the repetition count. Clear worsening or changed movement ends the workout rather than becoming a training optimization exercise.

## 6. The domain judgment built into the sim

The design uses a staged adjustment sequence:

1. Begin by lowering pace when the combined signals make the original target questionable.
2. If the athlete still cannot regain control, lengthen recovery.
3. If the athlete improves, raise pace gradually and shorten recovery gradually, using each repetition as new evidence.
4. Reduce the total number of repetitions only after the less destructive adjustments do not work.
5. Treat clear worsening, changed movement, or other warning signs as a safety boundary rather than as an invitation to keep optimizing.

This sequence is deliberately flexible. Mild discomfort has different meanings across athletes, so the sim asks what changed relative to this athlete's baseline instead of using a universal pain score or recovery time.

## 7. Why this is better than simply asking AI

The unassisted text model received only this prompt:

> Create a 15-minute simulation that teaches a marathon runner how to adjust a Yasso 800 workout when he feels tired, has mild pain, and must train on a hot and humid day.

The complete unedited response is in `ai_evidence/01_subagent_text_log.md`. It was useful as a safe first draft, but it missed the central expert judgment:

| Raw AI design | Limitation | Author's correction |
|---|---|---|
| “**Best choice for this scenario: Option B or C.**” | It moves quickly to time-based intervals or an easy-run replacement before testing a reversible Yasso-specific adjustment path. | Keep the central Yasso decision and make the next repetition the unit of adjustment. |
| “**4–5 × 800 meters instead of 8**” | It cuts repetition count at the beginning. That removes the chance to learn whether pace and recovery changes can preserve the session. | Adjust pace first, recovery second, and repetitions last. |
| “**4 × 3 minutes ... with 3 minutes of easy recovery**” | It replaces the workout with a new fixed structure and does not teach recovery to shorten rep by rep when the athlete improves. | Make both pace and recovery dynamic variables controlled by feedback. |

The model's safety boundaries were retained. What changed was the overly binary and conservative training logic. The author contributed the six-week timing, athlete ability, flexible recovery, ambiguous everyday discomfort, and the rep-by-rep adjustment order. A reader can verify the improvement by comparing whether each version answers: **What changes first? What new evidence changes the next repetition? When is reducing repetitions justified?**

## 8. Scope and feasibility

This is a small browser-based sim that a team could plausibly prototype in about two weeks. It requires three information screens, a limited set of pace/recovery choices, conditional feedback, a final adjustment table, and a debrief. It does not require live wearable integration, medical diagnosis, a complete marathon plan, or prediction of race performance.

## 9. AI outputs and disclosure

Two generative outputs are included:

1. **Text:** an unassisted Codex sub-agent response, preserved without editing as comparison evidence.
2. **Image:** an AI-generated landscape cover showing the fictional runner making a pre-workout decision in hot, humid conditions.

Prompts, dates, model-visibility limitations, raw output, and the author's correction record are preserved in `ai_evidence/`. The image was accepted from the first generation and was not post-edited. The final PRD was reviewed and directed by the author; AI did not supply personal experience or real athlete data.

## 10. Safety and research boundary

This is a teaching simulation, not medical or individualized coaching advice. Its design is consistent with the broader principle that pain is context-dependent and that heat, sleep, and accumulated load should be interpreted together rather than through one universal threshold. Supporting references:

- [IOC consensus statement on pain management in elite athletes](https://bjsm.bmj.com/content/51/17/1245)
- [Consensus recommendations on training and competing in the heat](https://pubmed.ncbi.nlm.nih.gov/26069301/)
- [Sleep and the athlete: 2021 expert consensus recommendations](https://pubmed.ncbi.nlm.nih.gov/33144349/)
- [IOC consensus statement on load in sport and risk of illness](https://bjsm.bmj.com/content/50/17/1043)
