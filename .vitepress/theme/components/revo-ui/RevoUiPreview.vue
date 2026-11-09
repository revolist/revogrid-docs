<template>
  <form class="revo-ui-preview" @submit.prevent="saved = true">
    <header>
      <span class="revo-ui-preview-mark" aria-hidden="true">UI</span>
      <div>
        <p class="revo-ui-preview-eyebrow">{{ copy.eyebrow }}</p>
        <h3>{{ copy.title }}</h3>
      </div>
    </header>
    <label class="revo-ui-preview-field">
      <span>{{ copy.name }}</span>
      <input v-model="name" v-rv-control class="rv-input" type="text" required maxlength="60" />
    </label>
    <div class="revo-ui-preview-field">
      <div class="revo-ui-preview-between">
        <span>{{ copy.progress }}</span
        ><output>{{ progress }}%</output>
      </div>
      <UiSlider v-model="progress" :min="0" :max="100" v-bind="{ ariaLabel: copy.progress }" />
    </div>
    <UiSwitch v-model="notify" :label="copy.notify" />
    <UiCheckbox v-model="review" :label="copy.review" />
    <footer>
      <UiButton type="submit" variant="primary">{{ copy.save }}</UiButton>
      <p role="status" aria-live="polite">
        {{ saved ? copy.saved.replace('{name}', name.trim() || copy.defaultName) : '' }}
      </p>
    </footer>
  </form>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import {
  Button as UiButton,
  Checkbox as UiCheckbox,
  Switch as UiSwitch,
  SingleValueSlider as UiSlider,
} from '@revolist/ui/vue'
import { vRvControl } from '@revolist/ui/vue-control'
import '@revolist/ui/styles.css'
import type { RevoUiPreviewCopy } from './revoUiContent'

const props = defineProps<{ copy: RevoUiPreviewCopy }>()
const name = ref(props.copy.defaultName)
const progress = ref(64)
const notify = ref(true)
const review = ref(true)
const saved = ref(false)
watch([name, progress, notify, review], () => {
  saved.value = false
})
</script>
<style scoped>
.revo-ui-preview {
  display: grid;
  gap: 22px;
  min-width: 0;
  padding: clamp(24px, 4vw, 36px);
  border: 1px solid var(--vp-c-divider);
  border-radius: 20px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  box-shadow: 0 12px 40px color-mix(in srgb, var(--vp-c-text-1) 5%, transparent);
  font-size: 14px;
}
header,
.revo-ui-preview-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
header {
  justify-content: flex-start;
}
.revo-ui-preview-mark {
  display: grid;
  place-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  font-weight: 700;
}
.revo-ui-preview-eyebrow {
  margin: 0 0 3px;
  font-size: 11px;
  color: var(--vp-c-text-2);
}
h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 650;
  line-height: 1.4;
  letter-spacing: -0.02em;
}
.revo-ui-preview-field {
  display: grid;
  gap: 10px;
}
.rv-input {
  width: 100%;
  min-width: 0;
}
output {
  font-variant-numeric: tabular-nums;
  color: var(--vp-c-brand-1);
}
:deep(.rv-switch) {
  width: 100%;
  justify-content: space-between;
}
footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  padding-top: 4px;
}
footer p {
  flex: 1 1 140px;
  min-height: 20px;
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 12px;
  line-height: 1.5;
}
@media (max-width: 640px) {
  :deep(button),
  .rv-input {
    min-height: 44px;
  }
}
</style>
