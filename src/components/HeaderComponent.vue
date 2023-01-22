<template>
  <header class="no-select default-cursor">
    <HeaderLogo class="header-logo left-align"></HeaderLogo>
    <NavBar class="header-nav"></NavBar>
    <HeaderSocial class="header-social center"></HeaderSocial>
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
.header-logo,
header-social {
  width: 25%;
}

.header-nav {
  width: 50%;
}

@media screen and (max-width: 875px) {
  .header-logo {
    width: 15%;
  }

  .header-social {
    display: none;
  }

  .header-nav {
    display: flex;
    align-items: center;
    width: 90%;
  }
}
</style>
