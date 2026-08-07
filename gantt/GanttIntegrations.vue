<template>
  <section :id="integrations.id" class="integrations">
    <div class="container">
      <div class="section-kicker center">{{ integrations.kicker }}</div>
      <h2 class="section-title center">{{ integrations.title }}</h2>
      <p class="section-sub center">
        {{ integrations.description }}
      </p>
      <div class="integration-grid">
        <component
          :is="integration.href ? 'a' : 'div'"
          v-for="integration in integrations.items"
          :key="integration.name"
          :href="integration.href ? resolveLink(integration.href) : undefined"
          class="integration-card"
        >
          <span
            class="integration-icon"
            :class="{ 'integration-icon--image': integration.iconSrc }"
          >
            <img
              v-if="integration.iconSrc"
              :src="resolveLink(integration.iconSrc)"
              alt=""
              aria-hidden="true"
            >
            <template v-else>{{ integration.icon }}</template>
          </span>
          <strong>{{ integration.name }}</strong>
          <small>{{ integration.badge }}</small>
        </component>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { GanttLandingPage } from './ganttLanding'

defineProps<{
  integrations: GanttLandingPage['integrations']
  resolveLink: (href: string) => string
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
  padding: 96px 0;
  text-align: center;
}

.section-kicker {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--rg-font-green);
  font-family: var(--vp-font-family-mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.section-title {
  max-width: 660px;
  margin: 12px 0 14px;
  color: var(--rg-text);
  font-size: clamp(34px, 4.2vw, 56px);
  font-weight: 400;
  line-height: 1.08;
  letter-spacing: -0.01em;
}

.section-sub {
  max-width: 560px;
  margin: 0 0 48px;
  color: var(--rg-text-2);
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
  border: 1px solid var(--rg-border);
  border-radius: 16px;
  background: var(--rg-bg-2);
  text-align: center;
  text-decoration: none;
  transition: transform 0.18s ease, border-color 0.18s ease;

  &[href]:hover {
    border-color: var(--rg-border-hover);
    transform: translateY(-2px);
  }

  strong {
    color: var(--rg-text);
    font-size: 14px;
  }

  small {
    color: var(--rg-text-3);
    font-family: var(--vp-font-family-mono);
  }
}

.integration-icon {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  color: var(--rg-font-green);
  background: var(--rg-green-bg);
  font-family: var(--vp-font-family-mono);
  font-size: 12px;
  font-weight: 900;

  &--image {
    background: transparent;
  }

  img {
    display: block;
    width: 26px;
    height: 26px;
    object-fit: contain;
  }
}
</style>
