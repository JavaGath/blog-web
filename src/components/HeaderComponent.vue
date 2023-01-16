<template>
  <header>
    <HeaderLogo class="background-dev-red"></HeaderLogo>
    <NavBar class="background-dev-green"></NavBar>
    <HeaderSocial class="background-dev-blue"></HeaderSocial>
  </header>
</template>

<script>
import { defineComponent } from "vue";
import HeaderLogo from "@/components/HeaderLogo.vue";
import NavBar from "@/components/HeaderNav.vue";
import HeaderSocial from "@/components/HeaderSocial.vue";

export default defineComponent({
  components: { HeaderSocial, NavBar, HeaderLogo },
});
</script>

<style scoped></style>
