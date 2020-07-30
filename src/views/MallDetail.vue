<template>
  <keep-alive>
    <div class="malldetail">
      <div class="header">
        <i class="el-icon-arrow-left" @click="back"></i>
        {{this.$route.params.id}}
      </div>
      <div>
        <van-search v-model="value" label="商品" placeholder="请输入搜索关键词" @search="onSearch">
          <template #action>
            <div @click="onSearch">搜索</div>
          </template>
        </van-search>
      </div>
      <ul class="list"  v-if='!listempty'>
        <li v-for="(item,index) in list" :key="item.id+index" >
          <div class="imgbox" @click="collect(item)">
            <img :src="item.img" />
          </div>
          <div class="content">
            <span class="brand">{{item.brand}}</span>
            <p class="title" @click="collect(item)">{{item.title}}</p>
            <p class="tag">
              <span>主材包</span>
              <span>整装包</span>
            </p>
            <p class="currentprice">{{item.currentprice}}</p>
            <div class="saleinfo">
              <p class="saleprice">{{item.saleprice}}</p>
              <p class="salenum">{{item.salenum}}</p>
            </div>
            <p class="btn">
              <van-stepper
                v-model="cartnum[index]"
                default-value="0"
                min="0"
                theme="round"
                button-size="22"
                disable-input
                @plus="plus(index,item.currentprice,item)"
                @minus="minus(index,item.currentprice,item)"
              />
            </p>
          </div>
        </li>
      </ul>
      <div class="list" v-else><van-empty description="没有商品哦~" /></div>
      <div class="summary">
        <div class="carticon" @click="clearcart">
          <i class="el-icon-shopping-cart-full">
            <div class="cartnum">{{cartlist.length}}</div>
          </i>
          <van-popup v-model="show" position="bottom">
            <div class="miniheader">
              <span class="popcar">购物车</span>
              <p @click="empty">
                <i class="el-icon-delete"></i>清空
              </p>
            </div>
            <ul class="origincart">
              <li v-for="(item,index) in cartlist" :key="index" class="popli">
                <p class="poptitle">{{item.title}}</p>
                <p class="popprice">{{item.currentprice}}</p>
                <p class="popdelete" @click.stop="deletesingle(index)">删除</p>
              </li>
            </ul>
          </van-popup>
        </div>
        <div class="total">
          总计 ：
          <span class="sum">￥ {{this.total.toFixed(2)}}</span>
        </div>
        <div class="pay">
          <button @click="gotocart(cartlist)">结算</button>
        </div>
      </div>
      <div class="order" @click="gotoorder">查看订单</div>
    </div>
  </keep-alive>
</template>
<script>
import Qs from "qs";
import { Search, Step, Steps } from "vant";
import { Toast } from "vant";
import { Stepper } from "vant";
import { Popup } from "vant";
import { Dialog } from "vant";
import { Empty } from 'vant';
export default {
  data() {
    return {
      list: [],
      templist: [],
      value: "",
      cartnum: [],
      total: 0,
      cartlist: [],
      show: false,
      listempty:false,
      num:0,
      cost:0
    };
  },
  components: {
    "van-search": Search,
    "van-stepper": Stepper,
    "van-popup": Popup,
    "van-empty": Empty
  },
  methods: {
    plus(index, price, item) {
      this.cartnum[index]++;
      this.num = this.cartnum[index];
      this.cost = parseInt(price.substring(1));
      this.total += this.cost;
      this.cartlist.push(item);
    },
    minus(index, price, item) {
      this.cartnum[index]--;
      this.num = this.cartnum[index];
      this.cost = parseInt(price.substring(1));
      this.total -= this.cost;
      this.cartlist.forEach((item, index) => {
        if (item.goodsid == item.goodsid) {
          this.cartlist.splice(index, 1);
          return;
        }
      });
    },
    back() {
      this.$router.push("/mall");
    },
    onSearch(val) {
      this.$axios({
        method: "post",
        url: "http://127.0.0.1/anlewo/malldetail.php",
        data: Qs.stringify({
          classify: this.$route.params.id
        })
      }).then(res => {
        this.list = res.data;
      });
      this.list.forEach(item => {
        if (item.title.includes(this.value)) {
          this.templist.push(item);
        }
      });
      this.list = [];
      this.templist.forEach(item => {
        this.list.push(item);
      });
    },
    collect(item) {
      this.$router.push({
        name: "addcollect",
        params: {
          id: item
        }
      });
    },
    clearcart() {
      this.show = !this.show;
    },
    empty() {
      this.cartlist = [];
      this.cartnum = [];
      this.total = 0;
    },
    gotocart(cartlist) {
      let isLogin = localStorage.getItem("loginInfo");
      if (isLogin) {
        this.$axios({
          method: "post",
          url: "/anlewo/cart.php",
          data: Qs.stringify({
            cartlist: JSON.stringify(cartlist)
          })
        }).then(res => {
          // this.order = res.data;
          // console.log(res.data);
          Toast(`订单加入成功`);
        });
      } else {
        Dialog.confirm({
          message: "您还没有登录，去登录？"
        })
          .then(() => {
            this.$store.state.backpath = window.location.href;
            this.$router.push({
              name: "mine",
              params: {
                path: this.$store.state.backpath
              }
            });
            Toast('加入订单成功');
          })
          .catch(() => {
          });
      }
    },
    gotoorder() {
      let isLogin = localStorage.getItem("loginInfo");
      if (isLogin) {
        this.total = 0;
        this.$router.push("/order");
      } else {
        Dialog.confirm({
          message: "您还没有登录，去登录？"
        })
          .then(() => {
            this.$store.state.backpath = window.location.href;
            this.$router.push({
              name: "mine",
              params: {
                path: this.$store.state.backpath
              }
            });
            Toast('加入订单成功');
          })
          .catch(() => {
          });
      }
      
    },
    deletesingle(index){
      this.cartlist.splice(index,1);
    }
  },
  mounted() {
    this.$axios({
      method: "post",
      url: "/anlewo/malldetail.php",
      data: Qs.stringify({
        classify: this.$route.params.id
      })
    }).then(res => {
      if(res.data.length!=0){
        this.list = res.data;
        this.listempty=false;
      }else{
        this.listempty=true;
      }
      
    });
  },
  
  beforeCreate() {
    this.$store.dispatch("asyncUpdateFlag", false);
  },
  beforeDestroy() {
    this.$store.commit("updateFlag", true);
  }
};
</script>
<style lang="scss" scoped>
.order {
  position: fixed;
  right: 10px;
  top: 10px;
  background: white;
  color:rgb(241, 174, 86);
  padding: 5px 11px;
  border-radius: 4px;
}
.summary {
  background: #f6f6f6;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  height: 50px;
  line-height: 50px;
  justify-content: space-between;
  border-top: 1px solid #eee;
  font-size: 16px;
  color: #333;
  .el-icon-shopping-cart-full {
    font-size: 26px;
    background: rgb(231, 24, 52);
    padding: 10px;
    border-radius: 50%;
    box-shadow: 1px 1px 3px #ccc;
    color: white;
  }
  .sum {
    font-size: 18px;
    color: rgb(240, 146, 6);
  }
  button {
    padding: 0 20px;
    background: rgb(231, 24, 52);
    color: white;
    border: none;
  }
  .carticon {
    position: relative;

    .cartnum {
      position: absolute;
      right: -5px;
      top: -5px;
      border: 1px solid rgb(245, 37, 64);
      background: white;
      color: rgb(250, 44, 8);
      padding: 4px 6px;
      border-radius: 50%;
      font-size: 14px;
    }
    .miniheader {
      display: flex;
      justify-content: space-between;
      padding-right: 10px;
      border-bottom: 1px solid #eee;
      color: #999;
      background: rgb(245, 37, 64);
      .popcar,
      p {
        color: white;
      }
      span {
        padding-left: 5px;
        font-size: 14px;
        color: white;
      }
    }
    .origincart {
      .popli {
        display: flex;
        justify-content: space-between;
        text-align: left;
        font-size: 12px;
        padding: 0 5px;
        .poptitle {
          flex: 1;
        }
        .popprice {
          width: 70px;
          font-size: 12px;
          font-weight: bold;
          margin-right: 10px;
        }
      }
    }
  }
}
.header {
  height: 46px;
  line-height: 46px;
  font-size: 16px;
  border-bottom: 1px solid #eee;
  i {
    font-size: 24px;
    position: fixed;
    left: 12px;
    top: 14px;
  }
}
.list {
  padding-bottom: 60px;
  li {
    border-bottom: 1px solid #eee;
    padding: 6px 0 0 6px;

    display: flex;
    .content {
      flex: 1;
      padding: 10px;
      text-align: left;
      .brand {
        background: #f6f6f6;
        border: 1px solid #eee;
      }
      .title {
        font-weight: bold;
        font-size: 12px;
        padding: 6px 0;
      }
      span {
        background: #eee;
        border-radius: 4px;
        padding: 2px 4px;
        margin-right: 4px;
      }
      .currentprice {
        margin-top: 6px;
        font-size: 14px;
      }
      .saleinfo {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        .saleprice {
          color: #999;
        }
      }
    }
  }
}
.list li .imgbox {
  width: 160px;
  overflow: hidden;
  img {
    width: 100%;
  }
}
</style>