import Vue from 'vue';
import vuescroll from 'vuescroll';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(vuescroll);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
