<template>
  <div class="order">
    <van-nav-bar
      title="订单"
      left-text="返回"
      right-text="清空"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      class="orderheader"
    />
    <ul>
      <li v-for="(item,index) in orderlist" :key="index" class="cartli">
        <div class="imgbox">
          <img :src="item.cartimg" class="cartimg" />
        </div>
        <p class="carttitle">{{item.carttitle}}</p>
      </li>
    </ul>
    <!-- {{this.cartlist}} -->
  </div>
</template>
<script>
import { NavBar } from "vant";
import { Dialog } from "vant";
export default {
  data() {
    return {
      orderlist: []
    };
  },
  created() {
    this.$axios("/anlewo/orderlist.php").then(res => {
      this.orderlist = res.data;
      console.log(this.orderlist);
    });
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Dialog.confirm({
        message: "确定清空所有订单？"
      })
        .then(() => {
          this.orderlist = [];
          this.$axios("/anlewo/deleteorder.php");
        })
        .catch(() => {});
    }
  },
  components: {
    "van-nav-bar": NavBar
  }
};
</script>
<style lang="scss" scoped>
.orderheader {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}

.order {
  padding: 60px 0;
}
.cartli {
  display: flex;
  justify-content: space-between;
  width: 100%;
  .imgbox {
    overflow: hidden;
    .cartimg {
      width: 120px;
      height: 120px;
      img {
        width: 100%;
      }
    }
  }
  .carttitle {
    flex: 1;
    text-align: left;
    font-size: 14px;
    padding-left: 10px;
  }
}
</style>