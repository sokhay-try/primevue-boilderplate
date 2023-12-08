import { createRouter, createWebHistory } from 'vue-router'
import { loadRoutes } from './loadRoutes'
import { services } from '@/services'
import { RouteName } from '@/constants'

const { routes } = loadRoutes()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.

    const token = services.AuthService.loadToken() // use for test

    if (!token) {
      next({ name: RouteName.AUTH.LOGIN })
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})

export default router
