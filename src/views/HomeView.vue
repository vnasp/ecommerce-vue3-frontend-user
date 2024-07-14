<template>
  <main class="bg-gris-custom">
    <BannerSection />
    <CategoriesSection class="px-14" />
  </main>
</template>

<script>
import { mapActions } from "vuex"
import BannerSection from "@/components/SiteMain/BannerSection.vue"
import CategoriesSection from "@/components/SiteMain/CategoriesSection.vue"

export default {
  name: "HomeView",
  components: {
    BannerSection,
    CategoriesSection,
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