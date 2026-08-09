---
title: Quality and Manufacturing Kanban
description: Embed a quality workflow with work orders, lots, inspections, containment, CAPA, verification, and closure evidence.
outline: deep
image: /blog/kanban-manufacturing-quality-polished.png
imageAlt: Real RevoKanban manufacturing quality board with traceable inspection records
head:
  - - meta
    - name: keywords
      content: manufacturing Kanban, quality workflow, CAPA board, defect containment
---

<script setup lang="ts">
import KanbanUseCaseMedia from './KanbanUseCaseMedia.vue'
</script>

# Quality and Manufacturing Kanban

A defect becomes expensive when the measurement, material lot, machine, containment action, and customer risk cannot be read together. Teams need to contain the problem quickly without losing the evidence that proves the fix worked.

This quality console uses inspection records rather than project cards. Detected work emphasizes measurements, containment emphasizes affected units, CAPA emphasizes corrective action, and closed work emphasizes verified evidence.

<KanbanUseCaseMedia
  title="Quality and manufacturing"
  slug="quality-manufacturing"
  alt="Real RevoKanban quality board with work orders, lots, stations, inspection results, containment impact, and closure evidence"
  caption="Captured from the real plant-quality board: traceability, measured result, affected material, current decision, and owner stay in one record."
  live-href="https://kanban.rv-grid.com/?example=quality-manufacturing"
/>

## Protect the customer without hiding the evidence

Stage-specific cards keep the most important operational fact prominent. Verification may use a sample fraction when it is meaningful; closed work should show approval and clean evidence rather than a decorative 100% bar.

## Make capacity and containment explicit

A containment WIP warning should sit beside the affected units and disposition decision. The signal helps planners decide whether to sort, hold, rework, or stop—not simply count cards.

## Keep MES and QMS authority intact

The host product owns quality records, specifications, approvals, electronic signatures, traceability, and persistence. Kanban adds the working view while your services validate every state change.

## Evaluate with one representative nonconformance

- Include actual work orders, lots, stations, measurements, and severity rules.
- Check that long identifiers remain readable or expose a clear tooltip.
- Test containment overload, verification evidence, and closure approval.
- Validate audit, permission, and conflict behavior against your QMS policies.

Related guidance: [RevoKanban](/kanban), [large boards](/kanban/performance), and [Pro trial access](/trial).
