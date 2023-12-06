import { IconEnum, RouteName } from '@/constants'
import { defineAsyncComponent } from 'vue'

export const Example2RouteDef = {
  INDEX: {
    path: '',
    name: RouteName.SYSTEM_SETTING.EXAMPLE_2.INDEX,
    meta: {
      title: 'example2.title',
      icon: IconEnum.DEFAULT
    },
    component: defineAsyncComponent(() => import('@/views/pages/system-setting/example2.vue'))
  }
}

/**
 * Routes
 * @type {import('vue-router').RouteConfig[]}
 */
export const Example2Routes = [
  {
    path: 'example-2',
    children: [
      Example2RouteDef.INDEX
    ]
  }
]

/**
 * Navigation
 */
export const Example2DrawerNavigation = [
  Example2RouteDef.INDEX
]
