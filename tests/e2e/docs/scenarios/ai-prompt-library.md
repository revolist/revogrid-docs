# AI Prompt Library scenarios

Supplemental viewport/theme observations and live-checkout limitations: [catalog evidence matrix](README.md#viewport-and-theme-evidence). Apply [shared shell cases](shared-shell.md) alongside these cases; see [findings](observed-issues.md) for current failures.

Route: `/demo/ai-prompts`. Catalog ID: `ai-prompt-library`. Priority: P0 means basic release gate; P1 means additional regression coverage.

## Evidence and setup

Source fixtures refreshed on 2026-09-09. The workspace already contained unrelated changes; code cases below are source-derived and the full multi-step cases are not claimed as executed passes.

Start each case with a hard reload and Category = All, empty Search, closed header filters. A hard reload is important: edits modify bundled row objects in memory and an ordinary client-side route revisit may retain the imported objects. Wait for `.prompt-grid` data cells, not merely the docs shell. Scope all row assertions to the grid, excluding source-panel text. Use the shared docs-shell scenarios in addition to these cases.

## Browser evidence status

Earlier screenshots used the retired generic prompt fixtures. Re-record the initial, filtered, and editor states with the RevoGrid-specific catalog before treating visual evidence as current.

## Scenarios

### PROMPT-001 · P0 · Initial readable prompt catalog

1. Open the route in a fresh page → Search and Category controls, the editing hint, and the Prompt role / Category / Prompt / Tags headers appear.
2. Inspect the first record → `Minimal grid starter`, `Setup`, and `quickstart, typescript` belong to the same row; prompt starts `Create the smallest working RevoGrid example`.
3. Scroll down and horizontally to Tags → later records render, and scrolling back restores the first record without duplicated cells or detached headers.

Visual checks: 108px rows contain wrapped prompt text; the long Prompt column can scroll inside the workspace; text must not overlap the next row. Automation: `.prompt-grid`, header names, and fixture title are concrete targets. Do not equate rendered row count with the full dataset under virtualization.

### PROMPT-002 · P0 · Search and category combine

1. Enter `  MINIMAL GRID STARTER  ` in `Role, prompt, or tag…` → the first fixture remains; trimming and case-insensitive matching work.
2. Select Extensions while keeping that search → no data rows match; controls and headers remain usable.
3. Clear Search while Extensions remains selected → Extension rows return, including `Plugin scaffold`; Setup records are absent from the filtered source.
4. Choose All and search `quickstart, typescript` → `Minimal grid starter` returns through its Tags field.
5. Clear Search → full source returns with no stale empty state.

Visual checks: no stale cells from the previous category in an empty result. Automation: use the labelled Category select and search placeholder; compare filtered row identities against `filterPrompts` fixtures independently, not against screen-only row totals.

### PROMPT-003 · P0 · Prompt edit and cancel

1. Search the exact first fixture title; double-click its Prompt cell → `.prompt-editor` is a textarea initialized with the current prompt.
2. Replace with `E2E prompt: preserve this exact text.` and commit using the grid editor's normal Enter action → cell displays the new value; title, category, and tags remain unchanged.
3. Reopen the same cell, type a second draft, and press Escape → committed text remains, draft is discarded, and editor closes.
4. Clear and reapply the search → committed value still belongs to the same record.

Visual checks: textarea stays aligned with the cell and is not hidden beneath adjacent rows. Automation: the custom editor subclasses the core TextEditor; verify the actual commit key behavior before encoding a multiline keyboard expectation. Do not assume Enter inserts a newline. Hard reload after the case.

### PROMPT-004 · P1 · Sort and column geometry

1. With all categories and no search, sort Prompt role ascending then descending → visible ordering follows titles in each direction, while prompt/category/tag values stay attached to their records.
2. Resize Prompt narrower and then wider → wrapped content remains readable and column boundary follows the pointer.
3. Move Tags before Category → headers and their corresponding data move together; searching a tag still finds the same record.

Visual checks: no header/body misalignment after horizontal scrolling. Automation: resolve column props (`title`, `category`, `prompt`, `tags`) rather than fixed positional indices after moving a column.

## Visual and E2E completion criteria

Repeat initial, filtered-empty, and editor-open states at 1440×900 and 390×844 in light and dark docs themes. The toolbar must remain reachable, focus visible, and any horizontal overflow contained by the grid. These combinations are acceptance scenarios, not already verified screenshots. P0 is ready for automation once browser mounting succeeds; PROMPT-003's exact editor commit interaction needs first-run confirmation.

Current coverage: [docs demo shell](../demo-experience.spec.ts) checks catalog mounting but not this workflow. [Prompt unit checks](../../../../revogrid-demos/core-ai-prompts/tests/prompt-library.test.mjs) cover source behavior, not the embedded browser experience.

References: [docs route](../../../../demo/ai-prompts.md), [Vue view](../../../../revogrid-demos/core-ai-prompts/src/prompt-library.vue), [filter and columns](../../../../revogrid-demos/core-ai-prompts/src/prompt-library.shared.ts), [fixtures](../../../../revogrid-demos/core-ai-prompts/src/prompts.json), [textarea editor](../../../../revogrid-demos/core-ai-prompts/src/prompt-editor.ts).
