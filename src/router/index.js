import Vue from 'vue';
import VueRouter from 'vue-router';
import Shop from '../views/Shop.vue';

Vue.use(VueRouter);

const routes = [
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
    component: Shop,
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
