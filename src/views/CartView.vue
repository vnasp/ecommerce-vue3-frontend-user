<template>
  <main class="container pt-5">
    <h1 class="my-5">Tu Carrito</h1>
    <div class="alert alert-info" role="alert" v-if="productCount < 1">
      ¡Ups! Tu Carrito está vacío.
    </div>
    <div v-else>
      <CartDetail :editableCount="true" />
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex"
import CartDetail from "@/components/CartDetail.vue"

export default {
  name: "CartView",
  components: {
    CartDetail,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["productCount"])
  },
  methods: {},
}
</script>

<style scoped lang="scss"></style>