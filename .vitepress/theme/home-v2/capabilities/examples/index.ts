import { controlExample } from './control/example'
import { editingExample } from './editing/example'
import { filteringExample } from './filtering/example'
import { formattingExample } from './formatting/example'
import { treeExample } from './tree/example'
import type { CapabilityExample, FeatureId } from '../types'

export const capabilityExamples: Record<FeatureId, CapabilityExample> = {
  editing: editingExample,
  control: controlExample,
  filtering: filteringExample,
  formatting: formattingExample,
  tree: treeExample,
}
