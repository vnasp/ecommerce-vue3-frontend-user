import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/productos",
    name: "products",
    component: () => import("./../views/ProductsView.vue"),
    props: true,
  },
  {
    path: "/carrito",
    name: "cart",
    component: () => import("./../views/CartView.vue"),
  },
  {
    path: "/pasar-por-caja",
    name: "checkout",
    component: () => import("./../views/CheckoutView.vue"),
  },
  {
    path: "/confirmacion/:orderId",
    name: "confirmation",
    component: () => import("./../views/ConfirmationView.vue"),
    props: true,
  },
  {
    path: "/contacto",
    name: "contact",
    component: () => import("./../views/ContactView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("./../views/NotFoundView.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
