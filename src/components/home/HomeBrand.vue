<template>
  <div class="brand">
    <div class="brand-title">
      <h2>品牌街</h2>
      <p @click="manybrand">
        更多126个
        <i class="iconfont icon-youjiantou"></i>
      </p>
    </div>
    <ul class="brand-logo">
      <li @click="brand1(item.id)" v-for="(item,index) in sample" :key="index">
        <img :src="item" />
      </li>
    </ul>
  </div>
</template>
<style scoped>
.brand .brand-title {
  height: 20px;
  padding: 20px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.brand .brand-title p {
  color: #ffb900;
}
.brand .brand-logo {
  widows: 100%;
  height: 85px;
  padding: 0 0 15px 16px;
  display: flex;
  overflow-x: auto;
}
.brand .brand-logo li {
  width: 140px;
  height: 70px;
  margin-right: 10px;
  overflow: hidden;
  flex-wrap: nowrap;
  flex-shrink: 0;
}
.brand .brand-logo li img {
  width: 100%;
}
</style>
<script>
export default {
  data() {
    return {
      brandImg: [],
      sample: []
    };
  },
  methods: {
    brand1(id) {
      this.$router.push("/homebrandpri");
    },
    manybrand() {
      this.$router.push("/homemanybrand");
    }
  },
  mounted() {
    this.$axios("/anlewo/manybrand.php").then(res=>{
            if(res.data[0]=='1'){
                this.brandImg=res.data[1];
                res.data[1].forEach(item=>{
                    item.logolist=[item.list1,item.list2,item.list3,item.list4,item.list5,item.list6,item.list7,item.list8,item.list9,item.list10,item.list11];
                    item.logolist=item.logolist.filter(item=>item!=null);
                    item.logolist.forEach(sampleimg=>{
                      this.sample.push(sampleimg);
                    });
                });
            }
        });
  }
};
</script>