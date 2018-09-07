<template>
	<!-- 放具体新闻的内容 -->
	<div class="newsinfo-container">
		<h3 class="title">{{ newsinfo.title }}</h3>
		<p class="subtitle">
			<span>发表时间： {{ newsinfo.add_time }}</span>
			<span>点击：{{ newsinfo.click }}次</span>
		</p>
		<hr>
		<div class="content" v-html="newsinfo.content"></div>
		<!-- 评论区 -->
		<comment-box :id="this.id"></comment-box>

	</div>
</template>
<style lang="scss" scoped>
	.newsinfo-container{
		padding: 0 4px;
		.title{
			font-size: 16px;
			text-align: center;
			margin: 15px 0;
			color: red;
		}
		.subtitle{
			font-size: 13px;
			color: #266aff;
			display: flex;
			justify-content: space-between;
		}
		.content{
			img {
			      width: 100%;
			    }
		}
	}
</style>

<script>

import comment from '../subcomponents/comment.vue';
import { Toast } from "mint-ui";

	export default {
		data() {
			return {
				id: this.$route.params.id,
				newsinfo: {}
			}
		},
		created() {
		    this.getNewsInfo();
		},
		methods: {
		    getNewsInfo() {
		      	// 获取新闻详情
		      	this.$http.get("http://localhost:3000/" + this.id).then(result => {
			        	if (result.body.status === 0) {
			        		// console.log(result.body)
			        		// 一定是message[0]第0项
			          		this.newsinfo = result.body.message[0];
			        } else {
			          Toast("获取新闻失败！");
			        }
			    });
		    }
		  },
		  components: {
		  	"comment-box": comment
		  }
	}
</script>