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
