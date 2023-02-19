<template>
  <footer class="grid-cols-8">
    <FooterContact class="col-start-2 col-end-4 pt-2 pl-6 pr-8"></FooterContact>
    <FooterProjects class="col-start-4 col-end-6 pt-2 pl-6"></FooterProjects>
    <FooterSocial class="col-start-6 col-end-8 pt-2 pl-6"></FooterSocial>
  </footer>
</template>

<script setup lang="ts">
import FooterContact from '@/components/FooterContact.vue'
import FooterProjects from '@/components/FooterProjects.vue'
import FooterSocial from '@/components/FooterSocial.vue'
</script>
