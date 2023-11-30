import { createRouter, createWebHistory } from "vue-router";
import { loadRoutes } from "./loadRoutes";

const { routes } = loadRoutes();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
