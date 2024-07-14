<template>
  <div class="relative group">
    <div
      class="absolute w-1/2 h-full -top-20 right-0 z-10 transform transition-transform ease-out duration-500 hover:translate-x-4">
      <img class="absolute" style="top: 65%;right: 125%;" src="./../../assets/img/slider/slider-shape-1.png" alt="shape">
      <img class="absolute" style="top: 82%;right: 30%;" src="./../../assets/img/slider/slider-shape-2.png" alt="shape">
      <img class="absolute" style="top: 25%;right: 80%;" src="./../../assets/img/slider/slider-shape-3.png" alt="shape">
      <img class="absolute" style="top: 12%;right: -5%;" src="./../../assets/img/slider/slider-shape-4.png" alt="shape">
    </div>
    <div class="h-screen w-full overflow-hidden flex flex-nowrap text-left relative z-0" id="slider">
      <div v-for="(banner, index) in banners" :key="index" class="flex-none w-full flex flex-row-reverse items-center justify-between px-14">
        <div>
          <img :src="banner.imageSrc" class="fade-in-right" :alt="banner.altText" />
        </div>
        <div class="space-y-6 mb-16">
          <p class="uppercase text-verde-custom font-medium fade-in-up delay-1">{{ banner.headerText }}</p>
          <h2 class="max-w-xl text-6xl text-indigo-900 font-bold capitalize fade-in-up delay-2">{{ banner.title }}</h2>
          <p class="max-w-lg text-lg text-gray-600 fade-in-up delay-3">{{ banner.description }}</p>
          <button class="bg-verde-custom hover:bg-indigo-900 text-white text-sm font-medium uppercase rounded-3xl px-14 py-3 fade-in-up delay-4">{{ banner.buttonText }}</button>
        </div>
      </div>
      <div class="absolute inset-x-0 bottom-10 flex justify-between px-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <button id="prevButton" class="bg-verde-custom opacity-50 hover:opacity-100 text-white rounded-full px-6 py-4 transition-opacity duration-300 ease-in-out">
        <font-awesome-icon icon="fa-solid fa-chevron-left" size="sm"/>
      </button>
      <button id="nextButton" class="bg-verde-custom opacity-50 hover:opacity-100 text-white rounded-full px-6 py-4 transition-opacity duration-300 ease-in-out">
        <font-awesome-icon icon="fa-solid fa-chevron-right" size="sm"/>
      </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'BannerSection',
  computed: {
    ...mapGetters(['banners'])
  },
  methods: {
    ...mapActions(['setBanners'])
  },
  created() {
    this.setBanners();
  }
};


document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('#slider');
  const nextButton = document.querySelector('#nextButton');
  const prevButton = document.querySelector('#prevButton');
  const slideWidth = slider.clientWidth;

  const moveSlide = (direction) => {
    const maxScrollLeft = slider.scrollWidth - slideWidth;

    if (direction === 'next') {
      if (slider.scrollLeft >= maxScrollLeft) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: slideWidth, behavior: 'smooth' });
      }
    } else if (direction === 'prev') {
      if (slider.scrollLeft === 0) {
        slider.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: -slideWidth, behavior: 'smooth' });
      }
    }
  };

  nextButton.addEventListener('click', () => moveSlide('next'));
  prevButton.addEventListener('click', () => moveSlide('prev'));

  setTimeout(function autoMoveSlide() {
    moveSlide('next');
    setTimeout(autoMoveSlide, 4000);
  }, 4000);
});
</script>

<style scoped>
#slider{
  background-image: url('./../../assets/img/slider/shape-bg.jpg');
}
</style>