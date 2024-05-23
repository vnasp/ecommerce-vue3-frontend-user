<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HeaderSection/>
    <MainSection/>
    <FooterSection/>
    <h1 class="text-4xl font-bold text-blue-600">
      ¡Hola desde Vue 2 con TailwindCSS!
      HOLA VALE
    </h1>
  </div>
</template>

<script>
import FooterSection from './components/SiteFooter/FooterSection.vue';
import HeaderSection from './components/SiteHeader/HeaderSection.vue';
import MainSection from './components/SiteMain/MainSection.vue';

export default {
  name: 'App',
  components: {
    HeaderSection, MainSection, FooterSection 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
