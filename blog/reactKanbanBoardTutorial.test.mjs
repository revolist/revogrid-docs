import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const article = readFileSync(
  new URL('./react-kanban-board-tutorial.md', import.meta.url),
  'utf8',
);

test('React Kanban tutorial uses the current Planning-owned API', () => {
  assert.match(article, /createPlanningModel/);
  assert.match(article, /PlanningPlugin/);
  assert.match(article, /const KANBAN_PLUGINS = \[PlanningPlugin, KanbanPlugin\]/);
  assert.doesNotMatch(article, /const KANBAN_PLUGINS = \[KanbanPlugin\]/);
  assert.match(article, /fields:\s*\{[\s\S]*?id: 'id',[\s\S]*?title: 'title',[\s\S]*?start: 'start',[\s\S]*?end: 'end',[\s\S]*?status: 'status',[\s\S]*?order: 'order'/);
  assert.doesNotMatch(article, /^\s*idField:\s*'id',/m);
  assert.doesNotMatch(article, /^\s*columnField:\s*'status',/m);
  assert.doesNotMatch(article, /^\s*orderField:\s*'order',/m);
  assert.doesNotMatch(article, /^\s*titleField:\s*'title',/m);
  assert.doesNotMatch(article, /^\s*colorField:\s*'color',/m);
});

test('React example configures Enterprise properties through a typed element ref', () => {
  assert.match(article, /useRef<HTMLRevoGridElement \| null>\(null\)/);
  assert.match(article, /grid\.planning = planning/);
  assert.match(article, /grid\.kanban = KANBAN_CONFIG/);
  assert.match(article, /grid\.kanbanCardEditorDialog = EDITOR_CONFIG/);
  assert.match(article, /grid\.plugins = KANBAN_PLUGINS/);
  assert.doesNotMatch(article, /\n\s+kanban=\{KANBAN_CONFIG\}/);
  assert.doesNotMatch(article, /\n\s+kanbanCardEditorDialog=\{EDITOR_CONFIG\}/);
  assert.doesNotMatch(article, /\n\s+plugins=\{KANBAN_PLUGINS\}/);
});

test('React example persists Planning snapshots and cleans up ownership', () => {
  assert.match(article, /planning\.subscribe\(/);
  assert.match(article, /planning\.replace\(cloneInitialCards\(\),\s*\{/);
  assert.match(article, /planning\.destroy\(\)/);
  assert.match(article, /KANBAN_CARD_MOVE_EVENT/);
  assert.match(article, /type KanbanCardMoveDetail/);
});

test('every complete-example card supplies the Planning schedule fields', () => {
  const appExample = article
    .split('### `src/App.tsx`')[1]
    .split('### `src/main.tsx`')[0];
  const initialCards = appExample
    .split('const INITIAL_CARDS: TaskCard[] = [')[1]
    .split('const GRID_COLUMNS')[0];

  assert.equal(initialCards.match(/^\s+id: 'TASK-/gm)?.length, 6);
  assert.equal(initialCards.match(/^\s+start:/gm)?.length, 6);
  assert.equal(initialCards.match(/^\s+end:/gm)?.length, 6);
});

test('article metadata and installation target the current documented release', () => {
  assert.match(article, /datePublished": "2026-08-09"/);
  assert.match(article, /dateModified": "2026-08-09"/);
  assert.match(article, /@revolist\/revogrid@4\.25\.1/);
  assert.match(article, /@revolist\/react-datagrid@4\.25\.1/);
  assert.match(article, /@revolist\/rv-pro-trial@latest/);
  assert.match(article, /@revolist\/rv-enterprise-trial@latest/);
  assert.match(article, /targets the Planning-model Kanban API/);
  assert.match(article, /Keep the Pro and Enterprise trial packages on the same release/);
});
