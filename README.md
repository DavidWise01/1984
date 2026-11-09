# 1984 — The Sprite Chronicle

**Repository:** [DavidWise01/1984](https://github.com/DavidWise01/1984)  
**Project thread:** `1984 / 001`  
**Created:** 2026-11-08  
**Status:** Chapters 01–20 committed; Parts One and Two complete, Part Three Chapters One–Two committed, and four chapters remain planned.

## Play

- [Arcade landing page](index.html)
- [Chapter 01 — The Unwritten Page](chapters/01-the-unwritten-page.html)
- [Chapter 02 — The Knock at the Door](chapters/02-knock-at-door.html)
- [Chapter 03 — The Golden Country](chapters/03-golden-country.html)
- [Chapter 04 — The Records Department](chapters/04-records-department.html)
- [Chapter 05 — Lunch and Newspeak](chapters/05-lunch-and-newspeak.html)
- [Chapter 06 — The Marriage and the Proles](chapters/06-marriage-and-proles.html)
- [Chapter 07 — The Proles and the Photograph](chapters/07-proles-and-photograph.html)
- [Chapter 08 — The Antique Shop: playable sprites + embedded cartoon pages](chapters/08-antique-shop.html)
- [Chapter 09 — The Secret Note: three playable scenes + cartoon pages](chapters/09-secret-note.html)
- [Chapter 10 — The Golden Country Rendezvous: playable sprite cartoon](chapters/10-golden-country-rendezvous.html)
- [Chapter 11 — Meetings and Memories: church ruins, three illustrated panels](chapters/11-meetings-and-memories.html)
- [Chapter 12 — The Hidden Room: playable sprite and three illustrated panels](chapters/12-hidden-room.html)
- [Chapter 13 — The Vanishing Comrade: Syme, Hate Week, and sprite comic](chapters/13-vanishing-comrade.html)
- [Chapter 14 — O’Brien’s Invitation: Newspeak pretext and sprite comic](chapters/14-obriens-invitation.html)
- [Chapter 15 — The Human Gesture: childhood memory and care](chapters/15-human-gesture.html)
- [Chapter 16 — The Brotherhood Visit: O’Brien, the switched-off telescreen and three comic panels](chapters/16-brotherhood-visit.html)
- [Chapter 17 — The Changed Enemy: Hate Week switch, rewritten records, and chronology audit](chapters/17-changed-enemy.html)
- [Chapter 18 — The Room Betrayed: hidden surveillance and append-only disconfirmation](chapters/18-room-betrayed.html)
- [Chapter 19 — The Ministry of Love: detention, coerced speech and three cartoon pages](chapters/19-ministry-of-love.html)
- [Chapter 20 — The Logic of Power: four fingers, authority claims and evidence comparison](chapters/20-logic-of-power.html)
- [Homepage cartoon gallery](index.html#cartoons)
- GitHub Pages site URL (deployment workflow configured; verify latest run): `https://davidwise01.github.io/1984/`

### GitHub Pages deployment

The repository contains a standalone root `index.html` and an explicit [GitHub Pages workflow](.github/workflows/pages.yml), triggered on every push to `main` that changes a chapter, root index, kernel, assets, README or workflow; it can also be manually dispatched. The workflow checks out files, configures Pages, uploads the static site and requests deployment.

**Repository setting:** For this workflow method, select **Settings → Pages → Build and deployment → Source: GitHub Actions**. Do not choose branch deployment if using this Actions workflow. The expected site URL is `https://davidwise01.github.io/1984/`; live publication must still be confirmed in a completed Pages run. If another branch-based Pages process exists, prefer one method to avoid overlapping deployments.

Every chapter release must update `index.html`, this ledger and the standalone chapter. Commit delivery and a Pages workflow run are separate conditions; report both.

## Canonical release ledger

| Release | Part | Chapter | Original sprite episode | State | Artifact |
|---|---|---|---|---|---|
| 001 | One | 1 | The Unwritten Page | COMMITTED | [Play](chapters/01-the-unwritten-page.html) |
| 002 | One | 2 | The Knock at the Door | COMMITTED | [Play](chapters/02-knock-at-door.html) |
| 003 | One | 3 | The Golden Country | COMMITTED | [Play](chapters/03-golden-country.html) |
| 004 | One | 4 | The Records Department | COMMITTED | [Play](chapters/04-records-department.html) |
| 005 | One | 5 | Lunch and Newspeak | COMMITTED | [Play](chapters/05-lunch-and-newspeak.html) |
| 006 | One | 6 | The Marriage and the Proles | COMMITTED | [Play](chapters/06-marriage-and-proles.html) |
| 007 | One | 7 | The Proles and the Photograph | COMMITTED | [Play](chapters/07-proles-and-photograph.html) |
| 008 | One | 8 | The Antique Shop | COMMITTED | [Play + read comic](chapters/08-antique-shop.html) |
| 009 | Two | 1 | The Secret Note | COMMITTED | [Play and read comic](chapters/09-secret-note.html) |
| 010 | Two | 2 | The Golden Country Rendezvous | COMMITTED | [Play and read comic](chapters/10-golden-country-rendezvous.html) |
| 011 | Two | 3 | Meetings and Memories | COMMITTED | [Play and view comic](chapters/11-meetings-and-memories.html) |
| 012 | Two | 4 | The Hidden Room | COMMITTED | [Play and view comic](chapters/12-hidden-room.html) |
| 013 | Two | 5 | The Vanishing Comrade | COMMITTED | [Play and view comic](chapters/13-vanishing-comrade.html) |
| 014 | Two | 6 | O’Brien’s Invitation | COMMITTED | [Play and view comic](chapters/14-obriens-invitation.html) |
| 015 | Two | 7 | The Human Gesture | COMMITTED | [Play and view comic](chapters/15-human-gesture.html) |
| 016 | Two | 8 | The Brotherhood Visit | COMMITTED | [Play and view comic](chapters/16-brotherhood-visit.html) |
| 017 | Two | 9 | The Changed Enemy | COMMITTED | [Play and view comic](chapters/17-changed-enemy.html) |
| 018 | Two | 10 | The Room Betrayed | COMMITTED | [Play and view comic](chapters/18-room-betrayed.html) |
| 019 | Three | 1 | The Ministry of Love | COMMITTED | [Play and view comic](chapters/19-ministry-of-love.html) |
| 020 | Three | 2 | The Logic of Power | COMMITTED | [Play and view comic](chapters/20-logic-of-power.html) |
| 021 | Three | 3 | The Shape of Power | PLANNED | Not created |

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

## Episode 005 — Chapter Five

**Setting:** Ministry of Truth canteen. Winston meets Syme, observes Parsons and the dark-haired woman, and hears the institutional telescreen amid everyday conversation.

**Narrative spine:** Syme's work on the Newspeak dictionary introduces deliberate lexical reduction. The chapter examines the Party's ambition to narrow expressible ideas while distinguishing words, meanings and thoughts. Winston's suspicion of the dark-haired woman is explicitly left as a suspicion, not represented as proven intent.

**Mechanics:** independent original Canvas2D 320×200 canteen sprite adventure, keyboard and touch movement, optional synthesized audio, five spatial observation stations, plus three gated lexical-compression experiments. Eight checkpoints in total. The experiment maps illustrative Oldspeak examples (excellent, awful, magnificent, unsatisfactory, splendid) to generalized Newspeak-style expressions, preserves original tokens, and compares lost semantic distinctions. This vocabulary is a pedagogical mapping, not an official dictionary transcription.

**Invariant:** `removed lexical token != demonstrated elimination of its mental referent`. One replacement label can merge diverse tones and implications, so score or word equivalence never entitles a system to erase semantic provenance.

**Persistence:** the player event trail exists in local browser memory only. Chapter files and ledger entries are durable Git artifacts. No continuing agent or backend is claimed.

**Chapter history:** Independent Chapters 001–004 remain untouched.

## Episode 006 — Chapter Six

**Setting:** Winston's fragmented recollection of his marriage to Katharine, a Party registry, and a prole street.

**Narrative spine:** the Party defines marriage through public obligation; Winston remembers estrangement and the attempt to find connection beyond sanctioned roles. This original adaptation treats adult relationships non-explicitly and does not claim access to Katharine's internal experience.

**Mechanics:** original 320×200 pixel-art Canvas2D, three playable scenes, WASD/arrows and touch movement, optional sound, two inspections per scene, and a distinct agency comparison followed by a seal. Eight checkpoints.

**Invariant:** `person != assigned role`; `Winston's memory != complete knowledge of Katharine's perspective`. Prior chapter HTML 001–005 retained unchanged.

## Episode 007 — Chapter Seven

**Setting:** prole district → Records Department → reconstructed recollection of the photograph.

**Narrative spine:** Winston reasons about the proles as a potential collective source of political change and recalls a photograph that placed Jones, Aaronson and Rutherford at an incompatible time and place with their confessions. Winston destroyed the photograph in the novel; the game does not falsely treat its imagined depiction as recovered original evidence.

**Interactive route:** two observations in each of three original pixel scenes, then compare an official confession, label the absent photographic original versus remembered witness, and seal the reconstructed audit. Nine checkpoints total. Movement: keyboard arrows or WASD and touch; interaction: E; optional audio. No external assets or backend.

**Invariant:** `remembered contradiction != surviving original photograph`. A reconstruction may interpret testimony but must not impersonate a destroyed physical source. Strong suspicion and factual proof are distinct.

**Provenance:** Player progress exists in browser-session memory; Git preserves the original scene and canonical chapter ledger. Chapters 001–006 are retained unchanged.

## Episode 008 — Chapter Eight / Part One conclusion

**Setting:** prole pub → Charrington's antique shop → furnished upstairs room.

**Narrative spine:** Winston asks an old man about life before the Party, but testimony is incomplete. In Mr. Charrington's antique shop he discovers a glass paperweight; upstairs he imagines a pocket of private life. Neither antique appearance nor a missing visible telescreen confirms a reliable history or true safety.

**Art-first GitHub Pages:** The root [arcade homepage](index.html#cartoons) embeds **three original, visible pixel-cartoon panels** rendered by its Canvas2D gallery, with direct links to the new chapter. The Chapter 008 HTML independently embeds **three illustrated sprite-comic panels** with captions plus a playable three-scene pixel adventure. These are not just Markdown links or external stock pictures: canvas drawings render within the served pages.

**Mechanics:** Three scenes, six spatial observations, an observation-versus-inference comparison and a final seal (eight checkpoints); keyboard/touch controls and optional synthesized audio. All artwork and prose are original. There is no external runtime or required asset library.

**Invariants:** `old object != certified past`; `appears private != confirmed secure`; `remembered testimony != complete historical record`. Chapters 001–007 preserved as independent committed artifacts.

**GitHub Pages contract:** Each chapter release updates and verifies `index.html`, the new sprite/comic episode and this ledger; the existing [GitHub Actions workflow](.github/workflows/pages.yml) publishes the root site on pushes to `main`. A successful workflow run is distinguished from independent browser verification of the public URL.

## Episode 009 — Part Two, Chapter One

**Setting:** Ministry corridor → Ministry canteen → Victory Square public gathering.

**Narrative spine:** After fearing the dark-haired woman's attention, Winston receives a brief private note during a corridor encounter. He is surprised by its affection and searches for a way to speak, culminating in tentative arrangements amid a crowded public space.

**Sprite + cartoon delivery:** standalone original 320×200 Canvas2D arcade with three accessible locations, six distinct spatial observations, and comparison/seal gates for eight witness checkpoints. The [chapter HTML](chapters/09-secret-note.html) embeds three separately illustrated comic panels with descriptive captions. The [GitHub Pages homepage](index.html#cartoons) is updated with three matching new original cartoon-sprite illustrations and navigation into the episode.

**Invariant:** `earlier suspicion != proven intention`; `message != certainty about every motive or safety`. The note is a genuine reason to revise a belief, while risks remain uncertain.

**Preservation:** Part One chapters 001–008 remain separate; event log exists only in the current browser session. No long copyrighted text reproduced.

## Episode 010 — Part Two, Chapter Two

**Setting:** countryside station → wooded path → sunlit clearing.

**Literary spine:** Winston travels to an arranged countryside meeting with Julia. Their personal connection challenges daily Party controls, but secluded surroundings do not guarantee freedom from surveillance. Intimacy is represented without explicit scenes, and without confusing one character's inference with another's unspoken thoughts.

**Playable HTML:** [Chapter 010](chapters/10-golden-country-rendezvous.html) contains an original 320×200 Canvas2D sprite adventure with three scenes, six spatial observations, two comparison/seal gates, arrow/WASD and touch controls, optional synthesized sound, and three illustrated comic-cartoon panels.

**GitHub Pages cartoons:** The root [cartoon gallery](index.html#cartoons) shows three corresponding directly rendered original Canvas2D panels, each linking to the full playable chapter. Pages auto-publishes on every relevant `main` push through the existing workflow. The release does not depend on externally sourced pictures.

**Invariant:** `shared trust != verified privacy`. Meeting, conversation and risk are separate evidence categories; neither a poem-like landscape nor affection makes surveillance physically impossible.

**Historical preservation:** Chapter 001–009 files remain unchanged. Player progress is session-local; Git commits are the durable record.

## Episode 011 — Part Two, Chapter Three: Meetings and Memories

**Source-sequence correction:** Earlier planning notes placed the rented room above Charrington's shop here. That room belongs to **Part Two, Chapter Four**; this chapter instead follows Winston and Julia's intermittent meetings, remembered relationships, and conversations in a ruined church. The prior planning note is preserved below for provenance; its assertion is superseded, not silently treated as the source narrative.

**Story:** Winston and Julia discuss their earlier lives, the difference between institutional morality and individual experience, and their contrasting forms of resistance. Winston's yearning for systemic change differs from Julia's practical disobedience.

**Art/interactive:** Original standalone 320×200 Canvas2D sprite game spanning crowded meetings, ruined church and a conversation about resistance. Keyboard/touch movement, optional audio, six spatial observations plus comparison and seal gates (eight checkpoints). Three independently drawn comic panels are embedded in the chapter, and three related cartoons feature on the [GitHub Pages homepage](index.html#cartoons).

**Invariant:** `reported experience != omniscient knowledge`; `secluded conversation != proven safety`; different witnesses are preserved as distinct accounts. Chapter 001–010 artifacts retained unchanged; browser interaction is session-local.

## Episode 012 — Part Two, Chapter Four: The Hidden Room

**Source-aligned setting:** Mr. Charrington's antique shop, stairs and rented upstairs room. Winston and Julia inhabit a private refuge with old furniture, food and other small comforts, including the glass paperweight. The absence of an obvious telescreen contributes to a dangerous feeling of security.

**Interactive sprite art:** [Chapter 012](chapters/12-hidden-room.html) is an independent original 320×200 Canvas2D game with three scenes, two spatial witnesses per scene, comparison and sealing gates, eight objectives, keyboard/touch movement and optional sound. Three original cartoon panels are embedded inside the episode. The [GitHub Pages homepage](index.html#cartoons) independently shows three new illustrated pixel panels linked to the game, not merely text links.

**Invariant:** `perceived privacy != independently verified security`; `comfort != political freedom`. The sight of an old object and private space does not establish that no surveillance mechanism exists.

**Persistence:** Chapter files 001–011 preserved. Session event logs are not falsely represented as permanent Git commits; only the release artifacts and README persist through Git history.

## Episode 013 — Part Two, Chapter Five: The Vanishing Comrade

**Narrative:** Syme disappears from normal public life while Hate Week propaganda intensifies. Winston continues seeing Julia in private and reflects on the difficulty of reconciling published records with lived experience.

**Playable sprite and comic:** Independent original 320×200 Canvas2D episode, three scenes (empty seat in canteen, Hate Week preparations, private memory), six spatial observations plus evidence comparison and seal (eight checkpoints), optional sound and keyboard/touch controls. The chapter contains three original embedded cartoon panels and the [GitHub Pages homepage](index.html#cartoons) displays three corresponding original Canvas2D sprite comics.

**Invariant:** `erased public record != nonexistence`; `absence != verified fate`. Winston's recollection of speaking with Syme is distinct from the Party's public record, while exact details of his fate remain unverified within the interactive scenario.

**Persistence:** All prior chapter HTML artifacts remain unmodified. The player interaction log is session-local; the release, gallery and ledger persist in Git.

## Episode 014 — Part Two, Chapter Six: O’Brien’s Invitation

**Story:** O’Brien speaks to Winston in a Ministry corridor and discusses the new Newspeak dictionary. He offers Winston an address. Winston interprets the invitation as a possible route toward political opposition, but no independently verified allegiance can be inferred from the encounter alone.

**Sprite-cartoon art:** Standalone [Chapter 014](chapters/14-obriens-invitation.html) is an original playable 320×200 Canvas2D experience with three locations, six inspection witnesses, two conclusion gates, keyboard/touch controls, optional synthesized sound and three embedded cartoon pages. The [homepage comic gallery](index.html#cartoons) shows three new original illustrated sprite panels directly on GitHub Pages.

**Invariant:** `received invitation != known allegiance`; `private expectation != observed intent`. The chapter retains what O’Brien said, what Winston imagined, and what was not established as separate categories.

**Persistence:** All previous chapter files 001–013 remain independent; player events are only stored in browser session state. Git preserves the release files and chronological ledger.

## Episode 015 — Part Two, Chapter Seven: The Human Gesture

**Source-sequence correction:** The prior boundary plan erroneously placed the change of Oceania's enemy during Hate Week in Part Two, Chapter Seven. Standard chapter summaries place the enemy reversal in **Part Two, Chapter Nine**. Part Two, Chapter Seven concerns Winston's dream of his mother and memories of stealing his sister's chocolate, followed by his discussion with Julia about loyalty, vulnerability, and human feelings. The mistaken Chapter 015 forecast remains below as superseded planning history rather than being silently erased.

**Story and playable art:** The [Chapter 015 sprite comic](chapters/15-human-gesture.html) explores a childhood shelter, his mother's gesture of care and an upstairs-room conversation with Julia. It contains three original illustrated Canvas2D comic panels, a three-scene 320×200 sprite game, optional sound, WASD/arrow/touch movement, six observation witnesses, and comparison/seal gates (eight checkpoints). The [homepage](index.html#cartoons) features three matching original cartoon-sprite panels.

**Invariant:** `remembered action != verified full consequence`; `personal guilt != proof of causal responsibility`; `coerced speech != proven freely held belief`. The childhood memory is emotionally important without claiming to resolve his mother and sister's precise fate.

**Lineage:** Chapters 001–014 retained as separate immutable HTML releases. Game observations exist only in the current browser session; release files and the chronology correction are committed in Git.

## Episode 016 — Part Two, Chapter Eight: The Brotherhood Visit

**Story:** Winston and Julia visit O’Brien's privileged Inner Party apartment. O’Brien switches off his visible telescreen, offers wine, and presents himself as connected to resistance. The visitors are hopeful; their experiences nevertheless do not independently verify his intentions.

**Sprite-comic:** [Chapter 016](chapters/16-brotherhood-visit.html) contains three distinct original 320×200 Canvas2D scenes (apartment entrance, switched-off telescreen, alleged resistance meeting), six inspectable witnesses, a claims comparison and uncertainty-seal gate. It supports keyboard and touch movement, optional sound, and three drawn comic panels. The [homepage](index.html#cartoons) renders a corresponding three-panel original cartoon gallery.

**Invariant:** `power to disable a telescreen != trusted purpose`; `claimed allegiance != independently verified allegiance`. Observed conduct, reported commitments and unknown motives remain distinct.

**Preservation:** The existing chapters 001–015 remain unchanged; browser interaction events are not permanent Git history. Commit the chapter, homepage and ledger independently and verify each SHA and Pages deployment status.

## Episode 017 — Part Two, Chapter Nine: The Changed Enemy

**Narrative:** A Hate Week speech changes Oceania's declared enemy from Eurasia to Eastasia in midstream. Ministry workers replace records so the new assertion appears to have been true all along. Winston subsequently studies a forbidden book attributed to Goldstein; its theory of Party power is another source to evaluate, not automatically a neutral authority.

**Interactive sprite comic:** [Chapter 017](chapters/17-changed-enemy.html) has three original 320×200 Canvas2D scenes (rally, Records Department, book), six spatial witnesses, two evidence audit gates, WASD/arrow/touch movement, optional sound, local event chronology, and three embedded cartoon panels. [GitHub Pages homepage](index.html#cartoons) features three original related pixel-cartoon panels and links to the chapter.

**Version invariant:**

```text
T1 : Party publishes "enemy Eurasia" [time-indexed prior claim]
T2 : Party changes declared enemy to Eastasia [later directive]
T3 : Party publishes "always Eastasia" [retrospective rewrite]
RULE: T3 must append after T2; never replace T1 in the witness ledger.
CAUTION: these are claims by the Party and their contradiction; none alone certifies the independent history of military events.
```

**Preservation:** Earlier chapter releases 001–016 unchanged. Session-specific observations are local to the browser; the immutable chapter artifact and canonical README persist via Git.

## Episode 018 — Part Two, Chapter Ten: The Room Betrayed

**Story:** Winston and Julia return to the upstairs room above Mr. Charrington's shop. A hidden telescreen speaks from behind a picture. Thought Police enter, the paperweight breaks, and Charrington's connection to the police is revealed. The false sense of a sanctuary collapses.

**Sprite-comic:** [Chapter 018](chapters/18-room-betrayed.html) is a standalone original 320×200 Canvas2D game with three scenes (apparent refuge, revealed telescreen, police entry), six inspectable spatial observations and two compare/seal gates (eight checkpoints). Keyboard/touch movement, optional sound, three embedded pixel-cartoon panels and a chronological interpretation ledger are included. The [GitHub Pages homepage](index.html#cartoons) displays three new original illustrated panels linking to the chapter.

**Natural invariant:**
```text
T1 OBSERVED: no telescreen was visible in the room
T1 INFERRED: the room was private
T2 OBSERVED: surveillance device revealed behind picture
T3 OBSERVED: police entry, Charrington's hidden role
RESULT: T1 observation preserved; T1 inference superseded
RULE: append new knowledge, never rewrite earlier perception as foresight
```

**Evidence policy:** The later confirmation of hidden monitoring does not justify rewriting Winston's earlier observation as though he could see the device all along. His mistaken trust and the now-visible betrayal are explicitly separated.

**Persistence:** Chapters 001–017 remain separate artifacts. The player's in-browser event log is session-local, while the chapter, gallery and canonical ledger are committed in Git.

## Episode 019 — Part Three, Chapter One: The Ministry of Love

**Narrative:** Winston is imprisoned in the Ministry of Love. Harsh lights, a controlled cell and encounters with prisoners including Parsons make the setting legible. Winston cannot verify how much time has passed or what happens beyond the guards' control. The language and behavior of prisoners are shaped by institutional threats.

**Playable sprite comic:** [Chapter 019](chapters/19-ministry-of-love.html) opens Part Three with three original 320×200 Canvas2D scenes: white-tiled cell, other prisoners, guarded corridor. Six inspectable observations and compare/seal gates produce eight checkpoints. Arrow/WASD and touch movement, optional sound, local event log and three original comic panels are included. The [homepage gallery](index.html#cartoons) displays three independently drawn cartoon previews that lead to the full playable chapter.

**Invariant:** `coerced utterance != freely held belief`; `observable compliance != confirmed private assent`. Prisoner testimony remains labeled with the coercive context. Statements in an oppressive setting may be recorded as events, but never promoted to reliable evidence of genuine conviction without independent corroboration.

**Preservation:** Existing chapter files 001–018 unchanged. The game's observation ledger is local to the browser session. Durable records are the chapter HTML, GitHub Pages homepage and README ledger.

## Episode 020 — Part Three, Chapter Two: The Logic of Power

**Narrative:** O’Brien interrogates Winston in the Ministry of Love. An apparently simple demonstration of four fingers becomes a dispute between direct perception, authoritative assertion and the pressured answer Winston is expected to supply. The chapter remains non-graphic, focusing on evidence and coercion rather than simulating harm.

**Interactive artifact:** [Chapter 020](chapters/20-logic-of-power.html) is an independent original 320×200 Canvas2D game with a questioning room, finger demonstration and evidence audit. It includes six spatial witnesses, comparison/seal gates, optional synthesized sound, keyboard/touch movement and three embedded original pixel-cartoon panels. Three additional original cartoon illustrations appear in the [homepage gallery](index.html#cartoons), linking directly to the game.

**Natural invariant:**

```text
T1 [observed] : four fingers demonstrated
T2 [asserted] : a different answer is demanded
T3 [coerced]  : an answer might be supplied under pressure
RULE : T3 does not supersede T1; neither T2 nor T3 independently proves a count
```

**Provenance:** Direct observation is not interchangeable with a claim from a powerful person, and an answer extracted under duress is not evidence of freely held conviction. The chapter records each source distinctly.

**Persistence:** Previous chapter HTML artifacts 001–019 remain unchanged. The playable event log is ephemeral session state, while the chapter source, illustrated homepage and README release ledger are preserved in Git.

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

## Next natural boundary — 1984 / 021

**Part Three, Chapter Three:** O’Brien explains the Party’s conception of power, and Winston challenges its claims about permanent control and human nature. The next sprite comic should distinguish a theory of power from established facts, and test whether an imposed worldview constitutes independent evidence. Preserve the chronological witness trail.

### Superseded Chapter 015 forecast — chronology correction

The earlier proposal placed the Hate Week enemy change in Chapter 015 / Part Two, Chapter Seven. The event belongs to Part Two, Chapter Nine. It has been reserved for Chapter 017, while Chapter 015 follows Winston’s memories of his mother and Chapter 016 will follow the visit to O’Brien.

### Superseded planning note — historical provenance

Before Chapter 011, the proposed title was *The Hidden Room*, based on placing the room rental in Part Two, Chapter Three. Corrected source sequence: repeated secret meetings and the church conversations occur in Part Two, Chapter Three; the rented room begins in Part Two, Chapter Four. This correction is retained explicitly so planning history is traceable.

### Authorship notice

*1984* / *Nineteen Eighty-Four* is by George Orwell. In the United States it remains under copyright; this project is an original educational and interpretive adaptation with only brief references to character names, setting and plot. No original novel pages or lengthy passages are reproduced.
