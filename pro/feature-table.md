---
title: RevoGrid Pro Pricing and Feature Comparison
description: Compare RevoGrid Community, Pro Lite, and Pro Advanced plans, including advanced grid features, support options, and upgrade paths.
sidebar: false
aside: false
editLink: false
footer: true
prev: false
next: false
layout: custom
breadcrumbs: false
---

<script lang="ts" setup>

import { ref } from 'vue'
import ContactForm from './ContactForm.vue'
import Table from './FeaturesCompareTable.vue'
import { featureTableGroups, featureTablePlans } from './featureTableData'

let showForm = ref(false) // isVisible
const plans = featureTablePlans
const features = featureTableGroups
</script>

<div style="text-align: center">

<Badge type="tip" text="Pricing" />

# RevoGrid Pro pricing and feature comparison

[Watch the feature overview](/pro)

</div>

<Table  :plans="plans" :features="features" />

<br />

Choose this page when you need a quick answer to:

- which advanced features are included in each plan
- whether a feature is part of Community or Pro
- which plan includes advanced support

For a higher-level overview, go back to [RevoGrid Pro](/pro/).

<br />

### Useful links

[Privacy Policy](./policies/privacy) | [Terms of Service](./policies/terms) | [License](./policies/license) | [Security Policy](./policies/security) | <a href="#contact" @click="showForm = true">Contact us</a>

<ContactForm :isVisible="showForm" @close="showForm = false"/>

<br />

<!--@include: ./_frequent-questions.md -->
