<template>
	<div class="shopcar-container">
		<div class="goods-list">
      <div class="mui-card" v-for="(item, i) in goodslist" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <!-- 是否选定 -->
            <mt-switch 
            v-model="$store.getters.getGoodsSelected[item.id]" 
            @change="selectedChanged(item.id, $store.getters.getGoodsSelected[item.id])">
            </mt-switch>
            <img :src="item.img_url" alt="">             
            <div class="info">
              <h3>{{ item.title }}</h3>
              <p>
                <span class="price">￥{{ item.sell_price }}</span>
                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                <a href="#" @click.prevent="remove(item.id, i)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 结算区域 -->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner count-all">
            <div class="left">
              <p>总计（不含运费）</p>
              <p>已购选商品<span class="red">{{ $store.getters.getGoodsCountAndAmount.count }}</span>件，总价<span class="red">￥{{ $store.getters.getGoodsCountAndAmount.amount }}</span></p>
            </div>
            <mt-button type="danger">去结算</mt-button>
          </div>
        </div>
      </div>
      <p>{{ $store.getters.getGoodsSelected }}</p>
    </div>
	</div>
</template>

<style lang="scss" scoped>
  .shopcar-container{
    background-color: #eee;
    overflow: hidden;
    .goods-list {
      .mui-card-content-inner {
        display: flex;
        align-items: center;
      }
      img {
        width: 60px;
        height: 60px;
      }
      h3 {
        font-size: 13px;
      }
      .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .price {
          color: red;
        }
      }
    }
    .count-all {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .red {
        color: red;
        font-weight: bold;
        font-size: 16px;
      }
    }
  }
</style>

<script>
import numbox from '../subcomponents/shopcar_number.vue';

export default {
  data() {
    return {
      goodslist: []
    }
  },
  created() {
    this.getGoodsList()

  },
  methods: {
    getGoodsList() {

      var idArr = [];
      //获取store里的id数组
      this.$store.state.car.forEach(item => idArr.push(item.id));

      if (idArr.length <= 0) {
        return ;
      }
      for (var k = 0, length = idArr.length; k < length; k++) {
        this.$http.get("http://localhost:3000/" + idArr[k]).then(result => {
          if (result.body.status === 0) {
            this.goodslist = this.goodslist.concat(result.body.message);
          }
        })
      }
      console.log(idArr)
    },
    remove(id, index) {
      // 根据store里传出的id删除goodlist里面的对应项商品，用index来删除
      this.goodslist.splice(index, 1);
      this.$store.commit("removeFromCar", id)
    },
    selectedChanged(id, val) {
      // 每当点击开关，把最新的 快关状态，同步到 store 中
      // console.log(id + " --- " + val);
      this.$store.commit("updateGoodsSelected", { id, selected: val });
    }
  },
  components: {
    numbox
  }
}
</script>
