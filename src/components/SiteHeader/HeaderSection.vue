<template>
  <div>
    <NavigationSection />
    <BannerSection />
  </div>
</template>

<script>
import BannerSection from './BannerSection.vue';
import NavigationSection from './NavigationSection.vue';

export default {
  name: 'HeaderSection',
  components: {
    NavigationSection,
    BannerSection
  }
}
</script>

<style scoped></style>