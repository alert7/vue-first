// 入口函数
import Vue from 'vue'

//导入app组件
import app from './App.vue'

//导入MUI
import './lib/mui/css/mui.min.css'

//按需导入组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

var vm = new Vue ({
	el: '#app',
	render: c => c(app)
})