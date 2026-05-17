<template>
  <div>
    <label
      :for="id"
      class="font-display text-xs font-semibold uppercase tracking-button text-text-muted"
    >
      {{ label }}
      <span
        v-if="required"
        class="text-brand-red"
        aria-hidden="true"
      >*</span>
    </label>
    <component
      :is="multiline ? 'textarea' : 'input'"
      :id="id"
      :name="name"
      :type="multiline ? undefined : type"
      :value="modelValue"
      :required="required"
      :rows="multiline ? rows : undefined"
      :autocomplete="autocomplete"
      :inputmode="inputmode"
      :aria-invalid="Boolean(error)"
      :aria-describedby="error ? `${id}-error` : undefined"
      class="mt-2 w-full border border-border-subtle bg-bg-base px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-brand-red focus:outline-none"
      @input="onInput"
    />
    <p
      v-if="error"
      :id="`${id}-error`"
      class="mt-2 text-sm text-brand-red"
      role="alert"
    >
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    id: string
    name: string
    label: string
    modelValue: string
    error?: string
    required?: boolean
    multiline?: boolean
    rows?: number
    type?: 'text' | 'email' | 'tel'
    autocomplete?: string
    inputmode?: 'text' | 'email' | 'tel'
  }>(),
  {
    required: false,
    multiline: false,
    rows: 5,
    type: 'text',
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

function onInput(event: Event) {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement
  emit('update:modelValue', target.value)
}
</script>
