import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import test from 'node:test';

const articleUrl = new URL('../../../compare/ag-grid-alternatives.md', import.meta.url);
const publicUrl = new URL('../../../public/', import.meta.url);

test('the plural alternatives article has working evaluation paths and visual evidence', async () => {
  const source = await readFile(articleUrl, 'utf8');

  assert.match(source, /href="#open-source-capability-matrix"/);
  assert.match(source, /## Open-source capability matrix \{#open-source-capability-matrix\}/);
  assert.match(source, /href="#evaluation-plan"/);
  assert.match(source, /## A 45-minute evaluation plan \{#evaluation-plan\}/);

  const cardLinks = [
    '/demo/',
    'https://tabulator.info/examples/6.5',
    'https://mui.com/x/react-data-grid/',
    'https://tanstack.com/table/latest',
    'https://grid.glideapps.com/',
    'https://www.1771technologies.com/',
  ];

  for (const href of cardLinks) {
    assert.match(source, new RegExp(`<a class="oss-pick" href="${href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`));
  }

  const images = [
    'blog/oss-revogrid-range-clipboard.png',
    'blog/tabulator-demo.png',
    'blog/muix-demo.png',
    'blog/oss-tanstack-table-card.png',
    'blog/glide-demo.png',
    'blog/oss-lytenyte-grid-card.png',
    'blog/oss-revogrid-filtering.png',
    'blog/oss-revogrid-editing.png',
    'blog/oss-revogrid-performance.png',
  ];

  for (const image of images) {
    assert.match(source, new RegExp(`/${image.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`));
    await access(new URL(image, publicUrl));
  }
});
