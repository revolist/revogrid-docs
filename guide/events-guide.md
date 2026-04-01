---
title: RevoGrid Event Patterns and Lifecycles
description: Understand RevoGrid event flows for editing, filtering, sorting, focus, and source updates, and learn which events are best for validation, syncing, and UI reactions.
head:
  - - meta
    - name: keywords
      content: RevoGrid events, beforeedit, afteredit, filtering events, sorting events, focus events, source update events
---

# RevoGrid Event Patterns and Lifecycles

RevoGrid emits many events, but most application code only needs a few event groups. This guide organizes them by workflow so you can choose the right hook quickly.

## Editing lifecycle

Use these events when validating or transforming edits:

- `beforeeditstart`: before the editor opens
- `beforeedit`: before a single-cell value is committed
- `beforerangeedit`: before range data is committed
- `afteredit`: after the change has been applied

Typical pattern:

```ts
grid.addEventListener('beforeedit', event => {
  if (event.detail.prop === 'quantity' && Number(event.detail.val) < 0) {
    event.preventDefault();
  }
});

grid.addEventListener('afteredit', event => {
  console.log('Persist change', event.detail);
});
```

You can also rewrite the value before it is stored:

```ts
grid.addEventListener('beforeedit', event => {
  if (event.detail.prop === 'name') {
    event.detail.val = String(event.detail.val).trim();
  }
});
```

## Filtering lifecycle

Use these events when you need to inspect or rewrite filter behavior:

- `beforefilterapply`
- `beforefiltertrimmed`
- `aftertrimmed`

Typical use cases:

- enforce filter defaults
- add analytics for active filters
- merge app-level visibility rules with filter-driven trimming

Example:

```ts
grid.addEventListener('beforefilterapply', event => {
  console.log('Incoming filters', event.detail.collection);
});
```

## Sorting lifecycle

Sorting emits a sequence of events that is useful when sorting state must stay synchronized with app state:

- `beforesorting`
- `beforesortingapply`
- `beforesourcesortingapply`
- `sortingconfigchanged`

Use these for:

- preventing sort changes in some states
- syncing sort state to the URL or store
- observing when a sort transition begins vs when source application happens

Example:

```ts
grid.addEventListener('beforesorting', event => {
  if (event.detail.column.prop === 'lockedColumn') {
    event.preventDefault();
  }
});
```

## Source update lifecycle

These events are important when your application treats the grid as a view over an external store:

- `beforesourceset`
- `beforeanysource`
- `aftersourceset`
- `afteranysource`

Typical use cases:

- normalize or enrich incoming rows
- keep pinned and main data updates observable
- trigger persistence or cache updates after the grid source changes

Example:

```ts
grid.addEventListener('aftersourceset', event => {
  console.log(`Updated source type: ${event.detail.type}`);
});
```

## Focus and selection lifecycle

Use these events when keyboard interaction, range behavior, or custom navigation matters:

- `beforecellfocus`
- `beforefocuslost`
- `afterfocus`
- `beforerange`
- `beforeautofill`

These are especially important when external controls and the grid must stay synchronized.

Example:

```ts
grid.addEventListener('beforefocuslost', event => {
  if (hasUnsavedPopover) {
    event.preventDefault();
  }
});
```

## Cancelable vs informational events

The most important distinction:

- cancelable events let you stop or rewrite behavior with `event.preventDefault()`
- informational events let you react after something already happened

Good rule of thumb:

- validation and policy enforcement go in `before*` events
- logging, syncing, analytics, and UI side effects go in `after*` events

## Recommended event combinations

### Validate and then persist edits

- `beforeedit` to block invalid writes
- `afteredit` to save to your backend or store

### Keep URL or store filters in sync

- `beforefilterapply` to inspect intent
- `aftertrimmed` to react once the visible set changed

### Synchronize app sort state

- `beforesorting` to allow or deny sort changes
- `sortingconfigchanged` to update external state

## Related guides

- [Editing](/guide/editing)
- [Filtering](/guide/filters)
- [Programmatic Grid Control](/guide/programmatic-control)
- [API: Events](/guide/api/events)
