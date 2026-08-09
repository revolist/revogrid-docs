---
title: Sales and Customer Onboarding Kanban
description: Embed a customer journey Kanban with opportunities, ARR, commercial decisions, implementation handoffs, and go-live dates.
outline: deep
image: /blog/kanban-sales-pipeline-polished.png
imageAlt: Real RevoGrid Kanban sales and onboarding board with account-first opportunity cards
head:
  - - meta
    - name: keywords
      content: sales Kanban, onboarding pipeline, CRM board, implementation workflow
---

<script setup lang="ts">
import KanbanUseCaseMedia from './KanbanUseCaseMedia.vue'
</script>

# Sales and Customer Onboarding Kanban

A pipeline becomes hard to trust when account value, customer intent, commercial decisions, and implementation work are separated. The stage may be current while the next human action is missing.

This board treats every card as an account, not a generic task. ARR, the customer promise, the next decision, stakeholders, and the meaningful date form the visual hierarchy.

<KanbanUseCaseMedia
  title="Sales and onboarding"
  slug="sales-onboarding"
  alt="Real RevoGrid Kanban sales and onboarding board with account monograms, ARR, next customer actions, and go-live dates"
  caption="Captured from the real customer-journey board: opportunity, contract, implementation, and live cards use different decision panels."
  live-href="https://kanban.rv-grid.com/?example=sales-onboarding"
/>

## Carry customer context through the handoff

Qualified cards focus on discovery, solution cards on the specialist handoff, contract cards on the commercial decision, implementation cards on go-live work, and live cards on first value. That change in anatomy makes the workflow readable without adding more fields everywhere.

## Treat risk as evidence, not priority

A high-value opportunity is not automatically unhealthy. Risk styling should appear only when a named blocker exists, such as an ownerless security handoff or a decision that threatens the launch date.

## Keep CRM and delivery systems authoritative

Your application owns accounts, contacts, forecasts, commercial permissions, implementation records, and accepted updates. The Kanban is a programmable working view over those records.

## Evaluate with a real customer journey

- Use representative ARR, stakeholders, decisions, and launch dates.
- Confirm account and next action stay readable after media scaling.
- Test a blocked implementation handoff and an over-capacity stage.
- Decide which fields can move with a card and which require server validation.

Related guidance: [RevoGrid Kanban](/kanban), [workflow columns](/kanban/workflow-columns), and [Pro trial access](/trial).
