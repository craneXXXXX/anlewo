<template>
<keep-alive>
    <div class="mall">
        <div class="header">
            <h1>安乐窝商城</h1>
            <p><i class="iconfont icon-xuanxiang" @click="gotomallstore"></i></p>
        </div>
        <div class="classify" v-for="(item,index) in data" :key="index">
            <h2><img :src="item.titleimg"></h2>
            <ul class="classify-img clearfix">
                <li v-for="i in item" :key="i.id" @click="gotoshop(i.name)">
                    <img :src="i.mallimg">
                </li>
            </ul>
        </div>
    </div>
</keep-alive>
</template>
<script>
export default {
    data(){
        return {
            data:[],
            titleimg1:'',
            titleimg2:'',
            titleimg3:''
        }
    },
    methods:{
        gotomallstore(){
            this.$router.push('/mallstore');
        },
        gotoshop(name){
            this.$router.push({
                name:'malldetail',
                params:{
                    id:name
                }
            });
        }
    },
    mounted(){
        this.$axios("/anlewo/mall.php").then(res => {
            console.log(res.data);
            this.data=res.data;
            this.titleimg1=this.data[0][0].titleimg;
            this.titleimg2=this.data[1][0].titleimg;
            this.titleimg3=this.data[2][0].titleimg;
            this.data[0].titleimg=this.titleimg1;
            this.data[1].titleimg=this.titleimg2;
            this.data[2].titleimg=this.titleimg3;
            
    });
    }
}
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
        text-align: left;
    }
    .mall{
        padding-bottom: 60px;
    }
    .clearfix::after{
        content: "";
        display: block;
        clear: both;
    }
    .header{
        display: flex;
        justify-content: space-between;
        height: 46px;
        line-height: 46px;
        margin-bottom: 20px;
        padding: 0 14px;
    }
    .header i{
        font-size: 20px;
    }
    .classify{
        margin-top: 25px;
        
        
    }
    .classify h2{
        margin-left: 14px;
        height: 30px;
        padding: 0 0 10px 0;
        overflow: hidden;
    }
    .classify h2 img{
        height: 100%;
    }
    .classify .classify-img li{
        width:160px;
        margin: 0 12px;
        float: left;
        overflow: hidden;
    }
    .classify .classify-img li img{
        width:100%;
    }
</style>