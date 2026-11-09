# 1984 — The Sprite Chronicle

**Repository:** [DavidWise01/1984](https://github.com/DavidWise01/1984)  
**Project thread:** `1984 / 001`  
**Created:** 2026-11-08  
**Status:** Chapters 01–04 committed; 20 further chapters remain planned, not yet authored.

## Play

- [Arcade landing page](index.html)
- [Chapter 01 — The Unwritten Page](chapters/01-the-unwritten-page.html)
- [Chapter 02 — The Knock at the Door](chapters/02-knock-at-door.html)
- [Chapter 03 — The Golden Country](chapters/03-golden-country.html)
- [Chapter 04 — The Records Department](chapters/04-records-department.html)
- GitHub Pages target URL (only after Pages is enabled): `https://davidwise01.github.io/1984/`

### GitHub Pages deployment

This repository contains a complete `index.html` at the root and needs no build tool. To publish, set **Settings → Pages → Build and deployment → Deploy from a branch**, choose `main` and `/(root)`, then save. Until a Pages deployment is verified, the GitHub Pages target is only a proposed URL, not a claim the public site is live.

## Canonical release ledger

| Release | Part | Chapter | Original sprite episode | State | Artifact |
|---|---|---|---|---|---|
| 001 | One | 1 | The Unwritten Page | COMMITTED | [Play](chapters/01-the-unwritten-page.html) |
| 002 | One | 2 | The Knock at the Door | COMMITTED | [Play](chapters/02-knock-at-door.html) |
| 003 | One | 3 | The Golden Country | COMMITTED | [Play](chapters/03-golden-country.html) |
| 004 | One | 4 | The Records Department | COMMITTED | [Play](chapters/04-records-department.html) |
| 005 | One | 5 | Lunch and Newspeak | PLANNED | Not created |

**Chapter divisions:** Part One = 8; Part Two = 10; Part Three = 6; **24 total**.

## Episode 001 — Chapter One

**Setting:** Victory Mansions, Airstrip One.  
**Narrative spine:** Winston Smith returns home; the telescreen and Party poster define the external order; his memory of the Two Minutes Hate complicates the official account; the forbidden diary represents the first private record.  
**Interactive route:** poster → telescreen → city window → recalled ritual → diary (exploration order can vary).  
**Objective:** inspect all five objects; the story registers them as observations and marks completion.  
**Engine:** standalone Canvas2D 320×200, crisp nearest-neighbor upscale, pixel sprites, keyboard and touch controls, optional synthesized audio, no external dependencies.  
**Creative principle:** original prose, dialogue, pixel art and UI; thematic plot summary only; no verbatim copyrighted chapter reproduction.

## Episode 002 — Chapter Two

**Setting:** Winston's flat → Victory Mansions corridor → Parsons apartment.

**Narrative spine:** the diary is interrupted by a knock; Mrs. Parsons requests help with a broken sink; the children imitate Party suspicion and accusation. Winston observes that an official ideology can spread through everyday family relationships.

**Interactive route:** inspect diary, answer door, cross corridor, inspect sink, talk with Mrs. Parsons, observe the children, reflect in corridor (six independent objectives; scene transitions through doors).

**Mechanics:** standalone original Canvas2D 320×200, multi-room exploration, keyboard + touch, optional synthesizer sound, observation notebook, six checkpoint witnesses, completion marker, no external assets.

**Boundary:** distinguish what a child actually says and does from inferences about motive or innate character. Observation is not accusation. Recorded events are local browser-session observations; canonical Git history is the durable release record.

## Episode 003 — Chapter Three

**Setting:** deep childhood memory → dream meadow / Golden Country → waking exercise room.

**Narrative spine:** Winston dreams of his mother and younger sister; a Golden Country vision contains the possibility of unpoliced freedom; the morning telescreen insists on a commanded performance of bodily fitness. His memory is deeply felt but not a complete factual reconstruction.

**Interactive route:** two inspectable witnesses in each of three scenes; all six must be preserved to complete the chapter. The player moves with arrow/WASD or touch, inspects with E, advances scenes with a separate control, and can restart; optional synthesized audio.

**Boundary:** recollection is not verified history; a dream is experienced but need not predict events; the body is a source of observations not interchangeable with official commands.

**Kernel interpretation:** append-only within a single browser session for this minigame. Git commits remain the durable release history; this minigame does not upload player events or create ongoing autonomous observation.

## Episode 004 — Chapter Four

**Setting:** Winston's Records Department workspace inside the Ministry of Truth.

**Narrative spine:** Winston receives orders to revise prior reports to align with the Party's present declarations. Workers, pneumatic delivery, desk manuscripts and disposal equipment form the mechanism of historical erasure. The player sees the difference between an institutional replacement and a source-preserving audit.

**Original gameplay example:** A prior fictional production target says 12.0M units; a new directive demands the past be represented as 9.0M. These are invented demonstration figures, not numeric quotations from Orwell.

**Mechanics:** standalone Canvas2D 320×200 sprite office, arrow/WASD and touch movement, optional synthesized audio, four spatial observations and a gated three-part revision desk: compare, issue revision, seal source witness. Seven total checkpoints; the two textual snapshots remain separately visible.

**Invariant:** `original != replacement`. A revision may change the institutional current account without changing what the preserved prior snapshot said. Gameplay's event ledger exists only in browser memory; durable publication occurs through the committed chapter file. No external storage or self-running agent is claimed.

**Chapter history:** Prior chapters 001–003 were retained without alteration.

## Governing kernel — instantiated

- [Executable deterministic chronicle kernel](kernel/chronicle.js): immutable event creation, append-only event histories, lineage traversal, and sequence validation. It is a pure JavaScript module; Git commits, not browser session state, provide durable persistence.

```
| K | {{ | E | {{ | T }}}}

[observe] -> {question} -> (compare) -> |preserve|
past: observed | present: deserving scrutiny | future: reserved

chapter = immutable standalone release
source != narrator != observation != interpretation
identity != official label
witness lineage must be traceable
narrative next = one canonical chapter at a time
no claims of completed chapters until file and commit verified
```

## Lineage

The completed Dante alchemical sweep remains in the independent [archon](https://github.com/DavidWise01/archon/tree/main/alchemy) repository. This project reuses **workflow invariants**, not Dante's characters or cosmology: original sprite graphics, an append-only chapter trail, identity across scene changes, observation separated from interpretation, and no historical file overwriting except explicit corrections.

## Next natural boundary — 1984 / 005

**Part One, Chapter Five:** Lunch in the Ministry canteen. Syme explains the ongoing reduction of the Newspeak dictionary. Parsons collects a contribution; Winston observes the young dark-haired woman and worries about his own visibility. The experiment should model lexical compression and the distinction between fewer available words and fewer possible thoughts, using a separate original sprite chapter and a semantic provenance table.

### Authorship notice

*1984* / *Nineteen Eighty-Four* is by George Orwell. In the United States it remains under copyright; this project is an original educational and interpretive adaptation with only brief references to character names, setting and plot. No original novel pages or lengthy passages are reproduced.
