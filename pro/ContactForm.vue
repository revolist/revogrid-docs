<template>
    <div v-if="isVisible" class="modal">
        <div class="modal-content">
            <button class="close" type="button" aria-label="Close" @click="closeModal">&times;</button>
            <TrialRequestForm title="Contact Us" submit-label="Submit" @submit="handleSubmit" />
        </div>
    </div>
</template>

<script setup lang="ts">
import TrialRequestForm from './TrialRequestForm.vue'

defineProps<{
    isVisible: boolean
}>()

const emit = defineEmits<{
    (e: 'close'): void
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

const closeModal = () => {
    emit('close')
}

const handleSubmit = (formData: {
    fullName: string
    companyName: string
    businessEmail: string
    applicationInfo: string
    consent: boolean
}) => {
    emit('submit', formData)
}
</script>

<style lang="scss">
.modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;

    &-content {
        background: var(--vp-c-bg);
        padding: 25px;
        border-radius: 8px;
        width: 500px;
        max-width: 100%;
        position: relative;

        .close {
            position: absolute;
            top: 10px;
            right: 15px;
            border: 0;
            background: transparent;
            color: var(--vp-c-text-1);
            cursor: pointer;
            font-size: 30px;
        }
    }
}
</style>
