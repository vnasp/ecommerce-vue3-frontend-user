<template>
  <main class="container p-5">
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