---
title: RevoGrid TimelineGrid - Timeline Planning for Web Apps
description: TimelineGrid pages for product teams building interactive timeline planning, task sequencing, and date-driven grid experiences.
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
    accent: '#7c3aed'
    accent2: '#a78bfa'
    soft: rgba(124, 58, 237, 0.09)
    border: rgba(124, 58, 237, 0.22)
    darkAccent: '#a78bfa'
    darkAccent2: '#c4b5fd'
    darkSoft: rgba(167, 139, 250, 0.14)
    darkBorder: rgba(167, 139, 250, 0.28)
  hero:
    eyebrow: RevoGrid Pro / TimelineGrid
    title: Timeline planning inside the grid.
    description: Build timeline-first product views for roadmaps, delivery plans, campaigns, launches, and operations workflows without leaving the RevoGrid data model.
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
      - Timeline rows
      - Date ranges
      - Virtual columns
      - Grid-native data
  preview:
    enabled: true
    title: timeline-grid.revogrid.ts
    pills:
      - label: Timeline
        active: true
      - label: Roadmap
    liveLabel: Live
  statsAriaLabel: TimelineGrid product stats
  stats:
    - value: 10K+
      label: timeline records at 60fps
    - value: '1'
      label: grid foundation
    - value: Dynamic
      label: date columns
    - value: '5'
      label: framework targets
  features:
    id: features
    kicker: Features
    title: Timeline views that behave like product UI.
    description: TimelineGrid uses the scheduling foundation to make date-driven planning editable, virtualized, and framework-ready.
    items:
      - icon: '01'
        title: Date range visualization
        description: Render work items, phases, bookings, and delivery windows across a horizontal time axis.
        tags: [Date ranges, Phases, Milestones]
      - icon: '02'
        title: Virtual timeline columns
        description: Keep wide timelines responsive with RevoGrid row and column virtualization.
        tags: [Virtual columns, Horizontal scroll, Scale]
      - icon: '03'
        title: Editable planning rows
        description: Pair timeline bars with grid cells for status, owners, priority, cost, and progress.
        tags: [Inline edit, Status, Owners]
      - icon: '04'
        title: Roadmap layouts
        description: Build product roadmaps, campaign calendars, launch plans, and delivery timelines with one component.
        tags: [Roadmaps, Campaigns, Launches]
      - icon: '05'
        title: Custom visuals
        description: Customize bar colors, labels, cell content, and timeline metadata for your product language.
        tags: [Custom bars, Labels, Metadata]
      - icon: '06'
        title: Plugin foundation
        description: Extend interactions and renderers using RevoGrid Pro plugin patterns.
        tags: [Plugin API, Hooks, Renderers]
  integrations:
    id: integrations
    kicker: Integrations
    title: TimelineGrid for your stack
    description: Use the same timeline foundation across Vue, React, Angular, Svelte, and JavaScript.
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
    title: TimelineGrid capabilities are part of the Pro Advanced bundle.
  cta:
    title: Ship timeline views without rebuilding grid UX.
    description: Embed interactive timeline planning into your product while keeping data, editing, and rendering unified.
    primaryHref: /demo/gantt
    primaryLabel: Try live demo
    secondaryHref: /pro/prices
    secondaryLabel: View Pro pricing
---

<script lang="ts" setup>
import GanttPageLayout from './GanttPageLayout.vue'
</script>

<GanttPageLayout />
