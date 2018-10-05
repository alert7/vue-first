// 入口函数
import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//读取本地存储的购物数据到购物车  getItem 的car
var car = JSON.parse(localStorage.getItem('car') || '[]')

var store = new Vuex.Store({
  state: {
    car: car
  },
  mutations: {
    addToCar(state, goodsinfo) {
      var flag = false ; //假设在购物车中没有找到对应的物品
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count);
          flag = true;
          return true
        }
      })
      if (!flag) {
        state.car.push(goodsinfo)
      }
      // 保存到本地存储
      localStorage.setItem('car', JSON.stringify(state.car));
    },
    //让首页购物车的加减起作用
    updateGoodsInfo(state, goodsinfo) {
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count = parseInt(goodsinfo.count)
          return true
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car));      
    },
    removeFromCar(state, id) {
      //根据id从store里car删除对应的物品
      state.car.some((item, i) => { 
        if (item.id == id) {
          state.car.splice(i, 1)
          return true;
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car));
    },
    updateGoodsSelected(state, info) {
      state.car.some(item => {
        if (item.id == info.id) {
          item.selected = info.selected
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car));
    }
  },
  getters: {
    getAllCount(state) {
      var c = 0;
      state.car.forEach( item => { 
        c += item.count
      });
      return c
    },
    //从car里向购物车传购买的数量值
    getGoodsCount(state) {
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.count
      })
      return o;
    },
    //是否结算
    getGoodsSelected(state) {
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.selected
      })
      return o
    },
    getGoodsCountAndAmount(state) {
      var o = {
        count: 0,
        amount: 0
      }
      state.car.forEach(item => {
        if (item.selected) {
          o.count += item.count
          o.amount += item.price*item.count
        }
      })
      return o
    }
   }
})

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

//导入app组件
import app from './App.vue'

var vm = new Vue ({
	el: "#app",
	render: c => c(app),
	router,
  store
})