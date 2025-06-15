<template>
  <form class="auth-form" @submit.prevent="onSubmit">
    <AppInput
      v-model="form.username"
      name="meditation-name"
      placeholder="Имя пользователя"
    />
    <AppInput
      v-model="form.password"
      name="meditation-password"
      placeholder="Пароль"
      type="password"
    />
    <AppButton type="submit">Войти в приложение</AppButton>
  </form>
</template>

<script lang="ts" setup>
import AppButton from '@/components/AppButton.vue';
import AppInput from '@/components/AppInput.vue';
import { ref, watch } from 'vue';
import type { RequestLoginInterface } from '@/types/auth.interface.ts';
import { useAuthStore } from '@/stores/auth.store.ts';
import { useRouter } from 'vue-router';

const authStore = useAuthStore()
const router = useRouter()

const form = ref<RequestLoginInterface>({
  password: '',
  username: '',
})

const onSubmit = () => {
  if (!form.value.username || !form.value.password)
    return
  try {
    authStore.login(form.value)
    form.value = {
      password: '',
      username: '',
    }
  } catch (err) {
    console.error(err)
  }
}

watch(() => authStore.getToken, () => {
  if (authStore.getToken) {
    router.push({ name: 'main' })
  }
})
</script>

<style scoped>
.auth-form {
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
}
</style>
