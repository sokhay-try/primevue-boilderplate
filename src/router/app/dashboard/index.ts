import { RouteName } from '@/constants'
import type { RouteRecordRaw } from 'vue-router'

export const DashboardRoutes: Array<RouteRecordRaw> = [
  {
    path: 'dashboard',
    name: RouteName.DASHBOARD.INDEX,
    component: () =>
      import(/* webpackChunkName: "DashboardView" */ '@/views/app/dashboard/index.vue')
  }
]
