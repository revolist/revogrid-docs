// Fictional Atlas Software data. All money is EUR thousands; no external claims.
export const customers = [
  ['Northstar', 700], ['Meridian', 450], ['Cedar', 300], ['Harbor', 200],
  ['Juniper', 150], ['Solstice', 120], ['Other named accounts', 80],
].map(([customer, revenue]) => ({ customer, revenue }));
export const units = [
  { name: 'Platform · Q2', quarter: 'Q2', region: 'Platform', revenue: 900, profit: 180 },
  { name: 'Services · Q2', quarter: 'Q2', region: 'Services', revenue: 100, profit: 10 },
  { name: 'Platform · Q3', quarter: 'Q3', region: 'Platform', revenue: 1000, profit: 210 },
  { name: 'Services · Q3', quarter: 'Q3', region: 'Services', revenue: 1000, profit: 110 },
];
export const payments = [
  { unit: 'Platform', Q2: [18,20,22,24,26,28,30,32], Q3: [17,19,21,23,25,27,29,31] },
  { unit: 'Services', Q2: [18,20,22,24,26,28,30,32], Q3: [8,10,12,14,16,18,20,102] },
];
export const monthly = [270,280,285,295,305,300,310,320,370,610,670,720].map((revenue,index) => ({
  date: new Date(Date.UTC(2025,9+index,1)).toISOString().slice(0,10), revenue,
}));
export const caseLabels = { pareto: 'Concentration', quadrant: 'Weighted margins', distribution: 'Payment tails', forecast: 'Forecast assumptions' };
export function exampleOptions(api, kind, detail = false) {
  const { createChartDataset, createParetoPreset } = api;
  const presentation = { legendPosition: 'bottom', dataLabels: true };
  if (kind === 'pareto') {
    const dataset = createChartDataset(customers, { category: { field: 'customer' }, series: [{ field: 'revenue', id: 'revenue', label: 'Q3 revenue' }] });
    return { ...createParetoPreset(dataset, { seriesId: 'revenue', threshold: 80, limit: detail ? 7 : 4 }), presentation: { ...presentation, title: 'Four accounts generate 82.5% of revenue', subtitle: 'Q3 · fictional Atlas Software · € thousands', yAxisTitle: '€ thousands' } };
  }
  if (kind === 'quadrant') {
    const rows = detail ? units : ['Q2','Q3'].map(quarter => {
      const members = units.filter(row => row.quarter === quarter);
      return { name: quarter, revenue: members.reduce((s,row) => s+row.revenue,0), profit: members.reduce((s,row) => s+row.profit,0) };
    });
    return { chartType: 'quadrant', data: rows.map(row => ({ ...row, margin: 100*row.profit/row.revenue })), mapping: { category: { field: 'name' }, series: [{ field: 'revenue', label: 'Revenue' },{ field: 'margin', label: 'Operating margin' }] }, bindings: { x: ['revenue'], y: ['margin'] }, axes: { x: { scale: 'linear', min: 0, max: 2200 }, y: { min: 0, max: 25 } }, chartOptions: { pivotX: 1000, pivotY: 18 }, presentation: { ...presentation, title: detail ? 'Both units improve; the group margin falls' : 'Revenue doubles; operating margin falls', subtitle: 'Margin = sum(profit) / sum(revenue) · authored guides: €1m and 18%', xAxisTitle: 'Revenue · € thousands', yAxisTitle: 'Operating margin · %' } };
  }
  if (kind === 'distribution') {
    const dataset = createChartDataset(payments.map(row => ({ unit: row.unit, Q2: row.Q2.reduce((a,b) => a+b,0)/row.Q2.length, Q3: row.Q3.reduce((a,b) => a+b,0)/row.Q3.length })), { category: { field: 'unit' }, series: [{ field: 'Q2', id: 'Q2', label: 'Q2' }, { field: 'Q3', id: 'Q3', label: 'Q3' }] });
    dataset.analyticalFrame.derived = { distributions: payments.flatMap((row,i) => ['Q2','Q3'].map(seriesId => ({ categoryId: dataset.categories[i].id, seriesId, kind: 'samples', samples: row[seriesId] }))) };
    return { chartType: 'boxPlot', dataset, bindings: { value: detail ? ['Q3'] : ['Q2','Q3'] }, presentation: { ...presentation, dataLabels: false, title: 'The average conceals a long payment tail', subtitle: 'Eight settled invoices per unit / quarter · fictional samples', yAxisTitle: 'Days from invoice to payment' } };
  }
  const dataset = createChartDataset(monthly, { category: { field: 'date' }, series: [{ field: 'revenue', id: 'revenue', label: 'Completed-month revenue' }] });
  return { chartType: 'line', dataset, axes: { x: { scale: 'time', interval: 'month', missingPeriods: 'gap' } }, presentation: { ...presentation, dataLabels: false, title: 'A trend fit does not explain a change in business mix', subtitle: 'Completed months only · October 2025–September 2026 · € thousands', yAxisTitle: '€ thousands' }, analysis: { forecasts: [{ id: 'future', seriesId: 'revenue', unit: 'month', horizon: detail ? 6 : 3, confidence: 0.95, label: 'OLS forecast · 95% prediction interval' }] } };
}

// Additional worked cases for the chart-selection guide. Values are EUR thousands.
export function businessCaseOptions(api, kind) {
  const presentation = { legendPosition: 'bottom', dataLabels: false };
  if (kind === 'waterfall') {
    const rows = [
      ['Prior profit', 600], ['Sales volume', 300], ['Pricing', 200],
      ['Direct costs', -250], ['Payroll', -220], ['Other costs', -150], ['Current profit', 0],
    ].map(([step, value]) => ({ step, value }));
    const dataset = api.createChartDataset(rows, { category: { field: 'step' }, series: [{ field: 'value', label: 'Profit contribution' }] });
    dataset.categories.at(-1).kind = 'grandTotal';
    delete dataset.analyticalFrame;
    return { chartType: 'waterfall', dataset, presentation: { ...presentation, title: 'Sales rise, but profit falls from €600k to €480k', subtitle: 'Fictional Harbor Supply · signed changes in € thousands', yAxisTitle: '€ thousands' } };
  }
  const costs = [
    { group: 'People', item: 'Engineering', amount: 500 },
    { group: 'People', item: 'Operations', amount: 340 },
    { group: 'Technology', item: 'Hosting', amount: 300 },
    { group: 'Technology', item: 'Software', amount: 120 },
    { group: 'Commercial', item: 'Sales', amount: 250 },
    { group: 'Commercial', item: 'Support', amount: 170 },
  ];
  if (kind === 'treemap') return {
    chartType: 'treemap',
    dataset: api.createChartDataset(costs, { category: { field: 'item', path: ['group', 'item'] }, series: [{ field: 'amount', label: 'Q3 operating costs' }] }),
    presentation: { ...presentation, title: 'People account for half of €1.68m operating costs', subtitle: 'Atlas Software · Q3 cost hierarchy · € thousands' },
  };
  if (kind === 'sankey') return {
    chartType: 'sankey',
    ...api.createChartFlowData({ links: costs.map(row => ({ source: row.group, target: row.item, value: row.amount })) }),
    chartOptions: { showNodeValues: true, nodeAlignment: 'justify', nodePadding: 20 },
    presentation: { ...presentation, title: 'Trace €1.68m from cost pools to activities', subtitle: 'Atlas Software · the same Q3 costs viewed as allocations · € thousands' },
  };
  return {
    chartType: 'bullet',
    data: [{ metric: 'New business', actual: 92, target: 100 }, { metric: 'Renewals', actual: 105, target: 100 }, { metric: 'Services', actual: 78, target: 100 }],
    mapping: { category: { field: 'metric' }, series: [{ field: 'actual', label: 'Attainment' }, { field: 'target', label: 'Target' }] },
    bindings: { actual: ['actual'], target: ['target'] },
    bullet: { minimum: 0, maximum: 120, ranges: [{ to: 80, label: 'Below plan', color: '#e2e8f0' }, { to: 100, label: 'Approaching plan', color: '#c4b5fd' }, { to: 120, label: 'At or above plan', color: '#a7f3d0' }], showVariance: true, varianceFormat: 'absolute' },
    presentation: { ...presentation, title: 'Services needs the largest recovery to reach target', subtitle: 'Atlas Software · Q3 target attainment · target = 100%', xAxisTitle: 'Target attainment · %' },
  };
}
