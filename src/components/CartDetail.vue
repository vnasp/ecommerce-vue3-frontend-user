<template>
  <section class="text-indigo-900">
    <table>
      <tbody>
        <tr v-for="product in cart" :key="product.sku">
          <td class="flex flex-row justify-between items-start gap-4">
            <div>
              <img
                :src="product.img"
                class="w-12 h-12 object-cover rounded border border-gray-200 p-0"
                :alt="product.name"
              />
            </div>
            <div class="flex flex-col">
              <p class="text-sm font-medium">{{ product.name }}</p>
              <p class="text-sm">
                {{ product.quantity }} x
                <span class="text-verde-custom">{{
                  formatPrice(product.price)
                }}</span>
              </p>
              <div>
                <button
                  type="button"
                  class="bg-gray-100 hover:bg-gray-200 text-gray-700 shadow-sm rounded-full px-3 py-1 mx-1 text-sm"
                  v-if="editableCount"
                  @click="removeQty(product)"
                >
                  -
                </button>
                {{ product.quantity }}
                <button
                  type="button"
                  class="bg-gray-100 hover:bg-gray-200 text-gray-700 shadow-sm rounded-full px-3 py-1 mx-1 text-sm"
                  v-if="editableCount"
                  @click="addQty(product)"
                >
                  +
                </button>
                <button
                  type="button"
                  class="bg-red-500 hover:bg-red-600 text-white shadow-sm rounded-full px-3 py-1 mx-1 text-sm"
                  v-if="editableCount"
                  @click="deleteProduct(product)"
                >
                  X
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
  <section class="text-indigo-900">
    <hr />
    <div class="flex flex-row justify-between mt-4">
      <div>Total:</div>
      <div class="font-bold">{{ formatPrice(cartTotalPrice) }}</div>
    </div>
    <button
      v-if="editableCount"
      class="border-2 border-verde-custom rounded-full w-full py-2 my-4 text-verde-custom uppercase text-sm"
      @click="deleteCart"
    >
      Vaciar Carrito
    </button>
    <button
      v-if="editableCount"
      class="border-2 border-gray-300 bg-gray-300 rounded-full w-full py-2 text-gray-500 uppercase text-sm cursor-not-allowed"
      disabled
    >
      Pasar por Caja
    </button>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "CartDetail",
  props: {
    editableCount: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["productCount", "cartTotalPrice"]),
  },
  methods: {
    ...mapActions([
      "addQuantityToProduct",
      "removeQuantityFromProduct",
      "removeProductFromCart",
      "emptyCart",
    ]),
    addQty(product) {
      try {
        this.addQuantityToProduct(product);
      } catch (error) {
        alert("No se pudo agregar la cantidad.");
      }
    },
    removeQty(product) {
      try {
        this.removeQuantityFromProduct(product);
      } catch (error) {
        alert("No se pudo disminuir la cantidad.");
      }
    },
    deleteProduct(product) {
      try {
        this.removeProductFromCart(product);
      } catch (error) {
        alert("No se pudo eliminar el producto.");
      }
    },
    deleteCart() {
      this.emptyCart();
    },
    formatPrice(value) {
      return new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
      }).format(value);
    },
  },
};
</script>

<style scoper lang="scss">
td,
th {
  background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
}
</style>
