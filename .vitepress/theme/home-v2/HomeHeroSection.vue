<template>
  <section class="rg-hero">
    <div class="rg-container rg-hero-grid">
      <div class="rg-hero-copy">
        <div class="rg-badge">
          <span class="rg-badge-dot"></span>
          {{ hero?.eyebrow }}
        </div>
        <h1 class="rg-hero-title" v-html="heroTitle"></h1>
        <p class="rg-hero-sub" v-html="heroTagline"></p>
        <div class="rg-actions">
          <a class="rg-btn" :href="linkOf(hero?.primaryAction?.link)" :target="hero?.primaryAction?.target" :rel="hero?.primaryAction?.rel" :data-router-ignore="hero?.primaryAction?.ignore">
            <span class="rg-play" aria-hidden="true"></span>
            {{ hero?.primaryAction?.text }}
          </a>
          <a class="rg-btn rg-btn-secondary" :href="linkOf(hero?.secondaryAction?.link)" :target="hero?.secondaryAction?.target" :rel="hero?.secondaryAction?.rel" :data-router-ignore="hero?.secondaryAction?.ignore">
            {{ hero?.secondaryAction?.text }}
          </a>
          <a v-if="hero?.tertiaryAction" class="rg-btn rg-btn-secondary" :href="linkOf(hero.tertiaryAction.link)" :target="hero?.tertiaryAction?.target" :rel="hero?.tertiaryAction?.rel" :data-router-ignore="hero?.tertiaryAction?.ignore">
            {{ hero?.tertiaryAction?.text }}
            <HomeChevron />
          </a>
        </div>
        <div v-if="hero?.installCommand" class="rg-hero-install">
          <code>{{ hero.installCommand }}</code>
          <button type="button" @click="copyInstallCommand">
            {{ installCopied ? 'copied' : 'copy' }}
          </button>
        </div>
        <div v-else-if="hero?.frameworks?.length" class="rg-frameworks">
          <span class="rg-frameworks-label">{{ hero?.frameworksLabel ?? 'Works with' }}</span>
          <a
            v-for="fw in hero?.frameworks"
            :key="fw.name"
            class="rg-framework"
            :href="linkOf(fw.link)"
          >
            <span class="rg-framework-dot" :style="{ background: fw.color }"></span>
            {{ fw.name }}
          </a>
        </div>
      </div>

      <div class="rg-hero-visual">
        <HomeHero class="rg-datagridjs-preview" />
        <div class="rg-hero-proof-badges" aria-label="RevoGrid package popularity">
          <a
            class="rg-hero-proof-badge"
            href="https://www.jsdelivr.com/package/npm/@revolist/revogrid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://data.jsdelivr.com/v1/package/npm/@revolist/revogrid/badge"
              alt="jsDelivr downloads for @revolist/revogrid"
            >
          </a>
          <a
            class="rg-hero-proof-badge rg-hero-text-badge rg-hero-github-badge"
            href="https://github.com/revolist/revogrid"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="RevoGrid on GitHub, 3.4K stars"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M12 .7a11.5 11.5 0 0 0-3.64 22.42c.58.1.79-.25.79-.56v-2.24c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.74-1.55-2.57-.29-5.28-1.29-5.28-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18A10.98 10.98 0 0 1 12 6.12c.98 0 1.95.13 2.87.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.4-2.71 5.38-5.29 5.67.42.36.79 1.07.79 2.16v3.26c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
            </svg>
            <strong>GitHub</strong>
            <span>3.4K stars</span>
          </a>
          <a
            class="rg-hero-proof-badge rg-hero-text-badge rg-hero-feedback-badge"
            href="#feedback"
            aria-label="Read what RevoGrid users say"
          >
            <span class="rg-hero-feedback-mark" aria-hidden="true">“</span>
            <strong>Loved by builders</strong>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import HomeChevron from './HomeChevron.vue'
import HomeHero from '../home/HomeHero.vue'
import { emphasizeText, escapeHtml, linkProductMentions, type HomeV2Record, useHomeV2Links } from './homeV2Utils'

const props = defineProps<{
  hero?: HomeV2Record
}>()

const { linkOf } = useHomeV2Links()

const heroTitle = computed(() => emphasizeText(props.hero?.title, props.hero?.emphasis))

const performanceClaim = '60fps, 3x less memory.'
const heroTagline = computed(() => {
  const tagline = linkProductMentions(props.hero?.tagline, linkOf)
  const label = escapeHtml(performanceClaim)
  const href = escapeHtml(linkOf('/benchmarks'))

  return tagline.replace(label, `<a class="rg-product-link" href="${href}">${label}</a>`)
})
const installCopied = ref(false)

async function copyInstallCommand() {
  if (typeof window === 'undefined') return

  const command = String(props.hero?.installCommand ?? '')
  if (!command) return

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(command)
    } else {
      const textarea = document.createElement('textarea')
      textarea.value = command
      textarea.setAttribute('readonly', '')
      textarea.style.position = 'fixed'
      textarea.style.left = '-9999px'
      textarea.style.top = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }

    installCopied.value = true
    window.setTimeout(() => {
      installCopied.value = false
    }, 1400)
  } catch (error) {
    console.warn('Unable to copy install command', error)
  }
}
</script>

<style lang="scss" scoped>
.rg-hero-proof-badges {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 8px;
  min-height: 22px;
  margin: 14px 40px 0;
}

.rg-hero-proof-badge {
  display: inline-flex;
  align-items: center;
  height: 22px;
  color: var(--rg-text-2);
  text-decoration: none;
}

.rg-hero-proof-badge img {
  display: block;
  width: auto;
  height: 20px;
}

.rg-hero-text-badge {
  gap: 5px;
  padding: 0 7px 0 6px;
  border: 1px solid var(--rg-border);
  border-radius: 4px;
  background: var(--rg-bg-2);
  font-size: 11px;
  line-height: 20px;
}

.rg-hero-github-badge svg {
  width: 13px;
  height: 13px;
}

.rg-hero-text-badge strong {
  color: var(--rg-text);
  font-weight: 650;
}

.rg-hero-text-badge span {
  color: var(--rg-text-2);
}

.rg-hero-feedback-badge {
  border-color: color-mix(in srgb, var(--rg-green) 35%, var(--rg-border));
  background: var(--rg-green-bg);
}

.rg-hero-feedback-badge strong,
.rg-hero-feedback-mark {
  color: var(--rg-font-green);
}

.rg-hero-feedback-mark {
  font-family: Georgia, serif;
  font-size: 17px;
  font-weight: 700;
  line-height: 1;
  transform: translateY(1px);
}

.rg-hero-proof-badge:hover {
  opacity: 0.78;
}

.rg-hero-proof-badge:focus-visible {
  outline: 3px solid color-mix(in srgb, var(--rg-green) 35%, transparent);
  outline-offset: 3px;
}

@media (max-width: 640px) {
  .rg-hero-proof-badges {
    justify-content: center;
    margin: 12px 0 0;
  }
}
</style>
