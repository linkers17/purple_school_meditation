<template>
  <button class="button-icon-small">
    <slot />
  </button>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.button-icon-small {
  height: 24px;
  width: 24px;
  cursor: pointer;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 0;
}
</style>
