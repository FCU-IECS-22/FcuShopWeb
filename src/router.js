import { createRouter, createWebHashHistory } from 'vue-router'
import Admin from '@/page/Admin.vue'
import Index from '@/page/Index.vue'
import Account from '@/page/Account.vue'
import Cart from '@/page/Cart.vue'
const routes = [
  {
    path: '/index',
    redirect: {
      name: 'Index'
    }
  },
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/signup',
    name: 'signup',
    component: Account
  },
  {
    path: '/login',
    name: 'login',
    component: Account
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkExactActiveClass: 'active',
  routes
})

export default router;
