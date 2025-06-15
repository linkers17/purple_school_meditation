<template>
  <header class="header">
    <Logo />
    <nav class="header__nav">
      <ul class="header__nav-ul">
        <li class="header__nav-list" v-for="n in nav" :key="n.name">
          <router-link class="header__nav-link" active-class="active" :to="n.to">
            <component :is="n.icon"></component>
            <span>{{ n.name }}</span>
          </router-link>
        </li>
        <li class="header__nav-list">
          <a class="header__nav-link" href="#" @click.prevent="logout">
            <IconLogout />
            <span>Выход</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import Logo from '@/components/Logo.vue';
import IconMeditation from '@/components/icons/IconMeditation.vue';
import IconStat from '@/components/icons/IconStat.vue';
import IconLogout from '@/components/icons/IconLogout.vue';
import { useAuthStore } from '@/stores/auth.store.ts';
import { useRouter } from 'vue-router';

const authStore = useAuthStore()
const router = useRouter()

const nav = [
  {
    icon: IconMeditation,
    name: 'Медитация',
    to: {
      name: 'main',
    },
  },
  {
    icon: IconStat,
    name: 'Статистика',
    to: {
      name: 'stat',
    },
  },
]

const logout = () => {
  authStore.clearToken()
  router.push({ name: 'auth' })
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__nav-ul {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.header__nav-list {
  list-style: none;
}

.header__nav-list:not(:last-child) {
  border-right: 3px solid #3f5051;
}

.header__nav-link {
  padding: 20px 50px;
  opacity: 0.5;
  color: var(--color-font-light);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s;
  font-size: 22px;
}

.header__nav-list:hover .header__nav-link,
.header__nav-link.active {
  opacity: 1;
}
</style>
