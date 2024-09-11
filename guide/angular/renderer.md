---
title: Angular Native Cell Render Support in RevoGrid
description: Discover how to leverage native cell rendering in RevoGrid for Angular, enabling custom Angular components inside grid cells.
head:
  - - meta
    - name: keywords
      content: RevoGrid, Angular, native cell rendering, custom cell rendering, Angular components in grid, data grid rendering, Angular grid integration, RevoGrid Angular cells, grid component render, Angular custom cells
---

<!--@include: ../parts/renderer.header.md-->


## Cell Component

First, let's create a component to be displayed as a cell. This component will receive the cell's properties as an input and display it.

```ts
// cell.component.ts
import { Component, Input } from '@angular/core';
import { ColumnDataSchemaModel } from '@revolist/revogrid';


@Component({
  selector: 'app-cell',
  standalone: true,
  template: '<span> {{value}} works!</span>',
})
export class CellComponent {
  @Input() props!: ColumnDataSchemaModel;

  get value() {
    return this.props.rowIndex;
  }
}
```

## Grid Component and Cell Template

Next let's create a component that will be used to render the grid. This component will receive the grid's properties as an input and display it. At the same time, it will set the cell's template as native element of the cell.

```ts
// app.component.ts
import { Component } from "@angular/core";
import { RevoGrid, Template } from "@revolist/angular-datagrid";
import { CellComponent } from "./cell.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RevoGrid, CellComponent],
  template: `<revo-grid
    style="height: 200px; width: 200px"
    [columns]="columns"
    [source]="source"
  ></revo-grid>`,
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
      cellTemplate: Template(CellComponent),
    },
    {
      prop: "details",
      name: "Second",
    },
  ];
}

```


<!--@include: ../../demo/angular/angular.cell.md-->