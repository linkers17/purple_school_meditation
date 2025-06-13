<template>
  <div class="meditation-card">
    <div class="meditation-card-title">{{ meditation.title }}</div>
    <div class="meditation-card-description">{{ meditation.description }}</div>
    <div class="meditation-card-action">
      <button>
        <span>Начать</span>
        <IconPlay />
      </button>
      <span class="meditation-card-duration">{{ meditation.duration_min }} мин</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { MeditationInterface } from '@/types/meditation.interface.ts';
import IconPlay from '@/components/icons/IconPlay.vue';

interface Props {
  meditation: MeditationInterface,
}

const { meditation } = defineProps<Props>()
</script>

<style scoped>
.meditation-card {
  background-color: var(--color-card-bg);
  padding: 22px 30px;
  border-radius: 20px;
  color: var(--color-font-dark);
  max-width: 340px;
}

.meditation-card-title {
  font-size: 25px;
  font-weight: 500;
}

.meditation-card-description {
  font-size: 15px;
  font-weight: 500;
}

.meditation-card-action {
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.meditation-card-action button {
  background-color: var(--color-bg);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 10px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: inherit;
}

.meditation-card-action button span {
  color: var(--color-font-light);
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
}

.meditation-card-duration {
  color: var(--color-bg);
  font-size: 15px;
  font-weight: 500;
}
</style>
