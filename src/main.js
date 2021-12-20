import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios"
// import router from './router'
// import router from './router'

const aa = createApp(App)

aa.config.globalProperties.$http = axios

// aa.use(router).use(store)

aa.mount('#app')
