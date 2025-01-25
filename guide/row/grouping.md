---
title: Row Grouping in Data Grid
description: Learn how to configure row grouping in RevoGrid using TypeScript. Easily group rows based on specific properties for better data organization and visualization.
head:
  - - meta
    - name: keywords
      content: RevoGrid, row grouping, data grid grouping, JavaScript table grouping, TypeScript grid grouping
---

<!--@include: ../../demo/js/js.grouping.md-->


## Grouping Configuration

The grouping option takes an object with the props property, which specifies the columns to group by. In the example above, rows are grouped by the projectName property.


```typescript

<!--@include: ../../demo/js/js.grouping.ts-->

```

### Example Grouping Output

With the provided configuration:
- Rows with projectName: 'yes' are grouped together.
- Rows with projectName: 'no' are grouped separately.

## Dynamic Updates

Grouping can be updated dynamically by modifying the grouping property of the grid. For example:
```typescript
grid.grouping = { props: ['newGroupingProperty'] };
```

For more details, check the [GroupingOptions interface](../types/TypeAlias.GroupingOptions).
