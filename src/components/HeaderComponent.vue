<template>
  <header>
    <HeaderLogo class="background-dev-red width-35"></HeaderLogo>
    <NavBar class="background-dev-green width-30"></NavBar>
    <HeaderSocial class="background-dev-blue width-35"></HeaderSocial>
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

<style scoped>
.width-35 {
  width: 35%;
}

.width-30 {
  width: 30%;
}
</style>
