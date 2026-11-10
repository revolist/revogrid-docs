# RevoGrid product film

Original, silent, 29.8-second looping motion artwork, rendered at 1920 × 628 / 60fps. No stock footage, reference-video assets, third-party fonts, or runtime animation dependencies. The pictured interface is conceptual. All six projects and colors persist across grid, charts, Gantt, Scheduler, and Kanban.

- `scene.mjs`: editable artwork, dataset, typography, layout, and timeline.
- `scene.html`: browser preview (serve this directory with any static HTTP server).
- `render.mjs`: deterministic frame-by-frame export through Chromium and ffmpeg.
- `../../public/video/revogrid-product-film-<hash>.mp4`: H.264, yuv420p, fast-start web delivery.
- `../../public/video/revogrid-product-film-<hash>.jpg`: static poster.

From the docs directory, with the workspace Playwright dependency, Chrome, and ffmpeg installed:

```sh
node scripts/product-film/render.mjs
```

Use `--stills` to export review frames across all five views and transitions. `?render` disables the live preview's clock; `window.renderFrame(seconds)` seeks deterministically. Text in the artwork is grouped in the renderer for alternative language exports. The accessible description and player label are configured in `index.md` under `hero.film`.

The homepage plays the muted video continuously with native autoplay and loop, without controls or hover overlays. The site container clips to a 20px radius; the media and video element stay square. Existing live demos remain available from the hero CTA.

The export contains only the workspace, without external headings or decoration. Series colors match `packages/ui/package/color-palette/chart-palettes.ts`. Local portrait assets are the existing planning demo sample personas (not actual team identities). See the planning demo `src/assets/avatars/README.md` for Random User photo-source details.

Only the view tabs and data surface remain; workspace header, footer, and sharing chrome are omitted. Status and budget badges measure their text with 12px padding on each side.

Exports include a SHA-256 content hash in the filename so browsers and chat previews load each revision as a fresh asset. After rendering, use the printed paths in `index.md` (`hero.film.src` and `hero.film.poster`).

The tab icons use a two-tone navy/gray nine-square grid, separated-quarter pie chart, and rounded Gantt bars with an axis, following the supplied visual references. The encoded video stays square; the homepage container owns its 20px corner radius. Only morph intervals are compressed, from 2.4–2.8s to 0.8–0.9s; reading holds retain their original duration. `timing` in the scene maps playback time to the original choreography, and the renderer reads `window.filmDuration`.

Icon tones follow the tab label (green selected, muted inactive), with a lighter secondary layer. The grid drawing has an optical inset inside the common 22px icon slot.

Tab widths follow measured text plus a 22px icon, 7px icon gap and 16px padding per side. Both highlight position and width animate between those bounds. Grid headers use a very light surface (`#f8faf9`) and dark text (`#182d29`).

Gantt headers share the grid header styling across the full width. Chart titles align with the Data Grid icon. The exported frame includes 20px of white padding above and below the 1920×588 content.

Dark export: `node scripts/product-film/render.mjs --dark` (add `--stills` for review frames). Use the printed dark paths in `hero.film.darkSrc` and `hero.film.darkPoster`. The site follows VitePress theme state and restores the film position when switching sources.

Scheduler shows the same six projects as time-blocked sessions in a five-day calendar. Kanban groups them into In progress (3), Review (1), and Complete (2), carrying their portraits, budget badges, and progress forward. Calendar and board tabs use the same green two-tone icon style and measured padding.
