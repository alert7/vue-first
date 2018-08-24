// 入口函数
import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 导入vue-resouce
// import Vueresource from 'vue-resource'
// Vue.use(Vueresource)

//导入app组件
import app from './App.vue'

//导入MUIcss样式
import './lib/mui/css/mui.min.css'
//导入图标样式
import './lib/mui/css/icons-extra.css'

//按需导入组件
import { Header, Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import router from './router.js'

var vm = new Vue ({
	el: '#app',
	render: c => c(app),
	router
})