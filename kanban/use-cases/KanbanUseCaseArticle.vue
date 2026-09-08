<script setup lang="ts">
defineProps<{
  theme: string
  eyebrow: string
  title: string
  introduction: string
  problemTitle: string
  problem: string
  benefits: Array<{ title: string, description: string }>
  details: Array<{ label: string, value: string }>
}>()
</script>

<template>
  <main :class="`kanban-story kanban-story--${theme}`">
    <header class="kanban-story__hero">
      <a class="kanban-story__back" href="/kanban">← RevoGrid Kanban</a>
      <div class="kanban-story__eyebrow">{{ eyebrow }}</div>
      <h1>{{ title }}</h1>
      <p>{{ introduction }}</p>
    </header>

    <section class="kanban-story__board" aria-label="Interactive Kanban board">
      <ClientOnly>
        <slot />
      </ClientOnly>
    </section>

    <div class="kanban-story__content">
      <section class="kanban-story__problem">
        <div class="kanban-story__section-kicker">The customer problem</div>
        <h2>{{ problemTitle }}</h2>
        <p>{{ problem }}</p>
      </section>

      <aside class="kanban-story__details" aria-label="What this board keeps visible">
        <div v-for="item in details" :key="item.label">
          <span>{{ item.label }}</span>
          <strong>{{ item.value }}</strong>
        </div>
      </aside>

      <section class="kanban-story__benefits">
        <div class="kanban-story__section-kicker">What gets easier</div>
        <h2>A workflow people can understand at a glance.</h2>
        <div class="kanban-story__benefit-grid">
          <article v-for="benefit in benefits" :key="benefit.title">
            <h3>{{ benefit.title }}</h3>
            <p>{{ benefit.description }}</p>
          </article>
        </div>
      </section>

      <footer class="kanban-story__footer">
        <div>
          <div class="kanban-story__section-kicker">Try it with your workflow</div>
          <h2>Bring one real process and test the decisions that matter.</h2>
        </div>
        <div class="kanban-story__actions">
          <a href="/trial">Start a Pro Advanced trial</a>
          <a class="kanban-story__secondary" href="/kanban">Back to Kanban</a>
        </div>
      </footer>
    </div>
  </main>
</template>

<style>
.kanban-use-case-page .VPDoc { padding: 0 !important; }
.kanban-use-case-page .VPDoc .container,
.kanban-use-case-page .VPDoc .content,
.kanban-use-case-page .VPDoc .content-container { max-width: none !important; padding: 0 !important; }
.kanban-use-case-page .vp-doc > div { margin: 0 !important; }

.kanban-story {
  --story-accent: #5b73e8;
  --story-hero: #f7f8fb;
  --story-hero-text: #111827;
  --story-hero-muted: #5f6b7a;
  --story-border: #dde2e9;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
}
.kanban-story__hero {
  box-sizing: border-box;
  min-height: 320px;
  padding: 72px max(28px, calc((100vw - 1180px) / 2));
  border-bottom: 1px solid var(--story-border);
  color: var(--story-hero-text);
  background: var(--story-hero);
}
.kanban-story__back {
  display: inline-block;
  margin-bottom: 48px;
  color: inherit;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  opacity: 0.72;
}
.kanban-story__eyebrow,
.kanban-story__section-kicker {
  color: var(--story-accent);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.kanban-story__hero h1 {
  max-width: 900px;
  margin: 10px 0 16px;
  color: inherit;
  font-size: clamp(42px, 6vw, 76px);
  line-height: 0.98;
  letter-spacing: -0.055em;
}
.kanban-story__hero p {
  max-width: 780px;
  margin: 0;
  color: var(--story-hero-muted);
  font-size: clamp(17px, 2vw, 22px);
  line-height: 1.55;
}
.kanban-story__board { height: min(760px, calc(100vh - 72px)); min-height: 650px; border-bottom: 1px solid var(--story-border); }
.kanban-story__board > * { min-height: 0 !important; }
.kanban-story__content {
  display: grid;
  max-width: 1180px;
  grid-template-columns: minmax(0, 1.45fr) minmax(300px, 0.65fr);
  gap: 76px 64px;
  margin: 0 auto;
  padding: 96px 28px 112px;
}
.kanban-story__problem h2,
.kanban-story__benefits > h2,
.kanban-story__footer h2 {
  margin: 12px 0 18px;
  color: var(--vp-c-text-1);
  font-size: clamp(30px, 4vw, 48px);
  line-height: 1.06;
  letter-spacing: -0.04em;
}
.kanban-story__problem > p {
  max-width: 720px;
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 18px;
  line-height: 1.75;
}
.kanban-story__details {
  align-self: start;
  overflow: hidden;
  border: 1px solid var(--story-border);
  border-radius: 16px;
}
.kanban-story__details div { padding: 18px 20px; border-bottom: 1px solid var(--story-border); }
.kanban-story__details div:last-child { border-bottom: 0; }
.kanban-story__details span { display: block; color: var(--vp-c-text-3); font-size: 11px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; }
.kanban-story__details strong { display: block; margin-top: 5px; color: var(--vp-c-text-1); font-size: 15px; line-height: 1.45; }
.kanban-story__benefits { grid-column: 1 / -1; }
.kanban-story__benefit-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; margin-top: 36px; }
.kanban-story__benefit-grid article { padding: 26px; border: 1px solid var(--story-border); border-radius: 16px; background: var(--vp-c-bg-soft); }
.kanban-story__benefit-grid h3 { margin: 0 0 10px; color: var(--vp-c-text-1); font-size: 17px; }
.kanban-story__benefit-grid p { margin: 0; color: var(--vp-c-text-2); font-size: 14px; line-height: 1.65; }
.kanban-story__footer {
  display: flex;
  grid-column: 1 / -1;
  align-items: end;
  justify-content: space-between;
  gap: 32px;
  padding-top: 64px;
  border-top: 1px solid var(--story-border);
}
.kanban-story__footer h2 { max-width: 720px; margin-bottom: 0; font-size: clamp(28px, 3vw, 40px); }
.kanban-story__actions { display: flex; flex: 0 0 auto; flex-direction: column; gap: 10px; }
.kanban-story__actions a { padding: 13px 18px; border: 1px solid var(--story-accent); border-radius: 8px; color: #fff; background: var(--story-accent); font-size: 13px; font-weight: 750; text-align: center; text-decoration: none; }
.kanban-story__actions .kanban-story__secondary { color: var(--story-accent); background: transparent; }

.kanban-story--product-delivery { --story-accent: #8b7cff; --story-hero: #0d122c; --story-hero-text: #f8f9ff; --story-hero-muted: #abb6d9; --story-border: #303a66; }
.kanban-story--support-operations { --story-accent: #047fbe; --story-hero: #058bd4; --story-hero-text: #fff; --story-hero-muted: #d7f4ff; --story-border: #52add9; }
.kanban-story--sales-onboarding { --story-accent: #7fa520; --story-hero: #10130e; --story-hero-text: #fbfff1; --story-hero-muted: #bdc5b1; --story-border: #343b2b; }
.kanban-story--content-approvals { --story-accent: #a23838; --story-hero: #faf2e8; --story-hero-text: #2b1b18; --story-hero-muted: #735f57; --story-border: #d9c8ba; }
.kanban-story--quality-manufacturing { --story-accent: #b67900; --story-hero: #202327; --story-hero-text: #f7f9fb; --story-hero-muted: #bdc4cc; --story-border: #484d54; }
.kanban-story--internal-workflows { --story-accent: #197c5a; --story-hero: #5f4d91; --story-hero-text: #fff; --story-hero-muted: #e3ddf4; --story-border: #9f92c6; }

@media (max-width: 760px) {
  .kanban-story__hero { min-height: 0; padding: 40px 22px 48px; }
  .kanban-story__back { margin-bottom: 34px; }
  .kanban-story__board { height: 680px; min-height: 620px; }
  .kanban-story__content { grid-template-columns: 1fr; gap: 48px; padding: 64px 22px 80px; }
  .kanban-story__benefits,
  .kanban-story__footer { grid-column: 1; }
  .kanban-story__benefit-grid { grid-template-columns: 1fr; }
  .kanban-story__footer { align-items: stretch; flex-direction: column; }
  .kanban-story__actions { width: 100%; }
}
</style>
