<template>
  <router-view />
</template>

<script setup lang="ts">
import { useProfileStore } from '@/stores/profile.store.ts';
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth.store.ts';

const profileStore = useProfileStore()
const authStore = useAuthStore()

onMounted(() => {
  if (!profileStore.user && authStore.getToken) {
    profileStore.getUser()
  }
})
</script>

<style scoped>

</style>
