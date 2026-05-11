---
title: TimelineGrid by RevoGrid - Interactive Timeline Planning for Web Apps
description: Build fast, editable timeline grids for roadmaps, resource planning, campaigns, launches, and date-driven operations with RevoGrid Pro.
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
head:
  - - meta
    - name: keywords
      content: TimelineGrid, timeline grid, JavaScript timeline grid, React timeline grid, Vue timeline grid, Angular timeline grid, project timeline component, roadmap grid, resource planning grid, scheduling grid, RevoGrid Pro TimelineGrid
  - - meta
    - name: robots
      content: index, follow, max-image-preview:large
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:title
      content: TimelineGrid by RevoGrid - Timeline Planning for Web Apps
  - - meta
    - property: og:description
      content: Create virtualized, editable timeline planning views for roadmaps, resources, launches, and operations with RevoGrid Pro.
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:title
      content: TimelineGrid by RevoGrid - Interactive Timeline Planning
  - - meta
    - name: twitter:description
      content: Ship timeline grids with virtual date columns, editable planning rows, and framework-ready RevoGrid integrations.
headerNav:
  hiddenItems:
    - Product
    - Links
    - RevoGrid Pro
  links:
    - text: Docs
      href: /guides/gantt
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
    title: Build timeline planning directly into your data grid.
    description: Create fast, editable timeline views for roadmaps, delivery plans, campaigns, launches, resources, and operations without leaving the RevoGrid data model.
    actions:
      - label: Explore the live demo
        href: /demo/gantt
        arrow: true
      - label: Read implementation docs
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
    title: Timeline views built for real product workflows.
    description: TimelineGrid turns date-driven planning into an editable, virtualized, framework-ready grid experience.
    items:
      - icon: '01'
        title: Date range visualization
        description: Render tasks, phases, bookings, milestones, and delivery windows across a clear horizontal time axis.
        tags: [Date ranges, Phases, Milestones]
      - icon: '02'
        title: Virtual timeline columns
        description: Keep wide timelines responsive with RevoGrid virtualization across rows and date columns.
        tags: [Virtual columns, Horizontal scroll, Scale]
      - icon: '03'
        title: Editable planning rows
        description: Combine timeline bars with editable cells for owners, status, priority, cost, and progress.
        tags: [Inline edit, Status, Owners]
      - icon: '04'
        title: Roadmap layouts
        description: Build product roadmaps, campaign calendars, resource plans, launch schedules, and delivery timelines with one component.
        tags: [Roadmaps, Campaigns, Launches]
      - icon: '05'
        title: Custom visuals
        description: Match your product language with custom bar colors, labels, cell content, and timeline metadata.
        tags: [Custom bars, Labels, Metadata]
      - icon: '06'
        title: Plugin foundation
        description: Extend timeline interactions and renderers with established RevoGrid Pro plugin patterns.
        tags: [Plugin API, Hooks, Renderers]
  integrations:
    id: integrations
    kicker: Integrations
    title: TimelineGrid for every frontend stack
    description: Use the same planning foundation across Vue, React, Angular, Svelte, and JavaScript.
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
    title: Ship timeline planning without rebuilding grid UX.
    description: Embed interactive timeline grids into your product while keeping data, editing, virtualization, and rendering unified.
    primaryHref: /demo/gantt
    primaryLabel: Explore the live demo
    secondaryHref: /pricing
    secondaryLabel: View Pro pricing
---

<script lang="ts" setup>
import GanttPageLayout from './gantt/GanttPageLayout.vue'
</script>

<GanttPageLayout />
