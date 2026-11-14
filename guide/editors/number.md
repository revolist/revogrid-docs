---
title: Number Editor
description: Configure the free RevoGrid number column type for numeric formatting and editing.
---

<script setup>
import { defineClientComponent } from 'vitepress'
const FormatExample = defineClientComponent(() => import('./FormatExample.vue'))
</script>

# Number

Double-click an amount, enter a number, and press Enter. Values display with thousands separators and two decimal places.

<FormatExample format="number" column-label="Amount" />

<!--@include: ../column/_types.number.md{3,}-->
