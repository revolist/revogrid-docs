---
title: RevoGrid Scheduler - Resource Scheduling Component for Web Apps
description: Build fast resource scheduling, capacity planning, shift planning, and operations timeline views with the virtualized RevoGrid Scheduler component.
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
      content: RevoGrid Scheduler, JavaScript Scheduler, Resource Scheduling Component, Web Scheduler, Capacity Planning Software, Shift Scheduling UI, Operations Scheduler, Timeline Scheduler, React Scheduler, Vue Scheduler, Angular Scheduler
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
    title: Resource scheduling built for product teams.
    description: Embed fast, calendar-style scheduler views for teams, equipment, rooms, shifts, and operational workflows without rebuilding grid editing, virtualization, or framework integrations.
    actions:
      - label: Try the scheduler demo
        href: /demo/gantt
        arrow: true
      - label: Read Scheduler docs
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
    title: Everything a production resource scheduler needs.
    description: Built for SaaS, ERP, workforce, booking, and operations platforms that need editable schedules inside their own application.
    items:
      - icon: '01'
        title: Resource lanes
        description: Model teams, people, equipment, rooms, vehicles, or assets as scheduler rows while keeping planning data in the grid model.
        tags: [Resources, Assets, Capacity]
      - icon: '02'
        title: Timeline interaction
        description: Use timeline primitives for horizontal planning, date ranges, booking windows, and visual schedule updates.
        tags: [Timeline, Date ranges, Virtual scroll]
      - icon: '03'
        title: Capacity planning
        description: Combine assignments, availability, utilization, and custom columns to expose workload directly in the scheduler.
        tags: [Workload, Utilization, Availability]
      - icon: '04'
        title: Editable schedule data
        description: Let users update schedule metadata with RevoGrid editing, selection, and plugin lifecycle hooks.
        tags: [Inline edit, Selection, Plugins]
      - icon: '05'
        title: Custom rendering
        description: Render shifts, bookings, allocations, assignees, SLA status, and availability indicators with product-specific visuals.
        tags: [Custom cells, Status, Assignees]
      - icon: '06'
        title: Framework integrations
        description: Build scheduler screens in Vue, React, Angular, Svelte, or plain JavaScript from the same RevoGrid foundation.
        tags: [Vue, React, Angular, Svelte]
  integrations:
    id: integrations
    kicker: Integrations
    title: Scheduler views for your stack
    description: One virtualized scheduling foundation with framework bindings across the RevoGrid ecosystem.
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
    title: Ship resource scheduling as a native product feature.
    description: Add scheduler views to your app, keep planning data under your control, and avoid sending users to a separate scheduling tool.
    primaryHref: /demo/gantt
    primaryLabel: Try the scheduler demo
    secondaryHref: /pricing
    secondaryLabel: View Pro pricing
---

<script lang="ts" setup>
import GanttPageLayout from './gantt/GanttPageLayout.vue'
</script>

<GanttPageLayout />
