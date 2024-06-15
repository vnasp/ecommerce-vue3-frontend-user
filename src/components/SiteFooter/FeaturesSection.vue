<template>
  <section class="flex justify-center py-8">
    <section class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-10 border-b border-indigo-400 pb-4 text-center">
      <article v-for="feature in features" :key="feature.title" class="p-4">
        <font-awesome-icon :icon="feature.icon" size="lg" class="mb-1"/>
        <h3 class="h3-feat-card font-bold uppercase text-xs">{{ feature.title }}</h3>
        <p class="p-feat-card text-sm">{{ feature.content }}</p>
      </article>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'FeaturesSection',
    data() {
      return {
        features: [
          { icon: 'fa-solid fa-satellite-dish', title: 'Fast Delivery', content: 'Across West & East India' },
          { icon: 'fa-solid fa-wallet', title: 'Safe Payment', content: '100% Secure Payment' },
          { icon: 'fa-solid fa-percent', title: 'Online Discount', content: 'Add Multi-buy Discount' },
          { icon: 'fa-solid fa-comment', title: 'Dedicated 24/7 Support', content: 'Dedicated 24/7 Support' },
          { icon: 'fa-solid fa-list-check', title: 'Curated Items', content: 'From Handpicked Sellers' }
        ]
      }
    }
  }
</script>

<style scoped>

</style>