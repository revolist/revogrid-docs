<template>
  <main class="trial-page">
    <section class="trial-hero">
      <div class="trial-container trial-hero-grid">
        <div class="trial-copy">
          <p class="eyebrow">Public Pro trial</p>
          <h1>Evaluate RevoGrid Pro now</h1>
          <p class="lead">
            Install trial packages from the public registry or clone the public starter. You can
            start evaluating in your application immediately—no form or approval step required.
          </p>

          <div class="trial-actions" aria-label="Start evaluating RevoGrid Pro">
            <ProDocButton
              href="https://pro.rv-grid.com/guides/installation-npm-trial/"
              target="_blank"
              rel="noopener noreferrer"
              arrow
            >
              Install Pro Trial
            </ProDocButton>
            <ProDocButton
              href="https://github.com/revolist/revogrid-pro-trial"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              arrow
            >
              Clone Trial Starter
            </ProDocButton>
          </div>

          <ul class="benefit-list" aria-label="Public trial access details">
            <li v-for="detail in accessDetails" :key="detail">
              <span class="benefit-icon" aria-hidden="true">
                <FontAwesomeSvgIcon name="check" />
              </span>
              {{ detail }}
            </li>
          </ul>
        </div>

        <aside class="quick-start-panel" aria-labelledby="quick-start-title">
          <p class="eyebrow">Minimum setup</p>
          <h2 id="quick-start-title">Install {{ selectedTrial.name }}</h2>
          <p>
            {{ selectedTrial.description }} First point the <code>@revolist</code> npm scope to the
            public trial registry. No login or token is needed.
          </p>
          <div class="command-block">
            <span>Registry setup command</span>
            <pre tabindex="0"><code>npm config set &quot;@revolist:registry=https://trial.rv-grid.com&quot;</code></pre>
          </div>
          <div class="command-block">
            <span>{{ selectedTrial.name }} packages</span>
            <pre tabindex="0"><code>{{ selectedTrial.commands.join('\n') }}</code></pre>
          </div>
          <p v-if="selectedTrial.id !== 'pro'" class="quick-start-note">
            Standalone product trials build on the Pro trial, so keep
            <code>@revolist/revogrid</code> and <code>@revolist/rv-pro-trial</code> installed with
            <code>{{ selectedTrial.packageName }}</code>.
          </p>
          <p class="quick-start-note">
            Trial packages use trial-specific package and CSS names. Follow the guide when moving
            from evaluation to paid packages.
          </p>

          <nav class="package-options" aria-label="Choose trial installation instructions">
            <span>Installation for</span>
            <div>
              <a
                v-for="option in trialOptions"
                :key="option.id"
                :href="`/trial?product=${option.id}`"
                :aria-current="option.id === selectedTrial.id ? 'page' : undefined"
                @click="selectedTrial = option"
              >
                {{ option.shortName }}
              </a>
            </div>
          </nav>
        </aside>
      </div>
    </section>

    <TrustedLogoStrip
      title-id="trial-trust-title"
      variant="trial"
    />

    <section class="trial-steps" aria-labelledby="trial-steps-title">
      <div class="trial-container">
        <div class="steps-heading">
          <p class="eyebrow">Choose your starting point</p>
          <h2 id="trial-steps-title">Start evaluating in minutes</h2>
          <p>Use the package path or the ready-to-run starter, then test against your own workflow.</p>
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

    <section class="trial-support" aria-labelledby="trial-support-title">
      <div class="trial-container trial-support-grid">
        <div class="support-copy">
          <p class="eyebrow">Optional support</p>
          <h2 id="trial-support-title">Talk through your evaluation</h2>
          <p>
            Want evaluation help, architecture guidance, or commercial information? Contact our team.
          </p>
          <p>
            This form is optional. Installation instructions and the public starter are available
            above without submitting any details.
          </p>
        </div>

        <div class="trial-form-panel">
          <TrialRequestForm
            eyebrow="Contact our team"
            helper="Optional"
            title="How can we help?"
            subtitle="Tell us about your application, evaluation questions, or commercial requirements."
            submit-label="Contact the team"
            request-type="trial"
            success-title="Message received"
            success-message="Our team will get back to you as soon as possible."
          />
        </div>
      </div>
    </section>

    <div class="trial-faq">
      <div class="trial-container">
        <CommercialFaq id="trial-faq" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import FontAwesomeSvgIcon from '../.vitepress/theme/home-v2/FontAwesomeSvgIcon.vue'
import TrustedLogoStrip from '../.vitepress/theme/TrustedLogoStrip.vue'
import { getPlan } from '../commercial/productCatalog'
import CommercialFaq from './CommercialFaq.vue'
import ProDocButton from './ProDocButton.vue'
import TrialRequestForm from './TrialRequestForm.vue'

const litePlan = getPlan('pro-lite')
const advancedPlan = getPlan('pro-advanced')

type TrialProductId = 'pro' | 'pivot' | 'kanban' | 'gantt' | 'scheduler'

interface TrialOption {
  id: TrialProductId
  name: string
  shortName: string
  description: string
  packageName: string
  commands: string[]
}

const baseInstallCommands = [
  'pnpm i @revolist/revogrid',
  'pnpm i @revolist/rv-pro-trial',
]

const trialOptions: TrialOption[] = [
  {
    id: 'pro',
    name: 'RevoGrid Pro Trial',
    shortName: 'Pro',
    description: 'Use this base setup to evaluate RevoGrid Pro features.',
    packageName: '@revolist/rv-pro-trial',
    commands: baseInstallCommands,
  },
  {
    id: 'pivot',
    name: 'Pivot Trial',
    shortName: 'Pivot',
    description: 'Pivot requires the core grid, the Pro trial, and the standalone Pivot trial package.',
    packageName: '@revolist/pivot-trial',
    commands: [...baseInstallCommands, 'pnpm i @revolist/pivot-trial'],
  },
  {
    id: 'kanban',
    name: 'Kanban Trial',
    shortName: 'Kanban',
    description: 'Kanban requires the core grid, the Pro trial, and the standalone Kanban trial package.',
    packageName: '@revolist/kanban-trial',
    commands: [...baseInstallCommands, 'pnpm i @revolist/kanban-trial'],
  },
  {
    id: 'gantt',
    name: 'Gantt Trial',
    shortName: 'Gantt',
    description: 'Gantt requires the core grid, the Pro trial, and the standalone Gantt trial package.',
    packageName: '@revolist/gantt-trial',
    commands: [...baseInstallCommands, 'pnpm i @revolist/gantt-trial'],
  },
  {
    id: 'scheduler',
    name: 'Scheduler Trial',
    shortName: 'Scheduler',
    description: 'Scheduler requires the core grid, the Pro trial, and the standalone Scheduler trial package.',
    packageName: '@revolist/scheduler-trial',
    commands: [...baseInstallCommands, 'pnpm i @revolist/scheduler-trial'],
  },
]

const selectedTrial = ref<TrialOption>(trialOptions[0])

function findTrialOption(product: string | null): TrialOption {
  const normalizedProduct = product === 'event-scheduler' ? 'scheduler' : product
  return trialOptions.find(option => option.id === normalizedProduct) ?? trialOptions[0]
}

onMounted(() => {
  const product = new URLSearchParams(window.location.search).get('product')
  selectedTrial.value = findTrialOption(product)
})

const accessDetails = [
  'No npm login or authentication token is required.',
  'No license key is required to start the trial.',
  'No approval email is required.',
  'The public starter can be cloned and run immediately.',
]

const steps = [
  {
    number: '01',
    icon: 'arrowDown',
    title: 'Install the Pro trial package',
    description: 'Configure the public registry and follow the guide for the current trial package and CSS names.',
  },
  {
    number: '02',
    icon: 'github',
    title: 'Clone the public starter',
    description: 'Run the working starter immediately and inspect its package setup, imports, and examples.',
  },
  {
    number: '03',
    icon: 'check',
    title: `Evaluate for ${litePlan.trial.durationDays} days`,
    description: `Test the published trial packages you need with your own data and compare the fit with ${litePlan.name} and ${advancedPlan.name}. Trial builds are evaluation-only and cannot be redistributed or used in production.`,
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
  align-items: start;
}

.trial-copy,
.quick-start-panel {
  min-width: 0;
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

.trial-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 2rem;
}

.trial-actions :deep(.rg-btn) {
  min-height: 46px;
  justify-content: center;
}

.benefit-list {
  display: grid;
  gap: 1.1rem;
  margin: 2.5rem 0 0;
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

.quick-start-panel,
.trial-form-panel {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg);
  box-shadow: 0 22px 58px color-mix(in srgb, #17211d, transparent 90%);
  padding: clamp(1.75rem, 3vw, 2.6rem);
}

.quick-start-panel h2,
.support-copy h2 {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: clamp(2rem, 3.3vw, 3rem);
  font-weight: 600;
  letter-spacing: -0.04em;
  line-height: 1.08;
}

.quick-start-panel > p:not(.eyebrow),
.support-copy > p:not(.eyebrow) {
  margin: 1.25rem 0 0;
  color: var(--vp-c-text-2);
  line-height: 1.65;
}

.quick-start-panel code {
  font-size: 0.92em;
}

.command-block {
  margin-top: 2rem;
}

.command-block > span {
  display: block;
  margin-bottom: 0.65rem;
  color: var(--vp-c-text-3);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.command-block pre {
  overflow-x: auto;
  margin: 0;
  border: 1px solid color-mix(in srgb, var(--vp-c-divider), transparent 15%);
  border-radius: 9px;
  background: var(--vp-code-block-bg);
  color: var(--vp-code-block-color);
  font-size: 0.88rem;
  line-height: 1.65;
  padding: 1rem 1.1rem;
  white-space: pre;
}

.command-block pre:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 3px;
}

.quick-start-panel .quick-start-note {
  font-size: 0.9rem;
}

.package-options {
  margin-top: 1.75rem;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 1.4rem;
}

.package-options > span {
  display: block;
  margin-bottom: 0.75rem;
  color: var(--vp-c-text-3);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.package-options > div {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.package-options a {
  display: inline-flex;
  min-height: 36px;
  align-items: center;
  border: 1px solid var(--vp-c-divider);
  border-radius: 7px;
  color: var(--vp-c-text-2);
  font-size: 0.82rem;
  font-weight: 600;
  padding: 0.45rem 0.7rem;
  text-decoration: none;
}

.package-options a:hover,
.package-options a[aria-current='page'] {
  border-color: var(--vp-c-brand-1);
  background: color-mix(in srgb, var(--vp-c-brand-1), transparent 90%);
  color: var(--vp-c-brand-1);
}

.package-options a:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 3px;
}

.trial-steps {
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  padding: clamp(4.5rem, 7vw, 6.5rem) 0 clamp(5rem, 8vw, 7rem);
}

.trial-support {
  border-top: 1px solid var(--vp-c-divider);
  padding: clamp(4.5rem, 7vw, 6.5rem) 0;
}

.trial-support-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.82fr) minmax(500px, 1.18fr);
  gap: clamp(3rem, 7vw, 6.5rem);
  align-items: start;
}

.support-copy {
  position: sticky;
  top: calc(var(--vp-nav-height) + 2rem);
}

.trial-faq {
  border-top: 1px solid var(--vp-c-divider);
  padding: 1rem 0 3rem;
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

  .trial-support-grid {
    grid-template-columns: minmax(0, 0.8fr) minmax(430px, 1.2fr);
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

  .trial-support-grid {
    grid-template-columns: 1fr;
  }

  .support-copy {
    position: static;
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

  .trial-actions {
    display: grid;
  }

  .trial-actions :deep(.rg-btn) {
    width: 100%;
  }

  .quick-start-panel {
    padding: 1.4rem;
  }

  .command-block pre {
    font-size: 0.78rem;
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
