<template>
  <div class="flex flex-col h-screen justify-between">
    <HeaderComponent
      class="h-20 cursor-default bg-logo-color select-none text-3xl font-bold text-slate-90 grid grid-cols-12 text-blue-50"
    ></HeaderComponent>
    <RouterView
      class="mb-auto h-full grid grid-rows-2 grid-cols-2"
    ></RouterView>
    <FooterComponent class="h-52 bg-blue-500"></FooterComponent>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>
