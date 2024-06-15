<template>
  <section class="border-0 ps-0 md:border-indigo-400 lg:ps-20 lg:border-s text-base">
    <h4 class="uppercase mb-5 text-sm font-bold">Our Newsetter</h4>
    <p class="mb-5">Subscribe to the Orfarm mailing list to receive updates on new arrivals & other information.</p>
    <form>
      <div class="flex items-center w-full rounded bg-white">
        <font-awesome-icon icon="fa-regular fa-envelope" class="text-gray-400 ms-4" size="lg" />
        <input class="w-full rounded border-none ps-2 py-1 outline-none text-gray-900 text-sm" placeholder="Your email adress..." type="text">
        <button class="m-1 rounded px-4 py-3 uppercase font-bold bg-lime-600 text-center text-xs">Subscribe</button>
      </div>
      <div class="flex items-center mt-3">
        <input type="checkbox">
        <label class="ps-2 text-sm">I accept terms & conditions & privacy policy.</label>
      </div>
    </form>
  </section>
</template>

<script>
  export default {
    name: 'NewsletterSection'
  }
</script>

<style scoped>

</style>