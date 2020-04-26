import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home';
import Info from '../pages/Info';
import Calculator2 from '../components/Calculator2'
// import Calculator3 from '../components/Calculator3'

const home = { template: '<div>home です</div>'}

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/', // path
      name: 'home', // 遷移先で指定
      component: Home // importしたcomponentを指定
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    }
  ]
})