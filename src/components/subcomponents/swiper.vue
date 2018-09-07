<template>
    <mt-swipe :auto="4000">
      <mt-swipe-item  v-for="item in lunbotuList" :key="item.url">
        <img :class="{'full': isfull}" :src="item.img" alt="" >
      </mt-swipe-item>
    </mt-swipe>
</template>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item{
    text-align:center;
    img{
      height: 100%;
      // width: 100%;
    }
  }
}
.full {
  width: 100%
}
</style>

<script>
  export default {
    props: ["lunbotuList", "isfull"]
  }
</script>