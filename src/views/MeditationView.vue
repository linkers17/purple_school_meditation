<template>
  <div class="meditation">
    <div class="meditation-profile">
      <div class="meditation-profile__avatar">
        <img src="@/assets/avatar.png" alt="profile-avatar">
      </div>
      <span class="meditation-profile__title">Добро пожаловать, Наталья!</span>
      <span class="meditation-profile__description">Как вы сегодня себя чувствуете?</span>
      <State />
    </div>
    <div class="meditation-list">
      <MeditationsList />
    </div>
  </div>
</template>

<script lang="ts" setup>
import MeditationsList from '@/components/MeditationsList.vue';
import State from '@/components/State.vue';
</script>

<style scoped>
.meditation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
}

.meditation-profile {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

.meditation-list {
  max-width: 800px;
}

.meditation-profile__avatar {
  margin-bottom: 30px;
}

.meditation-profile__title {
  font-size: 30px;
  font-weight: 500;
}

.meditation-profile__description {
  font-size: 22px;
  opacity: 0.7;
  margin-bottom: 40px;
}
</style>
