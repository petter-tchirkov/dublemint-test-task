<template>
  <section class="modal">
    <div class="modal__wrapper">
      <div class="modal__content">
        <div class="modal__text">
          <slot />
        </div>
        <img class="modal__close" src="/src/assets/close.svg" alt="" @click="toggleModal">
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  toggleModal: {
    type: Function
  }
})

</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.8);

  &__wrapper {
    width: calc(100% - 32px);
    height: 100%;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__content {
    padding: 16px;
    background-color: var(--white);
    border: 2px solid var(--vivid);
    border-radius: 8px;
    position: relative;
  }

  &__close {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }
}
</style> 