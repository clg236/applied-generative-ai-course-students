---
title: Project 1 · The Switch Test
eyebrow: Pair assignment
summary: In pairs, find something in the built environment around NYU that a model could help with, test two models against it, and present the case in three minutes.
---

# Project 1 · The Switch Test

In pairs, explore the **built environment** around NYU and find one way an AI model could make New York a better place to live and work.

Then find out whether it actually would. You will run the same task on different models and compare. That is the "switch."

**Pairs · 20% of your grade · Presented at the start of Session 3, Friday 31 July**

Use OpenRouter at [openrouter.ai/chat](https://openrouter.ai/chat), or any playground you like — [Hugging Face Spaces](https://huggingface.co/spaces) works too. What matters is that you try **different models on the same problem**.

---

## Step 1 — Pick a problem

Go and look. The city is full of this and you will not have to hunt.

- **Ride the subway.** A service change poster, a wrong timer, an out-of-service elevator, leaks everywhere, some dangerous, etc...
- **Try and find people working** A lot of people are working around NYC, don't disturb them, but think about if there would be a way for a generative model to make a bit of that easier.
- **Watch traffic for ten minutes.** It's crazy. I wonder if we could use AI to make NYC safer in this regard?

Ideally you are looking for **something a person has to do again and again** that is harder than it needs to be, and ideally again, because the information they have is not as good as it could be.

Write four lines:

1. What you saw
2. Who it makes life harder for
3. What they have to do about it now
4. What information or capability is missing (don't say anything about AI right now!)

**You have to be able to be wrong.** Test this: can you write the correct answer down yourself, before running anything? If not, pick something else.

- Works: "Hey Claude, pull the expiry date off this permit."
- Maybe Works: *takes a photo of 3 manholes* "Hey Claude, which agencies own these 3 manhole covers?!"
- Does not work: "Summarize the mood of these pigeons in Washington Square Park."

### Examples

**Text only.** You type or paste the input. Any model can try these:

- Given a parking sign typed out line by line — can I park here at 4pm on a Tuesday?
- Given a weekend service alert — do my trains run, and until when?
- Given a menu in a language you don't read — which dishes have no meat?

**Photos.** Needs a model that can see images (you can filter in openrouter for these):

- What does a bacon egg and cheese cost at this bodega?
- Is this scaffolding permit still valid today?
- Which of these four bins takes the pizza box?

Photos are more fun honestly, but fewer models can read them, and Step 4 requires one open-weights model and one closed one. Check the model cards before you commit to a photo.

**Other media.**
You're also free to try other media types (audio, video) - a lot of models can process these media types, this will be interesting but probably more difficult (that's fine, I don't grade on success or failure).

---

## Step 2 — Write the task, and the rules for grading it

One sentence:

> Given **[input]**, produce **[output]**, so **[person]** can **[do something]**.

Then say where the model sits in the **solution workflow**: who supplies the input, who checks the output, and what happens when the model has nothing useful to say.

Name **one way to fix this without AI at all** — a bigger sign, a better form, a phone number, walking around and entering data in a databse. If that is the better answer, say so in your presentation (but give us the proof you at least tried with AI!)

Then, **before you run anything**, write down:

- What information do you need? (this could be a single photo, or many, or a video, or a piece of text)
- What counts as a correct value
- What the model should say when the input does not contain the answer (hopefully: I don't know the answer!)

"I can't tell from this" is a **correct** answer. A confident guess in its place is a **failure**.

---

## Step 3 — Build six test cases

- 3 ordinary, common scenarios
- 2 where the honest answer is "can't tell"
- 1 hard: bad light, obscured text, blurry photo, or an exception in the small print

Write the correct answer to all six, first. That is your answer key. Do not change it later. You'll test these in the next step.

---

## Step 4 — Run it three times

| Run | What you change |
|---|---|
| **Baseline** | Nothing. One model, six cases. |
| **Eval A — cheaper or faster** | One thing that saves money or time: a smaller model, a free model, one pass instead of three. |
| **Eval B — better** | Go back to the baseline. Change one *different* thing: a stronger model, paste in the actual rule or timetable, or make it quote the evidence for each field. |

Change **one thing at a time**, against the same six cases. Change two and you will not know which one did it!

Across the three runs, use **at least one open-weights model and at least one closed model**. Free does not mean open-weights. The free list has both, so check the model card. I'll talk about open-weight models later, for now just do me a favor and try one.

Keep every raw output (settings menu has the raw markdown you can download).

---

## Step 5 — Work out the cost

1. Copy the price off each model card.
2. Estimate tokens as words ÷ 0.75, openrouter will also give you the cost if you use that platform.
3. If your workflow has a human review step, then put an hourly rate on whoever checks the output, you can estimate ($25/hr? or maybe $50 if it's an expert that needs to review?)

> **Cost per accepted result = (model cost + review time) ÷ answers you would actually use**

Make a table that shows the tradeoffs from a cost perspective. A free model can be the expensive one if it sucks. Nothing per call plus four minutes of fixing costs more than two cents and twenty seconds using GPT 5.whatever Max.

---

## Step 6 — Decide

Half a page:

- Does it help?
- Which version would you hand to someone?
- What must a person still check?
- What do you still not know?

---

## Step 7 — Three minutes, at the start of class

You present as a pair on Friday morning. **Three minutes** Roughly:

| | |
|---|---|
| **~30s** | What you saw, and who has the worse day |
| **~45s** | Where the model sits in the workflow — and the way to fix it without AI |
| **~60s** | The switch test: what actually differed between the two models |
| **~45s** | What you would ship, what a person still checks, what you still do not know |

One slide for each, or one page if you want it. Nothing too fancy.

**Both of you speak.** Split it however you like, but a pair where one person talks for three minutes has not done a pair project.

---

## What to hand in

**Before class Friday**, one PDF or zip through Brightspace so the evidence exists:

- [ ] The four lines
- [ ] Your task sentence, the workflow, and the non-AI alternative
- [ ] The six cases with your answer key
- [ ] The three sets of results
- [ ] The cost arithmetic
- [ ] Appendix: every raw output, as text plz so my AI agent can read it easily ;)

Name the models exactly and date every run. Models change under the same name.

**The presentation is what is marked.** The document is the evidence behind it.

| Marks | |
|---:|---|
| 25 | The problem is real, specific |
| 20 | Criteria written before running anything, and a named non-AI alternative |
| 25 | Two evals, one change each, same six cases, one open-weights and one closed |
| 20 | Honest reporting, including what got worse |
| 10 | Three minutes, both of you speaking, a decision someone could act on |

Note that a careful project on an idea that did not work beats a confident one that tested nothing!
