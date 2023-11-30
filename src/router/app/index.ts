import { RouteName } from "@/constants";
import { AdminWireframe } from "@/wireframes";
import type { RouteRecordRaw } from "vue-router";
import { DashboardRoutes } from "./dashboard";

export const ApplicationRoutes: Array<RouteRecordRaw> = [
  {
    path: "",
    name: "root",
    redirect: {
      name: RouteName.DASHBOARD.INDEX,
    },
  },
  {
    path: "/app",
    props: {},
    component: AdminWireframe,
    children: [...DashboardRoutes]
  },
];
