import type { RouteRecordRaw } from 'vue-router'
import { ApplicationRoutes, APP_PATH } from './routes/app'
import { AuthRoutes } from './routes/auth'

export function loadRoutes() {
  const routes: Array<RouteRecordRaw> = [
    {
      path: '',
      name: 'root',
      redirect: {
        name: APP_PATH
      }
    },
    ...ApplicationRoutes,
    ...AuthRoutes
  ]

  return { routes }
}
