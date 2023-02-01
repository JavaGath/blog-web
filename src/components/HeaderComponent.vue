<template>
  <header class="grid grid-cols-12 text-blue-50">
    <HeaderLogo
      class="inline-flex h-20 font-bold items-center col-start-1 col-end-4"
    ></HeaderLogo>
    <NavBar
      class="bg-blue-600 inline-flex h-20 items-center col-start-4 col-end-10"
    ></NavBar>
    <HeaderSocial
      class="bg-green-600 inline-flex h-20 items-center col-start-10 col-end-13"
    ></HeaderSocial>
  </header>
</template>

<script setup lang="ts">
import HeaderLogo from '@/components/HeaderLogo.vue'
import NavBar from '@/components/HeaderNav.vue'
import HeaderSocial from '@/components/HeaderSocial.vue'
</script>

<style scoped>
.no-select {
  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Safari */
  -moz-user-select: none;
  /* Old versions of Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  user-select: none;
  /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
}

.default-cursor {
  cursor: default;
}

@media screen and (max-width: 900px) {
  .header-logo {
    width: 10%;
    display: flex;
  }

  .bar-main {
    width: 90%;
  }

  .center {
    display: none;
  }
}
</style>
