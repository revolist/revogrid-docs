---
title: RevoGrid State Persistence
description: Save and restore RevoGrid user state including column order, column width, pinned columns, sorting, filtering, selection, scroll position, layout presets, and Pro workspace state.
head:
  - - meta
    - name: keywords
      content: RevoGrid state persistence, grid state, save grid state, restore grid state, localStorage grid state, backend grid preferences, column order, column width, pinned columns, sort model, filter model, layout presets, workspace state
---

# RevoGrid State Persistence

Grid users expect their workspace to survive reloads, device switches, saved views, and product releases. Common state includes column order, widths, pinned columns, sorting, filters, selection, scroll position, grouping, pivot fields, Gantt preferences, and named layout presets.

RevoGrid keeps this practical: your application owns the persisted state, and RevoGrid exposes the props, methods, and events needed to collect and restore it. Instead of relying on one monolithic `getGridState()` object, persist the pieces your product actually supports.

## What to persist

Start with a small state object and extend it as users need more saved workspace behavior.

```ts
type PersistedFilterState = {
  collection: Record<
    string,
    {
      type:
        | 'empty'
        | 'notEmpty'
        | 'eq'
        ...;
      value: unknown;
    }
  >;
};

type PersistedGridState = {
  version: 1;
  schema: string;
  columnOrder: string[];
  columnWidths: Record<string, number>;
  pinnedColumns: {
    start: string[];
    end: string[];
  };
  sorting?: {
    columns?: {
      prop: string;
      order: 'asc' | 'desc';
    }[];
  };
  filter?: PersistedFilterState;
  selection?: {
    x: number;
    y: number;
    x1: number;
    y1: number;
  } | null;
  scroll?: {
    row?: number;
    columnProp?: string;
  };
  grouping?: unknown;
  pivot?: unknown;
  gantt?: unknown;
  preferences?: {
    density?: 'compact' | 'comfortable';
    theme?: string;
  };
  layoutPreset?: string;
};
```

Use stable column `prop` values as the durable identifiers. Avoid persisting virtual indexes as the primary state because indexes change when columns are reordered, pinned, hidden, filtered, or replaced.

## Save to localStorage

This example stores column order, sorting, filtering, selection, and scroll state. It keeps the shape app-owned so you can add product-specific preferences later.

:::preview #demo-state-persistence .rv-overview :path /demo/js/js.state-persistence.example
:::

:::: details <span class="source-label">Source code</span> <span class="external"> [Git](https://github.com/revolist/revogrid-docs/tree/main/demo/js/js.state-persistence.example.ts)</span>

::: code-group
<<< @/demo/js/js.state-persistence.example.ts#snippet
:::

::::

## Restore on page load

Restore structural state before assigning `columns`, then restore scroll and selection after the grid has rendered.

```ts
function applyPersistedColumns(columns, state) {
  if (!state) {
    return columns;
  }

  const order = new Map(
    (state.columnOrder ?? []).map((prop, index) => [prop, index]),
  );
  const sorting = new Map(
    (state.sorting?.columns ?? []).map(column => [
      String(column.prop),
      column.order,
    ]),
  );

  return [...columns]
    .map(column => ({
      ...column,
      size: state.columnWidths?.[String(column.prop)] ?? column.size,
      pin: getPersistedPin(column.prop, state),
      order: sorting.get(String(column.prop)),
    }))
    .sort((a, b) => {
      const left = order.get(String(a.prop)) ?? Number.MAX_SAFE_INTEGER;
      const right = order.get(String(b.prop)) ?? Number.MAX_SAFE_INTEGER;
      return left - right;
    });
}

function getPersistedPin(prop, state) {
  const key = String(prop);

  if (state.pinnedColumns?.start?.includes(key)) {
    return 'colPinStart';
  }

  if (state.pinnedColumns?.end?.includes(key)) {
    return 'colPinEnd';
  }

  return undefined;
}

async function restoreViewport(grid, state) {
  if (state?.scroll?.row !== undefined) {
    await grid.scrollToRow(state.scroll.row);
  }

  if (state?.scroll?.columnProp) {
    await grid.scrollToColumnProp(state.scroll.columnProp);
  }

  if (state?.selection) {
    await grid.setCellsFocus(
      { x: state.selection.x, y: state.selection.y },
      { x: state.selection.x1, y: state.selection.y1 },
    );
  }
}
```

For scroll restoration, prefer row ids or business cursors when your dataset changes often. Numeric row coordinates are useful for restoring a viewport in the same dataset, but they may point to different records after server refreshes, filtering, or row insertion.

## Save to a backend

Use the same state object for backend persistence. Debounce writes so resize, scroll, filtering, and drag operations do not create excessive requests.

```ts
let saveTimer = 0;
let pendingState = {};

function queueBackendState(partial) {
  pendingState = { ...pendingState, ...partial };

  window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(async () => {
    const body = {
      gridId: 'orders',
      state: {
        version: 1,
        schema: createSchemaKey(baseColumns),
        ...loadGridState(),
        ...pendingState,
      },
    };

    pendingState = {};

    await fetch('/api/grid-state/orders', {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    });
  }, 400);
}

grid.addEventListener('filterconfigchanged', event => {
  queueBackendState({ filter: event.detail });
});

grid.addEventListener('sortingconfigchanged', event => {
  queueBackendState({ sorting: event.detail });
});
```

Backend state should be scoped by user, tenant, product area, grid id, and layout preset. Keep row data and workspace state separate: row edits belong in your data model, while grid state belongs in user preferences.

## Handle schema changes

Persisted state lasts longer than one release. Version it, store a schema key, and ignore state for columns that no longer exist.

```ts
function createSchemaKey(columns) {
  return columns.map(column => String(column.prop)).sort().join('|');
}

function normalizeStateForColumns(state, columns) {
  if (!state) {
    return null;
  }

  const validProps = new Set(columns.map(column => String(column.prop)));

  return {
    ...state,
    schema: createSchemaKey(columns),
    columnOrder: (state.columnOrder ?? []).filter(prop => validProps.has(prop)),
    columnWidths: Object.fromEntries(
      Object.entries(state.columnWidths ?? {}).filter(([prop]) =>
        validProps.has(prop),
      ),
    ),
    pinnedColumns: {
      start: (state.pinnedColumns?.start ?? []).filter(prop =>
        validProps.has(prop),
      ),
      end: (state.pinnedColumns?.end ?? []).filter(prop =>
        validProps.has(prop),
      ),
    },
  };
}
```

New columns should fall back to your default column definitions. Removed columns should be dropped from persisted order, width, pinning, sorting, filtering, and presets.

## Version persisted state

Use a version number when state can outlive a release. Migrate old shapes at load time and save the new shape after a successful restore.

```ts
function migrateGridState(state) {
  if (!state) {
    return null;
  }

  if (state.version === 1) {
    return state;
  }

  if (state.version === undefined) {
    return {
      version: 1,
      schema: state.schema ?? '',
      columnOrder: state.columns ?? [],
      columnWidths: state.widths ?? {},
      pinnedColumns: {
        start: state.pinnedStart ?? [],
        end: state.pinnedEnd ?? [],
      },
      sorting: state.sorting,
      filter: state.filter,
    };
  }

  return null;
}
```

If migration fails, discard the saved state for that grid and load the default layout. A broken preference should not block users from opening the grid.

## Pro and advanced state

Persist advanced feature state the same way: keep the plugin or feature config in your application state, save the user-controlled parts, and restore them before rendering the grid.

| Feature | Persist |
| --- | --- |
| Row grouping | Grouping props, expanded groups, and user-selected grouping presets. |
| Tree data | Expanded row ids and hierarchy display preferences. |
| Pivot | Rows, columns, values, filters, aggregations, subtotals, grand totals, drill-down or expanded paths, and selected report preset. |
| Gantt | Timeline scale, visible date window, task columns, collapsed task groups, dependency visibility, resource filters, and scheduling preferences. |
| Layout presets | A named collection of columns, sorting, filters, plugin config, and product-specific preferences. |

Do not mix persisted workspace state with editable business data. For example, Gantt task dates, dependencies, and assignments usually belong in your project data API. The user's preferred timeline zoom or visible columns belong in grid state.

## Quick checklist

- Use stable column `prop` values.
- Persist only state your product can restore.
- Restore columns, pinning, filters, and sorting before viewport state.
- Restore scroll and selection after the grid is ready.
- Debounce backend saves.
- Version saved state and migrate or discard old shapes.
- Drop state for columns that no longer exist.
- Keep row data synchronization separate from workspace preferences.

## Related guides

- [Data Source Loading and Syncing](/guide/data-sync)
- [Column Ordering](/guide/column/order)
- [Column Pinning](/guide/column/pin)
- [Filtering](/guide/filters)
- [Data Grid Sorting](/guide/sorting)
- [Programmatic Grid Control](/guide/programmatic-control)
- [Understanding Viewports](/guide/viewports)
- [RevoGrid Pivot](/pivot/)
- [RevoGrid Gantt](/gantt/)
