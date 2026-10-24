---
title: 'JavaScript Scheduler & Resource Calendar | RevoGrid'
titleTemplate: false
description: Build staff schedules, resource timelines, and booking calendars with RevoGrid’s JavaScript Scheduler. Explore live demos for React, Vue, Angular, and Svelte.
sidebar: false
aside: false
editLink: false
footer: true
prev: false
next: false
commercialFaqKeys:
  - plan-difference
  - trial
  - source-access
pageClass: gantt-page-doc
layout: custom
breadcrumbs: false
headerNav:
  links:
    - text: Docs
      href: /guides/event-scheduler
      base: pro
head:
  - - link
    - rel: canonical
      href: https://rv-grid.com/jsscheduler
  - - meta
    - name: robots
      content: index, follow, max-image-preview:large
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:title
      content: JavaScript Scheduler & Resource Calendar | RevoGrid
  - - meta
    - property: og:description
      content: Build resource timelines, staff schedules, booking calendars, shift planners, and capacity views with RevoGrid Scheduler for JavaScript and TypeScript.
  - - meta
    - property: og:url
      content: https://rv-grid.com/jsscheduler
  - - meta
    - property: og:site_name
      content: RevoGrid
  - - meta
    - property: og:image
      content: https://rv-grid.com/img/scheduler-features/resource-timeline.png
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:title
      content: JavaScript Scheduler & Resource Calendar | RevoGrid
  - - meta
    - name: twitter:description
      content: A JavaScript scheduler component for resource timelines, staff shifts, bookings, availability, and capacity planning.
  - - meta
    - name: twitter:image
      content: https://rv-grid.com/img/scheduler-features/resource-timeline.png
  - - meta
    - property: og:image:alt
      content: RevoGrid Scheduler resource timeline with staff assignments and availability
  - - meta
    - name: twitter:image:alt
      content: RevoGrid Scheduler resource timeline with staff assignments and availability
ganttLanding:
  catalogProductId: event-scheduler
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
    eyebrow: RevoGrid Scheduler
    title: JavaScript Scheduler for people, resources, and bookings.
    description: Build interactive calendars and resource timelines in your app. Move shifts, manage reservations, and check availability while keeping control of your data.
    actions:
      - label: Live scheduler demo
        href: /demo/event-scheduler
        arrow: true
      - label: Booking demo
        href: /demo/property-booking
        variant: secondary
      - label: Get Pro Trial
        href: /trial
        variant: secondary
    badges:
      - Week calendars
      - Resource timelines
      - Conflict rules
      - Remote data
  preview:
    enabled: true
    kind: image
    lightSrc: /img/scheduler-features/resource-timeline.png
    alt: JavaScript resource scheduler showing staff assignments, shift start markers, reserved time, and event progress
    title: javascript-scheduler.revogrid.ts
    pills:
      - label: Week view
        active: true
      - label: Resources
      - label: Remote
    liveLabel: Live
  statsAriaLabel: JavaScript Scheduler product stats
  stats:
    - value: '5'
      label: scheduler views
    - value: Controlled
      label: event persistence
    - value: Built-in
      label: conflict detection
    - value: '5'
      label: framework targets
  features:
    id: features
    kicker: Inside the scheduler
    title: More than a calendar. A scheduling workspace.
    description: Give users the right view of their day, the context behind every assignment, and the controls to change plans. These screenshots come from the working demos.
    items:
      - icon: '01'
        title: Resource timelines with the full picture
        description: Keep people, roles, and locations beside a horizontal schedule. Show progress, shift markers, reserved time, and different event styles without losing resource context.
        tags: [Resource columns, Time markers, Progress]
        media: /img/scheduler-features/resource-timeline.png
        mediaAlt: Staff resource timeline with role and ward columns, progress bars, shift markers, and hatched reserved slots
        mediaWidth: 950
        mediaHeight: 470
        mediaAspect: '950 / 470'
        href: /demo/event-scheduler
        cta: Explore resource scheduling
      - icon: '02'
        title: Day, week, month, and year calendars
        description: Switch from detailed time slots to a broader calendar overview. Keep event colors, assignees, locked events, and availability visible as the date range changes.
        tags: [Day and week, Month and year, Date navigation]
        media: /img/scheduler-features/calendar-month.png
        mediaAlt: Monthly scheduler calendar with multi-day event bars, assignee portraits, event counts, and more-event controls
        mediaWidth: 950
        mediaHeight: 475
        mediaAspect: '950 / 470'
        href: /demo/event-scheduler
        cta: Try the calendar views
      - icon: '03'
        title: Event editing, down to the details
        description: Create, move, and resize events, then open the editor to adjust dates, resources, status, color, and notes. Use locked events to protect fixed commitments.
        tags: [Drag and resize, Event editor, Locked events]
        media: /img/scheduler-features/event-editor.png
        mediaAlt: Scheduler event editor with start and end times, resource assignment, status, color palette, notes, and save controls
        mediaWidth: 600
        mediaHeight: 688
        mediaAspect: '950 / 470'
        href: /demo/event-scheduler
        cta: Open an event in the demo
      - icon: '04'
        title: Bookings with occupancy in context
        description: Plan nightly stays across properties. Check booking overlaps and guest capacity, and compare daily totals for booked properties and guests in the same timeline.
        tags: [Nightly reservations, Guest capacity, Daily totals]
        media: /img/scheduler-use-cases/property-booking.webp
        mediaAlt: Property booking scheduler showing accommodation photos, nightly reservations, and daily occupancy totals
        mediaWidth: 1200
        mediaHeight: 675
        mediaAspect: '950 / 470'
        href: /demo/property-booking
        cta: Try the booking calendar
      - icon: '09'
        title: Staff schedules at a glance
        description: See the week's assignments with assignee portraits, event types, and time slots. Switch calendar presets to compare working hours and availability for different schedules.
        tags: [Staff rosters, Assignee portraits, Calendar presets]
        media: /img/scheduler-features/calendar-week.png
        mediaAlt: Weekly staff calendar with date navigation, calendar presets, assignee portraits, and time-based event blocks
        mediaWidth: 950
        mediaHeight: 470
        mediaAspect: '950 / 470'
        href: /demo/event-scheduler
        cta: Explore the weekly calendar
      - icon: '10'
        title: A timeline and an event list
        description: Build different views over the same scheduling data. The demo pairs its resource and calendar views with an event table showing dates, times, assignees, types, and statuses.
        tags: [Shared event data, Tabular overview, Status labels]
        media: /img/scheduler-features/event-table.png
        mediaAlt: Scheduler demo event table with date, time, assignee portraits, event types, and status labels
        mediaWidth: 950
        mediaHeight: 470
        mediaAspect: '950 / 470'
        href: /demo/event-scheduler
        cta: Explore the event table
      - icon: '05'
        title: Availability and conflict detection
        description: Define working hours, holidays, breaks, and blocked time. Surface overlaps and capacity warnings, then use validation hooks to apply your own scheduling rules.
        tags: [Working calendars, Blocked time, Validation hooks]
      - icon: '06'
        title: Recurrence and repeatable workflows
        description: Use event templates and recurrence helpers for repeated schedules. Support series edits, copy and paste, duplication, and bulk actions for everyday planning.
        tags: [Recurring events, Templates, Bulk actions]
      - icon: '07'
        title: Your backend, your accepted changes
        description: Keep persistence in your application. Load remote date ranges and resources, handle optimistic changes, and roll back a mutation when your server rejects it.
        tags: [Controlled state, Remote loading, Rollback]
      - icon: '08'
        title: Custom rendering and interactions
        description: Adapt event bars, resource headers, labels, context menus, and keyboard shortcuts to your workflow. Match the rest of your application with themes and custom renderers.
        tags: [Event templates, Context menus, Keyboard shortcuts]
  integrations:
    id: integrations
    kicker: Integrations
    title: JavaScript Scheduler for your frontend stack
    description: Build the same scheduler product surface across JavaScript, Vue, React, Angular, and Svelte with RevoGrid's Web Component foundation.
    items:
      - icon: JS
        iconSrc: /js.svg
        name: JavaScript
        badge: ''
      - icon: Vue
        iconSrc: /vuejs.svg
        name: Vue
        badge: ''
      - icon: React
        iconSrc: /react.svg
        name: React
        badge: ''
      - icon: Ng
        iconSrc: /angular.svg
        name: Angular
        badge: ''
      - icon: Sv
        iconSrc: /svelte.svg
        name: Svelte
        badge: ''
  useCases:
    id: scheduler-use-cases
    kicker: Use cases
    title: Where teams embed RevoGrid Scheduler.
    description: Explore two working examples for scheduling people and booking properties inside your product.
    items:
      - title: Employee shift scheduling
        description: Plan employee shifts in a weekly calendar, move assignments between resources, and check scheduling conflicts while editing.
        media: /img/scheduler-use-cases/shift-scheduling.webp
        mediaAlt: RevoGrid Scheduler demo showing employee shifts across a weekly resource calendar
        href: /demo/event-scheduler
        cta: Explore shift scheduling
      - title: Property booking
        description: Manage nightly stays across properties with booking conflict checks, guest capacity, and daily totals for booked properties and guests.
        media: /img/scheduler-use-cases/property-booking.webp
        mediaAlt: RevoGrid property booking demo showing property photos, nightly reservations, and daily occupancy totals
        href: /demo/property-booking
        cta: Explore property booking
  faq:
    id: event-scheduler-faq
    kicker: Questions before you build
    title: JavaScript Scheduler questions
    items:
      - q: What is a JavaScript resource scheduler?
        a: A JavaScript resource scheduler places events on a timeline beside the people, rooms, equipment, or properties assigned to them. RevoGrid Scheduler combines that resource view with day, week, month, and year calendars inside your application.
      - q: Can I use the scheduler with React, Vue, Angular, or Svelte?
        a: Yes. RevoGrid Scheduler uses RevoGrid’s Web Component foundation and works with JavaScript and TypeScript applications, including React, Vue, Angular, and Svelte integrations.
      - q: Can I build staff schedules and booking calendars?
        a: Yes. The shift scheduling demo shows staff assignments, resource columns, working hours, and locked events. The property booking demo shows nightly reservations, overlap checks, guest capacity, and daily occupancy totals.
      - q: How does the scheduler handle conflicts and availability?
        a: Configure calendars, working hours, blocked time, overlap checks, and capacity rules. Validation hooks let your application decide which proposed changes to accept. Your backend can apply additional business rules before persisting changes.
      - q: Can I connect my own API and database?
        a: Yes. Your application owns the accepted event data and persistence. Remote loading and mutation hooks support loading schedule ranges, saving changes, optimistic updates, and rollback after rejected requests.
  linkSections:
    id: scheduler-resources
    kicker: Build with it
    title: From the live demo to your application.
    description: Explore the examples, then use the guides to configure views, editing, scheduling rules, and data loading.
    sections:
      - title: Explore the examples
        items:
          - label: Staff shift scheduling demo
            href: /demo/event-scheduler
          - label: Property booking demo
            href: /demo/property-booking
      - title: Configure the scheduler
        items:
          - label: Scheduler introduction
            href: https://pro.rv-grid.com/guides/event-scheduler/introduction
          - label: Calendar and timeline views
            href: https://pro.rv-grid.com/guides/event-scheduler/timeline-views
          - label: Event editing guide
            href: https://pro.rv-grid.com/guides/event-scheduler/event-editing
      - title: Add your business rules
        items:
          - label: Availability and calendars
            href: https://pro.rv-grid.com/guides/event-scheduler/scheduling-rules/availability
          - label: Conflict handling
            href: https://pro.rv-grid.com/guides/event-scheduler/scheduling-rules/conflicts
          - label: Remote data and persistence
            href: https://pro.rv-grid.com/guides/event-scheduler/remote-data
  advancedCallout:
    title: JavaScript Scheduler is part of the Pro Advanced bundle.
  cta:
    title: Ship scheduling as a native product feature.
    description: Add event calendars, resource timelines, validation rules, and controlled persistence to your app without sending users to a separate scheduling tool.
    primaryHref: /demo/event-scheduler
    primaryLabel: View Demo
    secondaryHref: /trial
    secondaryLabel: Get Pro Trial
---

<script lang="ts" setup>
import GanttPageLayout from './gantt/GanttPageLayout.vue'
</script>

<div class="scheduler-landing">
  <GanttPageLayout>
    <template #after-hero>
      <nav class="scheduler-section-nav" aria-label="Explore RevoGrid Scheduler">
        <a href="#features">Features</a>
        <a href="#integrations">Frameworks</a>
        <a href="#scheduler-use-cases">Use cases</a>
        <a href="#event-scheduler-faq">Questions</a>
        <a href="#scheduler-resources">Developer guides</a>
      </nav>
    </template>
  </GanttPageLayout>
</div>

<style scoped>
.scheduler-landing :deep(.hero) {
  padding-top: 56px;
}

.scheduler-landing :deep(.hero-inner) {
  gap: 32px;
}

.scheduler-landing :deep(.rg-hero-title) {
  font-size: clamp(36px, 4vw, 52px);
}

.scheduler-landing :deep(.hero-image-wrap) {
  aspect-ratio: 950 / 470;
}

.scheduler-landing :deep(.hero-image) {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #fff;
}

.scheduler-section-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px 24px;
  margin: 40px 24px 0;
  padding: 20px 0;
  border-block: 1px solid var(--vp-c-divider);
}

.scheduler-section-nav a {
  padding: 6px 0;
  color: var(--vp-c-text-2);
  font-size: 14px;
  text-decoration: none;
}

.scheduler-section-nav a:hover {
  color: var(--vp-c-brand-1);
}

.scheduler-section-nav a:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 5px;
  border-radius: 3px;
}

.scheduler-landing :deep(.features),
.scheduler-landing :deep(.content-section),
.scheduler-landing :deep(.integrations) {
  padding-block: 64px;
  scroll-margin-top: 96px;
}

.scheduler-landing :deep(.feature-card:not(.feature-card--media)) {
  border: 1px solid var(--vp-c-divider);
  border-radius: 18px;
}

.scheduler-landing :deep(.feature-media) {
  background: var(--vp-c-bg-soft);
}

.scheduler-landing :deep(.feature-media img) {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #fff;
}

@media (min-width: 1100px) {
  .scheduler-landing :deep(.hero-inner) {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: 40px;
    text-align: left;
  }

  .scheduler-landing :deep(.hero-sub) {
    margin-left: 0;
  }

  .scheduler-landing :deep(.hero-actions),
  .scheduler-landing :deep(.hero-badges) {
    justify-content: flex-start;
  }
}

@media (max-width: 640px) {
  .scheduler-landing :deep(.hero) {
    padding-top: 32px;
  }

  .scheduler-landing :deep(.hero-sub) {
    font-size: 16px;
  }

  .scheduler-section-nav {
    gap: 4px 18px;
    margin-top: 24px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .scheduler-landing :deep(.hero) * {
    animation: none;
  }
}
</style>
