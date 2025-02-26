import { Component } from '@angular/core'
import { RevoGrid } from '@revolist/angular-datagrid'

@Component({
  selector: 'app-simple-grid',
  standalone: true,
  imports: [RevoGrid],
  template: `<revo-grid [columns]="columns" [source]="source" />`,
})
export class SimpleGridComponent {
  source = [{ name: '1' }, { name: '2' }, { name: '3' }]
  columns = [{ prop: 'name' }]
}
