<template>
  <van-tabbar v-model="active" route active-color="#ee0a24" inactive-color="#000">
    <van-tabbar-item icon="home-o" replace to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="apps-o" replace to="/category">分类</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o" replace to="/shop-car">购物车</van-tabbar-item>
    <van-tabbar-item icon="friends-o" replace to="/profile">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      active: 0,
    };
  },
}
</script>

<style scoped lang="scss">

</style>