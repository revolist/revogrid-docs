<template>
  <section id="catalog" class="section catalog-section">
    <div class="pro-container">
      <div class="section-head">
        <div class="section-tag">- {{ page.catalog.tag }}</div>
        <h2>
          {{ featureCount }} {{ page.catalog.title.countLabel }},
          <em>{{ catalogTitleHighlight }}</em><br />
          {{ page.catalog.title.ending }}
          <a href="#catalog" class="section-anchor" aria-label="Link to this section">#</a>
        </h2>
        <p class="section-sub">{{ page.catalog.subtitle }}</p>
      </div>

      <div class="feat-catalog">
        <div
          v-for="group in groups"
          :key="group.rawLabel"
          class="feat-section"
        >
          <div class="feat-section-head">
            <span class="feat-section-icon" :style="groupIconStyle(group.rawLabel)" v-html="group.icon" />
            <span class="feat-section-name">{{ group.label }}</span>
            <span class="feat-section-count">{{ group.features.length }} features</span>
          </div>
          <div class="feat-tiles">
            <div
              v-for="feature in group.features"
              :key="feature.title"
              class="feat-tile fc-feat-title-link"
              :class="{ ent: group.rawLabel === 'Pro Advanced Modules' }"
              :id="featurePreviewId(feature.title)"
              @click="openModal(feature)"
            >
              <div class="feat-tile-thumb" :class="groupThumbClass(group.rawLabel)">
                <img v-if="feature.thumbnail" :src="feature.thumbnail" :alt="feature.title" class="feat-tile-img" />
                <div class="feat-tile-play"><span class="feat-tile-play-btn">▶</span></div>
              </div>
              <div class="feat-tile-name">{{ feature.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="activeFeature" class="feat-modal" role="dialog" aria-modal="true" @keydown.esc="closeModal">
      <div class="feat-modal-overlay" @click="closeModal" />
      <div class="feat-modal-box">
        <button class="feat-modal-close" aria-label="Close" @click="closeModal">✕</button>
        <div class="feat-modal-video">
          <video
            v-if="activeFeature.videoUrl"
            ref="modalVideoEl"
            :key="activeFeature.videoUrl"
            :src="activeFeature.videoUrl"
            class="feat-modal-vid"
            autoplay
            loop
            muted
            playsinline
            controls
          />
          <template v-else>
            <div v-if="activeFeature.thumbnail" class="feat-modal-thumb">
              <img :src="activeFeature.thumbnail" :alt="activeFeature.title" />
            </div>
            <div class="feat-modal-player">
              <div class="feat-modal-play-btn" role="button" aria-label="Play demo video">▶</div>
              <div class="feat-modal-label">— {{ activeFeature.title.toLowerCase() }}</div>
            </div>
          </template>
        </div>
        <div class="feat-modal-info">
          <h4>{{ activeFeature.title }}</h4>
          <p>{{ activeFeature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'

type FeatureItem = {
  title: string
  description?: string
  thumbnail?: string
  videoUrl?: string
  demoUrl?: string
}

type GroupItem = {
  rawLabel: string
  label: string
  icon: string
  features: FeatureItem[]
}

const props = defineProps<{
  page: Record<string, any>
  featureCount: number
  categoryCount: number
  groups: GroupItem[]
}>()

const catalogTitleHighlight = computed(() =>
  String(props.page.catalog.title.highlight).replace(/\{categoryCount\}/g, String(props.categoryCount)),
)

const activeFeature = ref<FeatureItem | null>(null)
const modalVideoEl = ref<HTMLVideoElement | null>(null)

const featureSlug = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const featurePreviewId = (title: string) => featureSlug(title)

watch(activeFeature, async (feature) => {
  if (!feature?.videoUrl) return
  await nextTick()
  modalVideoEl.value?.play().catch(() => {})
})

function openModal(feature: FeatureItem) {
  activeFeature.value = feature
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  activeFeature.value = null
  document.body.style.overflow = ''
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') closeModal()
}

onMounted(() => document.addEventListener('keydown', onKeydown))
onUnmounted(() => document.removeEventListener('keydown', onKeydown))

const THUMB_MAP: Record<string, string> = {
  'Data Management': 'th-mgmt',
  'Advanced Data Structures': 'th-struct',
  'Grid Structure': 'th-grid',
  'Data Filtering & Search': 'th-filter',
  'Data Quality & Validation': 'th-valid',
  'Layout & Styling': 'th-style',
  'Data Visualization': 'th-viz',
  'Performance & Data Loading': 'th-perf',
  'Advanced Calculations': 'th-calc',
  'User Interaction': 'th-ux',
  'Data Entry & Automation': 'th-entry',
  'Development & Integration': 'th-dev',
  'Pro Advanced Modules': 'th-ent',
}

const ICON_STYLE_MAP: Record<string, string> = {
  'Data Management': 'background:rgba(96,165,250,.12);color:var(--info)',
  'Advanced Data Structures': 'background:rgba(45,212,191,.12);color:var(--teal)',
  'Grid Structure': 'background:rgba(96,165,250,.12);color:var(--info)',
  'Data Filtering & Search': 'background:rgba(167,139,250,.12);color:var(--violet)',
  'Data Quality & Validation': 'background:rgba(74,222,128,.12);color:var(--good)',
  'Layout & Styling': 'background:color-mix(in srgb, var(--accent-2) 12%, transparent);color:var(--accent-2)',
  'Data Visualization': 'background:rgba(251,113,133,.12);color:var(--rose)',
  'Performance & Data Loading': 'background:rgba(96,165,250,.12);color:var(--info)',
  'Advanced Calculations': 'background:color-mix(in srgb, var(--accent-2) 12%, transparent);color:var(--accent-2)',
  'User Interaction': 'background:rgba(167,139,250,.12);color:var(--violet)',
  'Data Entry & Automation': 'background:rgba(45,212,191,.12);color:var(--teal)',
  'Development & Integration': 'background:rgba(255,255,255,.06);color:var(--text-muted)',
  'Pro Advanced Modules': 'background:var(--accent-soft);color:var(--accent)',
}

function groupThumbClass(rawLabel: string): string {
  return THUMB_MAP[rawLabel] ?? 'th-mgmt'
}

function groupIconStyle(rawLabel: string): string {
  return ICON_STYLE_MAP[rawLabel] ?? ''
}
</script>

<style scoped lang="scss">
.feat-tile-thumb,
.feat-tile-name {
  pointer-events: none;
}
</style>