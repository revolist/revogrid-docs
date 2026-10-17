// Native SVG previews and source snippets for the chart styling showcase.
export const segmentStyleExamples = [
  {
    id: 'exceptions',
    title: 'Make exceptions stand out.',
    description: 'A red segment flags a service dip. A diamond marks the incident without recoloring the whole series.',
    note: 'Illustrative service score · red = incident interval',
    values: [82, 88, 85, 52, 78, 91],
    encoding: ids => ({
      style: { stroke: '#0d9488', strokeWidth: 3, marker: 'circle', markerSize: 4 },
      datums: [{ categoryId: ids[3], style: { marker: 'diamond', markerSize: 8, fill: '#dc2626' } }],
      segments: [{ from: ids[2], to: ids[3], style: { stroke: '#dc2626', strokeWidth: 5 } }],
    }),
    code: `const ids = dataset.categories.map(category => category.id)
// Pass this seriesOverrides option to createChart().
seriesOverrides: {
  score: { encoding: {
    style: { stroke: '#0d9488', strokeWidth: 3,
      marker: 'circle', markerSize: 4 },
    datums: [{ categoryId: ids[3], style: {
      marker: 'diamond', markerSize: 8, fill: '#dc2626'
    } }],
    segments: [{ from: ids[2], to: ids[3], style: {
      stroke: '#dc2626', strokeWidth: 5
    } }]
  } }
}`,
  },
  {
    id: 'forecast',
    title: 'Show where the forecast begins.',
    description: 'Solid history flows into a dashed projection. A gradient adds emphasis while the dash keeps the distinction visible without color.',
    note: 'Illustrative demand index · dashed = forecast',
    values: [35, 46, 42, 60, 72, 84],
    encoding: ids => ({
      style: { stroke: '#6366f1', strokeWidth: 3, marker: 'circle', markerSize: 4 },
      segments: [3, 4].map(index => ({
        from: ids[index], to: ids[index + 1],
        style: {
          stroke: { type: 'linearGradient', direction: 'horizontal', stops: [{ offset: 0, color: '#6366f1' }, { offset: 1, color: '#c026d3' }] },
          strokeWidth: 4, strokeDasharray: '7 5',
        },
      })),
    }),
    code: `const ids = dataset.categories.map(category => category.id)
seriesOverrides: {
  score: { encoding: {
    style: { stroke: '#6366f1', strokeWidth: 3,
      marker: 'circle', markerSize: 4 },
    segments: [3, 4].map(index => ({
      from: ids[index], to: ids[index + 1],
      style: {
        stroke: { type: 'linearGradient', direction: 'horizontal', stops: [
          { offset: 0, color: '#6366f1' },
          { offset: 1, color: '#c026d3' }
        ] },
        strokeDasharray: '7 5', strokeWidth: 4
      }
    }))
  } }
}`,
  },
]
