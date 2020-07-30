<template>
  <div class="about">
    <h1>体验馆 <van-icon name="wap-home-o" @click="home" /></h1>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad"
        :offset="10"
        :immediate-check="false"
      >
        <div id="list-content">
          <ul class="infinite-list" style="overflow:auto">
            <li
              v-for="(item,index) in data"
              :key="index"
              @click="experienceDetail(item.shoplocation,item.shopname)"
            >
              <div class="homeList-content">
                <img :src="item.shopimg" style="width:345px;" />
                <h3 style="padding: 10px 0 6px 0;font-size: 16px;color: #444;">{{item.shopname}}</h3>
                <p
                  class="homeList-detail"
                  style="padding-bottom:20px;margin-bottom:10px;border-bottom:1px solid #eee;"
                >{{item.shoplocation}}</p>
              </div>
            </li>
          </ul>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
import { PullRefresh, List, Loading } from "vant";
import { Icon } from 'vant';
import Qs from "qs";
export default {
  data() {
    return {
      data: [],
      data1: "",
      total: 1, //总条数
      page: 1, //页码
      raw: 4, //每页条数
      isLoading: false,
      loading: false,
      finished: false
    };
  },
  methods: {
    experienceDetail(location, name) {
      this.$router.push({
        name: "experiencedetail",
        params: {
          location: location,
          name: name
        }
      });
    },
    onRefresh() {
      this.page = 1;
      this.finished = false;
      this.getList();
    },
    //上拉加载
    onLoad() {
      // 异步更新数据
      // console.log("加载");
      this.page++;
      let that = this;
      this.$axios({
        url: "/anlewo/experienceshop.php",
        method: "post",
        data: Qs.stringify({
          page: (this.page - 1) * this.raw,
          raw: this.raw
        })
      }).then(res => {
        that.data1 = res.data[0];
        that.total = res.data[1];
        that.data1.forEach(v => {
          that.data.push(v);
        });
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.data.length >= this.total) {
          this.finished = true;
        }
      });
    },
    getList() {
      let that = this;
      this.$axios({
        url: "/anlewo/experienceshop.php",
        method: "post",
        data: Qs.stringify({
          page: (this.page - 1) * this.raw,
          raw: this.raw
        })
      }).then(res => {
        this.data = res.data[0];
        this.total = res.data[1][0].total;
        this.isLoading = false;
        if (this.data.length >= this.total) {
          this.finished = true;
        }
      });
    },
    home(){
      this.$router.push('/home');
    }
  },
  mounted() {
    this.$axios({
        url: "/anlewo/experienceshop.php",
        method: "post",
        data: Qs.stringify({
          page: (this.page - 1) * this.raw,
          raw: this.raw
        })
      }).then(res => {
        this.data = res.data[0];
        this.total = res.data[1][0].total;
        this.isLoading = false;
        if (this.data.length >= this.total) {
          this.finished = true;
        }
      });
    let winHeight = document.documentElement.clientHeight; //视口大小
    document.getElementById("list-content").style.minHeight = winHeight - 100 + "px";
  },
  created() {
    this.getList();
  },
  components: {
    "van-pull-refresh": PullRefresh,
    "van-list": List,
    'van-icon':Icon
  }
};
</script>
<style scoped>

.about {
  margin: 0 10px;
  text-align: left;
  color: #333;
  padding-bottom: 20px;
}
h1 {
  height: 50px;
  line-height: 50px;
}
h1 i{
  position: fixed;
  right: 10px;
  top: 10px;
  font-size: 30px;
  z-index: 100;
  background: white;
  border-radius: 50%;
}
</style>
