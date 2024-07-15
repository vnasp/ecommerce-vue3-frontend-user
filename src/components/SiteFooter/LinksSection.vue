<template>
  <section class="flex flex-col lg:flex-row flex-wrap justify-evenly pb-6 px-10 md:px-20">
    <section class="flex flex-col md:flex-row flex-none md:1/3 lg:w-8/12 justify-center text-base">
      <article class="flex-auto md:w-4/12 pe-3 mb-10">
        <h4 class="uppercase mb-5 text-sm font-bold">Déjanos Ayudarte</h4>
        <p class="mb-5 text-indigo-200">Si tienes dudas, por favor contáctanos: <span class="text-lime-600">soporte@correo.com</span></p>
        <div>
          <p class="text-indigo-200 mb-1">Redes Sociales:</p>
          <font-awesome-icon icon="fa-brands fa-facebook-f" class="me-2" />
          <font-awesome-icon icon="fa-brands fa-twitter" class="me-2" />
          <font-awesome-icon icon="fa-brands fa-youtube" class="me-2" />
          <font-awesome-icon icon="fa-brands fa-pinterest-p" class="me-2" />
          <font-awesome-icon icon="fa-brands fa-skype" class="me-2" />
        </div>
      </article>
      <article class="flex-auto md:w-5/12 pe-3 mb-10">
        <h4 class="uppercase mb-5 text-sm font-bold">¿Buscas una granja?</h4>
        <p class="mb-5 text-indigo-200">68 St. Vicent Place, Glasgow, Greater Newyork NH2012, UK.</p>
        <div class="text-indigo-200">
          <p>Lunes a Viernes: <span class="text-white">8:10 AM – 6:10 PM</span></p>
          <p>Sábado: <span class="text-white">10:10 AM – 06:10 PM</span></p>
          <p>Domingo: <span class="text-white">Cerrado</span></p>
        </div>
      </article>
      <article class="flex-auto md:w-3/12 pe-3 mb-10">
        <h4 class="uppercase mb-5 text-sm font-bold">Categorías Top</h4>
        <div>
          <ul>
            <li v-for="category in hotCategories" :key="category.name" class="mb-2 transition ease-in-out duration-600 hover:translate-x-2">
              <router-link class="text-indigo-200 hover:text-white hover:cursor-pointer" :to="{ name: 'products'}">{{ category.name }}</router-link>
            </li>
          </ul>
        </div>
      </article>
    </section>
    <NewsletterSection class="flex-auto md:w-1/2 md:text-left lg:w-4/12"/>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import NewsletterSection from './NewsletterSection.vue';

export default {
  name: 'LinksSection',
  components: {
    NewsletterSection
  },
  computed: {
    ...mapGetters(['categories']),
    hotCategories() {
      return this.categories.slice(0, 5);
    }
  }
};
</script>

<style scoped>
</style>
