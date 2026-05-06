---
title: RevoGrid Scheduler - Interactive Resource Scheduling for Web Apps
description: Production-ready scheduler views for teams building resource calendars, operations timelines, and capacity planning interfaces.
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
      href: /gantt
      base: pro
ganttLanding:
  colors:
    accent: '#047857'
    accent2: '#10b981'
    soft: rgba(4, 120, 87, 0.09)
    border: rgba(4, 120, 87, 0.22)
    darkAccent: '#34d399'
    darkAccent2: '#6ee7b7'
    darkSoft: rgba(52, 211, 153, 0.14)
    darkBorder: rgba(52, 211, 153, 0.28)
  hero:
    eyebrow: RevoGrid Pro / Scheduler
    title: Resource scheduling without the scheduling rewrite.
    description: Build calendar-style planning views for teams, equipment, rooms, shifts, and operations workflows on top of the same virtualized RevoGrid foundation.
    actions:
      - label: Try live demo
        href: /demo/gantt
        arrow: true
      - label: Read docs
        href: https://pro.rv-grid.com/guides/gantt/
        variant: secondary
        target: _blank
        rel: noopener
    badges:
      - Resource lanes
      - Timeline planning
      - Capacity views
      - Framework ready
  preview:
    enabled: true
    title: scheduler-capacity.revogrid.ts
    pills:
      - label: Resource plan
        active: true
      - label: Capacity
    liveLabel: Live
  statsAriaLabel: Scheduler product stats
  stats:
    - value: 10K+
      label: timeline rows at 60fps
    - value: '1'
      label: Grid foundation
    - value: Flexible
      label: resource lanes
    - value: '5'
      label: framework targets
  features:
    id: features
    kicker: Features
    title: Everything a production scheduler needs.
    description: Built for product teams that need resource planning, capacity views, and timeline editing inside their own app.
    items:
      - icon: '01'
        title: Resource lanes
        description: Represent teams, people, equipment, or rooms as rows and keep planning data inside the grid model.
        tags: [Resources, Lanes, Capacity]
      - icon: '02'
        title: Timeline interaction
        description: Use Gantt timeline primitives for horizontal planning, date ranges, and visual schedule updates.
        tags: [Timeline, Date ranges, Virtual scroll]
      - icon: '03'
        title: Capacity planning
        description: Combine task data, resource metadata, and custom columns to expose workload directly in the schedule.
        tags: [Workload, Utilization, Availability]
      - icon: '04'
        title: Editable planning data
        description: Keep schedule changes close to the row data with RevoGrid editing, selection, and plugin lifecycle hooks.
        tags: [Inline edit, Selection, Plugins]
      - icon: '05'
        title: Custom rendering
        description: Render shift blocks, bookings, allocations, assignees, and status indicators with product-specific visuals.
        tags: [Custom cells, Status, Assignees]
      - icon: '06'
        title: Framework integrations
        description: Build scheduler screens in Vue, React, Angular, Svelte, or plain JavaScript using the same grid foundation.
        tags: [Vue, React, Angular, Svelte]
  integrations:
    id: integrations
    kicker: Integrations
    title: Scheduler views for your stack
    description: One scheduling foundation with framework bindings for the RevoGrid ecosystem.
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
    title: Scheduler capabilities are part of the Pro Advanced bundle.
  cta:
    title: Ship scheduling as a product feature.
    description: Embed scheduling views in your product and keep resource planning under your control.
    primaryHref: /demo/gantt
    primaryLabel: Try live demo
    secondaryHref: /pro/prices
    secondaryLabel: View Pro pricing
---

<script lang="ts" setup>
import GanttPageLayout from './GanttPageLayout.vue'
</script>

<GanttPageLayout />
