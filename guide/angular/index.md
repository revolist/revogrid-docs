---
title: Angular Data Grid
description: Learn how to use Angular Data Grid to build fast, scalable data applications with support for virtual rows and columns.
head:
  - - meta
    - name: keywords
      content: RevoGrid, Angular, data grid, Angular integration, virtual grid, virtual rows, virtual columns, Angular grid example, grid performance, large data sets, customizable grid, RevoGrid Angular components
---


# Angular Data Grid


This page covers the key concepts of RevoGrid - a high-performance, customizable Angular Table and Angular Data Grid for managing large datasets.


<!--@include: ../../demo/angular/angular-datagrid.md-->

::: info
This tutorial assumes that an Angular project has already been set up.
If not, please refer to the official documentation [Angular Installation](https://angular.dev/installation)
:::





<!--@include: ./_install.md-->

## Standalone Components

Now you can import and reference your components in your consuming application in the same way you would with any other standalone Angular components:


```ts
// app.component.ts
import { Component } from "@angular/core";
import { RevoGrid, Template } from "@revolist/angular-datagrid";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RevoGrid],
  template: `<revo-grid
    style="height: 200px; width: 200px"
    [columns]="columns"
    [source]="source"
></revo-grid>`
})
export class AppComponent {
  source = [
    {
      name: "1",
      details: "Item 1",
    },
    {
      name: "2",
      details: "Item 2",
    },
  ];
  columns = [
    {
      prop: "name",
      name: "First",
    },
    {
      prop: "details",
      name: "Second",
    },
  ];
}
```

### Example

<!--@include: ../../demo/angular/angular-datagrid.md-->


## Modules

Import your component library into your component. You must distribute your components through a primary NgModule to use your components in a standalone component.

::: code-group

```ts [app.module.ts]
// app.module.ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RevoGrid } from "@revolist/angular-datagrid";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RevoGrid],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

```ts [app.component.ts]
// app.component.ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<revo-grid [source]='source' [columns]='columns'/>`,
})
export class AppComponent {
  source = [
    {
      name: "1",
      details: "Item 1",
    },
    {
      name: "2",
      details: "Item 2",
    },
  ];
  columns = [
    {
      prop: "name",
      name: "A",
    },
    {
      prop: "details",
      name: "B",
    },
  ];
}
```
:::

### Example

<!--@include: ../../demo/angular/angular.sample.module.md-->


<!--@include: ./_examples.md-->



::: warning Dynamic Component Usage
When using RevoGrid with Angular 19+, there are known issues with dynamically loading or using the component in certain scenarios. The grid frame may render, but columns and source data may not display properly.

**Known Issues:**
- Columns and source data may not render when the component is used dynamically
- Plugins and readonly properties may stop working in some dynamic scenarios
- Silent errors may occur without visible error messages

**Related Issue:** [GitHub Issue #798](https://github.com/revolist/revogrid/issues/798)

**Helpful Resources:**
- [Angular Component Communication](https://angular.dev/guide/components/inputs-outputs)
- [Angular Standalone Components](https://angular.dev/guide/components/importing)
- [RevoGrid API Documentation](/guide/api/)
- [RevoGrid Cell Templates](/guide/angular/renderer)
- [RevoGrid Editors](/guide/angular/editor)

If you encounter issues with dynamic component usage, please report them on [GitHub Issues](https://github.com/revolist/revogrid/issues) with details about your Angular version and setup.
:::
