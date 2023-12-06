import { Example1Routes, Example1DrawerNavigation } from './example1'
import { Example2Routes, Example2DrawerNavigation } from './example2'

export const SystemSettingRoutes = [
  {
    path: 'system-setting',
    component: '',
    children: [...Example1Routes, ...Example2Routes]
  }
]

/**
 * Navigations
 */
export const SystemSettingDrawerNavigation = [
  {
    meta: {
      title: 'systemSetting.title'
    },
    children: [...Example1DrawerNavigation, ...Example2DrawerNavigation]
  }
]
