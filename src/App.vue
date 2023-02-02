<template>
  <div class="flex flex-col h-screen justify-between">
    <HeaderComponent class="h-20 bar"></HeaderComponent>
    <RouterView
      class="mb-auto h-full grid grid-rows-2 grid-cols-2"
    ></RouterView>
    <FooterComponent class="h-52 bar"></FooterComponent>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>
