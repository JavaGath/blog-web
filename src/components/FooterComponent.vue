<template>
  <footer>
    <FooterContact class="col-start-2 col-end-5 pt-2 pl-2"></FooterContact>
    <FooterProjects
      class="col-start-5 col-end-9 pt-2 pl-2 no-select bg-blue-600"
    ></FooterProjects>
    <FooterSocial
      class="col-start-9 col-end-12 pt-2 pl-2 no-select bg-red-600"
    ></FooterSocial>
  </footer>
</template>

<script setup lang="ts">
import FooterContact from '@/components/FooterContact.vue'
import FooterProjects from '@/components/FooterProjects.vue'
import FooterSocial from '@/components/FooterSocial.vue'
</script>
