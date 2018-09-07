<template>
	<div class="cmt-container">
		<h3>发表评论</h3>
		<hr>
		<textarea placeholder="请输入120字以下的内容" v-model="msg"></textarea>
		<mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
		<div class="cmt-list">
      		<div class="cmt-item"  v-for="(item, i) in comments" :key="item.add_time">
        		<div class="cmt-title">
          			第{{ i+1 }}楼&nbsp;&nbsp;用户： {{ item.user_name }}&nbsp;&nbsp;发表时间：{{item.add_time|dateFormat() }}
        		</div>
		        <div class="cmt-body">
		            {{ item.content === 'undefined'?'此用户很懒，暂无评论！': item.content }}
		        </div>
      		</div>
    	</div>
		<mt-button size="large" class="mui-btn mui-btn-danger mui-btn-outlined" @click="getMore">
			加载更多
		</mt-button>
	</div>
</template>

<style lang="scss" scoped>
	.cmt-container {
	  	h3 {
	    	font-size: 18px;
	  	}
	  	textarea {
	   		font-size: 14px;
	    	height: 85px;
	    	margin: 0;
	  	}

	  	.cmt-list {
	   	 	margin: 5px 0;
	    	.cmt-item {
	      		font-size: 13px;
		      	.cmt-title {
		        	line-height: 30px;
		        	background-color: #ccc;
		      	}
		      	.cmt-body {
		        	line-height: 35px;
		        	text-indent: 2em;
	      		}
	    	}
	  }
}
</style>

<script>
export default {
  data() {
    return {
      pageIndex: 1, // 默认展示第一页数据
      // 所有的评论数据
      comments: [{  
      	user_name: "匿名用户",
      	add_time: "2018-08-08 08:08:01",
      	content: "刘一"
      },{  
      	user_name: "匿名用户",
      	add_time: "2018-08-08 08:08:02",
      	content: "我是陈二"
      },{  
      	user_name: "匿名用户",
      	add_time: "2018-08-08 08:08:03",
      	content: "张三"
      },{  
      	user_name: "匿名用户",
      	add_time: "2018-08-08 08:08:04",
      	content: "李四"
      },{  
      	user_name: "匿名用户",
      	add_time: "2018-08-08 08:08:05",
      	content: "王五"
      },{  
      	user_name: "匿名用户",
      	add_time: "2018-08-08 08:08:06",
      	content: "undefined"
      } ],
      pagelist: [{  
      	user_name: "匿名用户",
      	add_time: "2018-08-08 08:08:07",
      	content: "赵六"
      },{  
      	user_name: "匿名用户",
      	add_time: "2018-08-08 08:08:08",
      	content: "孙七"
      },{  
      	user_name: "匿名用户",
      	add_time: "2018-08-08 08:08:09",
      	content: "周八"
      },{  
      	user_name: "匿名用户",
      	add_time: "2018-08-08 08:08:10",
      	content: "我是评论"
      },{  
      	user_name: "匿名用户",
      	add_time: "2018-08-08 08:08:11",
      	content: "我是评论"
      },{  
      	user_name: "匿名用户",
      	add_time: "2018-08-08 08:08:12",
      	content: "我是评论"
      }],
      msg: ""
    };
  },
  methods: {
  	getMore() {
      // 加载更多
       this.comments = this.comments.concat(this.pagelist);
    },
    postComment() {
      	// 校验是否为空内容
      	if (this.msg.trim().length === 0) {
        	return Toast("评论内容不能为空！");
      	}
      	var cmt = {
              	user_name: "匿名用户",
              	add_time: Date.now(),
              	content: this.msg.trim()
            };
		this.comments.unshift(cmt);
        this.msg = "";

      /*this.$http
        .post("api/postcomment/" + this.$route.params.id, {
          content: this.msg.trim()
        })
        .then(function(result) {
          if (result.body.status === 0) {
            // 1. 拼接出一个评论对象
            var cmt = {
              user_name: "匿名用户",
              add_time: Date.now(),
              content: this.msg.trim()
            };
            this.comments.unshift(cmt);
            this.msg = "";
          }
        });*/
    }
  },
  props: ["id"]
};
</script>