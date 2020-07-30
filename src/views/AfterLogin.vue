<template>
  <div class="afterlogin">
    <div class="header">
      <div class="header-imgbox" @click="gotoRevise(avator)">
        <img :src="avator" />
      </div>
      <div class="header-icon"  @click="gotoRevise">
        <i class="el-icon-edit-outline"></i>
      </div>
    </div>
    <ul class="quick-entry">
      <li @click="appointment">
        <i class="el-icon-document-checked"></i>预约
      </li>
      <li  @click="gotoorder">
        <i class="el-icon-tickets"></i>订单
      </li>
      <li @click="gotocollectlist">
        <i class="el-icon-collection-tag"></i>关注
      </li>
      <li>
        <i class="el-icon-office-building"></i>房屋
      </li>
    </ul>
    <ul class="entry-list">
      <li @click="alive">
        在线咨询
        <i class="el-icon-date"></i>
      </li>
      <li @click="phone">
        电话客服
        <i class="el-icon-service"></i>
      </li>
      <li @click="suggest">
        投诉建议
        <i class="el-icon-edit"></i>
      </li>
      <li @click="aboutours">
        关于我们
        <i class="el-icon-news"></i>
      </li>
      <li is-link @click="showPopup">清除缓存
        <i class="el-icon-brush"></i>
        <van-popup v-model="show" round close-on-popstate  :style="{ padding: '10px 20px'}"><i class="el-icon-check" :style="{background:'transparent',display:'block',fontSize:'30px'}"></i>清除缓存成功</van-popup>
      </li>
    </ul>
  </div>
</template>
<style scoped>
* {
  background: #f5f5f5;
}
.clearfix::after {
  content: 0;
  display: block;
  clear: both;
}
.header {
  background: white;
  padding: 30px 15px;
  position: relative;
}
.header .header-imgbox {
  width: 82px;
  height: 82px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #eee;
  margin-left: 250px;
}
.header .header-icon {
  position: absolute;
  bottom: 30px;
  right: 26px;
  background: rgb(252, 181, 49);
  border-radius: 50%;
  padding: 5px;
  
}
.header .header-icon i{
  background: none;
  color: black;
}
.header .header-imgbox div i {
  font-size: 26px;
  background: rgb(252, 181, 49);
  color: rgb(252, 181, 49);
}
.header img {
  width: 100%;
}
.quick-entry {
  display: flex;
  justify-content: space-around;
  height: 70px;
  padding-bottom: 30px;
  font-size: 14px;
  background: white;
}
.quick-entry li {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: white;
}
.quick-entry li i {
  font-size: 26px;
  background: white;
}
.entry-list {
  margin-top: 10px;
  background: white;
  padding: 0 20px;
}
.entry-list li {
  height: 55px;
  line-height: 55px;
  display: flex;
  justify-content: space-between;
  background: white;
  border-bottom: 1px solid #eee;
  align-items: center;
}
.entry-list li i {
  background: white;
  font-size: 24px;
}
</style>
<script>
import { Toast } from "vant";
import { Popup } from 'vant';
export default {
  data() {
    return {
      show: false,
      avator:this.$store.state.avator
    };
  },
  components:{
      'van-popup':Popup
  },
  methods: {
    appointment(){
      this.$router.push('/mineappointment');
    },
    showPopup() {
      this.show = !this.show;
    },
    gotoRevise(avator) {
      this.$router.push({
        name:"reviseperson",
        params:{
          id:avator
        }
      });
    },
    gotocollectlist() {
      this.$router.push("/collectlist");
    },
    alive() {
      Toast("正在维护中");
    },
    phone() {
      Toast("客服今天休假哦~");
    },
    suggest() {
      Toast("您再考虑考虑？");
    },
    aboutours() {
      Toast("正在完善中");
    },
    clearcache() {
      Toast("清除缓存成功");
    },
    gotoorder(){
      this.$router.push('/order');
    }
  }
};
</script>