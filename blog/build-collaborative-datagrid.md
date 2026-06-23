---
title: Build Collaborative Spreadsheets and Data Grids
description: Build real-time collaborative spreadsheet-like data grids, including multi-user editing, presence, conflict resolution, permissions, audit history & formulas.
date: 2026-06-20
author: Revolist
category: Data Grid
tags:
  - Data Grid
  - Collaboration
  - JavaScript
  - Spreadsheet
  - RevoGrid
image: /img/collaborative.png
imageAlt: RevoGrid collaborative data grid preview
head:
  - - meta
    - name: keywords
      content: collaborative data grid, real-time spreadsheet, Google Sheets alternative, RevoGrid Pro, multi-user editing, conflict resolution, spreadsheet-like grid, JavaScript data grid, Yjs data grid, collaborative spreadsheet
  - - meta
    - property: og:title
      content: Build Collaborative Spreadsheets and Data Grids with RevoGrid
  - - meta
    - property: og:description
      content: A practical guide to building Google Sheets-like collaborative grid experiences with RevoGrid and RevoGrid Pro.
  - - meta
    - property: og:type
      content: article
  - - meta
    - name: twitter:card
      content: summary_large_image
outline: deep
---

# Build Collaborative Spreadsheets and Data Grids

Daily we do not start by saying:

> “Let’s build Google Sheets inside our application.”

We start:

> “We need an editable table.”


<section class="workflow-escalation" aria-labelledby="workflow-escalation-title">
  <p id="workflow-escalation-title" class="workflow-escalation__eyebrow">Then the customer asks for one more thing.</p>

  <ol class="workflow-escalation__steps">
    <li>
      <span class="workflow-escalation__index">01</span>
      <span class="workflow-escalation__text">Copy and paste from Excel</span>
      <span class="workflow-escalation__mood" aria-label="clipboard and happy reaction">📋 😊</span>
    </li>
    <li>
      <span class="workflow-escalation__index">02</span>
      <span class="workflow-escalation__text">Formulas</span>
      <span class="workflow-escalation__mood" aria-label="formula and thinking reaction">📐 🤔</span>
    </li>
    <li>
      <span class="workflow-escalation__index">03</span>
      <span class="workflow-escalation__text">Comments</span>
      <span class="workflow-escalation__mood" aria-label="comment and concerned reaction">💬 😕</span>
    </li>
    <li>
      <span class="workflow-escalation__index">04</span>
      <span class="workflow-escalation__text">Who changed what?</span>
      <span class="workflow-escalation__mood" aria-label="eyes and stressed reaction">👀 😩</span>
    </li>
    <li>
      <span class="workflow-escalation__index">05</span>
      <span class="workflow-escalation__text">Several people editing the same data at the same time</span>
      <span class="workflow-escalation__mood" aria-label="people and anxious reaction">👥 😰</span>
    </li>
  </ol>

  <div class="workflow-escalation__turn">
    <p>And now things are getting complicated.</p>
    <strong>At that point, the table is no longer just a table.</strong>
  </div>

  <p class="workflow-escalation__conclusion">
    It becomes a <span>collaborative spreadsheet workflow</span>.
  </p>
</section>

That means the grid must handle more than rendering rows and columns. It needs real-time editing, user presence, conflict resolution, validation, permissions, audit history, and safe recovery when something goes wrong.

We'll explain here how to think about collaborative spreadsheet-like applications with [Data Grid](/), what features matter, and where [RevoGrid](/pro/) helps you build this faster.

## What “collaborative” means

In many products, collaboration only means:

* sharing a link;
* leaving comments;
* exporting a file;
* sending a report to another user.

For a spreadsheet-like data grid, collaboration means something much deeper.

A collaborative grid should allow:

* multiple users to work in the same grid at the same time;
* real-time synchronization of edits;
* user presence indicators;
* visible selected cells and ranges from other users;
* conflict detection when two users edit the same data;
* conflict resolution policies;
* pending changes and review workflows;
* backend validation before final commit;
* audit history for accepted changes;
* rollback or restore when needed;
* permissions by user, role, row, column, or cell.

A basic editable grid asks:

> Can this user edit this cell?

A collaborative grid asks:

> Can this user edit this cell right now, while other users may also be editing related data, without losing work, breaking formulas, or violating permissions?

That is a much harder problem.

It is also where RevoGrid Pro becomes valuable.

---

## Why collaborative spreadsheet UIs are hard

The UI looks simple.

A user clicks a cell and changes a value:

```txt
Budget Q3 = 120,000
```

But a collaborative application has to understand much more:

```ts
type CollaborativeCellChange = {
  documentId: string;
  sheetId: string;
  rowId: string;
  columnId: string;

  previousValue: unknown;
  nextValue: unknown;

  userId: string;
  clientId: string;
  operationId: string;

  baseVersion: number;
  createdAt: string;
};
```

Now imagine two users edit the same cell at nearly the same time.

Anna changes the value from `120,000` to `130,000`.
Mark changes the same value from `120,000` to `125,000`.

What should happen?

There is no single correct answer.

For a note field, the latest value may be fine.
For a finance field, silent overwrite is dangerous.
For a workflow status, one edit may need to be rejected.
For a locked row, neither edit should be allowed.
For a formula cell, the system may need to recalculate dependent values.

A real collaborative grid does not just send edits over WebSocket.

It needs a clear product model.

---

## Where this all fits

RevoGrid gives you the high-performance spreadsheet-like grid surface:

* virtualized rows and columns;
* inline editing;
* keyboard navigation;
* range selection;
* copy and paste workflows;
* custom cell renderers;
* custom editors;
* column types;
* filtering and sorting;
* framework integrations for React, Vue, Angular, Svelte, and plain JavaScript.

The collaboration stack uses more than one package. [RevoGrid Pro](/pro/) provides the grid-side helpers such as `EventManagerPlugin` and `CollaborativePresencePlugin`. Collaborative editing itself comes from the separate `@revolist/revogrid-collaborative-editing` package.

Together, they extend this foundation with advanced spreadsheet and workflow capabilities such as:

* normalized edit event management for collaborative write flows;
* collaborative editing through `@revolist/revogrid-collaborative-editing`;
* collaborative presence markers for remote focus and range selection;
* conflict handling;
* audit trail history;
* undo and redo history;
* formulas;
* validation;
* range copy preview;
* smart auto-fill;
* multi-range selection;
* Excel import/export;
* advanced filters;
* pivot tables;
* Gantt and scheduler modules.

The important architectural point is simple:

> RevoGrid should own the grid experience.
> Your application should own the business rules.

RevoGrid handles the editing surface, rendering, events, selection, custom cells, and spreadsheet-like UX.

Your application and backend handle:

* authentication;
* user roles;
* document access;
* row and column permissions;
* business validation;
* persistence;
* audit storage;
* conflict policy;
* final commit or rejection.

This separation keeps the system scalable and maintainable.

---

## The architecture of a collaborative grid

A production-grade collaborative spreadsheet usually has several layers.

| Layer                                 | Responsibility                                                        |
| ------------------------------------- | --------------------------------------------------------------------- |
| RevoGrid                              | Rendering, editing, selection, virtual scrolling, keyboard UX         |
| `EventManagerPlugin`                  | Normalizes cell, range, paste, autofill, and source-edit operations   |
| `CollaborativeEditingPlugin`          | Coordinates pending edits, commit adapter, conflicts, and acceptance  |
| `CollaborativePresencePlugin`         | Renders remote user focus, ranges, labels, and optional row patches   |
| Frontend app                          | State management, current user, pending UI, optimistic feedback       |
| Collaboration service                 | Rooms, real-time synchronization, acknowledgements                    |
| Backend                               | Permissions, validation, persistence, conflict policy, accepted state |
| Audit/history storage                 | Durable record of who changed what and when                          |

A typical edit flow looks like this:

```txt
User edits cell
  ↓
RevoGrid edit event
  ↓
Collaborative editing layer
  ↓
Local pending change
  ↓
Backend commit adapter
  ↓
Server validates permission and business rules
  ↓
Server accepts, rejects, or rewrites the change
  ↓
Other users receive the normalized update
  ↓
Presence, history, formulas, and UI state update
```

The key idea is that the backend remains authoritative.

The frontend can be optimistic, but final truth should come from the server.

---

## Use stable row and column identity

The first rule of collaborative grids:

> Never use visual row indexes as the identity of real data.

This is dangerous:

```ts
updateCell({
  rowIndex: 4,
  columnIndex: 2,
  value: 100
});
```

Why?

Because another user may sort, filter, group, insert, or delete rows. Row index `4` can mean different records in different views.

Use stable row and column identifiers instead:

```ts
updateCell({
  rowId: 'customer-acme',
  columnId: 'forecast_may',
  value: 100
});
```

A good row model:

```ts
type GridRow = {
  id: string;
  customerName: string;
  owner: string;
  status: 'draft' | 'review' | 'approved';
  forecastJan: number;
  forecastFeb: number;
  forecastMar: number;
  locked?: boolean;
  updatedAt?: string;
  updatedBy?: string;
};
```

A good column model:

```ts
type GridColumn = {
  prop: string;
  name: string;
  type?: 'text' | 'number' | 'date' | 'select' | 'formula' | 'status';
  readonly?: boolean;
};
```

Example:

```ts
const columns = [
  { prop: 'customerName', name: 'Customer' },
  { prop: 'owner', name: 'Owner' },
  { prop: 'status', name: 'Status' },
  { prop: 'forecastJan', name: 'Jan Forecast' },
  { prop: 'forecastFeb', name: 'Feb Forecast' },
  { prop: 'forecastMar', name: 'Mar Forecast' }
];

const source = [
  {
    id: 'customer-acme',
    customerName: 'Acme Corp',
    owner: 'Anna',
    status: 'review',
    forecastJan: 12000,
    forecastFeb: 14000,
    forecastMar: 18000
  }
];
```

Stable identity is the foundation for:

* real-time updates;
* conflict resolution;
* audit history;
* comments;
* restore actions;
* permissions;
* formulas;
* copy/paste transactions.

If identity is unstable, collaboration becomes unsafe.

---

## Represent edits as operations

A collaborative spreadsheet should not save the whole document after every change.

Each important user action should become an operation.

A single cell update:

```ts
type CellSetOperation = {
  type: 'cell.set';

  operationId: string;
  documentId: string;
  sheetId: string;

  rowId: string;
  columnId: string;

  previousValue: unknown;
  nextValue: unknown;

  userId: string;
  clientId: string;

  baseVersion: number;
  createdAt: string;
};
```

A range paste:

```ts
type RangePasteOperation = {
  type: 'range.paste';

  operationId: string;
  documentId: string;
  sheetId: string;

  startRowId: string;
  startColumnId: string;

  values: unknown[][];

  userId: string;
  clientId: string;

  baseVersion: number;
  createdAt: string;
};
```

A row insert:

```ts
type RowInsertOperation = {
  type: 'row.insert';

  operationId: string;
  documentId: string;
  sheetId: string;

  row: GridRow;

  position: {
    beforeRowId?: string;
    afterRowId?: string;
  };

  userId: string;
  createdAt: string;
};
```

This operation model gives you:

* conflict detection;
* replay;
* audit history;
* rollback;
* server validation;
* optimistic updates;
* idempotency;
* transaction grouping;
* better debugging.

This is the difference between a demo and a reliable collaborative product.


## RevoGrid collaborative editing setup

For a production collaborative grid, separate two jobs:

* **editing**: capture attempted writes, send them to your backend, accept/reject them, and apply the accepted state;
* **presence**: show where other users are looking or editing without changing local selection or focus.

Those jobs map to different packages and plugin responsibilities:

| Concern | RevoGrid API | What it owns |
| --- | --- | --- |
| Normalized edit stream | `EventManagerPlugin` from `@revolist/revogrid-pro` | Converts cell edits, range edits, paste, autofill, and source-edit operations into one normalized event stream. |
| Collaborative write workflow | `CollaborativeEditingPlugin` from `@revolist/revogrid-collaborative-editing` | Owns pending edits, backend commit, acceptance/rejection, conflict policy, and collaborative write state. |
| Remote awareness | `CollaborativePresencePlugin` from `@revolist/revogrid-pro` | Draws other users' focus/range markers and labels, filters stale users, and can apply remote row patches. |

`CollaborativeEditingPlugin` is not exported from `@revolist/revogrid-pro`. Import it from `@revolist/revogrid-collaborative-editing`.

This is an important distinction. `CollaborativePresencePlugin` is not the write engine. It should not decide whether a value is allowed, whether a conflict is safe, or whether an audit record exists. It is the visual collaboration layer.

`CollaborativeEditingPlugin` is the write side of the collaboration stack. It works with normalized grid edit events, sends changes through your commit adapter, and lets your application react to accepted edits, rejected edits, and conflicts.

A simplified setup may look like this:

```ts
import '@revolist/revogrid-pro/dist/revogrid-pro.css';

import {
  type CollaborativePresenceConfig,
  EventManagerPlugin,
  CollaborativePresencePlugin
} from '@revolist/revogrid-pro';

import {
  CollaborativeEditingPlugin,
  type CollaborativeEditingConfig
} from '@revolist/revogrid-collaborative-editing';

const grid = document.querySelector('revo-grid') as HTMLRevoGridElement;

grid.columns = [
  { prop: 'customerName', name: 'Customer' },
  { prop: 'owner', name: 'Owner' },
  { prop: 'status', name: 'Status' },
  { prop: 'forecastJan', name: 'Jan Forecast' },
  { prop: 'forecastFeb', name: 'Feb Forecast' },
  { prop: 'forecastMar', name: 'Mar Forecast' }
];

grid.source = [
  {
    id: 'customer-acme',
    customerName: 'Acme Corp',
    owner: 'Anna',
    status: 'review',
    forecastJan: 12000,
    forecastFeb: 14000,
    forecastMar: 18000
  }
];

grid.plugins = [
  EventManagerPlugin,
  CollaborativeEditingPlugin,
  CollaborativePresencePlugin
];

// Let the collaborative editing workflow own commit/review/rollback.
grid.eventManager = {
  applyEventsToSource: false
};

const collaborativeEditing: CollaborativeEditingConfig = {
  documentId: 'sales-forecast-2026',

  user: {
    id: 'user-anna',
    name: 'Anna Kowalska',
    color: '#2563eb',
    roles: ['sales-manager']
  } as any,

  rowIdProp: 'id',
  mode: 'review',
  conflictPolicy: 'manual',

  permissions: {
    canEditCell({ user, row, prop }) {
      if (row?.locked) return false;

      if (prop === 'status' && row?.status === 'approved') {
        return user.roles?.includes('finance-admin') ?? false;
      }

      if (String(prop).startsWith('forecast')) {
        return user.roles?.includes('sales-manager') ?? false;
      }

      return true;
    }
  },

  commitAdapter: {
    async commit(changes, context) {
      const response = await fetch('/api/grid/commit', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          documentId: context.documentId,
          user: context.user,
          changes
        })
      });

      return response.json();
    }
  }
};

(grid as HTMLRevoGridElement & {
  collaborativeEditing?: CollaborativeEditingConfig;
}).collaborativeEditing = collaborativeEditing;

const collaborativePresence: CollaborativePresenceConfig = {
  enabled: true,
  showLabels: true,
  staleAfterMs: 15000,
  users: [
    {
      id: 'user-mark',
      name: 'Mark Chen',
      initials: 'MC',
      color: '#16a34a',
      activity: 'editing',
      focus: { x: 4, y: 0 },
      range: { x: 3, y: 0, x1: 5, y1: 0 },
      lastActiveAt: Date.now()
    }
  ]
};

grid.collaborativePresence = collaborativePresence;

function updateRemotePresence(
  users: NonNullable<CollaborativePresenceConfig['users']>,
  remoteEdits: NonNullable<CollaborativePresenceConfig['remoteEdits']> = []
) {
  grid.collaborativePresence = {
    ...grid.collaborativePresence,
    users,
    remoteEdits
  };
}
```

The important part is the `commitAdapter`.

This is where your product connects the grid to the backend:

```ts
commitAdapter: {
  async commit(changes, context) {
    // Send changes to your backend.
    // Backend accepts, rejects, rewrites, or reports a conflict.
  }
}
```

The backend should decide:

* is the user allowed to edit this cell?
* is the row locked?
* is the value valid?
* does this create a conflict?
* should the edit be accepted?
* should the edit be rejected?
* should the value be normalized?
* should an audit record be created?
* should formulas be recalculated?

That is how collaborative editing stays safe.

### CollaborativeEditingPlugin vs CollaborativePresencePlugin

These two parts are related, but they should not be treated as the same plugin responsibility.

| Capability | Collaborative editing layer | `CollaborativePresencePlugin` |
| --- | --- | --- |
| Main job | Decide what data changes are allowed and accepted. | Show where other users are active. |
| RevoGrid hook | `CollaborativeEditingPlugin`, supported by `EventManagerPlugin`. | `grid.collaborativePresence` / `additionalData.collaborativePresence`. |
| Data mutation | Yes, through accepted collaborative edits. | Only optional `remoteEdits` row patches; it does not own validation or conflict policy. |
| Typical backend role | Permission checks, version checks, conflict resolution, persistence, audit records. | Broadcast user focus, ranges, activity, and accepted remote patches. |
| User-facing UI | Pending changes, conflict dialogs, rejected edits, save status. | Colored outlines, remote active cell, selected ranges, labels, stale-user hiding. |

`CollaborativePresencePlugin` accepts a `CollaborativePresenceConfig`:

```ts
grid.collaborativePresence = {
  enabled: true,
  showLabels: true,
  staleAfterMs: 15000,
  users: [
    {
      id: 'user-mark',
      name: 'Mark Chen',
      initials: 'MC',
      color: '#16a34a',
      activity: 'editing',
      focus: { x: 4, y: 0 },
      range: { x: 3, y: 0, x1: 5, y1: 0 },
      lastActiveAt: Date.now()
    }
  ],
  remoteEdits: [
    {
      rowIndex: 0,
      data: { forecastMar: 19000 }
    }
  ]
};
```

Use `users` for awareness. Use `remoteEdits` when your collaboration service broadcasts accepted row patches that should be reflected in the grid. Use your backend, not the presence plugin, to decide whether those patches are valid.



## Conflict resolution strategies

Conflict resolution is one of the most important parts of collaborative editing.

A conflict happens when two or more users edit the same data before the system can safely reconcile the changes.

Example:

1. Anna changes `forecastMar` from `18000` to `20000`.
2. Mark changes the same cell from `18000` to `19000`.
3. Both edits arrive close together.

The product must decide what to do.



## Strategy 1: Manual conflict review

Manual conflict review is the safest option for serious business data.

The system keeps the local change pending and shows the user that another value already exists.

Example UX:

```txt
Conflict detected

Anna changed this cell to: 20,000
You changed it to: 19,000

Choose:
- Keep Anna's value
- Apply your value
- Open cell history
```

This is useful for:

* finance;
* resource planning;
* approvals;
* pricing;
* inventory;
* customer-facing data;
* operational workflows.

Example editing configuration:

```ts
const collaborativeEditing: CollaborativeEditingConfig = {
  // ...
  conflictPolicy: 'manual'
};
```

You can open a custom conflict dialog from the collaborative conflict event:

```ts
grid.addEventListener('collaborativeconflict', (event: CustomEvent) => {
  const conflict = event.detail;

  openConflictDialog({
    rowId: conflict.local.rowId,
    columnId: conflict.local.prop,
    localValue: conflict.local.newValue,
    remoteValue: conflict.remoteValue,
    remoteUser: conflict.remoteUser
  });
});
```

Manual conflict resolution is usually the best default for high-value B2B workflows.



## Strategy 2: Last write wins

The simplest model is last write wins.

The latest accepted edit becomes the final value.

Example:

```ts
const collaborativeEditing: CollaborativeEditingConfig = {
  // ...
  conflictPolicy: 'lastWriteWins'
};
```

This can be acceptable for:

* notes;
* temporary planning values;
* draft-only fields;
* low-risk comments;
* internal scratch data.

It is usually not appropriate for:

* budgets;
* prices;
* approved values;
* inventory quantities;
* workflow status;
* financial records;
* compliance-sensitive data.

Last write wins feels smooth, but it can silently overwrite another user’s work.

Use it deliberately.



## Strategy 3: Soft warnings

Sometimes the product should not block the user.

It should warn them.

Example:

```txt
This value was changed by Anna 18 seconds ago.
Please review before saving.
```

This is useful for:

* planning grids;
* CRM updates;
* content calendars;
* lightweight operational data;
* provisional values.

Soft warnings reduce friction while still giving users context.



## Strategy 4: Locks and protected ranges

Some workflows should prevent conflicts before they happen.

Example:

```txt
This row is currently being edited by Anna.
```

Or:

```txt
This month is locked because Finance already approved it.
```

Locks are useful for:

* approved periods;
* billing data;
* purchase orders;
* stock adjustments;
* workflow transitions;
* high-risk rows.

A lock can be strict:

```ts
type RowLock = {
  rowId: string;
  lockedBy: string;
  expiresAt: string;
};
```

Or advisory:

```txt
Anna is editing this row. You can continue, but your change may require review.
```

For most real products, the best model is hybrid:

| Data type                       | Recommended strategy           |
| ------------------------------- | ------------------------------ |
| Notes and drafts                | Last write wins                |
| Normal business values          | Soft warning or manual review  |
| Finance, pricing, inventory     | Manual review                  |
| Approved rows or closed periods | Lock                           |
| Formula cells                   | Protected or review-only       |
| Workflow status                 | Permission-aware manual review |

One global conflict strategy is rarely enough.



## Presence: show who is working where

Presence makes collaboration visible.

A collaborative grid should show:

* who is currently viewing the document;
* who selected a cell;
* who selected a range;
* who is editing;
* which users are idle;
* when stale presence should disappear.

Example UI:

```txt
Anna is editing Forecast Mar
Mark selected B4:D8
Elena is viewing the Finance Review tab
```

A useful presence model:

```ts
type PresenceUser = {
  id: string;
  name: string;
  color: string;
  activity: 'viewing' | 'editing' | 'idle';

  focus?: {
    rowId: string;
    columnId: string;
  };

  range?: {
    startRowId: string;
    endRowId: string;
    startColumnId: string;
    endColumnId: string;
  };

  lastActiveAt: string;
};
```

Presence should be visual and temporary.

It should not be treated as authoritative business data.

Cell values are persistent.
Presence is ephemeral.

This distinction matters.



## Permissions: collaboration must be safe

In collaborative spreadsheets, permissions should not stop at page-level access.

You may need:

* document-level permissions;
* sheet-level permissions;
* row-level permissions;
* column-level permissions;
* cell-level permissions;
* formula permissions;
* export permissions;
* approval permissions.

Example:

| Role          | Can view       | Can edit                     | Can approve |
| ------------- | -------------- | ---------------------------- | ----------- |
| Sales rep     | Own customers  | Own forecast cells           | No          |
| Sales manager | Team customers | Team forecast cells          | No          |
| Finance       | All customers  | Approved values and formulas | Yes         |
| Executive     | Summary view   | No                           | No          |

The grid should show permissions visually.

Good patterns:

* locked cells are muted;
* protected columns show a lock icon;
* context menu actions are hidden when unavailable;
* tooltips explain why a cell is read-only;
* rejected edits show clear reasons.

Bad UX:

```txt
Error: forbidden
```

Better UX:

```txt
This value is locked because March has already been approved by Finance.
```

Frontend permissions improve the user experience, but backend permissions are still mandatory.

Never trust only the browser.

---

## Backend commit flow

The backend should be the authority for final data state.

A commit endpoint may look like this:

```ts
app.post('/api/grid/commit', async (req, res) => {
  const { documentId, user, changes } = req.body;

  const results = [];

  for (const change of changes) {
    const row = await db.rows.findById(change.rowId);

    if (!row) {
      results.push({
        id: change.id,
        status: 'rejected',
        reason: 'Row no longer exists'
      });
      continue;
    }

    const allowed = await canEditCell({
      user,
      documentId,
      row,
      prop: change.prop,
      value: change.newValue
    });

    if (!allowed) {
      results.push({
        id: change.id,
        status: 'rejected',
        reason: 'You do not have permission to edit this cell'
      });
      continue;
    }

    const validation = validateCellValue({
      row,
      prop: change.prop,
      value: change.newValue
    });

    if (!validation.valid) {
      results.push({
        id: change.id,
        status: 'rejected',
        reason: validation.reason
      });
      continue;
    }

    const saved = await db.rows.updateCell({
      rowId: change.rowId,
      prop: change.prop,
      value: change.newValue,
      updatedBy: user.id
    });

    await db.audit.insert({
      documentId,
      rowId: change.rowId,
      prop: change.prop,
      previousValue: change.oldValue,
      nextValue: saved.value,
      changedBy: user.id,
      changedAt: new Date().toISOString()
    });

    results.push({
      id: change.id,
      status: 'committed',
      value: saved.value
    });
  }

  res.json(results);
});
```

The backend can accept:

```json
{
  "id": "change-1",
  "status": "committed",
  "value": 130000
}
```

Reject:

```json
{
  "id": "change-1",
  "status": "rejected",
  "reason": "This month is locked"
}
```

Or rewrite:

```json
{
  "id": "change-1",
  "status": "committed",
  "value": 100000,
  "reason": "Value was capped by approval policy"
}
```

This gives you real control over collaborative editing.



## Audit history: collaboration needs accountability

When several users edit the same grid, audit history becomes critical.

Users need to answer:

* who changed this value?
* when was it changed?
* what was the previous value?
* what is the current value?
* was it a manual edit?
* was it part of a paste operation?
* was it imported?
* was it restored?
* did the server rewrite it?
* did it affect formulas?

A useful audit record:

```ts
type AuditRecord = {
  id: string;
  documentId: string;
  sheetId: string;

  rowId: string;
  columnId: string;

  previousValue: unknown;
  nextValue: unknown;

  changedBy: string;
  changedAt: string;

  source: 'manual-edit' | 'range-paste' | 'autofill' | 'import' | 'restore';

  transactionId?: string;
};
```

Good audit UX examples:

* right-click cell → “View history”;
* side panel with all changes for a row;
* filter history by user, date, or column;
* restore a previous value;
* export audit log;
* show transaction-level history for paste operations.

Audit history is not only for compliance.

It builds trust.

If users know they can review and restore changes, they are more comfortable working in a shared grid.

[RevoGrid Pro](/pro/) includes audit/history-related functionality that can help teams build accountable data workflows faster.



## Undo and redo in collaborative grids

Undo is simple in a single-user spreadsheet.

It becomes more complex in collaboration.

Example:

1. Anna changes a cell.
2. Mark edits a dependent value.
3. Anna clicks undo.

Should Mark’s change remain?
Should formulas recalculate?
Should the undo create a new audit record?
Should other users see the rollback?

A safe model is to separate:

| Feature         | Purpose                                               |
| --------------- | ----------------------------------------------------- |
| Local undo/redo | Fast recovery for the current user’s recent edits     |
| Audit restore   | Accountable restoration of committed business data    |
| Version history | Larger rollback or comparison between document states |

In collaborative business apps, undo should not silently rewrite other users’ work.

A better pattern:

* allow local undo for recent own changes;
* record committed changes in audit history;
* use explicit restore actions for shared data;
* show restore actions as new audit records.

This is safer and easier to explain.

---

## Copy, paste, and range operations

For spreadsheet-like products, copy and paste is not a small feature.

It is one of the main adoption features.

Users bring data from:

* Excel;
* Google Sheets;
* CSV files;
* ERP exports;
* finance models;
* planning tools;
* internal reports.

A serious collaborative grid should support:

* single-cell paste;
* range paste;
* paste from Excel;
* paste from Google Sheets;
* paste into filtered rows;
* validation during paste;
* partial paste feedback;
* undo after paste;
* audit transaction grouping;
* conflict detection for pasted ranges.

Example:

A user pastes this range:

| Customer  |   Jan |   Feb |   Mar |
| --------- | ----: | ----: | ----: |
| Acme Corp | 12000 | 14000 | 18000 |
| Globex    |  8000 |  9000 | 11000 |

The system should treat it as a range operation:

```ts
type RangePatch = {
  type: 'range.patch';

  transactionId: string;

  patches: Array<{
    rowId: string;
    columnId: string;
    previousValue: unknown;
    nextValue: unknown;
  }>;
};
```

The backend can validate the entire transaction:

* are all rows editable?
* are any cells locked?
* are values valid?
* did another user change the same cells?
* should this be all-or-nothing?
* should invalid cells be skipped?
* should the paste require review?

Good UX:

```txt
94 cells pasted.
3 cells were skipped because the period is locked.
2 cells need review because another user changed them.
```

This is much better than silently failing or overwriting data.



## Formulas in collaborative spreadsheets

Formulas make a grid feel like a spreadsheet.

But formulas also make collaboration harder.

Example:

```txt
=SUM(forecastJan:forecastMar)
```

or:

```txt
=IF(probability > 0.7, forecastValue, 0)
```

For collaborative apps, define clear formula rules:

* which columns allow formulas?
* can users edit formula cells directly?
* can formulas reference hidden columns?
* can formulas reference protected rows?
* are formulas calculated client-side, server-side, or both?
* are formula changes stored in audit history?
* what happens when a referenced row is deleted?
* what happens when two users edit formula dependencies at the same time?

A useful formula cell model:

```ts
type FormulaCell = {
  raw: '=SUM(forecastJan:forecastMar)';
  result: 44000;
  dependencies: ['forecastJan', 'forecastFeb', 'forecastMar'];
  status: 'valid' | 'error' | 'pending';
};
```

A good product stores the raw formula, not just the calculated result.

That way you can:

* export formulas;
* audit formula changes;
* recalculate dependencies;
* show formula errors;
* restore previous formula logic.

[RevoGrid formula support](/guide/cell/formula) is useful when you want Excel-like calculations inside the grid.



## Comments and notes

Collaborative grids often need comments because users do not only edit data.

They discuss it.

Useful comment types:

| Type             | Use case                                |
| ---------------- | --------------------------------------- |
| Cell comment     | Ask about a specific value              |
| Row comment      | Discuss a customer, task, order, or SKU |
| Range comment    | Review a block of values                |
| Document comment | Discuss the whole sheet or report       |

Example:

```txt
Why did March forecast drop by 30%?
```

or:

```txt
This supplier delivery date needs confirmation before approval.
```

A good comment model should include:

* threads;
* mentions;
* resolve/reopen;
* unread state;
* links to exact cell/range;
* permissions;
* notification hooks.

Do not store comments as cell values.

Store them separately:

```ts
type CellComment = {
  id: string;
  documentId: string;
  sheetId: string;
  rowId: string;
  columnId: string;
  authorId: string;
  body: string;
  resolved: boolean;
  createdAt: string;
};
```

Then render a badge or indicator inside the RevoGrid cell.

This keeps the data model clean while still giving users spreadsheet-like collaboration.



## Saved views: personal vs shared state

In collaborative spreadsheets, filters and sorting can create confusion.

If Anna filters the grid to show only her accounts, Mark should not suddenly lose rows from his view.

Separate state into three categories:

| State type          |  Shared? | Examples                                                 |
| ------------------- | -------: | -------------------------------------------------------- |
| Document data       |      Yes | Cell values, rows, formulas, comments                    |
| Personal view state |       No | Filters, scroll position, selected cell, hidden columns  |
| Saved team views    | Optional | “Finance Review”, “High Risk Customers”, “My Open Tasks” |

A saved view might include:

```ts
type SavedView = {
  id: string;
  name: string;
  scope: 'private' | 'team' | 'public';

  filters: unknown;
  sorting: unknown;

  hiddenColumns: string[];

  pinnedColumns: {
    start: string[];
    end: string[];
  };

  columnWidths: Record<string, number>;
};
```

Good default:

> Filters are personal unless the user explicitly saves and shares a view.

This avoids one of the most frustrating spreadsheet collaboration problems: users accidentally changing the working context for everyone else.



## Example: collaborative sales forecast grid

Imagine you are building a sales forecast product.

Rows are customers.
Columns are forecast months.
Sales managers update their own accounts.
Finance reviews final numbers.
Executives view summaries.

A simple grid may look like this:

| Customer  | Owner | Stage  |   Jan |   Feb |   Mar | Weighted Q1 |
| --------- | ----- | ------ | ----: | ----: | ----: | ----------: |
| Acme Corp | Anna  | Review | 12000 | 14000 | 18000 |       28600 |
| Globex    | Mark  | Draft  |  8000 |  9000 | 11000 |       16800 |

Users expect spreadsheet behavior:

* edit cells directly;
* paste from Excel;
* use formulas;
* filter by owner;
* sort by forecast value;
* comment on suspicious numbers;
* see who else is editing;
* undo mistakes;
* review history;
* export to Excel.

But the product also needs business rules:

* sales can edit forecast values;
* finance can lock approved months;
* executives can view but not edit;
* formulas cannot reference restricted fields;
* changes above a threshold require review;
* every approved value needs audit history.

This is where a RevoGrid-based collaborative spreadsheet becomes more than a spreadsheet clone.

It becomes a controlled business workflow.



## Example: collaborative inventory planning grid

A collaborative inventory planning app may have rows like:

* SKU;
* warehouse;
* current stock;
* reorder point;
* incoming quantity;
* expected delivery;
* supplier;
* risk level.

Users:

* warehouse operators;
* procurement managers;
* finance;
* supplier coordinators.

Grid rules:

* warehouse operators can edit stock counts;
* procurement can edit reorder quantities;
* finance can lock budget-sensitive fields;
* supplier coordinators can comment on delivery changes;
* high-risk SKUs are highlighted;
* every stock adjustment is audited.

This is a good fit for a collaborative RevoGrid workflow because the interface needs spreadsheet speed, but the product needs business rules.

A generic spreadsheet can store this data.

A RevoGrid-based product can enforce the workflow.



## Example: collaborative project planning grid

A project planning grid may include:

* project;
* task;
* owner;
* status;
* start date;
* end date;
* progress;
* dependency;
* risk;
* budget.

Users:

* project managers;
* resource managers;
* team leads;
* finance;
* client viewers.

Features needed:

* inline editing;
* date editors;
* assignee dropdowns;
* status badges;
* comments;
* audit history;
* saved views;
* permissions;
* export to Excel;
* conflict handling;
* timeline or Gantt view.

This is where [RevoGrid Pro](/pro/) becomes interesting beyond the grid itself.

A planning product may need:

* grid for structured editing;
* formulas for calculations;
* audit history for accountability;
* Gantt for timelines;
* scheduler for resource allocation;
* pivot tables for reporting.

The grid becomes the center of a larger operational workflow.



## Example: customer-facing data portal

Many SaaS products expose spreadsheet-like grids directly to customers.

Examples:

* product catalog management;
* pricing configuration;
* billing adjustments;
* customer imports;
* compliance checklists;
* campaign planning;
* inventory updates;
* partner data submission.

Customer-facing collaborative grids need extra care.

You need:

* clear validation;
* protected columns;
* import preview;
* permission-aware editing;
* friendly error messages;
* safe collaboration;
* audit history;
* export;
* rollback.

Example flow:

1. Customer uploads a CSV.
2. The app parses and normalizes the data.
3. RevoGrid shows a spreadsheet-like preview.
4. Invalid cells are highlighted.
5. Multiple users review and fix issues together.
6. Conflicts are resolved before final import.
7. The import is committed and audited.

This is much better than a basic upload form.

It gives users control without removing structure.



## What to include in a production collaborative grid

A serious collaborative spreadsheet should include the following.

### Multi-user editing

Users should be able to edit the same grid at the same time.

Include:

* live updates;
* optimistic edits;
* backend acknowledgement;
* pending state;
* rollback on rejection;
* conflict events;
* reconnect behavior.

### Presence

Users should see who else is active.

Include:

* user avatars or initials;
* active cell;
* selected range;
* editing label;
* stale user cleanup;
* subtle visual markers.

### Conflict resolution

Do not rely on one universal strategy.

Include:

* manual review for critical cells;
* last write wins for low-risk fields;
* soft warnings for normal business edits;
* locks for approved or transactional rows.

### Permissions

Permissions should be visible and enforced.

Include:

* read-only columns;
* row locks;
* cell-level edit rules;
* role-based permissions;
* server-side validation;
* clear rejection messages.

### Audit history

Every important change should be reviewable.

Include:

* who changed it;
* previous value;
* new value;
* timestamp;
* source of change;
* transaction grouping;
* restore action;
* exportable audit log.

### Spreadsheet behavior

Users expect spreadsheet-like interaction.

Include:

* formulas;
* copy and paste;
* range selection;
* multi-range selection;
* smart auto-fill;
* validation;
* merged cells where needed;
* Excel export/import.

### Product workflow

A collaborative grid should fit your domain.

Include:

* custom cell renderers;
* status badges;
* approval states;
* comments;
* saved views;
* tooltips;
* context menus;
* workflow actions.



## Recommended build roadmap

### Stage 1: Solid single-user grid

Build:

* RevoGrid setup;
* stable row IDs;
* stable column props;
* editing;
* custom renderers;
* custom editors;
* validation;
* copy/paste;
* targeted updates.

Goal:

> The grid feels fast and reliable before collaboration is added.



### Stage 2: Operation-based edits

Build:

* cell edit operations;
* range paste operations;
* row insert/delete operations;
* operation IDs;
* backend commit endpoint;
* accepted/rejected responses.

Goal:

> Every important user action has a clear operation record.



### Stage 3: Real-time collaboration

Build:

* collaborative editing;
* presence;
* live updates;
* pending changes;
* backend commit adapter;
* conflict events;
* reconnect handling.

Goal:

> Multiple users can work in the same grid without losing data.



### Stage 4: Conflict and permission UX

Build:

* manual conflict dialog;
* rejected edit messages;
* locked cell indicators;
* role-based editing;
* workflow-aware permissions;
* server validation.

Goal:

> Users understand why edits are accepted, rejected, or pending.



### Stage 5: Audit and recovery

Build:

* audit history panel;
* transaction grouping;
* restore previous value;
* export audit log;
* durable backend audit storage.

Goal:

> Teams can trust the grid with real business data.



### Stage 6: Spreadsheet power features

Build:

* formulas;
* smart auto-fill;
* range preview;
* multi-range selection;
* Excel import/export;
* saved views;
* comments.

Goal:

> The product feels familiar to spreadsheet users while staying controlled by your application.



## Common mistakes

### Mistake 1: Treating WebSocket sync as collaboration

A WebSocket moves messages.

It does not solve:

* permissions;
* conflicts;
* validation;
* audit;
* rollback;
* formulas;
* reconnect;
* transaction grouping.

Real collaboration needs a product model.



### Mistake 2: Using row indexes as identity

Indexes change after sorting and filtering.

Use stable row IDs.



### Mistake 3: Applying last write wins everywhere

Last write wins is convenient, but dangerous.

It is acceptable for low-risk values.
It is not acceptable for budgets, approval states, inventory, pricing, or financial records.



### Mistake 4: Replacing the whole grid source after every edit

This can break:

* focus;
* selection;
* scroll position;
* plugin state;
* active editors;
* pending changes;
* undo history.

Use targeted updates where possible.



### Mistake 5: Making filters shared by default

Personal filters should stay personal.

Shared views should be explicit.



### Mistake 6: Ignoring bulk operations

Paste, fill, and import are not edge cases.

They are core spreadsheet workflows.

Treat them as transactions.



## Why use RevoGrid Pro for collaborative spreadsheets

You can build basic collaboration around any grid if you have enough time.

The hard part is not rendering a table.

The hard part is everything around the table:

* editing lifecycle;
* selection model;
* range operations;
* clipboard behavior;
* formulas;
* validation;
* undo/redo;
* audit history;
* presence;
* conflicts;
* custom renderers;
* Excel workflows;
* performance on large datasets.

[RevoGrid Pro](/pro/) helps because it provides advanced spreadsheet and workflow features on top of the RevoGrid rendering engine.

For SaaS, ERP, planning, finance, analytics, logistics, and operational products, this can reduce months of grid infrastructure work.

Useful links:

* [RevoGrid Pro](/pro/)
* [Pricing](/pricing)
* [Pro feature table](/pro/feature-table)
* [Data sync docs](/guide/data-sync)
* [Real-time updates docs](/guide/realtime-updates)
* [Editing docs](/guide/editing)
* [Events docs](/guide/events-guide)
* [Clipboard docs](/guide/clipboard)
* [Formula docs](/guide/cell/formula)
* [Excel export docs](/guide/data-grid-export-excel)
* [Live demos](/demo/)



## Final thought

Collaborative spreadsheets are difficult because users expect them to feel simple.

They want to edit, paste, filter, calculate, comment, undo, and collaborate without thinking about the system underneath.

But the system underneath needs to handle:

* simultaneous edits;
* conflict resolution;
* permissions;
* audit history;
* validation;
* formulas;
* real-time updates;
* recovery;
* large datasets;
* business workflows.

The best approach is not to clone Google Sheets feature by feature.

The better approach is to build a **product-specific collaborative grid**.

One that feels familiar like a spreadsheet, but understands your data model, permissions, workflow, and business rules.

That is where RevoGrid fits well.

Use RevoGrid for the high-performance spreadsheet-like grid surface.
Use RevoGrid Pro for advanced collaborative and spreadsheet workflow features.
Use your backend for authority, validation, permissions, persistence, and audit.

That combination gives you a practical path to building collaborative grid experiences that users can work in all day.

<p>
  <strong>Ready to build collaborative spreadsheet-like workflows?</strong><br />
  Start with <a href="/pro/">RevoGrid Pro</a>, compare plans on the <a href="/pricing">pricing page</a>, or review the full <a href="/pro/feature-table">Pro feature table</a>.
</p>

<style scoped>
.workflow-escalation {
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  margin: 34px 0;
  overflow: hidden;
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--vp-c-brand-1), transparent 90%), transparent 42%),
    var(--vp-c-bg-soft);
}

.workflow-escalation__eyebrow {
  border-bottom: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1.4;
  margin: 0;
  padding: 18px 22px;
  text-transform: uppercase;
}

.workflow-escalation__steps {
  display: grid;
  gap: 0;
  list-style: none;
  margin: 0;
  padding: 0;
}

.workflow-escalation__steps li {
  align-items: center;
  display: grid;
  gap: 16px;
  grid-template-columns: 44px minmax(0, 1fr) auto;
  margin: 0;
  padding: 18px 22px;
}

.workflow-escalation__steps li + li {
  border-top: 1px solid color-mix(in srgb, var(--vp-c-divider), transparent 35%);
}

.workflow-escalation__index {
  color: var(--vp-c-brand-1);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.workflow-escalation__text {
  color: var(--vp-c-text-1);
  font-size: 18px;
  font-weight: 650;
  line-height: 1.35;
}

.workflow-escalation__mood {
  font-size: 24px;
  line-height: 1;
  white-space: nowrap;
}

.workflow-escalation__turn {
  border-top: 1px solid var(--vp-c-divider);
  margin: 0;
  padding: 24px 22px 0;
}

.workflow-escalation__turn p {
  color: var(--vp-c-text-2);
  line-height: 1.5;
  margin: 0 0 8px;
}

.workflow-escalation__turn strong {
  color: var(--vp-c-text-1);
  display: block;
  letter-spacing: 0;
  line-height: 1.2;
}

.workflow-escalation__conclusion {
  color: var(--vp-c-text-2);
  line-height: 1.45;
  margin: 0;
  padding: 18px 22px 24px;
}

.workflow-escalation__conclusion span {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

@media (max-width: 640px) {
  .workflow-escalation {
    border-radius: 10px;
    margin: 28px 0;
  }

  .workflow-escalation__eyebrow,
  .workflow-escalation__steps li,
  .workflow-escalation__turn,
  .workflow-escalation__conclusion {
    padding-left: 16px;
    padding-right: 16px;
  }

  .workflow-escalation__steps li {
    align-items: start;
    gap: 8px 12px;
    grid-template-columns: 36px minmax(0, 1fr);
  }

  .workflow-escalation__mood {
    font-size: 22px;
    grid-column: 2;
  }

  .workflow-escalation__text {
    font-size: 16px;
  }

  .workflow-escalation__turn strong {
    font-size: 21px;
  }

  .workflow-escalation__conclusion {
    font-size: 18px;
  }
}
</style>
