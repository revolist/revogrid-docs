<template>
  <main class="rg-home">
    <HomeHeroSection :hero="data.hero" />
    <HomeStatsTrust />
    <HomeDemoGallery v-if="data.demos" :section="data.demos" />
    <HomeCapabilities :section="data.capabilities" />
    <HomeDeveloperSection :section="data.developer" />
    <HomeNativeCells :section="data.nativeCells" />
    <HomeAdvancedModules :section="data.advanced" />
    <HomeUseCases v-if="data.useCases" :section="data.useCases" />
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
import HomeNativeCells from './home-v2/HomeNativeCells.vue'
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

.rg-home .rg-product-link {
  color: var(--rg-accent);
  font-weight: 600;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
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
  font-weight: 600;
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
    color: var(--rg-font-green);
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

.rg-section-soft {
  background: var(--rg-bg-2);
  border-top: 1px solid var(--rg-border);
  border-bottom: 1px solid var(--rg-border);
}

.rg-hero {
  padding: 80px 0 5px;
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
  color: var(--rg-font-green);
  border-radius: 999px;
  padding: 5px 12px;
  font-size: 12px;
  font-weight: 600;
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
  letter-spacing: -0.02em;
  margin: 0 0 20px;

  em {
    color: var(--rg-font-green);
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

.rg-hero-install {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  max-width: 100%;
  margin-top: 30px;
  padding: 7px 8px 7px 12px;
  border: 1px solid var(--rg-border);
  border-radius: 8px;
  background: var(--rg-bg-2);
}

.rg-hero-install code {
  color: var(--rg-text);
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
  line-height: 1.3;
  white-space: nowrap;
}

.rg-hero-install button {
  flex: 0 0 auto;
  border: 1px solid var(--rg-border);
  border-radius: 6px;
  background: var(--rg-bg-3);
  color: var(--rg-text-2);
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
  padding: 7px 9px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  cursor: pointer;
}

.rg-hero-install button:hover {
  color: var(--rg-text);
  border-color: var(--rg-accent);
}

.rg-browser,
.rg-code-panel {
  min-width: 0;
  border: 1px solid var(--rg-border-hover);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--rg-shadow);
  background: var(--rg-bg);
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
  color: var(--rg-text);
  border-radius: 6px;
  padding: 0 8px;
  font-size: 9px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-weight: 600;

  &:before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--rg-green);
    margin-right: 6px;
  }
}

.rg-grid-wrap {
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  contain: paint;
}

.rg-grid {
  $h: 460px;
  display: block;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  height: $h;
  min-height: $h;
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
  background: var(--rg-bg-3);
  color: var(--rg-text);
  font-family: var(--vp-font-family-mono);
  font-size: 11px;
  font-weight: 600;
  max-height: 22px;
}

.ticker-chip.up {
  background: var(--rg-green);
}

.ticker-chip.down {
  background: var(--vp-c-danger-3);
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
  background: var(--vp-c-danger-2);
}

.spark-bar.up {
  background: var(--rg-green);
}

.num {
  font-family: var(--vp-font-family-mono);
  font-size: 12px;
}

.perf-up,
.perf-dn {
  font-weight: 600;
  font-size: 12px;
}

.perf-up { color: var(--rg-font-green); }
.perf-dn { color: #f87171; }

.rg-proof {
  background: transparent;
  padding: 24px 0;
}

.rg-proof-inner {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  flex-wrap: wrap;
}

.rg-proof-card {
  display: flex;
  min-height: 48px;
  border: 1px solid var(--rg-border);
  border-radius: 10px;
  background: var(--rg-bg);
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);
}

.rg-proof-fortune {
  flex-direction: column;
  gap: 6px;
  min-width: 80px;
  min-height: 54px;
  padding: 10px 0;
  border: 0;
  box-shadow: none;
  color: #050505;
  text-transform: uppercase;
  letter-spacing: 0;
}

.rg-fortune-word {
  border: 0;
  padding: 0;
  color: var(--rg-text-2);
  font-size: 13px;
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: 0.16em;
}

.rg-fortune-num {
  color: var(--rg-text);
  font-size: 34px;
  font-weight: 900;
  line-height: 0.86;
  letter-spacing: -0.04em;
}

.rg-proof-copy {
  max-width: 520px;
  color: var(--rg-text-2);
  font-size: 15px;
  line-height: 1.6;
  margin: 0;
}

.dark .rg-proof-copy {
  color: rgba(245, 245, 245, 0.78);
}

.rg-section-header {
  text-align: center;
  margin-bottom: 56px;
}

.rg-section-label {
  color: var(--rg-font-green);
  font-size: 11px;
  font-weight: 600;
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
  color: inherit;
  text-decoration: none;
}

.rg-module-card:hover,
.rg-usecase-card:hover {
  border-color: var(--rg-border-hover);
}

.rg-cap-card:hover {
  background: var(--rg-bg-2);
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
  background: var(--rg-bg);
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
  color: var(--rg-font-green);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--vp-font-family-mono);
  font-size: 12px;
  font-weight: 600;
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
    margin-bottom: 4px;
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
    font-weight: 600;
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
      color: var(--rg-font-green);
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
    $h: 360px;
    height: $h;
    min-height: $h;
  }

  .rg-proof-card {
    width: 100%;
    min-width: 0;
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
