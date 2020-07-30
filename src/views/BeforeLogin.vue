<template>
  <div class="mine">
    <div class="closeBtn">
      <i class="iconfont icon-cuo" @click="closeLogin"></i>
    </div>
    <div class="header">
      <h3>登录 / 注册</h3>
      <p>未注册过的手机号将自动创建安乐窝账号</p>
    </div>
    <div class="form">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="请输入用户名（ 4-10位数字 ）"
          :rules="[{ pattern:/^[0-9]{3,10}$/, message: '请正确填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码（ 4-10位数字 ）"
          placeholder="密码"
          :rules="[{ pattern:/^[0-9]{3,10}$/, message: '请正确填写密码' }]"
        />
        <p>
          <el-checkbox v-model="treatyChecked">
            <span>
              我同意
              <a href>《安乐窝用户服务协议》</a>与
              <a href>《安乐窝隐私政策》</a>
            </span>
          </el-checkbox>
        </p>
        <div style="margin:16px;">
          <van-button block type="info" class="login">提交</van-button>
        </div>
      </van-form>
      <div class="replacePhone">
        <a>已更换号码?</a>
      </div>
      <div class="replaceLogin">
        <p class="replaceLoginTip">使用社交方式登录</p>
        <p class="replaceLoginIcon">
          <i class="iconfont icon-qq"></i>
          <i class="iconfont icon-weibo"></i>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { Form, Toast } from "vant";
import { Button } from "vant";
import { Field } from "vant";
import Qs from "qs";
export default {
  data() {
    return {
      username: "",
      password: "",
      treatyChecked: false,
      isLogin: false
    };
  },
  methods: {
    closeLogin() {
      this.$router.push("/home");
    },
    gotoLogin() {
      this.$router.push("/afterlogin");
    },
    onSubmit(values) {
      if (this.treatyChecked) {
        this.username = values.username;
        this.password = values.password;
        console.log(this.username);
        console.log(this.password);
        this.$axios({
        method: "post",
        url: "/anlewo/register.php",
        data: Qs.stringify({
          username: this.username,
          userpwd: this.password
        })
      }).then(res => {
              if (res.data.code == 1) {
                Toast('登录成功');
                this.$store.state.isLogin=true;
                let date=new Date();
                // console.log(date);
                date.setTime((date.getTime()-8*1000*60*60)+1000*60*60*24*7);
                let loginInfo={
                    loginName:this.username,
                    expires:date
                }
                window.localStorage.setItem('loginInfo',JSON.stringify(loginInfo));
                window.location.href=this.$store.state.backpath;
              } else{
                Toast('登录失败');
              }
            });
        }
      }
    },
    beforeCreate() {
      this.$store.dispatch("asyncUpdateFlag", false);
    },
    beforeDestroy() {
      this.$store.commit("updateFlag", true);
    },
    components: {
      "van-form": Form,
      "van-field": Field,
      "van-button": Button
    }
  }
</script>
<style scoped>
.mine {
  padding: 0 15px;
  text-align: left;
}
.closeBtn i {
  height: 46px;
  line-height: 46px;
  font-size: 28px;
}
.header h3 {
  font-size: 24px;
}
.header p {
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  color: #999;
}
.form .telTip,
.form .icodeTip {
  font-family: Microsoft YaHei;
  font-weight: bold;
  margin-top: 20px;
  font-size: 14px;
  color: #333;
}
.form .icodeTip {
  display: flex;
  justify-content: space-between;
}
.form input {
  width: 350px;
  border: none;
  height: 40px;
  border-bottom: 1px solid #ccc;
}
.form a {
  text-decoration: none;
  color: #3288fd;
}
.form span {
  color: #333;
  font-size: 12px;
  margin: 30px 0;
  display: inline-block;
}
.login {
  height: 45px;
  border-radius: 4px;
  width: 100%;
  background-color: rgb(253, 215, 145);
  border: 1px solid rgb(252, 183, 118);
  color: white;
}
.form .replacePhone {
  text-align: right;
  margin: 30px 0;
}
.form .replaceLogin {
  margin-top: 30px;
}
.form .replaceLoginTip {
  float: left;
  font-size: 14px;
  color: #999;
}
.form .replaceLoginIcon {
  float: right;
  display: flex;
  width: 60%;
  justify-content: space-evenly;
}
.form .replaceLoginIcon i {
  font-size: 24px;
  color: rgb(253, 161, 75);
}
</style>