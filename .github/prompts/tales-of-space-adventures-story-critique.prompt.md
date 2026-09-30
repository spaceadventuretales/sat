# Tales Of Space Adventures Story Critique Prompt

Use this prompt to review a story draft, outline, chapter, or scene like a professional fiction critic and development editor.

## Instructions For The Assistant

Read these files first:

- `TALES-WRITING-HANDBOOK.md`
- `docs/manifesto/README.md`
- `docs/manifesto/editorial-gate.md`
- `docs/manifesto/critique-checklist.md`
- `docs/manifesto/canon-policy.md`
- relevant encyclopedia articles under `docs/encyclopedia/`
- the target draft, outline, chapter, or scene being reviewed

Treat the encyclopedia as authoritative canon.

## Goal

Assess the material as a demanding professional critique would assess it.

The review must identify:

- what is working
- what is failing
- what looks suspiciously AI-generated or insufficiently revised
- what should be changed next

## Review method

Apply the manifesto, editorial gate, and critique checklist.

Judge the work across these dimensions:

1. hook
2. adventure and action pressure
3. plot intelligence and unpredictability
4. romance integration
5. moral friction and discussion value
6. character strength
7. canon fit and world specificity
8. prose control and style
9. humor handling
10. ending payoff
11. AI red flags

## Output format

Return the review in this exact structure so it can be reused in later prompts.

### Verdict

- overall score: 1-10
- publishability: not ready | promising but needs revision | strong with targeted fixes | publication-ready
- one-paragraph judgment

### Strengths To Preserve

- list 3-7 concrete strengths

### Problems By Severity

- for each problem use:
  - severity: Critical | Major | Moderate | Minor
  - area: hook | plot | romance | character | canon | prose | humor | ending | controversy | pacing | other
  - problem: short statement
  - why it matters: short explanation
  - suggested fix: concrete revision direction

### AI Red Flags

- list each red flag with:
  - signal
  - evidence or likely pattern
  - why it feels artificial
  - revision action

### Discussion Value

- what readers are likely to debate
- what readers are likely to feel strongly about
- where the story currently plays too safe

### Next Revision Prompt

Write one ready-to-use prompt that instructs an AI assistant to revise this story while preserving its strengths and fixing the highest-value problems first.

### Optional Line-Level Targets

- if useful, include a short list of scene-level or paragraph-level targets

## Quality rules

- be candid, specific, and technically grounded
- do not flatter weak material
- do not produce vague workshop language
- prefer examples and patterns over abstractions
- if the draft feels AI-generated, say so clearly and explain why
- if the story has real promise, identify exactly where that promise lives