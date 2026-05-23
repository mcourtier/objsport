<template>
  <section class="py-16 md:py-24" aria-labelledby="contact-form-heading">
    <div class="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
      <h2
        id="contact-form-heading"
        class="font-display text-neutral-100 text-4xl font-bold tracking-wide uppercase md:text-5xl"
      >
        {{ heading }}
      </h2>
      <p v-if="intro" class="text-neutral-300 mt-6 max-w-prose text-lg">
        {{ intro }}
      </p>

      <UAlert
        v-if="status === 'success'"
        class="mt-10"
        color="success"
        variant="subtle"
        title="Message envoyé"
        :description="successMessage"
        role="status"
      />

      <form
        v-else
        class="border-neutral-700 bg-neutral-800 mt-10 space-y-6 border p-8 md:p-10"
        novalidate
        @submit.prevent="onSubmit"
      >
        <UiFormField
          id="contact-name"
          v-model="fields.name"
          name="name"
          label="Nom"
          :error="errors.name"
          required
          autocomplete="name"
          @update:model-value="clearError('name')"
        />

        <UiFormField
          id="contact-email"
          v-model="fields.email"
          name="email"
          label="E-mail"
          type="email"
          :error="errors.email"
          required
          autocomplete="email"
          inputmode="email"
          @update:model-value="clearError('email')"
        />

        <UiFormField
          id="contact-phone"
          v-model="fields.phone"
          name="phone"
          label="Téléphone"
          type="tel"
          :error="errors.phone"
          autocomplete="tel"
          inputmode="tel"
          @update:model-value="clearError('phone')"
        />

        <UiFormField
          id="contact-message"
          v-model="fields.message"
          name="message"
          label="Message"
          :error="errors.message"
          required
          multiline
          :rows="6"
          @update:model-value="clearError('message')"
        />

        <UAlert
          v-if="status === 'error'"
          color="error"
          variant="subtle"
          :description="errorMessage"
          role="alert"
        />

        <AppButton
          type="submit"
          :loading="isSubmitting"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? 'Envoi en cours…' : submitLabel }}
        </AppButton>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  validateContactForm,
  type ContactFormErrors,
  type ContactFormField,
  type ContactFormFields,
} from '~/utils/validateContactForm'

withDefaults(
  defineProps<{
    heading?: string
    intro?: string
    submitLabel?: string
    successMessage?: string
    errorMessage?: string
  }>(),
  {
    heading: 'Contactez-nous',
    submitLabel: 'Envoyer le message',
    successMessage:
      'Merci ! Votre message a bien été envoyé. Nous vous répondrons sous peu.',
    errorMessage:
      'Une erreur est survenue lors de l’envoi. Veuillez réessayer.',
  },
)

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const fields = reactive<ContactFormFields>({
  name: '',
  email: '',
  phone: '',
  message: '',
})

const errors = ref<ContactFormErrors>({})
const status = ref<FormStatus>('idle')
const isSubmitting = computed(() => status.value === 'submitting')

function clearError(field: ContactFormField) {
  if (errors.value[field]) {
    const next = { ...errors.value }
    delete next[field]
    errors.value = next
  }
}

async function onSubmit() {
  const validationErrors = validateContactForm(fields)
  errors.value = validationErrors

  if (Object.keys(validationErrors).length > 0) {
    return
  }

  status.value = 'submitting'

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: fields.name.trim(),
        email: fields.email.trim(),
        phone: fields.phone.trim(),
        message: fields.message.trim(),
      },
    })
    status.value = 'success'
  } catch {
    status.value = 'error'
  }
}
</script>
