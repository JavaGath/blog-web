<template>
  <div class="container-wrapper">
    <HeaderComponent></HeaderComponent>
    <RouterView class="container-content"></RouterView>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>
