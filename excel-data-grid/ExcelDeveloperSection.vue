<template>
  <section id="developers" class="excel-story-section" aria-labelledby="developers-title">
    <div class="excel-container">
      <div class="excel-story-heading">
        <div>
          <span class="excel-section-index">{{ content.index }}</span>
          <h2 id="developers-title">{{ content.title }}</h2>
        </div>
        <p>{{ content.description }}</p>
      </div>

      <div class="excel-integration-layout">
        <div class="excel-code-panel">
          <div class="excel-code-panel__bar"><span>workbook.{{ activeFramework.toLowerCase() }}</span><a :href="frameworkGuide">{{ content.gettingStarted }}</a></div>
          <ExcelHighlightedCode
            class="excel-code-panel__sample"
            :code="frameworkCode"
            :language="frameworkLanguage"
            :label="`${activeFramework} RevoGrid integration example`"
          />
          <ExcelHighlightedCode
            class="excel-install-line"
            :code="`pnpm add ${frameworkPackage}`"
            language="shell"
            :label="`${activeFramework} package installation command`"
          />
        </div>
        <div class="excel-framework-panel">
          <div role="tablist" aria-label="Framework examples">
            <button
              v-for="framework in frameworks"
              :id="`framework-${framework}`"
              :key="framework"
              type="button"
              role="tab"
              :aria-selected="activeFramework === framework"
              :class="{ active: activeFramework === framework }"
              @click="activeFramework = framework"
            >{{ framework }}</button>
          </div>
          <div class="excel-extension-list">
            <article v-for="extension in content.extensions" :key="extension.title">
              <FontAwesomeSvgIcon :name="extension.icon" />
              <div><strong>{{ extension.title }}</strong><p>{{ extension.detail }}</p></div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import FontAwesomeSvgIcon from '../.vitepress/theme/home-v2/FontAwesomeSvgIcon.vue'
import ExcelHighlightedCode from './ExcelHighlightedCode.vue'
import { FRAMEWORK_SAMPLES } from './excelLandingState.mjs'
import type { ExcelLandingContent } from './excelLandingContent'

defineProps<{ content: ExcelLandingContent['developer'] }>()

const frameworks = Object.keys(FRAMEWORK_SAMPLES)
const activeFramework = ref('React')
const frameworkCode = computed(() => FRAMEWORK_SAMPLES[activeFramework.value])
const frameworkLanguage = computed(() => ({
  React: 'tsx', Vue: 'vue', Angular: 'ts', JavaScript: 'js', TypeScript: 'ts',
})[activeFramework.value])
const frameworkPackage = computed(() => ({
  React: '@revolist/react-datagrid', Vue: '@revolist/vue3-datagrid', Angular: '@revolist/angular-datagrid',
  JavaScript: '@revolist/revogrid', TypeScript: '@revolist/revogrid',
})[activeFramework.value])
const frameworkGuide = computed(() => ({
  React: '/guide/react/',
  Vue: '/guide/vue3/',
  Angular: '/guide/angular/',
  JavaScript: '/guide/',
  TypeScript: '/guide/ts/',
})[activeFramework.value])
</script>
