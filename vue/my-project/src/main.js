//载入需要的依赖文件
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import App from './App'
import Home from './components/Home'
import TimeEntries from './components/TimeEntries.vue'
import shop from './components/shop.vue'
import shopDetial from './components/shopDetial.vue'
import myInfo from './components/myInfo.vue'
import LogTime from './components/LogTime.vue'
import NotFound from './components/404'
import axios from 'axios'
import $ from 'jquery'
import '../node_modules/light7/dist/css/light7.css'
/*import '../node_modules/light7/dist/js/light7.js'*/
import '../mobile/mobile.js'

/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(axios)
const routes = [{
  path : '/',
  component : Home
},{
  path : '/home',
  component : Home
},{
  path : '/time-entries',
  component : TimeEntries,
  children : [{
    path : 'log-time',
    component : LogTime,
  }]
},
{
  path : '/my-info',
  component : myInfo,
},
{
  path : '/shop',
  component : shop,
  }
,
{
  path : '/shop-detial',
  component : shopDetial,
},
{
  path : '*',
  component : NotFound,
}];

const router = new VueRouter({
  routes
});
var app = new Vue({
  el: '#app',
  router,
  store,
  ...App,
});

