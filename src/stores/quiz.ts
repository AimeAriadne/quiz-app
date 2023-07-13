import { defineStore } from 'pinia'
import { useFetchQuiz } from '@/composables/useFetchQuiz.js'
import type IQuestion from '@/interfaces/IQuestion'

const { data, loading } =  useFetchQuiz('https://opentdb.com/api.php?amount=5&category=10&difficulty=easy&type=multiple')

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    correctAnswer: false,
    correctAnswers: 0,
    selectedOption: null,
    toBeAnswered: true,
    quizSubmitted: false,
    questions: data,
    questionIndex: 0,
    loading,
  }),
  getters: {
    question(state): IQuestion {
      return state.questions?.[state.questionIndex]
    },
    options(): string[] {
      const currentOptions = this.question.incorrect_answers
      currentOptions.splice(this.changePosition(), 0, this.question.correct_answer)
      return currentOptions
    },
    moreQuestions(state): boolean {
      return state.questionIndex < (state.questions?.length - 1)
    },
    quizLengthCount(state): string {
      return `${state.questionIndex + 1} / ${state.questions.length}`
    }
  },
  actions: {
    handleSubmission(): void {
      this.quizSubmitted = true
    },
    changePosition(): number {
      return Math.floor(Math.random())
    }
  }
})
