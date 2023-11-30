import { RouteName } from "@/constants";
import { AuthWireframe } from "@/wireframes";
import type { RouteRecordRaw } from "vue-router";


export const AuthRouteDef = {
  LOGIN: {
    path: "login",
    name: RouteName.AUTH.LOGIN,
    meta: {
      title: "Login",
    },
    component: () => import("@/views/auth/LoginView.vue"),
  },
};


export const AuthRoutes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    redirect: {
      name: RouteName.AUTH.LOGIN,
    },
  },
  {
    path: "/auth",
    component: AuthWireframe,
    children: [
      {
        path: "",
        redirect: {
          name: RouteName.AUTH.LOGIN,
        },
      },
      AuthRouteDef.LOGIN,
    ],
  },
]
