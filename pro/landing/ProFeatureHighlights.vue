<template>
  <section id="features" class="section">
    <div class="pro-container">
      <div class="section-head">
        <div class="section-tag">- {{ page.features.tag }}</div>
        <h2>
          {{ page.features.title.prefix }}
          <em>{{ page.features.title.highlight }}</em>
        </h2>
        <p class="section-sub">{{ page.features.subtitle }}</p>
      </div>

      <div class="features">
        <article
          v-for="(feature, index) in page.features.items"
          :key="feature.type"
          class="feature reveal"
          :class="{ wide: feature.wide }"
        >
          <div class="feature-head">
            <div class="left">
              <div class="feature-num">{{ String(index + 1).padStart(2, '0') }} / {{ feature.tier }}</div>
              <h3><em>{{ feature.title }}</em> - {{ feature.titleSuffix }}</h3>
              <p class="feature-desc">{{ feature.description }}</p>
            </div>
            <div class="feature-saved">
              <div class="label">Saves</div>
              <div class="value"><em>{{ feature.saves }}</em> {{ feature.unit }}</div>
              <div class="unit">{{ feature.savesAgainst }}</div>
            </div>
          </div>
          <div class="feature-body">
            <PivotMockup v-if="feature.type === 'pivot'" />
            <GanttMockup v-else-if="feature.type === 'gantt'" />
            <SheetMockup v-else-if="feature.type === 'sheet'" />
            <TreeMockup v-else-if="feature.type === 'tree'" />
            <AuditMockup v-else />
          </div>
          <div class="feature-foot">
            <div class="replaces">Replaces - <b>{{ feature.replaces }}</b></div>
            <a :href="feature.demoUrl" class="link">{{ feature.demoLabel }} -&gt;</a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { AuditMockup, GanttMockup, PivotMockup, SheetMockup, TreeMockup } from './proLandingMockups'

defineProps<{
  page: Record<string, any>
}>()
</script>
