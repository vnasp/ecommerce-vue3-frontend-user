<template>
  <section class="flex flex-row justify-between items-center gap-4 mb-20">
    <div v-for="category in categoriesWithCount" :key="category.name" class="flex flex-col items-center bg-white text-indigo-900 rounded-lg w-full py-8">
      <div class="relative group cursor-pointer" @click="filterCategory(category.name)">
        <img :src="category.img" class="rounded-full mb-4 group-hover:brightness-50 transition duration-300" :alt="category.name">
        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <font-awesome-icon icon="fa-solid fa-plus" size="2xl" class="text-white mb-2"/>
        </div>
      </div>
      <h3 class="text-sm font-bold hover:text-verde-custom">{{ category.name }}</h3>
      <p class="text-sm font-light">{{ category.count }} items</p>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  name: 'CategoriesSection',
  computed: {
    ...mapGetters(['categories', 'products']),
    categoriesWithCount() {
      return this.categories.map(category => {
        const count = this.products.filter(product => product.category === category.name).length;
        return {
          ...category,
          count
        };
      });
    }
  },
  methods: {
    ...mapActions(['setCategories', 'setProducts']),
    filterCategory(category) {
    if (this.$route.path !== '/productos') {
      this.$router.push({ path: '/productos', query: { category } });
    } else {
      this.$emit('filter-category', category);
    }
  }
  },
  created() {
    this.setCategories()
      .then(() => {
        return this.setProducts();
      })
      .catch(error => console.error('Error loading data:', error));
  }
};
</script>

<style scoped>
</style>
