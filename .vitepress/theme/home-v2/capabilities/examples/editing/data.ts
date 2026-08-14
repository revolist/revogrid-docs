export type SpreadsheetRow = {
  id: string
  item: string
  region: string
  units: number
  revenue: number
}

export const spreadsheetRows: SpreadsheetRow[] = [
  { id: 'SHEET-00001', item: 'Monitor stand', region: 'West', units: 18, revenue: 2232 },
  { id: 'SHEET-00002', item: 'Mechanical keyboard', region: 'East', units: 24, revenue: 3120 },
  { id: 'SHEET-00003', item: 'Docking station', region: 'North', units: 11, revenue: 2145 },
  { id: 'SHEET-00004', item: 'Webcam', region: 'South', units: 32, revenue: 2880 },
  { id: 'SHEET-00005', item: 'Desk lamp', region: 'Central', units: 27, revenue: 2430 },
  { id: 'SHEET-00006', item: 'Ergonomic mouse', region: 'Midwest', units: 21, revenue: 1890 },
]
