<template>
  <section :id="integrations.id" class="integrations">
    <div class="container">
      <div class="section-kicker center">{{ integrations.kicker }}</div>
      <h2 class="section-title center">{{ integrations.title }}</h2>
      <p class="section-sub center">
        {{ integrations.description }}
      </p>
      <div class="integration-grid">
        <div v-for="integration in integrations.items" :key="integration.name" class="integration-card">
          <span class="integration-icon">{{ integration.icon }}</span>
          <strong>{{ integration.name }}</strong>
          <small>{{ integration.badge }}</small>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { GanttLandingPage } from './ganttLanding'

defineProps<{
  integrations: GanttLandingPage['integrations']
}>()
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 48px;

  @media (max-width: 768px) {
    padding: 0 24px;
  }
}

.integrations {
  padding: 92px 0;
  border-top: 1px solid var(--vp-c-divider);
}

.section-kicker {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--gantt-accent);
  font-family: var(--vp-font-family-mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.section-title {
  max-width: 660px;
  margin: 12px 0 14px;
  color: var(--vp-c-text-1);
  font-size: clamp(30px, 3.6vw, 46px);
  font-weight: 600;
  line-height: 1.08;
  letter-spacing: -1.4px;
}

.section-sub {
  max-width: 560px;
  margin: 0 0 48px;
  color: var(--vp-c-text-2);
  font-size: 16px;
  line-height: 1.7;
}

.center {
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}

.integration-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;

  @media (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.integration-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 24px 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  text-align: center;

  strong {
    color: var(--vp-c-text-1);
    font-size: 14px;
  }

  small {
    color: var(--vp-c-text-3);
    font-family: var(--vp-font-family-mono);
  }
}

.integration-icon {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  color: var(--gantt-accent);
  background: var(--gantt-soft);
  font-family: var(--vp-font-family-mono);
  font-size: 12px;
  font-weight: 900;
}
</style>
