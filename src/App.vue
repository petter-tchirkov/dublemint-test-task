<template>
  <div class="wrapper">
    <main class="main">
      <Sidebar />
      <!-- <Navbar /> -->
      <div class="main__content">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';

</script>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  width: 100%;
}

.main {
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__content {
    max-width: 640px;
    width: 100%;
    margin-left: 200px;
  }
}
</style>