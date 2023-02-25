<template>
  <button class="btn" :disabled="disabled">{{ text }}</button>
</template>

<script setup>
defineProps(['text', 'disabled'])
</script>

<style lang="scss" scoped>
.btn {
  background: var(--default);
  border-radius: 8px;
  color: var(--white);
  height: 48px;
  border: transparent;
  padding: 10.5px 16px 10.5px 16px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: var(--default);
    background: var(--white);
    box-shadow: inset 0px 0px 0px 1px var(--default);
  }

  &:disabled {
    background: var(--gray82);
    border: 1px solid var(--gray66);
    color: var(--gray34);
  }
}
</style>