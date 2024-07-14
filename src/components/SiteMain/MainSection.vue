<template>
  <div class="bg-gris-custom">
    <SliderSection />
    <ProductSection />
    <TripleBannerSection />
    <BannerBottomSection />
  </div>
</template>

<script>
import BannerBottomSection from './BannerBottomSection.vue';
import ProductSection from './ProductSection.vue';
import SliderSection from './SliderSection.vue';
import TripleBannerSection from './TripleBannerSection.vue';

export default {
  name: 'MainSection',
  components: {
    SliderSection,
    ProductSection,
    TripleBannerSection,
    BannerBottomSection
  }
}
</script>

<style scoped></style>