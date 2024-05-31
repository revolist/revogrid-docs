<!--@include: ../parts/editor.header.md-->


```ts
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RevogridModule } from '@revolist/angular-datagrid';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
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
import { ColumnRegular, Editors } from '@revolist/revogrid';
import { Editor } from '@revolist/angular-datagrid';
import { EditorComponent } from './editor.component';

@Component({
  selector: 'app-root',
  template: `<revo-grid [source]="source" [columns]="columns" [editors]="editors"/>`,
})
export class AppComponent {
  source: any[] = [];
  columns: ColumnRegular[] = [];
  editors: Editors = {};

  constructor(private ref: Injector) {
    const MY_EDITOR = 'custom-editor';
    this.source = [
      {
        name: '1',
        details: 'Item 1',
      },
      {
        name: '2',
        details: 'Item 2',
      },
    ];
    this.columns = [
      {
        prop: 'name',
        name: 'First',
        editor: MY_EDITOR,
      },
      {
        prop: 'details',
        name: 'Second',
      },
    ];


    this.editors = { [MY_EDITOR]: Editor(EditorComponent, ref) };
  }
}
```

```ts
// editor.component.ts
import { Component, Input } from '@angular/core';
import { type EditorType } from '@revolist/angular-datagrid';

@Component({
  selector: 'app-editor',
  template: '<button (click)="testClick()">{{ props.val }} close!</button>',
})
export class EditorComponent {
  @Input() props!: EditorType;

  
  testClick() {
    this.props.close();
  }
}

```


Check [Sandbox](https://codesandbox.io/s/Revogrid-vueeditor-bxpq0?file=/src/App.vue) for real live sample.
<ClientOnly>
  <div class="tile">
    <iframe src="https://codesandbox.io/embed/Revogrid-vueeditor-bxpq0?fontsize=14&hidenavigation=1&theme=dark"
      style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
      title="Revogrid-VueEditor"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  </div>
</ClientOnly>



