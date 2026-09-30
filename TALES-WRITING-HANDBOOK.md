# Tales Of Space Adventures Writing Handbook

This is the root storytelling instruction for Tales Of Space Adventures.

Use it as the main entry point when writing tales with GitHub Copilot, Claude, or any other AI assistant.

## What SAT is trying to create

Tales Of Space Adventures is built around four pillars:

- realistic sci-fi rather than science fantasy
- adventure and action as the main story engine
- romance and love as the emotional pivot in many stories
- nontrivial, hard-to-predict plots with earned twists

The target feeling is simple: once a reader starts, stopping should feel difficult.

## Canon first

The universe is defined by the encyclopedia articles under `docs/encyclopedia/`.

- Treat those articles as the source of truth for timeline, travel, technology, geography, institutions, and existing world logic.
- Prefer named hubs, corridors, starship types, and technologies already established in the encyclopedia.
- New stories may expand the universe, but they should expand around the encyclopedia rather than ignore it.

Start with these core canon references:

- `docs/encyclopedia/intro.md`
- `docs/encyclopedia/history/timeline.md`
- `docs/encyclopedia/tales-and-movies/overview.md`

## Required SAT story DNA

Every substantial SAT tale should contain most of the following:

- active objective and visible stakes very early
- movement, pursuit, mission pressure, or operational danger
- romance that changes decisions and creates risk
- at least one memorable set piece or visual image
- morally mixed opposition rather than cartoon villains
- at least one reversal the reader can understand in hindsight
- a hopeful ending that feels earned rather than easy

## Story outputs supported in this project

The prompt system currently supports these outputs:

- concept pack
- outline
- scene spine
- opening chapter
- short story draft
- movie treatment
- scene rewrite
- revision diagnosis

## Prompt catalog

| Prompt | Use when | File |
| --- | --- | --- |
| Core writer prompt | You need a general SAT concept, outline, chapter, or story | `.github/prompts/tales-of-space-adventures-writer.prompt.md` |
| Short story prompt | You want a compact short story or opening chapter with tight pace | `.github/prompts/tales-of-space-adventures-short-story.prompt.md` |
| Movie treatment prompt | You want a cinematic feature treatment or long-form visual arc | `.github/prompts/tales-of-space-adventures-movie-treatment.prompt.md` |
| Scene rewrite prompt | You already have text and want stronger pace, romance, action, humor, or canon fit | `.github/prompts/tales-of-space-adventures-scene-rewrite.prompt.md` |
| Pattern selector prompt | You want help choosing and adapting a classic literature pattern for SAT | `.github/prompts/tales-of-space-adventures-pattern-selector.prompt.md` |
| Style lab prompt | You want to choose a style lens, author-like influence, or movement-inspired tone without imitation | `.github/prompts/tales-of-space-adventures-style-lab.prompt.md` |
| Humor and banter prompt | You want cleaner comic energy, charm, wit, or relief without weakening stakes | `.github/prompts/tales-of-space-adventures-humor-and-banter.prompt.md` |
| Social controversy prompt | You want to inject moral conflict, divisive ideas, and discussion-worthy pressure into a tale | `.github/prompts/tales-of-space-adventures-social-controversy.prompt.md` |
| Story critique prompt | You want a professional-quality review report with red flags, strengths, and a follow-up revision prompt | `.github/prompts/tales-of-space-adventures-story-critique.prompt.md` |

## Literature pattern matrix

The table below maps widely known narrative patterns to SAT-friendly usage.

| Classic pattern | SAT adaptation | Best SAT modes | Corresponding prompt |
| --- | --- | --- | --- |
| Overcoming the monster | Replace a monster with a system threat, fortress, syndicate, disaster chain, or engineered crisis | Rescue Through Hazard, Siege And Containment, Rival Pursuit | `.github/prompts/tales-of-space-adventures-pattern-selector.prompt.md` |
| The quest | Mission to reach a place, person, route, artifact, or truth before failure closes the window | Quest Under Pressure, Rescue Through Hazard, Mystery With Acceleration | `.github/prompts/tales-of-space-adventures-pattern-selector.prompt.md` |
| Voyage and return | Enter a strange but plausible frontier environment, survive it, come back changed | Voyage And Return, Rebirth Through Expedition | `.github/prompts/tales-of-space-adventures-pattern-selector.prompt.md` |
| Rags to riches | Use competence, access, reputation, citizenship, or belonging rather than fairy-tale wealth | Rebirth Through Expedition, Forbidden Orbit | `.github/prompts/tales-of-space-adventures-pattern-selector.prompt.md` |
| Comedy | Use collision, misunderstanding, wit, disguise, and eventual union while preserving pressure | Trickster Disruption, Forbidden Orbit | `.github/prompts/tales-of-space-adventures-pattern-selector.prompt.md` |
| Tragedy | Borrow the emotional gravity and bad decisions, then bend the final movement toward hope | Rebirth Through Expedition, Mystery With Acceleration | `.github/prompts/tales-of-space-adventures-pattern-selector.prompt.md` |
| Rebirth | Damaged characters regain moral clarity, trust, courage, or love through ordeal | Rebirth Through Expedition, Rescue Through Hazard | `.github/prompts/tales-of-space-adventures-pattern-selector.prompt.md` |
| Rival lovers | Use opposition of duty, faction, class, or law to drive emotional and action conflict | Rival Pursuit, Forbidden Orbit | `.github/prompts/tales-of-space-adventures-pattern-selector.prompt.md` |
| Heist | Use planning, specialization, reversals, and deception around realistic sci-fi infrastructure | Heist Across Systems, Trickster Disruption | `.github/prompts/tales-of-space-adventures-pattern-selector.prompt.md` |
| Mystery | Every answer should worsen the stakes and redirect the mission | Mystery With Acceleration, Rival Pursuit | `.github/prompts/tales-of-space-adventures-pattern-selector.prompt.md` |
| Siege | Trap characters in a station, convoy, habitat, or political lockdown until pressure mutates alliances | Siege And Containment, Rescue Through Hazard | `.github/prompts/tales-of-space-adventures-pattern-selector.prompt.md` |
| Expedition romance | Use physical travel and discovery to accelerate emotional exposure | Voyage And Return, Quest Under Pressure | `.github/prompts/tales-of-space-adventures-pattern-selector.prompt.md` |

## Style as a second dimension

Pattern is one dimension. Style is another.

Do not ask the assistant to imitate a living author exactly. Instead, use influence lenses or movement-level qualities.

| Style lens | What it emphasizes | Safe framing |
| --- | --- | --- |
| Verne-like exploratory precision | engineering curiosity, route logic, discovery discipline | ask for exploratory rigor and mechanical wonder |
| Dumas-like momentum | reversals, rivalry, secret loyalties, chapter-end pull | ask for swift dramatic propulsion |
| Austen-like relational intelligence | tension in conversation, pride, misreading, social maneuver | ask for sharp emotional and social dynamics |
| Le Guin-like social intelligence | institutions, anthropology, moral ambiguity, humane thoughtfulness | ask for social depth and reflective clarity |
| Chandler-like edge | dry wit, danger, verbal tension, unsentimental observation | ask for lean tension and cutting banter |
| Golden-age adventure serial | cliffhangers, momentum, set pieces, destination pull | ask for serial energy and relentless forward motion |
| New Wave science fiction | inner pressure, altered social assumptions, bold conceptual framing | ask for conceptual freshness anchored by discipline |
| Space western frontier | rough logistics, local power, sparse law, dangerous independence | ask for frontier grit and mobility pressure |
| Romantic suspense | attraction under danger, secrecy, divided trust, reveal-driven escalation | ask for high emotional suspense under mission pressure |
| Screwball tension | fast banter, collision of motives, comic misdirection, eventual sincerity | ask for witty friction without losing stakes |

Use the style prompt when you want one or two of these lenses combined deliberately.

## Humor policy

Humor is encouraged, but only in service of story energy.

Good SAT humor usually comes from:

- competence under pressure
- sharp banter between emotionally guarded people
- situational irony
- observational wit about institutions, protocol, logistics, or ego
- brief relief before tension tightens again

Avoid:

- parody that destroys stakes
- constant quips during grief or catastrophe
- internet-age slang that breaks world immersion
- joke density so high that danger stops feeling real

The ideal result is charm, tension release, and character revelation, not stand-up comedy.

## Social controversy and moral friction policy

SAT stories can and should engage with difficult social questions when the story benefits from them.

The goal is not sermonizing. The goal is to make readers argue, think, sympathize, take sides, revise those sides, and want to discuss the story afterward.

Good controversy in SAT usually comes from:

- migration pressure versus border control
- security versus freedom
- truth versus stability
- elite access versus ordinary survival
- bureaucracy versus human dignity
- technological progress versus identity continuity
- medical possibility versus moral cost
- artificial scarcity versus engineered abundance
- law versus mercy
- loyalty to a person versus loyalty to a system

Use moral friction this way:

- make the issue personal through character cost
- give the opposition an intelligent case, not a straw man
- tie the debate to action and consequence
- let romance intensify the disagreement rather than bypass it
- keep enough ambiguity that thoughtful readers can split in their judgments

Avoid:

- direct political preaching detached from plot
- simplistic present-day slogan swapping in a sci-fi costume
- villains who exist only to embody a bad opinion
- issue overload that weakens the adventure engine

The reader should feel provoked, not manipulated.

## Action policy

Adventure is the priority.

That does not always mean combat. SAT action can be:

- convoy routing under pressure
- escape through a failing gate schedule
- rescue transfer between damaged ships
- sabotage prevention
- infiltration or extraction
- high-risk negotiation under time collapse
- survival in a failing habitat or unstable corridor

If a story becomes too static, add movement, urgency, or pursuit.

## Unpredictability policy

SAT plots should not feel trivial or easy to guess.

Use these tools:

- competing agendas rather than one obvious conflict line
- reversals that change decision-making, not only information
- secrets that come from institutions, contracts, logistics, or history
- romance complications that worsen mission difficulty
- incomplete trust among allies
- twists prepared by earlier clues

Do not use randomness as a substitute for surprise.

## Critique and validation workflow

Writing prompts are only half the system. SAT also needs deliberate validation.

Use the critique system after outlines, chapters, scenes, and full drafts.

- The checklist lives in `docs/manifesto/critique-checklist.md`.
- The reusable review prompt lives in `.github/prompts/tales-of-space-adventures-story-critique.prompt.md`.

The review should always capture:

- strengths worth preserving
- ranked problems by severity
- AI-generation red flags
- discussion value and moral pressure quality
- one ready-to-use next revision prompt

## Working workflow for AI-assisted writing

1. Read the handbook, manifesto, and relevant encyclopedia pages.
2. Pick a classic pattern or SAT mode.
3. Pick one or two style lenses.
4. Decide how much humor the story can carry.
5. Decide whether the story needs a moral controversy or social-pressure axis.
6. Define the mission, the romance obstacle, and the promised ending payoff.
7. Choose the right prompt file.
8. Draft.
9. Revise for pace, canon fit, reversals, humor control, controversy balance, and ending payoff.
10. Run the critique prompt and use its report for the next revision pass.

## Practical starting commands

Use language like this with your assistant:

"Read `TALES-WRITING-HANDBOOK.md`, the manifesto files, and the relevant encyclopedia pages. Use the Tales Of Space Adventures storytelling skill. Build me a realistic sci-fi adventure romance with strong action, smart humor, and a nontrivial unpredictable plot."

Or:

"Use the pattern selector prompt first, then the short story prompt. I want a frontier rescue romance with witty banter, hard travel constraints, and a hopeful ending."