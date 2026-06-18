<template>
  <section class="hero">
    <div class="container hero-inner">
      <div class="hero-copy">
        <div class="eyebrow fade-up">
          <span class="eyebrow-dot"></span>
          {{ hero.eyebrow }}
        </div>
        <h1 class="hero-title fade-up-2">
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

      <ClientOnly v-if="preview.enabled">
        <EventSchedulerPreview v-if="preview.kind === 'eventScheduler'" class="fade-up-3" />
        <GanttPreviewGrid v-else class="fade-up-3" :preview="preview" :is-dark="isDark" />
      </ClientOnly>
    </div>
  </section>
</template>

<script lang="ts" setup>
import ProDocButton from '../pro/ProDocButton.vue'
import EventSchedulerPreview from './EventSchedulerPreview.vue'
import GanttPreviewGrid from './GanttPreviewGrid.vue'
import type { GanttLandingPage } from './ganttLanding'

defineProps<{
  hero: GanttLandingPage['hero']
  preview: GanttLandingPage['preview']
  isDark: boolean
  resolveLink: (href: string) => string
}>()
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 48px;

  @media (max-width: 768px) {
    padding: 0 24px;
  }
}

.hero {
  position: relative;
  padding: 112px 0 88px;

  @media (max-width: 620px) {
    padding-top: 76px;
  }
}

.hero .container {
  max-width: 1400px;
}

.hero-inner {
  display: grid;
  grid-template-columns: minmax(400px, 0.85fr) minmax(720px, 1.65fr);
  gap: 36px;
  align-items: center;

  @media (max-width: 1160px) {
    grid-template-columns: 1fr;
  }
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 13px;
  margin-bottom: 22px;
  border: 1px solid var(--gantt-accent-border);
  border-radius: 999px;
  color: var(--gantt-accent);
  background: var(--gantt-soft);
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
  background: var(--gantt-accent);
}

.hero-title {
  max-width: 680px;
  margin: 0 0 22px;
  font-size: clamp(40px, 5.2vw, 68px);
  line-height: 1.04;
  letter-spacing: -2px;
}

.hero-sub {
  max-width: 600px;
  margin: 0 0 32px;
  color: var(--vp-c-text-2);
  font-size: 17px;
  line-height: 1.75;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 26px;

  span {
    padding: 7px 11px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    color: var(--vp-c-text-2);
    background: var(--vp-c-bg-soft);
    font-size: 12px;
    font-weight: 600;
  }
}

</style>
