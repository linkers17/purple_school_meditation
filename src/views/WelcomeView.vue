<template>
  <div class="welcome">
    <div>
      <h1>Добро пожаловать!</h1>
      <p>Медитируй и оставайся в фокусе, чтобы быть счастливым.</p>
    </div>
    <AppButton @click="router.push({ name: 'login' })">Войти в приложение</AppButton>
  </div>
</template>

<script lang="ts" setup>
import AppButton from '@/components/AppButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter()
</script>

<style scoped>
.welcome {
  display: flex;
  flex-direction: column;
  gap: 65px;
  justify-content: center;
}

.welcome > div {
  text-align: center;
}

h1 {
  font-size: 34px;
  font-weight: 700;
}

p {
  font-size: 20px;
  font-weight: 500;
  padding: 0;
}
</style>
