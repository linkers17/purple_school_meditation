<template>
  <div class="state">
    <div
      class="state-item"
      v-for="s in state"
      :key="s.title"
    >
      <button class="state-item__button" @click="emit('setState', { type: s.type, value: s.value })">
        <component :is="s.icon"></component>
      </button>
      <span class="state-item__title">{{ s.title }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconCalm from '@/components/icons/IconCalm.vue';
import IconRelax from './icons/IconRelax.vue';
import IconFocus from '@/components/icons/IconFocus.vue';
import IconAnxious from '@/components/icons/IconAnxious.vue';
import type { RequestStateInterface } from '@/types/profile.interface.ts';

const emit = defineEmits<{
  (e: 'setState', payload: RequestStateInterface): void,
}>()

const state = [
  {
    icon: IconCalm,
    title: 'Спокойно',
    type: 'feeling_calm',
    value: 1,
  },
  {
    icon: IconRelax,
    title: 'Расслабленно',
    type: 'relax',
    value: 2,
  },
  {
    icon: IconFocus,
    title: 'Фокусировано',
    type: 'focus',
    value: 3,
  },
  {
    icon: IconAnxious,
    title: 'Тревожно',
    type: 'anxious',
    value: 4,
  },
]
</script>

<style scoped>
.state {
  display: flex;
  align-items: center;
  gap: 22px;
}

.state-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
}

.state-item__button {
  width: 62px;
  height: 65px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
}

.state-item__title {
  font-size: 12px;
}
</style>
