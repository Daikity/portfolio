import { createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Главная',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/portfolio',
    name: 'Мои работы',
    component: () => import('@/views/portfolio.vue')
  },
  {
    path: '/blog',
    name: 'Блог',
    component: () => import('@/views/portfolio.vue')
  },
  {
    path: '/notes',
    name: 'Заметки',
    component: () => import('@/views/notes.vue')
  },
  {
    path: '/aboutme',
    name: 'Про меня',
    component: () => import('@/views/About.vue')
  }
]

const router = createRouter({
  mode: 'hash',
  // history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
