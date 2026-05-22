---
title: RevoGrid Advanced Configuration
description: Configure advanced RevoGrid props such as columnTypes, rowDefinitions, trimmedRows, additionalData, registerVNode, getProviders, and custom plugin hooks.
head:
  - - meta
    - name: keywords
      content: RevoGrid advanced configuration, columnTypes, rowDefinitions, trimmedRows, additionalData, registerVNode, getProviders
---

# RevoGrid Advanced Configuration

This guide covers public props and methods that are powerful, but usually only needed once your grid becomes part of a larger application architecture.

## `columnTypes`

`columnTypes` lets you define reusable column presets and reference them by name:

```ts
grid.columnTypes = {
  readonlyText: {
    readonly: true,
    size: 180,
  },
};

grid.columns = [
  { prop: 'name', name: 'Name', columnType: 'readonlyText' },
];
```

Use this when many columns share the same editor, renderer, read-only rule, or sizing rules.

More realistic example:

```ts
grid.columnTypes = {
  money: {
    size: 140,
    readonly: false,
    cellProperties: () => ({
      class: {
        'money-cell': true,
      },
    }),
  },
  lockedMeta: {
    readonly: true,
    size: 180,
  },
};

grid.columns = [
  { prop: 'id', name: 'ID', columnType: 'lockedMeta' },
  { prop: 'total', name: 'Total', columnType: 'money' },
];
```

## `rowDefinitions`

`rowDefinitions` applies row-level configuration such as custom row size.

```ts
grid.rowDefinitions = [
  { type: 'rgRow', index: 0, size: 48 },
];
```

This is the right tool for row-specific layout changes instead of trying to force layout through cell templates alone.

Example with multiple row regions:

```ts
grid.rowDefinitions = [
  { type: 'rowPinStart', index: 0, size: 56 },
  { type: 'rgRow', index: 10, size: 44 },
];
```

## `trimmedRows` and `addTrimmed`

`trimmedRows` hides source rows from the main viewport by physical index:

```ts
grid.trimmedRows = {
  2: true,
  4: true,
};
```

For dynamic workflows, use:

```ts
await grid.addTrimmed({ 10: true, 11: true }, 'external');
```

Filtering uses trimming internally, but trimming is also useful for external rule-based visibility.

Typical use cases:

- hide archived rows without removing them from the source
- keep a temporary working subset visible
- combine application rules with filter-driven row visibility

## `additionalData`

`additionalData` passes contextual data into renderers, editors, and plugins.

```ts
grid.additionalData = {
  currentUserRole: 'manager',
  currency: 'EUR',
};
```

Use it for integration context, helper services, or framework-level references. Avoid turning it into a second source of truth for row data.

In renderers or editors, `additionalData` is often used for:

- current locale or currency
- permission flags
- external services
- framework context passed into custom templates

## `registerVNode`

`registerVNode` is for advanced cases where you want to register extra virtual nodes inside the grid, often from plugins.

```ts
grid.registerVNode = [
  config => h('div', { class: 'my-extra-panel' }, 'Extra UI'),
];
```

This is not needed for normal application usage, but it is important for plugin-style extensions.

If the extra UI depends on application state, call `refreshExtraElements()` after updating the state so the registered VNodes can re-render.

## `getProviders()`

```ts
const providers = await grid.getProviders();
```

Providers expose access to grid services such as:

- data
- dimension
- selection
- column
- viewport
- plugin service

This is one of the key integration surfaces for plugin-oriented work.

Example:

```ts
const providers = await grid.getProviders();

const visibleMainRows = providers?.data.stores.rgRow.store.get('items');
console.log(visibleMainRows);
```

## `getPlugins()`

```ts
const plugins = await grid.getPlugins();
```

Use this when you need to inspect or coordinate active plugin instances from application code.

Example:

```ts
const plugins = await grid.getPlugins();

plugins.forEach(plugin => {
  console.log(plugin.constructor.name);
});
```

## Other advanced props worth knowing

### `canFocus`

Disable focus rendering when the grid is used as a read-only viewer:

```ts
grid.canFocus = false;
```

### `useClipboard`

Disable built-in clipboard behavior when your app needs to fully own copy/paste:

```ts
grid.useClipboard = false;
```

### `stretch`

Control how columns fill remaining width:

```ts
grid.stretch = 'last';
```

### `accessible`

Keep accessibility enabled unless you have a very specific reason to disable it:

```ts
grid.accessible = true;
```

## Related guides

- [Programmatic Grid Control](/guide/programmatic-control)
- [Grid Performance and Virtualization](/guide/performance)
- [Plugin Guide](/guide/plugin/)
- [API: RevoGrid](/guide/api/revoGrid)
