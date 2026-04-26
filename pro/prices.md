---
title: Pricing
description: Start using RevoGrid for free! Switch to a commercial plan to access advanced features & technical support.
sidebar: false
aside: false
editLink: false
footer: true
prev: false
next: false
pageClass: pro-table
layout: custom
breadcrumbs: true
---
<style lang="scss" src="./pro.styles.scss"></style>

<style lang="scss">
.vp-card.plans {
  margin: 0 -30px;
} 
</style>


<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { PRICES, type Currency } from './prices'
import Plan from './Plan.vue'
import ContactForm from './ContactForm.vue'

import type { DefaultTheme } from 'vitepress/theme'
import { VPButton } from 'vitepress/theme'
import VPTeamMembers from 'vitepress/dist/client/theme-default/components/VPTeamMembers.vue'


import { ElSwitch, ElTooltip } from 'element-plus'
import 'element-plus/es/components/switch/style/css'
import 'element-plus/es/components/tooltip/style/css'
import 'element-plus/theme-chalk/dark/css-vars.css'

let showForm = ref(false) // isVisible

const currency = ref<Currency>('USD')

const isUsd = computed({
  get: () => currency.value === 'USD',
  set: (val: boolean) => {
    currency.value = val ? 'USD' : 'EUR'
  },
})

const formatPrice = (plan: keyof typeof PRICES, period: 'month' | 'year', multiplier = 1) => {
  const value = PRICES[plan][period][currency.value] * multiplier
  const symbol = currency.value === 'EUR' ? '€' : '$'
  return `${value}${symbol}`
}
</script>

<div class="description">

<div>
  <span class="VPBadge danger">Price Protection</span>
  <p>Existing customer teams keep their current pricing when extending seats.</p>
</div>


<div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-bottom: 0.75rem; margin-top: 2rem">
  <ElSwitch
    v-model="isUsd"
    :active-text="'USD $'"
    :inactive-text="'EUR €'"
  />
</div>


</div>

<div class="vp-card plans">
    <div class="plans-container">
      <Plan
        title="Pro Light"
        class="pro"
        buttonTheme="alt"
        description="Best for start-ups and businesses who build commercial products with RevoGrid."
        buttonText="Buy now"
        :monthlyPrice="formatPrice('light', 'month')"
        :yearlyPrice="formatPrice('light', 'year')"
        :features="[
          'One product / app',
          { text: 'Unlimited deployments', tooltip: 'Unlimited deployments for the licensed product or application.' },
          'Commercial use',
          `Access to all <a href='/pro'>Pro Examples</a>.`,
          `Plugins and Documentation.`,
        ]"
        :href="PRICES.light.link"
      />
      <Plan
        title="Pro Advanced"
        class="pro highlight"
        buttonTheme="brand"
        description="Best for companies and individuals that want a direct wire to the RevoGrid team experience."
        buttonText="Buy now"
        :monthlyPrice="formatPrice('advanced', 'month')"
        :yearlyPrice="formatPrice('advanced', 'year')"
        :features="[
          'All in Light +',
          { text: 'Enterprise Pivot grid', tooltip: 'Production-ready Pivot analytics with totals, drill-down, field panels, and server-side engine contracts.' },
          { text: 'Access to typed source code', tooltip: 'Train your agents to build features faster.' },
          { text: 'Broader commercial use', tooltip: 'Suitable for customer-facing SaaS products and embedded commercial software. No app limit.' },
          { text: 'Priority support', tooltip: 'Faster response target than the standard support tier.' },
          'Team discounts 3+ seats',
        ]"
        :href="PRICES.advanced.link"
        />
      <Plan
        title="Enterprise"
        class="pro"
        buttonTheme="alt"
        description="Structured for larger teams, departments, or broader company use."
        buttonText="Contact Us"
        :features="[
          { text: 'SLA / priority handling', tooltip: 'Higher support expectations and formal response handling can be included.' },
          'Legal / security support',
        ]"
        @buttonClick="showForm = true"
        />
    </div>
</div>

<div style="text-align: center;">

[Privacy Policy](./policies/privacy) | [Terms of Service](./policies/terms) | [License](./policies/license) | [Security Policy](./policies/security) | <a @click="showForm = true">Contact us</a>

</div>
<ContactForm :isVisible="showForm" @close="showForm = false"/>



<div class="description">

## Let's Connect!

Have questions about features? 🤔  
Need a trial period to evaluate Pro features, want to discuss enterprise pricing, or just have questions - our team is ready to assist you.

<VPButton text="Contact Our Team →"  @click="showForm = true" />
</div>



<!--@include: ./_frequent-questions.md -->
