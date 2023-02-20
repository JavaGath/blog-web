<template>
  <footer class="grid-cols-8">
    <FooterContact
      class="col-start-2 col-end-4 pt-2 pl-6 pr-8 min-w-[300px] w-[300px] md:hidden"
    ></FooterContact>
    <FooterProjects
      class="col-start-4 col-end-6 pt-2 pl-6 min-w-[300px] w-[300px] md:col-start-1 md:col-end-7 md:min-w-full md:w-full"
    ></FooterProjects>
    <FooterSocial
      class="col-start-6 col-end-8 pt-2 pl-6 min-w-[300px] w-[300px] md:hidden"
    ></FooterSocial>
  </footer>
</template>

<script setup lang="ts">
import FooterContact from '@/components/FooterContact.vue'
import FooterProjects from '@/components/FooterProjects.vue'
import FooterSocial from '@/components/FooterSocial.vue'
</script>
