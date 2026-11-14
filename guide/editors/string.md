---
title: String Editor
description: Use the built-in RevoGrid string editor for text, labels, and identifiers.
---

<script setup>
import { defineClientComponent } from 'vitepress'
const FormatExample = defineClientComponent(() => import('./FormatExample.vue'))
</script>

# String

Double-click a task, enter new text, and press Enter to save.

<FormatExample format="string" column-label="Task" />

<!--@include: ../column/_types.string.md{3,}-->
