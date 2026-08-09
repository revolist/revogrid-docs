<script setup lang="ts">
import ProAdvancedCallout from '../pro/ProAdvancedCallout.vue'

type GanttUseCase = {
  title: string
  eyebrow: string
  description: string
  question: string
  image: string
  articleHref: string
  articleLabel: string
  liveHref: string
  tone: string
}

const useCases: GanttUseCase[] = [
  {
    title: 'ERP production control',
    eyebrow: 'ERP',
    description: 'Bring work orders, shop-floor status, dependencies, baselines, and customer delivery commitments into the operational screen planners already use.',
    question: 'Which work order needs attention before the delivery promise moves?',
    image: '/img/gantt-use-cases/erp.webp?v=20260808-polished',
    articleHref: '/gantt/erp-gantt',
    articleLabel: 'Read the ERP guide',
    liveHref: 'https://gantt.rv-grid.com/?use-case=industry-erp',
    tone: 'erp',
  },
  {
    title: 'Professional services delivery',
    eyebrow: 'PSA',
    description: 'Connect client phases, consultants, commercial context, milestones, and delivery capacity without replacing the PSA or finance system.',
    question: 'Where should the team resolve a staffing conflict before the client feels it?',
    image: '/img/gantt-use-cases/professional-services.webp?v=20260808-polished',
    articleHref: '/gantt/professional-services-gantt',
    articleLabel: 'Read the services guide',
    liveHref: 'https://gantt.rv-grid.com/?use-case=industry-professional-services',
    tone: 'services',
  },
  {
    title: 'Construction field coordination',
    eyebrow: 'Construction',
    description: 'Coordinate work packages, crews, suppliers, inspections, and handoffs with a schedule connected to live project records.',
    question: 'Will the next trade, delivery, and inspection be ready for one another?',
    image: '/img/gantt-use-cases/construction.webp?v=20260808-exact',
    articleHref: '/gantt/construction-gantt',
    articleLabel: 'Read the construction guide',
    liveHref: 'https://gantt.rv-grid.com/?use-case=industry-construction',
    tone: 'construction',
  },
  {
    title: 'Manufacturing scheduling',
    eyebrow: 'Manufacturing',
    description: 'Schedule production orders, machines, materials, changeovers, quality gates, and shipment commitments on one editable surface.',
    question: 'Which constraint is exposing the release and customer shipment?',
    image: '/img/gantt-use-cases/manufacturing.webp?v=20260808-polished',
    articleHref: '/gantt/manufacturing-gantt',
    articleLabel: 'Read the manufacturing guide',
    liveHref: 'https://gantt.rv-grid.com/?use-case=industry-manufacturing',
    tone: 'manufacturing',
  },
  {
    title: 'Resource and capacity planning',
    eyebrow: 'Resource planning',
    description: 'Show assignments, allocation units, calendars, shared facilities, and downstream commitments without turning a warning into a judgment about a person.',
    question: 'Which overlap needs a planning conversation, and what depends on it?',
    image: '/img/gantt-use-cases/resource-planning.webp?v=20260808-polished',
    articleHref: '/gantt/resource-planning',
    articleLabel: 'Read the capacity guide',
    liveHref: 'https://gantt.rv-grid.com/?use-case=industry-resource-planning',
    tone: 'resources',
  },
  {
    title: 'Internal operations tools',
    eyebrow: 'Internal tools',
    description: 'Create a shared readiness plan across engineering, finance, security, support, onboarding, and marketing while each connected system stays authoritative.',
    question: 'Which approval or handoff is holding the shared outcome?',
    image: '/img/gantt-use-cases/internal-tools.webp?v=20260808-polished',
    articleHref: '/gantt/internal-tools-gantt',
    articleLabel: 'Read the internal-tools guide',
    liveHref: 'https://gantt.rv-grid.com/?use-case=industry-internal-tools',
    tone: 'internal',
  },
]
</script>

<template>
  <main class="gantt-use-cases-page">
    <section class="use-cases-hero">
      <div class="use-cases-shell use-cases-hero__layout">
        <div>
          <a class="back-link" href="/gantt">← RevoGrid Gantt</a>
          <p class="eyebrow">Embedded planning use cases</p>
          <h1>Put the plan where people do the work.</h1>
          <p class="hero-copy">
            These are production-shaped RevoGrid Gantt examples, not conceptual mockups. Each one keeps operational context beside the timeline so people can understand a constraint, discuss the tradeoff, and act from a shared plan.
          </p>
          <div class="hero-actions">
            <a class="button button--primary" href="#industry-use-cases">Explore six workflows</a>
            <a class="button button--secondary" href="/gantt/benefits-of-gantt-chart">Why a shared visual plan helps</a>
          </div>
        </div>
        <aside class="hero-principle" aria-label="Use-case design principle">
          <span>One planning surface</span>
          <strong>Operational data + time + dependencies</strong>
          <p>The host product keeps ownership of records, permissions, validation, and persistence. RevoGrid Gantt makes the schedule understandable and editable in context.</p>
        </aside>
      </div>
    </section>

    <section id="industry-use-cases" class="use-cases-library">
      <div class="use-cases-shell">
        <div class="section-heading">
          <p class="eyebrow">Real Gantt workflows</p>
          <h2>Six ways teams bring planning into their product.</h2>
          <p>Every preview below was captured from the real Gantt plugin with task hierarchy, dependencies, assignments, calendars, baselines, milestones, progress, and domain-specific fields.</p>
        </div>

        <div class="use-case-list">
          <article
            v-for="(item, index) in useCases"
            :key="item.title"
            :class="['use-case-panel', `use-case-panel--${item.tone}`]"
          >
            <div class="use-case-panel__media">
              <img
                :src="item.image"
                :alt="`${item.title} shown in a real RevoGrid Gantt workspace`"
                width="1200"
                height="675"
                loading="lazy"
                decoding="async"
              >
            </div>
            <div class="use-case-panel__copy">
              <span class="use-case-number">0{{ index + 1 }}</span>
              <p class="use-case-eyebrow">{{ item.eyebrow }}</p>
              <h2>{{ item.title }}</h2>
              <p>{{ item.description }}</p>
              <blockquote>{{ item.question }}</blockquote>
              <div class="use-case-actions">
                <a class="text-link text-link--primary" :href="item.articleHref">{{ item.articleLabel }} →</a>
                <a class="text-link" :href="item.liveHref" target="_blank" rel="noopener noreferrer">Open the interactive plan ↗</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="people-benefits">
      <div class="use-cases-shell">
        <div class="section-heading section-heading--compact">
          <p class="eyebrow">What changes for people</p>
          <h2>A schedule becomes useful when it improves the conversation.</h2>
        </div>
        <div class="benefit-grid">
          <article>
            <span>01</span>
            <h3>See the same commitment</h3>
            <p>Dates, owners, operational fields, and dependencies stay together, so teams spend less time rebuilding context across tabs and meetings.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Discuss a constraint early</h3>
            <p>A supplier delay, shared resource, approval, or missed handoff becomes a visible planning question before it turns into a private surprise.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Keep authority clear</h3>
            <p>The surrounding product still owns permissions, validation, source records, and accepted changes. The Gantt makes their timing impact understandable.</p>
          </article>
        </div>
      </div>
    </section>

    <ProAdvancedCallout
      title="RevoGrid Gantt is part of the Pro Advanced bundle."
      product-id="gantt"
    />
  </main>
</template>

<style scoped lang="scss">
.gantt-use-cases-page {
  --uc-ink: #111516;
  --uc-muted: #5f6968;
  --uc-line: #dfe5e3;
  --uc-surface: #f6f8f7;
  --uc-accent: #4f46d8;
  color: var(--uc-ink);
  background: var(--vp-c-bg);
}

:global(.Layout.gantt-use-cases-doc),
:global(.gantt-use-cases-doc .VPDoc .container),
:global(.gantt-use-cases-doc .VPDoc .content),
:global(.gantt-use-cases-doc .VPDoc .content-container) {
  width: 100%;
  max-width: none !important;
}

:global(.gantt-use-cases-doc .VPDoc) {
  padding-top: 0 !important;
}

.use-cases-shell {
  width: min(1200px, calc(100% - 48px));
  margin: 0 auto;
}

.use-cases-hero {
  padding: 92px 0 82px;
  border-bottom: 1px solid var(--uc-line);
  background:
    radial-gradient(circle at 82% 20%, rgba(79, 70, 216, .12), transparent 27%),
    linear-gradient(145deg, #fbfcfc 0%, #f4f7f6 70%, #f8f6ff 100%);
}

.use-cases-hero__layout {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(320px, .65fr);
  gap: 72px;
  align-items: end;
}

.back-link,
.text-link {
  color: inherit;
  font-weight: 700;
  text-decoration: none;
}

.back-link {
  display: inline-flex;
  margin-bottom: 56px;
  color: var(--uc-muted);
  font-size: 14px;
}

.back-link:hover,
.text-link:hover { text-decoration: underline; text-underline-offset: 4px; }

.eyebrow,
.use-case-eyebrow {
  margin: 0 0 12px;
  color: var(--uc-accent);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: .1em;
  text-transform: uppercase;
}

.use-cases-hero h1 {
  max-width: 900px;
  margin: 0;
  font-size: clamp(52px, 7vw, 100px);
  font-weight: 500;
  line-height: .98;
  letter-spacing: -.055em;
}

.hero-copy {
  max-width: 820px;
  margin: 28px 0 0;
  color: var(--uc-muted);
  font-size: clamp(18px, 2vw, 24px);
  line-height: 1.55;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 20px;
  border: 1px solid var(--uc-ink);
  border-radius: 10px;
  font-size: 14px;
  font-weight: 750;
  text-decoration: none;
}

.button--primary { color: #fff; background: var(--uc-ink); }
.button--secondary { color: var(--uc-ink); background: rgba(255,255,255,.72); }
.button:hover { transform: translateY(-1px); }

.hero-principle {
  padding: 28px;
  border: 1px solid rgba(79, 70, 216, .24);
  border-radius: 18px;
  background: rgba(255,255,255,.72);
  box-shadow: 0 18px 50px rgba(23, 30, 29, .08);
}

.hero-principle span { color: var(--uc-accent); font-size: 12px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
.hero-principle strong { display: block; margin: 10px 0 12px; font-size: 23px; line-height: 1.25; }
.hero-principle p { margin: 0; color: var(--uc-muted); font-size: 14px; line-height: 1.7; }

.use-cases-library { padding: 96px 0 112px; }

.section-heading { max-width: 850px; margin-bottom: 52px; }
.section-heading--compact { margin-bottom: 38px; }
.section-heading h2 { margin: 0; font-size: clamp(38px, 5vw, 66px); font-weight: 520; line-height: 1.05; letter-spacing: -.04em; }
.section-heading > p:last-child { margin: 20px 0 0; color: var(--uc-muted); font-size: 17px; line-height: 1.65; }

.use-case-list { display: grid; gap: 28px; }

.use-case-panel {
  --case-accent: #4f46d8;
  display: grid;
  grid-template-columns: minmax(0, 1.42fr) minmax(330px, .58fr);
  min-height: 470px;
  overflow: hidden;
  border: 1px solid var(--uc-line);
  border-radius: 22px;
  background: #fff;
  box-shadow: 0 18px 52px rgba(15, 23, 42, .06);
}

.use-case-panel--services { --case-accent: #147d87; }
.use-case-panel--construction { --case-accent: #d4662d; }
.use-case-panel--manufacturing { --case-accent: #087ea4; }
.use-case-panel--resources { --case-accent: #2b7a55; }
.use-case-panel--internal { --case-accent: #a23a6d; }

.use-case-panel:nth-child(even) {
  grid-template-columns: minmax(330px, .58fr) minmax(0, 1.42fr);
}

.use-case-panel:nth-child(even) .use-case-panel__media { order: 2; }

.use-case-panel__media {
  position: relative;
  min-width: 0;
  overflow: hidden;
  background: #eef2f1;
}

.use-case-panel__media img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.use-case-panel__copy {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px;
  border-top: 5px solid var(--case-accent);
}

.use-case-number { position: absolute; top: 24px; right: 26px; color: #b8c0be; font-size: 13px; font-weight: 800; }
.use-case-eyebrow { color: var(--case-accent); }
.use-case-panel__copy h2 {
  margin: 0 0 16px;
  font-size: clamp(27px, 2.5vw, 38px);
  line-height: 1.08;
  letter-spacing: -.035em;
  overflow-wrap: normal;
  word-break: normal;
}
.use-case-panel__copy > p { margin: 0; color: var(--uc-muted); font-size: 15px; line-height: 1.65; }
.use-case-panel blockquote { margin: 26px 0 0; padding: 0 0 0 16px; border-left: 3px solid var(--case-accent); color: var(--uc-ink); font-size: 16px; font-weight: 700; line-height: 1.5; }
.use-case-actions { display: flex; flex-wrap: wrap; gap: 18px; margin-top: 28px; }
.text-link { color: var(--uc-muted); font-size: 13px; }
.text-link--primary { color: var(--case-accent); }

.people-benefits { padding: 98px 0; border-top: 1px solid var(--uc-line); background: var(--uc-surface); }
.benefit-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border: 1px solid var(--uc-line); border-radius: 18px; overflow: hidden; background: #fff; }
.benefit-grid article { padding: 34px; }
.benefit-grid article + article { border-left: 1px solid var(--uc-line); }
.benefit-grid span { color: var(--uc-accent); font-size: 12px; font-weight: 800; }
.benefit-grid h3 { margin: 22px 0 10px; font-size: 21px; }
.benefit-grid p { margin: 0; color: var(--uc-muted); font-size: 14px; line-height: 1.65; }

.button:focus-visible,
.back-link:focus-visible,
.text-link:focus-visible { outline: 3px solid var(--uc-accent); outline-offset: 4px; }

:global(.dark .gantt-use-cases-page) {
  --uc-ink: #f3f6f5;
  --uc-muted: #adb7b5;
  --uc-line: #313a38;
  --uc-surface: #151a19;
  background: #101413;
}

:global(.dark .use-cases-hero) {
  background: radial-gradient(circle at 82% 20%, rgba(119, 107, 255, .18), transparent 30%), #111615;
}

:global(.dark .hero-principle),
:global(.dark .use-case-panel),
:global(.dark .benefit-grid) { background: #181e1d; }

:global(.dark .button--primary) { color: #111; background: #fff; }
:global(.dark .button--secondary) { color: #fff; background: transparent; border-color: #6e7876; }

@media (prefers-color-scheme: dark) {
  .gantt-use-cases-page { --uc-ink: #f3f6f5; --uc-muted: #adb7b5; --uc-line: #313a38; --uc-surface: #151a19; background: #101413; }
  .use-cases-hero { background: radial-gradient(circle at 82% 20%, rgba(119, 107, 255, .18), transparent 30%), #111615; }
  .hero-principle,
  .use-case-panel,
  .benefit-grid { background: #181e1d; }
  .button--primary { color: #111; background: #fff; }
  .button--secondary { color: #fff; background: transparent; border-color: #6e7876; }
}

@media (max-width: 1400px) {
  .use-cases-hero {
    padding: 64px 0;
  }

  .use-cases-hero__layout {
    grid-template-columns: minmax(0, 1.25fr) minmax(320px, .75fr);
    gap: 48px;
  }

  .back-link {
    margin-bottom: 36px;
  }

  .use-cases-hero h1 {
    font-size: clamp(52px, 6vw, 76px);
  }

  .hero-copy {
    font-size: clamp(18px, 1.7vw, 21px);
  }

  .hero-principle {
    padding: 24px;
  }
}

@media (max-width: 980px) {
  .use-cases-hero__layout,
  .use-case-panel,
  .use-case-panel:nth-child(even) { grid-template-columns: 1fr; }
  .use-case-panel:nth-child(even) .use-case-panel__media { order: 0; }
  .use-case-panel__media { aspect-ratio: 16 / 9; }
}

@media (max-width: 700px) {
  .use-cases-shell { width: min(1200px, calc(100% - 30px)); }
  .use-cases-hero { padding: 58px 0 60px; }
  .back-link { margin-bottom: 36px; }
  .use-cases-hero h1 { font-size: 51px; }
  .use-cases-hero__layout { gap: 40px; }
  .use-cases-library,
  .people-benefits { padding: 66px 0; }
  .use-case-panel__copy { padding: 36px 24px 32px; }
  .benefit-grid { grid-template-columns: 1fr; }
  .benefit-grid article + article { border-top: 1px solid var(--uc-line); border-left: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .button:hover { transform: none; }
}
</style>
