<template>
  <div v-if="statsStore.stats" class="stat">
    <Stats />
  </div>
</template>

<script lang="ts" setup>
import { useStatsStore } from '@/stores/stats.store.ts';
import { onMounted } from 'vue';
import Stats from '@/components/Stats.vue';

const statsStore = useStatsStore()

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
