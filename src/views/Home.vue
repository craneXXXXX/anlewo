<template>
  <keep-alive>
    <div class="home">
      <div class="header">
        <div class="header-content">
          <div>
            武汉市
            <i class="iconfont icon-xiajiantou"></i>
          </div>
          <h1>安乐窝</h1>
          <div class="header-content-i">
            <i class="iconfont icon-message"></i>
            <i class="iconfont icon-kefu"></i>
          </div>
        </div>
        <swiper></swiper>
      </div>
      <quick-entry></quick-entry>
      <div class="banner">
        <div class="banner-left">
          <img src="https://www.woimg.com/beego/8fb7d286752a2bba71acfb37a344d698.jpg" />
        </div>
        <div class="banner-right">
          <div class="banner-right-top">
            <img src="https://m.anlewo.com/static/img/zcb@2x.78c26.png" />
          </div>
          <div class="banner-right-bottom">
            <img src="https://m.anlewo.com/static/img/zzb@2x.d21a6.png" />
          </div>
        </div>
      </div>
      <brand></brand>
      <div class="brand arrange">
        <div class="brand-title">
          <h2>窝搭配</h2>
          <p>
            更多搭配
            <i class="iconfont icon-youjiantou"></i>
          </p>
        </div>
        <div class="arrange-content">
          <div class="arrange-content-img">
            <a href>
              <img src="https://www.woimg.com/beego/394e4ae10cd353c797b6acb953c15fe1.jpg" />
            </a>
          </div>
          <h3>窝搭配装修案例赏析</h3>
          <p>客厅 | 卧室 | 现代简约</p>
        </div>
      </div>
      <div class="recruit" @click="preview">
        <img src="https://m.anlewo.com/special/join/img/banner.png" />
      </div>
      <div class="footer">
        <div></div>
        <p>我是有底线的</p>
      </div>
      <div class="consult">
        <i class="iconfont icon-xinxi"></i>咨询
      </div>
    </div>
  </keep-alive>
</template>
<style scoped>
.consult {
  position: fixed;
  top: 50%;
  right: 10px;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: rgb(31, 140, 235);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.consult i {
  color: white;
  font-size: 20px;
}
.header {
  height: 232px;
  overflow: hidden;
  color: rgb(253, 250, 250);
  background: white;
}
.header .header-content {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 14px;
  justify-content: space-between;
  position: fixed;
  top: 0;
}
.header .header-content h1 {
  position: fixed;
  top: 10px;
  font-size: 20px;
}
.header .header-content i {
  font-size: 24px;
}
.header .header-content .icon-xiajiantou {
  font-size: 20px;
}
.header .header-content .icon-kefu {
  margin-left: 15px;
}

.banner {
  padding: 16px;
  height: 180px;
  overflow: hidden;
}
.banner .banner-left,
.banner .banner-right {
  width: 166px;
  float: left;
}
.banner .banner-left img {
  width: 100%;
}
.banner .banner-right {
  margin-left: 8px;
}
.banner .banner-right .banner-right-top {
  overflow: hidden;
}
.banner .banner-right .banner-right-top img {
  width: 100%;
}
.banner .banner-right .banner-right-bottom {
  margin-top: 8px;
  overflow: hidden;
}
.banner .banner-right .banner-right-bottom img {
  width: 100%;
}

.arrange {
  padding: 0 0 30px 15px;
  text-align: left;
}
.arrange .arrange-content {
  padding-right: 25px;
  height: 216px;
}
.arrange .arrange-content-img {
  height: 150px;
  overflow: hidden;
}
.arrange .arrange-content-img img {
  width: 100%;
}
.arrange .arrange-content h3 {
  color: #333;
  font-weight: normal;
  font-size: 16px;
  padding: 15px 0;
}
.arrange .arrange-content p {
  color: #999;
}
.recruit {
  height: 160px;
  overflow: hidden;
}
.recruit img {
  width: 100%;
}
.footer {
  height: 40px;
  margin-bottom: 50px;
  position: relative;
}
.footer div {
  height: 20px;
  border-bottom: 1px solid #eee;
}
.footer p {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: white;
  font-size: 14px;
  padding: 0 5px;
}
</style>
<script>
import HomeSwiper from "../components/home/HomeSwiper.vue";
import HomeBrand from "../components/home/HomeBrand.vue";
import HomeQuickEntry from "../components/home/HomeQuickEntry.vue";
import { ImagePreview } from "vant";
// ImagePreview(["https://m.anlewo.com/special/join/img/banner.png"]);
export default {
  data() {
    return {
      homeList: []
    };
  },
  methods:{
    preview(){
      ImagePreview(["https://m.anlewo.com/special/join/img/banner.png"]);
    }
  },
  components: {
    swiper: HomeSwiper,
    brand: HomeBrand,
    "quick-entry": HomeQuickEntry,
    [ImagePreview.Component.name]: ImagePreview.Component
  }
};
</script>
