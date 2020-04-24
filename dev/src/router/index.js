import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
// import Calculator2 from '../components/Calculator2'
// import Calculator3 from '../components/Calculator3'

const home = { template: '<div>home です</div>'}

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    // },
    // {
    //   path: '/Calculator2', // About画面のパス（URL）を設定
    //   name: 'Calculator2', // Aboutコンポーネントの名前を設定
    //   component: second
    // },
    // {
    //   path: '/Calculator3', // Sample画面のパス（URL）を設定
    //   name: 'Calculator3', // Sampleコンポーネントの名前を設定
    //   component: third
    }
  ]
})