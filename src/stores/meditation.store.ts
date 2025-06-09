import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { MeditationsListResponse } from '@/types/meditation.interface.ts';
import { api, apiRoutes } from '@/api.ts';

export const useMeditationStore = defineStore('meditation', () => {
  const meditations = ref<MeditationsListResponse | null>(null)

  const fetchMeditations = async () => {
    const { data } = await api.get<MeditationsListResponse>(apiRoutes.MEDITATION_LIST)
    meditations.value = data
  }

  return {
    fetchMeditations,
    meditations,
  }
})
