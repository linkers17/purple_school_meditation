<template>
  <div class="mood-booster-card" :class="color">
    <IconCloud class="mood-booster-card__icon" :color="getCloudColor" />
    <span class="mood-booster-card__time">{{ time }}</span>
    <span class="mood-booster-card__title">{{ title }}</span>
  </div>
</template>

<script lang="ts" setup>
import { MoodBoosterColors } from '@/types/mood-booster.enum.ts';
import IconCloud from '@/components/icons/IconCloud.vue';
import { computed } from 'vue';

interface Props {
  color: MoodBoosterColors,
  time: number,
  title: string,
}

const { color, time, title } = defineProps<Props>()

const getCloudColor = computed<string>(() => {
  if (color === MoodBoosterColors.TEAL)
    return '#2B5B54'
  if (color === MoodBoosterColors.GREEN)
    return  '#2B5B33'
  if (color === MoodBoosterColors.BLUE)
    return  '#2B505B'
  if (color === MoodBoosterColors.YELLOW)
    return  '#595B2B'
  if (color === MoodBoosterColors.RED)
    return  '#5B2B2C'
  return '#2B5B54'
})
</script>

<style scoped>
.mood-booster-card {
  width: 300px;
  height: 200px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
}

.mood-booster-card.teal {
  background-color: #69B09C;
}

.mood-booster-card.green {
  background-color: #69B069;
}

.mood-booster-card.blue {
  background-color: #69A1B0;
}

.mood-booster-card.yellow {
  background-color: #9CB069;
}

.mood-booster-card.red {
  background-color: #B0696A;
}

.mood-booster-card__icon {
  position: absolute;
  bottom: 0;
}

.mood-booster-card__time {
  position: absolute;
  font-size: 80px;
  font-weight: 700;
  line-height: 80px;
  top: 10px;
  right: 25px;
}

.mood-booster-card__title {
  position: absolute;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  left: 20px;
  bottom: 30px;
}
</style>
