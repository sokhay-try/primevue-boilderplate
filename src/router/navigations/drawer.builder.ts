import { NavigationDrawer } from './builder'

import type { RouteRecordRaw } from 'vue-router'
import { DashboardDrawerNavigation } from '../routes/app/dashboard'
import { SystemSettingDrawerNavigation } from '../routes/app/system-setting'

export const DrawerBuilder = new NavigationDrawer({
  items: [...DashboardDrawerNavigation, ...SystemSettingDrawerNavigation] as RouteRecordRaw[]
})
