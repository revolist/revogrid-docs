export type FormattingRow = {
  id: string
  project: string
  owner: string
  ownerIndex: number
  progress: number
  budget: number
}

export const formattingRows: FormattingRow[] = [
  { id: 'FMT-00001', project: 'Checkout rebuild', owner: 'Maya Chen', ownerIndex: 1, progress: 28, budget: 120000 },
  { id: 'FMT-00002', project: 'Mobile refresh', owner: 'Elias Novak', ownerIndex: 2, progress: 46, budget: 95000 },
  { id: 'FMT-00003', project: 'Identity migration', owner: 'Nina Patel', ownerIndex: 3, progress: 4, budget: 240000 },
  { id: 'FMT-00004', project: 'Analytics launch', owner: 'Noah Williams', ownerIndex: 4, progress: -12, budget: 180000 },
  { id: 'FMT-00005', project: 'Platform rollout', owner: 'Amara Okafor', ownerIndex: 5, progress: 100, budget: 150000 },
]
