<template>
  <Card as="section" aria-labelledby="rdv-form-heading">
    <template #title>
      <AppTitle id="rdv-form-heading">{{ heading }}</AppTitle>
    </template>

    <p v-if="intro" class="max-w-prose text-neutral-300">
      {{ intro }}
    </p>

    <UAlert
      v-if="status === 'success'"
      class="mt-6"
      color="success"
      variant="subtle"
      title="Demande envoyée"
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
          id="rdv-name"
          v-model="fields.name"
          name="name"
          label="Nom"
          :error="errors.name"
          required
          autocomplete="name"
          @update:model-value="clearError('name')"
        />

        <UiFormField
          id="rdv-email"
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
          id="rdv-phone"
          v-model="fields.phone"
          name="phone"
          label="Téléphone"
          type="tel"
          :error="errors.phone"
          autocomplete="tel"
          inputmode="tel"
          @update:model-value="clearError('phone')"
        />

        <UFormField
          label="Praticien"
          name="memberId"
          size="xl"
          required
          :error="errors.memberId"
        >
          <USelectMenu
            id="rdv-member"
            v-model="fields.memberId"
            :items="memberItems"
            value-key="value"
            label-key="label"
            placeholder="Choisir un praticien"
            :search-input="false"
            size="xl"
            class="w-full"
            :ui="{ content: 'bg-neutral-800' }"
            @update:model-value="clearError('memberId')"
          />
        </UFormField>

        <UiFormField
          id="rdv-preferred-date"
          v-model="fields.preferredDate"
          name="preferredDate"
          label="Date souhaitée"
          type="text"
          autocomplete="off"
          @update:model-value="clearError('preferredDate')"
        />

        <UiFormField
          id="rdv-message"
          v-model="fields.message"
          name="message"
          label="Message"
          :error="errors.message"
          required
          multiline
          :rows="5"
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
  validateRdvForm,
  type RdvFormErrors,
  type RdvFormField,
  type RdvFormFields,
} from '~/utils/validateRdvForm'

const props = withDefaults(
  defineProps<{
    heading?: string
    intro?: string
    submitLabel?: string
    successMessage?: string
    errorMessage?: string
    members: { label: string; value: string; description?: string }[]
    initialMemberId?: string
  }>(),
  {
    heading: 'Votre demande',
    submitLabel: 'Envoyer la demande',
    successMessage:
      'Merci ! Votre demande de rendez-vous a bien été envoyée. Nous vous recontacterons sous peu pour confirmer le créneau.',
    errorMessage:
      'Une erreur est survenue lors de l’envoi. Veuillez réessayer.',
    initialMemberId: '',
  },
)

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const memberItems = computed(() => props.members)

const fields = reactive<RdvFormFields>({
  name: '',
  email: '',
  phone: '',
  memberId: '',
  preferredDate: '',
  message: '',
})

watch(
  () => props.initialMemberId,
  (memberId) => {
    if (memberId) {
      fields.memberId = memberId
    }
  },
  { immediate: true },
)

const errors = ref<RdvFormErrors>({})
const status = ref<FormStatus>('idle')
const isSubmitting = computed(() => status.value === 'submitting')

function clearError(field: RdvFormField) {
  if (errors.value[field]) {
    const next = { ...errors.value }
    delete next[field]
    errors.value = next
  }
}

async function onSubmit() {
  const validationErrors = validateRdvForm(fields)
  errors.value = validationErrors

  if (Object.keys(validationErrors).length > 0) {
    return
  }

  status.value = 'submitting'

  try {
    await $fetch('/api/rdv', {
      method: 'POST',
      body: {
        name: fields.name.trim(),
        email: fields.email.trim(),
        phone: fields.phone.trim(),
        memberId: fields.memberId.trim(),
        preferredDate: fields.preferredDate.trim(),
        message: fields.message.trim(),
      },
    })
    status.value = 'success'
  } catch {
    status.value = 'error'
  }
}
</script>
