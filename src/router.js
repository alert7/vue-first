import VueRouter from 'vue-router'

// 导入路由组件
import homeContainer from './components/tabbar/homeContainer.vue'
import memberContainer from './components/tabbar/memberContainer.vue'
import shopcarContainer from './components/tabbar/shopcarContainer.vue'
import searchContainer from './components/tabbar/searchContainer.vue'
import newsList from './components/news/NewsList.vue'
import newsInfo from './components/news/NewsInfo.vue'
import photoList from './components/photos/photoList.vue'
import photoInfo from './components/photos/photoInfo.vue'
import goodsList from './components/goods/goodslist.vue'
import GoodsInfo from './components/goods/goodsInfo.vue'
import GoodsDesc from './components/goods/goodsDesc.vue'
import GoodsComment from './components/goods/goodsComment.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    { path: '/', redirect: './home' },
    { path: '/home', component: homeContainer },
    { path: '/member', component: memberContainer },
    { path: '/shopcar', component: shopcarContainer },
    { path: '/search', component: searchContainer },
    { path: '/home/newslist', component: newsList },
    { path: '/home/newsinfo/:id', component: newsInfo },
    { path: '/home/photolist', component: photoList },
    { path: '/home/photoinfo/:id', component: photoInfo },
    { path: '/home/goodslist', component: goodsList },
    { path: '/home/goodsinfo/:id', component: GoodsInfo, name: 'goodsInfo' },
    { path: '/home/goodsdesc/:id', component: GoodsDesc, name: 'goodsdesc' },
    { path: '/home/goodcomment/:id', component: GoodsComment, name: 'goodscomment' }
  ],
  linkActiveClass: 'mui-active' //覆盖默认路由高亮类，默认类router-link-active
})

// 把路由对象暴露出去
export default router