---
title: RevoGrid Angular Integration Guide
description: Learn how to integrate RevoGrid with Angular for creating scalable data grids with virtual rows and columns, improving performance for large datasets.
head:
  - - meta
    - name: keywords
      content: RevoGrid, Angular, data grid, Angular integration, virtual grid, virtual rows, virtual columns, Angular grid example, grid performance, large data sets, customizable grid, RevoGrid Angular components
---


<div style="text-align: center">


# Angular Data Grid Getting Started

<img src="/angular.svg" alt="Angular logo" width="300" height="300" style="margin: 20px auto;" />

<p>

Revogrid provide special [Angular adapter](https://github.com/revolist/angular-datagrid). Just import it to your project and it can be used as part of angular system.

</p>

</div>

::: info
This tutorial assumes that an Angular project has already been set up.
If not, please refer to the official documentation [Angular Installation](https://angular.dev/installation)
:::



<!--@include: ./install.md-->

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