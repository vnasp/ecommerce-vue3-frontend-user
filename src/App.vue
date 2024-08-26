<template>
    <HeaderSection/>
    <router-view />
    <FooterSection/>
</template>

<script>
import FooterSection from './components/SiteFooter/FooterSection.vue';
import HeaderSection from './components/SiteHeader/HeaderSection.vue';

export default {
  name: "App",
  components: {
    HeaderSection, FooterSection,
  },
}
</script>
<style lang="scss">
:root {
  overflow-x: hidden;
}

</style>