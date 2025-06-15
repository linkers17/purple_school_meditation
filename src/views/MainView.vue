<template>
  <Header />
  <main class="main">
    <router-view />
  </main>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue';
import { useProfileStore } from '@/stores/profile.store.ts';
import { onMounted } from 'vue';

const profileStore = useProfileStore()

onMounted(() => {
  if (!profileStore.user) {
    profileStore.getUser()
  }
})
</script>

<style scoped>
.main {
  padding: 50px;
}
</style>
