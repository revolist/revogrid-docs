<template>
  <ModalDialog
    :is-visible="isVisible"
    title-id="tailored-package-dialog-title"
    description-id="tailored-package-dialog-description"
    close-label="Close tailored package request"
    size="wide"
    initial-focus="input:not([disabled])"
    @close="emit('close')"
  >
    <div class="tailored-form">
      <div v-if="submissionState === 'succeeded'" class="success-state" role="status">
        <FontAwesomeSvgIcon class="success-icon" name="circleCheck" />
        <h2 id="tailored-package-dialog-title">Thank you — we received your request</h2>
        <p id="tailored-package-dialog-description">
          We’re using requests like yours to shape more flexible RevoGrid packages. Our team will
          review it and contact you if we can suggest a suitable option.
        </p>
        <button ref="successDoneButton" class="rg-btn" type="button" @click="emit('close')">Done</button>
      </div>

      <template v-else-if="step === 1">
        <header class="form-heading">
          <p class="step-label">Step 1 of 2</p>
          <h2 id="tailored-package-dialog-title">Which capabilities do you need?</h2>
          <p id="tailored-package-dialog-description">
            Choose one or more. You can add details in the next step.
          </p>
        </header>

        <form @submit.prevent="continueToDetails">
          <fieldset ref="capabilityFieldset" class="capability-fieldset">
            <legend class="sr-only">Select one or more RevoGrid capabilities</legend>
            <label
              v-for="capability in capabilities"
              :key="capability.id"
              class="capability-card"
              :class="{ selected: selectedCapabilities.includes(capability.id) }"
              :for="`tailored-capability-${capability.id}`"
            >
              <span class="capability-icon" aria-hidden="true">
                <FontAwesomeSvgIcon :name="capability.icon" />
              </span>
              <span class="capability-copy">
                <strong>{{ capability.name }}</strong>
                <small>{{ capability.description }}</small>
              </span>
              <input
                :id="`tailored-capability-${capability.id}`"
                v-model="selectedCapabilities"
                type="checkbox"
                :value="capability.id"
              />
            </label>
          </fieldset>

          <p v-if="!selectedCapabilities.length" id="tailored-capability-help" class="form-help">
            Select at least one capability, or describe your needs in your own words.
          </p>

          <div class="form-actions">
            <button class="rg-btn rg-btn-secondary" type="button" @click="chooseFreeform">
              Describe it myself
            </button>
            <button
              class="rg-btn"
              type="submit"
              :disabled="!selectedCapabilities.length"
              aria-describedby="tailored-capability-help"
            >
              Continue<span v-if="selectedCapabilities.length"> ({{ selectedCapabilities.length }})</span>
            </button>
          </div>
        </form>
      </template>

      <template v-else>
        <header class="form-heading">
          <p class="step-label">Step 2 of 2</p>
          <h2 id="tailored-package-dialog-title">
            {{ usedFreeform ? 'Describe what you need' : 'Add a little context' }}
          </h2>
          <p id="tailored-package-dialog-description">
            {{ usedFreeform
              ? 'Tell us which component or capability would help your project.'
              : 'This helps us understand how the selected capabilities fit your project.' }}
          </p>
        </header>

        <ul v-if="selectedCapabilityDetails.length" class="selection-summary" aria-label="Selected capabilities">
          <li v-for="capability in selectedCapabilityDetails" :key="capability.id">
            {{ capability.name }}
          </li>
        </ul>

        <form ref="detailsForm" novalidate @submit.prevent="submitRequest">
          <div class="detail-fields">
            <label class="form-field" for="tailored-request-message">
              <span>What do you need? <em>*</em></span>
              <textarea
                id="tailored-request-message"
                ref="requestTextarea"
                v-model="message"
                minlength="8"
                required
                :disabled="isSubmitting"
                placeholder="For example: We need tree data, advanced validation and undo/redo for a React-based planning tool…"
                @input="validationMessage = ''"
              ></textarea>
            </label>

            <label class="form-field" for="tailored-request-email">
              <span>Work email <em>*</em></span>
              <input
                id="tailored-request-email"
                v-model.trim="email"
                type="email"
                autocomplete="email"
                required
                :disabled="isSubmitting"
                @input="validationMessage = ''"
              />
            </label>
          </div>

          <p class="privacy-note">
            We’ll use your request to understand demand for flexible packages and contact you about
            relevant options. No purchase commitment.
          </p>
          <p v-if="validationMessage" class="form-error" role="alert">{{ validationMessage }}</p>
          <p v-if="submissionError" class="form-error" role="alert">{{ submissionError }}</p>

          <div class="form-actions">
            <button class="rg-btn rg-btn-secondary" type="button" :disabled="isSubmitting" @click="step = 1">
              Back
            </button>
            <button class="rg-btn" type="submit" :disabled="isSubmitting">
              <span>{{ isSubmitting ? 'Sending request' : 'Send request' }}</span>
              <img v-if="isSubmitting" class="spinner" width="18" height="18" src="/spinner-solid.svg" alt="" />
            </button>
          </div>
        </form>
      </template>
    </div>
  </ModalDialog>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import ModalDialog from '../.vitepress/theme/ModalDialog.vue'
import FontAwesomeSvgIcon from '../.vitepress/theme/home-v2/FontAwesomeSvgIcon.vue'
import { createTailoredPackageRequestPayload } from './pricingTailoredPackageRequest'

type Capability = {
  id: string
  name: string
  description: string
  icon: string
}

type TailoredPackageAnalyticsEvent =
  | 'tailored_package_form_opened'
  | 'tailored_package_freeform_selected'
  | 'tailored_package_step_completed'
  | 'tailored_package_submitted'
  | 'tailored_package_submit_failed'

type DataLayerWindow = Window & { dataLayer?: Array<Record<string, unknown>> }

const API_URL = (import.meta.env.VITE_API_URL || '').trim()
const MINIMUM_MESSAGE_LENGTH = 8

const capabilities: Capability[] = [
  { id: 'advanced-editing', name: 'Advanced editing', description: 'Custom editors, formulas and rich cell input', icon: 'grid' },
  { id: 'filtering-search', name: 'Filtering & search', description: 'Advanced filters, multi-filter and search', icon: 'filter' },
  { id: 'grouping-tree-data', name: 'Grouping & tree data', description: 'Hierarchies, grouped rows and master-detail', icon: 'box' },
  { id: 'validation-workflows', name: 'Validation & workflows', description: 'Rules, statuses, events and approvals', icon: 'listCheck' },
  { id: 'excel-like-interactions', name: 'Excel-like interactions', description: 'Selection, fill, copy/paste and keyboard use', icon: 'grid' },
  { id: 'export-reporting', name: 'Export & reporting', description: 'CSV export and report-ready data views', icon: 'chart' },
  { id: 'remote-data-performance', name: 'Remote data & performance', description: 'Large datasets, server workflows and caching', icon: 'pulse' },
  { id: 'undo-redo-history', name: 'Undo, redo & history', description: 'Change tracking and audit history', icon: 'trend' },
  { id: 'pivot-analytics', name: 'Pivot analytics', description: 'Totals, subtotals, drill-down and aggregation', icon: 'chartColumn' },
  { id: 'gantt-scheduler', name: 'Gantt Charts', description: 'Timelines, tasks, dependencies and events', icon: 'calendarDays' },
]

const props = defineProps<{ isVisible: boolean }>()
const emit = defineEmits<{ (event: 'close'): void }>()

const step = ref<1 | 2>(1)
const selectedCapabilities = ref<string[]>([])
const usedFreeform = ref(false)
const message = ref('')
const email = ref('')
const submissionState = ref<'idle' | 'submitting' | 'succeeded'>('idle')
const submissionError = ref('')
const validationMessage = ref('')
const detailsForm = ref<HTMLFormElement | null>(null)
const capabilityFieldset = ref<HTMLFieldSetElement | null>(null)
const requestTextarea = ref<HTMLTextAreaElement | null>(null)
const successDoneButton = ref<HTMLButtonElement | null>(null)

const isSubmitting = computed(() => submissionState.value === 'submitting')
const selectedCapabilityDetails = computed(() =>
  capabilities.filter((capability) => selectedCapabilities.value.includes(capability.id)),
)

const pushAnalytics = (
  event: TailoredPackageAnalyticsEvent,
  properties: Record<string, unknown> = {},
) => {
  if (typeof window === 'undefined') return
  const analyticsWindow = window as DataLayerWindow
  analyticsWindow.dataLayer ??= []
  analyticsWindow.dataLayer.push({ event, ...properties })
}

const resetForm = () => {
  step.value = 1
  selectedCapabilities.value = []
  usedFreeform.value = false
  message.value = ''
  email.value = ''
  submissionState.value = 'idle'
  submissionError.value = ''
  validationMessage.value = ''
}

watch(
  () => props.isVisible,
  (isVisible) => {
    if (!isVisible) return
    resetForm()
    pushAnalytics('tailored_package_form_opened')
  },
)

watch(step, async (currentStep) => {
  await nextTick()
  if (currentStep === 2) {
    requestTextarea.value?.focus()
    return
  }
  const selected = capabilityFieldset.value?.querySelector<HTMLInputElement>('input:checked')
  ;(selected ?? capabilityFieldset.value?.querySelector<HTMLInputElement>('input'))?.focus()
})

watch(submissionState, async (state) => {
  if (state !== 'succeeded') return
  await nextTick()
  successDoneButton.value?.focus()
})

const continueToDetails = () => {
  if (!selectedCapabilities.value.length) return
  usedFreeform.value = false
  step.value = 2
  pushAnalytics('tailored_package_step_completed', {
    selected_capabilities: [...selectedCapabilities.value],
    selection_count: selectedCapabilities.value.length,
  })
}

const chooseFreeform = () => {
  usedFreeform.value = true
  step.value = 2
  pushAnalytics('tailored_package_freeform_selected')
}

const submitRequest = async () => {
  if (isSubmitting.value) return

  validationMessage.value = ''
  submissionError.value = ''
  const trimmedMessage = message.value.trim()
  if (trimmedMessage.length < MINIMUM_MESSAGE_LENGTH) {
    validationMessage.value = 'Please describe what you need in at least 8 characters.'
    return
  }
  if (!detailsForm.value?.checkValidity()) {
    detailsForm.value?.reportValidity()
    return
  }
  if (!API_URL) {
    submissionError.value = 'We could not send the request. Please try again or email contact@revolist.eu.'
    pushAnalytics('tailored_package_submit_failed', {
      selected_capabilities: [...selectedCapabilities.value],
      describe_it_myself: usedFreeform.value,
      reason: 'missing_endpoint',
    })
    return
  }

  submissionState.value = 'submitting'
  const payload = createTailoredPackageRequestPayload({
    email: email.value,
    message: trimmedMessage,
    selectedCapabilities: selectedCapabilityDetails.value,
    describeItMyself: usedFreeform.value,
    pageUrl: window.location.href,
  })

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!response.ok) throw new Error(response.statusText || 'Request failed')

    submissionState.value = 'succeeded'
    pushAnalytics('tailored_package_submitted', {
      selected_capabilities: [...selectedCapabilities.value],
      describe_it_myself: usedFreeform.value,
    })
  } catch (error) {
    console.error('Error sending tailored package request:', error)
    submissionState.value = 'idle'
    submissionError.value = 'We could not send the request. Please try again or email contact@revolist.eu.'
    pushAnalytics('tailored_package_submit_failed', {
      selected_capabilities: [...selectedCapabilities.value],
      describe_it_myself: usedFreeform.value,
      reason: 'request_failed',
    })
  }
}
</script>

<style lang="scss" scoped>
@keyframes tailored-spin {
  to { transform: rotate(360deg); }
}

.tailored-form { color: var(--vp-c-text-1); }
.form-heading { padding-right: 44px; margin-bottom: 22px; }
.form-heading h2,
.success-state h2 { margin: 0 0 8px; font-size: clamp(24px, 4vw, 30px); line-height: 1.2; letter-spacing: -0.02em; }
.form-heading > p:last-child,
.success-state p { margin: 0; color: var(--vp-c-text-2); font-size: 14px; line-height: 1.55; }
.step-label { margin: 0 0 7px; color: var(--vp-c-brand-1); font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }
.sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; }
.capability-fieldset { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; margin: 0; padding: 0; border: 0; }
.capability-card { display: grid; grid-template-columns: 34px minmax(0, 1fr) auto; align-items: center; gap: 10px; min-width: 0; padding: 13px; border: 1px solid var(--vp-c-divider); border-radius: 10px; background: var(--vp-c-bg); cursor: pointer; transition: border-color 0.18s, background 0.18s, box-shadow 0.18s; }
.capability-card:hover { border-color: var(--vp-c-brand-1); background: var(--vp-c-bg-soft); }
.capability-card.selected { border-color: var(--vp-c-brand-1); background: color-mix(in srgb, var(--vp-c-brand-1) 8%, var(--vp-c-bg)); box-shadow: inset 0 0 0 1px var(--vp-c-brand-1); }
.capability-card:has(input:focus-visible) { outline: 3px solid color-mix(in srgb, var(--vp-c-brand-1) 34%, transparent); outline-offset: 2px; }
.capability-card input { width: 17px; height: 17px; accent-color: var(--vp-c-brand-1); }
.capability-icon { display: grid; width: 34px; height: 34px; place-items: center; border-radius: 8px; background: var(--vp-c-bg-soft); color: var(--vp-c-brand-1); }
.capability-copy { display: grid; min-width: 0; gap: 2px; }
.capability-copy strong { font-size: 14px; line-height: 1.3; }
.capability-copy small { color: var(--vp-c-text-2); font-size: 11px; line-height: 1.35; }
.form-help { margin: 13px 0 0; color: var(--vp-c-text-2); font-size: 13px; line-height: 1.45; }
.form-actions { display: flex; justify-content: flex-end; flex-wrap: wrap; gap: 10px; margin-top: 22px; }
.rg-btn { min-height: 44px; cursor: pointer; }
.rg-btn:disabled { cursor: not-allowed; opacity: 0.5; filter: none; transform: none; }
.selection-summary { display: flex; flex-wrap: wrap; gap: 7px; margin: -7px 0 20px; padding: 0; list-style: none; }
.selection-summary li { border: 1px solid color-mix(in srgb, var(--vp-c-brand-1) 28%, var(--vp-c-divider)); border-radius: 999px; background: color-mix(in srgb, var(--vp-c-brand-1) 7%, var(--vp-c-bg)); padding: 5px 9px; color: var(--vp-c-text-2); font-size: 12px; line-height: 1.2; }
.detail-fields { display: grid; gap: 16px; }
.form-field { display: grid; gap: 7px; color: var(--vp-c-text-2); font-size: 14px; font-weight: 600; }
.form-field em { color: var(--vp-c-brand-1); font-style: normal; }
.form-field input,
.form-field textarea { width: 100%; border: 1px solid var(--vp-c-divider); border-radius: 8px; background: var(--vp-c-bg); padding: 12px 14px; color: var(--vp-c-text-1); font: inherit; }
.form-field input { min-height: 48px; }
.form-field textarea { min-height: 126px; resize: vertical; }
.form-field input:focus,
.form-field textarea:focus { border-color: var(--vp-c-brand-1); outline: none; box-shadow: 0 0 0 3px color-mix(in srgb, var(--vp-c-brand-1) 18%, transparent); }
.form-field input:disabled,
.form-field textarea:disabled { cursor: not-allowed; opacity: 0.68; }
.privacy-note { margin: 14px 0 0; color: var(--vp-c-text-3); font-size: 12px; line-height: 1.5; }
.form-error { margin: 12px 0 0; color: var(--vp-c-danger-1); font-size: 13px; line-height: 1.45; }
.spinner { animation: tailored-spin 1s linear infinite; filter: brightness(0); }
.success-state { display: grid; min-height: 330px; align-content: center; justify-items: center; text-align: center; }
.success-state p { max-width: 540px; margin-bottom: 22px; }
.success-icon { width: 58px; height: 58px; margin-bottom: 16px; color: var(--vp-c-brand-1); }

@media (max-width: 640px) {
  .capability-fieldset { grid-template-columns: 1fr; }
  .capability-card { padding: 12px; }
  .form-actions { display: grid; grid-template-columns: 1fr; }
  .form-actions .rg-btn { width: 100%; }
}
</style>
