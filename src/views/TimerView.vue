<template>
  <div v-if="meditation" class="timer">
    <div class="timer__circle">
      <span class="timer__circle-value">{{ timerToWatch }}</span>
    </div>
    <div class="timer__name">
      <div class="timer__name-title">{{ meditation.title }}</div>
      <div class="timer__name-description">{{ meditation.description }}</div>
    </div>
    <div class="timer__actions">
      <ButtonIconSmall @click="goToMain">
        <IconBackspace />
      </ButtonIconSmall>
      <button v-if="isPlayed" class="timer__actions-btn" @click="pausedTimer">
        <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M37.5 0C58.1773 0 75 16.8227 75 37.5C75 58.1773 58.1773 75 37.5 75C16.8227 75 0 58.1773 0 37.5C0 16.8227 16.8227 0 37.5 0ZM43.2692 49.0385C43.2692 49.8035 43.5731 50.5372 44.1141 51.0782C44.6551 51.6192 45.3888 51.9231 46.1538 51.9231C46.9189 51.9231 47.6526 51.6192 48.1936 51.0782C48.7345 50.5372 49.0385 49.8035 49.0385 49.0385V25.9615C49.0385 25.1965 48.7345 24.4628 48.1936 23.9218C47.6526 23.3808 46.9189 23.0769 46.1538 23.0769C45.3888 23.0769 44.6551 23.3808 44.1141 23.9218C43.5731 24.4628 43.2692 25.1965 43.2692 25.9615V49.0385ZM25.9615 49.0385C25.9615 49.8035 26.2654 50.5372 26.8064 51.0782C27.3474 51.6192 28.0811 51.9231 28.8462 51.9231C29.6112 51.9231 30.3449 51.6192 30.8859 51.0782C31.4269 50.5372 31.7308 49.8035 31.7308 49.0385V25.9615C31.7308 25.1965 31.4269 24.4628 30.8859 23.9218C30.3449 23.3808 29.6112 23.0769 28.8462 23.0769C28.0811 23.0769 27.3474 23.3808 26.8064 23.9218C26.2654 24.4628 25.9615 25.1965 25.9615 25.9615V49.0385Z" fill="white"/>
        </svg>
      </button>
      <template v-else>
        <ButtonIconWhite @click="playTimer">
          <IconPlayBig />
        </ButtonIconWhite>
        <ButtonIconWhite @click="sendTime">
          <IconCheck />
        </ButtonIconWhite>
      </template>
      <ButtonIconSmall @click="repeatTimer">
        <IconRepeat />
      </ButtonIconSmall>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMeditationStore } from '@/stores/meditation.store.ts';
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { MeditationInterface } from '@/types/meditation.interface.ts';
import ButtonIconSmall from '@/components/ButtonIconSmall.vue';
import IconBackspace from '@/components/icons/IconBackspace.vue';
import IconRepeat from '@/components/icons/IconRepeat.vue';
import ButtonIconWhite from '@/components/ButtonIconWhite.vue';
import IconPlayBig from '@/components/icons/IconPlayBig.vue';
import IconCheck from '@/components/icons/IconCheck.vue';
import { useStatsStore } from '@/stores/stats.store.ts';

const meditationStore = useMeditationStore()
const statsStore = useStatsStore()
const route = useRoute()
const router = useRouter()

const meditation = computed<MeditationInterface | null>(() => {
  if (!meditationStore.meditations)
    return null
  const findItem = meditationStore.meditations.data.meditations.find(item => item.ID === +route.params.id)
  return findItem ?? null
})

const timerToWatch = computed<string>(() => {
  const minutes = Math.floor(timer.value / 60)
  const second = timer.value % 60
  return `${minutes}:${second > 9 ? second : `0${second}`}`
})

const timer = ref<number>(0)
const isPlayed = ref<boolean>(false)

let interval: number | null = null

onMounted(() => {
  if (!meditationStore.meditations) {
    meditationStore.fetchMeditations()
      .then(() => {
        setTimer()
      })
  } else {
    setTimer()
  }
})

const goTimer = () => {
  timer.value -= 1
  if (timer.value <= 0) {
    clearInterval(interval)
    isPlayed.value = false
  }
}

const goToMain = () => {
  if (interval)
    clearInterval(interval)
  router.push({ name: 'main' })
}

const repeatTimer = () => {
  isPlayed.value = false
  if (interval)
    clearInterval(interval)
  setTimer()
}

const pausedTimer = () => {
  isPlayed.value = false
  if (interval)
    clearInterval(interval)
}

const playTimer = () => {
  isPlayed.value = true
  interval = setInterval(goTimer, 1000)
}

const sendTime = () => {
  const value = meditation.value.duration_min - Math.floor(timer.value / 60)
  if (meditation.value)
    statsStore.setDuration({
      type: 'duration_min',
      value,
    })
      .then(() => {
        setTimer()
      })
      .catch(() => {
        alert('Произошла ошибка при отправке времени.')
      })
}

const setTimer = () => {
  if (meditation.value)
    timer.value = meditation.value.duration_min * 60
}
</script>

<style scoped>
.timer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  flex-direction: column;
}

.timer__circle {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: url("/timer-bg.png") no-repeat center;
  background-size: cover;
  position: relative;
}

.timer__circle-value {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 44px;
}

.timer__name {
  text-align: center;
}

.timer__name-title {
  font-size: 35px;
  font-weight: 500;
}

.timer__name-description {
  font-size: 25px;
  color: rgba(255, 255, 255, 0.5);
}

.timer__actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
}

.timer__actions-btn {
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
}
</style>
