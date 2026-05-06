<template>
  <section id="caps" class="section">
    <div class="section-label">Key Capabilities</div>
    <h2>Everything your analytics UI<br />needs, <span>out of the box</span></h2>
    <p class="section-copy">Built as a first-party plugin in RevoGrid Pro - full access to the render pipeline, event model, and column type system.</p>
    <div class="cap-grid">
      <article v-for="cap in CAPABILITIES" :key="cap.title" class="cap-card">
        <div class="cap-icon" :class="cap.tone">{{ cap.icon }}</div>
        <h3>{{ cap.title }}</h3>
        <p>{{ cap.text }}</p>
      </article>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { CAPABILITIES } from './pivotLandingData'
</script>
