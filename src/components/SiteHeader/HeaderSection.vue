<template>
  <div>
    <TopSection/>
    <NavigationSection />
    <BannerSection />
  </div>
</template>

<script>
import BannerSection from './BannerSection.vue';
import NavigationSection from './NavigationSection.vue';
import TopSection from './TopSection.vue';

export default {
  name: 'HeaderSection',
  components: {
    NavigationSection,
    BannerSection
  }
}
</script>

<style scoped></style>