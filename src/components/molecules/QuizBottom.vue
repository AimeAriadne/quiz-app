<script setup lang="ts">
import QuizCheck from '@/components/atoms/QuizCheck.vue'
import QuizCount from '@/components/atoms/QuizCount.vue'
import QuizBtn from '@/components/atoms/QuizBtn.vue'

import { useQuizStore } from '@/stores/quiz'

const { 
    correctAnswer, 
    quizLengthCount, 
    toBeAnswered, 
    selectedOption,
    moreQuestions 
  } = useQuizStore()
</script>

<template>
  <div class="quiz-bottom">
    <QuizCheck 
      v-show="!toBeAnswered"
      :correctAnswer="correctAnswer"
    />
    
    <QuizCount :count="quizLengthCount"/>

    <QuizBtn 
      v-if="toBeAnswered"
      label="Submit"
      type="button"
      :disabled="selectedOption"
    />

    <QuizBtn 
      v-else-if="moreQuestions"
      label="Next"
      type="button"
    />

    <QuizBtn 
      v-else
      label="Submit Quiz"
      type="submit"
    />
  </div>
</template>

<style scoped>
.quiz-bottom {
  @apply
    flex
    items-center
    justify-between
}

.quiz-count {
  @apply
    text-slate-100
    font-semibold
}
</style>