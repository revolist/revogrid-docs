<template>
  <section class="section server-section">
    <div class="pro-container server-layout">
      <div class="server-copy">
        <div class="section-tag">- {{ page.serverSide.tag }}</div>
        <h2>
          {{ page.serverSide.title.prefix }}
          <em>{{ page.serverSide.title.highlight }}</em>
        </h2>
        <p class="section-sub">{{ page.serverSide.subtitle }}</p>

        <div class="server-pillars">
          <article v-for="pillar in page.serverSide.pillars" :key="pillar.label" class="server-pillar">
            <div class="server-pillar-value">{{ pillar.value }}</div>
            <h3>{{ pillar.label }}</h3>
            <p>{{ pillar.description }}</p>
          </article>
        </div>
      </div>

      <div class="server-panel reveal">
        <div class="server-panel-head">
          <span>{{ page.serverSide.flow.title }}</span>
        </div>

        <ol class="server-flow">
          <li v-for="step in page.serverSide.flow.steps" :key="step">
            <span>{{ step }}</span>
          </li>
        </ol>

        <div class="server-stats">
          <div v-for="stat in page.serverSide.stats" :key="stat.label" class="server-stat">
            <div class="value">{{ stat.value }}</div>
            <div class="label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  page: Record<string, any>
}>()
</script>
