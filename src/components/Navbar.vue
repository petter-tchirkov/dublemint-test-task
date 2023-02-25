<template>
  <nav class="main__nav nav">
    <div class="nav__item">
      <RouterLink to="/">Currency Converter</RouterLink>
    </div>
    <div class="nav__item">
      <RouterLink to="/rates">Exchange Rates</RouterLink>
    </div>
  </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  width: 100%;

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
    box-shadow: 0px 3px 0px var(--default);
    color: var(--black);
  }


}
</style>