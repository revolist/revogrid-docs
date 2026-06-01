<template>
  <section id="native-cells" class="rg-section rg-section-soft">
    <div class="rg-container">
      <div class="rg-native-grid">
        <div class="rg-native-copy">
          <div class="rg-section-label">{{ section?.label }}</div>
          <h2 class="rg-section-title">{{ section?.title }}</h2>
          <p class="rg-native-desc" v-html="sectionDescription"></p>
        </div>
        <div class="rg-native-examples" aria-label="Native framework cell examples">
          <article v-for="example in section?.examples" :key="example.framework" class="rg-native-card">
            <div class="rg-native-card-top">
              <span :style="{ background: example.color }"></span>
              {{ example.framework }}
            </div>
            <div class="rg-native-code" v-html="highlightedExamples[example.framework] ?? ''"></div>
          </article>
        </div>
        <div class="rg-native-links">
          <a
            v-for="link in section?.links"
            :key="link.text"
            :href="linkOf(link.href)"
          >
            {{ link.text }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { codeToHtml } from 'shiki'
import { escapeHtml, type HomeV2Record, useHomeV2Links } from './homeV2Utils'

const props = defineProps<{
  section?: HomeV2Record
}>()

const { linkOf } = useHomeV2Links()
const highlightedExamples = ref<Record<string, string>>({})

const examples = computed<HomeV2Record[]>(() => props.section?.examples ?? [])
const sectionDescription = computed(() => linkFrameworkMentions(props.section?.description))

watch(
  examples,
  async (items) => {
    const highlighted = await Promise.all(
      items.map(async (example) => {
        const code = decodeCode(example.code ?? '')
        const html = await codeToHtml(code, {
          lang: example.lang ?? 'ts',
          theme: 'github-dark-high-contrast',
        })
        return [example.framework, html] as const
      })
    )
    highlightedExamples.value = Object.fromEntries(highlighted)
  },
  { immediate: true }
)

function decodeCode(code: string) {
  return code.replaceAll('__LT__', '<').replaceAll('__GT__', '>')
}

function linkFrameworkMentions(value: string | undefined) {
  if (!value) return ''

  const links: Record<string, string> = {
    React: '/guide/react/',
    Vue: '/guide/vue3/',
    Angular: '/guide/angular/',
  }

  return escapeHtml(value).replace(/\b(React|Vue|Angular)\b/g, (label) => {
    return `<a class="rg-product-link" href="${escapeHtml(linkOf(links[label]))}">${label}</a>`
  })
}
</script>

<style lang="scss" scoped>
.rg-native-grid {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 34px;
}

.rg-native-copy {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
}

.rg-native-desc {
  color: var(--rg-text-2);
  font-size: 17px;
  line-height: 1.65;
  margin: 0;
}

.rg-native-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 0;
}

.rg-native-links a {
  color: var(--rg-text);
  text-decoration: none;
  border: 1px solid var(--rg-border);
  border-radius: 8px;
  padding: 7px 11px;
  font-size: 13px;
  font-weight: 600;
}

.rg-native-links a:hover {
  border-color: var(--rg-border-hover);
  color: var(--rg-font-green);
}

.rg-native-examples {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  width: 100%;
}

.rg-native-card {
  min-width: 0;
  border: 1px solid var(--rg-border);
  border-radius: 12px;
  overflow: hidden;
  background: #19192b;
  box-shadow: var(--rg-shadow);
}

.rg-native-card-top {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 9px 11px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(214, 222, 255, 0.72);
  font-size: 12px;
  font-weight: 600;
}

.rg-native-card-top span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.rg-native-code {
  margin: 0;
  overflow: auto;
}

.rg-native-code :deep(.shiki) {
  background: transparent !important;
  margin: 0;
  padding: 13px;
  overflow: auto;
  font-size: 11px;
  line-height: 1.55;
}

.rg-native-code :deep(pre),
.rg-native-code :deep(code) {
  font-family: inherit;
}

@media (max-width: 900px) {
  .rg-native-examples {
    grid-template-columns: 1fr;
  }
}
</style>
