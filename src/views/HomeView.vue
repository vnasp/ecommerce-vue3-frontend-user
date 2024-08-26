<template>
  <main class="bg-gris-custom">
    <BannerSection />
    <CategoriesSection class="px-14" />
    <BannerBottomSection class="px-14" />
    <TripleBannerSection class="px-14" />
  </main>
</template>

<script>
import { mapActions } from "vuex"
import BannerSection from "@/components/SiteMain/BannerSection.vue"
import CategoriesSection from "@/components/SiteMain/CategoriesSection.vue"
import TripleBannerSection from "@/components/SiteMain/TripleBannerSection.vue";
import BannerBottomSection from "@/components/SiteMain/BannerBottomSection.vue";

export default {
  name: "HomeView",
  components: {
    BannerSection,
    CategoriesSection,
    TripleBannerSection,
    BannerBottomSection
  },
  methods: {
    ...mapActions(["setCategories"]),
  },

  // Lifecycle Hooks
  async mounted() {
    await this.setCategories()
  }
} 
</script>

<style scoped lang="scss"></style>