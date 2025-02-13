---
title: Demo Pivot Table
pageClass: demo-page-class
layout: doc
aside: false
---

<script setup>
import { useData } from 'vitepress'
const { isDark } = useData()
</script>

<ClientOnly>
<iframe :src="`https://pro.rv-grid.com/demo/pivot?view=preview&theme=${isDark ? 'dark' : 'light'}`"
     style="width:100%; height: 700px; border:0; border-radius: 4px; overflow:hidden;"
     title="Pivot Table"
   ></iframe>
</ClientOnly>