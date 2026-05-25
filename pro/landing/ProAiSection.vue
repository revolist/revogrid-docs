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
            <span class="icon">{{ fact.icon }}</span>
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
