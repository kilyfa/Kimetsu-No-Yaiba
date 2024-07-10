<template>
  <div class="container mx-auto py-8" v-if="event">
    <div class="flex justify-between items-center mt-10 mr-24 ml-24">
      <h1 class="text-md font-bold bg-white border border-gray-200 text-gray-900 rounded-lg px-4 py-2 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
        {{ event.name }}
      </h1>
      <router-link
        to="/"
        class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-left-circle-fill w-3.5 h-3.5 me-2.5" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
        </svg>
        Back to Timeline
      </router-link>
    </div>
    <div class="grid grid-rows-3 grid-flow-col gap-4 mt-10 mr-24 ml-24">
      <div class="row-span-3 rounded-lg" :style="{ transform: imageTransform }">
        <img :src="event.image" @click="openModal(event.image)" class="w-full h-max-full rounded-xl object-cover mr-4 cursor-pointer transition-transform duration-300 ease-in-out" alt="Event image" />
      </div>
      <div class="col-span-2">
        <section class="bg-gray-800 rounded-lg text-white">
          <div class="mx-auto px-4 py-16 lg:items-center">
            <div class="mx-auto text-center">
              <h1 class="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-800 sm:text-3xl">
                {{ event.name }}
              </h1>
              <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">{{ event.text }}</p>
            </div>
          </div>
        </section>
      </div>
      <div class="row-span-2 col-span-2 rounded-lg bg-gray-800 text-white px-8 py-6">
        <h2 class="text-xl font-bold mb-4">Detail Anime</h2>
        <p class="text-lg">{{ event.details }}</p>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Loading event details...</p>
  </div>
</template>

<script>
import { events } from "../data/events"; // Import data event

export default {
  name: "EventDetail",
  data() {
    return {
      event: null,
      imageTransform: "", // State untuk menyimpan nilai transformasi gambar
    };
  },
  created() {
    const eventId = this.$route.params.id;
    this.event = events.find((event) => event.id === eventId);
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Menghitung posisi scroll
      const scrollPosition = window.scrollY;
      // Menghitung transformasi berdasarkan posisi scroll
      this.imageTransform = `translateY(${scrollPosition / 2}px)`;
    },
    openModal(imageUrl) {
      // Metode untuk membuka modal gambar
    },
  },
};
</script>

<style scoped>
/* Gaya CSS tambahan sesuai kebutuhan */
</style>
