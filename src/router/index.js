import { createRouter, createWebHistory } from "vue-router";
import Timeline from "../components/timeline.vue";
import EventDetail from "../components/eventdetail.vue";

const routes = [
  {
    path: "/",
    name: "timeline",
    component: Timeline,
  },
  {
    path: "/event/:id",
    name: "eventdetail",
    component: EventDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
