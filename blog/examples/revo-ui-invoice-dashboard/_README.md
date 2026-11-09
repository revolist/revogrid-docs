# Revo UI dashboard examples

Two React and TypeScript examples using the published `@revolist/ui` package: a weekly planner adapted from the Revo UI gallery, and an invoice dashboard combining Revo UI controls and charts with the open-source RevoGrid React adapter. All data is illustrative and stays in the browser.

## Run locally

Use Node.js 22.13 or later. Install the pinned dependencies and start Vite:

```sh
npm ci
npm run dev
```

Open the local URL shown by Vite for the invoice dashboard. Add `?example=quick-start` to open the weekly planner. Run `npm run build` to typecheck and build a production version, or `npm run preview` after building.

The weekly planner uses `TimeGrid`, `Avatar`, `Checkbox`, `Legend`, `ProgressBar`, and `SegmentedSwitch` with React state. Select time blocks with a click or keyboard; this React adaptation uses individual selection rather than drag painting. The invoice example derives its summary cards, area chart, and read-only grid from the same filtered records. Search, the SegmentedSwitch status filter, reset, and theme are controlled by React. The grid uses its own theme property while Revo UI uses `data-theme`.

The project pins `pdfjs-dist` because Vite's dependency optimizer resolves the optional PDF viewer assets through `@revolist/ui@4.0.4` even though these examples do not render a PDF viewer. No PDF worker setup is needed.

Load `@revolist/ui/styles.css` once before the example stylesheet. The Vite build uses relative asset paths so its `dist/` directory can also be served from a nested website path.
