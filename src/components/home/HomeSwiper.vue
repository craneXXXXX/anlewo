<template>
<keep-alive>
    <div class="header-swiper">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for='(item,index) in swiper' :key='index'  @click="onClick"><img :src="item"></van-swipe-item>
        </van-swipe>
    </div>
</keep-alive>

</template>
<style scoped>
    .header .header-swiper img{
        width:375px;
    }
</style>
<script>
import { Swipe, SwipeItem } from 'vant';
export default {
    data(){
        return{
            swiper:['https://www.woimg.com/beego/cms/2020/05/7b675e35250661f72d62982e41386d7b.jpg',
            'https://www.woimg.com/beego/4a0c35614085e3aa0ef7194fa9386f80.jpg',
            'https://www.woimg.com/beego/cms/2019/06/bc3e013399572333acec4cadb3bdd7ce.jpg']
        }
    },
    methods:{
        onClick() {
            this.$router.push('/experience');
            // console.log('当前 Swipe 索引：' + index);
        }
    },
    components:{
        "van-swipe":Swipe,
        "van-swipe-item":SwipeItem
    }
}
</script>