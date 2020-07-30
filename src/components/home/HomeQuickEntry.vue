<template>
    <ul class="quick-entry">
      <li @click="homeCompute"><i class="iconfont icon-jisuanqi"></i>报价计算器</li>
      <li @click="homeMall"><i class="iconfont icon-gouwuche"></i>微商城</li>
      <li @click="homeCraft"><i class="iconfont icon-ruler"></i>工艺间</li>
      <li @click="homeKnow"><i class="iconfont icon-wenti"></i>窝知道</li>
    </ul>
</template>
<script>
export default {
  methods:{
    homeCompute(){
      this.$router.push("/homecompute");
    },
    homeMall(){
      this.$router.push("/homemall");
    },
    homeCraft(){
      this.$router.push("/homecraft");
    },
    homeKnow(){
      this.$router.push("/homeknow");
    }
  }
}
</script>
<style scoped>
  .quick-entry{
    width: 100%;
    height: 82px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .quick-entry li{
    display: flex;
    flex-direction: column;
    font-size: 14px;
  }
  .quick-entry i{
    font-size: 26px;
  }
</style>