<template>
  <div id="app">
<!--    需要缓存的页面-->
    <keep-alive v-if="isKeepAlive">
      <router-view/>
    </keep-alive>
 <!--    不需要缓存的页面-->
    <router-view v-else />

    <tab-bar v-if="isShowBar" />
  </div>
</template>
<script>
import TabBar from "./components/content/tabBar/TabBar";
export default {
  computed:{
    isKeepAlive(){
      return this.$route.meta.keepAlive
    },
    isShowBar(){
      // 不需要底部tab的页面，可以将路由的name值，放这这里
      return ![ 'Login', 'ProductDetail','ShopCar','AllOrder','OrderDetail','OrderResult'].includes(this.$route.name)
    }
  },
  components:{
    TabBar
  }
}
</script>
<style lang="scss">
@import "assets/css/common";

</style>
