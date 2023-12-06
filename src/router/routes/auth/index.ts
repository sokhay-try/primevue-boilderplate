import { RouteName } from '@/constants'
import type { RouteRecordRaw } from 'vue-router'
import AuthLayout from '@/views/layouts/auth/AuthLayout.vue'
import { defineAsyncComponent } from 'vue'

export const AuthRouteDef = {
  LOGIN: {
    path: 'login',
    name: RouteName.AUTH.LOGIN,
    meta: {
      title: 'Login'
    },
    component: () => defineAsyncComponent(() => import('@/views/auth/LoginPage.vue'))
  }
}

export const AuthRoutes: Array<RouteRecordRaw> = [
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        path: '',
        redirect: {
          name: RouteName.AUTH.LOGIN
        }
      },
      AuthRouteDef.LOGIN
    ]
  }
]
