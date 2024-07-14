<template>
  <section class="border rounded-4 bg-light p-4">
    <table class="table bg-light m-2">
      <thead>
        <tr>
          <th scope="col">Imagen</th>
          <th scope="col">Producto</th>
          <th scope="col">Precio</th>
          <th scope="col">Cantidad</th>
          <th scope="col">SubTotal</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in cart" :key="product.sku">
          <td><img :src="product.img" class="img-fluid img-thumbnail p-0" height=50 width=80 :alt="product.name">
          </td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>
            <button type="button" class="btn btn-light shadow-sm rounded-pill mx-1" v-if="editableCount"
              @click="removeQty(product)"><i class="bi bi-dash"></i></button>
            {{ product.quantity }}
            <button type="button" class="btn btn-light shadow-sm rounded-pill mx-1" v-if="editableCount"
              @click="addQty(product)"><i class="bi bi-plus"></i></button>
            <button type="button" class="btn btn-danger shadow-sm rounded-pill mx-1" v-if="editableCount"
              @click="deleteProduct(product)"><i class="bi bi-trash"></i></button>
          </td>
          <td>{{ product.total }}</td>
        </tr>
        <tr>
          <td class="text-end fs-3" colspan="6">Total (USD): <strong>${{ cartTotalPrice }}</strong></td>
        </tr>
      </tbody>
    </table>
  </section>
  <section class="d-flex justify-content-between mt-4">
    <button v-if="editableCount" class="btn btn-secondary" @click="deleteCart">Vaciar Carrito</button>
    <form v-if="editableCount" @submit.prevent="createOrder">
      <button class="btn btn-lg btn-primary" type="submit">Pasar por Caja</button>
    </form>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex"

export default {
  name: "CartDetail",
  props: {
    editableCount: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["productCount", "cartTotalPrice"]),
  },
  methods: {
    ...mapActions(["addQuantityToProduct", "removeQuantityFromProduct", "removeProductFromCart", "emptyCart"]),
    addQty(product) {
      try {
        this.addQuantityToProduct(product)
      } catch (error) {
        alert("No se pudo agregar la cantidad.")
      }
    },
    removeQty(product) {
      try {
        this.removeQuantityFromProduct(product)
      } catch (error) {
        alert("No se pudo disminuir la cantidad.")
      }
    },
    deleteProduct(product) {
      try {
        this.removeProductFromCart(product)
      } catch (error) {
        alert("No se pudo eliminar el producto.")
      }
    },
    createOrder() {
      this.$router.push("/pasar-por-caja")
    },
    deleteCart() {
      this.emptyCart();
    }
  }
}
</script>

<style scoper lang="scss">
td,
th {
  background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
}
</style>