import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/index.vue'),
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/404/index.vue'),
    },
    {
      path: '/:pathMatch(.*)*', //正则匹配
      redirect: '/404',
      name: 'any',
    },
  ],
})

export default router
