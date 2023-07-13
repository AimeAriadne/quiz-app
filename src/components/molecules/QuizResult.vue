<script setup lang="ts">
import QuizTitleText from '@/components/atoms/QuizTitleText.vue'
import QuizBtn from '@/components/atoms/QuizBtn.vue'
import { storeToRefs } from 'pinia'
import { useQuizStore } from '@/stores/quiz'

const emit = defineEmits<{
  (e: 'handleRestart'): void
}>()

const { 
  correctAnswers, 
  questions, 
} = storeToRefs(useQuizStore())

</script>

<template>
  <div class="quiz-result">
    <QuizTitleText :text="`Your final score is ${correctAnswers} out of ${questions.length }`"/>

    <QuizBtn 
      label="Restart"
      type="button"
      @click="emit('handleRestart')"
    />
  </div>
</template>

<style scoped>
.quiz-result {
  @apply
    flex
    flex-col
    items-center
    gap-4
}
</style>