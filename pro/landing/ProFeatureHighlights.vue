<template>
  <section id="features" class="section">
    <div class="pro-container">
      <div class="section-head">
        <div class="section-tag">- {{ page.features.tag }}</div>
        <h2>
          {{ page.features.title.prefix }}
          <em>{{ page.features.title.highlight }}</em>
        </h2>
        <p class="section-sub">{{ page.features.subtitle }}</p>
      </div>

      <div class="features">
        <article
          v-for="(feature, index) in page.features.items"
          :key="feature.type"
          class="feature reveal"
          :class="{ wide: feature.wide }"
        >
          <div class="feature-head">
            <div class="left">
              <div class="feature-num">{{ String(index + 1).padStart(2, '0') }} / {{ feature.tier }}</div>
              <h3><em>{{ feature.title }}</em> - {{ feature.titleSuffix }}</h3>
              <p class="feature-desc">{{ feature.description }}</p>
            </div>
            <div class="feature-saved">
              <div class="label">Saves</div>
              <div class="value"><em>{{ feature.saves }}</em> {{ feature.unit }}</div>
              <div class="unit">{{ feature.savesAgainst }}</div>
            </div>
          </div>
          <div class="feature-body">
            <img v-if="feature.type === 'pivot'" src="/img/pivot-feature.png" alt="Pivot" class="sheet-img" />
            <img v-else-if="feature.type === 'gantt'" src="/img/gantt-demo.png" alt="Gantt" class="sheet-img" />
            <img v-else-if="feature.type === 'sheet'" src="/img/spreadsheet.png" alt="Spreadsheet" class="sheet-img" />
            <img v-else-if="feature.type === 'tree'" src="/img/hierarchy-master.png" alt="Hierarchy" class="sheet-img" />
            <img v-else-if="feature.type === 'server'" src="/img/server-grouping.png" alt="Server grouping" class="sheet-img" />
            <img v-else src="/img/audit.png" alt="Audit" class="sheet-img" />
          </div>
          <div class="feature-foot">
            <div class="replaces">Replaces - <b>{{ feature.replaces }}</b></div>
            <button
              class="link fc-feat-title-link"
              :id="featurePreviewId(feature.title)"
              @click="openModal(feature)"
            >
              Watch preview →
            </button>
          </div>
        </article>
      </div>
    </div>

    <div v-if="activeFeature" class="feat-modal" role="dialog" aria-modal="true">
      <div class="feat-modal-overlay" @click="closeModal" />
      <div class="feat-modal-box">
        <button class="feat-modal-close" aria-label="Close" @click="closeModal">✕</button>
        <div class="feat-modal-video">
          <video
            v-if="activeVideoUrl"
            ref="modalVideoEl"
            :key="activeVideoUrl"
            :src="activeVideoUrl"
            class="feat-modal-vid"
            autoplay
            loop
            muted
            playsinline
            controls
          />
          <template v-else>
            <div v-if="activeThumb" class="feat-modal-thumb">
              <img :src="activeThumb" :alt="activeFeature.title" />
            </div>
            <div class="feat-modal-player">
              <div class="feat-modal-play-btn">▶</div>
              <div class="feat-modal-label">— {{ activeFeature.title.toLowerCase() }}</div>
            </div>
          </template>
        </div>
        <div class="feat-modal-info">
          <h4>{{ activeFeature.title }} - {{ activeFeature.titleSuffix }}</h4>
          <p>{{ activeFeature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'

const VIDEO_MAP: Record<string, string> = {
  sheet: '/video/spreadhsheet.mp4',
  tree: '/video/tree-data.mp4',
  pivot: '/video/pivot.mp4',
  audit: '/video/al-demo.mp4',
  gantt: '/video/gantt-demo.mp4',
  server: '/video/server-grouping.mp4',
}

const THUMB_MAP: Record<string, string> = {
  sheet: '/img/spreadsheet.png',
  tree: '/img/hierarchy-master.png',
  pivot: '/img/pivot-feature.png',
  audit: '/img/audit.png',
  gantt: '/img/gantt-demo.png',
  server: '/img/server-grouping.png',
}

defineProps<{
  page: Record<string, any>
}>()

const activeFeature = ref<Record<string, any> | null>(null)
const modalVideoEl = ref<HTMLVideoElement | null>(null)

const activeVideoUrl = computed(() =>
  activeFeature.value ? VIDEO_MAP[activeFeature.value.type] || '' : '',
)

const activeThumb = computed(() =>
  activeFeature.value ? THUMB_MAP[activeFeature.value.type] || '' : '',
)

const featureSlug = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const featurePreviewId = (title: string) => featureSlug(title)

watch(activeVideoUrl, async (url) => {
  if (!url) return
  await nextTick()
  modalVideoEl.value?.play().catch(() => {})
})

function openModal(feature: Record<string, any>) {
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
</script>
