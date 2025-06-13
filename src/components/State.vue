<template>
  <div class="state">
    <div
      class="state-item"
      v-for="s in state"
      :key="s.title"
    >
      <button class="state-item__button">
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

const state = [
  {
    icon: IconCalm,
    title: 'Спокойно',
  },
  {
    icon: IconRelax,
    title: 'Расслабленно',
  },
  {
    icon: IconFocus,
    title: 'Фокусировано',
  },
  {
    icon: IconAnxious,
    title: 'Тревожно',
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
