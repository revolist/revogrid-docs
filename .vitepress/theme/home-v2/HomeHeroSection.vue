<template>
  <section
    class="rg-hero"
    aria-labelledby="rg-hero-title"
    @focusin="heroFocused = true"
    @focusout="onHeroFocusOut"
  >
    <div class="rg-container rg-hero-grid">
      <div class="rg-hero-copy">
        <div class="rg-hero-eyebrow">
          {{ hero?.eyebrow }}
        </div>
        <HomeHeroHeadline
          :title="hero?.title"
          :emphasis="hero?.emphasis"
          :rotating-term="hero?.rotatingTerm"
          :products="hero?.rotatingProducts"
          :paused="heroFocused"
        />
        <p class="rg-hero-sub" v-html="heroTagline"></p>
        <div class="rg-actions">
          <VPButton
            size="big"
            theme="brand"
            :href="linkOf(hero?.primaryAction?.link)"
            :target="hero?.primaryAction?.target"
            :rel="hero?.primaryAction?.rel"
            :data-router-ignore="hero?.primaryAction?.ignore"
          >
            {{ hero?.primaryAction?.text }}
          </VPButton>
          <VPButton
            size="big"
            theme="alt"
            :href="linkOf(hero?.secondaryAction?.link)"
            :target="hero?.secondaryAction?.target"
            :rel="hero?.secondaryAction?.rel"
            :data-router-ignore="hero?.secondaryAction?.ignore"
          >
            {{ hero?.secondaryAction?.text }}
          </VPButton>
          <VPButton
            v-if="hero?.tertiaryAction"
            size="big"
            theme="alt"
            :href="linkOf(hero.tertiaryAction.link)"
            :target="hero?.tertiaryAction?.target"
            :rel="hero?.tertiaryAction?.rel"
            :data-router-ignore="hero?.tertiaryAction?.ignore"
          >
            {{ hero?.tertiaryAction?.text }}
            <HomeChevron />
          </VPButton>
        </div>
        <div v-if="hero?.installCommand" class="rg-hero-install">
          <code>{{ hero.installCommand }}</code>
          <VPButton tag="button" theme="alt" type="button" @click="copyInstallCommand">
            {{ installCopied ? 'copied' : 'copy' }}
          </VPButton>
        </div>
        <div v-else-if="hero?.frameworks?.length" class="rg-frameworks">
          <span class="rg-frameworks-label">{{ hero?.frameworksLabel ?? 'Works with' }}</span>
          <a
            v-for="fw in hero?.frameworks"
            :key="fw.name"
            class="rg-framework"
            :href="linkOf(fw.link)"
          >
            <img v-if="fw.icon" :src="linkOf(fw.icon)" alt="" width="18" height="18" />
            {{ fw.name }}
          </a>
        </div>
      </div>

      <div class="rg-hero-preview">
        <div class="rg-hero-visual" :class="{ 'rg-hero-visual--film': hero?.film }">
          <video
            v-if="hero?.film"
            ref="film"
            class="rg-product-film"
            :src="filmSource"
            :poster="filmPoster"
            :aria-label="hero.film.label"
            :aria-description="hero.film.description"
            width="1920"
            height="628"
            muted
            loop
            playsinline
            autoplay
            preload="auto"
            @loadedmetadata="onFilmMetadata"
          >
            {{ hero.film.description }}
          </video>
          <HomeHero
            v-else-if="hero?.demoLabels && hero?.demoTabs?.length"
            :labels="hero.demoLabels"
            :tabs="hero.demoTabs"
          />
        </div>
        <HomeHeroProof />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, defineAsyncComponent, onMounted, ref, watch } from 'vue'
import { useData } from 'vitepress'
import { VPButton } from 'vitepress/theme'
import '@revolist/ui/styles.css'
import HomeChevron from './HomeChevron.vue'
import HomeHeroHeadline from './hero/HomeHeroHeadline.vue'
import HomeHeroProof from './hero/HomeHeroProof.vue'
import { escapeHtml, linkProductMentions, type HomeV2Record, useHomeV2Links } from './homeV2Utils'

const HomeHero = defineAsyncComponent(() => import('./hero/HomeHeroDemos.vue'))

const props = defineProps<{
  hero?: HomeV2Record
}>()

const { linkOf } = useHomeV2Links()

const { isDark } = useData()
const filmSource = computed(() =>
  linkOf(
    isDark.value && props.hero?.film?.darkSrc ? props.hero.film.darkSrc : props.hero?.film?.src,
  ),
)
const filmPoster = computed(() =>
  linkOf(
    isDark.value && props.hero?.film?.darkPoster
      ? props.hero.film.darkPoster
      : props.hero?.film?.poster,
  ),
)
const film = ref<HTMLVideoElement>()
let filmPosition = 0
watch(filmSource, () => {
  const video = film.value
  if (video?.readyState) filmPosition = video.currentTime
})
function onFilmMetadata() {
  const video = film.value
  if (!video) return
  video.currentTime = Math.min(filmPosition, Math.max(0, video.duration - 0.05))
  void video.play().catch(() => {})
}
onMounted(() => {
  // Explicit playback keeps native autoplay visibility heuristics from pausing the film.
  void film.value?.play().catch(() => {})
})

const heroFocused = ref(false)
function onHeroFocusOut(event: FocusEvent) {
  heroFocused.value =
    !!event.relatedTarget &&
    (event.currentTarget as HTMLElement).contains(event.relatedTarget as Node)
}

const performanceClaim = '60fps, 3x less memory.'
const heroTagline = computed(() => {
  const tagline = linkProductMentions(props.hero?.tagline, linkOf)
  const label = escapeHtml(performanceClaim)
  const href = escapeHtml(linkOf('/benchmarks'))

  return tagline.replace(label, `<a class="rg-product-link" href="${href}">${label}</a><br>`)
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
.rg-hero {
  padding: 56px 0 28px;
}

.rg-hero-grid {
  grid-template-columns: minmax(0, 1fr);
  gap: 36px;
}

.rg-hero-copy {
  width: 100%;
  margin-inline: auto;
  text-align: center;
}

.rg-hero-eyebrow {
  color: var(--vp-c-brand-1);
  font-size: 12px;
  font-weight: 650;
  letter-spacing: 1.8px;
  text-transform: uppercase;
}

.rg-hero-sub {
  max-width: 820px;
  margin: auto;
  color: var(--vp-c-text-2);
  font-size: 16px;
  line-height: 1.8;
  padding: 10px 0;
}

.rg-actions,
.rg-frameworks {
  justify-content: center;
}

.rg-actions {
  gap: 12px;
  margin: 16px 0;
}

.rg-actions :deep(.VPButton) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.rg-frameworks {
  margin-top: 0;
  gap: 8px 18px;
}

.rg-frameworks-label {
  display: none;
}

.rg-framework {
  border: 0;
  background: transparent;
  padding: 4px 0;
  color: var(--rg-text-2);
}

.rg-hero-preview {
  min-width: 0;
}

.rg-framework img {
  flex: 0 0 18px;
  object-fit: contain;
}
.rg-hero-visual {
  min-width: 0;
  padding: 14px 20px 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: transparent;
}
.rg-hero-visual--film {
  padding: 0;
  border-radius: 20px;
  overflow: hidden;
  background: var(--vp-c-bg);
}
.rg-product-film {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 480 / 157;
}
.rg-hero :deep(a:not(.rv-btn):not(.VPButton):focus-visible) {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 4px;
}

@media (min-width: 1600px) {
  .rg-hero {
    padding-top: 92px;
  }
}

@media (max-width: 640px) {
  .rg-hero {
    padding-top: 56px;
  }

  .rg-hero-sub {
    font-size: 16px;
  }
  .rg-actions {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
  }
  .rg-actions :deep(.VPButton) {
    min-height: 44px;
    padding-inline: 8px;
    font-size: 12px;
  }
  .rg-frameworks {
    gap: 8px;
  }
  .rg-framework {
    font-size: 11px;
  }
}
</style>
