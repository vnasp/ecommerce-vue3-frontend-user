<template>
  <article class="flex flex-col bg-white w-full rounded-2xl my-10 p-12 h-full relative">
    <div class="inline-flex mb-2 gap-2">
      <span class="bg-cyan-500 px-4 py-1 text-sky-white text-xs text-white rounded-md">
        {{ Math.round(product.discount / product.price * -100) }}%
      </span>
      <span v-if="product.feature === true"
        class="bg-red-100 px-4 py-1 rounded-md text-red-500 text-xs font-medium uppercase">top</span>
    </div>
    <div class="inline-flex">
      <div class="w-2/6">
      <img :src="product.image" class="h-44 w-44 object-contain rounded-xl" :alt="product.name">
    </div>
    <div class="flex flex-col items-start flex-1">
      <small class="font-thin">{{ product.size }} g</small>
      <h5 class="text-indigo-900">{{ product.name }}</h5>
      <div class="flex flex-row gap-1 my-3"><font-awesome-icon icon="fa-regular fa-star" size="2xs"
          class="text-amber-400" v-for="n in 5" :key="n" /></div>
      <li v-for="description in product.description" :key="description"
        class="text-gray-500 capitalize font-light text-sm mb-1">{{ description }}</li>
    </div>
    <div class="flex flex-col w-1/6">
      <p class="font-light">Disponibilidad: <span class="text-green-600">Con stock</span></p>
      <p class="text-red-500 text-xl font-medium mb-4">{{ formatPrice(product.price) }}</p>
      <div class="my-2 text-center">
        <button type="button" class="bg-gris-custom rounded-full px-2 py-1 text-gray-500" v-if="count() > 0"
          @click="disminuir"><font-awesome-icon icon="fa-solid fa-minus" /></button>
        <span class="mx-4">{{ count(product) }}</span>
        <button type="button" class="bg-verde-custom rounded-full px-2 py-1 text-white" v-if="count() > 0"
          @click="aumentar"><font-awesome-icon icon="fa-solid fa-plus" />
        </button>
      </div>
      <button type="button"
        class="bg-verde-custom hover:bg-indigo-900 px-14 text-sm py-3 rounded-3xl uppercase text-white font-bold"
        @click="agregar"><i class="bi bi-cart me-1"></i>Agregar</button>
    </div>
    </div>
  </article>
</template>
<script>
import { mapActions, mapState } from "vuex"

export default {
  name: "CardProduct",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(["cart"])
  },
  methods: {
    ...mapActions(["addToCart", "addQuantityToProduct", "removeQuantityFromProduct"]),
    formatPrice(value) {
      return new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP'
      }).format(value);
    },
    agregar() {
      let productToAdd = {
        sku: this.product.sku,
        img: this.product.image,
        name: this.product.name,
        price: this.product.price,
        quantity: 1
      }
      this.addToCart(productToAdd)
    },
    aumentar() {
      try {
        this.addQuantityToProduct(this.product)
      } catch (error) {
        alert(error.message)
      }
    },
    disminuir() {
      try {
        this.removeQuantityFromProduct(this.product)
      } catch (error) {
        alert(error.message)
      }
    },
    count() {
      let found = this.cart.find((prod) => prod.sku == this.product.sku)
      if (found) {
        return found.quantity
      }
    }
  },
}
</script>

<style scoped lang="scss">
.card-header {
  min-height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>