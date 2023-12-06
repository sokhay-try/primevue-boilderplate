import '@mdi/font/css/materialdesignicons.css'
import '@/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetifyPlugin from './plugins/Vuetify'
import { i18n } from './plugins/VueI18n'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(vuetifyPlugin)

app.mount('#app')
