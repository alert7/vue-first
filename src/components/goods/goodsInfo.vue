<template>
  <div class="goodsinfo-container">
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>

    <!-- 轮播图 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunbotuList="lunbotu" :isfull="false"></swiper>
        </div>
      </div>
    </div>
    <!-- 购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{ goodsinfo.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：<del>￥{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{ goodsinfo.sell_price}} </span>
          </p>
          <p>购买数量：<numberbox @getcount="getSelectedCount" :max="goodsinfo.stock_quantity"></numberbox></p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addShopCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <!-- 商品参数 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{ goodsinfo.good_no }}</p>
          <p>库存情况：{{ goodsinfo.stock_quantity }}件</p>
          <p>上架时间：{{ goodsinfo.add_time }}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .goodsinfo-container {
    background-color: #eee;
    overflow: hidden;
    .now_price {
      color: red;
      font-size: 16px;
      font-weight: bold;
    }
    .mui-card-footer {
      display: block;
      button {
        margin: 15px 0;
      }
    }
    .ball {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: red;
      position: absolute;
      z-index: 99;
      top: 390px;
      left: 146px;
    }
  }
</style>

<script>
import swiper from '../subcomponents/swiper.vue'
import numberbox from '../subcomponents/goodsinfo_number.vue'
  export default {
    data() {
      return {
        id: this.$route.params.id,
        lunbotu: [{
          img: "https://img11.360buyimg.com/n1/s450x450_jfs/t22927/325/1190310456/71299/b65f47df/5b554964Nd5b65c01.jpg"
        },{
          img: "../../../static/photoImg/02.jpg"
        },{
          img: "../../../static/photoImg/03.jpg"
        }],
        goodsinfo: {},
        ballFlag: false,
        selectCount: 1
      }
    },
    created() {
      this.getGoodsInfo();
    },
    methods: {
      getGoodsInfo() {
        this.$http.get("http://localhost:3000/" + this.id).then(result => {
            if (result.body.status === 0) {
              this.goodsinfo = result.body.message[0];
            }
        });
      },
      goDesc(id) {
        this.$router.push({ name: "goodsdesc", params: {id} });
      },
      goComment(id) {
        this.$router.push({ name: "goodscomment", params: {id} });
      },
      addShopCar() {
        this.ballFlag = !this.ballFlag
      },
      beforeEnter(el) {
        el.style.transform = "translate(0, 0)";
      },
      enter(el, done) {
        el.offsetWidth;
        // 获取小球的位置
        const ballPosition = this.$refs.ball.getBoundingClientRect();
        const badgePosition = document.getElementById("badge").getBoundingClientRect();

        const xDist = badgePosition.left - ballPosition.left;
        const yDist = badgePosition.top - ballPosition.top;
        

        el.style.transform = `translate(${xDist}px, ${yDist}px)`;
        el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
        done()
      },
      afterEnter(el) {
        this.ballFlag = !this.ballFlag
      },
      getSelectedCount(count) {
        this.selectedCount = count;
        console.log("父组件拿到的数量值为： " + this.selectedCount);
      }
    },
    components: {
      swiper,
      numberbox
    }
  }
</script>