<template>
  <div class="addcollect">
    <div class="imgbox">
      <img :src="data.img" />
    </div>
    <div class="bigimg">
      <h2>{{data.title}}</h2>
      <p class="currentprice">
        {{data.currentprice}}
        <span>套餐</span>
      </p>
      <div class="saleinfo">
        <p class="saleprice">{{data.saleprice}}</p>
        <p class="salenum">{{data.salenum}}</p>
      </div>
      <div class="tag">
        适用于
        <span>主材包</span>
        <span>整装包</span>
        <span>拎包入住</span>
      </div>
      <div class="concern" :class="{active:isActive}" @click="insertcollect(data)">
        <i class="el-icon-star-off"></i> 收藏
      </div>
      <!-- <div>{{this.$route.params.id}}</div> -->
    </div>
  </div>
</template>
<script>
import Qs from "qs";
import { Toast } from 'vant';
export default {
  data() {
    return {
      data: this.$route.params.id,
      isActive: false
    };
  },
  methods: {
    insertcollect(data) {
      this.isActive = !this.isActive;
      if (this.isActive == false) {
        this.$axios({
          method: "post",
          url: "/anlewo/deletecollect.php",
          data: Qs.stringify({
            goodsid: data.goodsid
          })
        }).then(res => {
          Toast('取消收藏');
        });
      } else {
        this.$axios({
          method: "post",
          url: "/anlewo/addcollect.php",
          data: Qs.stringify({
            goodsname: data.title,
            price: data.currentprice,
            salenum: data.salenum,
            goodsimg: data.img,
            goodsid: data.goodsid
          })
        }).then(res => {
          Toast('收藏成功');
        });
      }
    }
  },
  mounted() {
    this.$axios({
      method: "post",
      url: "/anlewo/origincollect.php",
      data: Qs.stringify({
        goodsid: this.data.goodsid
      })
    }).then(res => {
      this.isActive=res.data;
    });
  }
};
</script>
<style lang="scss" scoped>
.bigimg {
  text-align: left;
  padding: 0 10px;
  h2 {
    font-size: 20px;
  }
  div {
    padding: 10px 0;
  }
  .currentprice {
    font-size: 16px;
    color: rgb(252, 221, 119);
    span {
      padding: 2px 4px;
      border-radius: 4px;
      border: 1px solid rgb(255, 166, 0);
      color: rgb(255, 166, 0);
      font-size: 12px;
    }
  }
  .saleinfo {
    display: flex;
    justify-content: space-between;
    color: #999;
  }
  .tag {
    span {
      background: #eee;
      border-radius: 4px;
      padding: 2px 4px;
    }
  }
  .concern {
    position: fixed;
    right: 20px;
    bottom: 60px;
    padding: 6px 10px;
    border-radius: 4px;
    font-size: 16px;
    .el-icon-star-off {
      font-size: 26px;
    }
  }
}
.imgbox img {
  width: 100%;
}
.concern.active {
  color: rgb(247, 99, 13);
}
</style>