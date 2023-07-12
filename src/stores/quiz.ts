import { defineStore } from 'pinia'

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    correctAnswer: false,
    quizLengthCount: 0,
    selectedOption: null,
    toBeAnswered: false,
    moreQuestions: false,
    options: ['s', 'e', 'dd', '22w'],
    quizSubmitted: false,
  }),
  actions: {
    handleSubmission() {
      this.quizSubmitted = true
    }
  }
})
