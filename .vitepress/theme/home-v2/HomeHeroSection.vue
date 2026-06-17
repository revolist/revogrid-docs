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
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import HomeChevron from './HomeChevron.vue'
import HomeHero from '../home/HomeHero.vue'
import { escapeHtml, linkProductMentions, type HomeV2Record, useHomeV2Links } from './homeV2Utils'

const props = defineProps<{
  hero?: HomeV2Record
}>()

const { linkOf } = useHomeV2Links()

const heroTitle = computed(() => {
  const title = props.hero?.title ?? ''
  const emphasis = props.hero?.emphasis
  if (!emphasis || !title.includes(emphasis)) return escapeHtml(title)
  return escapeHtml(title).replace(escapeHtml(emphasis), `<em>${escapeHtml(emphasis)}</em>`)
})

const heroTagline = computed(() => linkProductMentions(props.hero?.tagline, linkOf))
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
