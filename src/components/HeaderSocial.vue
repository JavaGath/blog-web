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
  background-color: #000000;
  color: aliceblue;
  border: 1px solid white;
}

.sign-in:hover {
  color: #000000;
  background-color: aliceblue;
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
}
</style>
