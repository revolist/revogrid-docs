<template>
  <section id="developer" class="rg-section rg-dev-section">
    <div class="rg-container rg-dev-grid">
      <div>
        <div class="rg-section-label rg-left">{{ section?.label }}</div>
        <h2 class="rg-dev-title">{{ section?.title }}</h2>
        <p class="rg-dev-desc">{{ section?.description }}</p>
        <div class="rg-actions">
          <a
            v-for="action in section?.actions"
            :key="action.text"
            class="rg-btn rg-btn-secondary"
            :href="linkOf(action.link)"
            :target="targetOf(action.link)"
            :rel="relOf(action.link)"
          >
            {{ action.text }}<HomeChevron v-if="action.text.includes('GitHub')" />
          </a>
        </div>
      </div>
      <div>
        <div class="rg-tabs" role="tablist" aria-label="Framework code examples">
          <button
            v-for="tab in section?.tabs"
            :key="tab.id"
            class="rg-tab"
            :class="{ active: activeTab === tab.id }"
            type="button"
            role="tab"
            :aria-selected="activeTab === tab.id"
            @click="activeTab = tab.id"
          >
            <img
              v-if="tab.icon"
              class="rg-tab-icon"
              :src="tab.icon"
              :alt="`${tab.label} icon`"
              loading="lazy"
              width="16"
              height="16"
            />
            <span>{{ tab.label }}</span>
          </button>
        </div>
        <div class="rg-code-panel">
          <div class="rg-code-topbar">
            <div class="rg-browser-dots" aria-hidden="true">
              <span></span><span></span><span></span>
            </div>
            <span>install & usage</span>
            <button type="button" @click="copyCode">{{ copied ? 'copied' : 'copy' }}</button>
          </div>
          <div class="rg-code-scroll" v-html="highlightedCode"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue'
import { codeToHtml } from 'shiki'
import HomeChevron from './HomeChevron.vue'
import { type HomeV2Record, useHomeV2Links } from './homeV2Utils'

const props = defineProps<{
  section?: HomeV2Record
}>()

const { linkOf, targetOf, relOf } = useHomeV2Links()
const activeTab = ref('')
const copied = ref(false)
const highlightedCode = ref('')

const langByTab: Record<string, string> = {
  react: 'tsx',
  vue: 'vue',
  angular: 'ts',
  js: 'js',
}

const activeTabData = computed<HomeV2Record | undefined>(() => {
  const tabs = props.section?.tabs ?? []
  return tabs.find((item: HomeV2Record) => item.id === activeTab.value) ?? tabs[0]
})

const activeCode = computed(() => {
  return decodeCode(activeTabData.value?.code ?? '')
})

const activeLang = computed(() => {
  const tab = activeTabData.value
  return tab?.lang ?? langByTab[tab?.id] ?? 'ts'
})

onMounted(() => {
  activeTab.value = props.section?.tabs?.[0]?.id ?? ''
})

watch(
  () => [activeCode.value, activeLang.value],
  async ([code, lang]) => {
    if (!code) {
      highlightedCode.value = ''
      return
    }
    const highlighted = await codeToHtml(code, {
      lang,
      theme: 'github-dark-high-contrast',
    })
    if (code === activeCode.value && lang === activeLang.value) {
      highlightedCode.value = highlighted
    }
  },
  { immediate: true }
)

function copyCode() {
  if (typeof navigator === 'undefined' || !navigator.clipboard) return
  navigator.clipboard.writeText(activeCode.value).then(() => {
    copied.value = true
    window.setTimeout(() => {
      copied.value = false
    }, 1400)
  })
}

function decodeCode(code: string) {
  return code.replaceAll('__LT__', '<').replaceAll('__GT__', '>')
}
</script>
