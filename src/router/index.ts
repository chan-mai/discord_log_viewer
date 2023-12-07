import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/log/:id',
      name: 'log',
      component: () => import('../views/LogView.vue'),
      props: true
    }
  ]
})

export default router
