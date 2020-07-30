<template>
    <div>
        <div class="header-swiper">
            <el-carousel>
                <el-carousel-item v-for="item in knowSwiperImg" :key="item">
                    <img :src="item">
                </el-carousel-item>
            </el-carousel>
        </div>
        <ul class="adList">
            <li>
                <div class="adList-content">
                    <h4>60天极速开业，安乐窝拎包开业创行业先河</h4>
                    <p>施工</p>
                </div>
                <div class="adList-img"><img src="https://www.woimg.com/beego/38e524b126436f869d472d9b4a4ab58b.jpg"></div>
            </li>
        </ul>
    </div>
</template>
<style scoped>
    .header-swiper img{
        width:375px;
    }
</style>
<script>
export default {
    data(){
        return{
            knowSwiperImg:['https://www.woimg.com/beego/db73ca325eac6311651eb6b65a061645.jpg',
            'https://www.woimg.com/beego/ddb6546c926dba450167e66b45087a3d.jpg',
            'https://www.woimg.com/beego/147e3ea1039555940a05702c0155943c.jpg']
        }
    }
}
</script>
<style scoped>
    .header-swiper{
        margin: 15px;
         border: 1px solid #f6f6f6;
    }
    .adList li{
        margin: 15px;
        height: 96px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #f6f6f6;
    }
    .adList li .adList-img{
        width:128px;
        overflow: hidden;
    }
    .adList li .adList-content{
        text-align: left;
        color: #999;
    }
    .adList li .adList-content h4{
        font-size: 16px;
        color: #333;
        margin-bottom: 10px;
    }
    .adList li .adList-img img{
        width: 100%;
    }
</style>