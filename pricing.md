---
title: RevoGrid Pro Pricing - Data Grid Plans
description: Compare RevoGrid Pro pricing for developer licenses, commercial data grid features, support options, and royalty-free application deployment.
sidebar: false
aside: false
editLink: false
footer: true
prev: false
next: false
layout: page
head:
  - - link
    - rel: canonical
      href: https://rv-grid.com/pricing
pricingPage:
  keyDifferences:
    heading: Key differences
    description: The capabilities most likely to determine which plan you need.
    scrollHint: Scroll horizontally to compare plans.
    link:
      label: View full feature comparison
      href: /pro/feature-table
    rows:
      - feature: Commercial use
        free: { kind: text, text: 'MIT core, attribution retained' }
        lite: { kind: text, text: 'Paid license, attribution removable' }
        advanced: { kind: text, text: 'Paid license, attribution removable' }
      - feature: Plan scope
        free: { kind: text, text: 'Open-source core' }
        lite: { kind: text, text: '1 product/app' }
        advanced: { kind: text, text: 'Unlimited product usage' }
      - feature: { text: 'Production-ready Pro plugins/examples', href: /pro }
        free: { kind: not-included }
        lite: { kind: included }
        advanced: { kind: included }
      - feature: Full typed Pro packages via private npm
        free: { kind: not-included }
        lite: { kind: included }
        advanced: { kind: included }
      - feature: Original source repository access (GitHub)
        free: { kind: not-included }
        lite: { kind: not-included }
        advanced: { kind: included }
      - feature: Priority support
        free: { kind: not-included }
        lite: { kind: not-included }
        advanced: { kind: included }
      - feature: { text: 'Pivot Grid', href: /pivot/ }
        free: { kind: not-included }
        lite: { kind: not-included }
        advanced: { kind: included }
      - feature:
          text: 'Gantt & Scheduler'
          parts:
            - { text: Gantt, href: /gantt }
            - { text: ' & ' }
            - { text: Scheduler, href: /event-scheduler }
        free: { kind: not-included }
        lite: { kind: not-included }
        advanced: { kind: included }
  evaluation:
    heading: Choose how you want to evaluate RevoGrid
    description: Test the complete Pro experience in your own project, or start immediately with the open-source core.
    options:
      - eyebrow: Recommended for Pro evaluation
        heading: Evaluate RevoGrid Pro
        description: Test advanced modules and production-ready workflows in your own project before purchasing.
        recommended: true
        features:
          - Pro plugins and production-ready examples
          - Pivot Grid, Gantt and Scheduler
          - Technical resources and implementation guidance
          - Access provided on request
        action:
          label: Request a Pro trial
          href: /trial
      - eyebrow: Start immediately
        heading: Start with open source
        description: Explore the RevoGrid core and test the basic grid integration immediately. No request or credit card required.
        features:
          - Core data grid
          - Editing, sorting and filtering
          - Framework integrations
          - Available through GitHub and npm
        action:
          label: Explore open source
          href: /guide/
    clarification: Open source is not a Pro trial. It includes the core grid; Pro modules, production-ready plugins, original source repository access and priority support require Pro access.
  guidance:
    eyebrow: Product guidance
    heading: Still have questions about RevoGrid?
    description: Tell us what you're building, what you're comparing, or what you're still unsure about. The RevoGrid team can help you choose the right evaluation path or plan.
    action: Ask the RevoGrid team
  compareLinks:
    heading: Still evaluating your options?
    description: Explore practical guides to licensing, deployment, performance, and advanced workflows across popular JavaScript grids.
    items:
      - label: Explore comparison guides
        href: /compare/
faq:
  heading: Frequently asked questions
  items:
    - q: How many developer licenses do I need?
      a: The number of licenses must match the maximum number of concurrent developers contributing to the front-end code. Back-end developers do not count unless they work with the RevoGrid Pro front-end code. See the <a href='/pro/policies/license#_3-4-1-Required-quantity-of-licenses'>EULA</a> for examples.
    - q: Am I allowed to use the product after the update entitlement expires?
      a: Yes, you can continue using the product in production after the update entitlement expires. However, continued development, updates, new features, and technical support require an active subscription.
    - q: Do developers have to be named?
      a: No. Licenses are transferable between developers when team members join or leave projects, as long as the number of licensed developers is not exceeded.
    - q: What is the policy on redistributing the software?
      a: RevoGrid Pro licenses are royalty-free for internal company solutions, hosted applications, and commercial solutions deployed to end users. If sublicensing is needed, it must be part of a larger work and follow the <a href='/pro/policies/license'>EULA</a> terms.
    - q: Why must we license developers not using the software directly?
      a: All developers contributing to a project using RevoGrid Pro must be licensed, even if they use it indirectly through a wrapper library. This keeps licensing clear for shared front-end codebases.
    - q: Do you offer discounts to educational and non-profit organizations?
      a: Yes. We offer a 50% discount for students, instructors, non-profits, and charities. To qualify, provide proof of affiliation and <a href='mailto:contact@revolist.eu'>contact sales</a>.
    - q: Is there a deployment fee?
      a: No. RevoGrid Pro does not currently charge a deployment fee. Your license costs are based on the selected plan and required number of developer licenses, not how many times you deploy.
    - q: Can I evaluate Pro before purchasing?
      a: Yes. Use the <a href='/trial'>Evaluate RevoGrid Pro</a> page to request trial access, try public demos, and review the path from evaluation to production.
    - q: What's the difference between Pro Lite and Pro Advanced?
      a: <strong>Pro Lite</strong> covers one product or app and includes production-ready Pro plugins and full typed Pro packages through the private npm registry. <strong>Pro Advanced</strong> adds unlimited product usage, original source repository access, Pivot Grid, Gantt and Scheduler, plus priority support.
    - q: Is the open-source version truly free?
      a: Yes. The MIT core is free forever, including for commercial use, subject to the attribution requirements described in the <a href='/guide/attribution'>attribution guide</a>. Pro adds features on top of the open-source build.
    - q: Need help?
      a: For sales-related inquiries, <a href='mailto:contact@revolist.eu'>contact sales</a>. For product issues, <a href='https://github.com/revolist/revogrid/issues' target='_blank' rel='noopener'>open a GitHub issue</a>.
pricing:
  label: Pricing
  title: Start small. Scale when your app demands it.
  description: Per-developer licensing. No deployment counting. No server license. Upgrade as your product grows.
  note: Simple per-developer licensing. No deployment counting. No server license. Upgrade when your product needs more advanced modules.
  cards:
    - id: light
      name: Pro Lite
      description: For individual developers and small teams building production data apps.
      action: Buy Pro Lite
      features:
        - Commercial production use
        - text: Production-ready plugins and examples
          link: /pro/
        - Pro Portal Access
        - Pro MCP (Model Context Protocol)
        - Includes one year of updates
    - id: advanced
      name: Pro Advanced
      featured: true
      badge: Best for teams that need production-ready Pro workflows
      description: For product teams that need original source repository access, Pivot Grid, Gantt and Scheduler, and priority support.
      action: Buy Pro Advanced
      features:
        - Everything in Pro Lite
        - Priority support
        - Priority bug fix queue
        - Private GitHub repository access
        - Roadmap influence
        - Early access to new modules
        - Pivot Grid module
        - Gantt and Scheduler modules
    - id: enterprise
      name: Enterprise
      description: For larger teams with procurement, security review, and custom terms.
      price: Custom
      period: ''
      sub: ''
      action: Talk to sales
      features:
        - Everything in Pro Advanced
        - Custom contracts and invoicing
        - Procurement onboarding assistance
        - Security review support and documentation
        - Dedicated engineering contact
        - Flexible licensing for contractor-based development teams
        - Enterprise integration guidance
        - Roadmap collaboration

---

<script lang="ts" setup>
import PricingPageLayout from './pricing-page/PricingPageLayout.vue'
</script>

<PricingPageLayout />
