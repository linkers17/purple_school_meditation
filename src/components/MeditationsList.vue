<template>
  <div v-if="store.meditations" class="meditations">
    <Meditation
      v-for="item in store.meditations.data.meditations"
      :key="item.ID"
      :meditation="item"
    />
  </div>
</template>

<script lang="ts" setup>
import { useMeditationStore } from '@/stores/meditation.store.ts';
import { onMounted } from 'vue';
import Meditation from '@/components/Meditation.vue';

const store = useMeditationStore()

onMounted(() => {
  store.fetchMeditations()
})
</script>

<style scoped>
.meditations {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}
</style>
