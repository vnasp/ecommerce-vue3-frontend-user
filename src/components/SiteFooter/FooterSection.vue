<template>
  <div>
    <FeaturesSection />
    <LinksSection />
    <NewsletterSection />
  </div>
</template>

<script>
import FeaturesSection from './FeaturesSection.vue';
import LinksSection from './LinksSection.vue';
import NewsletterSection from './NewsletterSection.vue';

export default {
  name: 'FooterSection',
  components: {
    FeaturesSection,
    LinksSection,
    NewsletterSection
  }
}
</script>

<style scoped></style>