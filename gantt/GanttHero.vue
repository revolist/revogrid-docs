<template>
  <section class="hero">
    <div class="container hero-inner">
      <div class="hero-copy">
        <div class="eyebrow fade-up">
          <span class="eyebrow-dot"></span>
          {{ hero.eyebrow }}
        </div>
        <h1 class="rg-hero-title fade-up-2">
          {{ hero.title }}
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

      <div v-if="preview.enabled && preview.kind === 'image' && heroImageSrc" class="hero-preview hero-image-wrap fade-up-3">
        <img
          class="hero-image"
          :src="heroImageSrc"
          :alt="heroImageAlt"
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
      </div>

      <ClientOnly v-else-if="preview.enabled">
        <EventSchedulerPreview v-if="preview.kind === 'eventScheduler'" class="hero-preview fade-up-3" />
        <KanbanPreviewGrid v-else-if="preview.kind === 'kanban'" class="hero-preview fade-up-3" :preview="preview" />
        <GanttPreviewGrid v-else class="hero-preview fade-up-3" :preview="preview" :is-dark="isDark" />
      </ClientOnly>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, defineAsyncComponent } from 'vue'
import ProDocButton from '../pro/ProDocButton.vue'
import type { GanttLandingPage } from './ganttLanding'

const EventSchedulerPreview = defineAsyncComponent(() => import('./EventSchedulerPreview.vue'))
const GanttPreviewGrid = defineAsyncComponent(() => import('./GanttPreviewGrid.vue'))
const KanbanPreviewGrid = defineAsyncComponent(() => import('./KanbanPreviewGrid.vue'))

const props = defineProps<{
  hero: GanttLandingPage['hero']
  preview: GanttLandingPage['preview']
  isDark: boolean
  resolveLink: (href: string) => string
}>()

const heroImageSrc = computed(() => {
  if (props.preview.kind !== 'image') return ''
  return props.isDark
    ? props.preview.darkSrc || props.preview.lightSrc || ''
    : props.preview.lightSrc || props.preview.darkSrc || ''
})

const heroImageAlt = computed(() => props.preview.alt || 'RevoGantt preview')
</script>

<style lang="scss" scoped>
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-up { animation: fadeUp 0.6s ease both; }
.fade-up-2 { animation: fadeUp 0.6s 0.08s ease both; }
.fade-up-3 { animation: fadeUp 0.6s 0.16s ease both; }
.fade-up-4 { animation: fadeUp 0.6s 0.24s ease both; }

.container {
  width: 100%;
  max-width: 1336px;
  margin: 0 auto;
  padding: 0 48px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 24px;
  }
}

.hero {
  position: relative;
  padding: 96px 0 0;
}


.hero-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
  text-align: center;
}

.hero-copy {
  width: 100%;
  max-width: 780px;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 13px;
  margin-bottom: 22px;
  border: 1px solid var(--gantt-accent-border);
  border-radius: 999px;
  color: var(--rg-font-green);
  background: var(--rg-green-bg);
  font-family: var(--vp-font-family-mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.eyebrow-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--rg-green);
  box-shadow: 0 0 8px var(--rg-green);
}

.rg-hero-title {
  max-width: 780px;
  font-size: clamp(38px, 4.5vw, 58px);
  line-height: 1.08;
  letter-spacing: -0.02em;
  margin: 0 0 20px;
  color: var(--rg-text);
  font-weight: 400;

  em {
    color: var(--rg-font-green);
    font-style: normal;
  }
}

.hero-sub {
  max-width: 620px;
  margin: 0 auto 32px;
  color: var(--rg-text-2);
  font-size: 17px;
  line-height: 1.75;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: center;
}

.hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-top: 26px;

  span {
    padding: 5px 11px;
    border: 1px solid var(--rg-border);
    border-radius: 8px;
    color: var(--rg-text-2);
    background: var(--rg-bg-2);
    font-size: 12px;
    line-height: 16px;
  }
}

.hero-preview {
  width: 100%;
}

.hero-image-wrap {
  overflow: hidden;
  border: 1px solid var(--gantt-border);
  border-radius: 16px;
  background: var(--gantt-panel);
  box-shadow: var(--pro-doc-shadow-lg);
}

.hero-image {
  display: block;
  width: 100%;
  height: auto;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .hero {
    padding-top: 64px;
  }

  .hero-inner {
    gap: 40px;
  }
}

</style>
