<template>
  <main class="max-w-7xl mx-auto p-5">
    <div
      class="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded"
      role="alert"
      v-if="productCount < 1"
    >
      ¡Ups! Tu Carrito está vacío.
    </div>
    <div v-else>
      <CartDetail :editableCount="true" />
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import CartDetail from "@/components/CartDetail.vue";

export default {
  name: "CartView",
  components: {
    CartDetail,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["productCount"]),
  },
  methods: {},
};
</script>

<style scoped lang="scss"></style>
