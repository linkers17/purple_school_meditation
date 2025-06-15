import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api, apiRoutes } from '@/api.ts';
import type {
  ProfileInterface,
  RequestStateInterface,
  ResponseStateInterface
} from '@/types/profile.interface.ts';
import type { UserInterface } from '@/types/user.interface.ts';

export const useProfileStore = defineStore('profile', () => {
  const user = ref<UserInterface | null>(null)

  const getUser = async () => {
    const { data } = await api.get<ProfileInterface>(apiRoutes.PROFILE)
    user.value = {
      email: data.data.user.email,
      id: data.data.user.id,
      username: data.data.user.username,
    }
  }

  const setState = async (payload: RequestStateInterface)=> {
    await api.post<ResponseStateInterface>(apiRoutes.STATS, payload)
  }

  return {
    getUser,
    setState,
    user,
  }
})
