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
          { "icon": "fa-solid fa-satellite-dish", "title": "Entrega Rápida", "content": "A todo el país" },
          { "icon": "fa-solid fa-wallet", "title": "Pago Seguro", "content": "Pago 100% Seguro" },
          { "icon": "fa-solid fa-percent", "title": "Descuentos", "content": "Añade descuentos por volumen" },
          { "icon": "fa-solid fa-comment", "title": "Soporte 24/7", "content": "Soporte 24/7 Dedicado" },
          { "icon": "fa-solid fa-list-check", "title": "Artículos Exclusivos", "content": "De Vendedores Seleccionados" }
        ]
      }
    }
  }
</script>

<style scoped>

</style>