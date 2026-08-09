---
title: "JavaScript Gantt Chart Dependencies: FS, SS, FF & SF"
description: "Learn JavaScript Gantt chart dependencies: FS, SS, FF, SF, lead and lag, validation, auto-scheduling, and interactive link editing."
outline: deep
date: 2026-07-09
author: RevoGrid Team
category: Gantt
tags:
  - Gantt
  - JavaScript
  - Dependencies
  - Scheduling
  - RevoGrid Pro
image: /img/gantt-demo.png
imageAlt: RevoGantt JavaScript Gantt chart with task dependencies
head:
  - - meta
    - name: keywords
      content: JavaScript Gantt dependencies, Gantt chart dependencies JavaScript, FS SS FF SF dependencies, JavaScript Gantt chart, Gantt dependencies, Gantt lead lag, finish-to-start dependency, start-to-start dependency, finish-to-finish dependency, start-to-finish dependency, dependency validation, RevoGantt, JavaScript project scheduling, React Gantt dependencies, Vue Gantt dependencies, Angular Gantt dependencies, Svelte Gantt dependencies
  - - meta
    - property: og:title
      content: "JavaScript Gantt Chart Dependencies: FS, SS, FF & SF"
  - - meta
    - property: og:description
      content: "Learn JavaScript Gantt chart dependencies: FS, SS, FF, SF, lead and lag, validation, auto-scheduling, and interactive link editing."
  - - meta
    - property: og:type
      content: article
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "JavaScript Gantt Chart Dependencies: FS, SS, FF & SF",
        "description": "Learn JavaScript Gantt chart dependencies: FS, SS, FF, SF, lead and lag, validation, auto-scheduling, and interactive link editing.",
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
          "@id": "https://rv-grid.com/blog/javascript-gantt-chart-dependencies"
        },
        "datePublished": "2026-07-09",
        "dateModified": "2026-07-09"
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
            "name": "What are the four Gantt dependency types?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The four common Gantt dependency types are finish-to-start (FS), start-to-start (SS), finish-to-finish (FF), and start-to-finish (SF). They define whether the successor is constrained by the predecessor start or finish date."
            }
          },
          {
            "@type": "Question",
            "name": "Does RevoGantt support FS, SS, FF, and SF dependencies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. RevoGantt supports finish-to-start, start-to-start, finish-to-finish, and start-to-finish dependency types, plus lead and lag, dependency validation, dependency diagnostics, and interactive dependency editing."
            }
          },
          {
            "@type": "Question",
            "name": "What is lead and lag in a Gantt chart?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Lag is a positive delay between linked tasks. Lead is a negative lag that allows overlap, such as starting testing before development is fully finished."
            }
          },
          {
            "@type": "Question",
            "name": "Can users edit Gantt dependencies visually in JavaScript?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. RevoGantt supports drag-to-create links from dependency handles, hover and select states, inline delete UI, keyboard delete on selected links, and allowed dependency type filtering."
            }
          }
        ]
      }
---

# JavaScript Gantt Chart Dependencies: FS, SS, FF & SF

::: tip See dependencies in the full product
Explore [RevoGantt](/gantt) for the complete feature set, advanced dependency demo, performance evidence, current pricing, and trial access.
:::

![RevoGantt JavaScript Gantt chart with task dependencies](/blog/gantt-dependencies.png)

A JavaScript Gantt chart becomes useful when it does more than draw bars on a timeline.

Real project planning needs task relationships. A build cannot start before design is approved. QA may start two days before development is fully complete. A launch milestone may need to finish at the same time as a release candidate. These rules are **Gantt dependencies**, and they are what turn a timeline into a scheduling tool.

This guide explains how to model Gantt chart dependencies in JavaScript with **finish-to-start**, **start-to-start**, **finish-to-finish**, and **start-to-finish** relationships, plus **lead/lag**, **validation**, and **interactive dependency editing**.

For a runnable example, open the [RevoGantt live demo](/demo/gantt) or the [advanced dependency demo](https://demo.rv-grid.com/gantt-dependencies-advanced/ts).

## Target keywords for this guide

This guide is optimized for developers and product teams searching for:

- JavaScript Gantt dependencies
- Gantt chart dependencies JavaScript
- FS SS FF SF dependencies
- JavaScript Gantt chart with dependencies
- React Gantt dependencies
- Vue Gantt dependencies
- Angular Gantt dependencies
- Svelte Gantt dependencies
- finish-to-start dependency
- start-to-start dependency
- finish-to-finish dependency
- start-to-finish dependency
- Gantt lead lag
- dependency validation in Gantt chart

For implementation details, use the [RevoGantt documentation](https://pro.rv-grid.com/guides/gantt/), the [dependencies guide](https://pro.rv-grid.com/guides/gantt/concepts/dependencies/), the [dependency editing guide](https://pro.rv-grid.com/guides/gantt/interaction/dependency-editing/), and the [Gantt examples](https://pro.rv-grid.com/guides/gantt/examples/).

---

## What are Gantt chart dependencies?

A Gantt dependency connects a **predecessor task** to a **successor task**.

The predecessor is the task that controls another task. The successor is the task whose start or finish date must respect the predecessor.

```text
Predecessor task                Successor task
┌─────────────────────┐         ┌─────────────────────┐
│ Design              │ ──────▶ │ Build               │
└─────────────────────┘         └─────────────────────┘
```

Without dependencies, a Gantt chart is mostly a visual timeline. With dependencies, the chart can answer scheduling questions:

- What moves when a task slips?
- Which tasks can overlap?
- Which tasks must finish together?
- Which dependency is invalid?
- Which chain controls the project finish date?
- Which manual task is violating an automatic schedule rule?

That is why dependency handling is one of the most important differences between a simple timeline widget and a real JavaScript Gantt component.

## The four dependency types: FS, SS, FF, SF

Most project scheduling systems use four dependency types.

| Type | Full name | Rule | Common use |
| --- | --- | --- | --- |
| `FS` | Finish-to-Start | Successor starts after predecessor finishes. | Design must finish before development starts. |
| `SS` | Start-to-Start | Successor starts no earlier than predecessor starts. | UX review starts when design starts. |
| `FF` | Finish-to-Finish | Successor finishes no earlier than predecessor finishes. | Documentation finishes when implementation finishes. |
| `SF` | Start-to-Finish | Successor finishes no earlier than predecessor starts. | Handover finishes when replacement shift starts. |

RevoGantt supports all four dependency types:

```ts
const dependencies = [
  {
    id: 'design-build',
    predecessorTaskId: 'design',
    successorTaskId: 'build',
    type: 'finish-to-start',
    lagDays: 0,
  },
  {
    id: 'design-review',
    predecessorTaskId: 'design',
    successorTaskId: 'review',
    type: 'start-to-start',
    lagDays: 0,
  },
  {
    id: 'implementation-docs',
    predecessorTaskId: 'implementation',
    successorTaskId: 'docs',
    type: 'finish-to-finish',
    lagDays: 0,
  },
  {
    id: 'new-shift-old-shift',
    predecessorTaskId: 'new-shift',
    successorTaskId: 'old-shift',
    type: 'start-to-finish',
    lagDays: 0,
  },
];
```

### Finish-to-Start dependency

Finish-to-start is the most common dependency type. The successor cannot start until the predecessor finishes.

```text
FS: Design must finish before Build starts

Design:  ┌───────────────┐
         │               │
         └───────────────┘
                         │
                         ▼
Build:                   ┌───────────────┐
                         │               │
                         └───────────────┘
```

Use FS when tasks are sequential:

- requirements before implementation;
- implementation before QA;
- QA before release;
- procurement before installation;
- approval before publishing.

```ts
{
  id: 'design-build',
  predecessorTaskId: 'design',
  successorTaskId: 'build',
  type: 'finish-to-start',
  lagDays: 0,
}
```

### Start-to-Start dependency

Start-to-start means the successor cannot start before the predecessor starts. It does not require the predecessor to finish first.

```text
SS: Review can start when Design starts

Design:  ┌──────────────────────┐
         │                      │
         └──────────────────────┘
         │
         ▼
Review:  ┌───────────────┐
         │               │
         └───────────────┘
```

Use SS when work can happen in parallel after another task has started:

- design and design review;
- development and technical writing;
- site preparation and procurement tracking;
- integration planning and backend implementation.

```ts
{
  id: 'design-review',
  predecessorTaskId: 'design',
  successorTaskId: 'review',
  type: 'start-to-start',
  lagDays: 0,
}
```

### Finish-to-Finish dependency

Finish-to-finish means the successor cannot finish before the predecessor finishes.

```text
FF: Documentation should finish with Implementation

Implementation: ┌──────────────────────┐
                │                      │
                └──────────────────────┘
                                       │
                                       ▼
Docs:              ┌───────────────────┐
                   │                   │
                   └───────────────────┘
```

Use FF when two pieces of work should complete together:

- documentation and implementation;
- test report and testing;
- compliance review and evidence collection;
- training material and product release.

```ts
{
  id: 'implementation-docs',
  predecessorTaskId: 'implementation',
  successorTaskId: 'docs',
  type: 'finish-to-finish',
  lagDays: 0,
}
```

### Start-to-Finish dependency

Start-to-finish means the successor cannot finish before the predecessor starts.

```text
SF: Old shift finishes only after New shift starts

New shift:       ┌───────────────┐
                 │               │
                 └───────────────┘
                 │
                 ▼
Old shift: ┌───────────────┐
           │               │
           └───────────────┘
```

SF is less common, but it is useful for handover workflows, service continuity, shift transitions, and cutover plans.

```ts
{
  id: 'new-shift-old-shift',
  predecessorTaskId: 'new-shift',
  successorTaskId: 'old-shift',
  type: 'start-to-finish',
  lagDays: 0,
}
```

## Lead and lag in Gantt dependencies

A dependency type defines the relationship. **Lag** and **lead** define the offset.

- Positive `lagDays` creates a delay.
- Negative `lagDays` creates lead time and allows overlap.

```text
FS + 2 days lag

Design:  ┌───────────────┐
         │               │
         └───────────────┘
                         ── 2 day gap ──▶
Build:                                  ┌───────────────┐
                                        │               │
                                        └───────────────┘
```

```text
FS - 2 days lead

Design:  ┌────────────────────────┐
         │                        │
         └────────────────────────┘
                    │
                    ▼ overlap
Build:              ┌───────────────────┐
                    │                   │
                    └───────────────────┘
```

In RevoGantt, lead and lag are represented with `lagDays`:

```ts
const dependencies = [
  // Build starts two working days after Design finishes.
  {
    id: 'design-build-buffer',
    predecessorTaskId: 'design',
    successorTaskId: 'build',
    type: 'finish-to-start',
    lagDays: 2,
  },

  // QA starts two days before Build finishes.
  {
    id: 'build-qa-overlap',
    predecessorTaskId: 'build',
    successorTaskId: 'qa',
    type: 'finish-to-start',
    lagDays: -2,
  },
];
```

Lead/lag is essential for realistic planning because not every task relationship is strictly sequential.

Common examples:

| Scenario | Dependency |
| --- | --- |
| Wait three days after concrete pour before inspection | `FS+3` |
| Begin QA two days before development finishes | `FS-2` |
| Start documentation one day after development starts | `SS+1` |
| Finish release notes one day after feature complete | `FF+1` |

## Inline dependency syntax

RevoGantt also supports MSP-style dependency tokens in predecessor and successor cells.

```text
1FS
2SS+3
3FF-1d
task-4SF-2
```

That syntax is compact and familiar for users coming from Microsoft Project-style scheduling.

| Token | Meaning |
| --- | --- |
| `1FS` | Finish-to-start dependency on task `1`. |
| `2SS+3` | Start-to-start dependency on task `2` with 3 days lag. |
| `3FF-1d` | Finish-to-finish dependency on task `3` with 1 day lead. |
| `task-4SF-2` | Start-to-finish dependency on task `task-4` with 2 days lead. |

Inline tokens are useful when your Gantt UI includes spreadsheet-like task columns where users expect to edit dependencies directly.

## JavaScript example: Gantt with dependencies

The minimal pattern is:

1. load the RevoGrid custom element;
2. attach the Gantt plugin;
3. provide task rows;
4. provide Gantt config;
5. provide dependency records;
6. provide calendars when duration should respect working days and holidays.

```ts
import { defineCustomElements } from '@revolist/revogrid/loader';
import {
  GanttPlugin,
  createDefaultTaskTableColumn,
  type CalendarEntity,
  type DependencyEntity,
  type GanttTaskSourceRow,
  type TaskTableColumnProp,
} from '@revolist/revogrid-enterprise';

defineCustomElements();

const CALENDAR_ID = 'standard-calendar';

const taskColumns: TaskTableColumnProp[] = [
  'wbs',
  'name',
  'status',
  'startDate',
  'endDate',
  'duration',
  'percentDone',
  'predecessors',
];

const columns = taskColumns.map((prop) => createDefaultTaskTableColumn(prop));

const calendars: CalendarEntity[] = [
  {
    id: CALENDAR_ID,
    name: 'Standard working calendar',
    timeZone: 'UTC',
    workingDays: [1, 2, 3, 4, 5],
    holidays: ['2026-05-01'],
    hoursPerDay: 8,
  },
];

const tasks: GanttTaskSourceRow[] = [
  {
    id: 'design',
    parentId: null,
    name: 'Design',
    type: 'task',
    status: 'in-progress',
    startDate: '2026-04-01',
    endDate: '2026-04-03',
    duration: 3,
    percentDone: 60,
    calendarId: CALENDAR_ID,
    taskMode: 'auto',
    tags: [],
  },
  {
    id: 'build',
    parentId: null,
    name: 'Build',
    type: 'task',
    status: 'not-started',
    startDate: '2026-04-06',
    endDate: '2026-04-10',
    duration: 5,
    percentDone: 0,
    calendarId: CALENDAR_ID,
    taskMode: 'auto',
    tags: [],
  },
  {
    id: 'qa',
    parentId: null,
    name: 'QA',
    type: 'task',
    status: 'not-started',
    startDate: '2026-04-09',
    endDate: '2026-04-13',
    duration: 3,
    percentDone: 0,
    calendarId: CALENDAR_ID,
    taskMode: 'auto',
    tags: [],
  },
  {
    id: 'release',
    parentId: null,
    name: 'Release',
    type: 'milestone',
    status: 'not-started',
    startDate: '2026-04-14',
    endDate: '2026-04-14',
    duration: 0,
    percentDone: 0,
    calendarId: CALENDAR_ID,
    taskMode: 'auto',
    tags: ['milestone'],
  },
];

const dependencies: DependencyEntity[] = [
  {
    id: 'design-build',
    predecessorTaskId: 'design',
    successorTaskId: 'build',
    type: 'finish-to-start',
    lagDays: 1,
  },
  {
    id: 'build-qa',
    predecessorTaskId: 'build',
    successorTaskId: 'qa',
    type: 'finish-to-start',
    lagDays: -2,
  },
  {
    id: 'qa-release',
    predecessorTaskId: 'qa',
    successorTaskId: 'release',
    type: 'finish-to-start',
    lagDays: 0,
  },
];

const grid = document.querySelector('revo-grid') as HTMLRevoGridElement;

grid.theme = 'compact';
grid.hideAttribution = true;
grid.plugins = [GanttPlugin];
grid.columns = columns;
grid.source = tasks;
grid.ganttCalendars = calendars;
grid.ganttDependencies = dependencies;
grid.gantt = {
  id: 'release-plan',
  name: 'Release plan',
  version: '1',
  timeZone: 'UTC',
  primaryCalendarId: CALENDAR_ID,
  zoomPreset: 'week',
  allowTaskCreate: true,
  allowedDependencyTypes: [
    'finish-to-start',
    'start-to-start',
    'finish-to-finish',
    'start-to-finish',
  ],
  scheduling: {
    scheduleFrom: 'project-start',
    projectStartDate: '2026-04-01',
    lagCalendar: 'working',
  },
  visuals: {
    showDependencies: true,
    showCriticalPath: true,
    shadeNonWorkingTime: true,
  },
};
```

This gives you a dependency-aware Gantt where automatic tasks are recalculated from predecessor relationships, lag/lead, calendars, and scheduling configuration.

## React example

RevoGrid is built on Web Components, with framework wrappers for React, Vue, Angular, Svelte, and plain JavaScript. The same dependency data can be used across frontend stacks.

```tsx
import React, { useMemo, useRef } from 'react';
import { RevoGrid } from '@revolist/react-datagrid';
import { GanttPlugin } from '@revolist/revogrid-enterprise';

export function ProjectGantt() {
  const gridRef = useRef<HTMLRevoGridElement>(null);

  const plugins = useMemo(() => [GanttPlugin], []);

  const gantt = useMemo(() => ({
    id: 'release-plan',
    name: 'Release plan',
    version: '1',
    timeZone: 'UTC',
    primaryCalendarId: 'standard-calendar',
    zoomPreset: 'week' as const,
    scheduling: {
      scheduleFrom: 'project-start' as const,
      projectStartDate: '2026-04-01',
      lagCalendar: 'working' as const,
    },
    visuals: {
      showDependencies: true,
      showCriticalPath: true,
    },
  }), []);

  const dependencies = useMemo(() => [
    {
      id: 'design-build',
      predecessorTaskId: 'design',
      successorTaskId: 'build',
      type: 'finish-to-start' as const,
      lagDays: 1,
    },
    {
      id: 'build-qa',
      predecessorTaskId: 'build',
      successorTaskId: 'qa',
      type: 'finish-to-start' as const,
      lagDays: -2,
    },
  ], []);

  return (
    <RevoGrid
      ref={gridRef}
      theme="compact"
      hideAttribution
      plugins={plugins}
      source={tasks}
      columns={columns}
      gantt={gantt}
      ganttDependencies={dependencies}
      ganttCalendars={calendars}
    />
  );
}
```

The important part is that dependencies stay as ordinary project data. You can load them from REST, GraphQL, PostgreSQL, JSON snapshots, or your own project model.

## Dependency validation

Dependency validation is where Gantt chart often become product-critical.

A dependency graph can be invalid. The most common invalid case is a cycle:

```text
Setup load balancer ──▶ Configure firewall
        ▲                         │
        │                         ▼
        └──────── Verify routing ◀┘
```

A cycle means there is no valid order for automatic scheduling. The scheduler cannot place each task after the task that depends on it, because the chain loops back to the beginning.

RevoGantt reports circular dependency chains as dependency diagnostics and rejects new dependency edits that would create a cycle before they change the Gantt store.

```ts
const cycle = schedulerResult.issues.find(
  (issue) => issue.code === 'dependency-cycle',
);

if (cycle) {
  console.warn('Dependency cycle detected', {
    taskIds: cycle.taskIds,
    dependencyIds: cycle.dependencyIds,
  });
}
```

Dependency validation should be visible to users. A good product should explain the conflict instead of silently moving dates or silently dropping links.

Recommended validation UX:

| Problem | Recommended UI |
| --- | --- |
| Dependency cycle | Show the affected task chain and block the new link. |
| Missing predecessor | Highlight the dependency cell and show a repair action. |
| Missing successor | Highlight the dependency cell and show a repair action. |
| Manual task violates dependency | Keep the manual date but show a warning. |
| Imported project contains cycle | Render the project but disable dependency propagation until fixed. |

## Interactive dependency editing

A dependency-aware Gantt should support both data-driven and visual editing.

RevoGantt supports:

- drag-to-create dependency links from dependency handles;
- allowed dependency type filtering with `gantt.allowedDependencyTypes`;
- hover and selected dependency styling;
- inline delete UI;
- keyboard delete on selected dependency links.

```ts
grid.gantt = {
  ...grid.gantt,
  allowedDependencyTypes: [
    'finish-to-start',
    'start-to-start',
    'finish-to-finish',
    'start-to-finish',
  ],
  visuals: {
    ...grid.gantt?.visuals,
    showDependencies: true,
  },
};
```

That matters because dependency editing is not just a developer API. In project planning products, users expect to draw and update links directly in the timeline.

## Auto scheduling vs manual scheduling

Dependencies have different behavior depending on whether a task is automatic or manual.

Automatic tasks can be recalculated when dependencies, constraints, calendars, and project scheduling direction require a new date.

Manual tasks preserve authored dates. They can still show dependency violations, but the engine should not silently override the user's manual intent.

```ts
const tasks = [
  {
    id: 'design',
    name: 'Design',
    startDate: '2026-04-01',
    duration: 3,
    taskMode: 'auto',
  },
  {
    id: 'review',
    name: 'Manual review',
    startDate: '2026-04-02',
    duration: 1,
    taskMode: 'manual',
  },
];

const dependencies = [
  {
    id: 'design-review',
    predecessorTaskId: 'design',
    successorTaskId: 'review',
    type: 'finish-to-start',
    lagDays: 0,
  },
];
```

In this example, the manual review date may violate the FS dependency. A good Gantt should preserve the manual date and make the conflict visible.

That behavior is important for real-world scheduling because not every task can be moved automatically. Some dates are contractual, externally imposed, or intentionally overridden.

## Scheduling direction: project start or project finish

Most projects schedule forward from a start date.

```ts
grid.gantt = {
  scheduling: {
    scheduleFrom: 'project-start',
    projectStartDate: '2026-04-01',
  },
};
```

Forward scheduling places automatic tasks as early as their dependencies and constraints allow.

Some projects schedule backward from a required finish date.

```ts
grid.gantt = {
  scheduling: {
    scheduleFrom: 'project-finish',
    projectFinishDate: '2026-06-30',
  },
};
```

Backward scheduling is useful for launch deadlines, compliance cutoffs, event planning, and contractual finish dates. The dependency graph pulls predecessor work earlier so the final delivery date can be protected.

## Dependencies and critical path

Dependencies are also the foundation for critical path analysis.

The critical path is the chain of tasks that controls the calculated project finish date. If a critical task slips, the project finish slips.

```text
Critical path example

Discovery ──▶ Design ──▶ Build ──▶ QA ──▶ Launch
                │
                └────▶ Docs
```

In this example, `Docs` may have slack if it can move without changing the launch date. `Discovery → Design → Build → QA → Launch` may be critical if each task controls the final finish.

RevoGantt can compute and highlight critical path after scheduling rules are applied.

```ts
grid.gantt = {
  ...grid.gantt,
  visuals: {
    ...grid.gantt?.visuals,
    showCriticalPath: true,
  },
};
```

Critical path is especially useful in SaaS project planning, construction, manufacturing, implementation projects, agency operations, and roadmap tools where users need to understand what actually affects delivery.

## Feature checklist: what a dependency-ready JavaScript Gantt needs

When comparing JavaScript Gantt components, do not stop at "draw arrows".

A production Gantt dependency system should cover the full scheduling workflow.

| Capability | Why it matters | RevoGantt |
| --- | --- | --- |
| FS dependencies | Most common sequential task rule. | ✅ |
| SS dependencies | Enables parallel starts. | ✅ |
| FF dependencies | Aligns finish dates. | ✅ |
| SF dependencies | Supports handover and cutover patterns. | ✅ |
| Lead and lag | Handles overlap and waiting time. | ✅ |
| Inline dependency tokens | Familiar MSP-style editing in cells. | ✅ |
| Dependency validation | Blocks cycles and invalid graph edits. | ✅ |
| Diagnostics | Lets product UI explain scheduling conflicts. | ✅ |
| Drag-to-create links | Enables visual dependency editing. | ✅ |
| Link delete/edit UI | Lets users maintain plans without raw JSON. | ✅ |
| Auto scheduling | Recalculates successors from dependency rules. | ✅ |
| Manual scheduling warnings | Preserves authored dates while showing issues. | ✅ |
| Calendars and holidays | Makes duration realistic. | ✅ |
| Critical path | Shows the chain controlling delivery. | ✅ |
| Resources and assignments | Connects scheduling to people and capacity. | ✅ |
| Baselines | Compares current plan to original plan. | ✅ |
| Framework support | Works in real frontend stacks. | React, Vue, Angular, Svelte, JavaScript |

## RevoGrid vs other JavaScript Gantt libraries for dependencies

Several JavaScript Gantt libraries support dependencies. The right choice depends on whether your product needs a standalone Gantt suite, a broad UI component suite, or a grid-first planning surface.

| Library | Dependency support | Best fit | Trade-off |
| --- | --- | --- | --- |
| **RevoGantt** | FS, SS, FF, SF, lead/lag, validation, diagnostics, drag editing, auto/manual scheduling. | Data-heavy SaaS apps that need Gantt inside an editable grid. | Smaller public ecosystem than older Gantt vendors. |
| **Syncfusion Gantt** | Strong task dependency feature set with FS/SS/FF/SF, offsets, connector customization, and validation modes. | Teams already buying the Syncfusion UI suite. | Broader suite dependency when you only need grid-first planning. |
| **Bryntum Gantt** | Mature scheduling engine with dependencies, constraints, calendars, resources, and framework integrations. | Advanced standalone Gantt and scheduling use cases. | Commercial Gantt suite with its own data and UI model. |
| **DHTMLX Gantt** | Supports dependency link types, lag/lead, and auto scheduling in Pro. | Teams that want a long-running standalone JS Gantt. | More separate from a grid-first data surface. |
| **DevExtreme Gantt** | Gantt component with framework wrappers and dependency data configuration. | Teams already using DevExtreme. | Best evaluated inside the larger DevExtreme suite. |
| **Kendo UI Gantt** | Established Gantt component in the Kendo ecosystem. | Teams standardized on Telerik/Kendo UI. | More framework/suite-oriented than RevoGrid's Web Component base. |

The RevoGrid positioning is different:

> Keep the grid as the primary product surface. Add Gantt scheduling, dependency links, timeline projection, resources, baselines, and critical path on top.

That is valuable when your users already live in tables, task lists, operations dashboards, ERP screens, financial planning tools, construction schedules, implementation workspaces, or internal SaaS workflows.

## When RevoGantt is the right fit

Choose RevoGantt when your product needs:

- a JavaScript Gantt chart embedded in an application, not a separate project management tool;
- editable task rows and a timeline in the same surface;
- FS, SS, FF, and SF dependencies;
- lead and lag support;
- dependency validation and diagnostics;
- drag-to-edit dependency links;
- auto and manual scheduling;
- working calendars and holidays;
- resource assignments and workload context;
- critical path and slack visibility;
- baselines and progress tracking;
- React, Vue, Angular, Svelte, and vanilla JavaScript support;
- a grid-first architecture that can share patterns with the rest of your data-heavy UI.

For teams comparing Gantt alternatives, the key question is not only:

> Which library has a Gantt chart?

The better question is:

> Which library lets us add scheduling to our product without losing control of our data model, grid UX, framework stack, and custom business workflows?

## Common implementation mistakes

### Mistake 1: storing dependencies only as display strings

A string such as `2FS+3` is useful for cell editing, but your application should also have a normalized dependency record.

Good normalized shape:

```ts
type ProjectDependency = {
  id: string;
  predecessorTaskId: string;
  successorTaskId: string;
  type: 'finish-to-start' | 'start-to-start' | 'finish-to-finish' | 'start-to-finish';
  lagDays: number;
};
```

This makes validation, persistence, import/export, and API integration easier.

### Mistake 2: ignoring cycles

A cycle can break automatic scheduling. Always validate before saving dependency edits.

```text
A depends on B
B depends on C
C depends on A
```

That graph cannot produce a valid automatic schedule.

### Mistake 3: treating manual tasks like automatic tasks

Manual tasks should preserve user-authored dates. Show warnings when they violate dependencies, but do not silently move them unless the user explicitly chooses that behavior.

### Mistake 4: ignoring calendars

A two-day lag is not always two calendar days. If your users plan around working days, holidays, and time zones, dependency offsets should respect the correct calendar policy.

### Mistake 5: hiding scheduling diagnostics

Users trust schedules when they understand why dates moved. Expose dependency warnings, cycle errors, manual task violations, constraint conflicts, and resource warnings in the UI.

## Internal linking recommendations

Use this article as the main feature-intent page for dependency searches. Recommended internal links:

| Anchor | Target |
| --- | --- |
| JavaScript Gantt chart | [/gantt](/gantt) |
| RevoGantt live demo | [/demo/gantt](/demo/gantt) |
| RevoGrid Pro | [/pro](/pro) |
| React data grid | [/guide/react/](/guide/react/) |
| Vue data grid | [/guide/vue3/](/guide/vue3/) |
| Angular data grid | [/guide/angular/](/guide/angular/) |
| Svelte data grid | [/guide/svelte/](/guide/svelte/) |
| Gantt documentation | [https://pro.rv-grid.com/guides/gantt/](https://pro.rv-grid.com/guides/gantt/) |
| Gantt dependencies guide | [https://pro.rv-grid.com/guides/gantt/concepts/dependencies/](https://pro.rv-grid.com/guides/gantt/concepts/dependencies/) |
| Dependency editing guide | [https://pro.rv-grid.com/guides/gantt/interaction/dependency-editing/](https://pro.rv-grid.com/guides/gantt/interaction/dependency-editing/) |
| Advanced dependency demo | [https://demo.rv-grid.com/gantt-dependencies-advanced/ts](https://demo.rv-grid.com/gantt-dependencies-advanced/ts) |

For comparison-led traffic, add dedicated pages such as:

- `Syncfusion Gantt alternative`
- `Bryntum Gantt alternative`
- `DHTMLX Gantt alternative`
- `DevExtreme Gantt alternative`
- `Kendo UI Gantt alternative`
- `Microsoft Project Gantt alternative`

These comparison pages should link back to this dependency article whenever they discuss FS/SS/FF/SF, lead/lag, dependency validation, and interactive editing.

## FAQ

### What are FS, SS, FF, and SF dependencies?

FS, SS, FF, and SF are the four common Gantt dependency types. FS means finish-to-start, SS means start-to-start, FF means finish-to-finish, and SF means start-to-finish.

### Does RevoGantt support all four dependency types?

Yes. RevoGantt supports finish-to-start, start-to-start, finish-to-finish, and start-to-finish dependencies.

### Does RevoGantt support lead and lag?

Yes. RevoGantt supports positive lag and negative lead through `lagDays`. Positive values delay the successor. Negative values allow overlap.

### Can users edit dependencies visually?

Yes. RevoGantt supports drag-to-create dependency links, hover and select states, inline delete UI, keyboard delete, and allowed dependency type filtering.

### What happens when a dependency would create a cycle?

A circular dependency is invalid schedule data. RevoGantt reports cycle diagnostics and rejects new dependency edits that would create a cycle before they change the Gantt store.

### Can manual tasks violate dependencies?

Manual tasks can preserve authored dates even when a dependency would schedule them differently. A good product should surface that as a warning so the user can decide whether to keep the manual date or resolve the conflict.

### Is RevoGantt only for React?

No. RevoGrid is built as a Web Component and supports JavaScript, React, Vue, Angular, and Svelte.

### When should I choose RevoGantt over a standalone Gantt suite?

Choose RevoGantt when the Gantt is part of a larger editable data application and you want scheduling, dependencies, task rows, custom columns, validation, and timeline UX to share one grid-first foundation.

## Final recommendation

A JavaScript Gantt chart with dependencies should do more than render arrows.

For real project planning, you need FS, SS, FF, and SF relationships; lead and lag; validation; diagnostics; editable links; automatic scheduling; manual task warnings; calendars; resources; baselines; and critical path.

RevoGantt gives product teams that dependency-aware scheduling layer inside the same high-performance grid foundation used for data-heavy applications.

Start with the [RevoGantt product page](/gantt), open the [live Gantt demo](/demo/gantt), then test the [advanced dependency demo](https://demo.rv-grid.com/gantt-dependencies-advanced/ts).

---

RevoGrid is a trademark of Revolist OU. Syncfusion, Bryntum, DHTMLX, DevExtreme, Kendo UI, Telerik, Microsoft Project, and other product names are trademarks of their respective owners. This page is an independent technical guide for developers evaluating JavaScript Gantt chart dependencies.
