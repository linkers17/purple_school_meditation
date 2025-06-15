import axios from 'axios';
import { useAuthStore } from '@/stores/auth.store'

export enum apiRoutes {
  LOGIN = 'auth/login',
  MEDITATION_LIST = 'meditations',
  PROFILE = 'profile',
  REGISTER = 'auth/register',
  STATS = 'stats',
}

export const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 10000,
})

api.interceptors.request.use((config) => {
  const authStore = useAuthStore()
  if (authStore.getToken) {
    config.headers['Authorization'] = `Bearer ${authStore.getToken}`
  }
  return config
})
