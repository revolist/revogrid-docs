---
pageClass: demo-page-class
layout: doc
aside: false
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
import ShowoffBanner from '../../guide/parts/ShowoffBanner.vue'
import Grid from './DemoNobel.vue'
</script>

# Nobel Prize winners 🏆

<br />

<!--@include: ../../guide/parts/cross-framework-banner.md-->

<div class="demo-page-wrapper">
  <div class="demo-container">


  <Grid />

  <!--@include: ../../guide/parts/fake-data-banner.md-->

  </div>
</div>

<br /><br />

<ShowoffBanner />
