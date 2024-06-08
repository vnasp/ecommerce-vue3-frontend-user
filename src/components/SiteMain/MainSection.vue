<template>
  <div class="bg-gris-custom">
    <CategoriesSection />
    <SliderSection />
    <ProductSection />
    <TripleBannerSection />
    <BannerBottomSection />
  </div>
</template>

<script>
import BannerBottomSection from './BannerBottomSection.vue';
import CategoriesSection from './CategoriesSection.vue';
import ProductSection from './ProductSection.vue';
import SliderSection from './SliderSection.vue';
import TripleBannerSection from './TripleBannerSection.vue';

export default {
  name: 'MainSection',
  components: {
    CategoriesSection,
    SliderSection,
    ProductSection,
    TripleBannerSection,
    BannerBottomSection
  }
}
</script>

<style scoped></style>