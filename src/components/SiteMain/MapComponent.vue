<template>
  <section class="w-1/2">
    <l-map style="height: 600px; width: 100%;" :zoom="8" :center="[-39.42, -71.94]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      ></l-tile-layer>
      <l-marker :lat-lng="[-39.42, -71.94]">
        <l-popup>A pretty CSS3 popup.<br> Easily customizable.</l-popup>
      </l-marker>
    </l-map>
  </section>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from 'vue3-leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  }
};
</script>

<style scoped>
</style>