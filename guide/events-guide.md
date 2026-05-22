---
title: RevoGrid Event Patterns and Lifecycles
description: Source-backed event lifecycle diagrams for RevoGrid, including root grid events, internal component chains, and plugin-driven flows such as editing, clipboard, sorting, filtering, focus, scrolling, and row ordering.
head:
  - - meta
    - name: keywords
      content: RevoGrid events, event lifecycle, mermaid diagrams, beforeedit, afteredit, filtering events, sorting events, focus events, source update events, clipboard lifecycle
---

# RevoGrid Event Patterns and Lifecycles

This page maps the event graph from the current source, not from assumptions.

Source priority used for this guide:

- [`src/components/revoGrid/revo-grid.tsx`](/Users/maks/Projects/revogrid-pro-advance/revogrid/src/components/revoGrid/revo-grid.tsx)
- [`src/components/overlay/revogr-overlay-selection.tsx`](/Users/maks/Projects/revogrid-pro-advance/revogrid/src/components/overlay/revogr-overlay-selection.tsx)
- [`src/components/clipboard/revogr-clipboard.tsx`](/Users/maks/Projects/revogrid-pro-advance/revogrid/src/components/clipboard/revogr-clipboard.tsx)
- [`src/plugins/sorting/sorting.plugin.ts`](/Users/maks/Projects/revogrid-pro-advance/revogrid/src/plugins/sorting/sorting.plugin.ts)
- [`src/plugins/filter/filter.plugin.tsx`](/Users/maks/Projects/revogrid-pro-advance/revogrid/src/plugins/filter/filter.plugin.tsx)
- [`src/components/header/revogr-header.tsx`](/Users/maks/Projects/revogrid-pro-advance/revogrid/src/components/header/revogr-header.tsx)
- [`src/components/selectionFocus/revogr-focus.tsx`](/Users/maks/Projects/revogrid-pro-advance/revogrid/src/components/selectionFocus/revogr-focus.tsx)
- [`src/components/editors/revogr-edit.tsx`](/Users/maks/Projects/revogrid-pro-advance/revogrid/src/components/editors/revogr-edit.tsx)
- [`src/components/order/revogr-order-editor.tsx`](/Users/maks/Projects/revogrid-pro-advance/revogrid/src/components/order/revogr-order-editor.tsx)
- [`src/components/data/revogr-data.tsx`](/Users/maks/Projects/revogrid-pro-advance/revogrid/src/components/data/revogr-data.tsx)
- [`src/components/scroll/revogr-viewport-scroll.tsx`](/Users/maks/Projects/revogrid-pro-advance/revogrid/src/components/scroll/revogr-viewport-scroll.tsx)
- [`src/types/events.ts`](/Users/maks/Projects/revogrid-pro-advance/revogrid/src/types/events.ts)

## How to read these diagrams

- `revo-grid` events are the public root lifecycle most app code listens to.
- Child-component events are often the trigger layer that `revo-grid` listens to and translates.
- Some plugin events are real but not part of the typed root `RevogridEvents` union.
- If a `before*` event is cancelable, the branch stops at that point.

## Event Layers

```mermaid
flowchart TB
  A[User action or prop change] --> B[Child component event]
  B --> C[revo-grid listener or watcher]
  C --> D[Plugin reaction]
  D --> E[Data or viewport mutation]
  E --> F[After-event or render event]
```

## Root Grid Lifecycle

This is the outer lifecycle created by `componentWillLoad`, watchers, and render hooks.

```mermaid
flowchart TD
  A[connectedCallback] --> B[created]
  B --> C[componentWillLoad]
  C --> D[themeChanged]
  C --> E[columnChanged]
  C --> F[dataSourceChanged source]
  C --> G[dataSourceChanged pinnedTopSource]
  C --> H[dataSourceChanged pinnedBottomSource]
  C --> I[rowDefChanged]
  C --> J[aftergridinit]
  J --> K[componentWillRender]
  K --> L[beforegridrender]
  L --> M[render]
  M --> N[componentDidRender]
  N --> O[aftergridrender]

  E --> E1[beforecolumnsset]
  E1 --> E2[beforecolumnapplied]
  E2 --> E3[aftercolumnsset]

  F --> F1[beforesourceset]
  F1 --> F2[beforeanysource]
  F2 --> F3[aftersourceset]
  F3 --> F4[afteranysource]

  G --> G1[beforeanysource]
  G1 --> G2[afteranysource]

  H --> H1[beforeanysource]
  H1 --> H2[afteranysource]

  I --> I1[beforerowdefinition]
```

## Focus, Selection, and Edit Lifecycle

This flow starts in [`revogr-overlay-selection.tsx`](/Users/maks/Projects/revogrid-pro-advance/revogrid/src/components/overlay/revogr-overlay-selection.tsx) and is completed by `revo-grid` plus [`revogr-focus.tsx`](/Users/maks/Projects/revogrid-pro-advance/revogrid/src/components/selectionFocus/revogr-focus.tsx).

```mermaid
flowchart TD
  A[Mouse down or keyboard navigation] --> B[beforecellfocusinit]
  B --> C[revo-grid listens]
  C --> D[beforecellfocus]
  D --> E[applyfocus]
  E --> F[focuscell]
  F --> G[revogr-focus render]
  G --> H[beforefocusrender]
  H --> I[beforescrollintoview]
  I --> J[afterfocus]
  J --> K[revo-grid afterfocus duplicate]

  F --> L[Double click or keypress starts edit]
  L --> M[setedit]
  M --> N[revo-grid onSetedit]
  N --> O[beforeeditstart]
  O --> P[selection store edit state]
  P --> Q[beforeeditrender]
  Q --> R[revogr-edit mounted]
  R --> S[celleditinit or closeedit]
  S --> T[celledit]
  T --> U[beforecellsave]
  U --> V[celleditapply]
  V --> W[revo-grid beforeedit]
  W --> X[dataProvider.setCellData]
  X --> Y[afteredit]
  S --> Z[closeedit]
  Z --> AA[canceledit]
```

### Edit commit notes

- `beforeeditstart` blocks opening the editor.
- `beforecellsave` blocks the overlay from forwarding the save.
- `beforeedit` blocks the root data write.
- `afteredit` fires after single-cell and range writes.

## Range, Autofill, and Clipboard Lifecycle

The range flow is handled in the overlay and clipboard components, then translated into root edit events by `revo-grid`.

```mermaid
flowchart TD
  A[Shift+focus drag or autofill drag] --> B[beforeapplyrange]
  B --> C[beforesetrange]
  C --> D[setrange]
  D --> E[Range visible in overlay]

  E --> F[Autofill handle or range apply]
  F --> G[selectionchangeinit]
  G --> H[revo-grid beforerange]
  H --> I[revo-grid beforeautofill]
  I --> J[beforerangedataapply]
  J --> K[beforesettemprange]
  K --> L[settemprange]
  L --> M[beforerangecopyapply]
  M --> N[rangeeditapply]
  N --> O[revo-grid beforerangeedit]
  O --> P[dataProvider.setRangeData]
  P --> Q[afteredit]
```

### Clipboard copy/cut

```mermaid
flowchart TD
  A[Document copy] --> B[beforecopy]
  B --> C[copyregion]
  C --> D[overlay beforecopyregion]
  D --> E[clipboardrangecopy]
  E --> F[beforecopyapply]
  F --> G[clipboard text written]

  H[Document cut] --> I[beforecut]
  I --> J[copy path runs]
  J --> K[clearregion]
  K --> L[overlay clearCell or range clear]
  L --> M[celleditapply or rangeeditapply]
  M --> N[beforeedit or beforerangeedit]
  N --> O[afteredit]
```

### Clipboard paste

```mermaid
flowchart TD
  A[Document paste] --> B[beforepaste]
  B --> C[beforepasteapply]
  C --> D[pasteregion]
  D --> E[overlay clipboardrangepaste]
  E --> F[autofill service onRangeApply]
  F --> G[selectionchangeinit]
  G --> H[beforerange]
  H --> I[beforeautofill]
  I --> J[rangeeditapply]
  J --> K[beforerangeedit]
  K --> L[afteredit]
  D --> M[afterpasteapply]
```

## Header, Sorting, and Filtering Lifecycle

Header events start in [`revogr-header.tsx`](/Users/maks/Projects/revogrid-pro-advance/revogrid/src/components/header/revogr-header.tsx). Sorting and filtering then hook into those events.

```mermaid
flowchart TD
  A[Header render] --> B[beforeheaderrender]
  B --> C[beforegroupheaderrender]
  C --> D[afterheaderrender]

  E[Header click] --> F[beforeheaderclick]
  F --> G[revo-grid headerclick]
  G --> H[SortingPlugin or FilterPlugin]

  I[Header resize gesture] --> J[beforeheaderresize]
  J --> K[headerresize]
  K --> L[viewport resize service]
  L --> M[aftercolumnresize]
```

### Sorting

```mermaid
flowchart TD
  A[beforeheaderclick on sortable column] --> B[SortingPlugin headerclick]
  B --> C[beforesorting]
  C --> D[beforesortingapply]
  D --> E[sorting state updated in plugin]
  E --> F[startSorting]
  F --> G[sort data stores]
  G --> H[aftersortingapply]
  G --> I[source watchers may later re-trigger beforeanysource]

  J[beforeanysource] --> K[SortingPlugin beforesourcesortingapply]
  K --> L[startSorting]
  L --> G

  M[sorting prop change or updateColumnSorting] --> N[sortingconfigchanged]
  N --> O[SortingPlugin config update]
  O --> F
```

### Filtering

```mermaid
flowchart TD
  A[headerclick on filter button] --> B[FilterPlugin opens panel]
  B --> C[filterChange or resetChange]
  C --> D[runFiltering]
  D --> E[beforefilterapply]
  E --> F[getRowFilter]
  F --> G[beforefiltertrimmed]
  G --> H[dataProvider.setTrimmed filter]
  H --> I[afterfilterapply]
  H --> J[revo-grid beforetrimmed if trimmedRows API used]
  H --> K[Grid render with filtered rows]

  L[filter prop change] --> M[filterconfigchanged]
  M --> D
  N[aftersourceset] --> O[FilterPlugin reruns active filters]
  O --> D
```

## Row Ordering Lifecycle

```mermaid
flowchart TD
  A[dragstartcell] --> B[revogr-order-editor dragStart]
  B --> C[rowdragstartinit]
  C --> D[revo-grid rowdragstart]
  D --> E[orderService.start]
  E --> F[rowdragmoveinit]
  F --> G[rowdragmousemove]
  G --> H[rowdropinit]
  H --> I[revo-grid roworderchanged]
  I --> J[roworderchange]
  J --> K[dataProvider.changeOrder]
  K --> L[rowdragendinit]
```

## Scroll and Data Render Lifecycle

```mermaid
flowchart TD
  A[Viewport resize] --> B[resizeviewport]
  B --> C[dimension provider updates]
  C --> D[contentsizechanged]

  E[Viewport scroll] --> F[scrollviewport]
  F --> G[GridScrollingService]
  G --> H[viewportscroll]
  F --> I[scrollchange]
  F --> J[scrollviewportsilent]

  K[Data component will render] --> L[beforedatarender]
  L --> M[beforerowrender]
  M --> N[beforecellrender]
  N --> O[afterrender]
```

## Source and Config Watchers

These are not user gestures. They are reactive lifecycle edges triggered by prop updates.

```mermaid
flowchart TD
  A[source change] --> B[beforesourceset]
  B --> C[beforeanysource]
  C --> D[aftersourceset]
  D --> E[afteranysource]

  F[columns change] --> G[beforecolumnsset]
  G --> H[beforecolumnapplied]
  H --> I[aftercolumnsset]

  J[theme change] --> K[afterthemechanged]
  L[rowDefinitions change] --> M[beforerowdefinition]
  N[trimmedRows change] --> O[beforetrimmed]
  O --> P[aftertrimmed]
  Q[sorting change] --> R[sortingconfigchanged]
  S[filter change] --> T[filterconfigchanged]
  U[rowHeaders change] --> V[rowheaderschanged]
  W[additionalData change] --> X[additionaldatachanged]
```

## Public vs Internal Event Surface

Use [`src/types/events.ts`](/Users/maks/Projects/revogrid-pro-advance/revogrid/src/types/events.ts) as the typed public event catalog.

Most application integrations should anchor on:

- `created`, `aftergridinit`, `beforegridrender`, `aftergridrender`
- `beforesourceset`, `beforeanysource`, `aftersourceset`, `afteranysource`
- `beforecolumnsset`, `beforecolumnapplied`, `aftercolumnsset`
- `beforeeditstart`, `beforeedit`, `beforerangeedit`, `afteredit`
- `beforecellfocus`, `beforefocuslost`, `afterfocus`
- `beforerange`, `beforeautofill`
- `beforesorting`, `beforesortingapply`, `beforesourcesortingapply`, `sortingconfigchanged`
- `beforefilterapply`, `beforefiltertrimmed`, `beforetrimmed`, `aftertrimmed`
- `rowdragstart`, `roworderchanged`
- `viewportscroll`, `contentsizechanged`, `aftercolumnresize`

Useful internal or plugin-only events that also appear in flows:

- `beforeapplyrange`, `beforesetrange`, `setrange`
- `beforepaste`, `beforepasteapply`, `pasteregion`, `afterpasteapply`
- `beforecopyregion`, `clipboardrangecopy`, `clipboardrangepaste`
- `beforefocusrender`, `beforescrollintoview`
- `beforeheaderclick`, `beforeheaderrender`, `beforegroupheaderrender`
- `aftersortingapply`, `afterfilterapply`, `newRows`, `rtlstatechanged`

## Recommended Hooks by Use Case

### Validate edits before commit

- `beforeedit`
- `beforerangeedit`
- `beforecellsave` if you need to stop the overlay before the root write

### Persist changes after commit

- `afteredit`
- `aftersourceset` if you replace source externally

### Drive custom navigation

- `beforecellfocus`
- `beforefocuslost`
- `beforenextvpfocus`
- `afterfocus`

### Observe filter and sorting transitions

- `beforefilterapply`
- `beforefiltertrimmed`
- `beforesorting`
- `beforesortingapply`
- `beforesourcesortingapply`
- `sortingconfigchanged`

### Track render and viewport changes

- `beforegridrender`
- `aftergridrender`
- `beforedatarender`
- `afterrender`
- `viewportscroll`
- `contentsizechanged`

## Related guides

- [Editing](/guide/editing)
- [Filtering](/guide/filters)
- [Sorting](/guide/sorting)
- [Programmatic Grid Control](/guide/programmatic-control)
- [API: Events](/guide/api/events)
