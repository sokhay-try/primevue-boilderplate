import type { Plugin } from 'vue'

import { services, type Service } from '@/services'

declare module 'vue' {
  interface ComponentCustomProperties {
    $service: Service
  }
}

export const global: Plugin = {
  install(app) {
    app.use(services)
  }
}
