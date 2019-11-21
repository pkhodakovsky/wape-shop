import Vue from 'vue';
import Vuex from 'vuex';

import shopItems from '@/assets/shop-items.json';
import cart from './cart';
import liquidDetails from './liquid-details';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shopItems,
  },
  mutations: {},
  actions: {},
  modules: {
    cart,
    liquidDetails,
  },
});
