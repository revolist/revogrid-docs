---
title: React Data Grid
description: Learn how to use React Data Grid to build fast, scalable data applications with support for virtual rows and columns.
head:
  - - meta
    - name: keywords
      content: RevoGrid, React, data grid, React datagrid integration, virtual grid, virtual rows, virtual columns, React grid example, grid performance, large data sets, customizable grid, RevoGrid React, React Table
---


<div style="text-align: center">


# React Data Grid

This page covers the key concepts of RevoGrid - a high-performance, customizable React Table and React Data Grid for managing large datasets.

<img src="/react.svg" alt="React logo" width="300" height="300" style="margin: 20px auto;" />

</div>


To start, just import [react-datagrid](https://github.com/revolist/react-datagrid) to your project and it can be used as part of react system.

<!--@include: ../../demo/react/react-datagrid.md-->

<!--@include: ./_install.md-->

## Basic Setup

RevoGrid is designed to be highly performant, even with large datasets, by leveraging virtualization for both rows and columns. It allows you to render only the visible portion of the grid, significantly improving performance when dealing with large datasets.

### Code

Below is an example of a basic setup using RevoGrid in React. The grid accepts columns and data through props and can be further customized to suit your specific needs.

```tsx
<!--@include: ../../demo/react/react-datagrid.tsx-->

```

<!--@include: ./_examples.md-->
