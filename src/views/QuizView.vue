<script setup lang="ts">
import QuizForm from '@/components/organisms/QuizForm.vue'
import { storeToRefs } from 'pinia'
import { useQuizStore } from '@/stores/quiz'

const { loading } =  storeToRefs(useQuizStore())

</script>

<template>
  <main class="quiz-view">
    <div v-if="loading">
      Loading Quiz...
    </div>
    <QuizForm v-else/>
  </main>
</template>

<style scoped>
.quiz-view {
  @apply
    w-6/12
    xl:w-3/12
}
</style>