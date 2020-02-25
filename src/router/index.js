import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('../views/Gallery.vue'),
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/Shop.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/Cart.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '*',
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
