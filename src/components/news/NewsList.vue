<template>
	<div>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in newlist" :key="item.id">
				<router-link :to="'/home/newsinfo/'+item.id">
					<img class="mui-media-object mui-pull-left" :src="item.img_url">
					<div class="mui-media-body">
						<h4>{{ item.title }}</h4>
						<p class='mui-ellipsis'>
							<span>发表时间：{{ item.add_time }}</span>
							<span>点击：{{ item.click }}次</span>
						</p>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
	.mui-table-view {
		li {
			h4{
				font-size: 14px;
			}
			.mui-ellipsis{
				color: #226aff;
				font-size: 12px;
				display: flex;
				justify-content: space-between;
			}
		}
	}
</style>

<script>
	export default {
		data() {
			return {
				newlist: [{
					id: 1,
					title: "被连捅两刀后 特朗普做了这个决定",
					add_time: "2018-08-25 11:11:11",
					zhaiyao: "我是第一个第一个",
					click: 1,
					img_url: require("../images/a.png")
				},{
					id: 2,
					title: "央视：三问滴滴 以生命的名义！",
					add_time: "2018-08-25 11:11:11",
					zhaiyao: "我是第二个第二个",
					click: 1,
					img_url: require("../images/b.png")
				},{
					id: 3,
					title: "微信的最强对手诞生：四天冲上排行榜第一，这次马化腾出手了",
					add_time: "2018-08-25 11:11:11",
					zhaiyao: "我是第三个第三个",
					click: 1,
					img_url: require("../images/b.png")
				},{
					id: 4,
					title: "微信的最强对手诞生：四天冲上排行榜第一，这次马化腾出手了",
					add_time: "2018-08-25 11:11:11",
					zhaiyao: "我是第三个第三个",
					click: 1,
					img_url: require("../images/b.png")
				}]
			};
		} 
	/*	created() {
		    this.getNewsList();
		},
	    methods: {
	        getNewsList() {
	        // 获取新闻列表
	        this.$http.get("api/getnewslist").then(result => {
	            if (result.body.status === 0) {
		            // 如果没有失败，应该把数据保存到 data 上
		            var result = res.data
		            this.newslist = result.body.message;
	            } else {
	          		Toast("获取新闻列表失败！");
	        	}
	      });
	    }
	  }*/
	}
</script>