<template>
    <div class="brand">
        <div class="header-bg">
            <div class="logo"><img src="https://www.woimg.com/beego/590a70b00d567312b91908111259e497.png"></div>
            <img src="https://www.woimg.com/beego/b94b81c2adaef4ff7dc892659bd38747.jpg">
            <i class="el-icon-back" @click="back"></i>
        </div>
        <div>
            <h2 class="title">诺贝尔瓷砖</h2>
        <div class="tag"><span>地砖</span><span>墙地砖</span><span>砖贴</span></div>
        <p class="introduction">诺贝尔瓷砖成立于1992年，总部设在中国杭州。自2003年起连续十三年单品销量全国领先！诺贝尔一直专注高端瓷砖，坚持技术领先，旨在成为“全球最优秀的装饰用品供应商”。目前公司总投资超4.3亿美元，拥有三大生产基地，占地2300 余亩，厂房面积80 万平方米，年生产规模近5000 万平方米。</p>
        </div>
        <div class="toggle" >
            <ul class="clearfix">
                <li :class="{active:isActive1}" @click="toggleLiOne">地砖</li>
                <li :class="{active:isActive2}" @click="toggleLiTwo">墙地砖</li>
                <li :class="{active:isActive3}" @click="toggleLiThree">砖贴</li>
            </ul>
        </div>
        <div class="component">
            <ul>
                <li>
                    <div class="imgbox"><img src="http://www.woimg.com/beehive/2019/10/7940adf40667a25b5702003b6e6f4af8.jpeg"></div>
                    <p> （库存9片）诺贝尔 小阿曼 RS807307_A（原RS807307） 800*800</p>
                </li>
                <li>
                    <div class="imgbox"><img src="http://www.woimg.com/beehive/748d679a972179a0a1279d4c006ee8a7.jpg"></div>
                    <p> （库存9片）诺贝尔 小阿曼 RS807307_A（原RS807307） 800*800</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
    .clearfix::after{
        content:'';
        display: block;
        clear: both;
    }
    .brand{
        background: #eee;
    }
    .brand .header-bg{
        height: 250px;
        overflow: hidden;
        position: relative;
    }
    .brand .header-bg img{
        width: 100%;
    }
    .brand .el-icon-back{
        position: absolute;
        left: 16px;
        top: 10px;
        background: rgba(0,0,0,.5);
        border-radius: 50%;
        padding: 2px;
        color: white;
        font-size: 26px;
    }
    .brand .header-bg .logo{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -30px;
        background: white;
        width: 80px;
        border: 1px solid #999;
        overflow: hidden;
        height: 80px;
        line-height: 80px;
    }
    .brand .header-bg .logo img{
        width: 100%;

    }
    .brand .title{
        background: white;
        padding: 30px 0 16px 0;
        font-size: 16px;
        background: white;
    }

    .brand .tag{
        background: white;
        padding:10px 0;
    }
    .brand .tag>span{
        color: #999;
        border: 1px solid #ccc;
        padding: 0 4px;
    }
    p.introduction{
        text-align: left;
        background: white;
        height: 140px;
        padding: 10px;
    }
    .toggle ul{
        margin-top: 10px;
        display: flex;
        height: 44px;
        line-height: 44px;
        border-bottom: 1px solid #ddd;
        background: white;
    }
    .toggle ul li{
        padding: 0 10px;
        font-size: 14px;
    }
    .toggle ul li.active::after{
        content: "";
        display: block;
        width: 100%;
        background: #333;
        height: 2px;
    }
    .component ul{
        padding: 10px;
        display: flex;
        justify-content: space-between;
        background: white;
        margin-bottom: 60px;
        text-align: left;
    }
    .component ul li{
        width: 48%;
        display: flex;
        flex-direction: column;

    }
    .component ul li .imgbox{
        width: 100%;
        height: 174px;
        overflow: hidden;
    }
    .component ul li .imgbox img{
        width:100%;

    }
</style>
<script>
export default {
    data(){
        return{
            isActive1:true,
            isActive2:false,
            isActive3:false
        }
    },
    methods:{
        toggleLiOne(){
            this.isActive1=true;
            this.isActive2=false;
            this.isActive3=false;
        },
        toggleLiTwo(){
            this.isActive1=false;
            this.isActive2=true;
            this.isActive3=false;
        },
        toggleLiThree(){
            this.isActive1=false;
            this.isActive2=false;
            this.isActive3=true;
        },
        back(){
            this.$router.push('/home');
        }
    }
}
</script>