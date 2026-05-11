Tree-like rows do not require Pro when your application only needs a visual hierarchy. The free/core approach is to flatten parent-child records into display order, add a `level` field, and render indentation in a cell template.

This keeps RevoGrid simple: the grid receives a normal `source` array, virtualization still works, and your application owns the hierarchy transformation.

## Tree model

Start with records that have an ID and a parent ID:

```ts
const inputData = [
  { id: 4, parentId: 0, name: 'Antoni father for 2' },
  { id: 5, parentId: 4, name: 'Odin' },
  { id: 6, parentId: 4, name: 'John' },
  { id: 1, parentId: 0, name: 'Mary mother for 2' },
  { id: 2, parentId: 1, name: 'Howard has also 2' },
];
```

Convert that data into a flat display list before assigning it to the grid:

```ts
function buildTreeData(rows: typeof inputData, rootParentId = 0) {
  const childrenByParent = new Map<number, typeof inputData>();

  for (const row of rows) {
    const children = childrenByParent.get(row.parentId) ?? [];
    children.push(row);
    childrenByParent.set(row.parentId, children);
  }

  const result: Array<(typeof inputData)[number] & { level: number }> = [];

  function appendChildren(parentId: number, level = 0) {
    for (const child of childrenByParent.get(parentId) ?? []) {
      result.push({ ...child, level });
      appendChildren(child.id, level + 1);
    }
  }

  appendChildren(rootParentId);
  return result;
}
```

## Indented cell template

The core demo uses a normal cell template to show hierarchy depth:

```ts
const columns = [
  {
    prop: 'name',
    name: 'Tree',
    size: 300,
    cellTemplate(h, { value, model }) {
      return h(
        'div',
        {
          style: {
            marginLeft: `${(model?.level ?? 0) * 30}px`,
          },
        },
        value || '',
      );
    },
  },
  {
    prop: 'level',
    readonly: true,
  },
];
```

Use the core approach when the hierarchy is read-only or mostly decorative: category outlines, simple nested lists, document sections, or a tree table where your app handles all expand/collapse logic outside the grid.

## Core limits

The free/core pattern is intentionally lightweight. It does not add built-in expand/collapse controls, automatic parent-child visibility, tree-aware drag-and-drop, sticky parent rows, or parent/descendant row selection behavior. Those behaviors belong in the Pro Tree Data plugin.
