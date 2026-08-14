<template>
  <section id="feedback" class="rg-feedback rg-section-soft" aria-labelledby="rg-feedback-title">
    <div class="rg-container">
      <header class="rg-feedback-heading">
        <p class="rg-feedback-label">{{ section?.label }}</p>
        <h2 id="rg-feedback-title">{{ section?.title }}</h2>
        <p class="rg-feedback-description">{{ section?.description }}</p>
      </header>

      <div class="rg-feedback-cloud" role="list" aria-label="RevoGrid user feedback">
        <blockquote
          v-for="item in section?.items"
          :key="`${item.source}-${item.quote}`"
          :class="[
            'rg-feedback-card',
            `rg-feedback-card--${item.size ?? 'medium'}`,
            `rg-feedback-card--${item.tone ?? 'green'}`,
          ]"
          role="listitem"
        >
          <p>{{ item.quote }}</p>
          <footer>
            <cite>{{ item.attribution }}</cite>
            <a
              v-if="item.link"
              class="rg-feedback-source"
              :href="item.link"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`Read this ${item.source} feedback`"
            >
              {{ item.source }}
              <span aria-hidden="true">↗</span>
            </a>
            <span v-else class="rg-feedback-source">{{ item.source }}</span>
          </footer>
        </blockquote>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { HomeV2Record } from './homeV2Utils'

defineProps<{
  section?: HomeV2Record
}>()
</script>

<style lang="scss" scoped>
.rg-feedback {
  padding-block: clamp(80px, 9vw, 124px);
}

.rg-feedback-heading {
  max-width: 760px;
  margin: 0 auto clamp(36px, 5vw, 56px);
  text-align: center;
}

.rg-feedback-label {
  margin: 0 0 14px;
  color: var(--rg-font-green);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.rg-feedback-heading h2 {
  margin: 0;
  color: var(--rg-text);
  font-size: clamp(34px, 4vw, 52px);
  font-weight: 680;
  letter-spacing: -0.035em;
  line-height: 1.08;
}

.rg-feedback-description {
  max-width: 650px;
  margin: 18px auto 0;
  color: var(--rg-text-2);
  font-size: 17px;
  line-height: 1.6;
}

.rg-feedback-cloud {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-auto-flow: dense;
  gap: 16px;
}

.rg-feedback-card {
  --feedback-tint: var(--rg-green);
  grid-column: span 4;
  min-width: 0;
  min-height: 168px;
  margin: 0;
  padding: clamp(20px, 2.4vw, 28px);
  border: 1px solid color-mix(in srgb, var(--feedback-tint) 24%, var(--rg-border));
  border-radius: 20px;
  background:
    radial-gradient(circle at 100% 0%, color-mix(in srgb, var(--feedback-tint) 13%, transparent), transparent 44%),
    var(--rg-bg);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  box-shadow: 0 18px 50px color-mix(in srgb, var(--feedback-tint) 6%, transparent);
}

.rg-feedback-card--featured,
.rg-feedback-card--wide {
  grid-column: span 6;
}

.rg-feedback-card--compact {
  grid-column: span 3;
  min-height: 148px;
}

.rg-feedback-card--blue {
  --feedback-tint: #38bdf8;
}

.rg-feedback-card--violet {
  --feedback-tint: #a78bfa;
}

.rg-feedback-card--amber {
  --feedback-tint: #f59e0b;
}

.rg-feedback-card p {
  margin: 0;
  color: var(--rg-text);
  font-size: clamp(17px, 1.45vw, 21px);
  font-weight: 580;
  letter-spacing: -0.018em;
  line-height: 1.42;
}

.rg-feedback-card p::before {
  content: '“';
  color: var(--feedback-tint);
}

.rg-feedback-card p::after {
  content: '”';
  color: var(--feedback-tint);
}

.rg-feedback-card--featured p {
  font-size: clamp(21px, 2vw, 28px);
  line-height: 1.32;
}

.rg-feedback-card footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  color: var(--rg-text-2);
  font-size: 12px;
  line-height: 1.4;
}

.rg-feedback-card cite {
  color: var(--rg-text-2);
  font-style: normal;
  font-weight: 620;
}

.rg-feedback-source {
  flex: 0 0 auto;
  border: 1px solid color-mix(in srgb, var(--feedback-tint) 24%, var(--rg-border));
  border-radius: 999px;
  padding: 4px 9px;
  color: var(--rg-text-2);
  background: color-mix(in srgb, var(--feedback-tint) 7%, var(--rg-bg));
  font-size: 11px;
  font-weight: 650;
  text-decoration: none;
}

a.rg-feedback-source:hover {
  color: var(--rg-text);
  border-color: color-mix(in srgb, var(--feedback-tint) 48%, var(--rg-border));
}

a.rg-feedback-source:focus-visible {
  outline: 3px solid color-mix(in srgb, var(--feedback-tint) 35%, transparent);
  outline-offset: 3px;
}

@media (max-width: 960px) {
  .rg-feedback-cloud {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  .rg-feedback-card--featured,
  .rg-feedback-card--wide {
    grid-column: span 6;
  }

  .rg-feedback-card,
  .rg-feedback-card--compact {
    grid-column: span 3;
  }
}

@media (max-width: 640px) {
  .rg-feedback {
    padding-block: 72px;
  }

  .rg-feedback-heading {
    text-align: left;
  }

  .rg-feedback-description {
    margin-left: 0;
  }

  .rg-feedback-cloud {
    grid-template-columns: 1fr;
  }

  .rg-feedback-card,
  .rg-feedback-card--featured,
  .rg-feedback-card--wide,
  .rg-feedback-card--compact {
    grid-column: 1;
    min-height: auto;
  }
}
</style>
