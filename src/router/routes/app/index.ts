import { RouteName } from '@/constants'
import { DrawerBuilder } from '@/router/navigations/drawer.builder'
import DashboardLayout from '@/views/layouts/dashboard/DashboardLayout.vue'
import type { RouteRecordRaw } from 'vue-router'
import { DashboardRoutes } from './dashboard'
import { SystemSettingRoutes } from './system-setting'

export const APP_PATH = 'app'

export const ApplicationRoutes: Array<RouteRecordRaw> = [
  {
    path: '/app',
    name: APP_PATH,
    component: DashboardLayout,
    props: {
      DrawerBuilder
    },
    redirect: {
      name: RouteName.DASHBOARD.INDEX
    },
    meta: {
      requiresAuth: true
    },
    children: [...DashboardRoutes, ...SystemSettingRoutes] as RouteRecordRaw[]
  }
]
