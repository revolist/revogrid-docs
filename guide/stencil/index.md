---
title: Stencil Data Grid
description: Learn how to use Stencil Data Grid to build fast, scalable data applications with support for virtual rows and columns.
head:
  - - meta
    - name: keywords
      content: RevoGrid, data grid, stencil table, stencil integration, virtual grid, virtual rows, virtual columns, reactive data grid, stencil grid example, grid performance, large data sets, customizable grid
---


# Stencil Data Grid


## What is StencilJS?

Stencil aims to eliminate the need for writing components with a specific framework’s API. It achieves this by leveraging standardized web platform APIs compatible with all modern browsers. By using the browser’s low-level component model, which underpins all frameworks, Stencil components can function both within a framework and independently.

Integrating web components directly into existing applications can be challenging due to the varying levels of support frameworks have for vanilla web components. 

For more information about getting started with StencilJS, visit the [official StencilJS documentation](https://stenciljs.com/docs/getting-started).

## Installation

Install the necessary dependencies:

::: code-group

```npm
npm install @revolist/revogrid @stencil/store @types/lodash lodash
```

```pnpm
pnpm add @revolist/revogrid @stencil/store @types/lodash lodash
```

```yarn
yarn add @revolist/revogrid @stencil/store @types/lodash lodash
```

```bun
bun add @revolist/revogrid @stencil/store @types/lodash lodash
```

:::

## Usage

Create a StencilJS component and import the necessary modules. 
Define the custom elements and configure your component as follows:


<<< @/demo/stencil/stencil.sample.tsx

### Explanation

1. **Import Statements**: Import necessary modules from `@revolist/revogrid` and StencilJS core.
2. **Component Decorator**: Use the `@Component` decorator to define a new Stencil component with the tag name `my-component`.
3. **Column Definition**: Define the columns for the grid using the `ColumnRegular` type.
4. **Data Source**: Define the data source for the grid.
5. **Lifecycle Method**: Use the `componentWillLoad` lifecycle method to initialize the RevoGrid custom elements.
6. **Render Method**: Render the `revo-grid` component with the defined columns and data source, and enable filtering.

That's it! Your StencilJS project is now set up to use RevoGrid.


<!--@include: ../../demo/stencil/stencil.sample.md-->
