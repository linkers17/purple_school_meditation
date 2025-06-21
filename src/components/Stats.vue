<template>
  <MoodBoosterCard
    v-for="mood in moodBoosterList"
    :key="mood.title"
    :title="mood.title"
    :color="mood.color"
    :time="mood.time"
  />
</template>

<script lang="ts" setup>
import MoodBoosterCard from '@/components/MoodBoosterCard.vue';
import { computed } from 'vue';
import { StatsAlias } from '@/types/stats.interface.ts';
import { MoodBoosterColors } from '@/types/mood-booster.enum.ts';
import { useStatsStore } from '@/stores/stats.store.ts';

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
</script>

<style scoped></style>
