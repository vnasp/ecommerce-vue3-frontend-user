<template>
  <main class="container d-flex flex-column align-items-center mt-5 pt-5">
    <h1>¡Tu pedido ha sido confirmado!</h1>
    <h2 class="fw-bold">ID Pedido: {{ orderId }}</h2>
    <p class="lead mt-5">Comenzaremos la preparación de tu pedido.</p>
    <h3 class="fw-bold mt-5">¡Gracias por tu compra!</h3>
    <a class="btn btn-lg btn-outline-light fw-bold" @click="goBack">Volver al inicio</a>
  </main>
</template>

<script>
import { mapActions } from "vuex"

export default {
  name: "ConfirmationView",
  props: {
    orderId: {
      type: String,
      required: true
    }
  },
  data: function () {
    return {}
  },
  methods: {
    ...mapActions(["emptyCart"]),
    goBack() {
      sessionStorage.removeItem("order")
      this.$router.push("/")
    }
  },
  // Lifecycle Methods
  created() {
    this.emptyCart()
  }
  // End Lifecycle Methods
}
</script>

<style scoped lang="scss"></style>