import { createRouter, createWebHistory } from 'vue-router'
import QuizView from '../views/QuizView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: QuizView
    },
  ]
})

export default router
