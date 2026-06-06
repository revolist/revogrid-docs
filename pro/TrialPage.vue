<template>
  <main class="trial-page">
    <section class="trial-hero">
      <div class="trial-container trial-hero-grid">
        <div class="trial-copy">
          <h1>Download a free Pro trial.</h1>
          <p class="lead">
            Complete the request and we will send you access to evaluate Pro features,
            examples, and advanced modules in your product workflow.
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
            subtitle="No credit card required. Tell us where RevoGrid Pro will be evaluated."
            submit-label="Submit"
            success-title="Trial request received"
            success-message="We will send trial access details to your business email."
          />
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
import TrialRequestForm from './TrialRequestForm.vue'

const benefits = [
  'Pro examples with source code to get started',
  'React, Angular, Vue, and JavaScript integration guidance',
  'Pivot Grid, Gantt Chart, and advanced grid workflows',
  'Direct evaluation support for production use cases',
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
  font-weight: 800;
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
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.trial-copy {
  h1 {
    max-width: 11ch;
    margin: 0;
    color: var(--vp-c-text-1);
    font-size: clamp(3rem, 7vw, 5.25rem);
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
    font-weight: 700;
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
  font-weight: 800;
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
