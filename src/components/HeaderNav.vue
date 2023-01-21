<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <p>|</p>
    <RouterLink to="/private">Private</RouterLink>
    <p>|</p>
    <RouterLink to="/admin">Admin</RouterLink>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
a {
  display: inline-block;
  width: 30%;
}
</style>
