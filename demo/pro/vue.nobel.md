---
pageClass: demo-page-class
layout: doc
aside: false
sidebar: false
head:
    - - link
      - rel: preconnect
        href: https://fonts.googleapis.com
    - - link
      - rel: preconnect
        href: https://fonts.gstatic.com
    - - link
      - href: https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap
        rel: stylesheet
---

<script setup>
import Grid from './DemoNobel.vue'
</script>

<style>
@media (min-width: 1440px) {
      .demo-page-class .VPDoc:not(.has-sidebar) .content {
        max-width: 1440px;
    }
}
</style>

# Nobel Prize winners 🏆


<!--@include: ../../guide/parts/cross-framework-banner.md-->

<br /> 

<div class="demo-container">
<Grid class="nobel-grid"/>
</div>
