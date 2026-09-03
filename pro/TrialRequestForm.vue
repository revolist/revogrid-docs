<template>
  <div class="trial-request-form">
    <template v-if="!isSent">
      <div v-if="eyebrow || helper" class="form-meta">
        <p v-if="eyebrow" class="form-eyebrow">{{ eyebrow }}</p>
        <span v-if="helper" class="form-helper">{{ helper }}</span>
      </div>
      <h2 v-if="title">{{ title }}</h2>
      <p v-if="subtitle" class="trial-request-form-subtitle">{{ subtitle }}</p>

      <form
        ref="formElement"
        @focusin="handleFormStart"
        @input.capture="handleFormStart"
        @invalid.capture="handleInvalid"
        @submit.prevent="handleSubmit"
      >
        <div class="form-grid">
          <label class="form-field form-field-wide" for="trialBusinessEmail">
            <span>{{ isTrialRequest ? 'Email' : 'Business Email' }} <em>*</em></span>
            <input
              id="trialBusinessEmail"
              v-model.trim="form.businessEmail"
              type="email"
              autocomplete="email"
              :placeholder="isTrialRequest ? 'alex@company.com' : undefined"
              required
              :disabled="isSubmitting"
            />
          </label>

          <label class="form-field" for="trialFullName">
            <span>
              {{ isTrialRequest ? 'First name' : 'Full Name' }}
              <template v-if="!isTrialRequest"> <em>*</em></template>
              <small v-else>(optional)</small>
            </span>
            <input
              id="trialFullName"
              v-model.trim="form.fullName"
              type="text"
              :autocomplete="isTrialRequest ? 'given-name' : 'name'"
              :placeholder="isTrialRequest ? 'Alex' : undefined"
              :required="!isTrialRequest"
              :disabled="isSubmitting"
            />
          </label>

          <label class="form-field" for="trialCompanyName">
            <span>
              {{ isTrialRequest ? 'Company name' : 'Company Name' }}
              <template v-if="!isTrialRequest"> <em>*</em></template>
              <small v-else>(optional)</small>
            </span>
            <input
              id="trialCompanyName"
              v-model.trim="form.companyName"
              type="text"
              autocomplete="organization"
              :placeholder="isTrialRequest ? 'Acme Inc.' : undefined"
              :required="!isTrialRequest"
              :disabled="isSubmitting"
            />
          </label>
          <label class="form-field form-field-wide" for="trialApplicationInfo">
            <span>
              Tell us more about your application
              <small v-if="isTrialRequest">(optional)</small>
            </span>
            <textarea
              id="trialApplicationInfo"
              v-model.trim="form.applicationInfo"
              :disabled="isSubmitting"
              placeholder="Timeline, team size, frameworks, or modules you want to evaluate"
            ></textarea>
          </label>
        </div>

        <label class="form-consent" for="trialConsent">
          <input
            id="trialConsent"
            v-model="form.consent"
            type="checkbox"
            required
            :disabled="isSubmitting"
          />
          <span>
            I give my consent to the processing of my personal data for the purpose of addressing
            this inquiry.
          </span>
        </label>

        <p v-if="errorMessage" class="form-error" role="alert">{{ errorMessage }}</p>

        <div class="form-actions">
          <button class="submit-button" type="submit" :disabled="isSubmitting">
            <span>{{ isSubmitting ? 'Sending' : submitLabel }}</span>
            <img
              v-if="isSubmitting"
              class="spinner"
              width="18"
              height="18"
              src="/spinner-solid.svg"
              alt=""
            />
            <FontAwesomeSvgIcon v-else class="submit-arrow" name="arrowDown" />
          </button>
        </div>
      </form>
    </template>

    <div v-else class="form-success" role="status">
      <img class="form-success-icon" :src="successIcon" alt="" aria-hidden="true" />
      <h2>{{ successTitle }}</h2>
      <p>{{ successMessage }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import FontAwesomeSvgIcon from '../.vitepress/theme/home-v2/FontAwesomeSvgIcon.vue'
import successIcon from '../.vitepress/theme/images/wcag.svg'

const API_URL = import.meta.env.VITE_API_URL
type RequestType = 'contact' | 'trial'
type AnalyticsAction = 'started' | 'validation_error' | 'submitted' | 'submit_failed'
type DataLayerWindow = Window & { dataLayer?: Array<Record<string, unknown>> }

const requestLabels: Record<RequestType, string> = {
  contact: 'Contact request',
  trial: 'Trial request',
}

const props = withDefaults(
  defineProps<{
    eyebrow?: string
    helper?: string
    title?: string
    subtitle?: string
    submitLabel?: string
    successTitle?: string
    successMessage?: string
    requestType?: RequestType
  }>(),
  {
    eyebrow: '',
    helper: '',
    title: '',
    subtitle: '',
    submitLabel: 'Get Pro Trial',
    successTitle: 'Thank you',
    successMessage: 'We will get back to you as soon as possible.',
    requestType: 'contact',
  },
)

type TrialRequestPayload = {
  fullName: string
  companyName: string
  businessEmail: string
  applicationInfo: string
  consent: boolean
  requestType: RequestType
  requestLabel: string
}

const emit = defineEmits<{
  (event: 'submit', formData: TrialRequestPayload): void
}>()

const formElement = ref<HTMLFormElement | null>(null)
const form = ref({
  fullName: '',
  companyName: '',
  businessEmail: '',
  applicationInfo: '',
  consent: false,
})

const isSubmitting = ref(false)
const isSent = ref(false)
const errorMessage = ref('')
const hasStarted = ref(false)

const isTrialRequest = computed(() => props.requestType === 'trial')
const isFormValid = computed(() => {
  const hasRequiredName = isTrialRequest.value || Boolean(form.value.fullName)
  const hasRequiredCompany = isTrialRequest.value || Boolean(form.value.companyName)
  return Boolean(
    hasRequiredName &&
      hasRequiredCompany &&
      form.value.businessEmail &&
      form.value.consent,
  )
})

const pushAnalytics = (
  action: AnalyticsAction,
  properties: Record<string, unknown> = {},
) => {
  if (typeof window === 'undefined') return
  const analyticsWindow = window as DataLayerWindow
  analyticsWindow.dataLayer ??= []
  analyticsWindow.dataLayer.push({
    event: `${props.requestType}_request_form_${action}`,
    request_type: props.requestType,
    ...properties,
  })
}

const handleFormStart = () => {
  if (hasStarted.value) return
  hasStarted.value = true
  pushAnalytics('started')
}

const fieldNames: Record<string, string> = {
  trialFullName: 'name',
  trialCompanyName: 'company',
  trialBusinessEmail: 'email',
  trialConsent: 'consent',
}

const handleInvalid = (event: Event) => {
  handleFormStart()
  const field = event.target instanceof HTMLInputElement
    ? fieldNames[event.target.id] ?? 'unknown'
    : 'unknown'
  pushAnalytics('validation_error', { field })
}

const handleSubmit = async () => {
  if (isSubmitting.value) return

  handleFormStart()
  if (!isFormValid.value) {
    errorMessage.value = 'Please complete the required fields and give your consent.'
    pushAnalytics('validation_error', { field: 'required_fields' })
    return
  }

  errorMessage.value = ''
  isSubmitting.value = true
  const payload: TrialRequestPayload = {
    ...form.value,
    requestType: props.requestType,
    requestLabel: requestLabels[props.requestType],
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      throw new Error(response.statusText || 'Request failed')
    }

    emit('submit', payload)
    pushAnalytics('submitted')
    isSent.value = true
  } catch (error) {
    console.error('Error sending trial request:', error)
    pushAnalytics('submit_failed')
    errorMessage.value = 'We could not send the request. Please try again or email contact@revolist.eu.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style lang="scss" scoped>
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.form-meta {
  display: flex;
  min-height: 32px;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.form-eyebrow {
  margin: 0;
  color: var(--vp-c-brand-1);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.form-helper {
  flex: 0 0 auto;
  border-radius: 999px;
  background: color-mix(in srgb, var(--vp-c-brand-1), transparent 92%);
  color: var(--vp-c-text-2);
  font-size: 0.74rem;
  font-weight: 600;
  padding: 0.45rem 0.75rem;
}

.trial-request-form h2 {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: clamp(1.8rem, 3vw, 2.2rem);
  font-weight: 600;
  letter-spacing: -0.035em;
  line-height: 1.1;
}

.trial-request-form-subtitle {
  margin: 0.85rem 0 2rem;
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  line-height: 1.55;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.form-field {
  display: grid;
  gap: 0.5rem;
  color: var(--vp-c-text-1);
  font-size: 0.85rem;
  font-weight: 600;
}

.form-field em {
  color: var(--vp-c-brand-1);
  font-style: normal;
}

.form-field small {
  color: var(--vp-c-text-3);
  font-size: inherit;
  font-weight: 400;
}

.form-field input,
.form-field textarea {
  width: 100%;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font: inherit;
  font-weight: 400;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.form-field input::placeholder,
.form-field textarea::placeholder {
  color: var(--vp-c-text-3);
  opacity: 0.72;
}

.form-field input:focus,
.form-field textarea:focus {
  border-color: var(--vp-c-brand-1);
  outline: none;
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--vp-c-brand-1), transparent 82%);
}

.form-field input:disabled,
.form-field textarea:disabled {
  cursor: not-allowed;
  opacity: 0.68;
}

.form-field input {
  min-height: 50px;
  padding: 0 0.9rem;
}

.form-field textarea {
  min-height: 108px;
  padding: 0.8rem 0.9rem;
  resize: vertical;
}

.form-field-wide {
  grid-column: 1 / -1;
}

.form-consent {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.75rem;
  align-items: start;
  margin-top: 1rem;
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-size: 0.8rem;
  line-height: 1.45;
}

.form-consent input {
  width: 18px;
  height: 18px;
  margin: 0.1rem 0 0;
  accent-color: var(--vp-c-brand-1);
}

.form-consent:focus-within {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 4px;
  border-radius: 4px;
}

.form-error {
  margin: 1rem 0 0;
  color: var(--vp-c-danger-1);
  font-size: 0.86rem;
  line-height: 1.5;
}

.form-actions {
  display: flex;
  justify-content: center;
  margin-top: 1.6rem;
}

.submit-button {
  display: inline-flex;
  min-width: 184px;
  min-height: 50px;
  align-items: center;
  justify-content: center;
  gap: 0.85rem;
  border: 0;
  border-radius: 8px;
  background: var(--vp-c-brand-1);
  box-shadow: 0 12px 24px color-mix(in srgb, var(--vp-c-brand-1), transparent 78%);
  color: #fff;
  cursor: pointer;
  font: inherit;
  font-weight: 600;
  transition:
    background 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.submit-button:hover:not(:disabled) {
  background: var(--vp-c-brand-2);
  box-shadow: 0 14px 28px color-mix(in srgb, var(--vp-c-brand-1), transparent 72%);
  transform: translateY(-1px);
}

.submit-button:focus-visible {
  outline: 3px solid color-mix(in srgb, var(--vp-c-brand-1), white 42%);
  outline-offset: 3px;
}

.submit-button:disabled {
  cursor: not-allowed;
  opacity: 0.72;
}

.submit-arrow,
.spinner {
  width: 17px;
  height: 17px;
}

.submit-arrow {
  --rg-text: #fff;

  color: #fff;
  transform: rotate(-90deg);
}

.spinner {
  animation: spin 1s linear infinite;
  filter: brightness(0) invert(1);
}

.form-success {
  display: grid;
  min-height: 430px;
  align-content: center;
  justify-items: center;
  text-align: center;
}

.form-success h2 {
  margin-bottom: 0.75rem;
}

.form-success p {
  max-width: 28rem;
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.form-success-icon {
  width: 64px;
  height: 64px;
  margin-bottom: 1rem;
}

@media (max-width: 640px) {
  .trial-request-form-subtitle {
    margin-bottom: 1.5rem;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .form-field-wide {
    grid-column: auto;
  }

  .submit-button {
    width: 100%;
  }
}
</style>
