import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
require('@/styles/global.scss');

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

let app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

global.vm = app;
