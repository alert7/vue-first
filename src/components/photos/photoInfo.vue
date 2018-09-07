<template>
<div class="photoinfo-container">
    <h3>{{ photoinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoinfo.add_time | dateFormat }}</span>
      <span>点击：{{ photoinfo.click }}次</span>
    </p>

    <hr>

    <!-- 缩略图区域 -->
    <div class="thumbs">
      <!-- <img class="preview-img" v-for="(item, index) in list" :src="item.img_url" height="100" @click="$preview.open(index, list)" :key="item.id"> -->
      <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
    </div>

    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>

    <!-- 放置一个现成的 评论子组件 -->
    <cmt-box></cmt-box>
  </div>
</template>

<style lang="scss">
.photoinfo-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }

  .content {
    font-size: 13px;
    line-height: 30px;
  }

  .thumbs{
    .my-gallery {
      figure {
        float: left;
        overflow: hidden;
        width: 100px;
        height: 100px;
        margin: 10px;
        a {
          width: 100px;
          height: 100px;

          img {
            border: 0;
            width: 100px;
            height: 100px;
            margin: 10px;
            box-shadow: 0 0 8px #999;
          }
        }
      }
    }
    .my-gallery:after {
      content: " ";
      visibility: hidden;
      display: block;
      height: 0;
      clear: both;
    }
  }
}
</style>

<script>
  import comment from "../subcomponents/comment.vue";

  export default {
    data() {
      return {
        id: this.$route.params.id, // 从路由中获取到的 图片Id
        photoinfo: [], // 图片详情
        // 缩略图的数组
        list: [
          { img_url: require("../../../static/photoImg/05.jpg"), id: 200.1, w: 600, h:400 },
          { img_url: require("../../../static/photoImg/05.jpg"), id: 200.2, w: 600, h:400 },
          { img_url: require("../../../static/photoImg/05.jpg"), id: 200.3, w: 600, h:400 },
          { img_url: require("../../../static/photoImg/05.jpg"), id: 200.4, w: 600, h:400 }
        ],
        slide1: [
          {
            src: require("../../../static/photoImg/01.jpg"),
            msrc: require("../../../static/photoImg/01.jpg"),
            w: 600,
            h: 400
          },
          {
            src: require("../../../static/photoImg/02.jpg"),
            msrc: require("../../../static/photoImg/02.jpg"),
            w: 600,
            h: 400
          },
          {
            src: require("../../../static/photoImg/03.jpg"),
            msrc: require("../../../static/photoImg/03.jpg"),
            w: 600,
            h: 400
          },
          {
            src: require("../../../static/photoImg/04.jpg"),
            msrc: require("../../../static/photoImg/04.jpg"),
            w: 600,
            h: 400
          },
          {
            src: require("../../../static/photoImg/05.jpg"),
            msrc: require("../../../static/photoImg/05.jpg"),
            w: 600,
            h: 400
          }
        ]
      };
    },
    created() {
      this.getPhotoInfo();
      // this.getThumbs();
    },
    methods: {
      getPhotoInfo() {
        // 获取图片的详情
        this.$http.get("http://localhost:3000/" + this.id).then(result => {
          if (result.body.status === 0) {
            this.photoinfo = result.body.message[0];

          }
          console.log(this.photoinfo)
        });
      },
      handleClose () {
        console.log('close event')
      }
      // getThumbs() {
      //   this.list.forEach(item => {
      //       item.w = 600;
      //       item.h = 400;
      //   });
      // }
    },
    components: {
      "cmt-box": comment
    }
  }
</script>