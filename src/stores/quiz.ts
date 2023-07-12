import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useQuizStore = defineStore('quiz', () => {
  const correctAnswer = ref(false)
  const quizLengthCount = ref(0)
  const selectedOption = ref(null)
  const toBeAnswered = ref(true)

  return { correctAnswer, quizLengthCount, selectedOption, toBeAnswered }
})
