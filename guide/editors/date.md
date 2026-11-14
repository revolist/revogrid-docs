---
title: Date Editor
description: Configure the free RevoGrid date column type and calendar editor.
---

<script setup>
import { defineClientComponent } from 'vitepress'
const FormatExample = defineClientComponent(() => import('./FormatExample.vue'))
</script>

# Date

Double-click a date to open the calendar editor and choose another day.

<FormatExample format="date" column-label="Due date" />

<!--@include: ../column/_types.date.md#date-format-->
