<template>
  <div>
    <button class="sign-in">Login</button>
    <button class="sign-up">Sign up</button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.sign-up {
  background-color: #da5408;
  color: aliceblue;
  border: none;
  margin-right: 20px;
}

.sign-up:hover {
  color: #da5408;
  background-color: aliceblue;
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
}

.sign-in {
  background: #1e1e1c;
  color: aliceblue;
  border: 1px solid white;
}

.sign-in:hover {
  color: #1e1e1c;
  background-color: aliceblue;
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
}
</style>
