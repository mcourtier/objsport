<template>
  <UFormField :label="label" :name="name" :required="required" :error="error">
    <UTextarea
      v-if="multiline"
      :id="id"
      :name="name"
      :model-value="modelValue"
      :required="required"
      :rows="rows"
      :autocomplete="autocomplete"
      class="w-full"
      @update:model-value="emit('update:modelValue', $event)"
    />
    <UInput
      v-else
      :id="id"
      :name="name"
      :type="type"
      :model-value="modelValue"
      :required="required"
      :autocomplete="autocomplete"
      :inputmode="inputmode"
      class="w-full"
      @update:model-value="emit('update:modelValue', $event)"
    />
  </UFormField>
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
</script>
