<template>
  <footer class="text-white">
    <FeaturesSection />
    <LinksSection />
  </footer>
</template>

<script>
import FeaturesSection from './FeaturesSection.vue';
import LinksSection from './LinksSection.vue';

export default {
  name: 'FooterSection',
  components: {
    FeaturesSection,
    LinksSection
  }
}
</script>

<style scoped></style>