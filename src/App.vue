<script setup lang="ts">
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>

<template>
  <div class="container-wrapper">
    <HeaderComponent></HeaderComponent>
    <RouterView class="container-content"></RouterView>
    <footer>
      <h2>Contact info</h2>
    </footer>
  </div>
</template>
