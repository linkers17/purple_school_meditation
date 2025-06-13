<template>
  <div class="stat">
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

const moodBoosterList = [
  {
    color: MoodBoosterColors.TEAL,
    time: 500,
    title: 'Минут медитации',
  },
  {
    color: MoodBoosterColors.GREEN,
    time: 10,
    title: 'Спокойных дней',
  },
  {
    color: MoodBoosterColors.BLUE,
    time: 32,
    title: 'Расслабленных дней',
  },
  {
    color: MoodBoosterColors.YELLOW,
    time: 40,
    title: 'Фокусированных дней',
  },
  {
    color: MoodBoosterColors.RED,
    time: 5,
    title: 'Тревожных дней',
  },
]
</script>

<style scoped>
.stat {
  padding-left: 120px;
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
}
</style>
