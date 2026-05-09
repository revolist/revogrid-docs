### RevoGrid Homepage V2 Custom Layout

**Goal:** Replace the default VitePress home layout for `index.md` with a dedicated, frontmatter-driven RevoGrid marketing page based on the supplied homepage prototype.

**Non-goals:** Do not replace global docs navigation, docs pages, guide pages, or existing reusable home components used by other framework landing pages.

**Expected behavior:** The root page renders a full custom homepage with hero, real RevoGrid market-data grid, stats, trust badges, demo previews, capabilities, developer code tabs, advanced modules, use cases, comparison, pricing, FAQ, and final CTA.

**API/config/data model:** `index.md` uses `layout: revogrid-home` and structured frontmatter for editable page content. Pricing for Pro Light and Pro Advanced comes from `pro/prices.ts`; the open-source and enterprise cards remain page data.

**Interactions/lifecycle:** The page follows VitePress dark/light state. The hero grid switches between `darkMaterial` and `material`; code tabs update the visible code sample; copy writes the active sample to the clipboard; FAQ items toggle open state.

**Rendering/performance notes:** The hero grid uses `@revolist/vue3-datagrid` with the existing stock dataset enriched in component code for volume and sparkline trends. Decorative mini-previews remain static markup to keep the page lightweight.

**Edge cases:** The homepage must build under VitePress SSR, render with JavaScript hydration, remain responsive on mobile, and avoid leaking prototype styles into docs pages.

**Tests:**
- Build: run `npm run build`.
- Visual/e2e: run the VitePress dev server, verify `/`, dark/light state, hero grid, code tabs, FAQ toggle, pricing links, and desktop/mobile layout.
