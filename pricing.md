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
commercialFaqKeys:
  - developer-licenses
  - deployment-fees
  - plan-difference
  - open-source-production
  - trial
  - source-access
  - application-limits
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
  evaluation:
    heading: Want to evaluate RevoGrid first?
    description: Choose the immediate MIT core or request approved Pro trial access for your own project.
    options:
      - eyebrow: Recommended for Pro evaluation
      - eyebrow: Start immediately
  compareLinks:
    heading: Comparing RevoGrid with another grid?
    description: Explore practical comparisons covering licensing, deployment, framework support, performance, and advanced workflows.
    examples:
      - label: AG Grid
        href: /compare/ag-grid-alternative
      - label: Handsontable
        href: /compare/handsontable-alternative
      - label: MUI X
        href: /compare/mui-x-grid-alternative
      - label: Syncfusion
        href: /compare/syncfusion-alternative
      - label: More
        href: /compare/
    items:
      - label: Explore grid comparisons
        href: /compare/
faq:
  heading: Frequently asked questions
  items:
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
    - q: Need help?
      a: For sales-related inquiries, <a href='mailto:contact@revolist.eu'>contact sales</a>. For product issues, <a href='https://github.com/revolist/revogrid/issues' target='_blank' rel='noopener'>open a GitHub issue</a>.
pricing:
  label: Pricing
  title: Start small. Scale when your app demands it.
  description: Per-developer licensing. No deployment counting. No server license. Upgrade as your product grows.
  note: Simple per-developer licensing. No deployment counting. No server license.
  cards:
    - id: light
      description: For individual developers building production data apps.
    - id: advanced
      featured: true
      badge: Best overall
      description: For teams and developers who need faster integration, priority support, and deeper project-level guidance.
    - id: enterprise
      description: For larger teams with procurement, security review, and custom terms.

---

<script lang="ts" setup>
import PricingPageLayout from './pricing-page/PricingPageLayout.vue'
</script>

<PricingPageLayout />
