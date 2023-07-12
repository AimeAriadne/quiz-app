<script setup lang="ts">
import QuizOption from '@/components/atoms/QuizOption.vue'
import { useQuizStore } from '@/stores/quiz'

const { 
  selectedOption, 
  toBeAnswered, 
  options
} = useQuizStore()

</script>

<template>
  <div class="quiz-options" >
    <QuizOption  
      v-model="selectedOption"
      v-for="(option, index) in options"
      :key="`option-${index}`"
      :option="option" 
      :disabled="!toBeAnswered"
    />
  </div>
</template>

<style scoped>
.quiz-options {
  @apply
  text-slate-100
    text-lg
    p-6
}
</style>