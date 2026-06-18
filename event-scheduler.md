---
title: RevoGrid Event Scheduler - JavaScript Event Scheduling for Web Apps
description: Build staff schedules, booking calendars, resource timelines, shift planners, and capacity views with the Enterprise Event Scheduler plugin for RevoGrid.
sidebar: false
aside: false
editLink: false
footer: true
prev: false
next: false
pageClass: gantt-page-doc
layout: custom
breadcrumbs: false
headerNav:
  hiddenItems:
    - Product
    - Links
    - RevoGrid Pro
  links:
    - text: Docs
      href: /guides/event-scheduler
      base: pro
head:
  - - meta
    - name: keywords
      content: Event Scheduler, JavaScript event scheduler, resource scheduler, shift planning software, booking scheduler, staff scheduler, room booking scheduler, equipment scheduler, workforce scheduling UI, RevoGrid Event Scheduler, React event scheduler, Vue event scheduler, Angular event scheduler
ganttLanding:
  colors:
    accent: '#7c3aed'
    accent2: '#14b8a6'
    soft: rgba(124, 58, 237, 0.09)
    border: rgba(124, 58, 237, 0.22)
    darkAccent: '#a78bfa'
    darkAccent2: '#5eead4'
    darkSoft: rgba(167, 139, 250, 0.14)
    darkBorder: rgba(167, 139, 250, 0.28)
  hero:
    eyebrow: RevoGrid Enterprise / Event Scheduler
    title: Build event scheduling into your product.
    description: EventSchedulerPlugin turns RevoGrid into a commercial scheduling surface for staff rosters, room bookings, equipment plans, field crews, support queues, and team capacity. Keep schedule data, editing, rules, and persistence inside your app.
    actions:
      - label: Explore the scheduler demo
        href: /demo/event-scheduler
        arrow: true
      - label: Read Event Scheduler docs
        href: https://pro.rv-grid.com/guides/event-scheduler/
        variant: secondary
        target: _blank
        rel: noopener
    badges:
      - Week calendars
      - Resource timelines
      - Conflict rules
      - Remote data
  preview:
    enabled: true
    kind: eventScheduler
    title: event-scheduler.revogrid.ts
    pills:
      - label: Week view
        active: true
      - label: Resources
      - label: Remote
    liveLabel: Live
  statsAriaLabel: Event Scheduler product stats
  stats:
    - value: '4'
      label: scheduler views
    - value: Controlled
      label: event persistence
    - value: Built-in
      label: conflict detection
    - value: '5'
      label: framework targets
  features:
    id: features
    kicker: Features
    title: Event scheduling features for real product workflows.
    description: Ship calendar and resource planning screens without building a scheduler engine, event editor, conflict layer, and grid interaction model from scratch.
    items:
      - icon: '01'
        title: Calendar and timeline views
        description: Use day, week, month, and resourceTimeline layouts for shift calendars, booking grids, dispatch boards, machine plans, and team capacity views.
        tags: [Day, Week, Month, Resource timeline]
      - icon: '02'
        title: Controlled event editing
        description: Create, move, resize, edit, delete, select, copy, paste, and duplicate events while your app owns the accepted event array and backend persistence.
        tags: [Create, Move, Resize, Controlled state]
      - icon: '03'
        title: Resource and capacity planning
        description: Model people, rooms, equipment, vehicles, teams, locations, parent groups, assignments, coverage requirements, and utilization in one scheduler projection.
        tags: [Resources, Assignments, Utilization]
      - icon: '04'
        title: Availability and conflict rules
        description: Combine calendars, working hours, blocked time, holidays, breaks, overlap checks, missing resources, invalid durations, and capacity warnings.
        tags: [Calendars, Availability, Conflicts]
      - icon: '05'
        title: Templates and recurrence
        description: Speed up repeated scheduling with event templates, recurring event helpers, recurrence-series edits, clipboard workflows, and bulk scheduler actions.
        tags: [Templates, Recurrence, Bulk actions]
      - icon: '06'
        title: Remote-ready customization
        description: Adapt event bars, headers, labels, context menus, keyboard shortcuts, remote loading, optimistic mutations, rollback, exports, and print views.
        tags: [Custom renderers, Remote mode, Export]
  integrations:
    id: integrations
    kicker: Integrations
    title: Event Scheduler for your frontend stack
    description: Build the same scheduler product surface across JavaScript, Vue, React, Angular, and Svelte with RevoGrid's Web Component foundation.
    items:
      - icon: JS
        name: JavaScript
        badge: ''
      - icon: Vue
        name: Vue
        badge: ''
      - icon: React
        name: React
        badge: ''
      - icon: Ng
        name: Angular
        badge: ''
      - icon: Sv
        name: Svelte
        badge: ''
  advancedCallout:
    title: Event Scheduler is part of the Pro Advanced bundle.
  cta:
    title: Ship scheduling as a native product feature.
    description: Add event calendars, resource timelines, validation rules, and controlled persistence to your app without sending users to a separate scheduling tool.
    primaryHref: /demo/event-scheduler
    primaryLabel: Explore scheduler demo
    secondaryHref: /pricing
    secondaryLabel: View Pro pricing
---

<script lang="ts" setup>
import GanttPageLayout from './gantt/GanttPageLayout.vue'
</script>

<GanttPageLayout />

<section class="event-scheduler-example" aria-labelledby="event-scheduler-example-title">
  <div class="event-scheduler-example__inner">
    <p class="event-scheduler-example__kicker">Live example</p>
    <h2 id="event-scheduler-example-title">Week-view shift planning with EventSchedulerPlugin.</h2>
    <p>
      The embedded demo uses the existing <code>event-scheduler-shift-week</code> example:
      weekdays across the top, time slots down the grid, employee resources, locked shifts,
      overlap conflicts, drag-create, move, resize, delete, calendar switching, and controlled
      event persistence.
    </p>
    <DemoWidgetFrame
      demo="event-scheduler-shift-week"
      framework="ts"
      title="RevoGrid Event Scheduler shift week example"
      :initial-height="760"
      :min-height="620"
      :max-height="980"
    />
  </div>
</section>

<style scoped>
.event-scheduler-example {
  border-top: 1px solid var(--vp-c-divider);
  padding: 88px 0 96px;
  background: var(--vp-c-bg);
}

.event-scheduler-example__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 48px;
}

.event-scheduler-example__kicker {
  display: inline-flex;
  align-items: center;
  margin: 0 0 12px;
  color: var(--gantt-accent, var(--vp-c-brand-1));
  font-family: var(--vp-font-family-mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.event-scheduler-example h2 {
  max-width: 720px;
  margin: 0 0 14px;
  color: var(--vp-c-text-1);
  font-size: clamp(30px, 3.4vw, 44px);
  font-weight: 600;
  line-height: 1.1;
}

.event-scheduler-example p:not(.event-scheduler-example__kicker) {
  max-width: 720px;
  margin: 0 0 36px;
  color: var(--vp-c-text-2);
  font-size: 16px;
  line-height: 1.7;
}

.event-scheduler-example code {
  color: var(--gantt-accent, var(--vp-c-brand-1));
  background: var(--vp-c-bg-soft);
  border-radius: 6px;
  padding: 2px 6px;
  font-size: 0.9em;
}

:deep(.event-scheduler-example .demo-widget-frame) {
  min-height: 620px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 18px;
  box-shadow: var(--pro-doc-shadow-lg, 0 18px 48px rgba(0, 0, 0, 0.1));
}

@media (max-width: 768px) {
  .event-scheduler-example {
    padding: 64px 0 72px;
  }

  .event-scheduler-example__inner {
    padding: 0 24px;
  }
}
</style>
