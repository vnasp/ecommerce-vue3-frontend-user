<template>
  <main class="max-w-7xl mx-auto flex flex-col items-center mt-5 pt-5">
    <h1>¡Tu pedido ha sido confirmado!</h1>
    <h2 class="font-bold">ID Pedido: {{ orderId }}</h2>
    <p class="text-lg mt-5">Comenzaremos la preparación de tu pedido.</p>
    <h3 class="font-bold mt-5">¡Gracias por tu compra!</h3>
    <a
      class="border-2 border-verde-custom text-verde-custom hover:bg-verde-custom hover:text-white px-6 py-3 rounded-full text-lg font-bold cursor-pointer mt-4"
      @click="goBack"
      >Volver al inicio</a
    >
  </main>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ConfirmationView",
  props: {
    orderId: {
      type: String,
      required: true,
    },
  },
  data: function () {
    return {};
  },
  methods: {
    ...mapActions(["emptyCart"]),
    goBack() {
      sessionStorage.removeItem("order");
      this.$router.push("/");
    },
  },
  // Lifecycle Methods
  created() {
    this.emptyCart();
  },
  // End Lifecycle Methods
};
</script>

<style scoped lang="scss"></style>
