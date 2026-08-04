# The Cut · A New icerynk Sim

This is a standard Product Requirement Document, adapted for Project 2.

The goal of a PRD is to explicitly define what a product should be, so that the thing you make is actually wanted and everyone building it works from the same description.

For Project 2 there is a third reason, and it is the one being marked: a PRD is where you show your judgment. Anyone can ask a model for a simulation. This document is where you prove your version is better, and give a reader a way to check.

## What a sim is

A sim is a real-time learning activity. It drops a player into a simulated situation, teaches them one thing, and makes them use it. The interactivity is what enforces the learning - there is no quiz at the end.

## Read this part before you start
You are designing one small teaching sim. Not a game, not a platform, not a curriculum.
Three tests. If your idea fails any of them, make it smaller before you write a word:
1. One thing to learn. You can say what a player understands afterwards that they did not
2. One decision. The room argues about a single question and answers it out loud.
3. Fifteen minutes. Start to finish, including the debrief.

## What it teaches

**After this run, a player can distinguish between a musical part that genuinely supports the core of a song and one that merely fills space**

You would know it worked if, in the debrief, somebody says, "We cut the part that was technically perfect, but we cut it because it was stealing attention from the vocal," without being prompted to describe it that way.

## Overview

*The Cut* is a 15-minute team sim in which a production team has to finalize a mix for a single song before a midnight streaming deadline. They can mute exactly one track in the chorus—and only one—and they must agree on which one to remove. The point is that the part they argue about for ten minutes barely changes the song, while the part nobody questions actually decides the final quality.

## Goals

- Make "frequency masking" audible without technical jargon
- Produce a real disagreement about a single track within five minutes
- Let a player who has never touched a DAW contribute a genuine opinion
- End with a final mix the room has to export, and a reason they chose their cut

## Non-Goals

- Teaching anyone how to use a DAW
- Any fader adjustments, panning, or EQ
- Accuracy about any real band or record label
- More than one decision

## Audience

Music students who have played in ensembles but have never had to defend an arrangement choice. Teams of three to five. They will argue about "what sounds good" but they will not touch a mouse—every track is labeled and color-coded on screen.

## Existing solutions and issues

A lecture on arrangement covers the theory but produces no disagreement. A DAW exercise is private—one person drives, everyone else watches. Asking a model to "list five reasons to simplify a mix" produces a correct, forgettable list. None make anyone feel the anxiety of muting a part they recorded. See Part 7.

## Assumptions

- Players will argue about the "obvious" filler (synth) and leave the subtle texture layer (backing vocal) alone. (This is the misconception the sim runs on.)
- Players will not trust their ears under time pressure.
- Teams will default to keeping everything unless someone explicitly advocates for subtraction.

## Constraints

- Runs in a browser, in class, no install, no account beyond icerynk
- 15 minutes, including the debrief
- Teams of three to five
- All evidence for a round fits on one screen
- No mixing or engineering by the player—they click one mute button and hear the result
- Buildable by a small team in about two weeks

## Key use cases

**Understand the situation in 90 seconds.** One screen: a song title, a deadline at midnight, and a message from the producer: "The chorus is too busy. Mute one track."

**Hear the clutter without being told.** The loop plays automatically. Four tracks: lead vocal, double-tracked backing vocal, synth, and bass with drums. The backing vocal and lead vocal are fighting for the same mid-range frequency. Nobody is told this. The *sound* is the tell, and some rooms miss it until they spend their mute.

**Spend the one change they get.** They click one mute button. The loop replays. They cannot unmute it.

**Export the mix, or refuse to.** They sign off with a one-sentence rationale, or they export the original and write down what they were afraid to lose.

## The card

**Title.** The Cut.

**Subtitle.** You have one chance to mute and ten minutes to save this chorus from clutter.

**Summary.** A producer has left the studio, a song needs to be exported by midnight, and the chorus is a mess. Your room gets a loop, a grid of tracks, and exactly one mute. Agree on what to cut—and defend it.

**Learning objective.** After this run, a player can distinguish between a musical part that supports a song and one that clutters it, and defend cutting the clutter.

**Duration.** 15 minutes.

**Team size.** 3–5.

**Result.** A finalized mix and a one-sentence rationale.

**Tags.** Arrangement, Mixing, Critical Listening, Production Judgment, Subtraction.

**Cover image and alt text.** A landscape shot of a messy mixing console with only the mute buttons highlighted in red. Alt text: *"A crowded digital audio workstation screen showing four colorful audio tracks, with only the red mute buttons on non-Lead Vocal tracks illuminated among a sea of grey controls."*

## The run

| Beat | Minutes | What the room sees | What the room does |
| :--- | :--- | :--- | :--- |
| 1 | 3 | The title screen, deadline, and chorus loop plays three times. | Listen, take no action, identify which track they instinctively want to cut. |
| 2 | 7 | Track grid appears with 4 labeled mute buttons. Loop replays on a 15-second cycle. | Argue their role's position. Vote. Click one mute. Loop replays with the cut. |
| 3 | 5 | Final mix plays once. A text box appears. | Write a one-sentence rationale. Export or refuse. Debrief begins. |

**The limit.** One mute. They cannot unmute it.

**The tempting wrong move.** Cutting the synth. It is the loudest and most "obvious" filler part, and the room will argue about it for six minutes. Muting it cleans up the high end but does nothing for vocal clarity. The room feels like they acted decisively, but they solved the wrong problem.

**The endings.**
- **Cut the double-tracked backing vocal.** The room identifies the masking between the lead and backing vocal. They cut the double, the lead vocal snaps into focus, and the mix breathes. Export a professional, vocal-forward track.
- **Cut the synth pad or the bass and drums.** The room cuts the "obvious" filler. The mix is cleaner, but the vocal still fights with the backing track. Export a marginally improved mix and wonder what you missed.
- **Refuse to cut anything.** The room cannot agree, or they decide the original is "good enough." Export the original. Meet the deadline, but leave with unfinished business.

## Research

### Domain research

**HOW MUCH OF A MIX'S CLARITY IS DETERMINED BY ARRANGEMENT RATHER THAN EQ?**

Professional engineers often say "mute, don't EQ." A crowded arrangement with multiple parts in the same frequency range cannot be fixed with a filter—the problem is compositional. Muting a single conflicting part clears up more headroom than any plugin. The exact frequency range is not the teachable point. The point is that the part nobody notices is the one causing the problem, because it arrives as a "safety net" rather than as a necessity.

### Model research

**WHAT DOES IT PRODUCE WHEN ASKED TO DESIGN THIS?**

Asked for a music production simulation, it produced a full mixing exercise with EQ knobs, compression ratios, and a scoring rubric—a lesson in engineering mechanics, not listening judgment, and unrunnable in fifteen minutes.

## Part 7 - Why this beats just asking AI

### The bare prompt

*"Design a 15-minute music production simulation for students to learn about mixing."*

### What it produced

The full output is attached as `Mixing Simulation Design.pdf`. The key sections are reproduced below:

---

**"Mix Like an Engineer" — 15-Minute Music Production Simulation**

**Audience:** High school or college students with little to no mixing experience

**Objective:** Students experience how mixing balances individual tracks to create a polished song.

**Learning Goals:**

By the end of the simulation, students should be able to:
- Explain the purpose of mixing.
- Identify common mixing controls (volume, panning, EQ, reverb).
- Make basic mixing decisions to improve clarity and balance.

**Materials:**
- Computer with a DAW (GarageBand, Ableton, FL Studio, Logic, or BandLab)
- Project containing 5-6 pre-recorded tracks
- Speakers or headphones

**Simulation Timeline (15 Minutes):**

- **Minute 0-2:** Listen to raw multitrack and a finished professional mix. Discuss differences.
- **Minute 2-5:** Challenge 1 — Volume Balance. Adjust faders until nothing dominates.
- **Minute 5-8:** Challenge 2 — Stereo Placement. Pan instruments left/right.
- **Minute 8-11:** Challenge 3 — EQ Cleanup. Remove rumble, reduce mud, add brightness.
- **Minute 11-13:** Challenge 4 — Add Effects. Add reverb and delay to vocals.
- **Minute 13-15:** Final Playback and Reflection. Answer three quiz questions.

---

### Where it fell short

| The model's line | What is wrong with it | How I know |
| :--- | :--- | :--- |
| *"Identify common mixing controls (volume, panning, EQ, reverb)."* | This is a list of *topics*, not a single capability. The sim tries to teach four separate skills in 15 minutes. None stick. | The PRD template requires one thing to learn. This has four learning goals, which means students learn none of them deeply. |
| *"Minute 2-5: Challenge 1 — Volume Balance... Minute 5-8: Challenge 2 — Stereo Placement... Minute 8-11: Challenge 3 — EQ Cleanup... Minute 11-13: Challenge 4 — Add Effects."* | Four separate challenges in 15 minutes means each gets ~3 minutes. There is no time for argument, disagreement, or real judgment. It is a checklist, not a sim. | The template requires "one decision" the room argues about. This has four decisions, each rushed. Students follow instructions rather than debate. |
| *"Students answer: What was the biggest improvement? Which tool made the greatest difference? What would they change with more time?"* | These are post-hoc reflections, not a consequential choice. The "mix" is graded on correctness, not judgment. There is no moment where the room must choose one thing and live with the consequence. | The sim's endings are all the same: "Student mix" vs. "Rough mix." There is no scenario where choosing the "wrong" cut reveals something important. The learning is shallow. |

### What I supplied that it could not

The rule that in a good mix, subtraction is more powerful than addition. The constraint that a browser sim cannot handle a full DAW. The real-world pressure of a midnight deadline with a single, irreversible decision.

### The correction log

| The model proposed                                                       | I changed it to                                           | Why                                                                                                                        |
| :----------------------------------------------------------------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------- |
| Four challenges (Volume, Panning, EQ, Reverb).                           | One decision: Mute one track.                             | The assignment requires one decision.                                                                                      |
| A full DAW with faders, pan knobs, and EQ plugins.                       | A grid of 3 mute buttons.                                 | Faders and EQs require engineering knowledge. A mute button requires only ears and courage.                                |
| A before/after comparison where the "student mix" is objectively better. | Three endings, none of them losing.                       | There is no "correct" mix. The learning is in the argument, not the outcome.                                               |
| A post-session quiz with three factual questions.                        | A one-sentence rationale for the cut.                     | The template explicitly says: "there is no quiz at the end." Judgment, not recall.                                         |
| Technical labels like "Cut 3dB at 250Hz."                                | Emotional labels like "Lead Vocal," "Synth Pad."          | Players must judge feel and texture, not frequencies they don't understand.                                                |
| A simulation where all tracks stay and are adjusted.                     | A simulation where one track is removed entirely.         | The model assumed mixing is about *adding* processing. The real insight is that mixing is often about *subtracting* parts. |
| 5-6 pre-recorded tracks with no clear conflict.                          | 4 tracks with a deliberately engineered masking conflict. | Fewer tracks sharpens the argument. The conflict must be audible, not hidden.                                              |

### The test a reader can run

Play any four-track loop for a room and ask: "Which track would you cut?" Time how long it takes them to agree. In the model's version (with EQs, faders, and four challenges), the room will defer to whoever has the most technical knowledge and stop talking within two minutes. In *The Cut* version (with only mute buttons and a single decision), the room will argue for six minutes because everyone's ears are equally valid. A professional producer would agree: *the right cut is the one that serves the song, not the one that obeys a rulebook.*

## Part 8 - Generative AI outputs

| Field                      | Output 1                                                                                                                                                                                     | Output 2                                                                                                                                                                                                     |
| :------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| What it is                 | Cover image for the sim catalog entry.                                                                                                                                                       | Audio loop of a 4-bar chorus with 4 tracks.                                                                                                                                                                  |
| Modality                   | Image                                                                                                                                                                                        | Audio                                                                                                                                                                                                        |
| Exact model ID             | *[DALL-E 3]*                                                                                                                                                                                 | *[Udio v1.5]*                                                                                                                                                                                                |
| Date generated             | *[2026-08-03]*                                                                                                                                                                               | *[2026-08-03]*                                                                                                                                                                                               |
| Prompt used                | *""A messy DAW interface with 4 colorful audio tracks, red mute button illuminated, dim studio lighting, 16:9.""*                                                                            | *"Generate a 30-second pop chorus loop, with 4 tracks: lead vocal, double-tracked backing vocal, synth and bass&drums. Make the mid-range clash between the lead vocal and backing vocal clearly audible. "* |
| What you rejected first    | An output with only a single mute button on the Lead Vocals, with made-up names for the other tracks, and the mute button is easily missed.                                                  | A loop where the backing vocal wasn't even included, as well as not having each part separated.                                                                                                              |
| What you edited afterwards | Told it to add the mute button to all tracks but Lead Vocals, make the button bigger, and gray out the rest of the interface. Also edited the track audio visuals to match the actual track. | Separated each track, then boosted the backing vocal in the to create obvious masking with the lead vocal. Saved a new file for each version where a single track was muted.                                 |

**Disclosure.** Cover image generated by DALL-E 3 on [2026-08-03]. Audio loop generated by Udio v1.5 on [2026-08-03]. Tracks separated with LALAL.ai and edited to boost conflicting frequencies.
