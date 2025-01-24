---
title: Angular Data Grid Editor
description: Learn how to implement editor in Data Grid with Angular, enabling custom in-cell editing using Angular components.
head:
  - - meta
    - name: keywords
      content: RevoGrid, Angular, native editor rendering, custom editor, in-cell editing, Angular editor grid, data grid editor, Angular integration, custom cell editor, Angular grid components
---

# Angular Data Grid Editor

<!--@include: ../parts/_editor.header.md-->

## Editor as standalone component

First we need to create a custom editor component.

```ts
// editor.component.ts
import { Component, Input } from "@angular/core";
import { type EditorType } from "@revolist/angular-datagrid";

@Component({
  selector: "app-editor",
  standalone: true,
  template: '<button (click)="testClick()">{{ props.val }} close!</button>',
})
export class EditorComponent {
  @Input() props!: EditorType;

  testClick() {
    this.props.close();
  }
}
```

## Grid Component and Editor

Next, let's create standalone component that will be used to render the grid.
Now we can render the grid with the custom editor component.


```ts
// app.component.ts
import { Component } from "@angular/core";
import {
  RevoGrid,
  Editor,
  type Editors,
  type ColumnRegular,
} from "@revolist/angular-datagrid";
import { EditorComponent } from "./editor.component";

const MY_EDITOR = "custom-editor";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RevoGrid, EditorComponent],
  template: `<revo-grid
    style="height: 200px; width: 200px"
    [columns]="columns"
    [source]="source"
    [editors]="editors"
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
  columns: ColumnRegular[] = [
    {
      prop: "name",
      name: "First",
      // define editor
      editor: MY_EDITOR,
    },
    {
      prop: "details",
      name: "Second",
    },
  ];
  // provide editor classes
  editors: Editors = { [MY_EDITOR]: Editor(EditorComponent) };
}
```



<!--@include: ../../demo/angular/angular.editor.md-->


<!--@include: ./_examples.md-->

