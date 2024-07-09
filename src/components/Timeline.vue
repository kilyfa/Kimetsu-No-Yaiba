<template>
  <div class="flex justify-center min-h-screen mt-20">
    <ol class="relative border-s border-gray-200 dark:border-gray-700">
      <li v-for="event in events" :key="event.id" class="mb-10 ms-6 flex">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </span>
        <img :src="event.image" @click="openModal(event.image)" class="w-48 h-max-full rounded-xl object-cover mr-4 cursor-pointer transition-transform duration-300 ease-in-out" alt="Event image" />
        <div class="content">
          <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            {{ event.name }}
            <span v-if="event.id === 4" class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span>
          </h3>
          <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on {{ event.date }}</time>
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{{ event.text }}</p>
          <!-- Perbaikan disini -->
          <router-link
            :to="{ name: 'EventDetail', params: { id: event.id } }"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-left-circle-fill w-3.5 h-3.5 me-2.5" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
            </svg>
            Kunjungi Detailnya
          </router-link>
        </div>
      </li>
    </ol>

    <!-- Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 cursor-pointer" @click="closeModalOnOutsideClick">
      <div class="relative bg-white rounded-lg overflow-hidden shadow-xl">
        <button @click="closeModal" class="absolute top-0 max-w-fit md:max-w-7xl right-0 m-2 p-2 text-white hover:text-white">&times;</button>
        <img :src="modalImage" alt="Zoomed Image" class="max-w-7xl max-h-screen object-contain" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timeline",
  data() {
    return {
      isModalOpen: false,
      modalImage: null,
      events: [
        {
          id: 1,
          date: "2024-01-01",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm6jnjgZRih4EvFeVwAX1VRB5fI_YXs23Q-g&s",
          name: "Event 1",
          text: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
        },
        {
          id: 2,
          date: "2024-02-15",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqLSe0YxHCOtJikJKKAC5nm7NmlqwyXG1tWA&s",
          name: "Event 2",
          text: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
        },
        {
          id: 3,
          date: "2024-03-20",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqLSe0YxHCOtJikJKKAC5nm7NmlqwyXG1tWA&s",
          name: "Event 3",
          text: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
        },
        {
          id: 4,
          date: "2024-04-25",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqLSe0YxHCOtJikJKKAC5nm7NmlqwyXG1tWA&s",
          name: "Event 4",
          text: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
        },
      ],
    };
  },
  methods: {
    openModal(image) {
      this.modalImage = image;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.modalImage = null;
    },
    closeModalOnOutsideClick(event) {
      if (event.target === event.currentTarget) {
        this.closeModal();
      }
    },
  },
};
</script>
