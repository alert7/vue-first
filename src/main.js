// 入口函数
import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)


// 导入vue-resouce
import Vueresource from 'vue-resource'
Vue.use(Vueresource)
// Vue.http.options.root = 'http://vue.studyit.io';

//要先npm i moment -S  页面上要{{ item.add_item|dataformat }}
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

//导入app组件
import app from './App.vue'

//导入MUIcss样式
import './lib/mui/css/mui.min.css'
//导入图标样式
import './lib/mui/css/icons-extra.css'

//按需导入组件
/*import { Header, Swipe, SwipeItem,Button } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);*/

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

//安装图片插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)


import router from './router.js'

var vm = new Vue ({
	el: '#app',
	render: c => c(app),
	router
})