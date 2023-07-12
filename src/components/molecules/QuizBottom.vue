<script setup lang="ts">
import QuizCheck from '@/components/atoms/QuizCheck.vue'
import QuizCount from '@/components/atoms/QuizCount.vue'
import QuizBtn from '@/components/atoms/QuizBtn.vue'

import { useQuizStore } from '@/stores/quiz'

const { correctAnswer, quizLengthCount, toBeAnswered } = useQuizStore()
</script>

<template>
  <div class="quiz-bottom">
    <QuizCheck 
      v-show="!toBeAnswered"
      :correctAnswer="correctAnswer"
    />
    
    <QuizCount :count="quizLengthCount"/>

    <QuizBtn label="test"/>
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