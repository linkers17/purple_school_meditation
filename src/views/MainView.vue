<template>
  <Header />
  <main class="main">
    <router-view />
  </main>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue';
</script>

<style scoped>
.main {
  padding: 50px;
}
</style>
