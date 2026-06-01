<template>
  <section class="hero">
    <div class="pro-container hero-grid">
      <div class="hero-copy">
        <span class="eyebrow"><span class="dot"></span>{{ page.hero.badge }}</span>
        <h1>
          {{ page.hero.title.prefix }}
          <em>{{ page.hero.title.highlight }}</em>,
          {{ page.hero.title.suffix }}
        </h1>
        <p class="lead">{{ page.hero.subtitle }}<br>{{ page.hero.subtitleNote }}</p>
        <div class="hero-cta">
          <a :href="page.hero.actions.primary.href" class="pro-btn pro-btn-primary pro-btn-lg">
            {{ page.hero.actions.primary.label }} <span>{{ page.hero.actions.primary.detail }}</span>
          </a>
          <button class="pro-btn pro-btn-ghost pro-btn-lg" @click="openDemo">
            {{ page.hero.actions.secondary.label }}
            <span aria-hidden="true">▶</span>
          </button>
        </div>
        <div class="hero-meta">
          <span v-for="item in page.hero.meta" :key="item"><span class="check">✓</span>{{ item }}</span>
        </div>
      </div>

      <div class="showcase" aria-label="RevoGrid Pro data grid preview">
        <img src="/img/pro-demo.png" alt="RevoGrid Pro demo" class="pro-demo-img" />
      </div>
    </div>

    <div v-if="demoOpen" class="demo-modal" role="dialog" aria-modal="true">
      <div class="demo-modal-overlay" @click="closeDemo" />
      <div class="demo-modal-box">
        <button class="demo-modal-close" aria-label="Close" @click="closeDemo">✕</button>
        <div class="demo-modal-video">
          <video
            ref="videoEl"
            :key="currentDemo.src"
            :src="currentDemo.src"
            class="demo-modal-vid"
            autoplay
            muted
            playsinline
            @ended="nextDemo"
            @timeupdate="onTimeUpdate"
          />
          <div class="demo-modal-progress">
            <div class="demo-modal-progress-bar" :style="{ width: progressPct + '%' }" />
          </div>
        </div>
        <div class="demo-modal-tabs">
          <button
            v-for="(demo, i) in demos"
            :key="demo.src"
            class="demo-tab"
            :class="{ active: i === currentIndex }"
            @click="selectDemo(i)"
          >
            <span class="demo-tab-dot" />
            {{ demo.label }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { nextTick, onUnmounted, ref, watch } from 'vue'

defineProps<{
  page: Record<string, any>
}>()

const demos = [
  { src: '/video/pivot.mp4', label: 'Advanced Reporting' },
  { src: '/video/demo-color.mp4', label: 'Data Visualization' },
  { src: '/video/spreadhsheet.mp4', label: 'Spreadsheet' },
  { src: '/video/al-demo.mp4', label: 'Audit History' },
]

const demoOpen = ref(false)
const currentIndex = ref(0)
const videoEl = ref<HTMLVideoElement | null>(null)
const progressPct = ref(0)

const currentDemo = ref(demos[0])

function openDemo() {
  currentIndex.value = 0
  currentDemo.value = demos[0]
  progressPct.value = 0
  demoOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeDemo() {
  demoOpen.value = false
  document.body.style.overflow = ''
  progressPct.value = 0
}

function selectDemo(i: number) {
  currentIndex.value = i
  currentDemo.value = demos[i]
  progressPct.value = 0
}

function nextDemo() {
  const next = (currentIndex.value + 1) % demos.length
  selectDemo(next)
}

function onTimeUpdate() {
  const v = videoEl.value
  if (!v || !v.duration) return
  progressPct.value = (v.currentTime / v.duration) * 100
}

watch(currentDemo, async () => {
  progressPct.value = 0
  await nextTick()
  videoEl.value?.play().catch(() => {})
})

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') closeDemo()
}

document.addEventListener('keydown', onKeydown)
onUnmounted(() => document.removeEventListener('keydown', onKeydown))
</script>

<style scoped>
.pro-demo-img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: inherit;
  margin: 0;
}

.demo-modal {
  position: fixed;
  inset: 0;
  z-index: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.demo-modal-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.82);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.demo-modal-box {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1032px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  background: #0d0d12;
  box-shadow: 0 48px 120px -24px rgba(0, 0, 0, 0.8);
  animation: demoIn 0.24s ease;
}

@keyframes demoIn {
  from { opacity: 0; transform: scale(0.96) translateY(12px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}

.demo-modal-close {
  position: absolute;
  top: 14px;
  right: 16px;
  z-index: 2;
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s;
}

.demo-modal-close:hover {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}

.demo-modal-video {
  position: relative;
  height: 528px;
  background: #000;
  overflow: hidden;
}

.demo-modal-vid {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.demo-modal-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: rgba(255, 255, 255, 0.08);
}

.demo-modal-progress-bar {
  height: 100%;
  background: var(--accent, #7c6af7);
  transition: width 0.25s linear;
}

.demo-modal-tabs {
  display: flex;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}

.demo-tab {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 12px;
  background: transparent;
  border: none;
  border-right: 1px solid rgba(255, 255, 255, 0.07);
  color: rgba(255, 255, 255, 0.45);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
}

.demo-tab:last-child {
  border-right: none;
}

.demo-tab:hover {
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.8);
}

.demo-tab.active {
  background: rgba(124, 106, 247, 0.08);
  color: #fff;
}

.demo-tab-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transition: background 0.15s;
  flex-shrink: 0;
}

.demo-tab.active .demo-tab-dot {
  background: var(--accent, #7c6af7);
}
</style>
