import type { RouteRecordRaw } from "vue-router";
import { ApplicationRoutes } from "./app";
import { AuthRoutes } from "./auth";

export function loadRoutes() {

  const routes: Array<RouteRecordRaw> = [
    ...ApplicationRoutes,
    ...AuthRoutes
  ]

  return { routes }
}
