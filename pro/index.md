---
title: RevoGrid Pro
description: Start using RevoGrid for free! Switch to a commercial plan to access advanced features & technical support.
sidebar: false
aside: false
editLink: false
footer: true
prev: false
next: false
pageClass: pro-table
layout: custom
breadcrumbs: false
---

<style lang="scss" src="./pro.styles.scss"></style>
<style lang="scss" scoped>
  /* :deep(h3):first-child {
    margin-top: 0;
  } */
  @media (min-width: 768px) {
    h1 {
      margin-top: 30px;
      font-size: 70px;
      line-height: 60px;
      font-weight: bold;
      max-width: 500px;
    }
  }
</style>

<script lang="ts" setup>
import { ref } from 'vue'
import ContactForm from './ContactForm.vue'
import type { DefaultTheme } from 'vitepress/theme'
import { VPButton } from 'vitepress/theme'
import { featuresPro, proWhy } from './features.pro'
import FeaturesGrid from './FeaturesGrid.vue'

let showForm = ref(false) // isVisible
</script>

<ContactForm :isVisible="showForm" @close="showForm = false" />



# Build next level Apps as a Pro

Features for faster implementation,  
reducing overall project timelines and price.

<VPButton size="big" text="Subscribe now!" href="/pro/prices" />

<br/>
<br/>

<div style="border-radius: 12px; overflow: hidden; text-align: center; border: 2px solid black; box-shadow: 10px 8px 0 rgba(0, 0, 0, 0.8)">
<video class="video" src="/video/pivot.mp4" loop playsinline autoplay style='margin: -3px'></video>
</div>

<br/>

Watch our video previews or [compare our plans](./feature-table)

---

<FeaturesGrid :features="featuresPro" />


<div class="description">
<br />
Can't find the feature you're looking for? <a @click="showForm = true">Ask us!</a>

<br />

<br />


## Save time and money with our features!
Get cool features out of the box to build the best products and elevate your development experience!


<div class="grid">


::: details Reduced Development Time {open dashed}

Streamlined features allow for faster implementation, reducing overall project timelines.

:::

::: details Cost-Effective Plans {open dashed}

Flexible pricing options cater to different needs, ensuring you only pay for what you use.

:::

::: details Built-in Features {open dashed}

Access to a wide range of built-in features eliminates the need for costly third-party plugins.

:::


::: details Scalability {open dashed}

Easily scale your applications without incurring significant additional costs.

:::


::: details Support and Resources {open dashed}

Comprehensive support and documentation reduce the need for external consulting services. 

:::


<VPButton size="medium" text="Subscribe now!" href="/pro/prices" />
</div>

</div>

