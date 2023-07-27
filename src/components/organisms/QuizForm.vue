<script setup lang="ts">
import { watch } from 'vue'

import QuizTitleText from '@/components/atoms/QuizTitleText.vue'
import QuizOptions from '@/components/molecules/QuizOptions.vue'
import QuizBottom from '@/components/molecules/QuizBottom.vue'
import { storeToRefs } from 'pinia'
import { useQuizStore } from '@/stores/quiz'

const { 
  question,
  selectedOption, 
  toBeAnswered, 
  options,
  correctAnswer, 
  quizLengthCount,
  moreQuestions
 } = storeToRefs(useQuizStore())

const { 
  handleSubmission, 
  checkAnswer,
  callNextQuestion,
} = useQuizStore()

watch(selectedOption, () => {
  console.log('selectedOption.value :>> ', selectedOption.value);
})
</script>

<template>
  <form 
    class="quiz-form"
    @submit.prevent="handleSubmission"  
  >
    <QuizTitleText :text="question.question"/>

    <QuizOptions 
      v-model="selectedOption"
      :disabled="!toBeAnswered"
      :options="options"
      name="answer"
    />

    <QuizBottom
      :correctAnswer="correctAnswer" 
      :quizLengthCount="quizLengthCount"
      :toBeAnswered="toBeAnswered"
      :selectedOption="selectedOption"
      :moreQuestions="moreQuestions"
      @handle-submit="checkAnswer"
      @handle-next="callNextQuestion"
    />
  </form>
</template>

