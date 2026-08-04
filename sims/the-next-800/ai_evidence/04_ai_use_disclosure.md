# AI Use Disclosure

## Tools and outputs

| Use | Tool/model information | Result |
|---|---|---|
| Baseline text generation | Codex sub-agent, GPT-5 family; exact backend identifier not exposed | Unedited baseline teaching-sim draft |
| Image generation | OpenAI image generation through Codex; exact backend identifier not exposed | Landscape cover image |
| PRD drafting and translation | Codex, based on the author's Chinese decisions and corrections | English PRD and mirrored Chinese reference version |

## How judgment was applied

AI output was not accepted as automatically correct. The author specifically changed the default text's early reduction/replacement of the workout, fixed-block recovery structure, and insufficiently dynamic decision logic. The final design uses the author's preferred sequence: lower pace, lengthen recovery if needed, gradually restore pace and shorten recovery if conditions improve, and reduce repetitions only after those adjustments fail.

The raw text output remains unchanged in `01_subagent_text_log.md`, allowing a reviewer to compare it with the final PRD. The exact image prompt and acceptance decision are preserved in `02_image_generation_log.md`.

## Privacy and limitations

- The athlete is a fictional archetype, not a disguised real individual.
- No API key, account information, private conversation, device export, or identifiable training history is included.
- The project is an educational design exercise, not medical advice or an individualized training prescription.
- Where the platform did not expose an exact backend model ID, this is stated rather than guessed.
