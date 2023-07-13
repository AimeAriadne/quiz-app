import { defineStore } from 'pinia'
import { useFetchQuiz } from '@/composables/useFetchQuiz.js'
import type IQuestion from '@/interfaces/IQuestion'

const { data, loading, fetch } =  useFetchQuiz('https://opentdb.com/api.php?amount=5&category=10&difficulty=easy&type=multiple')

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    correctAnswer: false as boolean,
    correctAnswers: 0 as number,
    selectedOption: null as string | null,
    toBeAnswered: true as boolean,
    quizSubmitted: false as boolean,
    questions: data as unknown as IQuestion[],
    questionIndex: 0 as number,
    loading: loading as unknown as boolean,
  }),
  getters: {
    question(state): IQuestion {
      return state.questions[state.questionIndex]
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
    changePosition(): number {
      return Math.floor(Math.random() * 4)
    },
    checkAnswer(): void {
      if (this.selectedOption === this.question.correct_answer) {
        this.correctAnswers = +1
        this.correctAnswer = true
      } else {
        this.correctAnswer = false
      }
      this.toBeAnswered = false
    },
    callNextQuestion() : void {
      this.questionIndex += 1
      this.correctAnswer = false
      this.selectedOption = null
      this.toBeAnswered = true
    },
    handleSubmission(): void {
      this.quizSubmitted = true
    },
    restartQuiz() {
      fetch()
      this.questionIndex = 0
      this.selectedOption = null
      this.toBeAnswered = true
      this.correctAnswers = 0
      this.quizSubmitted = false
    }
  }
})
