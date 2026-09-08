<template>
  <div
    class="excel-highlighted-code"
    :class="`language-${language}`"
    :aria-label="label"
    v-html="highlightedCode"
  ></div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { codeToHtml } from 'shiki'

const props = withDefaults(defineProps<{
  code: string
  language?: string
  label?: string
}>(), {
  language: 'ts',
  label: 'Code example',
})

const highlightedCode = ref('')

watch(
  () => [props.code, props.language] as const,
  async ([code, language]) => {
    const html = await codeToHtml(code, {
      lang: language,
      themes: {
        light: 'github-light',
        dark: 'one-dark-pro',
      },
      defaultColor: false,
    })

    if (code === props.code && language === props.language) highlightedCode.value = html
  },
  { immediate: true },
)
</script>
