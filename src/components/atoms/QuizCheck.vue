<script setup lang="ts">
const props = defineProps<{
  correctAnswer: boolean
}>()
</script>

<template>
  <p
    class="quiz-check"
    :class="correctAnswer ? 'quiz-correct' : 'quiz-incorrect'"
  >
    {{ correctAnswer ? 'Correct!' : 'Incorrect!' }}
  </p>
</template>

<style>
.quiz-correct {
  @apply
    bg-green-500
    text-green-600
    border-green-600
}

.quiz-incorrect {
  @apply
    bg-red-500
    text-red-600
    border-red-600
}

.quiz-correct,
.quiz-incorrect {
  @apply
    text-lg
    text-center
    font-semibold
    p-1
    border-solid
    bg-opacity-30
}
</style>