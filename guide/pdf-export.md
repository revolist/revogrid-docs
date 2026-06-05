---
title: RevoGrid PDF Export
description: Export visible RevoGrid rows and columns to PDF with the lightweight @revolist/revogrid-pdf-export plugin powered by pdfmake.
head:
  - - meta
    - name: keywords
      content: RevoGrid PDF export, data grid PDF export, JavaScript data grid PDF, pdfmake data table, export grid to PDF, browser PDF export
---

# RevoGrid PDF Export

Export [RevoGrid](https://rv-grid.com/) data to clean, shareable PDF files with a small browser-side plugin powered by [pdfmake](https://pdfmake.github.io/docs/).

[`@revolist/revogrid-pdf-export`](https://www.npmjs.com/package/@revolist/revogrid-pdf-export) is a lightweight add-on package for teams that need a practical PDF export button without building a full reporting pipeline. It reads visible RevoGrid data, preserves column headers, respects trimmed or filtered rows, and creates a simple [pdfmake document definition](https://pdfmake.github.io/docs/0.1/document-definition-object/) that can be downloaded, previewed, uploaded, or customized.

::: tip Add-on package
PDF export is delivered as a separate package. Core RevoGrid includes CSV export through the built-in export plugin. Excel-focused export workflows are available in RevoGrid Pro.
:::

## Why use it

- Lightweight client-side PDF export for RevoGrid.
- Works through the standard [RevoGrid plugin API](/guide/plugin/).
- Exports visible rows and visible columns.
- Supports grouped column headers.
- Lets you download a PDF, return a browser [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob), or access the pdfmake document definition.
- Provides a cancelable `beforepdfexport` hook for customization.
- Keeps the first version focused: fast to adopt, easy to reason about, and simple to extend.

## Install

```sh
npm install @revolist/revogrid-pdf-export
```

The package expects RevoGrid to be present in your app. Install RevoGrid separately if your project does not already use it:

```sh
npm install @revolist/revogrid
```

## Quick start

Register `ExportPdfPlugin` in the grid plugin list, then retrieve the plugin instance with `getPlugins()`.

```ts
import { ExportPdfPlugin } from '@revolist/revogrid-pdf-export';

const grid = document.querySelector('revo-grid');

if (grid) {
  grid.plugins = [ExportPdfPlugin];

  const plugins = await grid.getPlugins();
  const pdf = plugins.find(plugin => plugin instanceof ExportPdfPlugin);

  await pdf?.exportPdf({
    filename: 'orders.pdf',
    title: 'Orders',
  });
}
```

## API

### `exportPdf(options?)`

Creates and downloads a PDF file.

```ts
await pdf.exportPdf({
  filename: 'orders.pdf',
  title: 'Orders Report',
});
```

### `exportBlob(options?)`

Creates a PDF and returns it as a browser `Blob`. Use this when you want to upload, preview, store, or handle the file yourself.

```ts
const blob = await pdf.exportBlob({
  title: 'Orders Report',
});
```

### `getDocumentDefinition(options?)`

Returns the [pdfmake document definition](https://pdfmake.github.io/docs/0.1/document-definition-object/) before a PDF is created. Use this when you want full control over the final pdfmake rendering step.

```ts
const definition = await pdf.getDocumentDefinition({
  pageOrientation: 'portrait',
});
```

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `filename` | `string` | `revogrid-export.pdf` | Download filename. `.pdf` is added automatically when omitted. |
| `title` | `string` | `RevoGrid Export` | Title shown above the exported table. |
| `pageOrientation` | `'portrait' \| 'landscape'` | `landscape` | PDF page orientation. |
| `includeColumnHeaders` | `boolean` | `true` | Includes the column header row. |
| `includeGroupHeaders` | `boolean` | `true` | Includes grouped column header rows when present. |
| `maxRows` | `number` | unlimited | Limits exported data rows. |
| `tableLayout` | `string` | `lightHorizontalLines` | [pdfmake table layout](https://pdfmake.github.io/docs/0.1/document-definition-object/tables/) name. |

## Customize the PDF

The plugin emits a cancelable `beforepdfexport` event with `{ data, documentDefinition, options }`.

Use it to adjust the pdfmake document definition, add metadata, change styles, add headers or footers, or stop the export.

```ts
grid.addEventListener('beforepdfexport', event => {
  event.detail.documentDefinition.info = {
    title: 'Orders Report',
    subject: 'Monthly order export',
  };

  event.detail.documentDefinition.footer = currentPage => ({
    text: `Page ${currentPage}`,
    alignment: 'center',
    fontSize: 8,
  });
});
```

Call `event.preventDefault()` to cancel the export.

## What gets exported

The plugin focuses on data, not pixel-perfect rendering. It exports:

- visible row data
- visible columns
- column names
- grouped column headers
- filtered or trimmed grid state through RevoGrid's visible source APIs

It does not attempt to reproduce custom cell renderers, DOM styling, images, row headers, pinned layout visuals, or editor UI. This keeps the PDF output small and predictable.

## Framework usage

The plugin is framework-agnostic. Use it anywhere you can pass RevoGrid plugins:

- [Vanilla JavaScript / TypeScript](/guide/ts/)
- [React](/guide/react/)
- [Vue 3](/guide/vue3/)
- [Angular](/guide/angular/)
- [Svelte](/guide/svelte/)

## When to use each export option

| Requirement | Recommended option |
| --- | --- |
| Simple CSV data export | [Core CSV export](/guide/export.plugin) |
| Browser-side PDF table export | `@revolist/revogrid-pdf-export` |
| Excel workbook export/import | [RevoGrid Pro Excel export](/guide/data-grid-export-excel) |
| Fully custom report layout | Use `getDocumentDefinition()` and customize pdfmake output |

## Links

- [npm package](https://www.npmjs.com/package/@revolist/revogrid-pdf-export)
- [GitHub repository](https://github.com/revolist/revogrid-pdf-export)
- [pdfmake documentation](https://pdfmake.github.io/docs/)
- [RevoGrid plugin guide](/guide/plugin/)
- [Core CSV export](/guide/export.plugin)
- [RevoGrid Pro Excel export](/guide/data-grid-export-excel)
