import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api, apiRoutes } from '@/api.ts';
import type {
  ProfileInterface,
  RequestStateInterface,
  ResponseStateInterface
} from '@/types/profile.interface.ts';
import type { UserInterface } from '@/types/user.interface.ts';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth.store.ts';

export const useProfileStore = defineStore('profile', () => {
  const user = ref<UserInterface | null>(null)
  const router = useRouter()
  const authStore = useAuthStore()

  const getUser = async () => {
    try {
      const { data } = await api.get<ProfileInterface>(apiRoutes.PROFILE)
      user.value = {
        email: data.data.user.email,
        id: data.data.user.id,
        username: data.data.user.username,
      }
    } catch (e) {
      console.error(e)
      authStore.clearToken()
      router.replace({ name: 'login' })
    }
  }

  const setState = async (payload: RequestStateInterface)=> {
    try {
      await api.post<ResponseStateInterface>(apiRoutes.STATS, payload)
    } catch (e) {
      console.error(e)
    }
  }

  return {
    getUser,
    setState,
    user,
  }
})
