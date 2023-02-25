<template>
  <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :type="type"
    :placeholder="placeholder">
</template>

<script setup>
defineProps(['modelValue', 'type', 'placeholder'])


const emit = defineEmits(['update:modelValue'])


</script>

<style lang="scss" scoped>
input {
  border: 1px solid var(--gray50);
  border-radius: 4px;
  height: 44px;
  font-size: 18px;
  padding-left: 16px;
  outline: none;

  &:focus {
    box-shadow: 0px 2px 8px rgba(31, 29, 33, 0.2);
    border: 1px solid var(--default);
  }
}

input::-webkit-inner-spin-button,
input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>