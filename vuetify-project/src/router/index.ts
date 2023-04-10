import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from "./../stores/user";

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/dashboard',
    component: () => import('@/components/Dashboard.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  var role = useUserStore().isAdmin
  if (role && to.path != '/') {
      next();
  } else if( to.path == '/') { 
    if (role) {
      next('/dashboard')
    }
    next();
  } else {
    next("/");
  }
});

export default router
