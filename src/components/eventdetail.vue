<template>
  <div class="container mx-auto py-8" v-if="event">
    <div class="flex justify-between items-center m-12">
      <h1 class="text-2xl font-bold">{{ event.name }}</h1>
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
    };
  },
  created() {
    const eventId = this.$route.params.id;
    this.event = events.find((event) => event.id === eventId);
  },
};
</script>
