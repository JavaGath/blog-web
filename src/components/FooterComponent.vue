<template>
  <footer>
    <FooterContact
      class="inline-flex col-start-1 col-end-5 pt-2 pl-2"
    ></FooterContact>
    <FooterProjects
      class="inline-flex col-start-5 col-end-9 pt-2 pl-2 no-select"
    ></FooterProjects>
    <FooterSocial
      class="inline-flex col-start-9 col-end-13 pt-2 pl-2 no-select"
    ></FooterSocial>
  </footer>
</template>

<script setup lang="ts">
import FooterContact from '@/components/FooterContact.vue'
import FooterProjects from '@/components/FooterProjects.vue'
import FooterSocial from '@/components/FooterSocial.vue'
</script>

<style scoped></style>
