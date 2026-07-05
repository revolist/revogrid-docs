<template>
  <main class="trial-page">
    <section class="trial-hero">
      <div class="trial-container trial-hero-grid">
        <div class="trial-copy">
          <p class="eyebrow">Evaluate RevoGrid Pro</p>
          <h1>Try Pro before you buy.</h1>
          <p class="lead">
            Request access to evaluate Pro and Enterprise modules with live demos,
            module guidance, and support for your product workflow.
          </p>

          <ul class="benefit-list" aria-label="Trial benefits">
            <li v-for="benefit in benefits" :key="benefit">
              <span class="check-icon" aria-hidden="true"></span>
              {{ benefit }}
            </li>
          </ul>
        </div>

        <div class="trial-form-panel">
          <TrialRequestForm
            title="Request trial access"
            subtitle="No credit card required. Tell us where RevoGrid Pro will be evaluated and which modules you need."
            submit-label="Submit"
            request-type="trial"
            success-title="Trial request received"
            success-message="We will send trial access details to your business email."
          />
        </div>
      </div>
    </section>

    <section class="trial-section" aria-labelledby="trial-answers-title">
      <div class="trial-container">
        <div class="section-heading">
          <p class="eyebrow">Evaluation options</p>
          <h2 id="trial-answers-title">One clear path from demo to production.</h2>
          <p>
            RevoGrid Pro evaluation is available by request. You can inspect public demos first,
            then request access when you need to validate Pro behavior inside your app.
          </p>
        </div>

        <div class="answer-list">
          <article
            v-for="(answer, index) in answers"
            :key="answer.title"
            class="answer-item"
            :class="{ open: openAnswers[index] }"
          >
            <button
              type="button"
              class="answer-trigger"
              :aria-expanded="Boolean(openAnswers[index])"
              :aria-controls="`trial-answer-${index}`"
              @click="toggleAnswer(index)"
            >
              <span>{{ answer.title }}</span>
              <span class="answer-toggle" aria-hidden="true">+</span>
            </button>

            <div
              v-show="openAnswers[index]"
              :id="`trial-answer-${index}`"
              class="answer-body"
            >
              <p>{{ answer.description }}</p>
              <div v-if="answer.links?.length" class="answer-links">
                <a
                  v-for="link in answer.links"
                  :key="link.href"
                  :href="link.href"
                  :target="link.external ? '_blank' : undefined"
                  :rel="link.external ? 'noopener noreferrer' : undefined"
                >
                  {{ link.text }}
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="trial-section" aria-labelledby="trial-lifecycle-title">
      <div class="trial-container">
        <div class="section-heading">
          <p class="eyebrow">What to expect</p>
          <h2 id="trial-lifecycle-title">Trial access, limits, and production rules.</h2>
        </div>

        <div class="lifecycle-grid">
          <article v-for="item in lifecycle" :key="item.title" class="lifecycle-card">
            <span>{{ item.step }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="trial-proof" aria-labelledby="trial-proof-title">
      <div class="trial-container">
        <h2 id="trial-proof-title">Trusted by engineering teams building data-heavy products</h2>
        <div class="proof-grid">
          <div v-for="stat in stats" :key="stat.label" class="proof-stat">
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </div>
        </div>
        <div class="logo-row" aria-label="Industries using RevoGrid">
          <span>Enterprise software</span>
          <span>Finance</span>
          <span>Pharma</span>
          <span>Automotive</span>
          <span>Analytics</span>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TrialRequestForm from './TrialRequestForm.vue'

const benefits = [
  'Trial access by request',
  'Public demos before installing anything',
  'Guidance for app-level Pro and Enterprise evaluation',
  'Clear production path for SaaS, internal tools, and commercial apps',
]

const answers = [
  {
    title: 'Can I try Pro?',
    description: 'Yes. Request trial access here when your team needs to evaluate Pro or Enterprise modules in a real product workflow.',
    links: [
      { href: '#trialFullName', text: 'Request trial access' },
    ],
  },
  {
    title: 'Is there a public sandbox?',
    description: 'Yes. Start with the public demo gallery, Pivot demo, and Gantt demo for feature exploration before requesting trial access.',
    links: [
      { href: '/demo/', text: 'Demo gallery' },
      { href: '/demo/pivot', text: 'Pivot demo' },
      { href: '/demo/gantt', text: 'Gantt demo' },
    ],
  },
  {
    title: 'What is included in trial?',
    description: 'Trial access can cover the MIT core, Pro modules, Enterprise modules such as Pivot and Gantt where approved, examples, docs, and evaluation support.',
  },
  {
    title: 'Can I use it in SaaS?',
    description: 'Yes. Paid Pro licensing is SaaS-friendly: no end-user fee, deployment fee, or runtime royalty for your users.',
    links: [
      { href: '/pricing', text: 'Review pricing' },
    ],
  },
]

const openAnswers = ref<Record<number, boolean>>({ 0: true })

function toggleAnswer(index: number) {
  openAnswers.value = {
    ...openAnswers.value,
    [index]: !openAnswers.value[index],
  }
}

const lifecycle = [
  {
    step: '01',
    title: 'What is included',
    description: 'The MIT core remains public. Trial access can include Pro modules, Enterprise modules such as Pivot and Gantt where approved, examples, docs, and evaluation support.',
  },
  {
    step: '02',
    title: 'Trial limits',
    description: 'Trial access is for evaluation only and cannot be redistributed or used in production before paid access is active.',
  },
  {
    step: '03',
    title: 'After the trial',
    description: 'Move to paid Pro or Enterprise access, use the required production license setup, and follow the production rules in the EULA.',
  },
]

const stats = [
  { value: '900K+', label: 'jsDelivr downloads / mo' },
  { value: '3.4K+', label: 'GitHub stars' },
  { value: '8K+', label: 'developers using RevoGrid' },
]
</script>

<style lang="scss" scoped>
.trial-page {
  min-height: calc(100vh - var(--vp-nav-height));
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--vp-c-brand-1), transparent 94%), transparent 36rem),
    var(--vp-c-bg);
}

.trial-container {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
}

.trial-hero {
  padding: 4.5rem 0 5rem;
}

.trial-hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 520px);
  gap: clamp(2.5rem, 7vw, 6rem);
  align-items: center;
}

.trial-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 4rem;
  color: var(--vp-c-text-1);
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;

  img {
    width: 38px;
    height: 38px;
  }
}

.eyebrow {
  margin: 0 0 0.9rem;
  color: var(--vp-c-brand-1);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.trial-copy {
  h1 {
    max-width: 12ch;
    margin: 0;
    color: var(--vp-c-text-1);
    font-size: clamp(3rem, 5vw, 3.25rem);
    line-height: 0.95;
  }
}

.lead {
  max-width: 42rem;
  margin: 1.5rem 0 0;
  color: var(--vp-c-text-2);
  font-size: 1.25rem;
  line-height: 1.65;
}

.benefit-list {
  display: grid;
  gap: 1.2rem;
  margin: 3rem 0 0;
  padding: 0;
  list-style: none;
  color: var(--vp-c-text-2);
  font-size: 1.08rem;

  li {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.9rem;
    align-items: center;
  }

  .check-icon {
    display: inline-grid;
    width: 32px;
    height: 32px;
    place-items: center;
    border-radius: 50%;
    background: color-mix(in srgb, var(--vp-c-brand-1), transparent 84%);

    &::before {
      width: 12px;
      height: 7px;
      border: solid var(--vp-c-brand-1);
      border-width: 0 0 3px 3px;
      content: '';
      transform: rotate(-45deg) translate(1px, -1px);
    }
  }
}

.trial-form-panel {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  box-shadow: 0 18px 50px color-mix(in srgb, #000, transparent 90%);
  padding: clamp(1.4rem, 3vw, 2.25rem);
}

.trial-section {
  border-top: 1px solid var(--vp-c-divider);
  padding: 4.5rem 0;
}

.section-heading {
  max-width: 780px;
  margin-bottom: 2rem;

  &.compact {
    margin-bottom: 0;
  }

  h2 {
    margin: 0;
    color: var(--vp-c-text-1);
    font-size: clamp(2rem, 2vw, 3.25rem);
    line-height: 1.08;
  }

  p:not(.eyebrow) {
    margin: 1rem 0 0;
    color: var(--vp-c-text-2);
    font-size: 1.05rem;
    line-height: 1.7;
  }
}

.lifecycle-grid {
  display: grid;
  gap: 1rem;
}

.lifecycle-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
}

.lifecycle-card {
  padding: 1.25rem;

  h3 {
    margin: 0;
    color: var(--vp-c-text-1);
    font-size: 1.05rem;
    line-height: 1.3;
  }

  p {
    margin: 0.75rem 0 0;
    color: var(--vp-c-text-2);
    font-size: 0.95rem;
    line-height: 1.6;
  }
}

.answer-list {
  display: grid;
  gap: 0.85rem;
  max-width: 900px;
}

.answer-item {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  overflow: hidden;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &.open {
    border-color: color-mix(in srgb, var(--vp-c-brand-1), var(--vp-c-divider) 55%);
    box-shadow: 0 14px 36px color-mix(in srgb, #000, transparent 94%);

    .answer-toggle {
      transform: rotate(45deg);
      color: var(--vp-c-brand-1);
    }
  }
}

.answer-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border: 0;
  background: transparent;
  color: var(--vp-c-text-1);
  cursor: pointer;
  font: inherit;
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.3;
  padding: 1.1rem 1.25rem;
  text-align: left;

  &:hover {
    background: color-mix(in srgb, var(--vp-c-brand-1), transparent 94%);
  }
}

.answer-toggle {
  flex: 0 0 auto;
  color: var(--vp-c-text-3);
  font-size: 1.45rem;
  line-height: 1;
  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.answer-body {
  border-top: 1px solid var(--vp-c-divider);
  padding: 0 1.25rem 1.25rem;

  p {
    max-width: 720px;
    margin: 1rem 0 0;
    color: var(--vp-c-text-2);
    font-size: 0.98rem;
    line-height: 1.7;
  }
}

.answer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.8rem;
  margin-top: 1rem;

  a {
    display: inline-flex;
    color: var(--vp-c-brand-1);
    font-size: 0.92rem;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.lifecycle-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.lifecycle-card {
  span {
    display: inline-flex;
    margin-bottom: 1rem;
    color: var(--vp-c-brand-1);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
  }
}

.trial-proof {
  border-top: 1px solid var(--vp-c-divider);
  padding: 4rem 0 5rem;
  text-align: center;

  h2 {
    max-width: 820px;
    margin: 0 auto 2rem;
    color: var(--vp-c-text-1);
    font-size: clamp(2rem, 4vw, 3.25rem);
    line-height: 1.08;
  }
}

.proof-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-top: 1px solid var(--vp-c-divider);
  border-bottom: 1px solid var(--vp-c-divider);
}

.proof-stat {
  display: grid;
  gap: 0.45rem;
  padding: 1.5rem 1rem;
  border-right: 1px solid var(--vp-c-divider);

  &:last-child {
    border-right: 0;
  }

  strong {
    color: var(--vp-c-text-1);
    font-size: 2rem;
    line-height: 1;
  }

  span {
    color: var(--vp-c-text-3);
    font-size: 0.78rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
}

.logo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2.25rem;
  justify-content: center;
  margin-top: 2.5rem;
  color: var(--vp-c-text-3);
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

@media (max-width: 900px) {
  .trial-hero {
    padding-top: 2.25rem;
  }

  .trial-hero-grid {
    grid-template-columns: 1fr;
  }

  .trial-logo {
    margin-bottom: 2.25rem;
  }

  .trial-copy h1 {
    max-width: 12ch;
  }

  .lifecycle-grid {
    grid-template-columns: 1fr;
  }

  .section-heading.compact {
    margin-bottom: 0;
  }
}

@media (max-width: 640px) {
  .trial-container {
    width: min(100% - 32px, 1180px);
  }

  .trial-copy h1 {
    font-size: 3rem;
  }

  .lead {
    font-size: 1.05rem;
  }

  .proof-grid {
    grid-template-columns: 1fr;
  }

  .proof-stat {
    border-right: 0;
    border-bottom: 1px solid var(--vp-c-divider);

    &:last-child {
      border-bottom: 0;
    }
  }
}
</style>
