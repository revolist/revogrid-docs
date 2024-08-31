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
.demo-container {
    border: 1px solid var(--vp-c-divider);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: var(--vp-shadow-2);
}
 .demo-page-class {
  @media (min-width: 1440px) {
      .VPDoc:not(.has-sidebar) .content[data-v-343c73d6] {
          max-width: 1440px;
      }
  }
 }
</style>

# Nobel Prize winners 🏆
<br /> 

<div class="demo-container">
<Grid class="nobel-grid"/>
</div>