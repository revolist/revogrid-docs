<template>
  <div v-if="example === 'pivot'" class="code-snippet" aria-label="Pivot API example">
    <div><span class="c-kw">const</span> plugins = [<span class="c-name">PivotPlugin</span>]</div>
    <div><span class="c-kw">const</span> pivot = {{ '{' }}</div>
    <div>&nbsp;&nbsp;<span class="c-prop">rows</span>: [<span class="c-str">'City'</span>, <span class="c-str">'Membership Type'</span>],</div>
    <div>&nbsp;&nbsp;<span class="c-prop">columns</span>: [<span class="c-str">'Discount Applied'</span>],</div>
    <div>&nbsp;&nbsp;<span class="c-prop">values</span>: [{{ '{' }} <span class="c-prop">prop</span>: <span class="c-str">'Total Spend'</span>, <span class="c-prop">aggregator</span>: <span class="c-str">'sum'</span> {{ '}' }}],</div>
    <div>{{ '}' }} <span class="c-kw">satisfies</span> <span class="c-name">PivotConfig</span></div>
    <div>&lt;<span class="c-name">RevoGrid</span> plugins=&quot;plugins&quot; pivot=&quot;pivot&quot; /&gt;</div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  example: 'pivot'
}>()
</script>

<style lang="scss" scoped>
.code-snippet {
  overflow: hidden;
  padding: 14px;
  margin: 14px 0 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  font-family: var(--vp-font-family-mono);
  font-size: 11px;
  line-height: 1.7;
  white-space: nowrap;
}

.c-kw,
.c-name {
  color: var(--pro-doc-accent, var(--gantt-accent, #1d4ed8));
}

.c-prop {
  color: var(--vp-c-text-1);
}

.c-str {
  color: #0f766e;
}

.c-cmt {
  color: var(--vp-c-text-3);
}
</style>
