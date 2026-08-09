---
title: "Fast JavaScript Gantt Chart for Web Apps"
description: RevoGantt is a fast JavaScript Gantt chart for data-heavy web apps, with virtualization, dependencies, resources, critical path, and a live 10,000-task demo.
head:
  - - meta
    - name: keywords
      content: RevoGantt, RevoGantt JavaScript Gantt chart, JavaScript Gantt chart, Gantt chart JS, JavaScript Gantt chart library, fast Gantt chart, high performance Gantt chart, virtualized Gantt, Gantt chart large datasets, Gantt thousands of tasks, SaaS Gantt component, React Gantt chart, Vue Gantt chart, Angular Gantt chart
sidebar: false
aside: false
editLink: false
footer: true
prev: false
next: false
pageClass: gantt-page-doc
layout: custom
breadcrumbs: false
commercialFaqKeys:
  - trial
  - source-access
  - application-limits
ganttLanding:
  catalogProductId: gantt
  hero:
    eyebrow: RevoGantt · Gantt Chart JS
    title: "RevoGantt: Fast JavaScript Gantt Chart"
    description: RevoGantt is a JavaScript Gantt chart component for large project plans, with an editable task grid, virtualized timeline, dependencies, resources, and critical path analysis.
    actions:
      - label: View Demo
        href: /demo/gantt
        arrow: true
      - label: Request Pro Trial
        href: /trial
        variant: secondary
    badges:
      - Drag to reschedule
      - Inline assignees
      - Progress bars
      - Milestones
      - 10,000-task live demo
  preview:
    enabled: true
    kind: image
    lightSrc: /img/gantt-preview.png
    darkSrc: /img/gantt-preview.png
    alt: RevoGantt JavaScript Gantt chart with editable task rows, assignees, progress, dependencies, and scheduling bars
    title: gantt-planning.revogrid.ts
    pills:
      - label: Basic plan
        active: true
      - label: Assignees
  demos:
    id: live-gantt-demos
    kicker: Live demos
    title: See complete planning workflows in action.
    description: Explore live RevoGantt JavaScript Gantt chart examples for project planning, dependency editing, large datasets, and resource-aware scheduling.
    items:
      - title: Complete Gantt workspace
        description: Edit task data, expand the hierarchy, move bars, inspect milestones, and switch critical-path and baseline overlays.
        href: /demo/gantt
        media: /video/gantt-demo.mp4
        mediaKind: video
      - title: Advanced dependencies
        description: Create and validate FS, SS, FF, and SF links with lead/lag and scheduling diagnostics.
        href: https://demo.rv-grid.com/gantt-dependencies-advanced/ts
        media: /blog/gantt-dependencies.png
      - title: Resource planning
        description: Explore assignments, capacity context, workload warnings, and resource-aware planning data.
        href: https://demo.rv-grid.com/gantt-resource-planning/ts
        media: /blog/gantt-resource.png
      - title: 10,000-task large-data Gantt
        description: Scroll a virtualized project with 10,000 tasks and 19,796 dependencies, then pan across its three-month timeline.
        href: /demo/gantt-big-data
        media: /img/gantt-preview.png
  features:
    id: features
    kicker: Visual product tour
    title: See the planning workflows your users can run.
    description: Every visual below comes from a working RevoGantt example. Open the live demo to edit the schedule, inspect the data model, and test the interaction in your browser.
    items:
      - icon: '01'
        title: Complete planning workspace
        description: Edit the task tree and custom columns while the synchronized timeline handles drag, resize, progress, milestones, assignments, dependencies, and zoom.
        tags: [Hierarchy, Drag and resize, Milestones]
        media: /video/gantt-walkthrough.mp4
        mediaKind: video
        poster: /img/gantt-features/workspace-poster.webp
        mediaAlt: RevoGantt walkthrough showing an editable project hierarchy and synchronized timeline
        href: https://demo.rv-grid.com/gantt-showcase/ts?theme=light
        cta: Open the full showcase
        featured: true
      - icon: '02'
        title: Dependencies with lead and lag
        description: Model finish-to-start, start-to-start, finish-to-finish, and start-to-finish links, then validate and edit their lead or lag directly in the plan.
        tags: [FS / SS / FF / SF, Lead and lag, Validation]
        media: /img/gantt-features/dependencies.webp?v=20260808-chart
        mediaAspect: 1256 / 275
        mediaAlt: Advanced RevoGantt dependency example with multiple connector types
        href: https://demo.rv-grid.com/gantt-dependencies-advanced/ts?theme=light
        cta: Try advanced dependencies
      - icon: '03'
        title: Critical path and total slack
        description: Highlight the chain that controls the finish date and expose early dates, late dates, and total slack alongside noncritical work.
        tags: [Critical path, Total slack, Schedule risk]
        media: /img/gantt-features/critical-path.webp?v=20260808-chart
        mediaAspect: 1256 / 275
        mediaAlt: RevoGantt critical path analysis with critical and parallel tasks
        href: https://demo.rv-grid.com/gantt-critical-path-analysis/ts?theme=light
        cta: Inspect critical-path analysis
      - icon: '04'
        title: Baselines and variance
        description: Capture an approved plan, overlay baseline bars, and compare start, finish, duration, and progress variance as the live schedule changes.
        tags: [Approved plans, Variance, Baseline bars]
        media: /img/gantt-features/baselines.webp
        mediaAlt: RevoGantt comparing the current schedule with an approved baseline
        href: https://demo.rv-grid.com/gantt-baseline/ts?theme=light
        cta: Compare a baseline
      - icon: '05'
        title: Resources, capacity, and cost
        description: Assign multiple resources, calculate assignment cost, reveal over-allocation, and switch to a capacity view with deterministic auto-leveling.
        tags: [Assignments, Capacity, Auto-leveling]
        media: /img/gantt-features/resources.webp?v=20260808-chart
        mediaAspect: 1256 / 230
        mediaAlt: RevoGantt resource load view with capacity and over-allocation bars
        href: https://demo.rv-grid.com/gantt-resource-planning/ts?theme=light
        cta: Explore resource planning
      - icon: '06'
        title: Constraints and deadlines
        description: Combine start and finish constraints with deadline markers and warnings so the schedule explains when authored dates cannot be satisfied.
        tags: [Eight constraint types, Deadlines, Diagnostics]
        media: /img/gantt-features/constraints.webp?v=20260808-chart
        mediaAspect: 1256 / 430
        mediaAlt: RevoGantt constraint windows, deadline markers, and warning states
        href: https://demo.rv-grid.com/gantt-constraints-deadlines/ts?theme=light
        cta: Test constraint handling
      - icon: '07'
        title: Progress, actuals, and effort modes
        description: Track actual dates and remaining duration with fixed-duration, fixed-work, and fixed-units scheduling behavior.
        tags: [Actuals, Remaining work, Effort modes]
        media: /img/gantt-features/progress-work.webp?v=20260808-chart
        mediaAspect: 1256 / 275
        mediaAlt: RevoGantt progress and work example with fixed scheduling modes
        href: https://demo.rv-grid.com/gantt-progress-work/ts?theme=light
        cta: Open progress and work
      - icon: '08'
        title: Split-task scheduling
        description: Pause and resume work inside one task span while preserving planned working duration and dependency-aware scheduling.
        tags: [Split ranges, Working time, Dependencies]
        media: /img/gantt-features/split-tasks.webp?v=20260808-chart
        mediaAspect: 1256 / 270
        mediaAlt: RevoGantt task bars split into multiple working ranges
        href: https://demo.rv-grid.com/gantt-split-tasks/ts?theme=light
        cta: Try split tasks
      - icon: '09'
        title: Production task editor
        description: Use the packaged task dialog for general fields, predecessors, resources, advanced scheduling, notes, and application-defined tabs.
        tags: [Editor schema, Assignments, Custom tabs]
        media: /img/gantt-features/task-editor.webp
        mediaAlt: RevoGantt task editor dialog with schedule fields and color choices
        href: https://demo.rv-grid.com/gantt-task-editor-form/ts?theme=light
        cta: Open the task editor
      - icon: '10'
        title: Product controls and export
        description: Combine undo and redo, read-only or locked tasks, localized dates, custom visuals, JSON project snapshots, and grid export workflows.
        tags: [History, Permissions, JSON / Excel / CSV]
        media: /img/gantt-features/production.png?v=20260808-chart
        mediaAspect: 2920 / 1400
        mediaAlt: RevoGantt production patterns with read-only, localization, export, and large-project controls
        href: https://demo.rv-grid.com/gantt-production-patterns/ts?theme=light
        cta: Review production patterns
  positioning:
    id: gantt-performance
    kicker: Performance at scale
    title: A fast JavaScript Gantt chart built for large datasets.
    description: RevoGantt uses row and column virtualization to keep browser rendering focused on the visible viewport. Test the live 10,000-task, 19,796-dependency demo, then benchmark your own hierarchy, scheduling rules, and custom cells.
    items:
      - title: Two-axis virtualization
        description: Render the visible task rows and timeline columns instead of mounting the entire project surface in the DOM.
      - title: Large-data proof you can test
        description: Open a real browser demo with 10,000 generated tasks and 19,796 dependencies rather than relying on an unsupported scale claim.
      - title: Fast, editable SaaS workflows
        description: Keep owners, status, cost, progress, dates, and custom fields editable in the same grid-first planning workspace.
  integrations:
    id: integrations
    kicker: Integrations
    title: JavaScript, React, Vue, Angular, and Svelte Gantt support.
    description: Ship the same scheduling experience across JavaScript, React, Vue, Angular, and Svelte projects.
    items:
      - icon: JS
        iconSrc: /js.svg
        name: JavaScript
        badge: Web Component
      - icon: React
        iconSrc: /react.svg
        name: React
        badge: Integration guide
        href: /gantt/react-gantt-component
      - icon: Vue
        iconSrc: /vuejs.svg
        name: Vue
        badge: Integration guide
        href: /gantt/vue-gantt-component
      - icon: Ng
        iconSrc: /angular.svg
        name: Angular
        badge: Integration guide
        href: /gantt/angular-gantt-component
      - icon: Sv
        iconSrc: /svelte.svg
        name: Svelte
        badge: Web Component

  featureComparison:
    id: gantt-feature-comparison
    kicker: Feature comparison
    title: Gantt capabilities for embedded planning software.
    description: Compare the core scheduling features product teams usually need before choosing a JavaScript Gantt chart component.
    columns: [Feature, RevoGantt, Product value]
    rows:
      - feature: Hierarchy and milestones
        revogrid: Task trees, summaries, rollups, and milestone task types
        note: Model a real work breakdown structure instead of a flat list.
      - feature: Dependencies
        revogrid: FS, SS, FF, and SF links with lead, lag, and validation
        note: Model real sequencing rules instead of only drawing bars.
      - feature: Scheduling direction
        revogrid: Forward, project-finish, automatic, and manual scheduling
        note: Preserve authored dates or let the engine recalculate the plan.
      - feature: Constraints and deadlines
        revogrid: Start and finish constraints, deadline markers, and diagnostics
        note: Explain schedule conflicts before they become delivery surprises.
      - feature: Critical path
        revogrid: Critical path, early and late dates, and total slack
        note: Show which work controls the delivery date.
      - feature: Baselines
        revogrid: Baseline bars plus start, finish, duration, and progress variance
        note: Compare original commitments with the latest forecast.
      - feature: Resources
        revogrid: Assignments, costs, capacity, warnings, and auto-leveling
        note: Connect tasks to people, crews, rooms, machines, or teams.
      - feature: Calendars
        revogrid: Project, task, and resource calendars with working time and holidays
        note: Account for non-working days, holidays, and business calendars.
      - feature: Drag and resize
        revogrid: Task creation, move, resize, progress, and dependency editing
        note: Let users reschedule work directly in the Gantt view.
      - feature: Progress and work
        revogrid: Actual dates, remaining duration, and three effort modes
        note: Track execution and effort-driven changes without leaving the plan.
      - feature: Split tasks
        revogrid: Multiple working ranges inside one scheduled task
        note: Pause and resume work without inventing artificial tasks.
      - feature: Task editing
        revogrid: Inline cells plus a schema-driven multi-tab task dialog
        note: Fit simple edits and detailed planning into the same workflow.
      - feature: History and permissions
        revogrid: Undo and redo, project read-only mode, and locked tasks
        note: Add production safeguards around high-impact schedule changes.
      - feature: Custom columns
        revogrid: RevoGrid column, cell, and plugin customization
        note: Keep domain-specific fields beside the timeline.
      - feature: Export
        revogrid: JSON project snapshots plus RevoGrid CSV and Excel workflows
        note: Move schedule data into reporting, handoff, and audit workflows.
      - feature: Performance at scale
        revogrid: Row and column virtualization with a live 10,000-task demo
        note: Keep large task tables and wide timelines responsive while rendering the visible viewport.
  useCases:
    id: gantt-use-cases
    kicker: Use cases
    title: Where teams embed RevoGantt.
    description: Use RevoGantt when planning belongs inside an operational product, not in a separate project-management tab.
    benefits:
      label: Explore the complete Gantt use-case library
      href: /gantt/use-cases
    items:
      - title: ERP
        description: Add work orders, production plans, delivery milestones, and dependency-aware timelines to enterprise resource planning screens.
        media: /img/gantt-use-cases/erp.webp?v=20260808-polished
        mediaAlt: Real RevoGantt ERP view with work orders, production status, linked operations, an approved baseline, and delivery commitments
        href: /gantt/erp-gantt
        cta: Explore ERP planning
      - title: PSA
        description: Plan client projects, consultants, milestones, budgets, and delivery capacity inside professional services software.
        media: /img/gantt-use-cases/professional-services.webp?v=20260808-polished
        mediaAlt: Real RevoGantt professional-services view with client engagements, consultant assignments, budget context, milestones, and capacity risk
        href: /gantt/professional-services-gantt
        cta: Explore services delivery
      - title: Construction
        description: Coordinate crews, phases, inspections, suppliers, and handoffs with project schedules tied to live business data.
        media: /img/gantt-use-cases/construction.webp?v=20260808-exact
        mediaAlt: Real RevoGantt construction schedule with work packages, trade crews, inspections, supplier risk, and connected site handoffs
        href: /gantt/construction-gantt
        cta: Explore construction planning
      - title: Manufacturing
        description: Schedule jobs, machines, materials, changeovers, and dependencies while keeping planning fields editable in the grid.
        media: /img/gantt-use-cases/manufacturing.webp?v=20260808-polished
        mediaAlt: Real RevoGantt manufacturing schedule with production orders, machines, material gates, changeovers, quality releases, and shipment risk
        href: /gantt/manufacturing-gantt
        cta: Explore production planning
      - title: Resource planning
        description: Assign people, teams, rooms, equipment, or production lines and expose workload context next to task dates.
        media: /img/gantt-use-cases/resource-planning.webp?v=20260808-polished
        mediaAlt: Real RevoGantt resource-planning view with assignments, allocation units, shared facilities, workload conflicts, and release milestones
        href: /gantt/resource-planning
        cta: Explore capacity planning
      - title: Internal tools
        description: Build planning views for operations, finance, support, onboarding, marketing, and engineering workflows.
        media: /img/gantt-use-cases/internal-tools.webp?v=20260808-polished
        mediaAlt: Real RevoGantt internal-operations plan with cross-functional owners, source systems, approvals, handoffs, and a release-readiness gate
        href: /gantt/internal-tools-gantt
        cta: Explore internal planning
  faq:
    id: gantt-faq
    kicker: FAQ
    title: RevoGantt questions
    items:
      - q: What is RevoGantt?
        a: RevoGantt is an embeddable JavaScript Gantt chart component for building editable project-planning and scheduling workflows in web applications. It supports TypeScript, React, Vue, Angular, Svelte, and plain JavaScript integrations.
      - q: Is RevoGantt a full Microsoft Project clone?
        a: No. RevoGantt supports familiar Microsoft Project-style planning concepts, but it is designed as an embeddable, grid-first web component for SaaS applications rather than a full desktop Project clone.
      - q: Does it support React?
        a: Yes. RevoGantt can be used in React applications and also supports JavaScript, Vue, Angular, and Svelte projects.
      - q: Does it support dependencies?
        a: Yes. RevoGantt supports task dependencies including finish-to-start, start-to-start, finish-to-finish, and start-to-finish relationships.
      - q: Can it handle large task lists?
        a: Yes. RevoGantt uses row and column virtualization for large editable task tables and wide timelines. The live large-data demo contains 10,000 tasks and 19,796 dependencies; production performance still depends on hierarchy, scheduling rules, custom cells, and target hardware.
      - q: Is it included in Pro Advanced?
        a: Yes. RevoGantt is part of the Pro Advanced bundle.
  evaluation:
    id: gantt-pricing-trial
    kicker: Pricing and trial
    title: Evaluate the complete Gantt module before purchase.
    description: Gantt is included in RevoGrid Pro Advanced. Licensing is per front-end developer, with no runtime royalties, server license, deployment counting, or end-user seat fees under the current plan.
    priceLabel: Pro Advanced current USD price
    items:
      - title: 30-day trial
        description: The trial lasts 30 days and is available on request with no credit card required. Start with public demos, then validate Pro behavior inside your application.
      - title: Unlimited production usage
        description: One licensed developer seat can ship the module in production without per-deployment or per-end-user charges, subject to the license terms.
      - title: Full Advanced bundle
        description: The same plan includes Gantt, Pivot, the plugin API, typed source access, private repository access, priority support, and engineering guidance.
    actions:
      - label: Request Pro Trial
        href: /trial
      - label: Review all pricing
        href: /pricing
        variant: secondary
  linkSections:
    id: gantt-resources
    kicker: Internal links
    title: Gantt articles and comparison pages
    description: Continue from the Gantt landing page into implementation guides, scheduling context, and product comparisons.
    sections:
      - title: Gantt articles
        items:
          - label: Benefits of an Embedded Gantt Chart
            href: /gantt/benefits-of-gantt-chart
          - label: Best JavaScript Gantt Libraries
            href: /blog/best-js-gantt-in-2026
          - label: How Gantt Scheduling Works
            href: /blog/how-scheduling-works
          - label: MS Project Gantt Is Dead - What Now?
            href: /blog/ms-project-gantt-whats-next
          - label: JavaScript Gantt Dependencies
            href: /blog/javascript-gantt-chart-dependencies
      - title: Frameworks and scale
        items:
          - label: React Gantt Component
            href: /gantt/react-gantt-component
          - label: Angular Gantt Component
            href: /gantt/angular-gantt-component
          - label: Vue Gantt Component
            href: /gantt/vue-gantt-component
          - label: JavaScript Gantt for Large Datasets
            href: /gantt/javascript-gantt-large-datasets
      - title: Gantt alternatives
        items:
          - label: Microsoft Project Gantt Alternative
            href: /compare/microsoft-project-gantt-alternative
          - label: DHTMLX Gantt Alternative
            href: /compare/dhtmlx-gantt-alternative
          - label: Bryntum Gantt Alternative
            href: /compare/bryntum-gantt-alternative
          - label: Syncfusion Gantt Alternative
            href: /compare/syncfusion-gantt-alternative
      - title: Industry solutions
        items:
          - label: All Gantt Use Cases
            href: /gantt/use-cases
          - label: Gantt for SaaS
            href: /gantt/saas-gantt
          - label: Gantt for ERP
            href: /gantt/erp-gantt
          - label: Professional Services Gantt
            href: /gantt/professional-services-gantt
          - label: Construction Gantt
            href: /gantt/construction-gantt
          - label: Manufacturing Gantt
            href: /gantt/manufacturing-gantt
          - label: Gantt for Resource Planning
            href: /gantt/resource-planning
          - label: Gantt for Internal Tools
            href: /gantt/internal-tools-gantt
      - title: Feature guides
        items:
          - label: Gantt Critical Path
            href: /gantt/critical-path
          - label: Gantt Baselines
            href: /gantt/baselines
          - label: Gantt Resource Scheduling
            href: /gantt/resource-scheduling
  advancedCallout:
    title: Gantt is part of the Pro Advanced bundle.
  cta:
    title: Add fast, large-scale Gantt scheduling without building it from scratch.
    description: Embed RevoGantt, validate it with the 10,000-task demo, customize it for your product UI, and keep every scheduling interaction under your control.
    primaryHref: /demo/gantt
    primaryLabel: View Demo
    secondaryHref: /trial
    secondaryLabel: Request Pro Trial
---

<script lang="ts" setup>
import GanttPageLayout from './gantt/GanttPageLayout.vue'
</script>

<GanttPageLayout />
