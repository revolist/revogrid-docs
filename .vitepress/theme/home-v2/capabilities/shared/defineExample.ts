import { capabilityColumnTypes } from './columnTypes'
import type { CapabilityExample } from '../types'

type ExampleConfig = Pick<
  CapabilityExample,
  'id' | 'code' | 'source' | 'columns' | 'rowSize' | 'height' | 'theme'
> & Partial<Omit<CapabilityExample, 'id' | 'code' | 'source' | 'columns' | 'rowSize' | 'height' | 'theme'>>

export function defineCapabilityExample(config: ExampleConfig): CapabilityExample {
  return {
    columnTypes: capabilityColumnTypes,
    plugins: [],
    filter: false,
    readonly: false,
    rowHeaders: false,
    canMoveColumns: false,
    contextMenu: false,
    surface: 'default',
    syncFilterColumns: false,
    ...config,
  }
}
