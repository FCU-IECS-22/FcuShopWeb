import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios"
import router from './router'

// Vue3 新發明的工廠函式 = =??
const Factory = createApp(App)
Factory.use(router)
// Factory.use(router).use(store)
Factory.config.globalProperties.$http = axios

Factory.mount('#app')
