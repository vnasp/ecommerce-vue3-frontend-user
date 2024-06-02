<template>
  <div id="app">
    <HeaderSection/>
    <MainSection/>
    <FooterSection/>
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
</style>
