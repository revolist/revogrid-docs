import type { CustomerRow } from '../types'

export const customerRows: CustomerRow[] = [
  { id: 'RG-00001', company: 'Northstar Labs', owner: 'Maya Chen', ownerIndex: 1, growth: 8, health: 'On track' },
  { id: 'RG-00002', company: 'Atlas Commerce', owner: 'Elias Novak', ownerIndex: 2, growth: 14, health: 'Growing' },
  { id: 'RG-00003', company: 'Lumen Health', owner: 'Nina Patel', ownerIndex: 3, growth: -3, health: 'Review' },
  { id: 'RG-00004', company: 'Kiteworks', owner: 'Noah Williams', ownerIndex: 4, growth: -12, health: 'At risk' },
  { id: 'RG-00005', company: 'Signal Foundry', owner: 'Amara Okafor', ownerIndex: 5, growth: 21, health: 'On track' },
]

export const ownerOptions = customerRows.map(({ owner, ownerIndex }) => ({ owner, ownerIndex }))

export const statusOptions = ['On track', 'Growing', 'Review', 'At risk']
