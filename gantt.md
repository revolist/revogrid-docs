---
title: RevoGrid Gantt - JavaScript Gantt Chart for SaaS Apps
description: Embed a production-ready JavaScript Gantt chart with drag-and-drop scheduling, dependencies, critical path analysis, progress tracking, and framework bindings.
head:
  - - meta
    - name: keywords
      content: JavaScript Gantt chart, Gantt component, web app scheduling, project scheduling UI, RevoGrid Gantt, React Gantt chart, Vue Gantt chart, Angular Gantt chart, drag and drop Gantt, critical path analysis
sidebar: false
aside: false
editLink: false
footer: true
prev: false
next: false
pageClass: gantt-page-doc
layout: custom
breadcrumbs: false
ganttLanding:
  colors:
    accent: '#1d4ed8'
    accent2: '#3b82f6'
    soft: rgba(29, 78, 216, 0.09)
    border: rgba(29, 78, 216, 0.22)
    darkAccent: '#60a5fa'
    darkAccent2: '#93c5fd'
    darkSoft: rgba(96, 165, 250, 0.14)
    darkBorder: rgba(96, 165, 250, 0.28)
  hero:
    eyebrow: RevoGrid Pro / Gantt
    title: Build scheduling into your product.
    description: RevoGrid Gantt brings fast, editable project timelines to SaaS, ERP, and operations platforms. Let users drag tasks, manage dependencies, assign owners, and track delivery without leaving your app.
    actions:
      - label: Explore the live Gantt
        href: /demo/gantt
        arrow: true
      - label: View integration docs
        href: https://pro.rv-grid.com/guides/gantt/
        variant: secondary
        target: _blank
        rel: noopener
    badges:
      - Drag to reschedule
      - Inline assignees
      - Progress bars
      - Milestones
  preview:
    enabled: true
    title: gantt-planning.revogrid.ts
    pills:
      - label: Basic plan
        active: true
      - label: Assignees
    liveLabel: Live
  statsAriaLabel: Gantt product stats
  stats:
    - value: 10K+
      label: tasks at 60fps
    - value: '1'
      label: Component
    - value: Unlimited
      label: nested task groups
    - value: '5'
      label: framework targets
  features:
    id: features
    kicker: Features
    title: Scheduling features built for real products.
    description: Give customers the planning tools they expect while keeping timeline data, editing, and grid behavior inside your application.
    items:
      - icon: '01'
        title: Interactive scheduling
        description: Drag bars to reschedule tasks, resize durations, and update timeline rows in the same high-performance grid surface.
        tags: [Drag and drop, Resize, Touch support]
      - icon: '02'
        title: Task dependencies
        description: Connect work with finish-to-start, start-to-start, finish-to-finish, and start-to-finish relationships.
        tags: [FS / SS / FF / SF, Connectors, Auto update]
      - icon: '03'
        title: Critical path analysis
        description: Surface the task chain that controls the delivery date so teams can focus on the work that affects launch.
        tags: [Critical path, Float, Status colors]
      - icon: '04'
        title: Resource tracking
        description: Assign people and teams to tasks, then expose ownership and workload context directly in the timeline.
        tags: [Assignees, Teams, Workload]
      - icon: '05'
        title: Cost and progress
        description: Track budgets, start dates, completion percentage, and group-level progress in one synchronized planning view.
        tags: [Cost columns, Progress bars, Groups]
      - icon: '06'
        title: Plugin API
        description: Adapt cells, columns, toolbar actions, and context menus with the same RevoGrid Pro plugin patterns used across your app.
        tags: [Custom renderers, Toolbar SDK, Column types]
  integrations:
    id: integrations
    kicker: Integrations
    title: One Gantt component for every frontend stack
    description: Ship the same scheduling experience across JavaScript, Vue, React, Angular, and Svelte projects.
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
    title: Gantt is part of the Pro Advanced bundle.
  cta:
    title: Add Gantt scheduling without building it from scratch.
    description: Embed RevoGrid Gantt, customize it with your product UI, and keep every scheduling interaction under your control.
    primaryHref: /demo/gantt
    primaryLabel: Try the live demo
    secondaryHref: /pricing
    secondaryLabel: View Pro pricing
---

<script lang="ts" setup>
import GanttPageLayout from './gantt/GanttPageLayout.vue'
</script>

<GanttPageLayout />
