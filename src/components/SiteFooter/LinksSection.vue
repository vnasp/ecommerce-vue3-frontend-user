<template>
  <section class="flex flex-col lg:flex-row flex-wrap justify-evenly pb-6">
    <section class="flex flex-col justify-center md:flex-row">
      <article>LET US HELP YOU</article>
      <article>LOOKING FOR ORFARM?</article>
      <article>HOT CATEGORIES</article>
    </section>
    <NewsletterSection/>
  </section>
</template>

<script>
  import NewsletterSection from './NewsletterSection.vue';
  export default {
    name: 'LinksSection',
    components: {
    NewsletterSection
  }
  }
</script>

<style scoped>

</style>