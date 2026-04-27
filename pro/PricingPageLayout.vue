<template>
  <div class="pricing-page">
    <!-- Hero -->
    <section class="pricing-hero">
      <div class="hero-glow" aria-hidden="true"></div>
      <div class="container">
        <div class="eyebrow fade-up">Pricing</div>
        <h1 class="hero-title fade-up-2">
          Pay per developer.<br /><em>Ship to everyone.</em>
        </h1>
        <p class="hero-sub fade-up-3">
          No deployment fees. No runtime royalties. No per-seat charges for your end users.
          Simple per-developer annual pricing.
        </p>
        <div class="billing-badge-row fade-up-3">
          <div class="billing-badge">Annual billing</div>
        </div>
      </div>
    </section>

    <!-- Pricing cards -->
    <section class="cards-section">
      <div class="container">
        <div class="pricing-grid">
          <!-- Pro Light -->
          <div class="price-card">
            <div class="card-label subtle">Pro Light</div>
            <div class="card-name">Pro Light</div>
            <div class="card-tagline">For teams building production data apps that need advanced column types and export.</div>
            <div class="card-price-row">
              <span class="price-currency">$</span>
              <span class="price-num">{{ lightUsdYr }}</span>
              <span class="price-period">/dev/yr</span>
            </div>
            <div class="price-note">Billed annually · ~${{ Math.round(lightUsdYr / 12) }}/mo</div>
            <a :href="PRICES.light.link" class="card-cta ghost">Start Pro Light</a>
            <div class="card-divider"></div>
            <ul class="card-features">
              <li v-for="f in PRO_LIGHT_FEATURES" :key="f" class="card-feature">
                <span class="feat-icon check">✓</span>
                <span>{{ f }}</span>
              </li>
            </ul>
          </div>

          <!-- Pro Advanced -->
          <div class="price-card featured">
            <div class="card-label accent">Most Popular</div>
            <div class="card-name">Pro Advanced</div>
            <div class="card-tagline">For teams building complex, plugin-driven data platforms at scale.</div>
            <div class="card-price-row">
              <span class="price-currency">$</span>
              <span class="price-num">{{ advUsdYr }}</span>
              <span class="price-period">/dev/yr</span>
            </div>
            <div class="price-note">Billed annually · ~${{ Math.round(advUsdYr / 12) }}/mo</div>
            <a :href="PRICES.advanced.link" class="card-cta primary">Start Pro Advanced</a>
            <div class="card-divider"></div>
            <ul class="card-features">
              <li v-for="f in PRO_ADV_FEATURES" :key="f" class="card-feature">
                <span class="feat-icon check">✓</span>
                <span>{{ f }}</span>
              </li>
            </ul>
          </div>

          <!-- Enterprise -->
          <div class="price-card enterprise-tile">
            <div class="card-label purple">Enterprise</div>
            <div class="card-name">Enterprise</div>
            <div class="card-tagline">For large teams that need custom contracts, SLA support, and dedicated engineering.</div>
            <div class="card-price-row">
              <span class="price-num">&nbsp;</span>
            </div>
            <div class="price-note">&nbsp;</div>
            <a href="mailto:contact@revolist.eu" class="card-cta ghost-purple">Contact Sales</a>
            <div class="card-divider"></div>
            <ul class="card-features">
              <li v-for="f in ENTERPRISE_FEATURES" :key="f" class="card-feature">
                <span class="feat-icon ent">✓</span>
                <span>{{ f }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Open Source horizontal card -->
        <div class="oss-card">
          <div class="oss-left">
            <div class="oss-badge">Free forever</div>
            <div class="oss-title">Open Source</div>
            <div class="oss-desc">
              MIT-licensed. Free for individuals, teams, and commercial use. No credit card required.
            </div>
            <div class="oss-ctas">
              <a href="https://github.com/revolist/revogrid" class="oss-cta-btn" target="_blank" rel="noopener">Get started free</a>
            </div>
          </div>
          <div class="oss-features">
            <div v-for="f in FREE_FEATURES" :key="f" class="oss-feature">
              <span class="oss-check">✓</span>
              <span>{{ f }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature comparison table -->
    <section class="comparison-section">
      <div class="container">
        <h2 class="section-heading">Full feature comparison</h2>
        <div class="table-wrap">
          <table class="comp-table">
            <thead>
              <tr>
                <th class="feat-col">Feature</th>
                <th class="center-col">Free</th>
                <th class="center-col highlight-col">Pro Light</th>
                <th class="center-col">Pro Advanced</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="section in COMP_SECTIONS" :key="section.label">
                <tr class="category-row">
                  <td colspan="4">
                    <button
                      class="category-toggle"
                      type="button"
                      :aria-expanded="expandedSections[section.label]"
                      @click="toggleSection(section.label)"
                    >
                      <span class="expand-icon" aria-hidden="true">
                        {{ expandedSections[section.label] ? '▼' : '▶' }}
                      </span>
                      <span>{{ section.label }}</span>
                    </button>
                  </td>
                </tr>
                <template v-if="expandedSections[section.label]">
                  <tr
                    v-for="row in visibleRows(section)"
                    :key="`${section.label}-${row.name}`"
                    :class="{ 'collapsible-feature': row.collapsible }"
                  >
                    <td :class="['feature-name', `nesting-${row.nesting}`]">
                      <button
                        v-if="row.collapsible"
                        class="feature-expand"
                        type="button"
                        :aria-expanded="isFeatureExpanded(section.label, row.name)"
                        @click="toggleFeature(section.label, row.name)"
                      >
                        {{ isFeatureExpanded(section.label, row.name) ? '▼' : '▶' }}
                      </button>
                      <a v-if="row.link" :href="row.link">{{ row.name }}</a>
                      <template v-else>{{ row.name }}</template>
                      <span v-if="row.beta" class="beta-badge">Beta</span>

                      <span v-if="row.demoUrl || row.video" class="feature-actions">
                        <a
                          v-if="row.demoUrl"
                          class="demo-preview action-outline-btn"
                          :href="row.demoUrl"
                          target="_blank"
                          rel="noopener"
                          title="Interactive demo"
                        >
                          Demo
                        </a>
                        <button
                          class="video-preview"
                          :class="{ 'video-placeholder': !row.video }"
                          type="button"
                          :title="row.video ? 'Video preview' : undefined"
                          :disabled="!row.video"
                          :tabindex="row.video ? 0 : -1"
                          @click="row.video && openPreview(row.video)"
                        >
                          <VPImage
                            v-if="row.video"
                            style="width: 18px"
                            :image="{ src: 'video.svg' }"
                          />
                        </button>
                      </span>
                    </td>
                    <td class="center-col">
                      <span v-if="row.supported.includes('Basic')" class="check-yes">✓</span>
                      <span v-else class="check-no">—</span>
                    </td>
                    <td class="center-col highlight-col">
                      <span v-if="row.supported.includes('Pro Lite')" class="check-yes">✓</span>
                      <span v-else class="check-no">—</span>
                    </td>
                    <td class="center-col">
                      <span v-if="row.supported.includes('Pro Advanced')" class="check-yes">✓</span>
                      <span v-else class="check-no">—</span>
                    </td>
                  </tr>
                </template>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section">
      <div class="container">
        <h2 class="section-heading">Frequently asked questions</h2>
        <div class="faq-grid">
          <div v-for="faq in FAQS" :key="faq.q" class="faq-item">
            <div class="faq-q">{{ faq.q }}</div>
            <div class="faq-a" v-html="faq.a"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="cta-glow" aria-hidden="true"></div>
      <h2 class="cta-title">Start free. Upgrade when<br />you're ready.</h2>
      <p class="cta-sub">No credit card required for the open-source build. Pro trials available on request.</p>
      <div class="cta-btns">
        <a href="https://github.com/revolist/revogrid" class="btn-cta-primary" target="_blank" rel="noopener">
          Get started free
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <a href="/pro/" class="btn-cta-ghost">Explore Pro features</a>
      </div>
      <div class="footer-links-row">
        <a href="/pro/policies/privacy">Privacy Policy</a>
        <span class="sep">|</span>
        <a href="/pro/policies/terms">Terms of Service</a>
        <span class="sep">|</span>
        <a href="/pro/policies/license">License</a>
        <span class="sep">|</span>
        <a href="mailto:contact@revolist.eu">Contact Us</a>
      </div>
    </section>
  </div>
  <ElDialog v-model="dialogVisible" width="600">
    <video
      class="video"
      :src="videoUrl"
      loop
      muted
      playsinline
      autoplay
    ></video>
  </ElDialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElDialog } from 'element-plus'
import 'element-plus/es/components/dialog/style/css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import VPImage from '../.vitepress/theme/VPImage.vue'
import { PRICES } from './prices'
import { featureTableGroups } from './featureTableData'

const lightUsdYr = PRICES.light.year.USD
const advUsdYr = PRICES.advanced.year.USD

const FREE_FEATURES = [
  'MIT open-source license',
  'Virtual scroll (unlimited rows)',
  'All base column types',
  'React, Vue, Angular, Svelte, JS',
  'Community support (GitHub)',
  'Basic sorting & filtering',
]

const PRO_LIGHT_FEATURES = [
  'Everything in Free',
  'Advanced column types (date, richtext, rating)',
  'Enhanced multi-column sort',
  'Column grouping & aggregation',
  'Excel & CSV export',
  'Row drag & drop reorder',
  'One product / app',
  'Unlimited deployments',
  'Priority bug fix queue',
  'Email support',
]

const PRO_ADV_FEATURES = [
  'Everything in Pro Light',
  'Broader commercial use (no app limit)',
  'Enterprise Pivot grid',
  'Full plugin API',
  'Access to typed source code',
  'Custom column type SDK',
  'AI-assisted cell fill (beta)',
  'Gantt / timeline renderer',
  'Direct engineering support',
  'Team discounts 3+ seats',
  'Roadmap influence',
]

const ENTERPRISE_FEATURES = [
  'Everything in Pro Advanced',
  'Custom contract & invoicing',
  'Single-invoice team billing',
  'SLA-backed support',
  'Security review & compliance docs',
  'Dedicated engineering contact',
  'Roadmap co-design',
  'On-premise deployment support',
]

const FAQS = [
  {
    q: "What counts as a 'developer seat'?",
    a: "A developer seat is any person who directly uses the RevoGrid Pro source code or builds with it. End users of your product do not need a seat — you can ship to unlimited users.",
  },
  {
    q: "Can I use Pro in a SaaS app or hosted product?",
    a: "Yes. RevoGrid Pro includes royalty-free commercial use for hosted, SaaS, and on-premise deployments. No deployment fee. No per-instance charge.",
  },
  {
    q: "What's the difference between Pro Light and Pro Advanced?",
    a: "<strong>Pro Light</strong> gives you advanced column types, enhanced sorting, export, and priority bug fixes — great for production apps on one product. <strong>Pro Advanced</strong> adds the full plugin API, pivot tables, typed source access, AI-assist, and direct engineering support with no app limit.",
  },
  {
    q: "Is the open-source version truly free?",
    a: "Yes. The MIT core is free forever, including for commercial use. There are no hidden restrictions — build with it, ship with it, fork it. Pro adds features on top.",
  },
  {
    q: "How many developer licenses do I need?",
    a: "Licenses must match the maximum number of developers contributing to the front-end code that uses RevoGrid Pro. Back-end developers or end users don't count. See the <a href='/pro/policies/license'>EULA</a> for examples.",
  },
  {
    q: "Do you offer team discounts or annual contracts?",
    a: "Yes — Pro Advanced includes team discounts starting at 3 seats. For larger teams, contact us for custom pricing and a single invoice.",
  },
  {
    q: "What happens when my license expires?",
    a: "Your existing builds continue to work — there's no kill switch. You just won't receive updates or support until you renew. We never lock you out of code you've already shipped.",
  },
  {
    q: "Is there a deployment fee?",
    a: "No. RevoGrid Pro does not charge a deployment fee. Your costs are based on the plan and number of developer seats, not how many times you deploy.",
  },
]

const COMP_SECTIONS = featureTableGroups.map((group) => ({
  label: group.name,
  rows: group.features,
}))

const expandedSections = ref<Record<string, boolean>>(
  Object.fromEntries(featureTableGroups.map((group) => [group.name, group.expanded])),
)
const getFeatureKey = (groupName: string, featureName: string) => `${groupName}::${featureName}`

const expandedFeatures = ref<Record<string, boolean>>(
  Object.fromEntries(
    featureTableGroups.flatMap((group) =>
      group.features
        .filter((feature) => feature.collapsible)
        .map((feature) => [getFeatureKey(group.name, feature.name), Boolean(feature.expanded)]),
    ),
  ),
)
const dialogVisible = ref(false)
const videoUrl = ref('')

const toggleSection = (label: string) => {
  expandedSections.value[label] = !expandedSections.value[label]
}

const isFeatureExpanded = (groupName: string, featureName: string) => {
  return expandedFeatures.value[getFeatureKey(groupName, featureName)] ?? true
}

const toggleFeature = (groupName: string, featureName: string) => {
  const key = getFeatureKey(groupName, featureName)
  expandedFeatures.value[key] = !isFeatureExpanded(groupName, featureName)
}

const visibleRows = (section: (typeof COMP_SECTIONS)[number]) => {
  return section.rows.filter((row) => {
    if (!row.parent) return true
    return isFeatureExpanded(section.label, row.parent)
  })
}

const openPreview = (video: string) => {
  videoUrl.value = video
  dialogVisible.value = true
}

</script>

<style lang="scss" scoped>
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
.fade-up   { animation: fadeUp 0.55s ease both; }
.fade-up-2 { animation: fadeUp 0.55s 0.08s ease both; }
.fade-up-3 { animation: fadeUp 0.55s 0.16s ease both; }

.pricing-page {
  --green: oklch(0.72 0.18 155);
  --purple: oklch(0.65 0.22 290);
}

:global(.dark) .pricing-page {
  --green: oklch(0.72 0.18 155);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 48px;

  @media (max-width: 768px) {
    padding: 0 24px;
  }
}

/* ─── Hero ─────────────────────────────────────────────── */
.pricing-hero {
  padding: 96px 0 56px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-glow {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 360px;
  background: radial-gradient(ellipse, var(--vp-c-brand-soft) 0%, transparent 70%);
  pointer-events: none;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--vp-c-brand-soft);
  border: 1px solid var(--vp-c-brand-2);
  color: var(--vp-c-brand-1);
  font-size: 11px;
  font-weight: 500;
  font-family: var(--vp-font-family-mono);
  padding: 4px 14px;
  border-radius: 100px;
  margin-bottom: 24px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-title {
  font-family: var(--vp-font-family-base);
  font-size: clamp(36px, 5vw, 58px);
  font-weight: 700;
  letter-spacing: -2px;
  line-height: 1.06;
  color: var(--vp-c-text-1);
  margin-bottom: 18px;

  em {
    font-style: normal;
    background: linear-gradient(90deg, var(--vp-c-brand-3), var(--vp-c-brand-1));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

.hero-sub {
  font-size: 17px;
  color: var(--vp-c-text-2);
  max-width: 500px;
  margin: 0 auto 36px;
  line-height: 1.7;
}

.billing-badge-row {
  margin-bottom: 56px;
}

.billing-badge {
  display: inline-flex;
  align-items: center;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 100px;
  padding: 6px 20px;
  font-size: 13px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

/* ─── Cards ─────────────────────────────────────────────── */
.cards-section {
  padding-bottom: 80px;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    max-width: 420px;
    margin-left: auto;
    margin-right: auto;
  }
}

.price-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  transition: border-color 0.22s, transform 0.22s;

  &:hover {
    transform: translateY(-3px);
    border-color: var(--vp-c-brand-2);
  }

  &.featured {
    border-color: var(--vp-c-brand-2);
    background: linear-gradient(145deg, var(--vp-c-brand-soft), var(--vp-c-bg-soft));
    position: relative;
  }
}

.card-label {
  display: inline-flex;
  align-items: center;
  font-size: 11px;
  font-weight: 700;
  font-family: var(--vp-font-family-mono);
  padding: 3px 10px;
  border-radius: 100px;
  margin-bottom: 18px;
  width: fit-content;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  &.green {
    background: var(--green);
    color: #fff;
  }

  &.accent {
    background: var(--vp-c-brand-3);
    color: #fff;
  }

  &.subtle {
    background: var(--vp-c-bg-elv);
    border: 1px solid var(--vp-c-divider);
    color: var(--vp-c-text-2);
  }

  &.purple {
    background: color-mix(in srgb, var(--purple) 15%, transparent);
    border: 1px solid color-mix(in srgb, var(--purple) 30%, transparent);
    color: oklch(0.75 0.18 290);
  }
}

.card-name {
  font-size: 21px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 6px;
  letter-spacing: -0.3px;
}

.card-tagline {
  font-size: 13px;
  color: var(--vp-c-text-2);
  margin-bottom: 24px;
  line-height: 1.5;
}

.card-price-row {
  display: flex;
  align-items: baseline;
  gap: 2px;
  margin-bottom: 4px;
}

.price-currency {
  font-size: 20px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  align-self: flex-start;
  margin-top: 8px;
}

.price-num {
  font-size: 46px;
  font-weight: 700;
  letter-spacing: -2px;
  color: var(--vp-c-text-1);
  line-height: 1;
}

.price-period {
  font-size: 13px;
  color: var(--vp-c-text-3);
  font-weight: 400;
}

.price-note {
  font-size: 12px;
  color: var(--vp-c-text-3);
  margin-bottom: 24px;
  font-family: var(--vp-font-family-mono);
}

.card-cta {
  display: block;
  width: 100%;
  padding: 11px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  font-family: var(--vp-font-family-base);
  transition: all 0.2s;
  text-decoration: none;
  text-align: center;
  margin-bottom: 24px;

  &.primary {
    background: var(--vp-c-brand-3);
    color: #fff;
    border: none;

    &:hover {
      filter: brightness(1.1);
      transform: translateY(-1px);
    }
  }

  &.ghost {
    background: none;
    border: 1px solid var(--vp-c-divider);
    color: var(--vp-c-text-1);

    &:hover {
      background: var(--vp-c-bg-elv);
    }
  }

  &.ghost-green {
    background: none;
    border: 1px solid color-mix(in srgb, var(--green) 40%, transparent);
    color: var(--green);

    &:hover {
      background: color-mix(in srgb, var(--green) 8%, transparent);
    }
  }

  &.ghost-purple {
    background: none;
    border: 1px solid color-mix(in srgb, var(--purple) 40%, transparent);
    color: oklch(0.75 0.18 290);

    &:hover {
      background: color-mix(in srgb, var(--purple) 8%, transparent);
    }
  }
}

.card-divider {
  height: 1px;
  background: var(--vp-c-divider);
  margin-bottom: 22px;
}

.card-features {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.card-feature {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13px;
  color: var(--vp-c-text-2);
}


.feat-icon {
  font-size: 13px;
  flex-shrink: 0;
  margin-top: 1px;

  &.check { color: var(--green); }
  &.ent   { color: oklch(0.75 0.18 290); }
}

/* ─── Enterprise tile (in grid) ─────────────────────────── */
.enterprise-tile {
  border-color: color-mix(in srgb, var(--purple) 30%, transparent);
  background: linear-gradient(145deg, color-mix(in srgb, var(--purple) 6%, transparent), var(--vp-c-bg-soft));

  &:hover {
    border-color: color-mix(in srgb, var(--purple) 50%, transparent);
  }
}

/* ─── Open Source horizontal card ──────────────────────── */
.oss-card {
  background: linear-gradient(135deg, color-mix(in srgb, var(--green) 5%, transparent), var(--vp-c-bg-soft));
  border: 1px solid color-mix(in srgb, var(--green) 25%, transparent);
  border-radius: 14px;
  padding: 32px 40px;
  display: flex;
  align-items: center;
  gap: 48px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 28px;
    padding: 28px 24px;
  }
}

.oss-left {
  flex-shrink: 0;
}

.oss-badge {
  display: inline-flex;
  align-items: center;
  background: color-mix(in srgb, var(--green) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--green) 30%, transparent);
  color: var(--green);
  font-size: 11px;
  font-weight: 700;
  font-family: var(--vp-font-family-mono);
  padding: 3px 10px;
  border-radius: 100px;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.oss-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  letter-spacing: -0.5px;
  margin-bottom: 8px;
}

.oss-desc {
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  max-width: 320px;
}

.oss-ctas {
  margin-top: 20px;
}

.oss-cta-btn {
  background: none;
  border: 1px solid color-mix(in srgb, var(--green) 40%, transparent);
  color: var(--green);
  padding: 10px 22px;
  border-radius: 7px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s;

  &:hover {
    background: color-mix(in srgb, var(--green) 8%, transparent);
    transform: translateY(-1px);
  }
}

.oss-features {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 24px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

.oss-feature {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 13px;
  color: var(--vp-c-text-2);
}

.oss-check {
  color: var(--green);
  font-size: 13px;
  flex-shrink: 0;
  margin-top: 1px;
}

/* ─── Comparison table ──────────────────────────────────── */
.comparison-section {
  padding: 80px 0;
  border-top: 1px solid var(--vp-c-divider);
}

.section-heading {
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 700;
  letter-spacing: -1px;
  text-align: center;
  margin-bottom: 48px;
  color: var(--vp-c-text-1);
}

.table-wrap {
  overflow-x: auto;
}

.comp-table {
  width: 100%;
  border-collapse: collapse;

  th {
    padding: 14px 20px;
    text-align: left;
    font-size: 12px;
    font-weight: 700;
    color: var(--vp-c-text-3);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    border-bottom: 1px solid var(--vp-c-divider);

    &.center-col { text-align: center; }
    &.highlight-col { color: var(--vp-c-brand-1); }
  }

  td {
    padding: 13px 20px;
    font-size: 13px;
    color: var(--vp-c-text-2);
    border-bottom: 1px solid var(--vp-c-divider);

    &.center-col { text-align: center; }
    &.highlight-col { background: var(--vp-c-brand-soft); }
  }

  tbody tr:hover td {
    background: var(--vp-c-bg-soft);

    &.highlight-col {
      background: color-mix(in srgb, var(--vp-c-brand-soft) 60%, var(--vp-c-bg-soft));
    }
  }

  tbody tr:last-child td {
    border-bottom: none;
  }

  .category-row td {
    padding: 14px 20px;
    border-bottom: none;
    background: color-mix(in srgb, var(--vp-c-bg-alt) 80%, transparent) !important;

    &:first-child {
      border-radius: 8px 0 0 8px;
    }

    &:last-child {
      border-radius: 0 8px 8px 0;
    }
  }

  .category-toggle {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 0;
    padding: 0;
    background: transparent;
    color: var(--vp-c-text-3);
    cursor: pointer;
    font-family: var(--vp-font-family-base);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    line-height: 1.4;
    text-align: left;
    text-transform: uppercase;

    &:hover {
      color: var(--vp-c-text-1);
    }
  }

  .expand-icon {
    width: 10px;
    font-size: 10px;
    line-height: 1;
    opacity: 0.8;
  }

  .feature-name {
    color: var(--vp-c-text-2);

    a {
      color: inherit;
      text-decoration: none;

      &:hover {
        color: var(--vp-c-brand-1);
      }
    }

    &.nesting-2 {
      padding-left: 40px;
    }
  }
}

.feature-expand {
  width: 16px;
  border: 0;
  padding: 0;
  margin-right: 4px;
  background: transparent;
  color: var(--vp-c-text-3);
  cursor: pointer;
  font-size: 10px;
  line-height: 1;
}

.feature-actions {
  float: right;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-left: 12px;
}

.action-outline-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  min-width: 24px;
  padding: 0 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: transparent;
  color: var(--vp-c-text-2);
  font-size: 11px;
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  transition: border-color 0.15s ease, color 0.15s ease, background-color 0.15s ease;

  &:hover {
    border-color: var(--vp-c-brand-1);
    color: var(--vp-c-brand-1);
    background: var(--vp-c-bg-soft);
  }
}

.video-preview {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 24px;
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  outline: none;
  box-shadow: none;

  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }

  &:disabled {
    cursor: default;
  }
}

.video-placeholder {
  opacity: 0;
  pointer-events: none;
}

.video {
  width: 100%;
  display: block;
}

.check-yes {
  color: var(--green);
  font-size: 15px;
  font-weight: 700;
}

.check-no {
  color: var(--vp-c-text-3);
  opacity: 0.4;
  font-size: 15px;
}

.check-partial {
  color: var(--vp-c-brand-1);
  font-size: 12px;
  font-family: var(--vp-font-family-mono);
}

.beta-badge {
  display: inline-flex;
  align-items: center;
  margin-left: 6px;
  padding: 1px 5px;
  border-radius: 999px;
  background: var(--vp-c-warning-soft);
  color: var(--vp-c-warning-1);
  font-size: 10px;
  font-weight: 700;
  line-height: 1.4;
  text-transform: uppercase;
}

/* ─── FAQ ───────────────────────────────────────────────── */
.faq-section {
  padding: 80px 0;
  background: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-divider);
}

.faq-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.faq-item {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 24px 28px;
}

.faq-q {
  font-size: 15px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 10px;
  line-height: 1.3;
}

.faq-a {
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.7;

  :deep(strong) {
    color: var(--vp-c-text-1);
    font-weight: 600;
  }

  :deep(a) {
    color: var(--vp-c-brand-1);
    text-decoration: underline;
  }
}

/* ─── CTA ───────────────────────────────────────────────── */
.cta-section {
  background: var(--vp-c-bg);
  border-top: 1px solid var(--vp-c-divider);
  text-align: center;
  padding: 80px 48px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 64px 24px;
  }
}

.cta-glow {
  position: absolute;
  top: -80px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 300px;
  background: radial-gradient(ellipse, var(--vp-c-brand-soft) 0%, transparent 70%);
  pointer-events: none;
}

.cta-title {
  font-size: clamp(26px, 3.5vw, 40px);
  font-weight: 700;
  letter-spacing: -1px;
  color: var(--vp-c-text-1);
  margin-bottom: 14px;
  line-height: 1.1;
  position: relative;
}

.cta-sub {
  font-size: 16px;
  color: var(--vp-c-text-2);
  margin-bottom: 32px;
  max-width: 440px;
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
  margin-bottom: 40px;
}

.btn-cta-primary {
  background: var(--vp-c-brand-3);
  color: #fff;
  border: none;
  padding: 12px 26px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  font-family: var(--vp-font-family-base);
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

.btn-cta-ghost {
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
  padding: 12px 26px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  font-family: var(--vp-font-family-base);
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

.footer-links-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
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

/* ─── Check icons (rendered inline via v-html/template) ── */
.feat-check-yes {
  color: var(--green);
  font-size: 15px;
  font-weight: 700;
}

.feat-check-no {
  color: var(--vp-c-text-3);
  opacity: 0.4;
  font-size: 15px;
}
</style>
