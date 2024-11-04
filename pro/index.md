---
sidebar: false
aside: false
editLink: false
footer: true
prev: false
next: false
pageClass: proPage
---

<style lang="scss" src="./pro.styles.scss"></style>
<style lang="scss" scoped>
.vp-card {
  flex: 1;
  border: 1px solid var(--vp-c-divider-light);
  padding: 1.5em;
  margin: 1.5em 0;
  border-radius: 10px;
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-gutter);
  text-align: center;
  &.free {
      text-align: left;
  }
}
</style>

<script lang="ts" setup>
import { ref } from 'vue'
import Plan from './Plan.vue'
import ContactForm from './ContactForm.vue'

import type { DefaultTheme } from 'vitepress/theme'
import VPTeamMembers from 'vitepress/dist/client/theme-default/components/VPTeamMembers.vue'
import { features, proWhy } from './features'
import { featuresPro } from './features.pro'
import FeaturesGrid from './FeaturesGrid.vue'

let showForm = ref(false) // isVisible
const proFeat = [
'Access to all <a href="#What-s-included-">Pro Examples</a>, Plugins and Documentation.',
'Up to 1 hour of individual support via email per month.',
'Prioritized Github Issues and Pull Requests.',
'Prioritized Roadmap Item and Feature Requests.',
'Introduction call with one of the creators.',
'Keep the library running and maintained under an MIT License.',
]
</script>

<div class="description">

# Build next level apps as a Pro

Pro version 💎 aimed at supporting the future growth of the library and providing you with the exclusive benefits.

</div>

<div class="plans-container">

<Plan
title="Professional"
class="pro"
description="Best for companies and individuals that want a direct wire to the Revogrid team experience."
buttonText="Request a Quote"
:features="proFeat"
@open="showForm = true"
>
<template #footer>

[Privacy Policy](./policies/privacy) | [Terms of Service](./policies/terms) | [License](./policies/license)

</template>
</Plan>
<ContactForm :isVisible="showForm" @close="showForm = false"/>

<div class="vp-card free"><div class="vp-card__body">
<br /><br />
<strong>Accelerate Time-to-Market</strong><br/>
Comprehensive toolset to rapidly implement complex functionality.

<hr/>

<strong>Pro-Level Plugins for Extensibility </strong><br/>
Real-world examples that demonstrate how to implement complex features effectively.


<hr/>

<strong>Insights and Support</strong><br/>
Access to exclusive expert support that helps you troubleshoot complex issues quickly.

</div></div>

</div>

<!-- Thank you for being an essential part of our community and for helping us make Revogrid better every day.

Warm regards ❤️
<br/>The Revolist Team

<br/> -->
<br/>



<br/>

### What's included?
<br/>

<FeaturesGrid :features="featuresPro" />
