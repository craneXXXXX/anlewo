<template>
  <div class="select">
    <div class="logoimg">
      <img src="https://www.woimg.com/beego/181992c20c3c39f5a140f26c4abe00e5.jpg" />
    </div>
    <div class="brand">
      <p class="title">推荐品牌</p>
      <ul class="imglist clearfix">
        <li v-for='(item,index) in brandimg5' :key="index"><img :src="item" /></li>
      </ul>
    </div>
    <ul class="brandimg clearfix">
      <li v-for='item in sampleimg' :key="item.id">
        <img :src="item.img" />
      <p>{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import '../../../assets/css/mallselect.scss';
export default {
  data(){
    return{
      brandimg:[],
      brandimg5:[],
      sampleimg:[]
    }
  },
  mounted(){
    this.$axios("/anlewo/manybrand.php").then(res=>{
            if(res.data[0]=='1'){
                this.brandimg=res.data[1];
                res.data[1].forEach(item=>{
                    item.logolist=[item.list1,item.list2,item.list3,item.list4,item.list5,item.list6,item.list7,item.list8];
                    item.logolist=item.logolist.filter(item=>item!=null);
                });
                this.brandimg5=this.brandimg[5].logolist;
                console.log(this.brandimg1);
            }
        });
    this.$axios("/anlewo/mallselect.php").then(res=>{
        this.sampleimg=res.data[4];
        console.log(this.sampleimg);
        });
  }
}
</script>