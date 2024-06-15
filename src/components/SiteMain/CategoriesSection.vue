<template>
  <section class="flex flex-row justify-between items-center gap-4 px-14">
    <div v-for="category in categories" :key="category.nombre" class="flex flex-col items-center bg-white text-indigo-900 rounded-lg w-full py-8">
      <div class="relative group">
        <a href="#"><img :src="category.path" class="rounded-full mb-4 group-hover:brightness-50 transition duration-300" :alt="category.nombre">
        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <font-awesome-icon icon="fa-solid fa-plus" size="2xl" class="text-white mb-2"/>
        </div>
      </a>
      </div>
      <a href="#"><h3 class="text-sm font-bold hover:text-verde-custom">{{ category.nombre }}</h3></a>
      <p class="text-sm font-light">{{ category.cantidad }} items</p>
    </div>
  </section>
</template>

<script>
import category1 from './../../assets/img/categories/category-1.jpg';
import category2 from './../../assets/img/categories/category-2.jpg';
import category3 from './../../assets/img/categories/category-3.jpg';
import category4 from './../../assets/img/categories/category-4.jpg';
import category5 from './../../assets/img/categories/category-5.jpg';
import category6 from './../../assets/img/categories/category-6.jpg';
import category7 from './../../assets/img/categories/category-7.jpg';
import category8 from './../../assets/img/categories/category-8.jpg';

export default {
  name: 'CategoriesSection',
  data() {
    return {
      categories: [
        { path: category1, nombre: 'Vegetables', cantidad: 5 },
        { path: category2, nombre: 'Fresh Fruits', cantidad: 6 },
        { path: category3, nombre: 'Fruit Drink', cantidad: 9 },
        { path: category4, nombre: 'Fresh Bakery', cantidad: 11 },
        { path: category5, nombre: 'Biscuits Snack', cantidad: 2 },
        { path: category6, nombre: 'Fresh Meat', cantidad: 16 },
        { path: category7, nombre: 'Fresh Milk', cantidad: 10 },
        { path: category8, nombre: 'Sea Foods', cantidad: 11 },
      ]
    };
  }
}
</script>

<style scoped>

</style>