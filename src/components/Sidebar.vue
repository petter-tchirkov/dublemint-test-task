<template>
  <aside class="sidebar">
    <RouterLink to="/">Currency Converter</RouterLink>
    <RouterLink to="/rates">Exchange Rates</RouterLink>
  </aside>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  width: 200px;
  height: 100vh;
  left: 0;
  background: var(--default);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 16px;
  gap: 16px;

  a {
    text-decoration: none;
    color: var(--gray50);
    padding-bottom: 8px;
    transition: 0.2s;
    font-weight: 600;

    &:hover {
      color: var(--black);
    }
  }

  .router-link-active {
    box-shadow: 0px 3px 0px var(--accent);
    color: var(--black);
  }
}
</style>