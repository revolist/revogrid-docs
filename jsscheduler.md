---
title: JSScheduler - JavaScript Scheduler for Resource Planning
description: Build fast JavaScript scheduler views with virtualized timelines, resource lanes, editable planning data, and RevoGrid Pro plugin customization.
head:
  - - meta
    - name: keywords
      content: JavaScript scheduler, JS scheduler, resource scheduler, timeline scheduler, resource planning, scheduling component, RevoGrid Pro, virtualized scheduler
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
ganttLanding:
  colors:
    accent: '#0891b2'
    accent2: '#22d3ee'
    soft: rgba(8, 145, 178, 0.09)
    border: rgba(8, 145, 178, 0.22)
    darkAccent: '#67e8f9'
    darkAccent2: '#a5f3fc'
    darkSoft: rgba(103, 232, 249, 0.14)
    darkBorder: rgba(103, 232, 249, 0.28)
  hero:
    eyebrow: RevoGrid Pro / JSScheduler
    title: JavaScript scheduler for resource planning at grid scale.
    description: Build framework-free scheduling experiences with virtualized timelines, resource lanes, editable grid data, and plugin-ready customization.
    actions:
      - label: Explore scheduler demo
        href: /demo/gantt
        arrow: true
      - label: Read scheduler docs
        href: https://pro.rv-grid.com/guides/gantt/
        variant: secondary
        target: _blank
        rel: noopener
    badges:
      - Vanilla JS
      - Timeline rows
      - Resource lanes
      - Plugin API
  preview:
    enabled: true
    title: js-scheduler.revogrid.ts
    pills:
      - label: Vanilla JS
        active: true
      - label: Resources
    liveLabel: Live
  statsAriaLabel: JSScheduler product stats
  stats:
    - value: 10K+
      label: scheduled rows at 60fps
    - value: '0'
      label: framework lock-in
    - value: Virtual
      label: timeline columns
    - value: Plugin
      label: customization model
  features:
    id: features
    kicker: Features
    title: Production-ready scheduling without a framework dependency.
    description: JSScheduler helps product teams add timeline scheduling, resource planning, and operational calendar views to plain JavaScript apps.
    items:
      - icon: '01'
        title: Framework-free setup
        description: Mount scheduler views from JavaScript or TypeScript without forcing your product into Vue, React, Angular, or Svelte.
        tags: [Vanilla JS, TypeScript, Web apps]
      - icon: '02'
        title: Resource planning lanes
        description: Map teams, rooms, equipment, vehicles, or assets to scheduler rows and plan work across a shared timeline.
        tags: [Resources, Assets, Teams]
      - icon: '03'
        title: Virtual timeline rendering
        description: Keep large schedules responsive with RevoGrid virtualization across resource rows and horizontal time columns.
        tags: [Virtual rows, Virtual columns, Scale]
      - icon: '04'
        title: Editable schedule data
        description: Combine timeline bars with grid editing for assignments, status, priority, ownership, and metadata fields.
        tags: [Editing, Assignment, Metadata]
      - icon: '05'
        title: Custom scheduler UI
        description: Adapt labels, colors, event shapes, headers, and interactions so scheduling feels native to your application.
        tags: [Custom UI, Events, Headers]
      - icon: '06'
        title: Plugin extensibility
        description: Use RevoGrid plugin patterns to extend rendering, data transforms, and scheduler interactions.
        tags: [Plugin API, Hooks, Rendering]
  integrations:
    id: integrations
    kicker: Integrations
    title: JSScheduler for plain web apps
    description: Start with a JavaScript scheduler today and keep a path to Vue, React, Angular, and Svelte integrations as your stack evolves.
    items:
      - icon: JS
        name: JavaScript
        badge: Native
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
    title: JSScheduler capabilities are part of the Pro Advanced bundle.
  cta:
    title: Add a high-performance scheduler to your JavaScript app.
    description: Deliver interactive resource planning with virtual timelines, editable grid data, and RevoGrid Pro customization.
    primaryHref: /demo/gantt
    primaryLabel: Explore scheduler demo
    secondaryHref: /pro/prices
    secondaryLabel: View Pro pricing
---

<script lang="ts" setup>
import GanttPageLayout from './GanttPageLayout.vue'
</script>

<GanttPageLayout />
