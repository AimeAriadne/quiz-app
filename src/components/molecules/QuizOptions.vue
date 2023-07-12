<script setup lang="ts">
import QuizOption from '@/components/atoms/QuizOption.vue'
import { useQuizStore } from '@/stores/quiz';
const options: string[] = ['s', 'e', 'dd', '22w']

const { selectedOption, toBeAnswered } = useQuizStore()

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
