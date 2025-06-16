<template>
  <form class="auth-form" @submit.prevent="onSubmit">
    <AppInput
      v-model="form.email"
      name="meditation-email"
      placeholder="Электронная почта"
      type="email"
    />
    <AppInput
      v-model="form.username"
      name="meditation-name"
      placeholder="Имя"
    />
    <AppInput
      v-model="form.password"
      name="meditation-password"
      placeholder="Пароль"
      type="password"
    />
    <AppButton type="submit">Создать аккаунт</AppButton>
  </form>
</template>

<script lang="ts" setup>
import AppButton from '@/components/AppButton.vue';
import AppInput from '@/components/AppInput.vue';
import { useAuthStore } from '@/stores/auth.store.ts';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import type { RequestRegisterInterface } from '@/types/auth.interface.ts';

const authStore = useAuthStore()
const router = useRouter()

const form = ref<RequestRegisterInterface>({
  email: '',
  password: '',
  username: '',
})

const onSubmit = () => {
  if (!form.value.username || !form.value.password || !form.value.email)
    return
  authStore.register(form.value)
    .then(() => {
      form.value = {
        email: '',
        password: '',
        username: '',
      }
      router.push({ name: 'login' })
    })
    .catch(err => {
      console.error(err)
      alert(err)
    })
}
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
