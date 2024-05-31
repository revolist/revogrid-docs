# Getting Started

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
npm i @revolist/angular-datagrid
```

:::

```ts
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RevogridModule } from '@revolist/angular-datagrid';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RevogridModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

```ts
// app.component.ts
import { ColumnRegular } from '@revolist/revogrid';

@Component({
  selector: 'app-root',
  template: `<revo-grid [source]="source" [columns]="columns" />`,
})
export class AppComponent {
  source [
      {
        name: '1',
        details: 'Item 1',
      },
  ];
  columns: ColumnRegular[] = [
      {
        prop: 'name',
        name: 'First',
      },
  ];
}
```

Check [Sandbox](https://codesandbox.io/s/angular-datagrid-overview-d5i0b?fontsize=14&hidenavigation=1&theme=dark) for real live sample.
Use [Repo](https://github.com/revolist/angular-datagrid-test) as a started if you wish.

<ClientOnly>
  <iframe src="https://codesandbox.io/embed/angular-datagrid-overview-d5i0b?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Angular-datagrid-overview"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
</ClientOnly>
