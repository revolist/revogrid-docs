import type { CustomerRow } from '../../types'

export const treeRows: CustomerRow[] = [
  { id: 'revenue', parentId: null, company: 'Revenue organization', owner: 'Maya Chen', ownerIndex: 1, growth: 12, health: 'On track' },
  { id: 'sales', parentId: 'revenue', company: 'Sales', owner: 'Noah Williams', ownerIndex: 4, growth: 7, health: 'Growing' },
  { id: 'sales-enterprise', parentId: 'sales', company: 'Enterprise accounts', owner: 'Sofia Rossi', ownerIndex: 7, growth: 15, health: 'On track' },
  { id: 'product', parentId: null, company: 'Product & engineering', owner: 'Leo Martin', ownerIndex: 6, growth: -4, health: 'Review' },
  { id: 'platform', parentId: 'product', company: 'Data platform', owner: 'Maya Chen', ownerIndex: 1, growth: -9, health: 'At risk' },
]
