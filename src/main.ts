import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

/** ============ PrimeVue modules ============= */
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

/** ============ style css ============= */
import './assets/main.css'
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);

/** ============ PrimeVue Components ============= */

app.use(PrimeVue);
app.use(ToastService);

app.component('Button', Button);
app.component('Toast', Toast);

/** ============ End PrimeVue Components ============= */

app.use(router)

app.mount('#app');
