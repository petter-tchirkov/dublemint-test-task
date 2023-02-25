<template>
  <div class="toast">
    <div :class="['toast__status', type]"></div>
    <slot />
  </div>
</template>

<script setup>
defineProps(['type'])
</script>

<style lang="scss" scoped>
.toast {
  box-shadow: 0px 2px 8px rgba(31, 29, 33, 0.1);
  border-radius: 8px;
  width: 428px;
  height: 100px;
  display: flex;
  gap: 16px;
  position: fixed;
  top: 16px;
  right: 16px;

  &__status {
    width: 8px;
    height: 100%;
    border-radius: 8px 0 0 8px;
  }

  &__status,
  .error {
    background: var(--error);
  }

  &__status,
  .success {
    background: var(--success);
  }
}
</style>