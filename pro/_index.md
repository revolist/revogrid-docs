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


<script lang="ts" setup>
import { ref } from 'vue'
import Plan from './Plan.vue'
import ContactForm from './ContactForm.vue'

import type { DefaultTheme } from 'vitepress/theme'
import VPTeamMembers from 'vitepress/dist/client/theme-default/components/VPTeamMembers.vue'
import { features, proWhy } from './features'
import { featuresPro } from './features.pro'
import FeaturesGrid from './FeaturesGrid.vue'

import { ElSwitch, ElTooltip } from 'element-plus'
import 'element-plus/es/components/switch/style/css'
import 'element-plus/es/components/tooltip/style/css'
import 'element-plus/theme-chalk/dark/css-vars.css'

let showForm = ref(false) // isVisible

const isAnnual = ref(true)
const onSwitchChange = (value: boolean) => {
    console.log('License type changed:', value ? 'Annual' : 'Perpetual')
}
</script>

<div class="description">

# Build next level apps as a Pro

Switch to a 💎 commercial plan to access advanced features & technical support.

  <!-- Toggle Switch for Perpetual / Annual -->
<!-- <el-tooltip
          :content="!isAnnual ? 'One-time purchase to use the current released versions forever. 12 months of updates included.' : 'Upon expiration, your permission to use the Software in development ends. The license is perpetual in production.'"
          placement="top"
      >
  <el-switch
    v-model="isAnnual"
    active-text="Annual"
    inactive-text="Perpetual"
    style="--el-switch-on-color: var(--vp-input-switch-bg-color); --el-switch-off-color: var(--vp-input-switch-bg-color); --el-color-primary: var(--vp-c-brand-1)"
    @change="onSwitchChange"
  />
</el-tooltip> -->
</div>

<div class="vp-card plans">
    <div class="plans-container">
      <Plan
        title="Pro Light"
        class="pro highlight"
        description="Best for start-ups and businesses who build commercial products with RevoGrid."
        buttonText="Buy now"
        :price="isAnnual ? 12.5 : 300"
        :pricePeriod="isAnnual ? 'month' : 'year'"
        :features="[
        `Access to all <a href='#What-s-included-'>Pro Examples</a>.`,
        `Plugins and Documentation.`,
        ]"
        href="https://buy.stripe.com/dR6cPS98V8Xn90IaEI"
      />
      <Plan
        title="Pro Advanced"
        class="pro"
        buttonTheme="alt"
        description="Best for companies and individuals that want a direct wire to the RevoGrid team experience."
        buttonText="Buy Now"
        :price="isAnnual ? 30 : 700"
        :pricePeriod="isAnnual ? 'month' : 'year'"
        :features="[
          `<a href='/pro/ai' class='VPBadge danger'>AI Agent</a> for plugin code generation`,
          `Access to all <a href='#What-s-included-'>Pro Examples</a>, Plugins and Documentation.`,
          `Up to 1 hour of individual support via email per month.`,
          `Prioritized Feature Requests, Github Issues and Pull Requests.`,
          `Introduction call with one of the creators.`,
        ]"
        href="https://buy.stripe.com/aEUcPS0Cpb5v3Go149"
        />
    </div>
</div>

<div style="text-align: center;">

[Privacy Policy](./policies/privacy) | [Terms of Service](./policies/terms) | [License](./policies/license) | <a @click="showForm = true">Contact us</a>

</div>
<ContactForm :isVisible="showForm" @close="showForm = false"/>



<div class="description">

## What's included?

Click on the features below to see video previews or [compare our plans](./version-compare).

</div>
<br/>

<FeaturesGrid :features="featuresPro" />

<br />
<br />
<br />

<!--@include: ./_frequent-questions.md -->
