<script setup lang="ts">
import QuizTitleText from '@/components/atoms/QuizTitleText.vue'
import QuizOptions from '@/components/molecules/QuizOptions.vue'
import QuizBottom from '@/components/molecules/QuizBottom.vue'
import { storeToRefs } from 'pinia'
import { useQuizStore } from '@/stores/quiz'

const { question } = storeToRefs(useQuizStore())

const { 
  handleSubmission, 
  checkAnswer,
  callNextQuestion,
} = useQuizStore()

</script>

<template>
  <form 
    class="quiz-form"
    @submit.prevent="handleSubmission"  
  >
    <QuizTitleText :text="question.question"/>

    <QuizOptions/>

    <QuizBottom
      @handle-submit="checkAnswer"
      @handle-next="callNextQuestion"
    />
  </form>
</template>

