import { IconEnum, RouteName } from '@/constants'
import { defineAsyncComponent } from 'vue'

export const Example1RouteDef = {
  INDEX: {
    path: '',
    name: RouteName.SYSTEM_SETTING.EXAMPLE_1.INDEX,
    meta: {
      title: 'example1.title',
      icon: IconEnum.DEFAULT
    },
    component: defineAsyncComponent(() => import('@/views/pages/system-setting/example1.vue'))
  }
}

/**
 * Routes
 * @type {import('vue-router').RouteConfig[]}
 */
export const Example1Routes = [
  {
    path: 'example-1',
    children: [
      Example1RouteDef.INDEX
    ]
  }
]

/**
 * Navigation
 */
export const Example1DrawerNavigation = [
  Example1RouteDef.INDEX
]
