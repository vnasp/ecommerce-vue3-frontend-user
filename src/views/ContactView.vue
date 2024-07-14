<template>
  <main class="flex flex-col items-center my-5">
      <div class="my-5 uppercase bg-verde-custom rounded-xl text-center px-6 py-1 text-white text-xs">contáctanos</div>
      <h1 class="text-3xl font-bold text-center text-indigo-900">¿Buscando una granja?</h1>
      <p class="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <section class="flex flex-row justify-between mt-10 w-full gap-4 px-14">
    <MapComponent />
    <ContactForm />
    </section>
  </main>
</template>

<script>
import MapComponent from '@/components/SiteMain/MapComponent.vue';
import ContactForm from '@/components/SiteMain/ContactForm.vue';

export default {
  name: "ContactView",
  components: {
    ContactForm,
    MapComponent,
  },
};
</script>

<style scoped lang="scss">
</style>