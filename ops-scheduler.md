---
title: RevoGrid Ops Scheduler - Dispatch, Shift, and Capacity Scheduling for Web Apps
description: Build fast operational scheduling software with RevoGrid Ops Scheduler for dispatch boards, shift planning, capacity management, service windows, and resource timelines.
externalHomeLinks: true
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
      href: /guides/gantt
      base: pro
head:
  - - meta
    - name: keywords
      content: Ops Scheduler, Operational Scheduling Software, Dispatch Scheduling, Shift Planning, Capacity Planning, Resource Scheduling, Service Window Scheduling, Field Operations Scheduler, RevoGrid Scheduler, JavaScript Scheduler
ganttLanding:
  colors:
    accent: '#b45309'
    accent2: '#f59e0b'
    soft: rgba(180, 83, 9, 0.09)
    border: rgba(180, 83, 9, 0.22)
    darkAccent: '#fbbf24'
    darkAccent2: '#fde68a'
    darkSoft: rgba(251, 191, 36, 0.14)
    darkBorder: rgba(251, 191, 36, 0.28)
  hero:
    eyebrow: RevoGrid Pro / Ops Scheduler
    title: Build ops scheduling into your product.
    description: Create dispatch boards, shift plans, service windows, capacity schedules, and field operations timelines on a virtualized grid foundation built for high-volume planning data.
    actions:
      - label: Explore the live scheduler
        href: /demo/gantt
        arrow: true
      - label: Read implementation docs
        href: https://pro.rv-grid.com/guides/gantt/
        variant: secondary
        target: _blank
        rel: noopener
    badges:
      - Dispatch boards
      - Shift planning
      - Capacity windows
      - Resource lanes
  preview:
    enabled: true
    title: ops-scheduler.revogrid.ts
    pills:
      - label: Dispatch
        active: true
      - label: Capacity
    liveLabel: Live
  statsAriaLabel: Ops Scheduler product stats
  stats:
    - value: 10K+
      label: scheduled items at 60fps
    - value: Live
      label: operations views
    - value: Flexible
      label: resource models
    - value: '5'
      label: framework targets
  features:
    id: features
    kicker: Features
    title: Operational scheduling that fits real workflows.
    description: Give product teams the building blocks for resource allocation, capacity windows, dispatch timelines, and schedule editing without forcing planning data into a separate tool.
    items:
      - icon: '01'
        title: Dispatch scheduling
        description: Plan jobs, calls, deliveries, visits, and service windows across resource rows with grid-level performance.
        tags: [Dispatch, Jobs, Service windows]
      - icon: '02'
        title: Shift and capacity views
        description: Surface availability, planned load, utilization, and capacity context directly inside the schedule.
        tags: [Shifts, Capacity, Availability]
      - icon: '03'
        title: Resource-first rows
        description: Model people, crews, vehicles, equipment, rooms, or assets as timeline lanes.
        tags: [Crews, Equipment, Assets]
      - icon: '04'
        title: Inline schedule editing
        description: Let users update operational data with RevoGrid cells, selection, and plugin hooks.
        tags: [Inline edit, Selection, Hooks]
      - icon: '05'
        title: Status-rich rendering
        description: Render priority, lateness, assignment, SLA, and operational state with custom visuals.
        tags: [SLA, Priority, Status]
      - icon: '06'
        title: Framework-ready delivery
        description: Build operational scheduling screens in the framework your product already uses.
        tags: [Vue, React, Angular, Svelte]
  integrations:
    id: integrations
    kicker: Integrations
    title: Ops Scheduler for your stack
    description: Build embedded operations scheduling with the same RevoGrid foundation across JavaScript, Vue, React, Angular, and Svelte.
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
    title: Ops Scheduler capabilities are part of the Pro Advanced bundle.
  cta:
    title: Ship operations scheduling as a native product feature.
    description: Embed resource planning, dispatch scheduling, and capacity workflows without separating schedule data from the grid experience.
    primaryHref: /demo/gantt
    primaryLabel: Explore live demo
    secondaryHref: /pricing
    secondaryLabel: View Pro pricing
---

<script lang="ts" setup>
import GanttPageLayout from './gantt/GanttPageLayout.vue'
</script>

<GanttPageLayout />
