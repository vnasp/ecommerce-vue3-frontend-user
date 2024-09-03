<template>
  <section class="flex flex-row justify-between items-center px-12 py-4 border-b z-20 sticky top-0 bg-white">
    <div><a href="/"><img src="https://html.hixstudio.net/orfarm/assets/img/logo/logo.png" alt="logo"></a></div>
    <div class="flex flex-row justify-between text-gray-600 font-medium space-x-10">
      <div class="hover:text-verde-custom" v-for="(route, index) in routes" :key="index">
        <router-link class="" activeClass="active disabled" :to="route.path">{{ route.name
          }}</router-link>
      </div>
    </div>
    <div class="flex flex-row justify-between gap-3">
      <a v-for="(icon, index) in icons" :key="index" href="#" :class="icon.bgClass"
        class="rounded-full flex justify-center items-center h-10 w-10 relative">
        <font-awesome-icon :icon="icon.icon" size="sm" />
        <span v-if="icon.badge" :style="{ fontSize: '11px' }"
          class="absolute top-1 right-1 inline-flex items-center justify-center h-5 w-5 text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">{{
            icon.badge }}</span>
      </a>
      <a href="#" @click="toggleCart" class="rounded-full flex justify-center items-center h-10 w-10 relative bg-amber-100">
        <font-awesome-icon icon="fa-solid fa-bag-shopping" size="sm" />
        <span :style="{ fontSize: '11px' }" class="absolute top-1 right-1 inline-flex items-center justify-center h-5 w-5 text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">5</span>
      </a>
    </div>
    <!-- Offcanvas -->
    <div v-if="showCart" class="fixed inset-0 flex justify-end bg-black bg-opacity-50 z-50">
      <div class="bg-white w-80 h-full">
        <div class="flex flex-row justify-between items-center bg-gray-200 py-2 px-6">
          <h3 class="text-indigo-900 font-bold uppercase">Tu Carrito </h3>
          <button @click="toggleCart" class=" text-gray-600">X</button>
        </div>
        <CartView />
      </div>
    </div>
  </section>
</template>

<script>
import CartView from './../../views/CartView.vue';

export default {
  name: 'NavigationSection',
  components: {
    CartView
  },
  data() {
    return {
      brand: "Tienda Online",
      showCart: false,
      routes: [
        {
          name: "Inicio",
          path: "/"
        },
        {
          name: "Productos",
          path: "/productos"
        },
        {
          name: "Contacto",
          path: "/contacto"
        },
      ],
      icons: [
        {
          bgClass: "bg-violet-50",
          icon: "fa-solid fa-magnifying-glass"
        },
        {
          bgClass: "bg-red-50",
          icon: "fa-regular fa-user"
        },
        {
          bgClass: "bg-cyan-50",
          icon: "fa-regular fa-heart"
        },
      ]
    };
  },
  methods: {
    toggleCart() {
      this.showCart = !this.showCart;
    }
  }
}
</script>

<style scoped></style>