<script setup lang="ts">
const props = defineProps<{
  option: string,
  disabled?: boolean,
  modelValue: string | null
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <div class="quiz-option">
    <input 
      :id="option"
      :value="modelValue"
      :disabled="disabled"
      type="radio"
      name="option"  
      @change="emit('update:modelValue', option)"
    >

    <label :for="option">{{ option }}</label>
  </div>
</template>

<style scoped>
.quiz-option {
  @apply
    flex
    gap-2
}
</style>