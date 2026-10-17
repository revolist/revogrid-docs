import { monthly } from './examples.mjs';

export const complexCaseLabels = {
  polar: 'Three-profile operating scorecard',
  composition: 'Actual / budget stacks + margin lines',
  bins: 'Payment-time bins: frequency vs invoice value',
  allocation: 'Three-stage cost allocation',
  market: 'Price + volume + authored annotations',
};

export const scores = [
  ['Retention', 92, 86, 95], ['Expansion', 76, 82, 90],
  ['Delivery', 88, 74, 90], ['Collections', 63, 81, 90],
  ['Utilization', 84, 72, 85], ['Quality', 94, 89, 95],
].map(([metric, current, prior, target]) => ({ metric, current, prior, target }));

export const invoiceCohorts = Array.from({ length: 72 }, (_, i) => ({
  observation: `Sample ${i + 1}`,
  enterpriseDays: i % 12 === 0 ? 88 + i % 20 : 18 + (i * 7) % 47,
  smbDays: i % 18 === 0 ? 74 + i % 23 : 3 + (i * 5) % 29,
  enterpriseAmount: 3 + (i % 9) * 2,
  smbAmount: 0.3 + (i % 7) * 0.2,
}));

export function complexExampleOptions(api, kind, detail = false) {
  const presentation = { legendPosition: 'bottom', dataLabels: false };
  if (kind === 'polar') return {
    chartType: detail ? 'radarLine' : 'polarColumn',
    data: scores,
    mapping: { category: { field: 'metric' }, series: [
      { field: 'current', label: 'Q3 actual' }, { field: 'prior', label: 'Q2 actual' }, { field: 'target', label: 'Q3 target' },
    ] },
    ...(detail ? {
      axes: { radar: { value: { min: 0, max: 100, tickValues: [25, 50, 75, 100], unit: 'points' }, gridColor: '#cbd5e1' } },
      chartOptions: { radarValues: true, radarDivisions: 4, radarGridShape: 'polygon' },
    } : {
      chartOptions: { startAngle: -225, sweepAngle: 270, innerRadius: 0.2, outerRadius: 0.85, groupPadding: 0.2, barPadding: 0.15 },
      axes: { polar: { position: 'start', value: { min: 0, max: 100, tickValues: [25, 50, 75, 100], unit: 'points', title: 'Score' }, showGrid: true, gridColor: '#cbd5e1' } },
    }),
    presentation: { ...presentation, title: 'Growth masks a collections and expansion gap', subtitle: 'Six operating scores × three profiles · fixed 0–100 rubric · fictional data' },
  };
  if (kind === 'composition') {
    const product = [240,250,255,260,270,270,280,290,330,320,330,350];
    const plannedProduct = [240,245,250,260,265,270,280,290,300,310,320,330];
    const plannedServices = [30,30,35,35,35,40,40,50,50,60,70,80];
    const margin = [20,21,20,20,19,20,19,19,19,16,16,16];
    const rows = monthly.map((r, i) => ({ month: r.date.slice(0,7), actualProduct: product[i], actualServices: r.revenue-product[i], budgetProduct: plannedProduct[i], budgetServices: plannedServices[i], margin: margin[i], marginTarget: 20 }));
    const labels = { actualProduct: 'Actual · Platform', actualServices: 'Actual · Services', budgetProduct: 'Budget · Platform', budgetServices: 'Budget · Services', margin: 'Actual margin', marginTarget: 'Margin target' };
    return {
      chartType: 'columnLine', data: detail ? rows.slice(-3) : rows,
      mapping: { category: { field: 'month' }, series: Object.entries(labels).map(([field,label]) => ({field,label})) },
      seriesOverrides: {
        actualProduct: { type: 'column', stackGroup: 'actual', color: '#6347ef' }, actualServices: { type: 'column', stackGroup: 'actual', color: '#f97316' },
        budgetProduct: { type: 'column', stackGroup: 'budget', color: '#c4b5fd' }, budgetServices: { type: 'column', stackGroup: 'budget', color: '#fed7aa' },
        margin: { type: 'line', yAxis: 'secondary', color: '#059669' }, marginTarget: { type: 'line', yAxis: 'secondary', color: '#475569', lineDash: 'dash' },
      },
      axes: { y: { min: 0, max: 800, title: 'Revenue · € thousands' }, ySecondary: { min: 0, max: 30, title: 'Margin · %', tickValues: [0,10,20,30] } },
      presentation: { ...presentation, title: 'Revenue beats budget while margin misses its target', subtitle: 'Two independent revenue stacks + two percentage lines · October 2025–September 2026' },
    };
  }
  if (kind === 'bins') return {
    chartType: 'histogram', data: invoiceCohorts,
    mapping: { category: { field: 'observation' }, series: [
      { field: 'enterpriseDays', label: 'Enterprise' }, { field: 'smbDays', label: 'SMB' },
      { field: 'enterpriseAmount', label: 'Enterprise invoice value' }, { field: 'smbAmount', label: 'SMB invoice value' },
    ] },
    bindings: { x: ['enterpriseDays', 'smbDays'], y: ['enterpriseAmount', 'smbAmount'] },
    chartOptions: { histogramBinBoundaries: [0,15,30,45,60,75,90,105,120], histogramAggregation: detail ? 'sum' : 'count', markOpacity: 0.55 },
    seriesOverrides: { enterpriseDays: { color: '#6347ef' }, smbDays: { color: '#f97316' } },
    axes: { x: { scale: 'linear', min: 0, max: 120, title: 'Days from invoice to settlement', tickValues: [0,30,60,90,120] }, y: { min: 0, title: detail ? 'Settled invoice value · € thousands' : 'Invoices per 15-day bin' } },
    presentation: { ...presentation, title: detail ? 'Weight the same bins by invoice value' : 'Compare two payment distributions on identical bins', subtitle: '72 settled invoices per cohort · shared 15-day boundaries · overlapping distributions' },
  };
  if (kind === 'market') {
    const rows = [];
    let previous = 78;
    const round = x => Math.round(x * 100) / 100;
    for (let day = 0; rows.length < 120; day++) {
      const instant = Date.UTC(2026,3,1+day);
      if ([0,6].includes(new Date(instant).getUTCDay())) continue;
      const i = rows.length;
      const open = round(previous + Math.sin(i*1.7)*0.65);
      const close = round(open + 0.15 + Math.sin(i*0.62)*1.15);
      rows.push({ date:new Date(instant).toISOString().slice(0,10), open, high:round(Math.max(open,close)+0.6+Math.abs(Math.sin(i))), low:round(Math.min(open,close)-0.6-Math.abs(Math.cos(i))), close, volume:Math.round(180000+Math.abs(Math.sin(i*0.43))*320000) });
      previous = close;
    }
    const timeAt = i => ({scale:'time',value:Date.parse(`${rows[i].date}T00:00:00Z`)});
    return {
      chartType:'volumePrice',data:rows,
      mapping:{category:{field:'date'},series:['open','high','low','close','volume'].map(field=>({field,id:field,label:field}))},
      bindings:Object.fromEntries(['open','high','low','close','volume'].map(field=>[field,[field]])),
      chartOptions:{priceStyle:detail?'line':'candlestick',candleFill:'filled',volumePaneRatio:0.24},
      axes:{x:{scale:'time'},y:{title:'Illustrative price · EUR'},ySecondary:{min:0,title:'Volume · shares'}},
      navigation:{enabled:true,crosshair:true,navigator:{series:['close'],height:44},rangeSelector:{presets:['1M','3M','all'],custom:true}},
      annotations:{references:[
        {id:'support',kind:'line',axis:'primary',value:78,label:'Authored support',color:'#059669',lineDash:'dash'},
        {id:'resistance',kind:'band',axis:'primary',min:93,max:96,label:'Authored review zone',color:'#f59e0b',opacity:0.12},
      ],shapes:[
        {id:'lower',kind:'line',yAxis:'primary',from:{x:timeAt(15),y:77},to:{x:timeAt(110),y:91},color:'#6366f1',lineDash:'dash'},
        {id:'upper',kind:'line',yAxis:'primary',from:{x:timeAt(15),y:84},to:{x:timeAt(110),y:98},color:'#6366f1',lineDash:'dash'},
        {id:'note',kind:'note',yAxis:'primary',at:{x:timeAt(75),y:98},text:'Authored review channel',color:'#6366f1'},
      ]},
      presentation:{...presentation,title:'Inspect the price move alongside trading volume',subtitle:'120 fictional weekday sessions · authored guides, not detected signals'},
    };
  }
  const links = [
    ['People','Platform',500], ['People','Services',340],
    ['Technology','Platform',300], ['Technology','Services',120],
    ['Commercial','Platform',200], ['Commercial','Services',220],
    ['Platform','Enterprise',700], ['Platform','SMB',300],
    ['Services','Enterprise',300], ['Services','SMB',380],
  ].map(([source,target,value],i) => ({ id: `allocation-${i}`,source,target,value }));
  return {
    chartType: 'sankey', ...api.createChartFlowData({links}),
    chartOptions: { nodeAlignment: 'justify', nodeWidth: 18, nodePadding: 20, layoutIterations: 12, linkSort: 'auto', linkColorMode: 'source', linkOpacity: 0.5, showNodeValues: true, showLinkValues: detail, nodeHighlight: 'links', nodeFade: 'global', linkFade: 'global' },
    presentation: { ...presentation, title: 'Trace costs through products into customer segments', subtitle: '€1.68m allocated once per stage · intermediate totals reconcile · fictional Atlas data' },
  };
}
