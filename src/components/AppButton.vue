<template>
  <button>
    <slot />
  </button>
</template>

<script lang="ts" setup>

</script>

<style scoped>
button {
  border-radius: 10px;
  min-width: 320px;
  padding: 16px 0;
  color: var(--color-font-light);
  background-color: #7c9a92;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 25px;
  font-weight: 500;
}
</style>
