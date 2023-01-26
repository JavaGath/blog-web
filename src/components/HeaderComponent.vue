<template>
  <header class="no-select default-cursor">
    <HeaderLogo class="bar-sub header-logo text-left-align"></HeaderLogo>
    <NavBar class="bar-main"></NavBar>
    <HeaderSocial
      class="bar-sub header-social center div-right-align"
    ></HeaderSocial>
  </header>
</template>

<script setup lang="ts">
import HeaderLogo from "@/components/HeaderLogo.vue";
import NavBar from "@/components/HeaderNav.vue";
import HeaderSocial from "@/components/HeaderSocial.vue";
</script>

<style scoped>
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
