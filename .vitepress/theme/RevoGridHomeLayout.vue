<template>
  <main class="rg-home">
    <HomeHeroSection :hero="data.hero" />
    <HomeStatsTrust :stats="data.stats" :trust-text="data.trustText" :badges="data.trustBadges" />
    <HomeDemoGallery :section="data.demos" />
    <HomeCapabilities :section="data.capabilities" />
    <HomeDeveloperSection :section="data.developer" />
    <HomeAdvancedModules :section="data.advanced" />
    <HomeUseCases :section="data.useCases" />
    <HomeComparison :section="data.comparison" />
    <HomeFaq :section="data.faq" />
    <HomeFinalCta :section="data.finalCta" />

    <Content class="rg-home-formatted" />
  </main>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import HomeAdvancedModules from './home-v2/HomeAdvancedModules.vue'
import HomeCapabilities from './home-v2/HomeCapabilities.vue'
import HomeComparison from './home-v2/HomeComparison.vue'
import HomeDemoGallery from './home-v2/HomeDemoGallery.vue'
import HomeDeveloperSection from './home-v2/HomeDeveloperSection.vue'
import HomeFaq from './home-v2/HomeFaq.vue'
import HomeFinalCta from './home-v2/HomeFinalCta.vue'
import HomeHeroSection from './home-v2/HomeHeroSection.vue'
import HomeStatsTrust from './home-v2/HomeStatsTrust.vue'
import HomeUseCases from './home-v2/HomeUseCases.vue'

type AnyRecord = Record<string, any>

const { frontmatter } = useData()
const data = computed<AnyRecord>(() => frontmatter.value as AnyRecord)
</script>

<style lang="scss">
.rg-home {
  background: var(--rg-bg);
  color: var(--rg-text);
  min-height: 100vh;
  overflow-x: hidden;
}

.rg-top-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: color-mix(in srgb, var(--rg-bg) 86%, transparent);
  border-bottom: 1px solid var(--rg-border);
  backdrop-filter: blur(16px);
}

.rg-nav-inner {
  max-width: 1200px;
  height: 60px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 32px;
}

.rg-logo {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: var(--rg-text);
  font-weight: 800;
  font-size: 18px;
  text-decoration: none;
}

.rg-logo-mark {
  width: 28px;
  height: 28px;
  border-radius: 7px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--rg-green);
  color: #000;
  font-size: 14px;
  font-weight: 900;
}

.rg-nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
  list-style: none;
  margin: 0;
  padding: 0;

  a {
    display: inline-flex;
    color: var(--rg-text-2);
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    padding: 6px 10px;
    border-radius: 6px;
  }

  a:hover {
    color: var(--rg-text);
    background: var(--rg-bg-3);
  }

  .rg-pro-link {
    color: var(--rg-green);
  }
}

.rg-nav-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.rg-nav-icon {
  width: 36px;
  height: 36px;
  border: 1px solid var(--rg-border);
  border-radius: 8px;
  background: var(--rg-bg-2);
  color: var(--rg-text-2);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
}

.rg-home .rgHeaderCell,
.rg-home .rgCell {
  padding-left: 9px;
  padding-right: 9px;
}

.rg-home revogr-viewport-scroll.colPinStart  .rgCell {
  overflow: hidden;
  text-overflow: inherit;
}

.rg-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.rg-section {
  padding: 88px 0;
}

.rg-section-soft,
.rg-dev-section {
  background: var(--rg-bg-2);
  border-top: 1px solid var(--rg-border);
  border-bottom: 1px solid var(--rg-border);
}

.rg-hero {
  padding: 80px 0 72px;
  overflow: hidden;
}

.rg-hero-grid,
.rg-dev-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 64px;
  align-items: center;
}

.rg-badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: var(--rg-green-bg);
  border: 1px solid var(--rg-green-border);
  color: var(--rg-green);
  border-radius: 999px;
  padding: 5px 12px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 24px;
}

.rg-badge-dot,
.rg-perf-badge span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--rg-green);
}

.rg-hero-title {
  font-size: clamp(38px, 4.5vw, 58px);
  line-height: 1.08;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 20px;

  em {
    color: var(--rg-green);
    font-style: normal;
  }
}

.rg-hero-sub,
.rg-section-desc,
.rg-dev-desc {
  color: var(--rg-text-2);
  line-height: 1.65;
  font-size: 17px;
}

.rg-hero-sub {
  max-width: 500px;
  margin: 0 0 34px;
}

.rg-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.rg-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  border-radius: 8px;
  padding: 11px 20px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: border-color 0.18s, background 0.18s, opacity 0.18s, transform 0.18s;
  white-space: nowrap;
}

.rg-btn:hover {
  transform: translateY(-1px);
}

.rg-btn-primary {
  background: var(--rg-green);
  color: #000;
}

.rg-btn-secondary {
  background: var(--rg-bg-2);
  color: var(--rg-text);
  border: 1px solid var(--rg-border);
}

.rg-btn-secondary:hover {
  background: var(--rg-bg-3);
  border-color: var(--rg-border-hover);
}

.rg-btn-ghost {
  color: var(--rg-text-2);
  background: transparent;
  padding-inline: 12px;
}

.rg-play {
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 8px solid currentColor;
}

.rg-frameworks {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 30px;
}

.rg-frameworks-label,
.rg-stat-label {
  color: var(--rg-text-3);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.07em;
}

.rg-framework {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 3px 10px;
  border-radius: 6px;
  border: 1px solid var(--rg-border);
  background: var(--rg-bg-2);
  text-decoration: none;
  font-size: 12px;
}

.rg-framework-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
}

.rg-browser,
.rg-code-panel {
  min-width: 0;
  border: 1px solid var(--rg-border);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--rg-shadow);
  background: var(--rg-bg-2);
}

.rg-browser-bar,
.rg-code-topbar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: var(--rg-bg-3);
  border-bottom: 1px solid var(--rg-border);
}

.rg-browser-dots {
  display: flex;
  gap: 5px;

  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255,255,255,0.18);
  }
}

.rg-browser-url {
  flex: 1;
  min-width: 0;
  padding: 4px 10px;
  border: 1px solid var(--rg-border);
  border-radius: 5px;
  background: var(--rg-bg-4);
  color: var(--rg-text-3);
  font-family: var(--vp-font-family-mono);
  font-size: 11px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.rg-live,
.rg-module-tag {
  background: var(--rg-green-bg);
  border: 1px solid var(--rg-green-border);
  color: var(--rg-green);
  border-radius: 4px;
  padding: 0 8px;
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.rg-grid-wrap {
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  contain: paint;
}

.rg-grid {
  display: block;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  height: 330px;
  min-height: 330px;
  border: 0;
}

.rg-perf-badge {
  position: absolute;
  right: 12px;
  bottom: 12px;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 5px 12px;
  border: 1px solid var(--rg-border);
  border-radius: 8px;
  background: var(--rg-bg-3);
  color: var(--rg-text-2);
  font-family: var(--vp-font-family-mono);
  font-size: 11px;
  z-index: 1;
}

.ticker-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  border-radius: 4px;
  padding: 2px 7px;
  border: 1px solid var(--rg-border);
  background: var(--rg-bg-3);
  color: var(--rg-text);
  font-family: var(--vp-font-family-mono);
  font-size: 11px;
  font-weight: 800;
  max-height: 22px;
}

.ticker-chip.up {
  border-color: var(--rg-green-border);
  background: var(--rg-green-bg);
}

.ticker-chip.down {
  border-color: rgba(248, 113, 113, 0.25);
  background: rgba(248, 113, 113, 0.08);
}

.sparkline {
  display: inline-flex;
  align-items: flex-end;
  gap: 1.5px;
  width: 40px;
  height: 20px;
}

.spark-bar {
  width: 5.5px;
  min-height: 5px;
  border-radius: 2px;
  background: #3b82f6;
  opacity: 0.72;
}

.spark-bar.up {
  background: var(--rg-green);
  opacity: 0.9;
}

.num {
  font-family: var(--vp-font-family-mono);
  font-size: 12px;
}

.perf-up,
.perf-dn {
  font-weight: 800;
  font-size: 12px;
}

.perf-up { color: var(--rg-green); }
.perf-dn { color: #f87171; }

.rg-stats,
.rg-trust {
  border-top: 1px solid var(--rg-border);
  background: var(--rg-bg-2);
}

.rg-stats {
  padding: 32px 0;
}

.rg-stats-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}

.rg-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: inherit;
  text-decoration: none;
}

.rg-stat-num {
  color: var(--rg-text);
  font-size: 28px;
  font-weight: 800;
  line-height: 1.1;
}

.rg-stat-divider {
  width: 1px;
  height: 40px;
  background: var(--rg-border);
}

.rg-trust-copy {
  flex: 1;
  min-width: 220px;
  color: var(--rg-text-3);
  font-size: 13px;
  text-align: center;
  margin: 0;
}

.rg-trust {
  padding: 48px 0;
  background: var(--rg-bg);
}

.rg-badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.rg-trust-badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 4px 12px;
  border: 1px solid var(--rg-border);
  border-radius: 8px;
  background: var(--rg-bg-2);
  font-size: 13px;

  span {
    color: var(--rg-green);
  }
}

.rg-section-header {
  text-align: center;
  margin-bottom: 56px;
}

.rg-section-label {
  color: var(--rg-green);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 12px;

  &.rg-left {
    text-align: left;
  }
}

.rg-section-title,
.rg-dev-title,
.rg-final-cta h2 {
  color: var(--rg-text);
  font-size: clamp(26px, 3vw, 38px);
  line-height: 1.14;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 14px;
}

.rg-section-desc {
  max-width: 560px;
  margin: 0 auto;
}

.rg-usecases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 14px;
}

.rg-cap-card,
.rg-module-card,
.rg-usecase-card {
  border: 1px solid var(--rg-border);
  border-radius: 16px;
  background: var(--rg-bg-2);
  color: inherit;
  text-decoration: none;
}

.rg-module-card:hover,
.rg-usecase-card:hover,
.rg-cap-card:hover {
  border-color: var(--rg-border-hover);
}

.rg-module-preview {
  height: 112px;
  background: var(--rg-bg-3);
  border-bottom: 1px solid var(--rg-border);
  overflow: hidden;
}

.gantt-mini {
  background: var(--rg-bg);
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px;
  font-family: var(--vp-font-family-mono);
  color: var(--rg-text-2);
  font-size: 10px;
}

.rg-caps-grid,
.rg-modules-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  border-radius: 16px;
  overflow: hidden;
}

.rg-caps-grid {
  gap: 2px;
  border: 1px solid var(--rg-border);
}

.rg-cap-card,
.rg-module-card,
.rg-usecase-card {
  border-radius: 0;
  border: 0;
  padding: 28px;

  h3 {
    color: var(--rg-text);
    font-size: 16px;
    margin: 0 0 8px;
  }

  p {
    color: var(--rg-text-2);
    font-size: 14px;
    line-height: 1.55;
    margin: 0;
  }
}

.rg-icon,
.rg-usecase-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid var(--rg-border);
  background: var(--rg-bg-2);
  color: var(--rg-green);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--vp-font-family-mono);
  font-size: 12px;
  font-weight: 800;
  margin-bottom: 16px;
}

.rg-dev-grid {
  align-items: start;
}

.rg-dev-title {
  max-width: 430px;
  white-space: pre-line;
}

.rg-dev-desc {
  margin: 0 0 28px;
}

.rg-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 18px;
}

.rg-tab {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  min-height: 30px;
  border: 1px solid var(--rg-border);
  border-radius: 6px;
  background: var(--rg-bg-2);
  color: var(--rg-text-2);
  cursor: pointer;
  padding: 4px 12px;
  font-size: 13px;
  font-weight: 500;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.04);

  &.active {
    background: var(--rg-green);
    color: #000;
    border-color: var(--rg-green);
  }
}

.rg-tab-icon {
  display: block;
  width: 16px;
  height: 16px;
  flex: 0 0 16px;
}

.rg-code-panel {
  background: #19192b;
  color: #d6deff;
  border-color: rgba(25, 25, 43, 0.9);
  border-radius: 16px;

  .rg-code-scroll {
    overflow: auto;
  }

  .shiki {
    background: transparent !important;
  }

  pre,
  code {
    font-family: var(--vp-font-family-mono);
  }

  pre {
    margin: 0;
    padding: 22px;
    overflow: auto;
    font-size: 13px;
    line-height: 1.7;
    background: transparent !important;
  }
}

.rg-code-topbar {
  background: #242439;
  color: rgba(214, 222, 255, 0.38);
  font-family: var(--vp-font-family-mono);
  font-size: 11px;

  span:nth-child(2) {
    flex: 1;
  }

  button {
    background: transparent;
    border: 0;
    color: rgba(214, 222, 255, 0.46);
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    letter-spacing: 0;
  }
}

.rg-module-card {
  display: block;
  border: 1px solid var(--rg-border);
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  background: var(--rg-bg-2);
  color: inherit;
  text-decoration: none;

  .rg-module-tag {
    display: inline-flex;
    margin-bottom: 14px;
  }
}

.rg-module-preview {
  height: 88px;
  margin-top: 18px;
  border: 1px solid var(--rg-border);
  border-radius: 8px;
}

.gantt-row {
  display: grid;
  grid-template-columns: 34px 1fr;
  align-items: center;
  gap: 8px;

  i {
    height: 9px;
    position: relative;
    display: block;
    border-radius: 3px;
    background: var(--rg-bg-4);
  }

  b {
    position: absolute;
    top: 0;
    bottom: 0;
    border-radius: inherit;
    background: var(--rg-green);
  }
}

.rg-centered-action {
  text-align: center;
  margin-top: 36px;
}

.rg-usecases-grid {
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
}

.rg-usecase-card {
  border: 1px solid var(--rg-border);
  border-radius: 16px;
  background: var(--rg-bg-2);
  padding: 24px;
}

.rg-usecase-icon {
  width: 36px;
  height: 36px;
  margin-bottom: 14px;
  background: var(--rg-bg-3);
}

.rg-comparison-wrap {
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
}

.rg-comparison {
  width: 100%;
  min-width: 760px;
  border-collapse: collapse;
  font-size: 14px;

  th,
  td {
    border-bottom: 1px solid var(--rg-border);
    padding: 13px 18px;
    text-align: center;
  }

  th:first-child,
  td:first-child {
    text-align: left;
  }

  th {
    color: var(--rg-text);
    font-size: 14px;
  }

  .highlight {
    background: var(--rg-green-bg);
  }

  .check {
    color: var(--rg-green);
    font-weight: 800;
  }

  .cross {
    color: #f87171;
  }

  .partial {
    color: #f59e0b;
  }
}

.rg-faq-list {
  max-width: 760px;
  margin: 0 auto;
}

.rg-faq-item {
  border-bottom: 1px solid var(--rg-border);

  button {
    width: 100%;
    background: transparent;
    border: 0;
    color: var(--rg-text);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    padding: 20px 0;
    font: inherit;
    font-size: 16px;
    font-weight: 800;
    text-align: left;
  }

  button span:last-child {
    color: var(--rg-text-3);
    font-size: 20px;
    transition: transform 0.18s;
  }

  p {
    display: none;
    color: var(--rg-text-2);
    line-height: 1.65;
    margin: 0;
    padding-bottom: 20px;
  }

  &.open {
    button span:last-child {
      color: var(--rg-green);
      transform: rotate(45deg);
    }

    p {
      display: block;
    }
  }
}

.rg-final-cta {
  background: var(--rg-bg-2);
  border-top: 1px solid var(--rg-border);
  text-align: center;
  padding: 88px 24px;

  h2 {
    max-width: 640px;
    margin-inline: auto;
  }

  p {
    color: var(--rg-text-2);
    font-size: 17px;
    max-width: 500px;
    line-height: 1.6;
    margin: 0 auto 32px;
  }

  small {
    display: block;
    color: var(--rg-text-3);
    margin-top: 28px;
  }
}

.rg-final-actions {
  justify-content: center;
}

.rg-home-formatted {
  display: none;
}

@media (max-width: 900px) {
  .rg-hero-grid,
  .rg-dev-grid {
    grid-template-columns: 1fr;
    gap: 42px;
  }

  .rg-caps-grid,
  .rg-modules-grid {
    grid-template-columns: 1fr;
  }

  .rg-nav-links {
    display: none;
  }
}

@media (max-width: 640px) {
  .rg-hero {
    padding-top: 52px;
  }

  .rg-section {
    padding: 64px 0;
  }

  .rg-hero-visual {
    min-width: 0;
    width: 100%;
    margin: 0;
  }

  .rg-browser {
    border-radius: 10px;
  }

  .rg-browser-url {
    max-width: 150px;
  }

  .rg-grid {
    height: 360px;
    min-height: 360px;
  }

  .rg-stats-inner {
    justify-content: center;
  }

  .rg-stat-divider {
    display: none;
  }

  .rg-comparison {
    min-width: 0;
    font-size: 11px;

    th,
    td {
      padding: 10px 7px;
      overflow-wrap: anywhere;
    }
  }

  .rg-btn {
    width: 100%;
  }

  .rg-actions {
    width: 100%;
  }
}
</style>
