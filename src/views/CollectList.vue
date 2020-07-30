<template>
  <div class="collectlist">
    <van-nav-bar
      title="标题"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <ul>
      <li v-for='(item,index) in collectlist' :key='index'>
        <div class="imgbox">
          <img :src="item[2]" />
        </div>
        <div class="content">
          <h2 class="title">{{item[5]}}</h2>
          <div class="saleinfo">
            <div class="saleprice">{{item[4]}}</div>
            <div class="salenum">{{item[3]}}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
ul{
    padding: 10px;
}
ul li {
  display: flex;
  text-align: left;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  .imgbox {
    width: 80px;
    overflow: hidden;
  }
  .title{
      font-size: 12px;
      margin: 6px;
  }
  .saleinfo{
      display: flex;
      justify-content: space-between;
      margin: 10px;
  }
}
.imgbox img {
  width: 100%;
}
</style>
<script>
import { NavBar,Toast } from 'vant';
export default {
    data(){
        return{
            collectlist:[]
        }
    },
  mounted() {
    this.$axios("/anlewo/searchcollect.php").then(res => {
        this.collectlist=res.data;
      console.log(res.data);
    });
  },
  methods: {
    onClickLeft() {
      this.$router.push('/mine');
    }
  },
  components:{
      'van-nav-bar':NavBar
  }
};
</script>