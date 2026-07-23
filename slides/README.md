# Shared class decks

Each session has one `deck.md` used by students, instructors, and the clean projector view. Separate slides with `<!-- slide -->`.

Add private speaker notes to a slide with a hidden block:

```md

```

Icerynk removes these blocks from the shared slide and projector output, then shows them in the instructor control plane. Frontmatter is optional. Markdown headings, lists, tables, links, quotes, and code blocks are rendered normally.

Embed a YouTube video with a fenced `youtube` block containing one complete URL:

````md
```youtube
https://www.youtube.com/watch?v=VIDEO_ID
```
````

Icerynk renders the video with YouTube's privacy-enhanced embed domain and keeps an ordinary YouTube link available below the player.

Detailed run sheets remain in [`sessions/`](../sessions/) as course-operations references.

## Course-wide deck standard

Build each deck as a complete teaching asset first. Put final timeboxing and cuts in the run sheet after rehearsal; do not let an early minute budget flatten the explanation.

Every substantial concept block should connect five things:

1. **Fundamental:** what the model, capability, or system actually does
2. **Business decision:** which user, task, workflow, or investment choice it affects
3. **Concrete case:** one example carried across multiple slides when possible
4. **Evidence:** what would support the output, workflow, and business claim
5. **Control:** who owns permissions, exceptions, monitoring, and consequences

Prefer durable categories and causal diagrams over product catalogs. Label synthetic teaching data. Separate model function from workflow architecture, and separate output quality from workflow performance and business outcomes.

### Instructor-note pattern

Use private notes as a live teaching control plane:

- **Teaching claim:** the sentence students should retain
- **Ask:** one required diagnostic question
- **Listen for:** the elements of a strong answer
- **Correct:** the likely misconception
- **Apply:** the recurring case or student transfer prompt
- **Optional depth:** material that can be cut without breaking the core arc
- **Bridge:** why the next slide follows

Mark slides `CORE`, `OPTIONAL DEPTH`, or `OPTIONAL REFERENCE` inside the private notes. Timing belongs in the run sheet and can be added after the master deck is coherent.
