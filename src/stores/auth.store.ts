import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type {
  RequestLoginInterface,
  RequestRegisterInterface,
  ResponseLoginInterface, ResponseRegisterInterface
} from '@/types/auth.interface.ts';
import { api, apiRoutes } from '@/api.ts';
import { useProfileStore } from '@/stores/profile.store.ts';

const TOKEN_AUTH_KEY = 'token-store'


export const useAuthStore = defineStore('auth', () => {
  const profileStore = useProfileStore()

  const token = ref<string>('')

  const initialValue = localStorage.getItem(TOKEN_AUTH_KEY)

  if (initialValue) {
    token.value = initialValue
  }

  const setToken = (newToken: string) => {
    token.value = newToken
    localStorage.setItem(TOKEN_AUTH_KEY, newToken)
  }

  const clearToken = () => {
    token.value = ''
    localStorage.removeItem(TOKEN_AUTH_KEY)
  }

  const getToken = computed(() => token.value)

  const login = async (payload: RequestLoginInterface) => {
    const { data } = await api.post<ResponseLoginInterface>(apiRoutes.LOGIN, payload)
    setToken(data.data.token)
    profileStore.user = {
      email: data.data.user.email,
      id: data.data.user.id,
      username: data.data.user.username,
    }
    return data
  }

  const register = async (payload: RequestRegisterInterface) => {
    const { data } = await api.post<ResponseRegisterInterface>(apiRoutes.REGISTER, payload)
    return data
  }

  return {
    clearToken,
    getToken,
    login,
    register,
    setToken,
  }
})
