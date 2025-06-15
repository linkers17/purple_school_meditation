<template>
  <div class="auth">
    <div class="auth-logo">
      <Logo />
    </div>
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import Logo from '@/components/Logo.vue';
</script>

<style scoped>
.auth {
  background: url("/bg.png") no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 60px;
}
</style>
