<template>
  <van-row class="topBar">
    <van-col class="test" @click.native="goBack" span="2">
      <van-icon class="icon" name="arrow-left" />
    </van-col>
    <van-col class="title" span="20">{{title}}</van-col>
    <van-col class="title" span="2"></van-col>
  </van-row>
</template>

<script>
export default {
  name: "BackHeaderTitle",
  props:{
    title:''
  },
  methods:{
    goBack(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.topBar{
  padding: 30px 20px;
}
.title{
  text-align: center;
  font-size: 32px;
  height: 50px;
  line-height: 50px;
}
</style>