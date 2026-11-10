<template>
  <Card as="section" aria-labelledby="contact-form-heading">
    <template #title>
      <AppTitle id="contact-form-heading">{{ heading }}</AppTitle>
    </template>

    <p v-if="intro" class="max-w-prose text-neutral-300">
      {{ intro }}
    </p>

    <UAlert
      v-if="status === 'success'"
      class="mt-6"
      color="success"
      variant="subtle"
      title="Message envoyé"
      :description="successMessage"
      role="status"
    />

    <form
      v-else
      class="form-fields mt-6 space-y-5"
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

        <UButton
          type="submit"
          size="xl"
          :loading="isSubmitting"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? 'Envoi en cours…' : submitLabel }}
        </UButton>
    </form>
  </Card>
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
