import { IconEnum, RouteName } from '@/constants'
import { defineAsyncComponent } from 'vue'

// const DashboardIndex = () => defineAsyncComponent(() => import('@/views/pages/dashboard/index.vue'))
// DashboardIndex.displayName = 'DashboardIndex'

export const DashboardRouteDef = {
  INDEX: {
    path: '',
    name: RouteName.DASHBOARD.INDEX,
    meta: {
      title: 'dashboard.title',
      icon: IconEnum.DASHBOARD
    },
    component: () => defineAsyncComponent(() => import('@/views/pages/dashboard/index.vue'))
  }
}

/**
 * Routes
 * @type {import('vue-router').RouteConfig[]}
 */
export const DashboardRoutes = [
  {
    path: 'dashboard',
    children: [DashboardRouteDef.INDEX]
  }
]

/**
 * Navigation
 */
export const DashboardDrawerNavigation = [DashboardRouteDef.INDEX]
