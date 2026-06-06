### Pro Docs Redesign With Legacy Page

**Goal:** Replace `/pro/` with the supplied RevoGrid Pro redesign while preserving the current Pro page at `/pro/v1`.

**Non-goals:** No changes to RevoGrid runtime behavior, Pro plugin APIs, pricing implementation, or demo code.

**Expected behavior:** `/pro/` renders a frontmatter-driven landing page adapted from `revogrid-pro-redesign_2.html` inside the existing VitePress docs chrome. `/pro/v1` renders the current Pro page unchanged.

**API/config/data model:** No public API changes. The new page uses `pro/index.md` frontmatter under `proPage`; the legacy page keeps the previous frontmatter structure in `pro/v1.md`.

**Interactions/lifecycle:** Reveal animations use SSR-safe Vue lifecycle code with `IntersectionObserver` and reduced-motion fallback. Feature video modal behavior remains local to the new component.

**Rendering/performance notes:** The redesign must support dark and light VitePress themes, avoid duplicate nav/footer, and keep mockup grids readable on mobile.

**Edge cases:** SSR build must not touch `window`/`document` before mount. Mobile layouts must not overflow. Hidden reveal content must become visible if `IntersectionObserver` is unavailable.

**Tests:**
- Build: `pnpm build`.
- Visual: run `pnpm dev`, compare `/pro/` to the supplied HTML reference at desktop and mobile sizes, verify light/dark theme, and confirm `/pro/v1` still renders.

### Column Pinning With Active Cell Focus

**Goal:** Keep grid layout and focus state valid when a column is pinned or unpinned while a body cell is selected.

**Non-goals:** No public API changes, no context-menu-specific behavior, and no changes to column pinning semantics.

**Expected behavior:** After `columns` changes move a column between `rgCol`, `colPinStart`, or `colPinEnd`, the selected cell overlay must stay attached to the same logical column when possible, and pinned/regular viewports must not reuse stale selection stores from their previous positions.

**API/config/data model:** Existing `setCellsFocus`, `getFocused`, and `getSelectedRange` contracts remain unchanged.

**Interactions/lifecycle:** Rerendering viewports after a column pin update must rebind selection stores to the current viewport type mapping.

**Rendering/performance notes:** The fix should be limited to selection store bookkeeping during viewport registration and avoid extra grid-wide renders.

**Edge cases:** Covers adding a left-pinned viewport before the regular viewport and preserving focus on the moved column.

**Tests:**
- E2E: add a `revogrid/e2e/pinning.spec.ts` regression that focuses a regular cell, pins that column left through `grid.columns`, and verifies focus/range moves to `colPinStart` without broken pinned layout.

### Trial Success Icon

**Goal:** Show the existing `wcag.svg` icon above the trial request success title.

**Non-goals:** No changes to the trial form payload, endpoint, validation, or page routing.

**Expected behavior:** After a trial request is sent, the success state displays the icon above "Trial request received" and keeps the success message readable on desktop and mobile.

**Tests:**
- Build or targeted compile check for the Vue component.
