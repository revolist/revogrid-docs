---
title: TanStack Integration
description: Integrate RevoGrid with TanStack to build fast, scalable data grids with support for virtual rows and columns.
head:
  - - meta
    - name: keywords
      content: RevoGrid, TanStack, data grid, TanStack table integration, virtual grid, virtual rows, virtual columns, TanStack grid example, grid performance, large data sets, customizable grid, RevoGrid TanStack
---

# Getting Started with TanStack

[TanStack](https://tanstack.com/table/latest/docs/introduction) is a popular framework for building table data layers. However, RevoGrid offers a more comprehensive solution by incorporating all the features of [TanStack](https://tanstack.com/table/latest/docs/introduction), along with advanced rendering, virtual scrolling, and column-level optimizations for superior performance. If you're transitioning from an existing TanStack architecture or want to quickly prototype, this guide will help you integrate [TanStack](https://tanstack.com/table/latest/docs/introduction) with RevoGrid.

We strongly recommend using RevoGrid's native features for the best performance. It is specifically designed to handle advanced rendering and optimize every aspect of DOM manipulation, ensuring an efficient experience.

RevoGrid operates on the column level, which allows for superior performance, whereas TanStack manages data at the row level.

The following example shows how to use TanStack with RevoGrid to create columns, bind data, and manage interactions.


<!--@include: ../../demo/tanstack/index.md-->


## Summary

Integrating TanStack with RevoGrid allows you to leverage the row-level operations provided by TanStack, while taking advantage of RevoGrid's optimized performance and advanced rendering capabilities, including virtual scrolling and efficient DOM handling.

For a smooth migration or quick experimentation, this setup provides a great foundation, but remember, RevoGrid's built-in features are crafted for peak performance and user experience.

