<template>
  <button class="button-icon-white">
    <slot />
  </button>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.button-icon-white {
  height: 75px;
  width: 75px;
  cursor: pointer;
  background-color: var(--color-font-light);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 0;
  border-radius: 50%;
}
</style>
