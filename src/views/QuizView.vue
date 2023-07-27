<script setup lang="ts">
import { watch } from 'vue'
import QuizTitleText from '@/components/atoms/QuizTitleText.vue'
import QuizForm from '@/components/organisms/QuizForm.vue'
import QuizResult from '@/components/molecules/QuizResult.vue'
import { storeToRefs } from 'pinia'
import { useQuizStore } from '@/stores/quiz'

const { 
  loading,
  quizSubmitted,
  correctAnswers,
  questions
 } =  storeToRefs(useQuizStore())
const { restartQuiz } = useQuizStore()

watch(correctAnswers, () => {
  console.log('correctAnswers.value :>> ', correctAnswers.value);
})
</script>

<template>
  <main class="quiz-view">
    <QuizTitleText 
      v-if="loading"
      text="Loading Quiz..."
    />
    
    <QuizForm v-else-if="!loading && !quizSubmitted"/>
    
    <QuizResult 
      v-else
      :correctAnswers="correctAnswers"
      :questions="questions"
      @handle-restart="restartQuiz"
    />
  </main>
</template>

<style scoped>
.quiz-view {
  @apply
    w-6/12
    xl:w-4/12
}
</style>