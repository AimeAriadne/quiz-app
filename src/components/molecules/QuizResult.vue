<script setup lang="ts">
import QuizTitleText from '@/components/atoms/QuizTitleText.vue'
import QuizBtn from '@/components/atoms/QuizBtn.vue'
import type IQuestion from '@/interfaces/IQuestion';

const props = defineProps<{
  correctAnswers: number, 
  questions: IQuestion[],
}>()

const emit = defineEmits<{
  (e: 'handleRestart'): void
}>()

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