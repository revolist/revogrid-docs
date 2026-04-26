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
                  <td colspan="4">{{ section.label }}</td>
                </tr>
                <tr v-for="row in section.rows" :key="row.feature">
                  <td>{{ row.feature }}</td>
                  <td class="center-col">
                    <span v-if="row.free === true" class="check-yes">✓</span>
                    <span v-else-if="row.free === false" class="check-no">—</span>
                    <span v-else class="check-partial">{{ row.free }}</span>
                  </td>
                  <td class="center-col highlight-col">
                    <span v-if="row.light === true" class="check-yes">✓</span>
                    <span v-else-if="row.light === false" class="check-no">—</span>
                    <span v-else class="check-partial">{{ row.light }}</span>
                  </td>
                  <td class="center-col">
                    <span v-if="row.adv === true" class="check-yes">✓</span>
                    <span v-else-if="row.adv === false" class="check-no">—</span>
                    <span v-else class="check-partial">{{ row.adv }}</span>
                  </td>
                </tr>
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
</template>

<script lang="ts" setup>
import { PRICES } from './prices'

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

const COMP_SECTIONS = [
  {
    label: 'Core',
    rows: [
      { feature: 'Virtual scroll (unlimited rows)', free: true, light: true, adv: true },
      { feature: 'Base column types', free: true, light: true, adv: true },
      { feature: 'Multi-framework support', free: true, light: true, adv: true },
      { feature: 'Basic sorting & filtering', free: true, light: true, adv: true },
      { feature: 'Community support (GitHub)', free: true, light: true, adv: true },
    ],
  },
  {
    label: 'Pro Features',
    rows: [
      { feature: 'Advanced column types', free: false, light: true, adv: true },
      { feature: 'Column grouping & aggregation', free: false, light: true, adv: true },
      { feature: 'Row drag & drop reorder', free: false, light: true, adv: true },
      { feature: 'Excel / CSV export', free: false, light: true, adv: true },
      { feature: 'Plugin API', free: false, light: false, adv: true },
      { feature: 'Enterprise Pivot grid', free: false, light: false, adv: true },
      { feature: 'Custom column type SDK', free: false, light: false, adv: true },
      { feature: 'Gantt / timeline renderer', free: false, light: false, adv: true },
      { feature: 'AI cell assist (beta)', free: false, light: false, adv: true },
      { feature: 'Typed source code access', free: false, light: false, adv: true },
    ],
  },
  {
    label: 'Licensing',
    rows: [
      { feature: 'Commercial use', free: true, light: true, adv: true },
      { feature: 'No deployment fee', free: true, light: true, adv: true },
      { feature: 'SaaS / hosted apps', free: true, light: true, adv: true },
      { feature: 'Royalty-free distribution', free: true, light: true, adv: true },
      { feature: 'One product / app', free: false, light: true, adv: false },
      { feature: 'Unlimited apps (no app limit)', free: false, light: false, adv: true },
    ],
  },
  {
    label: 'Support',
    rows: [
      { feature: 'Community (GitHub)', free: true, light: true, adv: true },
      { feature: 'Email support', free: false, light: true, adv: true },
      { feature: 'Priority bug fixes', free: false, light: true, adv: true },
      { feature: 'Direct engineering support', free: false, light: false, adv: true },
      { feature: 'Team discounts (3+ seats)', free: false, light: false, adv: true },
      { feature: 'Roadmap influence', free: false, light: false, adv: true },
    ],
  },
]

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
    padding: 20px 20px 8px;
    font-size: 11px;
    font-weight: 700;
    color: var(--vp-c-text-3);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border-bottom: none;
    background: none !important;
  }
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
