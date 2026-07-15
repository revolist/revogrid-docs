<template>
  <Teleport to="body">
    <div
      v-if="isVisible"
      class="contact-modal"
      @mousedown.self="closeModal"
    >
      <div
        ref="dialogRef"
        class="contact-modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-dialog-title"
        aria-describedby="contact-dialog-description"
        tabindex="-1"
      >
        <button class="contact-modal-close" type="button" aria-label="Close contact form" @click="closeModal">
          <VPImage :image="{ src: 'plus.svg' }" aria-hidden="true" />
        </button>
        <header class="contact-modal-heading">
          <h2 id="contact-dialog-title">Contact the RevoGrid team</h2>
          <p id="contact-dialog-description">Tell us about your product, team, or licensing question.</p>
        </header>
        <TrialRequestForm submit-label="Submit" request-type="contact" @submit="handleSubmit" />
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'
import VPImage from '../.vitepress/theme/VPImage.vue'
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

const props = defineProps<{
  isVisible: boolean
}>()

const emit = defineEmits<{
  (event: 'close'): void
  (event: 'submit', formData: ContactRequestPayload): void
}>()

const dialogRef = ref<HTMLElement | null>(null)
let previouslyFocused: HTMLElement | null = null
let previousBodyOverflow = ''

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'textarea:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

const closeModal = () => emit('close')

const handleSubmit = (formData: ContactRequestPayload) => {
  emit('submit', formData)
}

const handleDialogKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    event.preventDefault()
    closeModal()
    return
  }

  if (event.key !== 'Tab' || !dialogRef.value) return

  const focusable = Array.from(
    dialogRef.value.querySelectorAll<HTMLElement>(focusableSelector),
  ).filter((element) => !element.hasAttribute('disabled') && element.offsetParent !== null)

  if (!focusable.length) {
    event.preventDefault()
    dialogRef.value.focus()
    return
  }

  const first = focusable[0]
  const last = focusable[focusable.length - 1]
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

const restorePageState = () => {
  document.removeEventListener('keydown', handleDialogKeydown)
  document.body.style.overflow = previousBodyOverflow
  previouslyFocused?.focus()
  previouslyFocused = null
}

watch(
  () => props.isVisible,
  async (isVisible) => {
    if (!isVisible) {
      restorePageState()
      return
    }

    previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null
    previousBodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleDialogKeydown)
    await nextTick()

    const initialFocus = dialogRef.value?.querySelector<HTMLElement>('input:not([disabled])')
    ;(initialFocus ?? dialogRef.value)?.focus()
  },
)

onBeforeUnmount(() => {
  if (props.isVisible) restorePageState()
})
</script>

<style lang="scss" scoped>
.contact-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
  z-index: 1000;
  padding: 20px;
  background: rgba(0, 0, 0, 0.58);
}

.contact-modal-content {
  width: min(560px, 100%);
  max-height: calc(100vh - 40px);
  overflow-y: auto;
  position: relative;
  padding: 30px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.3);
  outline: none;

  &:focus-visible {
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--vp-c-brand-1) 34%, transparent),
      0 24px 80px rgba(0, 0, 0, 0.3);
  }
}

.contact-modal-close {
  display: grid;
  place-items: center;
  position: absolute;
  top: 14px;
  right: 14px;
  width: 36px;
  height: 36px;
  padding: 0;
  border: 1px solid transparent;
  border-radius: 8px;
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;

  &:hover {
    border-color: var(--vp-c-divider);
    background: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
  }

  &:focus-visible {
    outline: 3px solid color-mix(in srgb, var(--vp-c-brand-1) 34%, transparent);
    outline-offset: 2px;
  }

  :deep(svg) {
    width: 18px;
    height: 18px;
    transform: rotate(45deg);
  }
}

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
  .contact-modal {
    align-items: flex-start;
    padding: 12px;
  }

  .contact-modal-content {
    max-height: calc(100vh - 24px);
    padding: 24px 18px;
  }

  .contact-modal-heading {
    padding-right: 44px;
  }
}
</style>
