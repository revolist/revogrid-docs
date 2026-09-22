---
title: "Angular Data Grid: Installation and Getting Started"
description: Learn how to use RevoGrid in Angular with standalone components or modules, pass columns and source data, and access the underlying grid API.
head:
  - - meta
    - name: keywords
      content: Angular data grid, RevoGrid Angular, Angular virtual data grid, Angular editable grid, Angular Web Component grid
---

# Angular Data Grid: Installation and Getting Started

[Explore the Angular Data Grid](/angular-data-grid) · [Try the Angular demo](/guide/demos/angular/angular-datagrid) · [Compare the best Angular data grids](/blog/top-5-angular-data-grid-libraries-2026) · [Review Pro pricing](/pricing)

RevoGrid shines in Angular when you want a high-performance grid without giving up framework-native templates and editors. The Angular wrapper keeps the grid convenient to use while still exposing the same core RevoGrid API.

<DemoWidgetFrame
  demo="hr"
  framework="angular"
  title="RevoGrid getting started demo"
  minHeight="600"
/>

::: info
This tutorial assumes that an Angular project already exists. If not, start with the official [Angular installation guide](https://angular.dev/installation).
:::

<!--@include: ./_install.md-->

## Standalone component setup

```ts
<!--@include: ../../demo/angular/angular.simple-grid.ts-->
```

## Module-based setup

If your Angular app still uses modules, RevoGrid can be imported there as well:

::: code-group

```ts [app.module.ts]
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RevoGrid } from '@revolist/angular-datagrid'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RevoGrid],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

```ts [app.component.ts]
import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `<revo-grid [source]="source" [columns]="columns"></revo-grid>`,
})
export class AppComponent {
  source = [
    { name: 'Item 1', details: 'First row' },
    { name: 'Item 2', details: 'Second row' },
  ]

  columns = [
    { prop: 'name', name: 'Name' },
    { prop: 'details', name: 'Details' },
  ]
}
```

:::

<!--@include: ./_dynamic-warn.md-->

## Accessing grid instance methods

When you need to call public methods such as `scrollToRow`, `setCellEdit`, or `getVisibleSource`, grab the underlying element and call the API on that instance.

## Custom renderers and editors

Use these Angular-specific guides for deeper integration:

- [Angular Cell Template](/guide/angular/renderer)
- [Angular Cell Editor](/guide/angular/editor)

<DemoWidgetFrame
  demo="getting-started"
  framework="angular"
  title="RevoGrid getting started demo"
/>

## Event handling

Angular applications typically listen to the same RevoGrid lifecycle events as other integrations:

- `beforeedit`
- `afteredit`
- `beforefilterapply`
- `beforesourceset`

## Related guides

- [Programmatic Grid Control](/guide/programmatic-control)
- [Advanced Configuration](/guide/advanced-configuration)
- [Event Patterns and Lifecycles](/guide/events-guide)
- [Grid Performance and Virtualization](/guide/performance)

<!--@include: ./_examples.md-->
