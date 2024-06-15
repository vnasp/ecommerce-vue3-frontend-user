<template>
  <section class="flex flex-row justify-between items-center px-12 py-4 border-b z-20 sticky top-0 bg-white">
    <div><a href="/"><img src="https://html.hixstudio.net/orfarm/assets/img/logo/logo.png" alt="logo"></a></div>
    <div class="flex flex-row justify-between text-gray-600 font-medium space-x-10">
      <a href="#" class="hover:text-verde-custom">Home</a>
      <a href="#" class="hover:text-verde-custom">Shop</a>
      <a href="#" class="hover:text-verde-custom">Blog</a>
      <a href="#" class="hover:text-verde-custom">Pages</a>
      <a href="#" class="hover:text-verde-custom">About Us</a>
      <a href="#" class="hover:text-verde-custom">Contact Us</a>
    </div>
    <div class="flex flex-row justify-between gap-3">
      <a href="#" class="bg-violet-50 rounded-full flex justify-center items-center h-10 w-10"><font-awesome-icon
          icon="fa-solid fa-magnifying-glass" size="sm" /></a>
      <a href="#" class="bg-red-50 rounded-full flex justify-center items-center h-10 w-10"><font-awesome-icon
          icon="fa-regular fa-user" size="sm" /></a>
      <a href="#" class="bg-cyan-50 rounded-full flex justify-center items-center h-10 w-10"><font-awesome-icon
          icon="fa-regular fa-heart" size="sm" /></a>
      <a href="#" class="bg-amber-100 rounded-full flex justify-center items-center h-10 w-10 relative"><font-awesome-icon
          icon="fa-solid fa-bag-shopping" size="sm" />
        <span style="font-size:11px;"
          class="absolute top-1 right-1 inline-flex items-center justify-center h-5 w-5 text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">5</span>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NavigationSection'
}
</script>

<style scoped></style>