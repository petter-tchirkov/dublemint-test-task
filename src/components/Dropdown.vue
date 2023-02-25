<template>
  <div class="dropdown" :style="isVisible ? dropdownStyles : ''">
    <div class="dropdown__selected" @click="toggleDropdown">
      <span class="dropdown__choice" :style="{ 'color': isVisible ? 'var(--gray66)' : '' }">{{ defaultKey }}</span>
      <img :style="{ 'transform': isVisible ? 'rotate(180deg)' : '' }" src="/src/assets/arrow.svg" alt="">
    </div>
    <div class="dropdown__options" v-if="isVisible">
      <div class="dropdown__list">
        <p class="dropdown__option" @click="selectOption(option)" v-for="(option, index) in options" :key="index">
          {{ option }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const props = defineProps({
  options: {
    type: Array,
    default: []
  },
  defaultSelection: {
    type: String,
    default: 'USD'
  }
})

const dropdownStyles = reactive({
  'border': '1px solid var(--default)',
  'border-radius': '4px 4px 0px 0px'
})

const emit = defineEmits(['select'])


let isVisible = ref(false)
const toggleDropdown = () => {
  isVisible.value = !isVisible.value
}
let defaultKey = ref(props.defaultSelection)

const selectOption = (option) => {
  emit('select', option)
  defaultKey = option
  toggleDropdown()
}
</script>

<style lang="scss" scoped>
.dropdown {
  background: var(--white);
  border: 1px solid var(--gray50);
  outline: none;
  position: relative;
  transition: 0.2s;
  cursor: pointer;
  height: 46px;
  border-radius: 4px;

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  }

  &__selected {
    margin: 0;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 16px;
  }

  &__choice {
    font-size: 18px;
  }

  &__options {
    position: absolute;
    top: 46px;
    left: -1px;
    width: 100%;
    box-shadow: 0px 2px 8px rgba(31, 29, 33, 0.1);
    border-radius: 0px 0px 4px 4px;
    border: 1px solid var(--default);
    z-index: 9998;
  }

  &__list {
    border: 1px solid var(--gray00);
    border-radius: 4px;
    background: #fff;
  }

  &__option {
    margin: 0;
    padding-inline: 16px;

    &:hover {
      background: var(--gray82);
    }
  }
}
</style>