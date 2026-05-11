## Pro Tree Data

RevoGrid Pro adds a dedicated `TreeDataPlugin` for advanced data grid tree structures. It keeps the original `source` flat, computes hierarchy metadata internally, and renders tree controls in the column marked with `tree: true`.

<TreeDataProDemo />

::: info RevoGrid Pro
Use the Pro plugin when hierarchy is not just indentation: users need expand/collapse controls, persistent expansion state, filtering and sorting with hierarchy awareness, row selection across descendants, drag-and-drop reparenting, or sticky parent rows while scrolling long branches.
:::

### Pro data model

The Pro model also starts from stable IDs and parent IDs:

```ts
type TeamRow = {
  id: string;
  parentId: string | null;
  name: string;
  role: string;
  budget: number;
};

const source: TeamRow[] = [
  { id: 'eng', parentId: null, name: 'Engineering', role: 'Department', budget: 850000 },
  { id: 'platform', parentId: 'eng', name: 'Platform', role: 'Team', budget: 320000 },
  { id: 'api', parentId: 'platform', name: 'API', role: 'Squad', budget: 140000 },
  { id: 'design', parentId: null, name: 'Design', role: 'Department', budget: 260000 },
];
```

Unlike the core example, you do not add `level` yourself. The plugin derives level, visibility, expanded state, and child metadata from the tree config.

### Pro column and plugins

Mark one hierarchy column with `tree: true`, register `TreeDataPlugin`, and pass the `tree` config:

```ts
import {
  TreeDataPlugin,
  RowOrderPlugin,
  RowSelectPlugin,
  StickyCellsPlugin,
  TREE_EXPAND_ALL_EVENT,
  TREE_COLLAPSE_ALL_EVENT,
} from '@revolist/revogrid-pro';

const columns = [
  {
    prop: 'name',
    name: 'Team',
    size: 300,
    tree: true,
    sortable: true,
    rowSelect: true,
    rowDrag: true,
  },
  { prop: 'role', name: 'Role', size: 160 },
  { prop: 'budget', name: 'Budget', size: 140 },
];

const plugins = [
  TreeDataPlugin,
  RowOrderPlugin,
  RowSelectPlugin,
  StickyCellsPlugin,
];

const tree = {
  idField: 'id',
  parentIdField: 'parentId',
  rootParentId: null,
  expandedRowIds: new Set(['eng']),
  stickyParents: true,
};
```

Framework wrappers pass these values as props or bindings. Plain TypeScript assigns them to the `revo-grid` element.

### Expand and collapse controls

The Pro plugin exposes events for toolbar buttons and external controls:

```ts
grid.dispatchEvent(new CustomEvent(TREE_EXPAND_ALL_EVENT));
grid.dispatchEvent(new CustomEvent(TREE_COLLAPSE_ALL_EVENT));
```

Use `expandAll: true` when every branch should open on first render. Use `expandedRowIds` when you want controlled initial state or persisted expansion.

### Production guidance

- Keep IDs stable across refreshes so expanded state survives data updates.
- Use `parentId: null` or another explicit `rootParentId` consistently.
- Keep only one tree column active; use normal columns for the rest of the row data.
- Combine tree data with virtualization for large hierarchies instead of rendering nested DOM lists.
- Add `StickyCellsPlugin` only when sticky parent rows are useful for long branches.
- Reconcile drag-and-drop changes in your application store before saving to the backend.
- Prefer flat server payloads for large trees; they are simpler to page, diff, validate, and persist.

## Related guides

- [Advanced Tree Data guide](/guide/tree-data)
- [Row Ordering](/guide/row/order)
- [Row Selection](/guide/row/selection.pro)
- [Filtering](/guide/filters)
- [Grid Performance and Virtualization](/guide/performance)
