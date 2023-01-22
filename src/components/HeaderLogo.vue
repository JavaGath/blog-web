<template>
  <div>
    <p><img class="logo" alt="JavaGath logo" src="../assets/logo.png" /></p>
    <p class="logo-text">| JavaGath</p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
p {
  display: inline;
}

.logo {
  vertical-align: middle;
  height: 70px;
}

.logo-text {
  padding-left: 10px;
}

@media screen and (max-width: 875px) {
  .logo-text {
    display: none;
  }
}
</style>
