<template>
  <div class="mallStore">
    <div class="header">
      <i class="el-icon-arrow-left" @click="back"></i>建材
    </div>
    <div class="box">
      <div id="list">
        <router-link to="/mallstore/mallselect1">装修辅材</router-link>
        <router-link to="/mallstore/mallselect2">墙地面类</router-link>
        <router-link to="/mallstore/mallselect3">厨房类</router-link>
        <router-link to="/mallstore/mallselect4">门类</router-link>
        <router-link to="/mallstore/mallselect5">洁具/卫浴</router-link>
        <router-link to="/mallstore/mallselect6">集成吊顶</router-link>
        <router-link to="/mallstore/mallselect7">电器</router-link>
        <router-link to="/mallstore/mallselect8">家居</router-link>
        <router-link to="/mallstore/mallselect9">集成定制</router-link>
      </div>
      <router-view id="listdetail" />
    </div>
  </div>
</template>
<script>
export default {
  beforeCreate() {
    this.$store.dispatch("asyncUpdateFlag", false);
  },
  beforeDestroy() {
    this.$store.commit("updateFlag", true);
  },
  methods:{
    back(){
      this.$router.push('/mall');
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  height: 46px;
  line-height: 46px;
  font-size: 18px;
  font-weight: bold;
  i {
    position: fixed;
    left: 10px;
    top: 14px;
    font-size: 24px;
    font-weight: bold;
  }
}
.box {
  display: flex;
  #list {
    font-size: 12px;
    width: 88px;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    a {
      color: #999;
      height: 30px;
      line-height: 30px;
      display: inline-block;
      margin: 16px 10px;
      font-size: 14px;
      &.router-link-exact-active{
          color: #333;
          font-weight: bold;
          &::after{
              content: '';
              display: block;
              clear: both;
              width: 60%;
              height: 2px;
              background: #333;
              margin: 0 auto;
          }
      }
      
    }
  }
  #listdetail {
    flex: 1;
    border-left: 1px solid #eee;
    overflow: hidden;
  }
}
</style>