import type { ColumnRegular } from '@revolist/revogrid'
import {
  AdvanceFilterPlugin,
  FIlTER_SELECTION,
  FIlTER_SLIDER,
  FilterHeaderPlugin,
  TreeDataPlugin,
} from '@revolist/revogrid-pro'
import { growthColumn, ownerColumn, statusColumn } from '../../shared/columns'
import { defineCapabilityExample } from '../../shared/defineExample'
import { createFilterConfig } from '../../shared/filterConfig'
import { treeRows } from './data'

export const treeColumns: ColumnRegular[] = [
  { name: 'Organization', prop: 'company', size: 196, tree: true, sortable: true, filter: 'string' },
  { ...ownerColumn, size: 148, filter: [FIlTER_SELECTION] },
  { ...growthColumn, size: 100, filter: ['number', FIlTER_SLIDER] },
  { ...statusColumn, size: 112, filter: [FIlTER_SELECTION] },
]

export const treeExample = defineCapabilityExample({
  id: 'tree',
  code: `const tree = {
  idField: 'id', parentIdField: 'parentId'
}

<RevoGrid source={teams} columns={columns}
  tree={tree} filter />`,
  source: treeRows,
  columns: treeColumns,
  plugins: [TreeDataPlugin, AdvanceFilterPlugin, FilterHeaderPlugin],
  filter: createFilterConfig({ syncCellTemplate: true }),
  readonly: true,
  tree: {
    idField: 'id',
    parentIdField: 'parentId',
    rootParentId: null,
    expandedRowIds: new Set(['revenue', 'sales', 'product']),
    animation: true,
  },
  rowSize: 40,
  height: 304,
  theme: (isDark) => isDark ? 'darkMaterial' : 'material',
  syncFilterColumns: true,
})
