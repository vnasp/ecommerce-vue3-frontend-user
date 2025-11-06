<template>
  <main class="max-w-7xl mx-auto pt-5">
    <h1 class="my-5">Pasar por Caja</h1>
    <section
      class="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded"
      role="alert"
      v-if="productCount < 1"
    >
      Aún no has añadido productos a tu carrito.
    </section>
    <section v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <CheckoutForm @confirmOrderSubmit="confirmOrder" />
      <CartDetail />
    </section>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import CartDetail from "@/components/CartDetail.vue";
import CheckoutForm from "@/components/CheckoutForm.vue";

export default {
  name: "CheckoutView",
  data: function () {
    return {};
  },
  components: {
    CartDetail,
    CheckoutForm,
  },
  computed: {
    ...mapGetters(["productCount"]),
  },
  methods: {
    confirmOrder(order) {
      // Se guarda la orden en session storage
      sessionStorage.order = JSON.stringify(order);
      this.$router.push({
        name: "confirmation",
        params: { orderId: order.id },
      });
    },
  },
};
</script>

<style scoped lang="scss"></style>
