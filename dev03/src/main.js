import Vue from 'vue';
import App from './App.vue';
import router from './router';
require('@/styles/global.scss');

Vue.config.productionTip = false;

let app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

global.vm = app;
