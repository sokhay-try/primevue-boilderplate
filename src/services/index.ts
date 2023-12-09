import type { Plugin } from 'vue'
import { AuthService } from './auth'

export type Service = {
  auth: typeof AuthService
}

export const services: Plugin = {
  install(app) {
    app.config.globalProperties.$service = {
      auth: AuthService
    }
  }
}
