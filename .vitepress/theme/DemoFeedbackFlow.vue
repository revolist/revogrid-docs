<template>
  <ModalDialog
    :is-visible="isVisible"
    :dialog-id="DEMO_FEEDBACK_ELEMENT_IDS.flow"
    :close-button-id="DEMO_FEEDBACK_ELEMENT_IDS.flowClose"
    title-id="demo-feedback-title"
    description-id="demo-feedback-description"
    close-label="Close demo feedback"
    initial-focus=".demo-feedback-step input, .demo-feedback-next-action"
    mobile-presentation="sheet"
    @close="emit('close', $event)"
  >
    <div v-if="demo" class="demo-feedback-flow" data-demo-feedback-ui>
      <p id="demo-feedback-description" class="demo-feedback-sr-only">
        A short anonymous question about your RevoGrid demo evaluation.
      </p>

      <section
        v-if="step === 'ready'"
        :id="DEMO_FEEDBACK_ELEMENT_IDS.step('ready')"
        class="demo-feedback-step"
      >
        <h2 id="demo-feedback-title" ref="stepHeadingRef" tabindex="-1">{{ readyBranch.title }}</h2>
        <div class="demo-feedback-action-stack">
          <component
            :is="action.href ? 'a' : 'button'"
            v-for="action in readyBranch.actions"
            :key="action.code"
            :id="DEMO_FEEDBACK_ELEMENT_IDS.nextAction(action.code)"
            class="rg-btn demo-feedback-next-action"
            :class="{ 'rg-btn-secondary': !action.primary }"
            :href="action.href"
            :target="action.external ? '_blank' : undefined"
            :rel="action.external ? 'noopener noreferrer' : undefined"
            :type="action.href ? undefined : 'button'"
            @click="chooseNextAction(action)"
          >
            {{ action.label }}
          </component>
        </div>
        <button
          :id="DEMO_FEEDBACK_ELEMENT_IDS.skip('ready')"
          class="demo-feedback-text-button demo-feedback-skip"
          type="button"
          @click="emit('close', 'skip')"
        >
          {{ DEMO_FEEDBACK_COPY.skip }}
        </button>
      </section>

      <section
        v-else-if="step === 'needs_information'"
        :id="DEMO_FEEDBACK_ELEMENT_IDS.step('needs_information')"
        class="demo-feedback-step"
      >
        <h2 id="demo-feedback-title" ref="stepHeadingRef" tabindex="-1">
          {{ DEMO_FEEDBACK_COPY.needsInformation.title }}
        </h2>
        <p class="demo-feedback-description">
          {{ DEMO_FEEDBACK_COPY.needsInformation.description }}
        </p>

        <form :aria-busy="submissionState === 'submitting'" @submit.prevent="submitDetails">
          <fieldset :id="DEMO_FEEDBACK_ELEMENT_IDS.question.verification" class="demo-feedback-fieldset">
            <legend class="demo-feedback-sr-only">Things you still need to verify</legend>
            <label
              v-for="option in verificationOptions"
              :key="option.code"
              :id="DEMO_FEEDBACK_ELEMENT_IDS.verificationOption(option.code)"
              :for="DEMO_FEEDBACK_ELEMENT_IDS.verification(option.code)"
              class="demo-feedback-choice"
              :class="{ 'demo-feedback-choice--selected': verificationAnswers.includes(option.code) }"
            >
              <input
                :id="DEMO_FEEDBACK_ELEMENT_IDS.verification(option.code)"
                v-model="verificationAnswers"
                type="checkbox"
                :value="option.code"
                :disabled="submissionState === 'submitting'"
                @change="handleVerificationChange(option.code, $event)"
              />
              <span>{{ option.label }}</span>
            </label>
          </fieldset>

          <fieldset
            v-if="showRowVolume"
            :id="DEMO_FEEDBACK_ELEMENT_IDS.question.rowVolume"
            class="demo-feedback-inline-fieldset"
          >
            <legend>{{ DEMO_FEEDBACK_COPY.needsInformation.rowVolume }}</legend>
            <label
              v-for="option in DEMO_FEEDBACK_ROW_VOLUME_OPTIONS"
              :id="DEMO_FEEDBACK_ELEMENT_IDS.rowVolumeOption(option.code)"
              :key="option.code"
              :for="DEMO_FEEDBACK_ELEMENT_IDS.rowVolume(option.code)"
            >
              <input
                :id="DEMO_FEEDBACK_ELEMENT_IDS.rowVolume(option.code)"
                v-model="rowVolume"
                type="radio"
                name="demo-feedback-row-volume"
                :value="option.code"
                :disabled="submissionState === 'submitting'"
                @change="handleRowVolumeChange(option.code)"
              />
              <span>{{ option.label }}</span>
            </label>
          </fieldset>

          <DemoFeedbackFormFooter
            :step="step"
            :busy="submissionState === 'submitting'"
            :error-message="errorMessage || validationMessage"
            @skip="emit('close', 'skip')"
          />
        </form>
      </section>

      <section
        v-else-if="step === 'not_fit'"
        :id="DEMO_FEEDBACK_ELEMENT_IDS.step('not_fit')"
        class="demo-feedback-step"
      >
        <h2 id="demo-feedback-title" ref="stepHeadingRef" tabindex="-1">{{ DEMO_FEEDBACK_COPY.notFit.title }}</h2>
        <p class="demo-feedback-description">{{ DEMO_FEEDBACK_COPY.notFit.description }}</p>
        <form :aria-busy="submissionState === 'submitting'" @submit.prevent="submitDetails">
          <fieldset :id="DEMO_FEEDBACK_ELEMENT_IDS.question.notFit" class="demo-feedback-fieldset">
            <legend class="demo-feedback-sr-only">Main reason RevoGrid is not a fit</legend>
            <template v-for="option in DEMO_FEEDBACK_NOT_FIT_OPTIONS" :key="option.code">
              <label
                :id="DEMO_FEEDBACK_ELEMENT_IDS.notFitOption(option.code)"
                :for="DEMO_FEEDBACK_ELEMENT_IDS.notFit(option.code)"
                class="demo-feedback-choice"
                :class="{ 'demo-feedback-choice--selected': notFitReason === option.code }"
              >
                <input
                  :id="DEMO_FEEDBACK_ELEMENT_IDS.notFit(option.code)"
                  v-model="notFitReason"
                  type="radio"
                  name="demo-feedback-not-fit"
                  :value="option.code"
                  :disabled="submissionState === 'submitting'"
                  @change="handleNotFitChange(option.code)"
                />
                <span>{{ option.label }}</span>
              </label>

              <label
                v-if="notFitReason === option.code && notFitFollowUp"
                :id="DEMO_FEEDBACK_ELEMENT_IDS.followUpLabel(option.code)"
                :for="DEMO_FEEDBACK_ELEMENT_IDS.followUp(option.code)"
                class="demo-feedback-follow-up"
              >
                <span>
                  {{ notFitFollowUp.label }}
                  <small>Optional</small>
                </span>
                <input
                  :id="DEMO_FEEDBACK_ELEMENT_IDS.followUp(option.code)"
                  v-model="notFitFreeText"
                  type="text"
                  autocomplete="off"
                  :maxlength="DEMO_FEEDBACK_TEXT_MAX_LENGTH"
                  :disabled="submissionState === 'submitting'"
                />
              </label>
            </template>
          </fieldset>

          <DemoFeedbackFormFooter
            :step="step"
            :busy="submissionState === 'submitting'"
            :error-message="errorMessage || validationMessage"
            @skip="emit('close', 'skip')"
          />
        </form>
      </section>

      <section
        v-else
        :id="DEMO_FEEDBACK_ELEMENT_IDS.step('confirmation')"
        class="demo-feedback-step demo-feedback-confirmation"
      >
        <h2 id="demo-feedback-title" ref="stepHeadingRef" tabindex="-1">Thank you</h2>
        <p class="demo-feedback-description">{{ DEMO_FEEDBACK_COPY.confirmation }}</p>
        <button
          :id="DEMO_FEEDBACK_ELEMENT_IDS.done"
          class="rg-btn demo-feedback-next-action"
          type="button"
          @click="emit('close', 'close')"
        >
          {{ DEMO_FEEDBACK_COPY.done }}
        </button>
      </section>
    </div>
  </ModalDialog>
</template>

<script setup lang="ts">
import { computed, defineComponent, h, nextTick, ref, watch, type PropType } from 'vue'
import type { CatalogDemo } from '../../commercial/productCatalog'
import ModalDialog, { type ModalDialogCloseReason } from './ModalDialog.vue'
import {
  DEMO_FEEDBACK_COPY,
  DEMO_FEEDBACK_ELEMENT_IDS,
  DEMO_FEEDBACK_NOT_FIT_FOLLOW_UPS,
  DEMO_FEEDBACK_NOT_FIT_OPTIONS,
  DEMO_FEEDBACK_ROW_VOLUME_OPTIONS,
  DEMO_FEEDBACK_TEXT_MAX_LENGTH,
  createInitialDemoFeedbackAnswers,
  getDemoFeedbackTextLengthBucket,
  getBranchForPrimaryAnswer,
  getDemoFeedbackReadyBranch,
  getDemoFeedbackVerificationOptions,
  shouldShowRowVolumeQuestion,
  type DemoFeedbackAction,
  type DemoFeedbackAnswers,
  type DemoFeedbackFlowStep,
  type DemoFeedbackNotFitReason,
  type DemoFeedbackOptionSelection,
  type DemoFeedbackPrimaryAnswer,
  type DemoFeedbackRowVolume,
  type DemoFeedbackTextLengthBucket,
  type DemoFeedbackTextUsage,
  type DemoFeedbackVerificationCode,
} from './demoFeedback'

type SubmissionState = 'idle' | 'submitting' | 'succeeded' | 'error'
export type DemoFeedbackFlowCloseReason = ModalDialogCloseReason | 'skip'

const props = withDefaults(defineProps<{
  isVisible: boolean
  demo: CatalogDemo | null
  initialPrimaryAnswer?: DemoFeedbackPrimaryAnswer
  submissionState?: SubmissionState
  errorMessage?: string
}>(), {
  initialPrimaryAnswer: undefined,
  submissionState: 'idle',
  errorMessage: '',
})

const emit = defineEmits<{
  (event: 'close', reason: DemoFeedbackFlowCloseReason): void
  (event: 'submit', value: { primaryAnswer: DemoFeedbackPrimaryAnswer, answers: DemoFeedbackAnswers }): void
  (event: 'next-action', value: { action: DemoFeedbackAction, primaryAnswer: DemoFeedbackPrimaryAnswer, answers: DemoFeedbackAnswers }): void
  (event: 'option-selected', value: DemoFeedbackOptionSelection): void
  (event: 'text-used', value: DemoFeedbackTextUsage): void
}>()

const DemoFeedbackFormFooter = defineComponent({
  name: 'DemoFeedbackFormFooter',
  props: {
    busy: { type: Boolean, default: false },
    errorMessage: { type: String, default: '' },
    step: { type: String as PropType<DemoFeedbackFlowStep>, required: true },
  },
  emits: ['skip'],
  setup(footerProps, { emit: footerEmit }) {
    return () => h('div', { class: 'demo-feedback-form-footer' }, [
      footerProps.errorMessage
        ? h('p', { class: 'demo-feedback-error', role: 'alert' }, footerProps.errorMessage)
        : null,
      h('div', { class: 'demo-feedback-actions' }, [
        h('button', {
          id: DEMO_FEEDBACK_ELEMENT_IDS.skip(footerProps.step),
          class: 'demo-feedback-text-button',
          type: 'button',
          disabled: footerProps.busy,
          onClick: () => footerEmit('skip'),
        }, DEMO_FEEDBACK_COPY.skip),
        h('button', {
          id: DEMO_FEEDBACK_ELEMENT_IDS.submit(footerProps.step),
          class: 'rg-btn',
          type: 'submit',
          disabled: footerProps.busy,
        }, footerProps.busy
          ? 'Sending…'
          : footerProps.errorMessage
            ? 'Retry'
            : DEMO_FEEDBACK_COPY.submit),
      ]),
    ])
  },
})

const step = ref<DemoFeedbackFlowStep>('needs_information')
const primaryAnswer = ref<DemoFeedbackPrimaryAnswer | undefined>()
const verificationAnswers = ref<DemoFeedbackVerificationCode[]>([])
const rowVolume = ref<DemoFeedbackRowVolume | undefined>()
const notFitReason = ref<DemoFeedbackNotFitReason | undefined>()
const notFitFreeText = ref('')
const validationMessage = ref('')
const stepHeadingRef = ref<HTMLElement | null>(null)
const emittedTextBuckets = new Set<DemoFeedbackTextLengthBucket>()

const readyBranch = computed(() => props.demo
  ? getDemoFeedbackReadyBranch(props.demo)
  : { title: '', actions: [] })
const verificationOptions = computed(() => props.demo
  ? getDemoFeedbackVerificationOptions(props.demo.id)
  : [])
const showRowVolume = computed(() => Boolean(
  props.demo && shouldShowRowVolumeQuestion(props.demo.id, verificationAnswers.value),
))
const notFitFollowUp = computed(() => notFitReason.value
  ? DEMO_FEEDBACK_NOT_FIT_FOLLOW_UPS[notFitReason.value]
  : undefined)
const reset = () => {
  primaryAnswer.value = props.initialPrimaryAnswer
  const branch = primaryAnswer.value
    ? getBranchForPrimaryAnswer(primaryAnswer.value)
    : 'needs_information'
  step.value = branch === 'ready' || branch === 'not_fit'
    ? branch
    : 'needs_information'
  const answers = createInitialDemoFeedbackAnswers()
  verificationAnswers.value = answers.verificationAnswers
  rowVolume.value = undefined
  notFitReason.value = undefined
  notFitFreeText.value = ''
  emittedTextBuckets.clear()
  validationMessage.value = ''
}

const handleVerificationChange = (answerCode: DemoFeedbackVerificationCode, event: Event) => {
  validationMessage.value = ''
  const input = event.currentTarget
  if (!(input instanceof HTMLInputElement)) return
  emit('option-selected', {
    questionId: 'verification',
    answerCode,
    isSelected: input.checked,
  })
}

const handleRowVolumeChange = (answerCode: DemoFeedbackRowVolume) => {
  validationMessage.value = ''
  emit('option-selected', {
    questionId: 'row_volume',
    answerCode,
    isSelected: true,
  })
}

const handleNotFitChange = (answerCode: DemoFeedbackNotFitReason) => {
  validationMessage.value = ''
  emit('option-selected', {
    questionId: 'not_fit',
    answerCode,
    isSelected: true,
  })
}

const currentAnswers = (): DemoFeedbackAnswers => ({
  verificationAnswers: [...verificationAnswers.value],
  ...(rowVolume.value ? { rowVolume: rowVolume.value } : {}),
  ...(notFitReason.value ? { notFitReason: notFitReason.value } : {}),
  ...(notFitReason.value && notFitFreeText.value ? { freeText: notFitFreeText.value } : {}),
})

const submitDetails = () => {
  if (!primaryAnswer.value) return
  if (step.value === 'needs_information' && !verificationAnswers.value.length) {
    validationMessage.value = 'Please choose at least one option.'
    return
  }
  if (step.value === 'not_fit' && !notFitReason.value) {
    validationMessage.value = 'Please choose the closest reason.'
    return
  }
  validationMessage.value = ''
  emit('submit', { primaryAnswer: primaryAnswer.value, answers: currentAnswers() })
}

const chooseNextAction = (action: DemoFeedbackAction) => {
  if (!primaryAnswer.value) return
  emit('next-action', { action, primaryAnswer: primaryAnswer.value, answers: currentAnswers() })
}

watch(() => props.isVisible, (isVisible) => {
  if (isVisible) reset()
})

watch(() => props.submissionState, (submissionState) => {
  if (submissionState === 'succeeded') step.value = 'confirmation'
})

watch(notFitReason, (reason, previousReason) => {
  if (previousReason !== undefined && reason !== previousReason) notFitFreeText.value = ''
})

watch(notFitFreeText, (value) => {
  const textLengthBucket = getDemoFeedbackTextLengthBucket(value)
  if (!textLengthBucket || emittedTextBuckets.has(textLengthBucket)) return
  emittedTextBuckets.add(textLengthBucket)
  emit('text-used', {
    questionId: 'not_fit_follow_up',
    hasText: true,
    textLengthBucket,
  })
})

watch(step, async () => {
  if (!props.isVisible) return
  await nextTick()
  stepHeadingRef.value?.focus()
})
</script>

<style lang="scss" scoped>
.demo-feedback-flow {
  color: var(--vp-c-text-1);
}

.demo-feedback-step {
  display: grid;
  gap: 16px;
  padding-right: 38px;

  h2 {
    margin: 0;
    font-size: clamp(1.25rem, 3vw, 1.55rem);
    line-height: 1.2;
    outline: none;
  }
}

.demo-feedback-description {
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: 1.55;
}

.demo-feedback-fieldset,
.demo-feedback-inline-fieldset {
  display: grid;
  gap: 9px;
  margin: 0;
  padding: 0;
  border: 0;
}

.demo-feedback-follow-up {
  display: grid;
  gap: 7px;
  margin: -2px 4px 4px 34px;
  color: var(--vp-c-text-1);
  font-size: 0.86rem;
  font-weight: 650;

  small {
    margin-left: 5px;
    color: var(--vp-c-text-3);
    font-size: 0.76rem;
    font-weight: 500;
  }

  input {
    width: 100%;
    min-height: 42px;
    padding: 0 12px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    background: var(--vp-c-bg);
    color: var(--vp-c-text-1);
    font: inherit;
    font-weight: 400;
    transition: border-color 0.16s ease, box-shadow 0.16s ease;

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
}

.demo-feedback-choice {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: start;
  padding: 11px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
  font-size: 0.88rem;
  line-height: 1.4;
  cursor: pointer;
  transition: border-color 0.16s ease, background-color 0.16s ease;

  &:hover,
  &--selected {
    border-color: color-mix(in srgb, var(--vp-c-brand-1) 58%, var(--vp-c-divider));
    background: color-mix(in srgb, var(--vp-c-brand-soft) 72%, var(--vp-c-bg));
    color: var(--vp-c-text-1);
  }

  &--selected {
    box-shadow: inset 0 0 0 1px var(--vp-c-brand-1);
    font-weight: 600;
  }

  &:has(input:focus-visible) {
    outline: 3px solid color-mix(in srgb, var(--vp-c-brand-1) 30%, transparent);
    outline-offset: 2px;
  }

  input {
    margin: 2px 0 0;
    accent-color: var(--vp-c-brand-1);
  }
}

.demo-feedback-inline-fieldset {
  margin-top: 17px;
  padding: 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;

  legend {
    padding: 0 4px;
    font-size: 0.86rem;
    font-weight: 650;
  }

  label {
    display: flex;
    gap: 9px;
    align-items: center;
    color: var(--vp-c-text-2);
    font-size: 0.85rem;
  }

  input {
    accent-color: var(--vp-c-brand-1);
  }
}

.demo-feedback-actions,
:deep(.demo-feedback-actions) {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
  margin-top: 18px;
}

:deep(.demo-feedback-form-footer) {
  margin-top: 18px;
}

.demo-feedback-text-button {
  padding: 8px 10px;
  border: 0;
  background: transparent;
  color: var(--vp-c-text-2);
  font: inherit;
  font-size: 0.86rem;
  cursor: pointer;

  &:hover {
    color: var(--vp-c-text-1);
    text-decoration: underline;
  }

  &:focus-visible {
    border-radius: 6px;
    outline: 3px solid color-mix(in srgb, var(--vp-c-brand-1) 30%, transparent);
  }
}

.demo-feedback-skip {
  justify-self: start;
  margin-left: -10px;
}

.demo-feedback-action-stack {
  display: grid;
  gap: 9px;
}

.demo-feedback-next-action {
  justify-content: center;
  width: 100%;
  text-align: center;
}

.demo-feedback-error,
:deep(.demo-feedback-error) {
  margin: 10px 0 0;
  color: var(--vp-c-danger-1);
  font-size: 0.8rem;
  line-height: 1.45;
}

.demo-feedback-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 560px) {
  .demo-feedback-step {
    gap: 13px;
    padding-right: 30px;
  }

  .demo-feedback-actions,
  :deep(.demo-feedback-actions) {
    flex-direction: column-reverse;
    align-items: stretch;

    .rg-btn,
    .demo-feedback-text-button {
      width: 100%;
      justify-content: center;
    }
  }
}
</style>
