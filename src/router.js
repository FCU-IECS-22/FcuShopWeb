import { createRouter, createWebHistory } from 'vue-router'
import Admin from '@/page/Admin.vue'
import Index from '@/page/Index.vue'

// 要用到的元件都需要匯入，匯入後需要再寫進 routes
// 有一些 api 可以用
// https://next.router.vuejs.org/zh/guide/
// 下面用到重新導向

const routes = [
  { 
    // 重新導向可以是用 name
    path: '/index',
    redirect: {
      name: 'Index2333'
    }
  },
  // { 
  //   // 也可以用 path
  //   path: '/index',
  //   redirect: {
  //     name: '/'
  //   }
  // },
  { 
    path: '/',
    name: 'Index2333',
    component: Index 
  },
  { 
    path: '/admin',
    name: 'Admin',
    component: Admin 
  },
]

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes
})

export default router;
