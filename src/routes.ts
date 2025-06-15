import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth.store.ts';

export const router = createRouter({
  routes: [
    {
      children: [
        {
          component: () => import('@/views/LoginView.vue'),
          name: 'login',
          path: 'login'
        },
        {
          component: () => import('@/views/RegisterView.vue'),
          name: 'register',
          path: 'register'
        },
        {
          component: () => import('@/views/WelcomeView.vue'),
          name: 'welcome',
          path: 'welcome'
        },
      ],
      component: () => import('@/views/AuthView.vue'),
      name: 'auth',
      path: '/',
      redirect: 'welcome',
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

router.beforeEach((to) => {
  const authStore = useAuthStore()
  if (to.name === 'welcome') {
    return
  }
  if (!authStore.getToken && (to.name !== 'login' && to.name !== 'register')) {
    return { name: 'login' }
  }
  if (authStore.getToken && (to.name === 'login' || to.name === 'register')) {
    return { name: 'main' }
  }
})
