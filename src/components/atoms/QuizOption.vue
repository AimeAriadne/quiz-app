<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  option: string,
  disabled?: boolean,
  modelValue: string | null, 
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | null): void
}>()

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <div class="quiz-option">
    <input 
      :id="option"
      :value="option"
      :disabled="disabled"
      type="radio"
      name="option"  
      v-model="value"
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