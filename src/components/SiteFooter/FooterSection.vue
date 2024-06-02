<template>
  <div class="bg-indigo-900 text-white">
    <FeaturesSection />
    <LinksSection />
  </div>
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