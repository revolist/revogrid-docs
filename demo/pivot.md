---
title: Demo Pivot Table
pageClass: demo-page-class no-x-padding no-top-padding no-bottom-padding
layout: doc
aside: false
footer: false
prev: false
next: false
editLink: false
---

<script setup>
import { useData } from 'vitepress'
const { isDark } = useData()
</script>

<ClientOnly>
<iframe :src="`https://pro.rv-grid.com/demo/pivot?view=preview&theme=${isDark ? 'dark' : 'light'}`"
     style="width:100%; height: calc(100vh - 80px); border:0; border-radius: 4px; overflow:hidden;"
     title="Pivot Table"
   ></iframe>
</ClientOnly>