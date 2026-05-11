<template>
  <div class="pro-page">

    <!-- Hero -->
    <section class="pro-hero">
      <div class="hero-glow" aria-hidden="true"></div>
      <div class="container">
        <div class="pro-badge fade-up">
          <span class="pro-badge-dot"></span>
          {{ pageText.hero.badge }}
        </div>
        <h1 class="hero-title fade-up-2">
          {{ pageText.hero.title.main }}<br />
          <span class="hero-grad">{{ pageText.hero.title.highlight }}</span>
        </h1>
        <p class="hero-sub fade-up-3">{{ pageText.hero.subtitle }}</p>
        <div class="hero-ctas fade-up-4">
          <a :href="pageText.hero.actions.primary.href" class="btn-pro">
            {{ pageText.hero.actions.primary.label }}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a :href="pageText.hero.actions.secondary.href" class="btn-ghost">{{ pageText.hero.actions.secondary.label }}</a>
        </div>
        <div class="hero-stats fade-up-4">
          <div v-for="s in pageText.hero.stats" :key="s.label" class="hero-stat">
            <div class="hero-stat-label">{{ s.label }}</div>
            <div class="hero-stat-sub">{{ s.sub }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="features-section" :id="pageText.features.id">
      <div class="container">
        <div class="eyebrow">{{ pageText.features.eyebrow }}</div>
        <h2 class="section-title">{{ pageText.features.title.main }}<br />{{ pageText.features.title.highlight }}</h2>
        <p class="section-sub">
          {{ PRO_FEATURE_COUNT }} {{ pageText.features.description.prefix }}
          {{ PRO_CATEGORIES.length }} {{ pageText.features.description.suffix }}
        </p>

        <div class="feature-grid">
          <div
            v-for="cat in PRO_CATEGORIES"
            :key="cat.label"
            class="feature-card"
          >
            <div class="fc-header">
              <div class="fc-icon">{{ cat.icon }}</div>
              <div class="fc-label">{{ cat.label }}</div>
            </div>
            <div class="fc-features">
              <div
                v-for="f in cat.features"
                :key="f.title"
                class="fc-feat"
              >
                <span class="fc-check">✓</span>
                <a
                  class="fc-feat-title"
                  :href="f.href"
                  :target="isExternalLink(f.href) ? '_blank' : undefined"
                  :rel="isExternalLink(f.href) ? 'noopener' : undefined"
                >
                  {{ f.title }}
                </a>
                <span v-if="f.beta" class="fc-beta">{{ pageText.features.betaLabel }}</span>
                <button
                  v-if="f.videoUrl"
                  type="button"
                  class="fc-video"
                  :title="pageText.features.videoButtonTitle"
                  :aria-label="`${pageText.features.videoButtonAria.prefix} ${f.title} ${pageText.features.videoButtonAria.suffix}`"
                  @click="openVideo(f.videoUrl)"
                >
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M5.25 4.25v5.5L9.75 7 5.25 4.25Z" fill="currentColor"/>
                    <rect x="1.5" y="2.5" width="11" height="9" rx="2" stroke="currentColor" stroke-width="1.4"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="features-link-row">
          <a :href="pageText.features.link.href" class="features-link">
            {{ pageText.features.link.label }}
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="cta-glow" aria-hidden="true"></div>
      <h2 class="cta-title">{{ pageText.cta.title.main }}<br />{{ pageText.cta.title.highlight }}</h2>
      <p class="cta-sub">{{ pageText.cta.subtitle }}</p>
      <div class="cta-btns">
        <a :href="pageText.cta.actions.primary.href" class="btn-pro">
          {{ pageText.cta.actions.primary.label }}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <a :href="pageText.cta.actions.secondary.href" class="btn-ghost">{{ pageText.cta.actions.secondary.label }}</a>
      </div>
      <div class="cta-note">{{ pageText.cta.note }}</div>
    </section>

    <div v-if="activeVideoUrl" class="video-modal" role="dialog" aria-modal="true" :aria-label="pageText.modal.ariaLabel" @click.self="closeVideo">
      <div class="video-modal-panel">
        <button type="button" class="video-modal-close" :aria-label="pageText.modal.closeLabel" @click="closeVideo">×</button>
        <video
          class="video-modal-player"
          :src="activeVideoUrl"
          controls
          playsinline
          autoplay
        ></video>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import { featuresPro } from './features.pro'

type ProFeature = (typeof featuresPro)[number]

const { frontmatter } = useData()
const pageText = computed(() => frontmatter.value.proPage)

const featureTableAnchor = (title: string) =>
  `/pro/feature-table#${encodeURIComponent(title.replace(' ', '-'))}`

const featureHref = (feature: ProFeature) =>
  feature.demoUrl || feature.link || feature.sponsor || featureTableAnchor(feature.title)

const isExternalLink = (href: string) => /^https?:\/\//.test(href)

const PRO_CATEGORIES = computed(() => Object.values(
  featuresPro.reduce((groups, feature) => {
    const label = feature.group || pageText.value.features.defaultGroupLabel

    if (!groups[label]) {
      groups[label] = {
        label,
        icon: pageText.value.features.groupIcons?.[label] || pageText.value.features.defaultGroupIcon,
        features: [],
      }
    }

    groups[label].features.push({
      title: feature.title,
      href: featureHref(feature),
      videoUrl: feature.videoUrl,
      beta: feature.beta,
    })

    return groups
  }, {} as Record<string, {
    label: string
    icon: string
    features: Array<{
      title: string
      href: string
      videoUrl?: string
      beta?: boolean
    }>
  }>)
))

const PRO_FEATURE_COUNT = featuresPro.length
const activeVideoUrl = ref('')

function openVideo(videoUrl: string) {
  activeVideoUrl.value = videoUrl
}

function closeVideo() {
  activeVideoUrl.value = ''
}

</script>

<style lang="scss" scoped>
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.fade-up   { animation: fadeUp 0.6s ease both; }
.fade-up-2 { animation: fadeUp 0.6s 0.1s ease both; }
.fade-up-3 { animation: fadeUp 0.6s 0.2s ease both; }
.fade-up-4 { animation: fadeUp 0.6s 0.3s ease both; }

.pro-page {
  --pro: var(--vp-c-brand-1);
  --pro-soft: var(--vp-c-brand-soft);
  --pro-2: var(--vp-c-brand-2);
  --green: oklch(0.72 0.18 155);
}

:global(.dark) .pro-page {
  --green: oklch(0.72 0.18 155);
}

:global(.pro-page-doc .VPDoc) {
  padding-top: 0;
}

.container {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 48px;

  @media (max-width: 768px) {
    padding: 0 24px;
  }
}

/* ── Hero ─────────────────────────────────────────────────── */
.pro-hero {
  padding: 100px 0 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-glow {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 900px;
  height: 500px;
  background: radial-gradient(ellipse at 50% 30%, var(--pro-soft) 0%, transparent 70%);
  pointer-events: none;
}

.pro-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--pro-soft);
  border: 1px solid var(--pro-2);
  color: var(--pro);
  font-size: 11px;
  font-weight: 600;
  font-family: var(--vp-font-family-mono);
  padding: 5px 14px;
  border-radius: 100px;
  margin-bottom: 28px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.pro-badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--pro);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
}

.hero-title {
  font-size: clamp(36px, 5.5vw, 68px);
  font-weight: 700;
  letter-spacing: -2.5px;
  line-height: 1.06;
  color: var(--vp-c-text-1);
  margin-bottom: 22px;
}

.hero-grad {
  background: linear-gradient(90deg, var(--vp-c-brand-3), var(--vp-c-brand-1));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-sub {
  font-size: 18px;
  color: var(--vp-c-text-2);
  max-width: 560px;
  margin: 0 auto 40px;
  line-height: 1.75;
}

.hero-ctas {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

.btn-pro {
  background: var(--vp-c-brand-3);
  color: #fff;
  border: none;
  padding: 13px 26px;
  border-radius: 9px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-2px);
  }
}

.btn-ghost {
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
  padding: 13px 26px;
  border-radius: 9px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: var(--vp-c-bg-soft);
    border-color: var(--vp-c-brand-2);
  }
}

.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.hero-stat {
  text-align: center;
}

.hero-stat-label {
  font-size: 15px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  letter-spacing: -0.3px;
}

.hero-stat-sub {
  font-size: 11px;
  color: var(--vp-c-text-3);
  font-family: var(--vp-font-family-mono);
  margin-top: 2px;
}

/* ── Features ─────────────────────────────────────────────── */
.features-section {
  padding: 96px 0;
  border-top: 1px solid var(--vp-c-divider);
}

.eyebrow {
  font-size: 11px;
  font-family: var(--vp-font-family-mono);
  font-weight: 600;
  color: var(--vp-c-brand-1);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 14px;
}

.section-title {
  font-size: clamp(28px, 3vw, 42px);
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1.1;
  color: var(--vp-c-text-1);
  margin-bottom: 16px;
}

.section-sub {
  font-size: 16px;
  color: var(--vp-c-text-2);
  max-width: 520px;
  line-height: 1.75;
  margin-bottom: 56px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

.feature-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 24px 22px;
  transition: border-color 0.2s, transform 0.2s;

  &:hover {
    border-color: var(--vp-c-brand-2);
    transform: translateY(-3px);
  }
}

.fc-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

.fc-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: var(--vp-c-brand-soft);
  border: 1px solid var(--vp-c-brand-2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
}

.fc-label {
  font-size: 14px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  letter-spacing: -0.2px;
}

.fc-features {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.fc-feat {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 13px;
  color: var(--vp-c-text-2);
  border-radius: 6px;
}

.fc-check {
  color: var(--vp-c-brand-1);
  font-size: 12px;
  flex-shrink: 0;
  margin-top: 1px;
}

.fc-feat-title {
  min-width: 0;
  line-height: 1.45;
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: var(--vp-c-brand-1);
  }
}

.fc-beta {
  color: var(--vp-c-warning-1);
  border: 1px solid var(--vp-c-warning-2);
  border-radius: 4px;
  padding: 0 4px;
  font-family: var(--vp-font-family-mono);
  font-size: 9px;
  font-weight: 700;
  line-height: 14px;
  text-transform: uppercase;
}

.fc-video {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--vp-c-brand-1);
  background: transparent;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  flex-shrink: 0;
  margin-top: 2px;
  padding: 0;
  transition: color 0.2s, transform 0.2s;

  &:hover {
    color: var(--vp-c-brand-2);
    transform: scale(1.08);
  }
}

.video-modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(8px);
}

.video-modal-panel {
  position: relative;
  width: min(920px, 100%);
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
  overflow: hidden;
}

.video-modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  width: 32px;
  height: 32px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  color: #fff;
  background: rgba(0, 0, 0, 0.58);
  cursor: pointer;
  font-size: 22px;
  line-height: 28px;
}

.video-modal-player {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #000;
}

.features-link-row {
  text-align: center;
  margin-top: 40px;
}

.features-link {
  font-size: 13px;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
  font-family: var(--vp-font-family-mono);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.75;
  }
}

/* ── CTA ──────────────────────────────────────────────────── */
.cta-section {
  padding: 96px 48px;
  text-align: center;
  position: relative;
  overflow: hidden;
  border-top: 1px solid var(--vp-c-divider);

  @media (max-width: 768px) {
    padding: 64px 24px;
  }
}

.cta-glow {
  position: absolute;
  top: -80px;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 400px;
  background: radial-gradient(ellipse, var(--vp-c-brand-soft) 0%, transparent 70%);
  pointer-events: none;
}

.cta-title {
  font-size: clamp(28px, 3.5vw, 48px);
  font-weight: 700;
  letter-spacing: -1.5px;
  color: var(--vp-c-text-1);
  margin-bottom: 14px;
  line-height: 1.1;
  position: relative;
}

.cta-sub {
  font-size: 17px;
  color: var(--vp-c-text-2);
  margin-bottom: 36px;
  max-width: 460px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
  position: relative;
}

.cta-btns {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
}

.cta-note {
  font-size: 12px;
  color: var(--vp-c-text-3);
  font-family: var(--vp-font-family-mono);
  margin-top: 20px;
  position: relative;
}

.footer-links-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 24px;
  position: relative;

  a {
    font-size: 13px;
    color: var(--vp-c-text-3);
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: var(--vp-c-text-2);
    }
  }

  .sep {
    color: var(--vp-c-divider);
    font-size: 13px;
  }
}
</style>
