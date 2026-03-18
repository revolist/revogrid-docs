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

const currency = ref<Currency>('EUR')

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


<span class="VPBadge warning">Ending Soon</span> <span class="VPBadge tip">No deployment fee</span> <span class="VPBadge danger">Early Bird</span>  Get **50%** off on all plans.  
Early adopters get our premium features at half the regular price.

<div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-bottom: 0.75rem;">
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
        class="pro highlight"
        description="Best for start-ups and businesses who build commercial products with RevoGrid."
        buttonText="Buy now"
        :monthlyPrice="formatPrice('light', 'month')"
        :monthlyPriceOriginal="formatPrice('light', 'month', 2)"
        :yearlyPrice="formatPrice('light', 'year')"
        :yearlyPriceOriginal="formatPrice('light', 'year', 2)"
        :features="[
        `Access to all <a href='/pro'>Pro Examples</a>.`,
        `Plugins and Documentation.`,
        ]"
        :href="PRICES.light.link"
      />
      <Plan
        title="Pro Advanced"
        class="pro"
        buttonTheme="alt"
        description="Best for companies and individuals that want a direct wire to the RevoGrid team experience."
        buttonText="Buy now"
        :monthlyPrice="formatPrice('advanced', 'month')"
        :monthlyPriceOriginal="formatPrice('advanced', 'month', 2)"
        :yearlyPrice="formatPrice('advanced', 'year')"
        :yearlyPriceOriginal="formatPrice('advanced', 'year', 2)"
        :features="[
          `<a href='/pro/ai' class='VPBadge danger'>AI Agent</a> for plugin code generation`,
          `Access to all <a href='/pro'>Pro Examples</a>, Plugins and Documentation.`,
          `Up to 1hr of individual support via email.`,
          `Prioritized Feature Requests, Github Issues and Pull Requests.`
        ]"
        :href="PRICES.advanced.link"
        />
    </div>
</div>

<div style="text-align: center;">

[Privacy Policy](./policies/privacy) | [Terms of Service](./policies/terms) | [License](./policies/license) | <a @click="showForm = true">Contact us</a>

</div>
<ContactForm :isVisible="showForm" @close="showForm = false"/>



<div class="description">

## Let's Connect!

Have questions about features? 🤔  
Need a trial period to evaluate Pro features, want to discuss enterprise pricing, or just have questions - our team is ready to assist you.

<VPButton text="Contact Our Team →"  @click="showForm = true" />
</div>



<!--@include: ./_frequent-questions.md -->
