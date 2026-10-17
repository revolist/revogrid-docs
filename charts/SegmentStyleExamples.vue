<template>
  <section id="segment-styling" class="segment-examples section-width" aria-labelledby="segment-heading">
    <p class="eyebrow">Details that tell the story</p>
    <h2 id="segment-heading">Give individual moments their own style.</h2>
    <p class="intro">Highlight a turning point, flag an exception, or distinguish a forecast with styles for individual data points and line segments.</p>
    <div class="examples-grid">
      <article v-for="example in segmentStyleExamples" :key="example.id">
        <h3>{{ example.title }}</h3>
        <p>{{ example.description }}</p>
        <img class="preview-light" :src="withBase(`/charts/segments/${example.id}-light.svg`)" :alt="example.note" width="580" height="290" loading="lazy" />
        <img class="preview-dark" :src="withBase(`/charts/segments/${example.id}-dark.svg`)" :alt="example.note" width="580" height="290" loading="lazy" />
        <p class="caption">{{ example.note }}</p>
        <details>
          <summary>See the styling options</summary>
          <pre><code>{{ example.code }}</code></pre>
        </details>
      </article>
    </div>
    <p class="contract">Native SVG previews. Segment rules use the stable IDs of two adjacent finite data points, in source order. Marker styles belong to data points; segment styles control the stroke.</p>
    <a href="https://pro.rv-grid.com/guides/charts/tools/datum-styling/">Explore datum and segment styling →</a>
  </section>
</template>
<script setup lang="ts">
import { withBase } from 'vitepress'
import { segmentStyleExamples } from './segment-style-examples.mjs'
</script>
<style scoped>
.segment-examples { margin-block: 88px; }
h2 { max-width: 760px; font-size: clamp(28px, 3vw, 42px); line-height: 1.15; letter-spacing: -.03em; margin: 12px 0 20px; }
.intro { max-width: 720px; color: var(--vp-c-text-2); }
.examples-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; margin-top: 32px; align-items: start; }
article { border: 1px solid var(--vp-c-divider); border-radius: 20px; padding: 24px; min-width: 0; background: var(--vp-c-bg-soft); }
h3 { font-size: 21px; line-height: 1.3; margin: 0 0 12px; }
article p { color: var(--vp-c-text-2); line-height: 1.6; }
img { width: 100%; height: auto; margin-top: 16px; border-radius: 12px; }
.preview-dark { display: none; }
.dark .preview-light { display: none; }
.dark .preview-dark { display: block; }
.caption, .contract { font-size: 13px; }
.contract { margin-top: 24px; color: var(--vp-c-text-2); max-width: 850px; }
summary { cursor: pointer; padding-block: 14px; font-size: 14px; font-weight: 600; }
pre { overflow-x: auto; max-width: 100%; font-size: 12px; line-height: 1.7; padding: 16px; background: var(--vp-c-bg); border-radius: 10px; }
a { display: inline-block; color: var(--vp-c-brand-1); margin-top: 12px; font-weight: 600; }
@media (max-width: 760px) { .examples-grid { grid-template-columns: 1fr; } article { padding: 18px; } .segment-examples { margin-block: 56px; } }
</style>
