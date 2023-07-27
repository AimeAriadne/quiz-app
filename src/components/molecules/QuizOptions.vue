<script setup lang="ts">
import QuizOption from '@/components/atoms/QuizOption.vue'

const props = defineProps<{
  name: string, 
  disabled: boolean,
  options: string[],
  modelValue: string | null
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | null): void
}>()
</script>

<template>
  <div class="quiz-options" >
    <QuizOption  
      v-for="(option, index) in options"
      :name="name"
      :key="`option-${index}`"
      :value="option" 
      :disabled="disabled"
      :model-value="modelValue"
      @update:model-value="emit('update:modelValue', $event)"
    />
  </div>
</template>

<style scoped>
.quiz-options {
  @apply
  text-slate-100
    text-2xl
    p-6
}
</style>