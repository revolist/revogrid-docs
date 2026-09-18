---
title: 'Build a React Spreadsheet: Copy/Paste, Validation & Undo/Redo'
description: Build an Excel-like React spreadsheet with RevoGrid. Paste rows from Excel, validate inventory data, undo edits,
  and save changes.
outline: deep
faq:
  heading: Frequently asked questions
  items:
    - q: Can I build an Excel-like spreadsheet in React without a Pro license?
      a: >-
        Yes. RevoGrid Core provides editable cells, range selection, and standard clipboard operations under the MIT license. This tutorial adds its own validation rules, undo/redo history, and local persistence in application code. Those custom implementations are not built-in Core plugins.
    - q: How do I paste multiple rows from Excel into a React table?
      a: >-
        Enable clipboard support, focus the destination cell, and paste a tab-separated block copied from Excel. RevoGrid maps the values into existing cells. Validate range edits as well as single-cell edits, and define a separate policy for data that exceeds the available rows or columns.
    - q: Is copying from Excel the same as importing an XLSX file?
      a: >-
        No. This example pastes cell values from the clipboard. It does not read an XLSX workbook or preserve its sheets, formulas, formatting, charts, or other workbook features. File import is a separate workflow.
    - q: Does RevoGrid Core include built-in undo and redo?
      a: >-
        This tutorial implements undo and redo in the application. RevoGrid’s packaged HistoryPlugin is a Pro feature. Choose either the custom history approach shown here or the Pro history workflow; do not run two independent history systems over the same edits.
    - q: Does RevoGrid save spreadsheet changes to a database?
      a: >-
        Persistence belongs to your application. The tutorial saves committed inventory data in this browser’s local storage. A production application must connect its own API and handle authentication, server-side validation, save failures, and conflicting updates.
date: '2026-09-18'
author: RevoGrid Team
category: Data Grid
tags:
- React
- Spreadsheet
- Data Grid
- Copy and Paste
- Data Validation
- RevoGrid
image: /react.svg
imageAlt: React logo
head:
- - link
  - rel: canonical
    href: https://rv-grid.com/blog/react-spreadsheet-copy-paste-validation-undo-redo
- - meta
  - name: keywords
    content: react spreadsheet, excel like table react, react table copy paste, react spreadsheet validation, react undo redo,
      RevoGrid
- - meta
  - property: og:title
    content: 'Build a React Spreadsheet: Copy/Paste, Validation & Undo/Redo'
- - meta
  - property: og:description
    content: Build an Excel-like React spreadsheet with RevoGrid. Paste rows from Excel, validate inventory data, undo edits,
      and save changes—with Core and Pro explained.
- - meta
  - property: og:type
    content: article
- - meta
  - property: og:url
    content: https://rv-grid.com/blog/react-spreadsheet-copy-paste-validation-undo-redo
- - meta
  - property: og:image
    content: https://rv-grid.com/react.svg
- - meta
  - property: og:image:alt
    content: React logo
- - meta
  - name: twitter:card
    content: summary_large_image
- - meta
  - name: twitter:title
    content: 'Build a React Spreadsheet: Copy/Paste, Validation & Undo/Redo'
- - meta
  - name: twitter:description
    content: Build an Excel-like React spreadsheet with RevoGrid. Paste rows from Excel, validate inventory data, undo edits,
      and save changes—with Core and Pro explained.
- - meta
  - name: twitter:image
    content: https://rv-grid.com/react.svg
- - script
  - type: application/ld+json
  - |-
    {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Build an Excel-Like Spreadsheet in React: Copy/Paste, Validation, and Undo/Redo",
      "description": "Build an Excel-like React spreadsheet with RevoGrid. Paste rows from Excel, validate inventory data, undo edits, and save changes—with Core and Pro explained.",
      "inLanguage": "en",
      "datePublished": "2026-09-18",
      "dateModified": "2026-09-18",
      "author": {
        "@type": "Organization",
        "name": "RevoGrid Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "RevoGrid",
        "url": "https://rv-grid.com/"
      },
      "image": "https://rv-grid.com/react.svg",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://rv-grid.com/blog/react-spreadsheet-copy-paste-validation-undo-redo"
      },
      "keywords": [
        "react spreadsheet",
        "excel like table react",
        "react table copy paste",
        "react spreadsheet validation",
        "react undo redo",
        "RevoGrid"
      ]
    }
---

<script setup>
import ReactInventoryDemo from '../demo/react/react-inventory/ReactInventoryDemo.vue'
import CommercialFaq from '../pro/CommercialFaq.vue'
</script>

# Build an Excel-Like Spreadsheet in React: Copy/Paste, Validation, and Undo/Redo

Your users already have the numbers in Excel. They should not have to open a form for every product just to update quantities and prices.

An **Excel-like spreadsheet in React** gives them a more direct workflow: select a cell, paste a block of data, correct a mistake, and save when the changes look right.

In this tutorial, we will build an inventory editor with [RevoGrid’s React data grid](/guide/react/). RevoGrid handles the editable grid and clipboard interactions. Our application adds inventory rules, a small undo/redo history, and saving. The example uses **RevoGrid Core**; we will explain where Pro can replace custom implementation work.

<ClientOnly>
  <ReactInventoryDemo />
</ClientOnly>


Start with **Copy sample** in the demo, click the first **Quantity** cell, and paste with **Ctrl+V** or **Cmd+V**. The three rows update quantities and prices together.

Then double-click a Quantity cell, enter `-1`, and press Enter. The edit is rejected with a message identifying the product and the problem. Enter a valid quantity, press Enter again, and try **Undo**, **Redo**, and **Save locally**.

**Save locally saves only in this browser.** It does not send inventory to a server. After saving, reload the page to check that the saved values return.

<!-- Publishing: place the real walkthrough recording here after browser QA.
Record this inventory example, not the separate Pro Excel budget workbench.
Do not add a video URL until the media file exists. See PUBLISHING-NOTES.md.
-->

## What is Core, what is Pro, and what belongs to your application?

Before writing code, separate the grid interactions from the rules of your product.

| Requirement | Implementation in this tutorial | Optional Pro capability |
| --- | --- | --- |
| Edit cells and select a rectangular range | RevoGrid Core | Not required for this example |
| Copy and paste ordinary cell values | RevoGrid Core clipboard support | Structured clipboard workflows, such as JSON clipboard |
| Reject invalid quantities and prices | Application validation through Core edit events | Packaged validation features and cell-level feedback |
| Undo and redo inventory changes | Application-owned snapshot history | `HistoryPlugin` |
| Save, reload, and show unsaved changes | Application code | Your application still owns persistence |
| Import or export Excel workbook files | Not implemented in this example | Separate Pro Excel workflows; check the relevant feature documentation |

[RevoGrid Core is MIT-licensed](/pro/). That does not mean every spreadsheet feature is built into Core. In particular, the history and validation logic below is code we write, not a hidden Core undo plugin or a database provided by the grid.

The [Core clipboard guide](/guide/clipboard) and [Pro feature overview](/pro/) describe those boundaries in more detail.

## 1. Set up the React spreadsheet

Add the React wrapper to an existing React and TypeScript application:

```bash
npm install @revolist/react-datagrid@4.28.0
```

This example pins the grid version rather than silently following a moving dependency. Keep the resolved version in your application’s lockfile.

Download the example above, copy its `src/inventory` directory into your application, and render the component:

```tsx
import InventoryEditor from './inventory/InventoryEditor';

export default function App() {
  return <InventoryEditor />;
}
```

The example separates the work into four files:

```text
src/inventory/
  InventoryEditor.tsx   React component and grid events
  model.ts             Inventory data and validation
  history.ts           Undo/redo and the saved baseline
  inventory.css        Demo styling
```

The sections below explain the important parts. The download contains the complete implementation, including local-storage loading, error handling, and logic tests.

RevoGrid is a browser component. In a server-rendered application, mount the interactive editor on the client; the [React integration guide](/guide/react/) covers framework integration considerations.

## 2. Define inventory rows and editable columns

Every inventory row needs a stable identifier. Product names and visible row numbers are not reliable database keys.

```ts
export interface InventoryRow {
  id: string;
  sku: string;
  product: string;
  quantity: number;
  price: number;
}

const rows: InventoryRow[] = [
  {
    id: 'p-1',
    sku: 'KB-001',
    product: 'Compact keyboard',
    quantity: 18,
    price: 49.9,
  },
  // More products in the complete example.
];
```

Keep the product identifiers read-only and expose only the fields the user should change:

```tsx
const columns = [
  { prop: 'sku', name: 'SKU', size: 110, readonly: true },
  { prop: 'product', name: 'Product', size: 205, readonly: true },
  { prop: 'quantity', name: 'Quantity', size: 125 },
  { prop: 'price', name: 'Price (USD)', size: 145 },
];
```

Define stable column configuration outside the component, or memoize it when it depends on component inputs. Our demo also keeps the grid’s working rows separate from historical snapshots, so an edit cannot mutate a previously saved checkpoint.

This is an editor for **existing inventory**, not a product-import wizard. Pasting quantities and prices updates existing products; it does not create new product IDs or match an arbitrary Excel file against your catalog.

## 3. Enable React table copy/paste from Excel

The grid configuration enables range selection and the clipboard:

```tsx
<RevoGrid
  source={source}
  columns={columns}
  range
  useClipboard
  onBeforeedit={beforeEdit}
  onBeforerangeedit={beforeRangeEdit}
  style={{ height: '285px', width: '100%' }}
/>
```

Notice the explicit height. A spreadsheet needs a visible viewport, not just an array of rows.

Copying ordinary cells from Excel produces a rectangular text block with tabs between columns and line breaks between rows. For this example, paste these three rows into the first Quantity cell, without a header row:

```text
12	19.95
0	29.50
8	14.25
```

The left value is Quantity; the right value is Price. Click the destination cell once before pasting. Pasting into an active text editor is a different interaction from pasting a range into the grid.

With Core, standard clipboard operations work on cell values. **This is not XLSX import.** The tutorial does not reconstruct workbook sheets, formulas, formatting, or charts from a copied block. Those are separate requirements.

Also define your paste boundaries. This demo expects the block to fit within existing editable cells. Core does not automatically create an unlimited number of rows or columns for an oversized paste. An import-oriented application should explicitly reject overflow or provide a row-creation policy using the [clipboard lifecycle](/guide/clipboard).

## 4. Validate both individual edits and pasted ranges

The easiest mistake in an editable React table is to validate typing but forget pasting.

RevoGrid exposes separate hooks for a single-cell edit and a range edit. We use both, with the same normalization rules. See the [editing guide](/guide/editing) for the underlying event lifecycle.

For this inventory editor, Quantity must be a whole number from zero to one million. Price must be nonnegative, have no more than two decimal places, and not exceed one million. Empty values are invalid; zero is valid.

The demo accepts plain dot-decimal input such as `19.95`. It deliberately rejects currency symbols, thousands separators, decimal commas, and formulas instead of guessing what the user meant.

### Normalize before storing

A cell editor can supply a string even when the field represents a number. Validate the entire input, then convert it:

```ts
export function normalizeValue(
  prop: 'quantity' | 'price',
  input: unknown,
): number {
  const label = prop === 'quantity' ? 'Quantity' : 'Price';

  if (typeof input !== 'string' && typeof input !== 'number') {
    throw new Error(`${label} is required.`);
  }

  const text = String(input).trim();
  if (!text) throw new Error(`${label} is required.`);

  const pattern = prop === 'quantity'
    ? /^\d+$/
    : /^\d+(?:\.\d{1,2})?$/;

  if (!pattern.test(text)) {
    throw new Error(prop === 'quantity'
      ? 'Quantity must be a whole number, zero or greater.'
      : 'Price must be zero or greater, with at most two decimal places (for example, 19.95).');
  }

  const value = Number(text);
  if (!Number.isFinite(value) || value > 1_000_000) {
    throw new Error(`${label} must not exceed 1,000,000.`);
  }

  return value;
}
```

Checking for an empty string first is important: an empty inventory field should not silently become zero. Similarly, accepting only the numeric prefix of `19.95oops` would hide a data-quality problem.

For a localized application, choose an explicit input locale and adapt the parser. Display formatting and accepted input formats should be deliberate product decisions, not accidental side effects of number conversion.

### Use one application-owned commit path

This example chooses a controlled integration: it cancels the grid’s default write, validates the requested changes, and commits a replacement source through application code.

The single-cell handler forwards the product ID, field, and proposed value:

```tsx
const beforeEdit: NonNullable<GridProps['onBeforeedit']> = event => {
  event.preventDefault();

  commitChanges([{
    id: event.detail.model?.id,
    prop: event.detail.prop,
    value: event.detail.val,
  }]);
};
```

For a range, collect all proposed cell changes before attempting the commit:

```tsx
const beforeRangeEdit: NonNullable<GridProps['onBeforerangeedit']> = event => {
  event.preventDefault();

  const changes: RawChange[] = [];

  for (const [rowIndex, cells] of Object.entries(event.detail.data)) {
    const model = event.detail.models[Number(rowIndex)];

    for (const [prop, value] of Object.entries(cells)) {
      changes.push({ id: model?.id, prop, value });
    }
  }

  commitChanges(changes);
};
```

Here, `GridProps` is `React.ComponentProps<typeof RevoGrid>`. The range event’s indexes locate its row models; the model’s `id` identifies the product. Do not treat a visible row index as a permanent record identifier.

Inside `commitChanges`, the `applyChanges` helper checks every requested cell before constructing the next inventory snapshot. If any value is invalid, it throws and the original data remains unchanged.

This gives the submitted, in-bounds range an **all-or-nothing** policy. A valid block becomes one change; an invalid block becomes no change. It does not turn an oversized or partially clipped clipboard input into a complete import transaction—that boundary needs the separate paste policy described above.

::: warning Choose one commit owner
These handlers call `preventDefault()` for valid edits as well as invalid ones because the application performs the write. Consequently, the grid’s normal `afteredit` commit event is not the history trigger in this example.

An alternative integration can allow valid grid writes and observe `afteredit`. Do not mix the two approaches or record the same edit twice. The [events guide](/guide/events-guide) explains the normal sequence.
:::

### Make errors actionable

“Invalid value” is not enough when a user pastes several rows.

Our message identifies the SKU and the rule, for example:

> MS-002: Quantity must be a whole number, zero or greater. Nothing in this edit was applied.

The demo shows this feedback in a text message with an alert role. It rejects the proposed data rather than storing invalid values for later review. A more advanced workflow could keep a separate import draft and mark several invalid cells, but that requires an explicit review-and-apply model.

## 5. Add undo and redo without splitting a paste into dozens of edits

Undo should follow the user’s action, not the number of cells involved.

Changing one quantity creates one history entry. Pasting three rows of quantities and prices also creates one history entry. Clicking Undo restores all six pasted values together.

The example maintains a present snapshot, previous snapshots, and redo snapshots. A successful commit adds the previous state to history and clears the redo branch:

```ts
commit(next: readonly InventoryRow[]): boolean {
  if (sameRows(this.present, next)) return false;

  this.past.push(cloneRows(this.present));
  if (this.past.length > this.limit) this.past.shift();

  this.present = cloneRows(next);
  this.future = [];
  return true;
}
```

The complete `InventoryHistory` implementation is in the download. It limits the history to 50 changes, ignores no-op edits, and never hands its stored snapshots directly to the grid.

Rejected edits do not reach `commit`. A new accepted edit after Undo clears Redo; an unchanged value does not.

The demo uses **Undo and Redo toolbar buttons**. It does not install application-level Ctrl+Z shortcuts. That avoids overriding the text editor’s native undo behavior. Adding shortcuts requires deciding whether the user is undoing text in an open editor or a committed spreadsheet operation.

Snapshot history is intentionally simple for a small inventory example. For a large source, copying all rows on every edit makes the history expensive even when rendering is virtualized. A scalable application-owned alternative records changed cells and their previous values by stable row ID. RevoGrid Pro’s packaged history is another option, discussed below.

## 6. Save inventory changes and track what is actually saved

An accepted edit is not necessarily a saved edit.

The demo tracks a separate saved snapshot. “Unsaved changes” means the current inventory differs from that snapshot, not merely that someone has edited a cell at some point.

That distinction matters after Undo. Undoing back to the saved values makes the editor clean again. Undoing away from a newly saved state makes it dirty.

For a tutorial that works without a backend, **Save locally** writes the committed snapshot to local storage:

```ts
const submitted = history.snapshot();

try {
  window.localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ version: 1, rows: submitted }),
  );

  history.markSaved(submitted);
  setNotice('Saved in this browser. Reload this page to check it.');
} catch {
  setError('Saving failed. Your unsaved changes and undo history are still available.');
}
```

The full component also reloads and validates saved data. It restores only editable inventory fields, not arbitrary product identifiers or names from storage. Undo history starts fresh after a page reload.

**Press Enter to commit an open cell editor before using the toolbar.** This example deliberately uses explicit edit confirmation rather than treating unfinished text as saved data.

### Replace local storage with your API in production

Local saving makes the example self-contained. It is not a shared inventory service, a backup system, or a substitute for access control.

A production save should send the committed records using stable product IDs, validate them again on the server, check permissions, and apply your concurrency policy. A read-only column in the UI is not a server-side permission check.

Capture the exact submitted snapshot before starting the request. Only mark that snapshot as saved after a successful response. If the user makes another change while the request is running, that newer change must remain unsaved. When the server normalizes values or returns a new revision, reconcile the response explicitly.

Keep the draft and its undo history available after a failed request. A failure message should help the user retry or resolve a conflict, not discard the work they were trying to save.

## When RevoGrid Pro makes more sense

This Core example keeps the mechanics visible. That is useful while learning the integration or implementing a deliberately small editor.

As the spreadsheet grows, the question changes: which interaction features do you want your team to maintain?

[RevoGrid Pro](/pro/) provides packaged capabilities including `HistoryPlugin`, validation features such as `CellValidatePlugin`, structured clipboard workflows, and additional Excel-oriented functionality. Your application still defines inventory rules, permissions, and persistence.

The existing [Excel-style spreadsheet demo](https://example.rv-grid.com/excel/) demonstrates a broader Pro workbench. Its [React source](https://github.com/revolist/revogrid-demos/blob/main/pro-excel/src/excel.react.tsx) shows `EventManagerPlugin`, `HistoryPlugin`, and `CellValidatePlugin` composed with the spreadsheet UI. That workbench is a different example from the small inventory editor in this article.

When adopting that Pro approach, replace the custom commit interception and history layer with the documented plugin workflow. Do not add a second independent history stack and assume both will stay synchronized.

Start with [the Pro overview](/pro/) and [current licensing options](/pricing) when your requirements extend beyond this tutorial.

## Check these behaviors before shipping

A spreadsheet editor is not finished just because the first valid paste works.

| Test | Expected behavior in this example |
| --- | --- |
| Enter `0` as Quantity | Accepted; zero is not treated as missing |
| Enter a negative quantity or a price with three decimal places | Rejected with an explanation |
| Paste a fitting block with one invalid editable value | None of the submitted range changes are committed |
| Paste a valid block, then click Undo once | The entire committed block is restored |
| Undo, then make a different valid edit | The old redo branch is cleared |
| Undo back to the saved snapshot | The unsaved indicator clears |
| Save, then reload | Saved inventory returns; old undo history does not |
| Attempt to save when browser storage is unavailable | The draft remains available and an error is shown |

Test keyboard navigation, open-editor behavior, clipboard permissions, and the page’s actual layout in your target browsers as well. The included logic tests verify the model and history rules; they do not replace a browser-level integration test.

For a production inventory workflow, add explicit tests for oversized pastes, pasted headers, localized numbers, permission failures, save conflicts, and any sorting or filtering you enable.

<CommercialFaq id="react-inventory-faq" />

## Build the editing workflow your users actually need

An Excel-like table in React does not have to recreate an entire workbook application. For an inventory screen, the useful part is often much smaller: edit familiar rows, paste several updates, understand a rejected value, undo a mistake, and save deliberately.
