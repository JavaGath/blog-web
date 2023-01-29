<template>
  <footer>
    <FooterContact class="element visible"></FooterContact>
    <FooterProjects class="element hidden"></FooterProjects>
    <FooterSocial class="element hidden"></FooterSocial>
  </footer>
</template>

<script setup lang="ts">
import FooterContact from '@/components/FooterContact.vue'
import FooterProjects from '@/components/FooterProjects.vue'
import FooterSocial from '@/components/FooterSocial.vue'
</script>

<style scoped>
.element {
  width: 260px;
  min-width: 260px;
}

@media screen and (max-width: 900px) {
  .visible {
    width: 100%;
    max-width: 500px;
  }

  .hidden {
    display: none;
  }
}
</style>
