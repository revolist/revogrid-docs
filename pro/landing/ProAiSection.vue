<template>
  <section class="ai-band">
    <div class="pro-container ai-inner">
      <div class="ai-code-win">
        <div class="code-chrome">
          <div class="dots" aria-hidden="true"><span></span><span></span><span></span></div>
          <div class="ai-tag-pill"><span class="spark">✦</span>{{ page.ai.codeTag }}</div>
        </div>
        <div class="code-body" aria-label="RevoGrid Pro integration code sample">
          <div v-for="line in codeLines" :key="line.num" class="line">
            <span class="ln">{{ line.num }}</span>
            <span v-html="line.html"></span>
          </div>
        </div>
        <div class="code-foot">
          <span>ready</span>
          <span class="ok">✓ 0 type errors - ✓ compiled</span>
        </div>
      </div>

      <div class="ai-copy">
        <div class="ai-tag">- {{ page.ai.tag }}</div>
        <h2>
          {{ page.ai.title.prefix }}<br />
          {{ page.ai.title.suffix }} <em>{{ page.ai.title.highlight }}</em>
        </h2>
        <p>{{ page.ai.description }}</p>
        <div class="ai-facts">
          <div v-for="fact in page.ai.facts" :key="fact.text" class="ai-fact">
            <span class="icon" v-html="AI_ICONS[fact.icon] ?? fact.icon"></span>
            <span>{{ fact.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  page: Record<string, any>
}>()

const AI_ICONS: Record<string, string> = {
  'code': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>',
  'layer-group': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor"><path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.9 32 137.4 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.9 32 265.4 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.9 32 393.4 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/></svg>',
  'wand-magic-sparkles': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor"><path d="M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z"/></svg>',
}

const codeLines = [
  { num: 1, html: '<span class="c">// one import. entire scheduling layer.</span>' },
  { num: 2, html: '<span class="kw">import</span><span class="tx"> { RevoGrid } </span><span class="kw">from</span><span class="tx"> </span><span class="str">\'@revolist/revogrid-react\'</span><span class="pun">;</span>' },
  { num: 3, html: '<span class="kw">import</span><span class="tx"> { GanttPlugin } </span><span class="kw">from</span><span class="tx"> </span><span class="str">\'@revolist/revogrid-pro\'</span><span class="pun">;</span>' },
  { num: 4, html: '' },
  { num: 5, html: '<span class="kw">export function</span><span class="tx"> </span><span class="fn">ProjectView</span><span class="pun">() {</span>' },
  { num: 6, html: '<span class="tx">&nbsp;&nbsp;</span><span class="kw">const</span><span class="tx"> gantt </span><span class="pun">= </span><span class="kw">new </span><span class="type">GanttPlugin</span><span class="pun">({</span>' },
  { num: 7, html: '<span class="tx">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="prop">tasks</span><span class="pun">:</span><span class="tx"> projectData</span><span class="pun">,</span>' },
  { num: 8, html: '<span class="tx">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="prop">scheduling</span><span class="pun">: </span><span class="str">\'auto\'</span><span class="pun">,</span>' },
  { num: 9, html: '<span class="tx">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="prop">criticalPath</span><span class="pun">: </span><span class="kw">true</span><span class="pun">,</span>' },
  { num: 10, html: '<span class="tx">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="prop">baselines</span><span class="pun">: </span><span class="kw">true</span><span class="pun">,</span>' },
  { num: 11, html: '<span class="tx">&nbsp;&nbsp;</span><span class="pun">});</span>' },
  { num: 12, html: '' },
  { num: 13, html: '<span class="tx">&nbsp;&nbsp;</span><span class="kw">return</span><span class="tx"> </span><span class="pun">&lt;</span><span class="type">RevoGrid</span><span class="tx"> </span><span class="prop">plugins</span><span class="pun">={[</span><span class="tx">gantt</span><span class="pun">]} /&gt;;</span>' },
  { num: 14, html: '<span class="pun">}</span>' },
]
</script>
