<template>
  <form @submit.prevent="confirmOrder">
    <section
      id="deliveryAddress"
      class="mb-4 p-4 border rounded-2xl bg-gray-100"
    >
      <h4 class="mb-3">Dirección de Entrega</h4>
      <div class="flex justify-between gap-2 my-2">
        <div class="w-full">
          <label for="firstName" class="block mb-2">Nombre</label>
          <input
            type="text"
            class="w-full px-3 py-2 border rounded"
            id="firstName"
            placeholder="Juan"
            required
            v-model="client.name"
          />
        </div>
        <div class="w-full">
          <label for="lastName" class="block mb-2">Apellido</label>
          <input
            type="text"
            class="w-full px-3 py-2 border rounded"
            id="lastName"
            placeholder="Perez"
            required
            v-model="client.lastname"
          />
        </div>
      </div>
      <div class="w-full my-2">
        <label for="email" class="block mb-2"
          >Correo Electrónico<span class="text-gray-500"
            >(Opcional)</span
          ></label
        >
        <input
          type="email"
          class="w-full px-3 py-2 border rounded"
          id="email"
          placeholder="usuario@dominio.com"
          v-model="client.email"
        />
      </div>
      <div class="w-full my-2">
        <label for="address" class="block mb-2">Dirección</label>
        <input
          type="text"
          class="w-full px-3 py-2 border rounded"
          id="address"
          placeholder="Ingresa tu dirección"
          required
          v-model="client.address"
        />
      </div>
    </section>

    <section id="paymentForm" class="my-4 p-4 border rounded-2xl bg-gray-100">
      <h4 class="mb-3">Método de pago</h4>
      <div class="flex items-center my-2">
        <input
          id="credit"
          name="paymentMethod"
          type="radio"
          class="mr-2"
          checked
          required
          value="credit"
          v-model="client.payment.method"
        />
        <label class="cursor-pointer" for="credit"
          ><i class="bi bi-credit-card-2-front mr-2"></i>Tarjeta de débito o
          crédito</label
        >
      </div>
      <div class="flex items-center my-2">
        <input
          id="debit"
          name="paymentMethod"
          type="radio"
          class="mr-2"
          required
          value="debit"
          v-model="client.payment.method"
        />
        <label class="cursor-pointer" for="debit"
          ><i class="bi bi-cash mr-2"></i>Transferencia o depósito</label
        >
      </div>
    </section>
    <button
      class="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-lg"
      type="submit"
    >
      Confirmar compra
    </button>
  </form>
</template>

<script>
import { mapGetters } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "CheckoutForm",
  data: function () {
    return {
      client: {
        name: "",
        lastname: "",
        email: "",
        address: "",
        payment: {
          method: "",
        },
      },
    };
  },
  computed: {
    ...mapGetters(["cartProductTotal"]),
  },
  methods: {
    confirmOrder() {
      let orderId = uuidv4();
      let order = {
        id: orderId,
        client: { ...this.client },
        products: this.cartProductTotal,
      };
      this.$emit("confirmOrderSubmit", order);
    },
  },
};
</script>

<style scoped lang="scss"></style>
