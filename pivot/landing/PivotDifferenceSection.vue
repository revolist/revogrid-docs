<template>
  <section class="section">
    <div class="section-label">Why it's different</div>
    <h2>Traditional pivot tools<br /><em>break at the edges</em></h2>
    <div class="diff-grid">
      <div class="diff-card typical">
        <div class="diff-label">The typical approach</div>
        <ul>
          <li v-for="item in TYPICAL" :key="item"><span>x</span>{{ item }}</li>
        </ul>
      </div>
      <div class="diff-card revo">
        <div class="diff-label">RevoGrid Pivot</div>
        <ul>
          <li v-for="item in REVO" :key="item.title"><span>✓</span><strong>{{ item.title }}</strong> {{ item.text }}</li>
        </ul>
        <div class="diff-note">Pivot is a plugin. RevoGrid is the foundation.</div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { REVO, TYPICAL } from './pivotLandingData'
</script>
