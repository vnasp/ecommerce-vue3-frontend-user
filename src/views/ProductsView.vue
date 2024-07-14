<template>
  <main class="px-14 my-5">
    <CategoriesSection @filter-category="filterProducts" />
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4">
      <div class="col mb-2" v-for="item in filteredProducts" :key="item.id">
        <CardProduct :product="item" />
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import CardProduct from "@/components/SiteMain/CardProduct.vue"
import CategoriesSection from "@/components/SiteMain/CategoriesSection.vue"

export default {
  name: "ProductsView",
  components: {
    CardProduct,
    CategoriesSection
  },
  data() {
    return {
      selectedCategory: null
    };
  },
  computed: {
    ...mapGetters(['products']),
    filteredProducts() {
      if (this.selectedCategory) {
        return this.products.filter(product => product.category === this.selectedCategory);
      }
      return this.products;
    }
  },
  methods: {
    ...mapActions(['setProducts']),
    filterProducts(category) {
      this.selectedCategory = category;
    }
  },
  created() {
    this.setProducts();
  }
};
</script>

<style scoped lang="scss"></style>