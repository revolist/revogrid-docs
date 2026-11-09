// Run from the parent monorepo: node revogrid/docs/.vitepress/theme/components/blog/advanced-financial-charts/render.mjs
// Uses the built local Charts implementation that supplies the docs development alias.
import * as api from '../../../../../../../packages/charts/dist/index.js';
import { renderChartToSVG } from '../../../../../../../packages/charts/dist/server/index.js';
import { writeFile } from 'node:fs/promises';
import { exampleOptions, caseLabels, businessCaseOptions } from './examples.mjs';
const output = new URL('../../../../../public/blog/advanced-financial-charts/', import.meta.url);
for (const kind of Object.keys(caseLabels)) {
  for (const detail of [false,true]) {
    const name = `${kind}${detail ? '-detail' : ''}`;
    const result = await renderChartToSVG({ ...exampleOptions(api,kind,detail), chartId: `atlas-${name}`, width: 1000, height: 470, theme: 'light' });
    if (/NaN|Infinity/.test(result.svg)) throw Error(`Invalid geometry: ${name}`);
    await writeFile(new URL(`${name}.svg`,output), result.svg);
    console.log(`${name}: ${result.width} × ${result.height}`);
  }
}

for (const kind of ['waterfall', 'treemap', 'sankey', 'bullet']) {
  const result = await renderChartToSVG({ ...businessCaseOptions(api, kind), chartId: `atlas-${kind}`, width: 1000, height: 470, theme: 'light' });
  if (/NaN|Infinity/.test(result.svg)) throw Error(`Invalid geometry: ${kind}`);
  await writeFile(new URL(`${kind}.svg`, output), result.svg);
  console.log(`${kind}: ${result.width} × ${result.height}`);
}

// Rich multi-series examples use a taller plotting area for labels and legends.
const { complexExampleOptions, complexCaseLabels } = await import('./complex-examples.mjs');
for (const kind of Object.keys(complexCaseLabels)) {
 for (const detail of [false,true]) {
  const name = `${kind}${detail ? '-detail' : ''}`;
  const result = await renderChartToSVG({ ...complexExampleOptions(api,kind,detail), chartId:`atlas-${name}`, width:1200, height:640, theme:'light' });
  if (/NaN|Infinity/.test(result.svg)) throw Error(`Invalid geometry: ${name}`);
  await writeFile(new URL(`${name}.svg`,output), result.svg);
  console.log(`${name}: ${result.width} × ${result.height}`);
 }
}
