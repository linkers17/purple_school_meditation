<template>
  <div v-if="statsStore.stats" class="stat">
    <MoodBoosterCard
      v-for="mood in moodBoosterList"
      :key="mood.title"
      :title="mood.title"
      :color="mood.color"
      :time="mood.time"
    />
  </div>
</template>

<script lang="ts" setup>
import { MoodBoosterColors } from '@/types/mood-booster.enum.ts';
import MoodBoosterCard from '@/components/MoodBoosterCard.vue';
import { useStatsStore } from '@/stores/stats.store.ts';
import { computed, onMounted } from 'vue';
import { StatsAlias } from '@/types/stats.interface.ts';

const statsStore = useStatsStore()

const moodBoosterList = computed(() => {
  if (statsStore.stats) {
    return Object.keys(statsStore.stats.data.summary).map((item: StatsAlias) => {
      if (item === StatsAlias.minutes)
        return {
          color: MoodBoosterColors.TEAL,
          time: statsStore.stats.data.summary[item],
          title: 'Минут медитации',
        }
      if (item === StatsAlias.calm)
        return {
          color: MoodBoosterColors.GREEN,
          time: statsStore.stats.data.summary[item],
          title: 'Спокойных дней',
        }
      if (item === StatsAlias.relax)
        return {
          color: MoodBoosterColors.BLUE,
          time: statsStore.stats.data.summary[item],
          title: 'Расслабленных дней',
        }
      if (item === StatsAlias.focus)
        return {
          color: MoodBoosterColors.YELLOW,
          time: statsStore.stats.data.summary[item],
          title: 'Фокусированных дней',
        }
      if (item === StatsAlias.anxiety)
        return {
          color: MoodBoosterColors.RED,
          time: statsStore.stats.data.summary[item],
          title: 'Тревожных дней',
        }
    })
  }
  return []
})

onMounted(() => {
  statsStore.fetchStats()
})
</script>

<style scoped>
.stat {
  padding-left: 120px;
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
}
</style>
