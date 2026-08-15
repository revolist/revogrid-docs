export type SpreadsheetRow = {
  id: string
  item: string
  region: string
  units: number
  formula: string
}

export const spreadsheetRows: SpreadsheetRow[] = [
  { id: 'SHEET-00001', item: 'Monitor stand', region: 'West', units: 18, formula: '=C1*124' },
  { id: 'SHEET-00002', item: 'Mechanical keyboard', region: 'East', units: 24, formula: '=C2*130' },
  { id: 'SHEET-00003', item: 'Docking station', region: 'North', units: 11, formula: '=C3*195' },
  { id: 'SHEET-00004', item: 'Webcam', region: 'South', units: 32, formula: '=C4*90' },
  { id: 'SHEET-00005', item: 'Desk lamp', region: 'Central', units: 27, formula: '=C5*90' },
  { id: 'SHEET-00006', item: 'Ergonomic mouse', region: 'Midwest', units: 21, formula: '=C6*90' },
]
