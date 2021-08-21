<template>
  <div>
   首页
  </div>
</template>

<script>
//引入公共组件

//引入私有组件

//引入异步请求
import {getProductList} from "api/product";

//引入辅助函数 与公共方法

export default {
  name: "Home",
  data(){
    return {

    }
  },
  created() {
  },
  mounted() {
    getProductList().then(res=>{
      console.log(res);
    });
  },
  components:{

  }
}
</script>

<style scoped lang="scss">

</style>