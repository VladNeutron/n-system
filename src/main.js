import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/nucleo-icons.css'
import '@/assets/css/nucleo-svg.css'
import '@/assets/css/soft-ui-dashboard.css'
import '@/assets/js/core/popper.min.js'
import '@/assets/js/core/bootstrap.min.js'
import '@/assets/js/soft-ui-dashboard.min.js'
import '@/assets/js/plugins/perfect-scrollbar.min.js'
import '@/assets/js/plugins/smooth-scrollbar.min.js'

// Components
import Navbar from './components/Navbar.vue'


const app = createApp(App).use(store).use(router)

app.component('the-navbar', Navbar)

app.mount('#app')

