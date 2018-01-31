import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import mine from '../components/mine.vue'
import go from '../components/go.vue'
import fashion from '../components/fashion.vue'
import home from '../components/home.vue'
import shop from '../components/shop.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '', component: home},
    { path: '/home', component: home },
    { path: '/fashion', component: fashion },
    { path: '/shop', component: shop },
    { path: '/go', component: go},
    { path: '/mine', component: mine }
  ]
})
