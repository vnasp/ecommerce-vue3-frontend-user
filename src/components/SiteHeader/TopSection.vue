<template>
  <section class="bg-indigo-900 flex flex-row justify-between text-white text-xs px-12 py-2">
    <div>Lorem ipsum dolor <span class="text-amber-500">sit amet</span> consectetur adipisicing elit.
    </div>
    <div class="flex flex-row justify-between gap-6">
      <a href="#" class="hover:text-lime-600">
        Locales
      </a>
      <a href="#" class="hover:text-lime-600">
        Seguimiento
      </a>
      <router-link class="hover:text-lime-600" activeClass="active disabled" :to="{ name: 'contact'}">Contacto</router-link>
      <a href="#" class="border-s border-indigo-500 ps-4">
        Español
      </a>
      <a href="#">
        CLP
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TopSection'
}
</script>

<style scoped></style>