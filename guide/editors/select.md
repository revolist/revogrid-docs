---
title: Select Dropdown Editor
description: Configure the free RevoGrid dropdown editor with choices, labels, values, and dynamic options.
---

<script setup>
import { defineClientComponent } from 'vitepress'
const FormatExample = defineClientComponent(() => import('./FormatExample.vue'))
</script>

# Select Dropdown

Double-click a status and choose another option from the dropdown.

<FormatExample format="select" column-label="Status" />

<!--@include: ../column/_types.select.md{3,}-->
