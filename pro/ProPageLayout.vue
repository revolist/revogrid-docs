<template>
  <div class="pro-page">

    <!-- Hero -->
    <section class="pro-hero">
      <div class="hero-glow" aria-hidden="true"></div>
      <div class="container">
        <div class="pro-badge fade-up">
          <span class="pro-badge-dot"></span>
          RevoGrid Pro
        </div>
        <h1 class="hero-title fade-up-2">
          The grid that ships<br />
          <span class="hero-grad">production features.</span>
        </h1>
        <p class="hero-sub fade-up-3">
          Advanced column types, plugin API, pivot tables, and direct engineering support —
          built for teams that can't afford a slow data layer.
        </p>
        <div class="hero-ctas fade-up-4">
          <a href="/pro/prices" class="btn-pro">
            Get Pro
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a href="#features" class="btn-ghost">Explore features</a>
        </div>
        <div class="hero-stats fade-up-4">
          <div v-for="s in HERO_STATS" :key="s.label" class="hero-stat">
            <div class="hero-stat-label">{{ s.label }}</div>
            <div class="hero-stat-sub">{{ s.sub }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="features-section" id="features">
      <div class="container">
        <div class="eyebrow">Pro Features</div>
        <h2 class="section-title">Everything your app needs,<br />ready to ship.</h2>
        <p class="section-sub">{{ PRO_FEATURE_COUNT }} production-ready Pro features across {{ PRO_CATEGORIES.length }} categories — built on the same RevoGrid core, no migration required.</p>

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
              <a
                v-for="f in cat.features"
                :key="f.title"
                class="fc-feat"
                :href="f.href"
                :target="isExternalLink(f.href) ? '_blank' : undefined"
                :rel="isExternalLink(f.href) ? 'noopener' : undefined"
              >
                <span class="fc-check">✓</span>
                <span class="fc-feat-title">{{ f.title }}</span>
                <span v-if="f.beta" class="fc-beta">Beta</span>
                <span v-if="f.videoUrl" class="fc-video" title="Video available" aria-label="Video available">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M5.25 4.25v5.5L9.75 7 5.25 4.25Z" fill="currentColor"/>
                    <rect x="1.5" y="2.5" width="11" height="9" rx="2" stroke="currentColor" stroke-width="1.4"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div class="features-link-row">
          <a href="/pro/prices#feature-comparison" class="features-link">
            View full feature table
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Tier cards -->
    <section class="tiers-section">
      <div class="container">
        <div class="tiers-head">
          <div class="eyebrow">Choose your plan</div>
          <h2 class="section-title" style="margin-bottom: 0">Upgrade to Pro</h2>
        </div>
        <ProPricingCards variant="tiers" />
        <div class="tiers-enterprise">
          Teams of 10+?
          <a href="/pro/prices#enterprise">See enterprise options →</a>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="cta-glow" aria-hidden="true"></div>
      <h2 class="cta-title">Start with the MIT core.<br />Upgrade when you're ready.</h2>
      <p class="cta-sub">No credit card required for the open-source build. Pro licenses activate instantly.</p>
      <div class="cta-btns">
        <a href="/pro/prices" class="btn-pro">
          Get Pro
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <a href="/guide/" class="btn-ghost">Read the docs</a>
      </div>
      <div class="cta-note">Royalty-free · No deployment fee · Cancel anytime</div>
      <div class="footer-links-row">
        <a href="/pro/policies/privacy">Privacy Policy</a>
        <span class="sep">|</span>
        <a href="/pro/policies/terms">Terms of Service</a>
        <span class="sep">|</span>
        <a href="/pro/policies/license">License</a>
        <span class="sep">|</span>
        <a href="/pro/policies/security">Security Policy</a>
        <span class="sep">|</span>
        <a href="mailto:contact@revolist.eu">Contact us</a>
      </div>
    </section>

  </div>
</template>

<script lang="ts" setup>
import { featuresPro } from './features.pro'
import ProPricingCards from './ProPricingCards.vue'

const HERO_STATS = [
  { label: 'MIT core', sub: 'always free' },
  { label: 'No deploy fee', sub: 'ship anywhere' },
  { label: 'Royalty-free', sub: 'unlimited users' },
  { label: '+5 frameworks', sub: 'one API' },
]

type ProFeature = (typeof featuresPro)[number]

const GROUP_ICONS: Record<string, string> = {
  'Enterprise Tools': '🏢',
  'Advanced Data Structures': '🌲',
  'Data Entry & Automation': '⚡',
  'Layout & Styling': '🎨',
  'Data Visualization': '📊',
  'Data Filtering & Search': '🔍',
  'Data Quality & Validation': '✅',
  'Performance & Data Loading': '🚀',
  'Advanced Calculations': '🧮',
  'Data Management': '🗂️',
  'User Interaction': '🖱️',
  'Development & Integration': '🔌',
}

const featureTableAnchor = (title: string) =>
  `/pro/feature-table#${encodeURIComponent(title.replace(' ', '-'))}`

const featureHref = (feature: ProFeature) =>
  feature.link || feature.demoUrl || feature.sponsor || featureTableAnchor(feature.title)

const isExternalLink = (href: string) => /^https?:\/\//.test(href)

const PRO_CATEGORIES = Object.values(
  featuresPro.reduce((groups, feature) => {
    const label = feature.group || 'Other'

    if (!groups[label]) {
      groups[label] = {
        label,
        icon: GROUP_ICONS[label] || '•',
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
)

const PRO_FEATURE_COUNT = featuresPro.length

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
  text-decoration: none;
  border-radius: 6px;
  transition: color 0.2s, background 0.2s;

  &:hover {
    color: var(--vp-c-brand-1);
  }
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
  flex-shrink: 0;
  margin-top: 2px;
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

/* ── Tiers ────────────────────────────────────────────────── */
.tiers-section {
  padding: 80px 0;
  background: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-divider);
}

.tiers-head {
  text-align: center;
  margin-bottom: 48px;
}

.tiers-enterprise {
  text-align: center;
  margin-top: 28px;
  font-size: 13px;
  color: var(--vp-c-text-3);

  a {
    color: var(--vp-c-brand-1);
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
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
