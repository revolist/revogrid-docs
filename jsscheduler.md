---
title: RevoGrid JSScheduler - JavaScript Scheduler for Web Apps
description: JSScheduler pages for teams building framework-free resource scheduling, timeline planning, and operational calendar views.
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
    title: A JavaScript scheduler built on the grid.
    description: Build framework-free scheduling views with virtualized rows, timeline columns, resource lanes, and plugin-based customization.
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
    title: JavaScript scheduling without a framework dependency.
    description: JSScheduler gives plain JavaScript apps the same scheduling foundation used by RevoGrid framework integrations.
    items:
      - icon: '01'
        title: Framework-free setup
        description: Mount scheduler views from JavaScript or TypeScript without committing to Vue, React, Angular, or Svelte.
        tags: [Vanilla JS, TypeScript, Web apps]
      - icon: '02'
        title: Resource lanes
        description: Represent teams, rooms, equipment, vehicles, or assets as grid rows with scheduled work across time.
        tags: [Resources, Assets, Teams]
      - icon: '03'
        title: Virtual timeline rendering
        description: Keep large schedules responsive with RevoGrid virtualization across rows and horizontal time columns.
        tags: [Virtual rows, Virtual columns, Scale]
      - icon: '04'
        title: Editable schedule data
        description: Combine timeline bars with grid editing for assignments, status, priority, and metadata fields.
        tags: [Editing, Assignment, Metadata]
      - icon: '05'
        title: Custom scheduler UI
        description: Adapt labels, colors, event shapes, headers, and interactions to match your product workflow.
        tags: [Custom UI, Events, Headers]
      - icon: '06'
        title: Plugin extensibility
        description: Use RevoGrid plugin patterns to extend rendering, data transforms, and scheduler interactions.
        tags: [Plugin API, Hooks, Rendering]
  integrations:
    id: integrations
    kicker: Integrations
    title: JSScheduler for plain web apps
    description: Start with JavaScript and keep a migration path to Vue, React, Angular, and Svelte when your product needs it.
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
    title: Ship JavaScript scheduling without framework lock-in.
    description: Add interactive scheduler views to plain web apps while keeping RevoGrid data, editing, and rendering primitives.
    primaryHref: /demo/gantt
    primaryLabel: Try live demo
    secondaryHref: /pro/prices
    secondaryLabel: View Pro pricing
---

<script lang="ts" setup>
import GanttPageLayout from './GanttPageLayout.vue'
</script>

<GanttPageLayout />
