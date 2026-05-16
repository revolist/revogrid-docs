---
title: RevoGrid Pro Pricing - Data Grid Plans
description: Compare RevoGrid Pro pricing for developer licenses, commercial data grid features, support options, and royalty-free application deployment.
sidebar: false
aside: false
editLink: false
footer: false
prev: false
next: false
layout: page
head:
  - - link
    - rel: canonical
      href: https://rv-grid.com/pricing
pricingPage:
  hero:
    eyebrow: Pricing
    title: RevoGrid Pro Pricing.
    titleEmphasis: Plans for data grid teams.
    subtitle: No deployment fees. No runtime royalties. No per-seat charges for your end users. Simple per-developer annual pricing.
  featureComparison:
    heading: Full feature comparison
  faq:
    heading: Frequently asked questions
    items:
      - question: How many developer licenses do I need?
        answer: The number of licenses must match the maximum number of concurrent developers contributing to the front-end code. Back-end developers do not count unless they work with the RevoGrid Pro front-end code. See the <a href='/pro/policies/license#_3-4-1-Required-quantity-of-licenses'>EULA</a> for examples.
      - question: Am I allowed to use the product after the update entitlement expires?
        answer: Yes, you can continue using the product in production after the update entitlement expires. However, continued development, updates, new features, and technical support require an active subscription.
      - question: Do developers have to be named?
        answer: No. Licenses are transferable between developers when team members join or leave projects, as long as the number of licensed developers is not exceeded.
      - question: What is the policy on redistributing the software?
        answer: RevoGrid Pro licenses are royalty-free for internal company solutions, hosted applications, and commercial solutions deployed to end users. If sublicensing is needed, it must be part of a larger work and follow the <a href='/pro/policies/license'>EULA</a> terms.
      - question: Why must we license developers not using the software directly?
        answer: All developers contributing to a project using RevoGrid Pro must be licensed, even if they use it indirectly through a wrapper library. This keeps licensing clear for shared front-end codebases.
      - question: Do you offer discounts to educational and non-profit organizations?
        answer: Yes. We offer a 50% discount for students, instructors, non-profits, and charities. To qualify, provide proof of affiliation and <a href='mailto:contact@revolist.eu'>contact sales</a>.
      - question: Is there a deployment fee?
        answer: No. RevoGrid Pro does not currently charge a deployment fee. Your license costs are based on the selected plan and required number of developer licenses, not how many times you deploy.
      - question: What's the difference between Pro Light and Pro Advanced?
        answer: <strong>Pro Light</strong> gives you advanced column types, enhanced sorting, export, and priority bug fixes for one product. <strong>Pro Advanced</strong> adds the full plugin API, pivot tables, typed source access, direct engineering support, and broader commercial use.
      - question: Is the open-source version truly free?
        answer: Yes. The MIT core is free forever, including for commercial use, subject to the attribution requirements described in the <a href='/guide/attribution'>attribution guide</a>. Pro adds features on top of the open-source build.
      - question: Need help?
        answer: For sales-related inquiries, <a href='mailto:contact@revolist.eu'>contact sales</a>. For product issues, <a href='https://github.com/revolist/revogrid/issues' target='_blank' rel='noopener'>open a GitHub issue</a>.
  cta:
    title: Start free. Upgrade when
    titleEmphasis: you're ready.
    subtitle: No credit card required for the open-source build. Pro trials available on request.
    primary:
      label: Get started free
      href: https://github.com/revolist/revogrid
      external: true
    secondary:
      label: Explore Pro features
      href: /pro/
    footerLinks:
      - label: Privacy Policy
        href: /pro/policies/privacy
      - label: Terms of Service
        href: /pro/policies/terms
      - label: License
        href: /pro/policies/license
      - label: Security Policy
        href: /pro/policies/security
      - label: Contact us
        href: mailto:contact@revolist.eu
pricing:
  label: Pricing
  title: Start small. Scale when your app demands it.
  description: Per-developer licensing. No deployment counting. No server license. Upgrade as your product grows.
  note: Simple per-developer licensing. No deployment counting. No server license. Upgrade when your product needs more advanced modules.
  cards:
    - id: oss
      name: Open Source
      description: MIT-licensed core for prototypes, open-source projects, and core grid evaluation.
      price: Free
      period: ''
      sub: forever
      action: Read docs
      link: /guide/
      features:
        - MIT core grid
        - Virtual scrolling
        - Inline editing and selection
        - All framework wrappers
        - Community examples
      dim:
        - Advanced Pro modules
        - Priority support
    - id: light
      name: Pro Light
      description: For individual developers and small teams building production data apps.
      action: Buy Pro Light
      features:
        - Commercial production use
        - text: Production-ready plugins and examples
          link: /pro/
        - Pro MCP (Model Context Protocol)
        - Includes one year of updates
      dim:
        - Pivot Grid module
        - Gantt Chart module
    - id: advanced
      name: Pro Advanced
      featured: true
      badge: Best for advanced workflows
      description: For product teams building Pivot, Gantt, and complex operational interfaces.
      action: Buy Pro Advanced
      features:
        - Everything in Pro Light
        - Pivot Grid module
        - Gantt Chart module
        - Roadmap influence
        - Priority support
        - Priority bug fix queue
        - Early access to new modules
    - id: enterprise
      name: Enterprise
      description: For larger teams with procurement, security review, and custom terms.
      price: Custom
      period: ''
      sub: ''
      action: Talk to sales
      link: mailto:hello@revolist.ee
      features:
        - Everything in Pro Advanced
        - Custom contracts & invoicing
        - Procurement onboarding assistance
        - Security review support & documentation
        - Dedicated engineering contact
        - Flexible licensing for contractor-based development teams
        - Enterprise integration guidance
        - Roadmap collaboration

---

<script lang="ts" setup>
import PricingPageLayout from './pricing-page/PricingPageLayout.vue'
</script>

<PricingPageLayout />
