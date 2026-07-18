<template>
  <ModalDialog
    :is-visible="isVisible"
    title-id="contact-dialog-title"
    description-id="contact-dialog-description"
    close-label="Close contact form"
    initial-focus="input:not([disabled])"
    @close="closeModal"
  >
    <header class="contact-modal-heading">
      <h2 id="contact-dialog-title">Contact the RevoGrid team</h2>
      <p id="contact-dialog-description">Tell us about your product, team, or licensing question.</p>
    </header>
    <TrialRequestForm submit-label="Submit" request-type="contact" @submit="handleSubmit" />
  </ModalDialog>
</template>

<script setup lang="ts">
import ModalDialog from '../.vitepress/theme/ModalDialog.vue'
import TrialRequestForm from './TrialRequestForm.vue'

type ContactRequestPayload = {
  fullName: string
  companyName: string
  businessEmail: string
  applicationInfo: string
  consent: boolean
  requestType: 'contact' | 'trial'
  requestLabel: string
}

defineProps<{
  isVisible: boolean
}>()

const emit = defineEmits<{
  (event: 'close'): void
  (event: 'submit', formData: ContactRequestPayload): void
}>()

const closeModal = () => emit('close')

const handleSubmit = (formData: ContactRequestPayload) => {
  emit('submit', formData)
}
</script>

<style lang="scss" scoped>
.contact-modal-heading {
  padding-right: 38px;
  margin-bottom: 24px;

  h2 {
    margin: 0 0 8px;
    color: var(--vp-c-text-1);
    font-size: 26px;
    line-height: 1.2;
  }

  p {
    margin: 0;
    color: var(--vp-c-text-2);
    font-size: 14px;
    line-height: 1.55;
  }
}

@media (max-width: 560px) {
  .contact-modal-heading {
    padding-right: 44px;
  }
}
</style>
