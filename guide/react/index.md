---
title: React Data Grid Guide
description: Learn how to integrate RevoGrid with React to build fast, scalable data grids with support for virtual rows and columns.
head:
  - - meta
    - name: keywords
      content: RevoGrid, React, data grid, React integration, virtual grid, virtual rows, virtual columns, React grid example, grid performance, large data sets, customizable grid, RevoGrid React components, React Table
---

# Getting Started

Revogrid provide special wrapper based on [stenciljs react adapter](https://www.npmjs.com/package/@stencil/react-output-target). Just import it to your project and it can be used as part of react system.


<!--@include: ./install.md-->

## Basic Setup

RevoGrid is designed to be highly performant, even with large datasets, by leveraging virtualization for both rows and columns. It allows you to render only the visible portion of the grid, significantly improving performance when dealing with large datasets.

### Example

Below is an example of a basic setup using RevoGrid in React. The grid accepts columns and data through props and can be further customized to suit your specific needs.

```tsx
<!--@include: ../../demo/react/react-datagrid.tsx-->

```
<!--@include: ../../demo/react/react-datagrid.md-->
