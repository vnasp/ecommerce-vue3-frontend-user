<template>
 <section class="flex flex-row justify-evenly items-center my-24">
      <div id="green-banner" class="p-8">
        <p class="text-yellow-300 uppercase mb-6">top ofertas</p> 
        <p class="text-white text-2xl font-medium w-1/2">Comer verde es lo mejor para la familia</p>
      </div>
      <div id="yellow-banner" class="p-8">
        <p class="text-white uppercase mb-6">ofertas de semana</p> 
        <p class="text-white text-2xl font-medium w-1/2">Comida saludable que restaura la salud</p>
      </div>
      <div id="red-banner" class="p-8">
        <p class="text-white uppercase mb-6">top ventas</p> 
        <p class="text-white text-2xl font-medium w-1/2">Pan fresco y saludable</p>
      </div>
    </section>
</template>

<script>
  export default {
    name: 'TripleBannerSection'
  }
</script>

<style scoped>
#green-banner{
  background-image: url('./../../assets/img/banner-green.jpg');
  background-size: contain;
  height: 220px;
  width: 457px;
}
#yellow-banner {
  background-image: url('./../../assets/img/banner-yellow.jpg');
  background-size: contain;
  height: 220px;
  width: 457px;
}
#red-banner{
  background-image: url('./../../assets/img/banner-red.jpg');
  background-size: contain;
  height: 220px;
  width: 457px;
}
</style>