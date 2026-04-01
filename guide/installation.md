---
title: RevoGrid Installation
description: Install RevoGrid with npm, pnpm, yarn, bun, or a CDN, then register the Web Components loader for JavaScript or TypeScript projects.
head:
  - - meta
    - name: keywords
      content: RevoGrid installation, npm data grid, JavaScript web component grid, TypeScript grid install, CDN data grid
---

# RevoGrid Installation

You can use RevoGrid in three common ways:

- package manager installation for app projects
- direct CDN usage for prototypes or no-build pages
- framework wrappers for React, Angular, Vue, and Svelte

If you are not sure where to start, use the package-manager flow and register the custom elements loader once in your application entrypoint.

<!--@include: ./parts/_framework.md-->

## Install from a package manager

Install the core package:

::: code-group

```npm
npm i @revolist/revogrid
```

```pnpm
pnpm add @revolist/revogrid
```

```yarn
yarn add @revolist/revogrid
```

```bun
bun add @revolist/revogrid
```
:::

## Register the Web Components loader

RevoGrid ships as Web Components. Register them once before rendering any grid:

```ts
import { defineCustomElements } from '@revolist/revogrid/loader';

defineCustomElements();
```

This is the standard entrypoint for JavaScript and TypeScript applications. If you are using a framework wrapper, its own installation guide will show the package to install and the wrapper-specific setup.

## Minimal JavaScript or TypeScript setup

Once the loader is registered, render the grid and assign data:

```ts
const grid = document.querySelector('revo-grid');

grid.columns = [
  { prop: 'name', name: 'Name' },
  { prop: 'email', name: 'Email' },
];

grid.source = [
  { name: 'Ada Lovelace', email: 'ada@example.com' },
  { name: 'Grace Hopper', email: 'grace@example.com' },
];
```

## No-build integration

For a quick proof of concept, load the grid directly from a CDN.

### Script tag

```html
<script src="https://unpkg.com/@revolist/revogrid@latest/dist/revo-grid/revo-grid.js"></script>
```

### ES modules

```html
<script type="module">
  import { applyPolyfills, defineCustomElements } from 'https://unpkg.com/@revolist/revogrid@latest/loader';

  applyPolyfills().then(() => {
    defineCustomElements();
  });
</script>
```

Use the module version when you want a more explicit initialization flow or need compatibility support through `applyPolyfills`.

## Which package should you install?

- Core JavaScript/TypeScript: `@revolist/revogrid`
- React wrapper: start at [React Data Grid](/guide/react/)
- Angular wrapper: start at [Angular Data Grid](/guide/angular/)
- Vue 3 wrapper: start at [Vue 3 Data Grid](/guide/vue3/)
- Svelte wrapper: start at [Svelte Data Grid](/guide/svelte/)

## Common next steps

- [Quick Start](/guide/): first grid in plain JavaScript.
- [TypeScript Data Grid](/guide/ts/): typed columns and data models.
- [Standalone and ES Modules](/guide/standalone): framework-free module usage.
- [SSR](/guide/ssr): when the browser-only runtime affects your app shell.
