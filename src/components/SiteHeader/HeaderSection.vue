<template>
  <div>
    <TopSection />
    <NavigationSection />
  </div>
</template>

<script>
import NavigationSection from './NavigationSection.vue';
import TopSection from './TopSection.vue';

export default {
  name: 'HeaderSection',
  components: {
    NavigationSection,
    TopSection
  }
}
</script>

<style scoped></style>