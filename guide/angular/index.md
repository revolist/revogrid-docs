# Getting Started

::: info
This tutorial assumes that an Angular project has already been set up.
If not, please refer to the official documentation [Angular Installation](https://angular.dev/installation)
:::

Revogrid provide special wrapper based on [stenciljs adapter](https://www.npmjs.com/package/@revolist/angular-datagrid). Just import it to your project and it can be used as part of angular system.

::: code-group

```npm
npm i @revolist/angular-datagrid

```

```pnpm
pnpm add @revolist/angular-datagrid
```

```yarn
yarn add @revolist/angular-datagrid
```

```bun
bun add @revolist/angular-datagrid
```

:::

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

<!--@include: ../../demo/angular/angular.sample.md-->



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