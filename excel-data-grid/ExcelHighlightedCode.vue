<template>
  <div
    class="excel-highlighted-code"
    :class="`language-${language}`"
    :aria-label="label"
  >
    <div v-if="highlightedCode" v-html="highlightedCode"></div>
    <pre v-else class="shiki"><code>{{ code }}</code></pre>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { codeToHtml } from 'shiki'

const props = withDefaults(
  defineProps<{
    code: string
    language?: string
    label?: string
  }>(),
  {
    language: 'ts',
    label: 'Code example',
  },
)

const highlightedCode = ref('')

watch(
  () => [props.code, props.language] as const,
  async ([code, language]) => {
    highlightedCode.value = ''
    try {
      const html = await codeToHtml(code, {
        lang: language,
        themes: {
          light: 'github-light',
          dark: 'one-dark-pro',
        },
        defaultColor: false,
      })

      if (code === props.code && language === props.language) highlightedCode.value = html
    } catch {
      // Keep the source readable when a highlighter dependency cannot load.
    }
  },
  { immediate: true },
)
</script>
