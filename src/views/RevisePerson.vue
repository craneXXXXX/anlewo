<template>
  <div class="revisePerson">
    <h2 class="header">
      编辑个人信息
      <i class="el-icon-back" @click="gotoafterlogin"></i>
    </h2>
    <div class="header-icon">
      <div class="icon">
        <img :src="avator" />
      </div>
    </div>
    <ul class="info-one">
      <li v-for="(item,index) in content" :key="index" @click="toast">
        {{item}}
        <i class="el-icon-arrow-right"></i>
      </li>
    </ul>
    <ul class="info-one">
     <li v-for="(item,index) in content1" :key="index" @click="toast">
        {{item}}
        <i class="el-icon-arrow-right"></i>
      </li>
    </ul>
    <ul class="info-one">
      <li v-for="(item,index) in content2" :key="index" @click="toast">
        {{item}}
        <i class="el-icon-arrow-right"></i>
      </li>
    </ul>
    <div class="quit" @click="quit">退出登录</div>
  </div>
</template>
<script>
import { Dialog, Toast } from "vant";
import { Empty } from "vant";
export default {
  data() {
    return {
      content: ["昵称", "姓名", "头像"],
      content1: ["喜爱风格", "装修阶段"],
      content2: ["手机号", "第三方账号绑定"],
      avator: this.$route.params.id
    };
  },
  methods: {
    gotoafterlogin() {
      this.$router.push("/mine");
    },
    quit() {
      Dialog.confirm({
        message: "您确定退出登录？"
      })
        .then(() => {
          window.localStorage.removeItem("loginInfo");
          this.$router.push("/mine");
        })
        .catch(() => {});
    },
    toast(){
        Toast('不能说的秘密');
    }
  },
  beforeCreate() {
    this.$store.dispatch("asyncUpdateFlag", false);
  },
  beforeDestroy() {
    this.$store.commit("updateFlag", true);
  }
};
</script>
<style scoped>
.revisePerson {
  background: #f5f5f5;
}
.header {
  font-size: 18px;
  position: relative;
  line-height: 46px;
  height: 46px;
  border-bottom: 1px solid #eee;
  background: white;
}
.header i {
  position: absolute;
  left: 16px;
  font-size: 24px;
  top: 12px;
}
.header-icon {
  background: white;
  padding: 20px 0;
}
.icon {
  width: 92px;
  height: 92px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  border: 1px solid #eee;
}
.icon img {
  width: 100%;
}
.info-one {
  padding: 0 15px;
  font-size: 14px;
  background: white;
  margin-top: 10px;
}
.info-one li {
  height: 48px;
  line-height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid #eee;
}
.info-one li i {
  font-size: 20px;
  color: #999;
}
.info-one li:last-child {
  border-bottom: none;
}
.quit {
  height: 40px;
  line-height: 40px;
  margin: 10px 0;
  background: white;
}
</style>