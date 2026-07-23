"""
agent.py — your first agent. (Applied Generative AI, NYU Stern, Summer 2026)

An "agent" sounds mysterious. Here's the whole trick, in ~100 lines:

    1. A MODEL        — a program that predicts the next token (word-piece)
    2. INSTRUCTIONS   — a "system prompt" telling it who to be and how to behave
    3. MEMORY         — the list of every message so far, resent on every turn
    4. A LOOP         — read your message, ask the model, print the reply, repeat

That's it. Everything else (tools, retrieval, multi-agent systems) is bolted
onto this skeleton. Once you've edited this file, you'll never hear the word
"agent" the same way again.

To run:  python agent.py          (setup: see GUIDE.md)
"""

import os

from dotenv import load_dotenv
from openai import OpenAI

# ---------------------------------------------------------------------------
# 1. THE MODEL
#
# OpenRouter gives us one API key for hundreds of models — swap a string,
# get a different "brain." Browse the full menu at https://openrouter.ai/models
# Prices are per MILLION tokens; this whole lab costs well under $1.
# ---------------------------------------------------------------------------
MODELS = {
    "1": "moonshotai/kimi-k2.6",         # OPEN-weights — state of the art, famously has a voice of its own
    "2": "z-ai/glm-5.2",                 # OPEN-weights — currently #1 open model on quality indexes
    "3": "deepseek/deepseek-v4-flash",   # OPEN-weights — near-frontier for pennies ($0.05/M input!)
    "4": "openai/gpt-4o-mini",           # CLOSED — the factory-neutral baseline, for contrast
    "5": "anthropic/claude-haiku-4.5",   # CLOSED — fast frontier-lab model, another contrast point
}
MODEL = MODELS["1"]  # <-- start here; switch live with /model

# ---------------------------------------------------------------------------
# 2. THE INSTRUCTIONS (a.k.a. the system prompt)
#
# This is the soul of your agent. Rewrite it completely — that's the lab.
# Be specific: role, job, tone, what to always do, what to never do.
# Vague spec -> vague agent. (This is "prompting" from today's tutorial.)
# ---------------------------------------------------------------------------
SYSTEM_PROMPT = """You are Stoop, a sharp and slightly impatient New Yorker who has \
lived in all five boroughs and loves this city too much to accept its annoyances.

Your job: help the user find everyday New York quality-of-life problems that \
generative AI could plausibly improve, and pressure-test their ideas.

Rules:
- Ask one pointed question at a time; don't lecture.
- Push past the first obvious idea ("an app that...") toward who exactly is helped and how.
- If the user says something vague, make them pick a neighborhood, a person, a moment.
- Keep replies under 120 words. You're a stoop conversation, not a consultant deck."""

TEMPERATURE = 0.8  # 0.0 = same answer every time; 1.3 = adventurous. Try both.

# ---------------------------------------------------------------------------
# Connect to OpenRouter. It speaks the same protocol as OpenAI's API,
# so we use the standard `openai` library and just point it elsewhere.
# Your key is read from the .env file (see GUIDE.md — never share that file).
# ---------------------------------------------------------------------------
load_dotenv()
api_key = os.getenv("OPENROUTER_API_KEY")
if not api_key:
    raise SystemExit(
        "\nNo OPENROUTER_API_KEY found.\n"
        "Create a file named .env next to this script containing:\n"
        "  OPENROUTER_API_KEY=<paste-your-openrouter-key-here>\n"
        "(In Colab, run the key cell from GUIDE.md instead.)\n"
    )

client = OpenAI(base_url="https://openrouter.ai/api/v1", api_key=api_key)

# ---------------------------------------------------------------------------
# 3. THE MEMORY
#
# The model itself remembers NOTHING between calls. Its only "memory" is that
# we resend this entire list every single turn. When people say an agent
# "forgot" something, they mean it fell out of this list (the context window).
# ---------------------------------------------------------------------------
history = [{"role": "system", "content": SYSTEM_PROMPT}]

# ---------------------------------------------------------------------------
# 4. THE LOOP
# ---------------------------------------------------------------------------
print(f"\nAgent online. Model: {MODEL}")
print("Commands: /model (switch brains)  /reset (wipe memory)  /quit\n")

while True:
    try:
        user_input = input("you  > ").strip()
    except (KeyboardInterrupt, EOFError):
        print("\nbye!")
        break

    if not user_input:
        continue
    if user_input.lower() in ("/quit", "quit", "exit"):
        print("bye!")
        break
    if user_input.lower() == "/reset":
        history = [{"role": "system", "content": SYSTEM_PROMPT}]
        print("(memory wiped — the agent now knows only its system prompt)\n")
        continue
    if user_input.lower() == "/model":
        for key, name in MODELS.items():
            marker = " <- current" if name == MODEL else ""
            print(f"  {key}. {name}{marker}")
        choice = input("pick > ").strip()
        if choice in MODELS:
            MODEL = MODELS[choice]
            print(f"(brain swapped to {MODEL} — same memory, new mind)\n")
        continue

    history.append({"role": "user", "content": user_input})

    try:
        response = client.chat.completions.create(
            model=MODEL,
            messages=history,       # <-- the ENTIRE conversation, every time
            temperature=TEMPERATURE,
        )
    except Exception as error:
        history.pop()  # forget the message that failed, so memory stays clean
        print(f"\n[error talking to the model: {error}]")
        print("[check your key, your credit balance, or just try again]\n")
        continue

    reply = response.choices[0].message.content
    history.append({"role": "assistant", "content": reply})

    tokens = getattr(response.usage, "total_tokens", "?")
    print(f"\nagent> {reply}")
    print(f"       [{MODEL} · {tokens} tokens this turn]\n")
