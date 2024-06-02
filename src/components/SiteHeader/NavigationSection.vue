<template>
  <section class="flex flex-row justify-between items-center px-12 py-4 border-b">
    <div><img src="https://html.hixstudio.net/orfarm/assets/img/logo/logo.png" alt="logo"></div>
    <div class="flex flex-row justify-between gap-6">
      <div>Home</div>
      <div>Shop</div>
      <div>Blog</div>
      <div>Pages</div>
      <div>About Us</div>
      <div>Contact Us</div>
    </div>
    <div class="flex flex-row justify-between gap-3">
      <div class="bg-violet-50 rounded-full flex justify-center items-center h-10 w-10"><font-awesome-icon icon="fa-solid fa-magnifying-glass" size="sm"/></div>
      <div class="bg-red-50 rounded-full flex justify-center items-center h-10 w-10"><font-awesome-icon icon="fa-regular fa-user" size="sm"/></div>
      <div class="bg-cyan-50 rounded-full flex justify-center items-center h-10 w-10"><font-awesome-icon icon="fa-regular fa-heart" size="sm"/></div>
      <div class="bg-amber-100 rounded-full flex justify-center items-center h-10 w-10 relative"><font-awesome-icon icon="fa-solid fa-bag-shopping" size="sm"/>
        <span style="font-size:11px;" class="absolute top-1 right-1 inline-flex items-center justify-center h-5 w-5 text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">5</span>
</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NavigationSection'
}
</script>

<style scoped></style>