<template>
  <div id="banner-bottom" class="flex flex-col text-white py-44 px-64">
    <p class="italic mb-6">- Oferta del día -</p> 
    <p class="w-1/2 text-6xl font-medium mb-6">Bebestibles frescos y orgánicos</p>
    <p class="w-1/2 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae harum maxime voluptate perferendis, fuga, sint sapiente.</p>
    <p class="uppercase font-medium text-sm mb-6">¡Apúrate! La oferta termina pronto</p>
    <div class="flex flex-row gap-6">
      <button class="bg-white border-white border-0 text-verde-custom font-medium uppercase px-8 py-2 rounded-full" @click="goToFilteredProducts('Bebidas de Frutas')">Comprar</button>
      <button class="border-white border-2 rounded-full font-medium uppercase px-8 py-2"  @click="goToFilteredProducts('')">Ver Menú</button></div>
  </div>
</template>

<script>
export default {
  name: 'BannerBottomSection',
  methods: {
    goToFilteredProducts(category) {
      this.$router.push({ path: '/productos', query: { category } });
    }
  }
}
</script>

<style scoped>
#banner-bottom {
  background-image: url('./../../assets/img/banner_bottom_bg.png');
  background-size:cover;
  height: 700px;
}
</style>