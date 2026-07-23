"""
agent_tools.py — your agent grows hands. (Stretch goal — do agent.py first!)

agent.py could only TALK. This version can also DO something: look up real,
live 311 complaints for any NYC zip code, straight from NYC Open Data.

The new idea is the AGENT LOOP:

    1. We describe our tool to the model (name, what it does, what it needs)
    2. The model decides — mid-conversation, on its own — when to use it
    3. It replies not with words but with a request: "call get_311_complaints
       with zip_code=10012"
    4. OUR code actually runs the lookup (the model can't touch the internet!)
    5. We hand the results back, and the model weaves them into its answer

Steps 2–5 repeating: that's the whole "agentic" loop everyone talks about.

Try:  "what are people complaining about in 10012 lately?"
Then: point MODEL at something that wasn't built for tool use (browse
openrouter.ai/models — small or older models are good candidates) and ask
again. Watch the tool calls get shaky or vanish. THIS is the Jagged Frontier
from this morning: capabilities don't come standard, they're trained in.

To run:  python agent_tools.py
"""

import json
import os

import requests
from dotenv import load_dotenv
from openai import OpenAI

MODEL = "moonshotai/kimi-k2.6"  # open-weights, post-trained hard for reliable tool calling

SYSTEM_PROMPT = """You are Stoop, a sharp New Yorker helping the user explore \
quality-of-life problems in NYC that generative AI could improve.

You have a tool that fetches real, current 311 complaints by zip code. Use it \
whenever the user mentions a neighborhood or asks what bothers New Yorkers — \
real data beats guessing. Summarize patterns, don't read rows aloud. Always \
say which zip code the data covers. Keep replies under 150 words."""

TEMPERATURE = 0.7

# ---------------------------------------------------------------------------
# THE TOOL — a perfectly ordinary Python function.
# NYC Open Data's 311 dataset (erm2-nwe9) is free and needs no API key.
# ---------------------------------------------------------------------------

def get_311_complaints(zip_code: str) -> str:
    """Fetch the most recent 311 service requests for one NYC zip code."""
    url = "https://data.cityofnewyork.us/resource/erm2-nwe9.json"
    params = {
        "incident_zip": zip_code.strip(),
        "$order": "created_date DESC",
        "$limit": 8,
        "$select": "created_date,complaint_type,descriptor,status",
    }
    try:
        response = requests.get(url, params=params, timeout=15)
        response.raise_for_status()
        rows = response.json()
    except Exception as error:
        return f"Tool error: could not reach NYC Open Data ({error})."
    if not rows:
        return f"No 311 records found for zip code {zip_code}. Is it a real NYC zip?"
    return json.dumps(rows)


# ---------------------------------------------------------------------------
# THE TOOL'S "MENU LISTING" — how we advertise the function to the model.
# The model never sees the code above, only this description. Write it the
# way you'd write a good prompt: clear purpose, clear inputs.
# ---------------------------------------------------------------------------
TOOLS = [
    {
        "type": "function",
        "function": {
            "name": "get_311_complaints",
            "description": (
                "Get the most recent 311 complaints (noise, heat, trash, rats, "
                "parking...) filed with New York City for a given zip code. "
                "Live public data from NYC Open Data."
            ),
            "parameters": {
                "type": "object",
                "properties": {
                    "zip_code": {
                        "type": "string",
                        "description": "A 5-digit NYC zip code, e.g. '11215'",
                    }
                },
                "required": ["zip_code"],
            },
        },
    }
]

# ---------------------------------------------------------------------------
# Setup — same as agent.py
# ---------------------------------------------------------------------------
load_dotenv()
api_key = os.getenv("OPENROUTER_API_KEY")
if not api_key:
    raise SystemExit("No OPENROUTER_API_KEY found — see GUIDE.md for setup.")

client = OpenAI(base_url="https://openrouter.ai/api/v1", api_key=api_key)
history = [{"role": "system", "content": SYSTEM_PROMPT}]

print(f"\nAgent online (now with hands). Model: {MODEL}")
print("Try: 'what are people complaining about in 10012?'   (/quit to exit)\n")

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

    history.append({"role": "user", "content": user_input})

    # THE AGENT LOOP: keep going while the model wants to use tools.
    # (Capped at 5 rounds so a confused model can't loop forever on your dime.)
    for _round in range(5):
        try:
            response = client.chat.completions.create(
                model=MODEL,
                messages=history,
                tools=TOOLS,            # <-- the only change from agent.py
                temperature=TEMPERATURE,
            )
        except Exception as error:
            print(f"\n[error talking to the model: {error}]\n")
            break

        message = response.choices[0].message

        # No tool request? Then it's a normal reply and we're done this turn.
        if not message.tool_calls:
            history.append({"role": "assistant", "content": message.content})
            print(f"\nagent> {message.content}\n")
            break

        # The model asked to use a tool. First, record its request in memory
        # (explicitly, field by field, so you can see exactly what it sent):
        history.append(
            {
                "role": "assistant",
                "content": message.content,
                "tool_calls": [
                    {
                        "id": call.id,
                        "type": "function",
                        "function": {
                            "name": call.function.name,
                            "arguments": call.function.arguments,
                        },
                    }
                    for call in message.tool_calls
                ],
            }
        )

        # Now actually run each requested tool and feed the results back.
        for call in message.tool_calls:
            arguments = json.loads(call.function.arguments)
            print(f"  🔧 agent is calling {call.function.name}({arguments}) ...")
            if call.function.name == "get_311_complaints":
                result = get_311_complaints(**arguments)
            else:
                result = f"Unknown tool: {call.function.name}"
            history.append(
                {"role": "tool", "tool_call_id": call.id, "content": result}
            )
        # ...and loop: the model sees the results and decides what's next.
    else:
        print("\n[agent hit the 5-round tool limit — asking it to wrap up]\n")
