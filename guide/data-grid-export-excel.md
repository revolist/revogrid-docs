---
title: Export Excel
description: Export RevoGrid Pro data to Excel workbooks with visible grid layout, styles, frozen panes, merged cells, formulas, and workbook options.
head:
  - - meta
    - name: keywords
      content: RevoGrid Excel export, JavaScript data grid Excel export, export grid to XLSX, Excel data table, spreadsheet export, frozen columns Excel, merged cells Excel, formulas Excel export, Pro data grid
---

# Export Excel

Export production grid views to Excel with [RevoGrid Pro](/pro/). The Pro Excel export is built for teams that need more than a raw data dump: it creates workbook files that keep the structure and feel of the grid your users already work with.

Use Excel export when a report needs to leave the browser and still feel like the original table - column order, visible columns, frozen panes, styling, merged cells, and formulas can travel with the exported workbook.

::: tip Pro feature
Excel export and import are part of [RevoGrid Pro](/pro/). Core RevoGrid includes [CSV export](/guide/export.plugin), and browser-side PDF export is available through the [`@revolist/revogrid-pdf-export`](/guide/pdf-export) add-on.
:::

## Why Use Pro Excel Export

- Export `.xlsx` workbooks directly from the grid experience.
- Preserve the visible grid layout so exported files match what users see.
- Keep column order and hidden column state in the workbook output.
- Carry pinned or frozen layout into Excel frozen panes.
- Export styled cells for report-ready workbooks.
- Support merged cells and spanned report layouts.
- Keep formula-driven data useful outside the application.
- Use workbook options for file name, sheet name, compression, and format.
- Pair export with Pro import workflows for spreadsheet round trips.

## What Gets Preserved

RevoGrid Pro Excel export is designed around the rendered grid state, not only the original source array.

| Grid capability | Excel export behavior |
| --- | --- |
| Column order | Exports columns in the current visible order. |
| Column visibility | Hidden columns stay out of the exported view. |
| Frozen columns and rows | Maps pinned grid regions to Excel-style frozen panes where supported. |
| Cell styles | Preserves table styling and formatting for a closer visual match. |
| Grouped headers | Keeps structured header layout useful in the workbook. |
| Merged cells | Exports merged and spanned regions from Pro merge workflows. |
| Formulas | Works with the Pro formula pipeline so calculated sheets remain useful after export. |

For the related grid features, see [Column Pinning](/guide/column/pin), [Row Pinning](/guide/row/pin), [Cell Merge](/guide/cell/merge), and [Excel Formulas](/guide/cell/formula).

## Quick Example

The exact plugin registration depends on your Pro package setup, but the export flow is intentionally small: enable the Pro Excel export plugin, then send an export configuration with workbook and sheet options.

```ts
const exportConfig: ExportExcelEvent = {
  sheetName: 'Property Data',
  workbookName: 'Properties.xlsx',
  writingOptions: {
    type: 'file',
    bookType: 'xlsx',
    compression: true,
  },
};
```

Use your Pro setup to pass this configuration to `ExportExcelPlugin`. The plugin handles workbook creation from the current grid state.

## Workbook Formats

The Pro Excel export workflow targets common spreadsheet formats used by Excel-compatible tools. The Pro feature catalog includes `xlsx`, `xlsm`, `xlsb`, `xls`, and related workbook formats.

| Option | Use case |
| --- | --- |
| `xlsx` | Default modern Excel workbook format. |
| `xlsm` | Macro-enabled workbook workflows. |
| `xlsb` | Binary workbook workflows where supported. |
| `xls` | Legacy Excel compatibility. |

Implementation dependencies are versioned with RevoGrid Pro. See the [RevoGrid Pro third-party policy](/pro/policies/3rdparty) for writer package and licensing notes.

## Writing Options

`writingOptions` controls how the workbook is generated. Individual writer options can vary by Pro version, so use the TypeScript types shipped with your installed Pro package as the final source of truth.

| Option | Description |
| --- | --- |
| `type` | Output mode used by the workbook writer. |
| `bookType` | Workbook format such as `xlsx`, `xlsm`, `xlsb`, or `xls`. |
| `compression` | Enables compression for supported workbook formats. |
| `ignoreEC` | Suppresses compatible spreadsheet warnings such as number-stored-as-text checks when supported. |

```ts
const exportConfig: ExportExcelEvent = {
  sheetName: 'Q4 Revenue',
  workbookName: 'q4-revenue.xlsx',
  writingOptions: {
    type: 'file',
    bookType: 'xlsx',
    compression: true,
    ignoreEC: true,
  },
};
```

## Best Use Cases

Excel export is strongest when users expect the exported file to become a working spreadsheet, not just an archive.

- Financial models with formulas and pinned summary regions.
- Operations dashboards where teams sort, filter, and share workbook snapshots.
- Reporting tables with merged headers, grouped columns, and styled totals.
- Compliance workflows that need offline Excel files for review.
- Internal tools where users already rely on Excel for analysis and handoff.

## Choosing An Export Path

| Requirement | Recommended option |
| --- | --- |
| Raw data download | [Core CSV export](/guide/export.plugin) |
| Excel workbook with layout, styles, formulas, merge, and freeze support | [RevoGrid Pro Excel export](/pro/) |
| Shareable table PDF from the browser | [PDF export add-on](/guide/pdf-export) |
| Advanced spreadsheet-like editing before export | [RevoGrid Pro spreadsheet features](/pro/) |

## Related Pro Features

- [RevoGrid Pro](/pro/)
- [Pro feature comparison](/pro/feature-table)
- [Excel Formulas](/guide/cell/formula)
- [Cell Merge](/guide/cell/merge)
- [Column Pinning](/guide/column/pin)
- [Row Pinning](/guide/row/pin)
- [Pro third-party tools and libraries](/pro/policies/3rdparty)
