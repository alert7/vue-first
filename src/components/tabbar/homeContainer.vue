<template>
	<div>
		<!-- 轮播图 -->
		<mt-swipe :auto="4000">
		  <!-- <mt-swipe-item  v-for="item in lunbotuList" :key="item.url">
		  	<img :src="item.img" alt="">
		  </mt-swipe-item> -->
		    <mt-swipe-item></mt-swipe-item>
  			<mt-swipe-item></mt-swipe-item>
 		 	<mt-swipe-item></mt-swipe-item>
		</mt-swipe>

		<!-- 九宫格 -->
		<ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            	<router-link to="/home/newslist">
                <img src="../../images/menu1(1).png" height="119" width="120" alt="">
                <div class="mui-media-body">新闻资讯</div>
            </router-link>
        </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            	<router-link to="/home/photolist">
                <img src="../../images/menu2.png" height="119" width="120" alt="">
                <div class="mui-media-body">图片分享</div>
            	</router-link>
        	</li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
              <router-link to="/home/goodslist">
                <img src="../../images/menu3.png" height="119" width="120" alt="">
                <div class="mui-media-body">商品购买</div>
              </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu4.png" height="119" width="120" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu5.png" height="119" width="120" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu6.png" height="119" width="120" alt="">
                <div class="mui-media-body">联系我们</div></a></li>
        </ul> 
	</div>
</template>

<style lang="scss" scoped>
	.mint-swipe{
		height: 200px;
		/* 第一种方式
		.mint-swipe-item:nth-child(1){
			background-color: red;
		} */
		// 第二种方式
		.mint-swipe-item{
			&:nth-child(1){
				background: url('../images/a.png');
			}
			&:nth-child(2){
				background: url('../images/b.png');
			}
			&:nth-child(3){
				background-color: green;
			}
			img{
				height: 100%;
				width: 100%;
			}
		}
	}
	.mui-grid-view.mui-grid-9{
		background-color: #fff;	
		border: none;
		img{
			width: 60px;
			height: 60px;
		}
		.mui-media-body{
			
		}
	}
	.mui-grid-view.mui-grid-9 .mui-media{
		border: none;
	}
</style>

<script>
import { Toast } from 'mint-ui'

	export default {
		data() {
			return {
				// lunbotuList: []
			};
		},
		created() {
			// this.getLunbotu();
		},
		methods: {
			/*getLunbotu() {
				this.$http.get("localhost:8081/Hello/data/vue-lunbotu.json").then(result=>{
					if (result.body.status === 0) {
						this.lunbotuList = result.body.message;
					} else {
						Toast("加载轮播图失败")
					}
				});
			}*/
		}
	}
</script>