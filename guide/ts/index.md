---
title: TypeScript Data Grid
description: Use RevoGrid as a TypeScript data grid with typed row models, reusable column definitions, public instance methods, and framework-agnostic APIs.
head:
  - - meta
    - name: keywords
      content: TypeScript data grid, typed grid columns, RevoGrid TypeScript, web component TypeScript grid
---

# TypeScript Data Grid

RevoGrid is built in TypeScript and exposes typed APIs for columns, events, methods, plugins, and framework wrappers. If your app is already using TypeScript, you can treat the grid as a typed UI boundary rather than a loosely typed widget.

## What TypeScript gives you in RevoGrid

- typed row models for `source`
- typed column configuration with reusable `columnTypes`
- typed event payloads for editing, filtering, focus, and source updates
- typed instance methods such as `setDataAt`, `getVisibleSource`, and `getSelectedRange`

## Minimal typed setup

```ts
interface PersonRow {
  id: number;
  name: string;
  email: string;
}

const grid = document.querySelector('revo-grid');

const columns = [
  { prop: 'id', name: 'ID', readonly: true },
  { prop: 'name', name: 'Name' },
  { prop: 'email', name: 'Email' },
];

const source: PersonRow[] = [
  { id: 1, name: 'Ada Lovelace', email: 'ada@example.com' },
  { id: 2, name: 'Grace Hopper', email: 'grace@example.com' },
];

grid!.columns = columns;
grid!.source = source;
```

## Good TypeScript patterns

- define a dedicated row interface for each grid
- keep `prop` values aligned with actual row keys
- extract shared `columnTypes` for repeated formatting and editor rules
- type your event handlers when you need to inspect `detail`

## Where to go next

- [Advanced Types](/guide/types/README)
- [Programmatic Grid Control](/guide/programmatic-control)
- [Advanced Configuration](/guide/advanced-configuration)
- [API Reference](/guide/api/revoGrid)
