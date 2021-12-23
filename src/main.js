import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios"
import router from './router'

const Factory = createApp(App)
Factory.use(router)
Factory.config.globalProperties.$http = axios
// Factory.use(VueRouter)
// Factory.use(router).use(store)

Factory.mount('#app')
