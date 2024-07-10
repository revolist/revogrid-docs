<template>
    <div v-if="isVisible" class="modal">
        <div class="modal-content">
            <span class="close" @click="closeModal">&times;</span>
            <h1>Contact Us</h1>
            <form @submit.prevent="handleSubmit">
                <div class="form-group">
                    <label for="fullName"
                        >Full Name <span class="required">*</span></label
                    >
                    <input
                        type="text"
                        id="fullName"
                        v-model.trim="form.fullName"
                        required
                        tabindex="0"
                    />
                </div>
                <div class="form-group">
                    <label for="companyName"
                        >Company Name <span class="required">*</span></label
                    >
                    <input
                        type="text"
                        id="companyName"
                        v-model.trim="form.companyName"
                        required
                        tabindex="0"
                    />
                </div>
                <div class="form-group">
                    <label for="businessEmail"
                        >Business Email <span class="required">*</span></label
                    >
                    <input
                        type="email"
                        id="businessEmail"
                        v-model.trim="form.businessEmail"
                        required
                        tabindex="0"
                    />
                </div>
                <div class="form-group">
                    <label for="applicationInfo"
                        >Tell us more about your application (optional)</label
                    >
                    <textarea
                        id="applicationInfo"
                        v-model.trim="form.applicationInfo"
                        tabindex="0"
                    ></textarea>
                </div>
                <div class="form-group consent">
                    <input
                        type="checkbox"
                        id="consent"
                        v-model="form.consent"
                        required
                        tabindex="0"
                    />
                    <label for="consent"
                        >I give my consent to the processing of my personal data
                        entered in the above form for the purpose of addressing
                        the inquiry.</label
                    >
                </div>
                <VPButton text="Submit" type="submit" tabindex="0" />
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, computed } from 'vue'
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue'

const API_URL = import.meta.env.VITE_API_URL;
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

const form = ref({
    fullName: '',
    companyName: '',
    businessEmail: '',
    applicationInfo: '',
    consent: false,
})

const closeModal = () => {
    emit('close')
}

const isFormValid = computed(() => {
    return (
        form.value.fullName &&
        form.value.companyName &&
        form.value.businessEmail &&
        form.value.consent
    )
})

const handleSubmit = async () => {
    if (isFormValid.value) {
        const payload = {
            body: `
        <br>Full Name: ${form.value.fullName}
        <br>Company Name: ${form.value.companyName}
        <br>Business Email: ${form.value.businessEmail}
        <br>Application Info: ${form.value.applicationInfo}
      `,
        }

        try {
            const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                }
            )

            if (response.ok) {
                const result = await response.json()
                console.log('Email sent successfully:', result)
                emit('submit', form.value)
                closeModal()
            } else {
                console.error('Failed to send email:', response.statusText)
            }
        } catch (error) {
            console.error('Error sending email:', error)
        }
    }
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
            cursor: pointer;
            font-size: 30px;
        }

        h1 {
            margin-top: 0;
            margin-bottom: 20px;
        }

        .form-group {
            margin-bottom: 15px;

            .required {
                color: red;
            }

            .error {
                color: red;
                font-size: 12px;
            }
            label {
                display: block;
                margin-bottom: 5px;
            }

            input,
            textarea {
                width: 100%;
                padding: 8px;
                box-sizing: border-box;
                background-color: var(--vp-c-bg-alt);
                border-radius: 8px;

                &:focus {
                    outline: 2px solid var(--vp-c-brand);
                }
            }

            textarea {
                resize: vertical;
                min-height: 100px;
            }
        }

        .consent {
            display: flex;
            align-items: start;
            color: var(--vp-c-text-2);
            font-size: 12px;
            line-height: 18px;

            input {
                margin-right: 10px;
                margin-top: 3px;
                width: auto;
            }
        }

        button {
            background-color: #007bff;
            color: #fff;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;

            &:hover {
                background-color: #0056b3;
            }
        }
    }
}
</style>
