---
title: "React Kanban Board Tutorial: Build a Drag-and-Drop Board with TypeScript"
description: "Build a React Kanban board with TypeScript. Add cards, columns, drag-and-drop, editing, WIP limits, local persistence, and production API sync."
outline: deep
date: 2026-08-09
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
      content: Build a production-ready React Kanban board with typed cards, drag-and-drop, editing, WIP limits, local persistence, and an API-ready data model.
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
        "description": "Build a React Kanban board with TypeScript, drag-and-drop cards, editing, WIP limits, local persistence, and production API synchronization.",
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
        "datePublished": "2026-08-07",
        "dateModified": "2026-08-07",
        "proficiencyLevel": "Intermediate",
        "dependencies": "React, TypeScript, Vite, RevoGrid Kanban"
      }
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I build a React Kanban board with drag-and-drop?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use a typed flat array of card records, define workflow columns, enable the RevoGrid Kanban plugin, and persist the changedCards batch emitted after every move. The board handles pointer, touch, and keyboard movement while the React application remains the owner of state."
            }
          },
          {
            "@type": "Question",
            "name": "Does RevoGrid Kanban support TypeScript?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Cards, workflow configuration, editor fields, and event payloads can all be typed in a React and TypeScript project."
            }
          },
          {
            "@type": "Question",
            "name": "How should I persist Kanban card order?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Persist every record in the kanbancardmove event's changedCards array. It contains moved cards and any additional cards whose fractional ranks were rebalanced."
            }
          },
          {
            "@type": "Question",
            "name": "Can WIP limits block a card move?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Add wipLimit to a workflow column and set wipBehavior to block. RevoGrid then rejects a move that would leave the destination above its configured limit."
            }
          },
          {
            "@type": "Question",
            "name": "Is the RevoGrid Kanban component free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The RevoGrid data grid core is MIT licensed. The production Kanban plugin and card editor are included in RevoGrid Pro Advanced and can be evaluated through the private npm trial."
            }
          }
        ]
      }
---

# React Kanban Board Tutorial: Build a Drag-and-Drop Board with TypeScript

![React Kanban board with draggable cards and workflow columns](https://raw.githubusercontent.com/revolist/kanban/main/assets/screenshots/overview.webp)

A basic React Kanban board is easy to sketch: map a few arrays into columns, make each task draggable, and update state in an `onDragEnd` callback.

The difficult part starts after the demo works.

A production board also needs stable card ordering, editing, validation, capacity rules, keyboard interaction, persistence, and a data model that can still be used in tables, reports, APIs, and other product views. Rebuilding all of that around a generic drag-and-drop library quickly turns a small UI feature into a maintained subsystem.

In this tutorial, we will build a complete **React Kanban board with TypeScript** using the [RevoGrid Kanban component](/kanban/). The final app includes:

- typed cards and workflow columns;
- drag-and-drop within and between columns;
- a card editor for creating, updating, and deleting tasks;
- WIP limits that block invalid moves;
- persistence in `localStorage`;
- an event model ready for REST, GraphQL, or real-time backends;
- a complete runnable Vite example.

You can also inspect the [live Kanban showcase](https://kanban.rv-grid.com/demo/) and the [React, Vue, Angular, and TypeScript reference source](https://github.com/revolist/kanban).

::: info RevoGrid Kanban availability
The RevoGrid core data grid is MIT licensed. Kanban and its packaged card editor are part of **RevoGrid Pro Advanced**. The installation below uses the private npm trial packages so the example can be evaluated before switching to the licensed production package names.
:::

## What we are building

Our board has four workflow stages:

| Column | Purpose | WIP limit |
| --- | --- | ---: |
| Backlog | Work not yet started | No limit |
| In progress | Active implementation | 3 cards |
| Review | Work waiting for verification | 2 cards |
| Done | Completed work | No limit |

Each card is an ordinary TypeScript object with an ID, title, description, workflow status, numeric order, priority, story points, assignees, tags, and a due date.

The important architectural decision is that we will **not** store a separate array inside every column. The application owns one canonical flat array:

```ts
TaskCard[]
```

The board projects those records into columns using the `status` field and sorts them using the `order` field. That gives us one data model for the Kanban board, a normal data grid, API payloads, exports, reporting, and persistence.

## Why use a React Kanban component instead of building drag-and-drop from scratch?

A drag-and-drop package solves pointer movement. It does not automatically solve the workflow model around it.

For a maintained product, you still need to decide:

- how cards are identified and ordered;
- how a move across columns changes the source data;
- what happens when two cards receive nearby order values;
- whether a move is allowed by WIP, permissions, or transition rules;
- how touch and keyboard users move cards;
- how card creation, editing, and deletion reach the backend;
- how the board behaves with thousands of cards;
- how board state stays consistent with a table or another view.

RevoGrid Kanban treats the board as a workflow projection over `grid.source`. Pointer, touch, keyboard, context-menu, and programmatic moves pass through the same board rules. Your React application remains responsible for the canonical records and persistence rather than surrendering state ownership to a closed task-management model.

That distinction is especially useful when the Kanban board belongs inside an operational application rather than being the entire application.

## Prerequisites

This guide assumes you are comfortable with:

- React functional components;
- TypeScript interfaces or type aliases;
- React state and effects;
- basic npm and Vite usage.

Use a current Node.js LTS release and request [RevoGrid Pro trial access](/trial/) before running the private-registry installation commands.

## Step 1: Create the React and TypeScript project

Start with the Vite React TypeScript template:

```bash
npm create vite@latest react-kanban-board -- --template react-ts
cd react-kanban-board
npm install
```

Configure the RevoGrid trial registry and authenticate with the credentials provided for your trial:

```bash
npm config set "@revolist:registry=https://trial.rv-grid.com"
npm login --registry=https://trial.rv-grid.com
```

Install the RevoGrid core, React wrapper, Pro trial package, and Enterprise trial package:

```bash
npm install \
  @revolist/revogrid \
  @revolist/react-datagrid \
  @revolist/rv-pro-trial \
  @revolist/rv-enterprise-trial
```

The React wrapper renders the same RevoGrid core used by other framework integrations. Kanban is supplied by the Enterprise plugin package, while its visual styles are loaded from the Pro and Enterprise stylesheets.

For a licensed project, replace the trial package imports with `@revolist/revogrid-pro` and `@revolist/revogrid-enterprise` according to the production installation guide.

## Step 2: Model cards as canonical TypeScript records

A card needs three workflow fields at minimum:

- a stable ID;
- a column value;
- a numeric order value.

RevoGrid uses `id`, `status`, and `order` by default, although all three field names are configurable.

```ts
import type { DataType } from '@revolist/revogrid';

type TaskStatus = 'backlog' | 'in-progress' | 'review' | 'done';
type TaskPriority = 'High' | 'Medium' | 'Low';

export type TaskCard = DataType & {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  order: number;
  priority: TaskPriority;
  points: number;
  tags: string[];
  assignees: string[];
  dueDate: string;
  color: string;
};
```

The `status` value decides which workflow column receives the card. The `order` value decides its position inside that column.

Use spaced numeric ranks such as `1000`, `2000`, and `3000` for seed data. When a card is dropped between two existing cards, the board can assign an intermediate rank instead of rewriting every record on every move. If ranks eventually become too close, the destination bucket is rebalanced and the affected records are included in the move event.

Here is a small initial dataset:

```ts
const INITIAL_CARDS: TaskCard[] = [
  {
    id: 'TASK-101',
    title: 'Define onboarding metrics',
    description: 'Agree on activation and first-value events.',
    status: 'backlog',
    order: 1000,
    priority: 'High',
    points: 5,
    tags: ['Product'],
    assignees: ['Maya'],
    dueDate: '2026-08-14',
    color: '#7c3aed',
  },
  {
    id: 'TASK-102',
    title: 'Build account checklist',
    description: 'Add a reusable checklist to the setup flow.',
    status: 'in-progress',
    order: 1000,
    priority: 'Medium',
    points: 3,
    tags: ['Frontend'],
    assignees: ['Jon'],
    dueDate: '2026-08-12',
    color: '#2563eb',
  },
];
```

This flat source is simpler to persist than a nested object such as `{ backlog: [], inProgress: [], done: [] }`. A move changes fields on records instead of moving objects between competing state containers.

## Step 3: Define data-grid columns and workflow columns

RevoGrid Kanban uses two related column definitions:

1. `grid.columns` describes the canonical fields for table mode, editing, and the underlying source schema.
2. `kanban.columns` describes workflow stages displayed by the board.

The data-grid columns can remain useful even when the board is active:

```ts
import type { ColumnRegular } from '@revolist/revogrid';

const GRID_COLUMNS: ColumnRegular[] = [
  { prop: 'id', name: 'ID', size: 110, readonly: true },
  { prop: 'title', name: 'Title', size: 260 },
  { prop: 'status', name: 'Status', size: 130 },
  { prop: 'priority', name: 'Priority', size: 110 },
  { prop: 'points', name: 'Points', size: 90 },
  { prop: 'dueDate', name: 'Due date', size: 130 },
];
```

Now define the workflow:

```ts
import type { KanbanConfig } from '@revolist/rv-enterprise-trial';

const KANBAN_CONFIG: KanbanConfig<TaskCard> = {
  idField: 'id',
  columnField: 'status',
  orderField: 'order',
  columns: [
    { prop: 'backlog', name: 'Backlog', size: 300 },
    {
      prop: 'in-progress',
      name: 'In progress',
      size: 300,
      wipLimit: 3,
    },
    {
      prop: 'review',
      name: 'Review',
      size: 300,
      wipLimit: 2,
    },
    { prop: 'done', name: 'Done', size: 300 },
  ],
  wipBehavior: 'block',
  card: {
    titleField: 'title',
    descriptionField: 'description',
    priorityField: 'priority',
    tagsField: 'tags',
    assigneeField: 'assignees',
    dueDateField: 'dueDate',
    colorField: 'color',
  },
  labels: {
    emptyColumn: 'Drop a task here',
  },
  cardRowHeight: 180,
};
```

The card mapping keeps domain field names under your control. You do not need to rename your API model to match a fixed visual component schema.

## Step 4: Enable the Kanban and card-editor plugins

The board itself is enabled by `KanbanPlugin`. The packaged editor is enabled by `KanbanCardEditorDialogPlugin`.

```ts
import {
  KanbanCardEditorDialogPlugin,
  KanbanPlugin,
} from '@revolist/rv-enterprise-trial';

const KANBAN_PLUGINS = [
  KanbanPlugin,
  KanbanCardEditorDialogPlugin,
];
```

Keep plugin, source, column, and configuration references stable. Recreating large configuration objects on every React render can cause avoidable work and, with some controlled props, repeated updates.

Module-level constants are ideal for static configuration. Use `useMemo` when configuration depends on component props.

The minimal React Kanban component now looks like this:

```tsx
import { RevoGrid } from '@revolist/react-datagrid';

export function TaskBoard({ cards }: { cards: TaskCard[] }) {
  return (
    <RevoGrid
      source={cards}
      columns={GRID_COLUMNS}
      plugins={KANBAN_PLUGINS}
      kanban={KANBAN_CONFIG}
      theme="compact"
      resize
    />
  );
}
```

At this point, cards render in their workflow columns and can be reordered or moved across columns.

## Step 5: Handle drag-and-drop without rebuilding card order yourself

Many drag-and-drop Kanban React tutorials perform three manual steps after a drop:

1. remove a card from its old array;
2. insert it into a new array;
3. renumber every card in one or both columns.

RevoGrid emits a canonical move result instead. Listen for `kanbancardmove` and persist `event.detail.changedCards`.

```ts
interface CardMoveDetail {
  changedCards: readonly TaskCard[];
}

function mergeChangedCards(
  current: TaskCard[],
  changedCards: readonly TaskCard[],
): TaskCard[] {
  const changedById = new Map(
    changedCards.map((card) => [card.id, card]),
  );

  return current.map(
    (card) => changedById.get(card.id) ?? card,
  );
}
```

The event batch matters because a move can change more than the card under the pointer. When fractional ranks are rebalanced, every affected card appears in `changedCards`. Persisting only the visibly moved card can leave the backend with a different order from the UI.

In React, attach the custom event to the wrapped grid element through a ref:

```tsx
const gridRef = useRef<any>(null);

useEffect(() => {
  const grid = gridRef.current as EventTarget | null;
  if (!grid) return;

  const onMove = (event: Event) => {
    const { changedCards } = (
      event as CustomEvent<CardMoveDetail>
    ).detail;

    setCards((current) =>
      mergeChangedCards(current, changedCards),
    );
  };

  grid.addEventListener('kanbancardmove', onMove);
  return () => grid.removeEventListener('kanbancardmove', onMove);
}, []);
```

The same move pipeline is used for pointer, touch, keyboard, context-menu, and public API movement. That prevents business rules from being applied only to mouse dragging.

## Step 6: Add card creation, editing, and deletion

The editor plugin provides a schema-driven dialog. It maps standard card fields automatically and lets you add domain-specific fields.

This configuration adds a validated `points` field, generates stable card IDs, and creates sensible defaults:

```ts
import type {
  KanbanCardEditorDialogOptions,
} from '@revolist/rv-enterprise-trial';

const EDITOR_CONFIG: KanbanCardEditorDialogOptions<TaskCard> = {
  fields: [
    {
      id: 'points',
      label: 'Story points',
      kind: 'number',
      field: 'points',
      fullWidth: false,
      format: (value) =>
        value === undefined ? '' : String(value),
      parse: (value) => Number(value),
      validate: (value) =>
        Number(value) > 0
          ? undefined
          : 'Story points must be greater than zero.',
    },
  ],
  createCardId: () => `TASK-${crypto.randomUUID()}`,
  createDraft: () => ({
    title: '',
    description: '',
    priority: 'Medium',
    points: 3,
    tags: ['New'],
    assignees: [],
    dueDate: new Date(Date.now() + 7 * 86_400_000)
      .toISOString()
      .slice(0, 10),
    color: '#2563eb',
  }),
  confirmDelete: true,
  confirmDiscard: true,
};
```

Pass it to the React wrapper:

```tsx
<RevoGrid
  kanbanCardEditorDialog={EDITOR_CONFIG}
  // other props
/>
```

The editor applies the mutation to the board and emits canonical CRUD events:

- `kanbancardcreate`;
- `kanbancardupdate`;
- `kanbancarddelete`.

Listen to those events to update React state and send the same mutations to your backend.

## Step 7: Enforce WIP limits

A WIP limit is a workflow rule, not just a number displayed beside a column title.

We already configured:

```ts
{
  prop: 'in-progress',
  name: 'In progress',
  wipLimit: 3,
}
```

and:

```ts
wipBehavior: 'block'
```

With `block`, a proposed move is rejected when its final result would exceed the destination limit. With `warn`, the move is allowed but the board reports the capacity problem.

The validation runs against the whole proposed operation. This becomes important when users move multiple selected cards together: RevoGrid evaluates the final batch instead of accepting the first card and rejecting the rest halfway through.

For more advanced workflows, you can also add:

- `allowedFrom` to restrict source columns;
- lane-specific limits when using swimlanes;
- `canDrag`, `canEdit`, `canSelect`, and `canDrop` rules;
- `beforekanbancardmove` to synchronously cancel a move.

See the [Kanban workflow documentation](https://pro.rv-grid.com/guides/kanban/) for the complete rules surface.

## Step 8: Persist the React Kanban board

For the runnable tutorial, we will use `localStorage`. The same event handlers can later call an API.

Load state lazily so storage is read only during initial state creation:

```ts
const STORAGE_KEY = 'revogrid-react-kanban-cards';

function loadCards(): TaskCard[] {
  if (typeof window === 'undefined') return cloneInitialCards();

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return cloneInitialCards();

    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : cloneInitialCards();
  } catch {
    return cloneInitialCards();
  }
}
```

Then persist whenever React state changes:

```ts
const [cards, setCards] = useState<TaskCard[]>(loadCards);

useEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
}, [cards]);
```

`localStorage` is appropriate for a tutorial and a personal board. A multi-user product should persist event payloads to a server and return versioned canonical records.

## Complete runnable React Kanban board example

The following files form a complete Vite application.

### `src/App.tsx`

```tsx
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { RevoGrid } from '@revolist/react-datagrid';
import type {
  ColumnRegular,
  DataType,
} from '@revolist/revogrid';
import {
  KanbanCardEditorDialogPlugin,
  KanbanPlugin,
  type KanbanCardEditorDialogOptions,
  type KanbanConfig,
} from '@revolist/rv-enterprise-trial';

type TaskStatus =
  | 'backlog'
  | 'in-progress'
  | 'review'
  | 'done';

type TaskPriority = 'High' | 'Medium' | 'Low';

type TaskCard = DataType & {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  order: number;
  priority: TaskPriority;
  points: number;
  tags: string[];
  assignees: string[];
  dueDate: string;
  color: string;
};

type CardMoveDetail = {
  changedCards: readonly TaskCard[];
};

type CardCreateDetail = {
  card: TaskCard;
  sourceIndex: number;
};

type CardUpdateDetail = {
  card: TaskCard;
};

type CardDeleteDetail = {
  cardIds: readonly string[];
};

const STORAGE_KEY = 'revogrid-react-kanban-cards';

const INITIAL_CARDS: TaskCard[] = [
  {
    id: 'TASK-101',
    title: 'Define onboarding metrics',
    description: 'Agree on activation and first-value events.',
    status: 'backlog',
    order: 1000,
    priority: 'High',
    points: 5,
    tags: ['Product'],
    assignees: ['Maya'],
    dueDate: '2026-08-14',
    color: '#7c3aed',
  },
  {
    id: 'TASK-102',
    title: 'Write empty-state copy',
    description: 'Explain the next action for a new workspace.',
    status: 'backlog',
    order: 2000,
    priority: 'Low',
    points: 2,
    tags: ['Content'],
    assignees: ['Ari'],
    dueDate: '2026-08-18',
    color: '#64748b',
  },
  {
    id: 'TASK-103',
    title: 'Build account checklist',
    description: 'Add a reusable checklist to the setup flow.',
    status: 'in-progress',
    order: 1000,
    priority: 'Medium',
    points: 3,
    tags: ['Frontend'],
    assignees: ['Jon'],
    dueDate: '2026-08-12',
    color: '#2563eb',
  },
  {
    id: 'TASK-104',
    title: 'Instrument trial events',
    description: 'Track each step from signup to first project.',
    status: 'in-progress',
    order: 2000,
    priority: 'High',
    points: 5,
    tags: ['Analytics'],
    assignees: ['Nora'],
    dueDate: '2026-08-13',
    color: '#0891b2',
  },
  {
    id: 'TASK-105',
    title: 'Review keyboard flow',
    description: 'Verify focus, card pickup, movement, and cancel.',
    status: 'review',
    order: 1000,
    priority: 'High',
    points: 3,
    tags: ['Accessibility'],
    assignees: ['Iris'],
    dueDate: '2026-08-11',
    color: '#d97706',
  },
  {
    id: 'TASK-106',
    title: 'Publish release notes',
    description: 'Summarize the completed onboarding changes.',
    status: 'done',
    order: 1000,
    priority: 'Medium',
    points: 2,
    tags: ['Release'],
    assignees: ['Theo'],
    dueDate: '2026-08-08',
    color: '#059669',
  },
];

const GRID_COLUMNS: ColumnRegular[] = [
  { prop: 'id', name: 'ID', size: 110, readonly: true },
  { prop: 'title', name: 'Title', size: 260 },
  { prop: 'status', name: 'Status', size: 130 },
  { prop: 'priority', name: 'Priority', size: 110 },
  { prop: 'points', name: 'Points', size: 90 },
  { prop: 'dueDate', name: 'Due date', size: 130 },
];

const KANBAN_CONFIG: KanbanConfig<TaskCard> = {
  idField: 'id',
  columnField: 'status',
  orderField: 'order',
  columns: [
    { prop: 'backlog', name: 'Backlog', size: 300 },
    {
      prop: 'in-progress',
      name: 'In progress',
      size: 300,
      wipLimit: 3,
    },
    {
      prop: 'review',
      name: 'Review',
      size: 300,
      wipLimit: 2,
    },
    { prop: 'done', name: 'Done', size: 300 },
  ],
  wipBehavior: 'block',
  card: {
    titleField: 'title',
    descriptionField: 'description',
    priorityField: 'priority',
    tagsField: 'tags',
    assigneeField: 'assignees',
    dueDateField: 'dueDate',
    colorField: 'color',
  },
  labels: {
    emptyColumn: 'Drop a task here',
  },
  cardRowHeight: 180,
};

const EDITOR_CONFIG: KanbanCardEditorDialogOptions<TaskCard> = {
  fields: [
    {
      id: 'points',
      label: 'Story points',
      kind: 'number',
      field: 'points',
      fullWidth: false,
      format: (value) =>
        value === undefined ? '' : String(value),
      parse: (value) => Number(value),
      validate: (value) =>
        Number(value) > 0
          ? undefined
          : 'Story points must be greater than zero.',
    },
  ],
  createCardId: () => `TASK-${crypto.randomUUID()}`,
  createDraft: () => ({
    title: '',
    description: '',
    priority: 'Medium',
    points: 3,
    tags: ['New'],
    assignees: [],
    dueDate: new Date(Date.now() + 7 * 86_400_000)
      .toISOString()
      .slice(0, 10),
    color: '#2563eb',
  }),
  confirmDelete: true,
  confirmDiscard: true,
};

const KANBAN_PLUGINS = [
  KanbanPlugin,
  KanbanCardEditorDialogPlugin,
];

function cloneInitialCards(): TaskCard[] {
  return INITIAL_CARDS.map((card) => ({
    ...card,
    tags: [...card.tags],
    assignees: [...card.assignees],
  }));
}

function loadCards(): TaskCard[] {
  if (typeof window === 'undefined') return cloneInitialCards();

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return cloneInitialCards();

    const parsed: unknown = JSON.parse(saved);
    return Array.isArray(parsed)
      ? (parsed as TaskCard[])
      : cloneInitialCards();
  } catch {
    return cloneInitialCards();
  }
}

function mergeChangedCards(
  current: TaskCard[],
  changedCards: readonly TaskCard[],
): TaskCard[] {
  const changedById = new Map(
    changedCards.map((card) => [card.id, card]),
  );

  return current.map(
    (card) => changedById.get(card.id) ?? card,
  );
}

function insertCard(
  current: TaskCard[],
  card: TaskCard,
  sourceIndex: number,
): TaskCard[] {
  const next = current.filter((item) => item.id !== card.id);
  const safeIndex = Math.max(0, Math.min(sourceIndex, next.length));
  next.splice(safeIndex, 0, card);
  return next;
}

export default function App() {
  const gridRef = useRef<any>(null);
  const [cards, setCards] = useState<TaskCard[]>(loadCards);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
  }, [cards]);

  const handleMove = useCallback((event: Event) => {
    const detail = (
      event as CustomEvent<CardMoveDetail>
    ).detail;

    setCards((current) =>
      mergeChangedCards(current, detail.changedCards),
    );
  }, []);

  const handleCreate = useCallback((event: Event) => {
    const detail = (
      event as CustomEvent<CardCreateDetail>
    ).detail;

    setCards((current) =>
      insertCard(current, detail.card, detail.sourceIndex),
    );
  }, []);

  const handleUpdate = useCallback((event: Event) => {
    const detail = (
      event as CustomEvent<CardUpdateDetail>
    ).detail;

    setCards((current) =>
      current.map((card) =>
        card.id === detail.card.id ? detail.card : card,
      ),
    );
  }, []);

  const handleDelete = useCallback((event: Event) => {
    const detail = (
      event as CustomEvent<CardDeleteDetail>
    ).detail;
    const deletedIds = new Set(detail.cardIds);

    setCards((current) =>
      current.filter((card) => !deletedIds.has(card.id)),
    );
  }, []);

  useEffect(() => {
    const grid = gridRef.current as EventTarget | null;
    if (!grid) return;

    grid.addEventListener('kanbancardmove', handleMove);
    grid.addEventListener('kanbancardcreate', handleCreate);
    grid.addEventListener('kanbancardupdate', handleUpdate);
    grid.addEventListener('kanbancarddelete', handleDelete);

    return () => {
      grid.removeEventListener('kanbancardmove', handleMove);
      grid.removeEventListener('kanbancardcreate', handleCreate);
      grid.removeEventListener('kanbancardupdate', handleUpdate);
      grid.removeEventListener('kanbancarddelete', handleDelete);
    };
  }, [handleCreate, handleDelete, handleMove, handleUpdate]);

  const resetBoard = () => {
    setCards(cloneInitialCards());
  };

  return (
    <main className="app-shell">
      <header className="app-toolbar">
        <div>
          <p className="eyebrow">Product delivery</p>
          <h1>React Kanban board</h1>
          <p className="toolbar-copy">
            Drag cards, use the card menu to edit, and test the WIP limits.
          </p>
        </div>

        <button type="button" onClick={resetBoard}>
          Reset board
        </button>
      </header>

      <section className="board-shell" aria-label="Product task board">
        <RevoGrid
          ref={gridRef}
          className="kanban-grid"
          source={cards}
          columns={GRID_COLUMNS}
          plugins={KANBAN_PLUGINS}
          kanban={KANBAN_CONFIG}
          kanbanCardEditorDialog={EDITOR_CONFIG}
          theme="compact"
          resize
        />
      </section>
    </main>
  );
}
```

### `src/main.tsx`

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@revolist/rv-pro-trial/dist/rv-pro-trial.css';
import '@revolist/rv-enterprise-trial/dist/rv-enterprise-trial.css';
import './styles.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

### `src/styles.css`

```css
:root {
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", sans-serif;
  color: #172033;
  background: #f4f7fb;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
}

button {
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  padding: 10px 14px;
  background: #ffffff;
  color: #172033;
  font: inherit;
  font-weight: 650;
  cursor: pointer;
}

button:hover {
  background: #f8fafc;
}

.app-shell {
  min-height: 100vh;
  padding: 24px;
}

.app-toolbar {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  max-width: 1480px;
  margin: 0 auto 18px;
}

.app-toolbar h1,
.app-toolbar p {
  margin: 0;
}

.app-toolbar h1 {
  margin-top: 4px;
  font-size: clamp(1.75rem, 3vw, 2.5rem);
}

.eyebrow {
  color: #2563eb;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.toolbar-copy {
  margin-top: 6px !important;
  color: #64748b;
}

.board-shell {
  width: min(1480px, 100%);
  height: calc(100vh - 150px);
  min-height: 620px;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid #dbe3ef;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 18px 50px rgb(15 23 42 / 8%);
}

.kanban-grid {
  width: 100%;
  height: 100%;
}

@media (max-width: 700px) {
  .app-shell {
    padding: 14px;
  }

  .app-toolbar {
    align-items: flex-start;
    flex-direction: column;
  }

  .board-shell {
    height: calc(100vh - 205px);
    min-height: 540px;
  }
}
```

Run the application:

```bash
npm run dev
```

Open the local Vite URL, move cards between columns, and refresh the page. The latest board state should remain in place.

## How persistence should work with a real API

Replacing `localStorage` does not require replacing the board. The main change is what your event handlers do after receiving canonical mutation payloads.

### Persist a card move

Send the complete changed-card batch:

```ts
async function persistMove(changedCards: readonly TaskCard[]) {
  const response = await fetch('/api/tasks/reorder', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ cards: changedCards }),
  });

  if (!response.ok) {
    throw new Error('Could not persist the card move.');
  }
}
```

A production endpoint should update the batch atomically. Otherwise, another client can observe a partially updated order.

### Use optimistic updates carefully

The board has already committed the move by the time `kanbancardmove` fires, so updating React state immediately gives users an optimistic experience.

For a robust server workflow:

1. merge `changedCards` into local state;
2. send the whole batch with a board or record version;
3. let the server validate permissions and concurrency;
4. replace local records with the canonical server response;
5. restore or refetch state when the request fails.

For rules that must stop the UI before it moves, use a synchronous `beforekanbancardmove` listener or configure Kanban rules in the board. Server-only authorization must still be enforced on the backend.

### Example with TanStack Query

The same event can trigger a mutation:

```ts
const moveMutation = useMutation({
  mutationFn: persistMove,
  onError: () => {
    queryClient.invalidateQueries({ queryKey: ['tasks'] });
  },
});

const handleMove = (event: Event) => {
  const { changedCards } = (
    event as CustomEvent<CardMoveDetail>
  ).detail;

  setCards((current) =>
    mergeChangedCards(current, changedCards),
  );

  moveMutation.mutate(changedCards);
};
```

This keeps RevoGrid responsible for board interaction and TanStack Query responsible for remote state lifecycle.

## Add workflow transition rules

WIP limits answer “is there room?” Transition rules answer “is this movement allowed?”

For example, a team may require tasks to pass through review before completion. Add `allowedFrom` to the destination columns:

```ts
columns: [
  {
    prop: 'backlog',
    name: 'Backlog',
    allowedFrom: ['backlog', 'in-progress'],
  },
  {
    prop: 'in-progress',
    name: 'In progress',
    wipLimit: 3,
    allowedFrom: ['backlog', 'in-progress', 'review'],
  },
  {
    prop: 'review',
    name: 'Review',
    wipLimit: 2,
    allowedFrom: ['in-progress', 'review', 'done'],
  },
  {
    prop: 'done',
    name: 'Done',
    allowedFrom: ['review', 'done'],
  },
]
```

Now a task cannot jump directly from Backlog to Done.

For user-specific permissions, use rule callbacks instead of hard-coded column lists. A rule can inspect the card, source column, target, current user, or other application state and return either `true` or a reason explaining why the action is blocked.

## Add swimlanes when one workflow is not enough

Columns describe workflow stages. Swimlanes divide every stage by another dimension, such as:

- team;
- product area;
- release;
- priority class;
- customer account;
- service tier.

Add a field to the card model:

```ts
type TaskCard = DataType & {
  // existing fields
  team: 'Product' | 'Platform';
};
```

Then configure lanes:

```ts
const KANBAN_CONFIG: KanbanConfig<TaskCard> = {
  // existing configuration
  swimlaneField: 'team',
  swimlanes: [
    {
      id: 'Product',
      title: 'Product team',
      collapsible: true,
    },
    {
      id: 'Platform',
      title: 'Platform team',
      collapsible: true,
      wipLimits: {
        review: 3,
      },
    },
  ],
};
```

A card move can then update its workflow stage, its lane, its rank, or all three in one canonical mutation batch.

## React performance considerations

A Kanban board is not automatically fast because it uses React. Rendering every card into the DOM can become expensive as the board grows, especially when cards contain avatars, badges, dates, progress indicators, and interactive controls.

RevoGrid Kanban reuses the grid's row and column virtualization. That keeps the rendered DOM bounded instead of mounting the entire board at once.

Follow these React-specific practices:

### Keep configuration stable

Do not define `columns`, `plugins`, or a large `kanban` object inline unless their values genuinely depend on each render.

Use module constants:

```ts
const KANBAN_PLUGINS = [KanbanPlugin];
```

or memoize dynamic configuration:

```ts
const kanban = useMemo(
  () => createKanbanConfig(currentUser),
  [currentUser],
);
```

### Keep the source canonical

Do not maintain both `cards` and a separately grouped `cardsByColumn` state object. Derive secondary views from the canonical source when needed.

### Persist changed records, not the whole board

The move event already tells you which records changed. Send that batch rather than serializing thousands of unchanged cards after every drop.

### Keep custom card content focused

Virtualization controls the number of mounted cards, but expensive card templates can still affect scrolling. Avoid unnecessary React roots, oversized images, and synchronous calculations inside each card.

## Accessibility and keyboard movement

Drag-and-drop must not require a mouse.

RevoGrid Kanban cards are focusable and support keyboard pickup, movement, cancellation, and live feedback. Pointer Events provide one interaction model for mouse, pen, and touch input.

When adding custom card UI:

- preserve meaningful labels for the card and its actions;
- do not hide focus indicators;
- make buttons actual buttons rather than clickable `<div>` elements;
- avoid using color as the only status signal;
- respect reduced-motion preferences;
- test WIP and transition feedback without a pointer.

Accessibility is easier to preserve when customization replaces content inside a managed interaction shell rather than replacing the entire drag-and-drop mechanism.

## Common React Kanban board mistakes

### Storing cards in separate column arrays

Nested arrays look convenient at first but complicate API synchronization, cross-column moves, reporting, and switching between board and table views.

Use a flat canonical array with `status` and `order` fields.

### Persisting only the dragged card

A rank rebalance can update additional cards. Always persist `changedCards`, not only `cards[0]` or the card ID under the pointer.

### Recreating configuration on every render

Inline object and array props receive new identities on every render. Keep stable references unless the configuration truly changes.

### Treating WIP as decoration

A red counter does not enforce capacity. Choose `warn` or `block` behavior and validate the complete proposed move.

### Applying permissions only after a move

Use board rules or `beforekanbancardmove` for interactions that must be stopped before commit. Keep backend authorization as the final source of truth.

### Assuming desktop drag-and-drop is enough

Test pointer, touch, and keyboard workflows. A board used on tablets or by keyboard users needs more than HTML5 mouse drag events.

### Forgetting client-only rendering in SSR apps

RevoGrid uses browser APIs. In Next.js or another SSR framework, render the React Kanban component in a client component or load it dynamically on the client.

## React Kanban board FAQ

### What is the best data model for a React Kanban board?

Use one flat array of typed card records. Give every card a stable ID, workflow column field, and numeric order field. Add lane, owner, priority, due date, and other business fields directly to the same record. This keeps the board compatible with APIs, tables, filters, exports, and reporting.

### How do I build drag and drop Kanban in React without manual array management?

Use a React Kanban component that emits canonical move results. With RevoGrid, listen for `kanbancardmove` and merge `event.detail.changedCards` into application state. You do not need to manually remove, insert, and renumber nested column arrays.

### Can a React Kanban component enforce WIP limits?

Yes. In RevoGrid Kanban, add `wipLimit` to a workflow column and choose `wipBehavior: 'warn'` or `wipBehavior: 'block'`. Limits can also be refined for individual swimlanes.

### How do I save card order to a database?

Persist the full `changedCards` array emitted after a move. Each record contains its updated column, order, and lane values. Update that batch atomically and return canonical server records when concurrency or validation can change the result.

### Can users create and edit cards inside the board?

Yes. Add `KanbanCardEditorDialogPlugin` and pass `kanbanCardEditorDialog` options. The packaged editor supports standard fields, custom fields, validation, create defaults, deletion confirmation, and CRUD events.

### Does the board support keyboard and touch interaction?

Yes. RevoGrid Kanban supports pointer input for mouse, pen, and touch, plus keyboard card pickup and movement. Custom card content should preserve the board's focus and accessibility semantics.

### Can I switch between a React data grid and Kanban view?

Yes. Both views use the same canonical `source` records. Enable the Kanban configuration for workflow work and disable it to return to the data-grid representation without maintaining a second board-only data model.

### Is RevoGrid Kanban open source?

The RevoGrid core data grid is MIT licensed. The Kanban plugin and packaged editor are commercial RevoGrid Pro Advanced modules. A private npm trial is available for evaluation.

## Where to go next

This tutorial gives you a complete React Kanban board with TypeScript, drag-and-drop, editing, WIP limits, and persistence. From here, the most valuable production additions are usually:

1. server-side mutations with conflict handling;
2. user and role-based transition rules;
3. swimlanes for teams or releases;
4. search and board filtering;
5. undo and redo history;
6. custom card rendering that matches your product design system.

Use the following resources for the next step:

- [RevoGrid Kanban product page](/kanban/)
- [Kanban implementation documentation](https://pro.rv-grid.com/guides/kanban/)
- [React data grid guide](/guide/react/)
- [Kanban framework examples on GitHub](https://github.com/revolist/kanban)
- [Interactive Kanban demo](https://kanban.rv-grid.com/demo/)

A useful React Kanban board is not just a set of draggable lists. It is a workflow surface connected to real application data, product rules, accessibility, and persistence. Starting with that architecture prevents the prototype from becoming a rewrite when the board reaches production.
