<script setup lang="ts">
import QuizCheck from '@/components/atoms/QuizCheck.vue'
import QuizCount from '@/components/atoms/QuizCount.vue'
import QuizBtn from '@/components/atoms/QuizBtn.vue'

const props = defineProps<{
  correctAnswer: boolean, 
  quizLengthCount: string,
  toBeAnswered: boolean,
  selectedOption: string | null,
  moreQuestions: boolean
}>()

const emit = defineEmits<{
  (e: 'handleSubmit'): void,
  (e: 'handleNext'): void,
}>()
</script>

<template>
  <div class="quiz-bottom">
    <div class="quiz-bottom-message">
      <QuizCheck 
        v-show="!toBeAnswered"
        :correctAnswer="correctAnswer"
      />
    </div>
    
    <QuizCount :count="quizLengthCount"/>

    <QuizBtn 
      v-if="toBeAnswered"
      label="Submit"
      type="button"
      :disabled="!selectedOption"
      @click="emit('handleSubmit')"
    />

    <QuizBtn 
      v-else-if="moreQuestions"
      label="Next"
      type="button"
      @click="emit('handleNext')"
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

.quiz-bottom-message {
  @apply
    w-3/6
}

.quiz-count {
  @apply
    text-slate-100
    font-semibold
}
</style>