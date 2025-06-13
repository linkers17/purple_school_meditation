import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  routes: [
    {
      component: () => import('@/views/AuthView.vue'),
      name: 'auth',
      path: '/'
    },
    {
      children: [
        {
          component: () => import('@/views/StatView.vue'),
          name: 'stat',
          path: 'stat',
        },
        {
          component: () => import('@/views/MeditationView.vue'),
          name: 'main',
          path: '',
        },
      ],
      component: () => import('@/views/MainView.vue'),
      path: '/main'
    },
  ],
  history: createWebHistory(),
})
