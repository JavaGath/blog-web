<template>
  <div>
    <h2 class="no-select default-cursor">Project repositories</h2>
    <div class="display-flex">
      <div class="sub-element">
        <a href="https://github.com/JavaGath/blog-web">Blog Web</a>
        <a href="https://github.com/JavaGath/blog-api">Blog Api</a>
        <a href="https://github.com/JavaGath/authenticator-api"
          >Authenticator</a
        >
      </div>
      <div class="sub-element">
        <a href="https://github.com/JavaGath/util-web">Util Web</a>
        <a href="https://github.com/JavaGath/orchestrator-api">Orechestrator</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
a {
  display: list-item;
}
</style>
