---
title: React Data Grid
description: Learn how to use RevoGrid in React with typed props, refs to the underlying grid instance, custom renderers, custom editors, and event handling.
head:
  - - meta
    - name: keywords
      content: React data grid, RevoGrid React, React grid instance methods, React virtual data grid, React editable grid
---

# React Data Grid

RevoGrid gives React applications a fast virtualized data grid without changing the core grid behavior. You pass `columns` and `source` as props, then use a ref when you need to call instance methods such as `setCellEdit`, `scrollToRow`, or `getVisibleSource`.

<!--@include: ../../demo/react/react-datagrid.md-->

<!--@include: ./_install.md-->

## Minimal setup

```tsx
<!--@include: ../../demo/react/react-datagrid.tsx-->
```

## Working with `columns` and `source`

In React, the most maintainable pattern is:

- keep `columns` stable unless configuration really changed
- update `source` from application state
- use grid methods for imperative actions instead of reaching into internal DOM

## Accessing grid instance methods

Use a ref to the wrapped grid element, then call the public API on the underlying instance:

```tsx
import { useRef } from 'react';

function App() {
  const gridRef = useRef<any>(null);

  const focusFirstPriceCell = async () => {
    await gridRef.current?.scrollToRow?.(0);
    await gridRef.current?.setCellEdit?.(0, 'price');
  };

  return (
    <>
      <button onClick={focusFirstPriceCell}>Edit first price</button>
      <RevoGrid ref={gridRef} columns={columns} source={source} />
    </>
  );
}
```

## Custom renderers and editors

Use these pages for React-specific customization:

- [React Cell Template](/guide/react/renderer)
- [React Cell Editor](/guide/react/editor)

## Event handling

React apps usually listen for the same grid events as plain JavaScript:

- `beforeedit`
- `afteredit`
- `beforefilterapply`
- `beforesourceset`

If you need to shape event-driven workflows, start with [Event Patterns and Lifecycles](/guide/events-guide).

## SSR and client-only behavior

RevoGrid depends on browser APIs, so server-rendered React environments should load it on the client side. If your app uses Next.js or another SSR framework, render the grid in a client component or dynamically load it on the client.

## Related guides

- [Programmatic Grid Control](/guide/programmatic-control)
- [Advanced Configuration](/guide/advanced-configuration)
- [Grid Performance and Virtualization](/guide/performance)

<!--@include: ./_examples.md-->
