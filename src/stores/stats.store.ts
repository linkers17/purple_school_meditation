import { defineStore } from 'pinia';
import { ref } from 'vue';
import type {
  RequestDurationStatsInterface, ResponseDurationStatsInterface,
  StatsResponseInterface
} from '@/types/stats.interface.ts';
import { api, apiRoutes } from '@/api.ts';

export const useStatsStore = defineStore('stats', () => {
  const stats = ref<StatsResponseInterface | null>(null)

  const fetchStats = async () => {
    try {
      const { data } = await api.get<StatsResponseInterface>(apiRoutes.STATS)
      stats.value = data
    } catch (e) {
      console.error(e)
      alert(e)
    }
  }

  const setDuration = async (payload: RequestDurationStatsInterface) => {
    try {
      await api.post<ResponseDurationStatsInterface>(apiRoutes.STATS, payload)
    } catch (e) {
      console.error(e)
      alert(e)
    }
  }

  return {
    fetchStats,
    setDuration,
    stats,
  }
})
