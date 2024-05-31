<!--@include: ../parts/renderer.header.md-->


Create a component to be displayed as a cell:

```ts
// cell.component.ts
import { Component, Input } from '@angular/core';
import { ColumnDataSchemaModel } from '@revolist/revogrid';


@Component({
  selector: 'app-cell',
  template: '<span> {{value}} works!</span>',
})
export class CellComponent {
  @Input() props!: ColumnDataSchemaModel;

  get value() {
    return this.props.rowIndex;
  }
}
```

```ts
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RevogridModule } from '@revolist/angular-datagrid';

import { AppComponent } from './app.component';
import { CellComponent } from './cell.component';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
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
import { Component, Injector } from '@angular/core';
import { ColumnRegular } from '@revolist/revogrid';
import { Template } from '@revolist/angular-datagrid';
import { CellComponent } from './cell.component';

@Component({
  selector: 'app-root',
  template: `<revo-grid [source]="source" [columns]="columns" />`,
})
export class AppComponent {
  source: any[] = [];
  columns: ColumnRegular[] = [];

  constructor(private ref: Injector) {
    this.source = [
      {
        name: '1',
        details: 'Item 1',
      },
    ];
    this.columns = [
      {
        prop: 'name',
        name: 'First',
        cellTemplate: Template(CellComponent, ref),
      },
    ];
  }
}
```

Check [Sandbox](https://codesandbox.io/s/Revogrid-react-component-hrgrx?file=/src/App.js:0-247) for real live sample.
<ClientOnly>
  <div class="tile">
    <iframe src="https://codesandbox.io/embed/Revogrid-react-component-hrgrx?fontsize=14&hidenavigation=1&theme=dark"
      style="width:100%; height:200px; border:0; border-radius: 4px; overflow:hidden;"
      title="Revogrid-React-Component"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
  </div>
</ClientOnly>