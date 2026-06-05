---
title: Data Grid Export
description: Export data from RevoGrid to CSV in the core package, use RevoGrid Pro for richer Excel export workflows, or add the PDF export package for browser-side PDF output.
head:
  - - meta
    - name: keywords
      content: RevoGrid, data grid, virtual grid, virtual rows, virtual columns,angular data grid, grid performance, large data sets, customizable grid, data grid export, data grid export excel, data grid export csv
---

# Export Data from your Data Grid to file

With our data grid you can export your data to file.

There are three common ways to export data:
- [Export to CSV file](#Export-to-CSV-file)
- [Export to Excel file with RevoGrid Pro](./data-grid-export-excel.md)
- [Export to PDF file](./pdf-export.md)


## Export to CSV file

To export data to CSV file you need to use `exporting` option.

- Setup `exporting` option on `revo-grid` to `true`:

``` tsx
<revo-grid exporting="true"/>
``` 

- Access export plugin from plugin list:

``` js
const grid = document.querySelector('revo-grid');
grid.getPlugins().then(plugins => {
 plugins.forEach(p => {
   if (p.exportFile) {
       const exportPlugin = p;
       exportPlugin.exportFile({  filename: 'new file' });
   }
  })
});
``` 

## Public methods

There are next methods available in export plugin and `options` object as `FormatterOptions`:

- `exportFile(options)` - download file;
- `exportBlob(options)` - export Blob object;
- `exportString(options)` - get data string.

## Options

General options are available for export:

```ts
type FormatterOptions = {
  mime: string; // text/csv
  encoding: string;
  fileKind: string; // csv
  bom: boolean;
  columnDelimiter: string; // ','
  rowDelimiter: string; // '\r\n'
  filename?: string;
}
```

:::tip
For the latest information it's recommended to read [export-plugin](https://github.com/revolist/revogrid/blob/master/src/plugins/export/export.plugin.ts) file for better understanding of parameters and options.
:::

## Related Pro features

Need richer spreadsheet export workflows? [RevoGrid Pro Excel export](./data-grid-export-excel.md) creates workbook files that can preserve the visible grid layout, including column order, hidden columns, frozen panes, styles, merged cells, and formulas. Start with [RevoGrid Pro](/pro/) or compare plans on [Feature Comparison](/pro/feature-table).

## Related PDF export package

Need a lightweight browser-side PDF export button? Use [`@revolist/revogrid-pdf-export`](https://www.npmjs.com/package/@revolist/revogrid-pdf-export), a RevoGrid plugin powered by [pdfmake](https://pdfmake.github.io/docs/). It exports visible rows and columns into a simple PDF table and supports grouped column headers. See [PDF Export](./pdf-export.md).
