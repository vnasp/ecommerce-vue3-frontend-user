import { createStore } from "vuex";
import { getProducts, getCategories }  from "@/services/productService";
import getBanners from "@/services/bannerService";


export default createStore({
  state: {
    banners: [],
    categories: [],
    products: [],
    cart: [],
  },
  getters: {
    banners: (state) => state.banners,
    products: (state) => state.products,
    categories: (state) => state.categories,
    // Obtener cantidad de productos en el carrito
    productCount(state) {
      return state.cart.length;
    },
    // Obtener subtotal de un producto
    cartProductTotal(state) {
      return state.cart.map((product) => {
        let newProduct = product;
        newProduct.total = parseFloat(product.price * product.quantity).toFixed(
          2
        );
        return newProduct;
      });
    },
    // Encontrar producto por sku
    findProductBySku: (state) => (sku) => {
      return state.cart.find((product) => product.sku == sku);
    },
    // Obtener monto total del pedido
    cartTotalPrice(state, getters){
      let totalPrice = getters.cartProductTotal.reduce((total, product)=>{
        return total+ Number(product.total)
      }, 0)
      return parseFloat(totalPrice).toFixed(2)
    }
  },
  mutations: {
    // Asignación de valor de a a
    SET_BANNERS(state, banners) {
      state.banners = banners;
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    // Lógica para carrito de compras
    ADD_TO_CART(state, product) {
      state.cart.push(product);
    },
    ADD_QUANTITY_TO_PRODUCT(state, sku) {
      let index = state.cart.findIndex((product) => product.sku == sku);
      state.cart[index].quantity += 1;
  },
    REMOVE_QUANTITY_FROM_PRODUCT(state, sku) {
      let index = state.cart.findIndex((product) => product.sku == sku);
      state.cart[index].quantity -= 1;
    },
    REMOVE_PRODUCT_FROM_CART(state, sku) {
      let index = state.cart.findIndex((product) => product.sku == sku);
      state.cart.splice(index, 1);
    },
    EMPTY_CART(state) {
      state.cart = [];
    },
  },
  actions: {
    // Lógica para cargar el contenido de la página
    async setBanners({ commit }) {
      try {
        let data = await getBanners();
        commit("SET_BANNERS",data);
      } catch (error) {
        console.log(error);
      }
    },
    async setCategories({ commit }) {
      try {
        let data = await getCategories("categories");
        commit("SET_CATEGORIES", data);
      } catch (error) {
        console.log(error);
      }
    },
    async setProducts({ commit }) {
      try {
        let data = await getProducts("products");
        commit("SET_PRODUCTS", data);
      } catch (error) {
        console.log(error);
      }
    },
    // Lógica de acciones (CRUD) para carrito de compra
    addToCart({ commit, getters }, product) {
      let found = getters.findProductBySku(product.sku);
      if (!found) {
        commit("ADD_TO_CART", product);
      } else {
        commit("ADD_QUANTITY_TO_PRODUCT", product.sku);
      }
    },
    addQuantityToProduct({commit, getters}, product){
      let found = getters.findProductBySku(product.sku)
      if(found){
        commit('ADD_QUANTITY_TO_PRODUCT', product.sku)
      } else {
        throw 'Producto no encontrado dentro del carro.'
      }
    },
    removeQuantityFromProduct({ commit, getters }, product) {
      let found = getters.findProductBySku(product.sku);
      if (found) {
        if (found.quantity > 1) {
          commit("REMOVE_QUANTITY_FROM_PRODUCT", product.sku);
        } else {
          if (
            confirm("El producto será eliminado del carro. ¿Quieres continuar?")
          ) {
            commit("REMOVE_PRODUCT_FROM_CART", product.sku);
          }
        }
      } else {
        throw "Producto no encontrado en el carrito.";
      }
    },
    removeProductFromCart({ commit, getters }, product) {
      let found = getters.findProductBySku(product.sku);
      if (found) {
        if (
          confirm("El producto será eliminado del carro. ¿Quieres continuar?")
        ) {
          commit("REMOVE_PRODUCT_FROM_CART", product.sku);
        }
      } else {
        throw "Producto no encontrado en el carrito.";
      }
    },
    emptyCart({ commit }) {
      commit("EMPTY_CART");
    },
  },
  modules: {},
});
