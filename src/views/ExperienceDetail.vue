<template>
  <keep-alive>
    <div class="box">
      <div class="dialog">
        <div class="dialogLocation">
          <i class="el-icon-back" @click="back"></i>
          <span class="dialogLocation-tag">
            322业主
            <span>已服务</span>
          </span>
          <div class="dialogLocation-header">
            <div class="dialogLocation-header-left">
              <h1>{{this.$route.params.name}}</h1>
              <p>整装包 | 主材包</p>
            </div>
            <div class="dialogLocation-header-right">
              <i class="el-icon-position"></i>
              <span>导航</span>
            </div>
          </div>
          <div class="locationImg">
            <img :src="locationImg" />
          </div>
        </div>
        <div class="dialogInfo">
          <h2>体验馆信息</h2>
          <el-table :data="tableData">
            <el-table-column prop="name" width="90"></el-table-column>
            <el-table-column prop="info" width="220"></el-table-column>
          </el-table>
          <div class="phone">
            <div>
              <i class="el-icon-phone-outline"></i>预约
            </div>
            <div>
              <i class="iconfont icon-xinxi"></i>咨询
            </div>
          </div>
        </div>
      </div>
    </div>
  </keep-alive>
</template>
<script>
export default {
  data() {
    return {
      locationImg:
        "https://www.woimg.com/beego/cms/2019/05/1ee504d2ab000fa849a1ab232feaab8d.jpg",
      tableData: [
        {
          name: "名称",
          info: this.$route.params.name
        },
        {
          name: "营业时间",
          info: "09:00A.m.-6:00P.m."
        },
        {
          name: "电话",
          info: "400 626 1688"
        },
        {
          name: "地址",
          info: this.$route.params.location
        }
      ]
    };
  },
  beforeCreate() {
    this.$store.dispatch("asyncUpdateFlag", false);
  },
  beforeDestroy() {
    this.$store.commit("updateFlag", true);
  },
  methods: {
    back() {
      this.$router.push("/experience");
    }
  }
};
</script>
<style scoped>
.box {
  padding: 0 15px;
}
.dialog {
  padding: 0 15px;
  padding-top: 40px;
  text-align: left;
}
.dialog .dialogLocation {
  height: 290px;
  background: white;
}
.dialog .dialogInfo {
  height: 180px;
  background: white;
}
.dialog .dialogLocation .el-icon-back {
  position: fixed;
  left: 20px;
  top: 12px;
  font-size: 24px;
  position: fixed;
  left: 26px;
  top: 15pxpx;
}
.dialog .dialogLocation-tag {
  font-size: 14px;
  padding: 0 5px;
  margin: 10px 0;
  background: #f5f5f5;
  display: inline-block;
  border-radius: 4px;
}
.dialog .dialogLocation-tag span {
  color: #999;
}
.dialog .dialogLocation-header {
  display: flex;
}
.dialog .dialogLocation-header-left {
  padding-right: 20px;
  margin-right: 30px;
  border-right: 1px solid #ccc;
}
.dialog .dialogLocation-header h1 {
  font-size: 20px;
  margin: 5px 0;
}
.dialog .dialogLocation-header p {
  color: #999;
}
.dialog .dialogLocation-header-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.dialog .dialogLocation-header-right i {
  font-size: 26px;
}
.dialog .locationImg {
  height: 150px;
  overflow: hidden;
  margin-top: 16px;
}
.dialog .locationImg img {
  width: 100%;
}
.phone {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.phone div {
  flex: 1;
  border: 1px solid #999;
  text-align: center;
  border-radius: 4px;
  height: 36px;
  line-height: 36px;
  margin-top: 10px;
  font-size: 16px;
  color: #444;
}
.phone div:first-child {
  margin-right: 10px;
}
</style>