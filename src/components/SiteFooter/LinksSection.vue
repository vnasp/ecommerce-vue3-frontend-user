<template>
  <section class="flex flex-col lg:flex-row flex-wrap justify-evenly pb-6 px-10">
    <section class="flex flex-col md:flex-row flex-none md:1/3 lg:w-4/6 justify-center text-sm">
      <article class="flex-auto md:flex-initial lg:w-4/12 pe-6">
        <h4 class="uppercase mb-5">let us help you</h4>
        <p class="mb-5 text-indigo-200">If you have any question, please contact us at: <span class="text-lime-600">support@example.com</span></p>
        <div>
          <p class="text-indigo-200 mb-1">Social Media:</p>
          <font-awesome-icon icon="fa-brands fa-facebook-f" class="me-2" />
          <font-awesome-icon icon="fa-brands fa-twitter" class="me-2" />
          <font-awesome-icon icon="fa-brands fa-youtube" class="me-2" />
          <font-awesome-icon icon="fa-brands fa-pinterest-p" class="me-2" />
          <font-awesome-icon icon="fa-brands fa-skype" class="me-2" />
        </div>
      </article>
      <article class="flex-auto md:flex-1 lg:w-5/12 pe-6">
        <h4 class="uppercase mb-5">looking for orfarm?</h4>
        <p class="mb-5 text-indigo-200">68 St. Vicent Place, Glasgow, Greater Newyork NH2012, UK.</p>
        <div class="text-indigo-200">
          <p>Monday – Friday: <span class="text-white">8:10 AM – 6:10 PM</span></p>
          <p>Saturday: <span class="text-white">10:10 AM – 06:10 PM</span></p>
          <p>Sunday: <span class="text-white">Close</span></p>
        </div>
      </article>
      <article class="flex-auto md:flex-initial lg:w-3/12 pe-6">
        <h4 class="uppercase mb-5">hot categories</h4>
        <div>
          <ul>
            <li class="mb-2 transition ease-in-out duration-600 hover:translate-x-2"><a class="text-indigo-200 hover:text-white hover:cursor-pointer">Fruits & Vegetables</a></li>
            <li class="mb-2 transition ease-in-out duration-600 hover:translate-x-2"><a class="text-indigo-200 hover:text-white hover:cursor-pointer">Dairy Products</a></li>
            <li class="mb-2 transition ease-in-out duration-600 hover:translate-x-2"><a class="text-indigo-200 hover:text-white hover:cursor-pointer">Package Foods</a></li>
            <li class="mb-2 transition ease-in-out duration-600 hover:translate-x-2"><a class="text-indigo-200 hover:text-white hover:cursor-pointer">Beverage</a></li>
            <li class="mb-2 transition ease-in-out duration-600 hover:translate-x-2"><a class="text-indigo-200 hover:text-white hover:cursor-pointer">Health & Wellness</a></li>
          </ul>
        </div>
      </article>
    </section>
    <NewsletterSection class="flex-none md:w-1/3 lg:w-2/6"/>
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