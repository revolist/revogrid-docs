<template>
  <main class="trial-page">
    <section class="trial-hero">
      <div class="trial-container trial-hero-grid">
        <div class="trial-copy">
          <p class="eyebrow">Evaluate RevoGrid Pro</p>
          <h1>Try Pro before you buy.</h1>
          <p class="lead">
            Evaluate Pro modules, including Pivot, Gantt, and Scheduler, with
            {{ trialDuration }} private npm access, live demos, and implementation guidance.
          </p>

          <ul class="benefit-list" aria-label="Trial benefits">
            <li v-for="benefit in benefits" :key="benefit">
              <span class="benefit-icon" aria-hidden="true">
                <FontAwesomeSvgIcon name="check" />
              </span>
              {{ benefit }}
            </li>
          </ul>
        </div>

        <div class="trial-form-panel">
          <TrialRequestForm
            eyebrow="Start your trial"
            helper="Takes ~1 min"
            title="Get 30-day Pro access"
            subtitle="No credit card required. We’ll send access details to your email."
            submit-label="Get Pro access"
            request-type="trial"
            success-title="Trial request received"
            success-message="We’ll send trial access details to your email."
          />
        </div>
      </div>
    </section>

    <TrustedLogoStrip
      title-id="trial-trust-title"
      variant="trial"
      :metrics="metrics"
    />

    <section class="trial-steps" aria-labelledby="trial-steps-title">
      <div class="trial-container">
        <div class="steps-heading">
          <p class="eyebrow">Simple from day one</p>
          <h2 id="trial-steps-title">What happens after you submit</h2>
          <p>No hidden steps, no automatic subscription.</p>
        </div>

        <div class="steps-grid">
          <article v-for="step in steps" :key="step.number" class="step-card">
            <div class="step-card-top">
              <span class="step-number">{{ step.number }}</span>
              <span class="step-icon" aria-hidden="true">
                <FontAwesomeSvgIcon :name="step.icon" />
              </span>
            </div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import FontAwesomeSvgIcon from '../.vitepress/theme/home-v2/FontAwesomeSvgIcon.vue'
import TrustedLogoStrip from '../.vitepress/theme/TrustedLogoStrip.vue'
import { getPlan } from '../commercial/productCatalog'
import TrialRequestForm from './TrialRequestForm.vue'

const litePlan = getPlan('pro-lite')
const advancedPlan = getPlan('pro-advanced')
const trialDuration = `${litePlan.trial.durationDays}-day`

const benefits = [
  `${trialDuration} private npm access`,
  'Public boilerplate repository and live demos',
  `Evaluate ${litePlan.name} and ${advancedPlan.name} modules`,
  'Guidance for app-level Pro evaluation',
]

const metrics = [
  { value: '900K+', label: 'jsDelivr downloads / mo' },
  { value: '3.4K+', label: 'GitHub stars' },
  { value: `${litePlan.trial.durationDays} days`, label: 'to evaluate Pro' },
  { value: '< 1 day', label: 'typical access time' },
]

const steps = [
  {
    number: '01',
    icon: 'arrowDown',
    title: 'Get your access',
    description: 'After submitting the form, we’ll send private npm access to your email.',
  },
  {
    number: '02',
    icon: 'calendarDays',
    title: `You evaluate Pro for ${litePlan.trial.durationDays} days`,
    description: 'Test selected modules directly in your application with your own data and workflows. It is evaluation-only and cannot be redistributed or used in production.',
  },
  {
    number: '03',
    icon: 'check',
    title: 'You decide when you’re ready',
    description: `Move to ${litePlan.name}, ${advancedPlan.name}, or Enterprise when you are ready.`,
  },
]
</script>

<style lang="scss" scoped>
.trial-page {
  min-height: calc(100vh - var(--vp-nav-height));
  background: var(--vp-c-bg);
}

.trial-container {
  width: min(1200px, calc(100% - 48px));
  margin: 0 auto;
}

.trial-hero {
  border-top: 1px solid var(--vp-c-divider);
  background:
    radial-gradient(circle at 18% 18%, color-mix(in srgb, var(--vp-c-brand-1), transparent 91%), transparent 30rem),
    var(--vp-c-bg);
  padding: clamp(3.5rem, 6vw, 5.75rem) 0;
}

.trial-hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(500px, 570px);
  gap: clamp(3rem, 7vw, 6.5rem);
  align-items: center;
}

.eyebrow {
  margin: 0 0 1.15rem;
  color: var(--vp-c-brand-1);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.trial-copy h1 {
  max-width: 12ch;
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: clamp(3.5rem, 6vw, 5rem);
  font-weight: 600;
  letter-spacing: -0.055em;
  line-height: 0.98;
}

.lead {
  max-width: 40rem;
  margin: 1.75rem 0 0;
  color: var(--vp-c-text-2);
  font-size: clamp(1.05rem, 1.4vw, 1.25rem);
  line-height: 1.62;
}

.benefit-list {
  display: grid;
  gap: 1.1rem;
  margin: 3.25rem 0 0;
  padding: 0;
  color: var(--vp-c-text-2);
  font-size: 1rem;
  list-style: none;
}

.benefit-list li {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.9rem;
  align-items: center;
}

.benefit-icon {
  display: inline-grid;
  width: 32px;
  height: 32px;
  place-items: center;
  border-radius: 50%;
  background: color-mix(in srgb, var(--vp-c-brand-1), transparent 87%);
  color: var(--vp-c-brand-1);
}

.benefit-icon :deep(.fa-svg-icon) {
  width: 14px;
  height: 14px;
}

.trial-form-panel {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg);
  box-shadow: 0 22px 58px color-mix(in srgb, #17211d, transparent 90%);
  padding: clamp(1.75rem, 3vw, 2.6rem);
}

.trial-steps {
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  padding: clamp(4.5rem, 7vw, 6.5rem) 0 clamp(5rem, 8vw, 7rem);
}

.steps-heading {
  margin: 0 auto clamp(2.5rem, 4vw, 3.5rem);
  text-align: center;
}

.steps-heading h2 {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: clamp(2.35rem, 4.5vw, 4rem);
  font-weight: 600;
  letter-spacing: -0.045em;
  line-height: 1.04;
}

.steps-heading > p:last-child {
  margin: 1.35rem 0 0;
  color: var(--vp-c-text-2);
  font-size: 1rem;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
}

.step-card {
  display: flex;
  min-height: 265px;
  flex-direction: column;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg);
  padding: 1.8rem 2rem 2.1rem;
}

.step-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
}

.step-number {
  color: var(--vp-c-text-3);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.step-icon {
  display: inline-grid;
  width: 46px;
  height: 46px;
  place-items: center;
  border-radius: 10px;
  background: color-mix(in srgb, var(--vp-c-brand-1), transparent 88%);
  color: var(--vp-c-brand-1);
}

.step-card:first-child .step-icon :deep(.fa-svg-icon) {
  transform: rotate(-135deg);
}

.step-card h3 {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.35;
}

.step-card p {
  margin: 1rem 0 0;
  color: var(--vp-c-text-2);
  font-size: 0.94rem;
  line-height: 1.6;
}

@media (max-width: 980px) {
  .trial-hero-grid {
    grid-template-columns: minmax(0, 0.9fr) minmax(430px, 1.1fr);
    gap: 2.5rem;
  }

  .trial-copy h1 {
    font-size: clamp(3.25rem, 6vw, 4.25rem);
  }
}

@media (max-width: 820px) {
  .trial-hero {
    padding-top: 3rem;
  }

  .trial-hero-grid {
    grid-template-columns: 1fr;
  }

  .trial-copy h1 {
    max-width: 10ch;
  }

  .benefit-list {
    margin-top: 2.5rem;
  }

  .steps-grid {
    grid-template-columns: 1fr;
  }

  .step-card {
    min-height: 230px;
  }
}

@media (min-width: 768px) and (max-width: 800px) {
  :global(body:has(.trial-page) .VPNavBar .content) {
    flex: 1 1 auto;
    width: auto;
    min-width: 0;
  }

  :global(body:has(.trial-page) .VPNavBar .content-body) {
    min-width: 0;
  }

  :global(body:has(.trial-page) .VPNavBarMenu),
  :global(body:has(.trial-page) .VPNavBarExtra) {
    display: none;
  }

  :global(body:has(.trial-page) .VPNavBarHamburger) {
    display: flex;
  }
}

@media (max-width: 640px) {
  .trial-container {
    width: min(100% - 32px, 1200px);
  }

  .trial-hero {
    padding: 2.5rem 0 3.5rem;
  }

  .trial-copy h1 {
    font-size: clamp(3rem, 15vw, 4rem);
  }

  .lead {
    margin-top: 1.4rem;
  }

  .benefit-list {
    font-size: 0.95rem;
  }

  .trial-form-panel {
    padding: 1.4rem;
  }

  .steps-heading {
    text-align: left;
  }

  .steps-heading h2 {
    font-size: clamp(2.4rem, 12vw, 3.25rem);
  }

  .step-card {
    min-height: 0;
    padding: 1.5rem;
  }

  .step-card h3 {
    margin-top: 0;
  }
}
</style>
