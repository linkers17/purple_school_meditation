<template>
  <input
    v-model="data"
    type="text"
  >
</template>

<script lang="ts" setup>
const data = defineModel<string>()
</script>

<style scoped>
input {
  font-size: 18px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid var(--color-font-light);
  min-width: 305px;
  background-color: transparent;
  color: var(--color-font-light);
}

input::placeholder {
  color: #BEC2C2;
}
</style>
