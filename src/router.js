import { createRouter, createWebHashHistory } from 'vue-router'
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

  // 如果找 /index 的網址 會被重新導向到 名稱為 Index2333 的 下面這個路由
  // 而這個路由顯示的是 從第三行 import 而來的 Index 元件
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
  history: createWebHashHistory(),
  linkExactActiveClass: 'active',
  routes
})

// 匯出 router 物件讓 main.js 可以使用
export default router;
