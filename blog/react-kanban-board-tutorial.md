---
title: "React Kanban Board Tutorial: Build a Drag-and-Drop Board with TypeScript"
description: "Build a React Kanban board with shipped TypeScript APIs, drag-and-drop, a packaged card editor, WIP limits, and local storage."
outline: deep
faq:
  heading: React Kanban board FAQ
  items:
    - q: How are cards stored?
      a: Keep one flat array with stable IDs, status and numeric order. Kanban owns the board projection; getCards() returns canonical cards while grid.source contains projected rows.
    - q: Does the example need a Planning model?
      a: No. This example uses the shipped standalone KanbanPlugin and its packaged editor. It does not import PlanningPlugin or createPlanningModel.
    - q: Can users create and edit cards on an empty board?
      a: Yes. The Add card button calls requestCreateCard with a destination column. The packaged editor is installed automatically and supports create, edit and delete requests.
    - q: Can WIP limits block moves?
      a: Yes. Set a column wipLimit and wipBehavior to block. The component validates local operations against known canonical cards; a remote service must enforce capacity across concurrent users.
    - q: Does local storage provide server persistence?
      a: No. It saves a snapshot on one browser origin. A backend needs atomic writes, versions, idempotent operation IDs and conflict handling. Persist every changedCards record, including rank-rebalanced neighbors.
    - q: Is Kanban part of the MIT core?
      a: RevoGrid Core is MIT licensed. The Kanban plugin and packaged editor are commercial modules with a public trial.
date: 2026-08-09
updated: 2026-10-22
author: RevoGrid Team
category: Kanban
tags:
  - React
  - Kanban
  - TypeScript
  - Drag and Drop
  - RevoGrid
image: https://raw.githubusercontent.com/revolist/kanban/main/assets/screenshots/overview.webp
imageAlt: React Kanban board with draggable task cards and workflow columns
head:
  - - meta
    - name: keywords
      content: React Kanban board, React Kanban component, drag and drop Kanban React, React TypeScript Kanban board, Kanban board React, React task board, TypeScript Kanban component, React drag and drop board, WIP limits React, RevoGrid Kanban
  - - meta
    - property: og:title
      content: React Kanban Board Tutorial - Drag-and-Drop with TypeScript
  - - meta
    - property: og:description
      content: Build a React Kanban board with typed cards, editing, WIP limits, and local storage using the standalone Kanban package.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:image
      content: https://raw.githubusercontent.com/revolist/kanban/main/assets/screenshots/overview.webp
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "React Kanban Board Tutorial: Build a Drag-and-Drop Board with TypeScript",
        "description": "Build a React Kanban board with TypeScript, drag-and-drop cards, editing, WIP limits, and local storage using shipped Kanban APIs.",
        "author": {
          "@type": "Organization",
          "name": "RevoGrid"
        },
        "publisher": {
          "@type": "Organization",
          "name": "RevoGrid",
          "url": "https://rv-grid.com/"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://rv-grid.com/blog/react-kanban-board-tutorial"
        },
        "datePublished": "2026-08-09",
        "dateModified": "2026-10-22",
        "proficiencyLevel": "Intermediate",
        "dependencies": "React, TypeScript, Vite, RevoGrid Kanban"
      }
---

<script setup>
import CommercialFaq from '../pro/CommercialFaq.vue'
</script>

# React Kanban Board Tutorial: Build a Drag-and-Drop Board with TypeScript

![React Kanban board with draggable task cards and workflow columns](https://raw.githubusercontent.com/revolist/kanban/main/assets/screenshots/overview.webp)

Build a React board from one flat array of cards. The standalone `KanbanPlugin`
projects those records into workflow columns and provides movement, WIP rules
and a packaged editor. React owns the surrounding controls and the grid lifetime.

This example uses the **public APIs** in Kanban/Pro **3.0.12** and Core/React
wrapper **4.29.0**. Kanban and its editor are commercial modules; the steps below
use public trial aliases.

The finished example supports visible Add/Edit/Delete actions, including the
first card on an empty board, keyboard and pointer movement, and local storage.
It also shows where a server persistence contract starts, without presenting a
browser snapshot as a production backend.

## 1. Install the tested packages

Start with a Vite React + TypeScript project containing `index.html` with
`<div id="root"></div>` and a module script pointing to `/src/main.tsx`.
Install React 18 and its types if they are not already present:

```bash
pnpm add react@18.3.1 react-dom@18.3.1
pnpm add -D typescript@5.9.3 @types/react@18 @types/react-dom@18
pnpm config set @revolist:registry https://trial.rv-grid.com --location=project
pnpm add @revolist/revogrid@4.29.0 @revolist/react-datagrid@4.29.0 @revolist/revogrid-pro@npm:@revolist/rv-pro-trial@3.0.12 @revolist/kanban@npm:@revolist/kanban-trial@3.0.12
```

The trial registry needs no login. Application imports use the production names
`@revolist/revogrid-pro` and `@revolist/kanban`. Both installations expose
`styles.css`; do not combine trial aliases with paid-package `dist` CSS paths.
For licensed packages, use the [authenticated installation guide](https://pro.rv-grid.com/guides/installation/).

## 2. Declare the React plugin property

Core's separately published React wrapper does not declare the Kanban plugin
property. Include this narrow module augmentation in the application. It types
the existing native property and does not introduce a second board component.

<!-- kanban-tutorial:src/kanban-props.ts -->
```ts
import type { KanbanConfig } from '@revolist/kanban';
import '@revolist/revogrid';

// Core's React wrapper is published separately from plugin property declarations.
declare module '@revolist/revogrid' {
  namespace JSX {
    interface RevoGrid {
      kanban?: KanbanConfig<any> | false;
    }
  }
}
```

## 3. Add the board and local persistence

Create `src/App.tsx` with the following complete example. The four workflow
columns use `status`; numeric `order` values control placement within a column.
The default card template and editor share `title`, `description`, `tags` and
`dueDate` mappings.

The example uses date-only due values and explicitly sets the card display zone
to UTC. This keeps the pinned release's card presentation aligned with its date
control. It does not demonstrate timezone-sensitive datetime editing. Use
explicit years and verify any datetime workflow against the version you ship.

<!-- kanban-tutorial:src/App.tsx -->
```tsx
import './kanban-props';
import { useEffect, useMemo, useRef, useState } from 'react';
import { RevoGrid } from '@revolist/react-datagrid';
import {
  KanbanPlugin,
  type KanbanCardId,
  type KanbanConfig,
} from '@revolist/kanban';
import type { DataType } from '@revolist/revogrid';
import '@revolist/revogrid-pro/styles.css';
import '@revolist/kanban/styles.css';

export type TaskCard = DataType & {
  id: string;
  title: string;
  status: 'backlog' | 'doing' | 'review' | 'done';
  order: number;
  description?: string;
  tags?: string[];
  dueDate?: string;
};

const STORAGE_KEY = 'revogrid-react-kanban-cards-v3';
const INITIAL_CARDS: TaskCard[] = [
  { id: 'TASK-101', title: 'Define onboarding metrics', status: 'backlog', order: 1000, tags: ['Product'], dueDate: '2026-08-14' },
  { id: 'TASK-102', title: 'Write empty-state copy', status: 'backlog', order: 2000, tags: ['Content'] },
  { id: 'TASK-103', title: 'Build account checklist', status: 'doing', order: 1000 },
  { id: 'TASK-104', title: 'Review keyboard flow', status: 'review', order: 1000 },
];

function isTaskCard(value: unknown): value is TaskCard {
  if (!value || typeof value !== 'object') return false;
  const card = value as Record<string, unknown>;
  return typeof card.id === 'string' && card.id.length > 0
    && typeof card.title === 'string'
    && ['backlog', 'doing', 'review', 'done'].includes(String(card.status))
    && typeof card.order === 'number' && Number.isFinite(card.order)
    && (card.description === undefined || typeof card.description === 'string')
    && (card.dueDate === undefined || typeof card.dueDate === 'string')
    && (card.tags === undefined || Array.isArray(card.tags) && card.tags.every(tag => typeof tag === 'string'));
}

function loadCards(): { cards: TaskCard[]; message: string } {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) {
      const cards: unknown = JSON.parse(stored);
      if (!Array.isArray(cards) || !cards.every(isTaskCard)
        || new Set(cards.map(card => card.id)).size !== cards.length) {
        throw new Error('Invalid saved card records.');
      }
      return { cards, message: 'Restored from this device.' };
    }
    return { cards: structuredClone(INITIAL_CARDS), message: 'Changes are saved on this device.' };
  } catch {
    return { cards: structuredClone(INITIAL_CARDS), message: 'Saved cards could not be loaded. Showing sample cards.' };
  }
}

export default function App() {
  const gridRef = useRef<HTMLRevoGridElement>(null);
  const boardRef = useRef<KanbanPlugin | null>(null);
  // This is the initial source, not a second live copy of the board.
  const [initial] = useState(loadCards);
  const [ready, setReady] = useState(false);
  const [count, setCount] = useState(initial.cards.length);
  const [selected, setSelected] = useState<KanbanCardId | null>(null);
  const [message, setMessage] = useState(initial.message);
  const plugins = useMemo(() => [KanbanPlugin], []);
  const kanban = useMemo<KanbanConfig<TaskCard>>(() => ({
    idField: 'id', columnField: 'status', orderField: 'order',
    columns: [
      { prop: 'backlog', name: 'Backlog', size: 260 },
      { prop: 'doing', name: 'In progress', size: 260, wipLimit: 2 },
      { prop: 'review', name: 'Review', size: 260, wipLimit: 2 },
      { prop: 'done', name: 'Done', size: 260 },
    ],
    card: {
      titleField: 'title', descriptionField: 'description', tagsField: 'tags',
      dueDateField: 'dueDate', dateTimeZone: 'UTC',
    },
    selection: { mode: 'single' },
    wipBehavior: 'block',
  }), []);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    let disposed = false;
    const onSelection = () => setSelected(boardRef.current?.getSelectedCardIds()[0] ?? null);
    const onCommit = () => {
      const board = boardRef.current;
      if (!board) return;
      setCount(board.getCards().length);
      onSelection();
      try {
        // grid.source contains projected rows while Kanban is active.
        localStorage.setItem(STORAGE_KEY, JSON.stringify(board.getCards()));
        setMessage('Saved on this device.');
      } catch {
        setMessage('Cards changed, but saving failed. Keep this tab open and retry.');
      }
    };
    const events = ['kanbancardcreate', 'kanbancardupdate', 'kanbancarddelete', 'kanbancardmove'];
    for (const event of events) grid.addEventListener(event, onCommit);
    grid.addEventListener('kanbanselectionchange', onSelection);
    void (async () => {
      await grid.componentOnReady();
      const installed = await grid.getPlugins();
      if (disposed) return;
      const board = installed.find(plugin => plugin instanceof KanbanPlugin);
      if (!(board instanceof KanbanPlugin)) throw new Error('Kanban did not initialize.');
      boardRef.current = board;
      setReady(true);
    })().catch(error => {
      if (!disposed) setMessage(String(error));
    });
    return () => {
      disposed = true;
      for (const event of events) grid.removeEventListener(event, onCommit);
      grid.removeEventListener('kanbanselectionchange', onSelection);
      boardRef.current = null;
    };
  }, []);

  const retrySave = () => {
    const board = boardRef.current;
    if (!board) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(board.getCards()));
      setMessage('Saved on this device.');
    } catch {
      setMessage('Saving is still unavailable. Keep this tab open.');
    }
  };

  return <main className="kanban-demo">
    <h1>Onboarding workflow</h1>
    <div className="kanban-demo__toolbar" aria-label="Card actions">
      <button disabled={!ready} onClick={() => boardRef.current?.requestCreateCard({ columnProp: 'backlog' })}>Add card</button>
      <button disabled={selected === null} onClick={() => { if (selected !== null) boardRef.current?.requestEditCard(selected); }}>Edit selected</button>
      <button disabled={selected === null} onClick={() => { if (selected !== null) boardRef.current?.requestDeleteCards([selected]); }}>Delete selected</button>
      <button disabled={!ready} onClick={retrySave}>Save again</button>
      <span>{count} {count === 1 ? 'card' : 'cards'}</span>
    </div>
    <p role="status">{message}</p>
    <RevoGrid ref={gridRef} className="kanban-demo__grid"
      plugins={plugins} kanban={kanban} source={initial.cards} />
  </main>;
}
```

`source={initial.cards}` is the initial input. The source reference and plugin
configuration stay stable when status messages or selection change, so React
does not overwrite a committed edit with an older array. The plugin owns the
current canonical cards; the application reads them through `getCards()`.

The effect waits for plugin installation and removes its own listeners during
cleanup. The example also runs inside React StrictMode. An empty stored array
remains an empty board, with **Add card** available for the first record.

The packaged editor is installed by `KanbanPlugin`; no separate editor
registration is required. A card's context menu and Enter/double-click can also
open it. Delete confirmation uses the packaged default.

## 4. Mount React and size the board

<!-- kanban-tutorial:src/main.tsx -->
```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode><App /></StrictMode>,
);
```

<!-- kanban-tutorial:src/styles.css -->
```css
.kanban-demo { box-sizing: border-box; max-width: 1200px; margin: 0 auto; padding: 16px; font-family: system-ui, sans-serif; }
.kanban-demo__toolbar { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
.kanban-demo__toolbar button { padding: 8px 12px; }
.kanban-demo__grid { display: block; width: 100%; height: 620px; }
```

Start the Vite app with `pnpm dev`. Select a card to enable the Edit/Delete
buttons. Add a card, change its tags, move it to another column, and reload.
Its committed state should be restored on the same browser origin.

The explicit grid height is required: a correctly configured board still needs
space in its host container. At narrow widths the action buttons wrap and the
grid keeps horizontal scrolling for workflow columns.

## How local saving works

The example subscribes to committed create, update, delete and move events. Each
handler saves `board.getCards()`, including new ranks, to one local-storage key.
It does **not** serialize `grid.source`: while Kanban is active that property
contains the projected rows used by the grid.

This small local example saves the complete canonical snapshot. It does not
store selection, filters or undo history. If you add history replay or
external source replacement, integrate saving with those lifecycle paths too.
It does not coordinate edits across browser tabs. If storage is unavailable or
full, the cards stay visible and **Save again** retries the snapshot.

The sample uses a versioned storage key, `revogrid-react-kanban-cards-v3`.
Import or migrate existing production data explicitly rather than reinterpreting
records written by an older schema.

## WIP and movement

`wipBehavior: 'block'` rejects local moves into a full destination. The same
known canonical cards contribute even when a local filter hides them. Use
`warn` when exceeding a limit should remain possible.

These local rules do not enforce capacity across users or unloaded remote
cards. A server must validate its authoritative counts and permissions.
Movement approval in this release is synchronous: an `async` listener on
`beforekanbancardmove` does not make the board wait for a server response.

## Connecting a real API

For a server-backed app, persist **every** record in a move event's
`changedCards`. A move can rebalance neighboring ranks, so persisting only the
IDs in `cardIds` is insufficient. Treat this batch atomically on the server.

The following optional module demonstrates request serialization. Its endpoint,
version format and response schema are application contracts; it is not wired
into the local-storage app above.

<!-- kanban-tutorial:src/persistence.ts -->
```ts
import type { KanbanCardMoveDetail } from '@revolist/kanban';
import type { TaskCard } from './App';

// Endpoint and version scheme belong to your application.
export async function persistMove(
  detail: KanbanCardMoveDetail<TaskCard>,
  operationId: string,
  expectedVersion: string,
  signal?: AbortSignal,
): Promise<unknown> {
  const response = await fetch('/api/cards/move', {
    method: 'POST', signal,
    headers: { 'Content-Type': 'application/json', 'If-Match': expectedVersion },
    body: JSON.stringify({ operationId, cards: detail.changedCards }),
  });
  if (response.status === 409 || response.status === 412) {
    throw new Error('The board changed on the server. Reconcile before retrying.');
  }
  if (!response.ok) throw new Error(`Saving failed (${response.status}).`);
  return response.json();
}
```

Generate an operation ID once per logical operation and reuse it on retries.
The server should enforce version preconditions, validate the complete batch,
and return authoritative cards and a new version. The client must handle
pending, rejected and conflicting operations visibly.

Because `kanbancardmove` describes an already committed local change, this
function alone does not provide approval or rollback. A failure must not restore
an old whole-board snapshot over unrelated later edits. Add an explicit
transaction/reconciliation policy before using optimistic server persistence.
Handle create, update and delete as well as movement, including server-assigned
IDs. See the [persistence guide](https://pro.rv-grid.com/guides/kanban/events-methods/)
for the integration boundary.

## Verify the example

The accompanying verification script extracts the exact marked files from this
article, checks them against the pinned published packages and builds them with
Vite. Its browser mode exercises the resulting app under StrictMode, including
editing, creation, deletion, movement, reload, empty storage and save failures.

From the documentation checkout, with the standalone Kanban showcase's pinned
dependencies installed:

```bash
node scripts/verify-kanban-tutorial.mjs
node scripts/verify-kanban-tutorial.mjs --browser
```

For another consumer installation, pass `--consumer=/absolute/path/to/project`.
The verifier rejects dependency versions that do not match this tutorial.

<CommercialFaq id="faq" />

## Where to go next

- [Kanban product page](/kanban/)
- [Kanban implementation guide](https://pro.rv-grid.com/guides/kanban/)
- [Packaged editor](https://pro.rv-grid.com/guides/kanban/card-editor/)
- [React grid integration](/guide/react/)
- [Four-framework reference source](https://github.com/revolist/kanban)
- [Interactive Kanban showcase](https://kanban.rv-grid.com/)
