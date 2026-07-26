<template>
  <Teleport to="body">
    <div
      v-if="isVisible"
      class="modal-dialog-backdrop"
      :class="`modal-dialog-backdrop--${mobilePresentation}`"
      @click.self="handleBackdrop"
    >
      <div
        :id="dialogId || undefined"
        ref="dialogRef"
        class="modal-dialog-content"
        :class="[
          `modal-dialog-content--${size}`,
          `modal-dialog-content--mobile-${mobilePresentation}`,
        ]"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="titleId"
        :aria-describedby="descriptionId || undefined"
        tabindex="-1"
      >
        <button
          :id="closeButtonId || undefined"
          class="modal-dialog-close"
          type="button"
          :aria-label="closeLabel"
          @click="emit('close', 'close')"
        >
          <VPImage :image="{ src: 'plus.svg' }" aria-hidden="true" />
        </button>
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'
import VPImage from './VPImage.vue'

export type ModalDialogCloseReason = 'close' | 'escape' | 'backdrop'

const props = withDefaults(defineProps<{
  isVisible: boolean
  titleId: string
  descriptionId?: string
  closeLabel?: string
  dialogId?: string
  closeButtonId?: string
  initialFocus?: string
  size?: 'default' | 'wide'
  mobilePresentation?: 'dialog' | 'sheet'
  closeOnBackdrop?: boolean
}>(), {
  descriptionId: '',
  closeLabel: 'Close dialog',
  dialogId: '',
  closeButtonId: '',
  initialFocus: '',
  size: 'default',
  mobilePresentation: 'dialog',
  closeOnBackdrop: true,
})

const emit = defineEmits<{
  (event: 'close', reason: ModalDialogCloseReason): void
}>()

const dialogRef = ref<HTMLElement | null>(null)
let previouslyFocused: HTMLElement | null = null
let previousBodyOverflow = ''
let isListening = false

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'textarea:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

const visibleFocusableElements = () => {
  if (!dialogRef.value) return []
  return Array.from(
    dialogRef.value.querySelectorAll<HTMLElement>(focusableSelector),
  ).filter((element) => element.offsetParent !== null)
}

const handleDialogKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    event.preventDefault()
    emit('close', 'escape')
    return
  }

  if (event.key !== 'Tab' || !dialogRef.value) return

  const focusable = visibleFocusableElements()
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
  if (isListening) {
    document.removeEventListener('keydown', handleDialogKeydown)
    isListening = false
  }
  document.body.style.overflow = previousBodyOverflow
  previouslyFocused?.focus()
  previouslyFocused = null
}

const handleBackdrop = () => {
  if (props.closeOnBackdrop) emit('close', 'backdrop')
}

watch(
  () => props.isVisible,
  async (isVisible) => {
    if (!isVisible) {
      restorePageState()
      return
    }

    previouslyFocused = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null
    previousBodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleDialogKeydown)
    isListening = true
    await nextTick()

    const requestedFocus = props.initialFocus
      ? dialogRef.value?.querySelector<HTMLElement>(props.initialFocus)
      : null
    ;(requestedFocus ?? visibleFocusableElements()[0] ?? dialogRef.value)?.focus()
  },
)

onBeforeUnmount(() => {
  if (props.isVisible) restorePageState()
})
</script>

<style lang="scss" scoped>
.modal-dialog-backdrop {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
  z-index: 1000;
  padding: 20px;
  background: rgba(0, 0, 0, 0.58);
}

.modal-dialog-content {
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
    box-shadow:
      0 0 0 3px color-mix(in srgb, var(--vp-c-brand-1) 34%, transparent),
      0 24px 80px rgba(0, 0, 0, 0.3);
  }
}

.modal-dialog-content--default {
  width: min(560px, 100%);
}

.modal-dialog-content--wide {
  width: min(720px, 100%);
}

.modal-dialog-close {
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

@media (max-width: 560px) {
  .modal-dialog-backdrop {
    align-items: flex-start;
    padding: 12px;
  }

  .modal-dialog-content {
    max-height: calc(100vh - 24px);
    padding: 24px 18px;
  }

  .modal-dialog-backdrop--sheet {
    align-items: flex-end;
    padding: 0;
  }

  .modal-dialog-content--mobile-sheet {
    width: 100%;
    max-height: min(88vh, 760px);
    padding: 26px 18px calc(20px + env(safe-area-inset-bottom));
    border-right: 0;
    border-bottom: 0;
    border-left: 0;
    border-radius: 18px 18px 0 0;
  }
}
</style>
