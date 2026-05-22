<template>
  <section class="pivot-hero">
    <div class="container hero-inner">
      <div class="hero-copy">
        <div class="eyebrow fade-up">
          <span class="eyebrow-dot"></span>
          {{ hero.eyebrow }}
        </div>
        <h1 class="hero-title fade-up-2">
          <span v-if="hero.titleHighlightParts.length" class="hero-title-highlight">
            <span v-for="part in hero.titleHighlightParts" :key="part" class="hero-title-part">{{ part }}</span>
          </span>
          {{ hero.titleSuffix }}
        </h1>
        <p class="hero-sub fade-up-3">
          {{ hero.description }}
        </p>
        <div class="hero-actions fade-up-4">
          <ProDocButton
            v-for="action in hero.actions"
            :key="action.label"
            :href="resolveLink(action.href)"
            :variant="action.variant"
            :target="action.target"
            :rel="action.rel"
            :arrow="action.arrow"
          >
            {{ action.label }}
          </ProDocButton>
        </div>
        <div v-if="hero.badges.length" class="hero-badges fade-up-4">
          <span v-for="badge in hero.badges" :key="badge">{{ badge }}</span>
        </div>
      </div>

      <div v-if="previewEnabled" class="fade-up-3">
        <PivotDemo />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import ProDocButton from '../../pro/ProDocButton.vue'
import PivotDemo from '../../pro/PivotDemo.vue'
import type { PivotLandingPage } from './types'

defineProps<{
  hero: PivotLandingPage['hero']
  previewEnabled: boolean
  resolveLink: (href: string) => string
}>()
</script>
