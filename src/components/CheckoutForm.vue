<template>
  <form @submit.prevent="confirmOrder">
    <section id="deliveryAddress" class="mb-4 p-4 border rounded-4 bg-light">
      <h4 class="mb-3">Dirección de Entrega</h4>
      <div class="d-flex justify-content-between gap-2 my-2">
        <div class="w-100">
          <label for="firstName" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="firstName" placeholder="Juan" required v-model="client.name">
        </div>
        <div class="w-100">
          <label for="lastName" class="form-label">Apellido</label>
          <input type="text" class="form-control" id="lastName" placeholder="Perez" required v-model="client.lastname">
        </div>
      </div>
      <div class="col-12 my-2">
        <label for="email" class="form-label">Correo Electrónico<span
            class="text-body-secondary">(Opcional)</span></label>
        <input type="email" class="form-control" id="email" placeholder="usuario@dominio.com" v-model="client.email">
      </div>
      <div class="col-12 my-2">
        <label for="address" class="form-label">Dirección</label>
        <input type="text" class="form-control" id="address" placeholder="Ingresa tu dirección" required
          v-model="client.address">
      </div>
    </section>

    <section id="paymentForm" class="my-4 p-4 border rounded-4 bg-light">
      <h4 class="mb-3">Método de pago</h4>
      <div class="form-check my-2">
        <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required value="credit"
          v-model="client.payment.method">
        <label class="form-check-label" for="credit"><i class="bi bi-credit-card-2-front me-2"></i>Tarjeta de débito o
          crédito</label>
      </div>
      <div class="form-check my-2">
        <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required value="debit"
          v-model="client.payment.method">
        <label class="form-check-label" for="debit"><i class="bi bi-cash me-2"></i>Transferencia o depósito</label>
      </div>
    </section>
    <button class="w-100 btn btn-primary btn-lg" type="submit">Confirmar compra</button>
  </form>
</template>

<script>
import { mapGetters } from "vuex"
import { v4 as uuidv4 } from "uuid"

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
        }
      }
    }
  },
  computed: {
    ...mapGetters(["cartProductTotal"])
  },
  methods: {
    confirmOrder() {
      let orderId = uuidv4();
      let order = {
        id: orderId,
        client: { ...this.client },
        products: this.cartProductTotal
      }
      this.$emit("confirmOrderSubmit", order)
    }
  },
}
</script>

<style scoped lang="scss"></style>