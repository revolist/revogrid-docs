---
title: Data Grid Column Configuration
description: Setup Column Options for your Data Grid. Browse all Column Properties used to configure Columns and Column Groups. Lists properties, types and defaults. Download RevoGrid today - The best JavaScript Table & JavaScript Data Grid in the world.
head:
  - - meta
    - name: keywords
      content: RevoGrid, column, column options, column properties, column types, column defaults, column size, column width, column min size, column max size
---

# Column Configuration in Data Grid
[<Badge type="tip">Interface: ColumnRegular</Badge>](../types/Interface.ColumnRegular)

<!--@include: ../parts/column.md-->

```typescript
const columns: ColumnRegular[] = [
  { prop: 'id', name: 'ID' },
  { prop: 'name', name: 'Name' },
  { prop: 'age', name: 'Age' },
  { prop: 'email', name: 'Email' },
];
```

:::tip
Check [Interface: ColumnRegular](../types/Interface.ColumnRegular) for more information.
:::

To set the size of a column in RevoGrid, you can use the `size`, `minSize`, and `maxSize` properties within your column definition. These properties allow you to control the width of each column, ensuring that your grid is displayed exactly as you need it.

Here’s how you can set the size for a column:

## Column Size

You can specify a fixed size for a column using the `size` property. This value is the width of the column in pixels.

```typescript
const columns = [
  { prop: 'id', name: 'ID', size: 100 },       // Column width is set to 100px
  { prop: 'name', name: 'Name', size: 150 },   // Column width is set to 150px
  { prop: 'age', name: 'Age', size: 80 },      // Column width is set to 80px
];
```

### Example: Column Sizes

Here’s a full example of how you might set up your columns in a RevoGrid with specific sizes:

```typescript

<!--@include: ../../demo/js/js.column.size.ts-->

```

In this example:

- The `ID` column has a fixed width of 100px.
- The `Name` column has a base width of 150px.
- The `Age` column has a base width of 80px.


<!--@include: ./_column.pro.md-->