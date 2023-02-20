<template>
  <header>
    <HeaderLogo
      class="inline-flex h-20 items-center col-start-1 col-end-4 md:col-start-1 md:col-end-3 md:min-w-[80px] md:w-[80px]"
    ></HeaderLogo>
    <NavBar
      class="inline-flex h-20 items-center col-start-4 col-end-10 md:col-start-3 md:col-end-13"
    ></NavBar>
    <HeaderSocial
      class="flex justify-end h-20 items-center col-start-10 col-end-13 md:hidden"
    ></HeaderSocial>
  </header>
</template>

<script setup lang="ts">
import HeaderLogo from '@/components/HeaderLogo.vue'
import NavBar from '@/components/HeaderNav.vue'
import HeaderSocial from '@/components/HeaderSocial.vue'
</script>
