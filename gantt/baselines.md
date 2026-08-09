---
title: Gantt Chart Baselines for Planned vs Actual Dates
description: Use Gantt baselines to compare approved schedule dates with the current forecast, visualize slippage, preserve snapshots, and connect variance to task data.
outline: deep
head:
  - - meta
    - name: keywords
      content: Gantt baselines JavaScript, planned vs actual Gantt chart, schedule baseline component, baseline variance, project schedule snapshot
faq:
  items:
    - q: What is a Gantt baseline?
      a: A baseline is an approved snapshot of planned task dates and related schedule values used to compare the original commitment with the current plan or actual progress.
    - q: Does changing the current schedule update the baseline?
      a: It should not update an approved baseline automatically. Baseline capture and replacement should be explicit, permissioned product actions.
---

<script setup lang="ts">
import GanttClusterCta from './GanttClusterCta.vue'
</script>

# Gantt Baselines: Planned vs Current Schedule

A baseline preserves the approved plan so users can see what changed after work began. Without it, the current Gantt may look coherent while hiding weeks of accumulated slippage.

<GanttClusterCta />

## Baseline data and visual behavior

At minimum, store planned start and finish for each task. Depending on the product, a baseline may also preserve duration, work, cost, milestone dates, or summary values. The current schedule stays editable; the baseline remains a comparison snapshot until an authorized user deliberately replaces it.

RevoGantt supports baseline data and overlays so planned bars can appear alongside current task bars. The editable grid can also expose planned dates and calculated variance as columns.

## Design baseline workflows, not only baseline bars

A production implementation should answer:

- who can capture or replace a baseline;
- whether the product supports one approved baseline or several snapshots;
- what happens to new, deleted, or split tasks;
- how summary variance is calculated;
- whether imported projects preserve baseline identifiers;
- how timezone and calendar changes affect comparisons;
- whether baseline changes need audit history or approval.

Avoid silently overwriting planned dates when users drag the current task bar. That destroys the comparison the feature exists to provide.

## Use baselines with critical path and progress

Baseline variance says the schedule moved; critical path analysis helps explain whether the movement affects completion. Progress and actual dates show what has happened in execution. Used together, these views help teams distinguish harmless resequencing from delivery risk.

Try the baseline toggle in the [live RevoGantt demo](/demo/gantt). Continue with [critical path analysis](/gantt/critical-path), [resource scheduling](/gantt/resource-scheduling), or the full [Gantt product and pricing page](/gantt).

## Gantt baseline FAQ

### What is a Gantt baseline?

It is an approved schedule snapshot used to compare original planned dates with the current forecast or actual results.

### Should current edits update the baseline?

No. Baseline replacement should be an explicit, permissioned action; routine schedule editing should preserve the approved comparison.

