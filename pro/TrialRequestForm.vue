<template>
  <div class="trial-request-form">
    <template v-if="!isSent">
      <h2 v-if="title">{{ title }}</h2>
      <p v-if="subtitle" class="trial-request-form-subtitle">{{ subtitle }}</p>

      <form @submit.prevent="handleSubmit">
        <div class="form-grid">
          <label class="form-field" for="trialFullName">
            <span>Full Name <em>*</em></span>
            <input
              id="trialFullName"
              v-model.trim="form.fullName"
              type="text"
              autocomplete="name"
              required
              :disabled="isSubmitting"
            />
          </label>

          <label class="form-field" for="trialCompanyName">
            <span>Company Name <em>*</em></span>
            <input
              id="trialCompanyName"
              v-model.trim="form.companyName"
              type="text"
              autocomplete="organization"
              required
              :disabled="isSubmitting"
            />
          </label>

          <label class="form-field form-field-wide" for="trialBusinessEmail">
            <span>Business Email <em>*</em></span>
            <input
              id="trialBusinessEmail"
              v-model.trim="form.businessEmail"
              type="email"
              autocomplete="email"
              required
              :disabled="isSubmitting"
            />
          </label>

          <label class="form-field form-field-wide" for="trialApplicationInfo">
            <span>Tell us more about your application</span>
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
            <img v-if="isSubmitting" class="spinner" width="18" height="18" src="/spinner-solid.svg" alt="" />
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
import successIcon from '../.vitepress/theme/images/wcag.svg'

const API_URL = import.meta.env.VITE_API_URL

withDefaults(
  defineProps<{
    title?: string
    subtitle?: string
    submitLabel?: string
    successTitle?: string
    successMessage?: string
  }>(),
  {
    title: '',
    subtitle: '',
    submitLabel: 'Request Trial',
    successTitle: 'Thank you',
    successMessage: 'We will get back to you as soon as possible.',
  }
)

const emit = defineEmits<{
  (
    e: 'submit',
    formData: {
      fullName: string
      companyName: string
      businessEmail: string
      applicationInfo: string
      consent: boolean
    }
  ): void
}>()

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

const isFormValid = computed(() => {
  return Boolean(
    form.value.fullName &&
      form.value.companyName &&
      form.value.businessEmail &&
      form.value.consent
  )
})

const handleSubmit = async () => {
  if (!isFormValid.value || isSubmitting.value) {
    return
  }

  errorMessage.value = ''
  isSubmitting.value = true

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    })

    if (!response.ok) {
      throw new Error(response.statusText || 'Request failed')
    }

    emit('submit', form.value)
    isSent.value = true
  } catch (error) {
    console.error('Error sending trial request:', error)
    errorMessage.value = 'We could not send the request. Please try again or email contact@revolist.eu.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.trial-request-form {
  h2 {
    margin: 0 0 0.5rem;
    color: var(--vp-c-text-1);
    font-size: 1.75rem;
    line-height: 1.15;
  }
}

.trial-request-form-subtitle {
  margin: 0 0 1.5rem;
  color: var(--vp-c-text-2);
  font-size: 1rem;
  line-height: 1.6;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.form-field {
  display: grid;
  gap: 0.45rem;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  font-weight: 600;

  em {
    color: var(--vp-c-brand-1);
    font-style: normal;
  }

  input,
  textarea {
    width: 100%;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    background: var(--vp-c-bg);
    color: var(--vp-c-text-1);
    font: inherit;
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease;

    &:focus {
      border-color: var(--vp-c-brand-1);
      outline: none;
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--vp-c-brand-1), transparent 82%);
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.68;
    }
  }

  input {
    min-height: 48px;
    padding: 0 0.9rem;
  }

  textarea {
    min-height: 118px;
    resize: vertical;
    padding: 0.8rem 0.9rem;
  }
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
  font-size: 0.82rem;
  line-height: 1.5;

  input {
    margin-top: 0.2rem;
  }
}

.form-error {
  margin: 1rem 0 0;
  color: var(--vp-c-danger-1);
  font-size: 0.9rem;
  line-height: 1.5;
}

.form-actions {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

.submit-button {
  display: inline-flex;
  min-width: 168px;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 0;
  border-radius: 8px;
  background: var(--vp-c-brand-1);
  color: #fff;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover:not(:disabled) {
    background: var(--vp-c-brand-2);
    transform: translateY(-1px);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.72;
  }
}

.spinner {
  animation: spin 1s linear infinite;
  filter: brightness(0) invert(1);
}

.form-success {
  display: grid;
  min-height: 280px;
  align-content: center;
  justify-items: center;
  text-align: center;

  h2 {
    margin-bottom: 0.75rem;
  }

  p {
    max-width: 28rem;
    margin: 0;
    color: var(--vp-c-text-2);
    line-height: 1.6;
  }
}

.form-success-icon {
  width: 64px;
  height: 64px;
  margin-bottom: 1rem;
}

@media (max-width: 640px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style>
