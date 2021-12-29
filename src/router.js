import { createRouter, createWebHashHistory } from 'vue-router'
import Admin from '@/page/Admin.vue'
import Index from '@/page/Index.vue'
import Account from '@/page/Account.vue'

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
]

const router = createRouter({
  history: createWebHashHistory(),
  linkExactActiveClass: 'active',
  routes
})

export default router;
