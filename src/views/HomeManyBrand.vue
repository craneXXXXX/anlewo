<template>
    <div class="homemanybrand">
        <div class="header">
            <i class="el-icon-back" @click="back"></i>
            <h2>品牌</h2>
        </div>
        <div class="list" v-for="item in list" :key="item.id">
            <div class="list-header">{{item.listtitle}}</div>
            <ul class="list clearfix" >
                <li v-for="(logo,index) in item.logolist" :key='index'><img :src="logo" ></li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .clearfix::after{
        content: '';
        display: block;
        clear: both;
    }
    .header{
        height: 46px;
        line-height: 46px;
        border-bottom: 1px solid #eee;
        i{
            position: fixed;
            left: 20px;
            top: 12px;
            font-size: 24px;
        }
    }
    .list{
        padding: 0 20px;
        .list-header{
            padding-top: 30px;
            font-size: 14px;
        }
        li{
            width: 30%;
            margin-left: 3%;
            overflow: hidden;
            float: left;
            padding: 28px 0;
            height: 34px;
            img{
                height: 100%;
            }
        }
    }
</style>
<script>
export default {
    data(){
        return{
            list:[],
        }
    },
    methods:{
        back(){
            this.$router.push('/');
        }
    },
    mounted(){
        this.$axios("/anlewo/manybrand.php").then(res=>{
            // console.log(res.data);
            if(res.data[0]=='1'){
                this.list=res.data[1];
                this.list.forEach(item=>{
                    item.logolist=[item.list1,item.list2,item.list3,item.list4,item.list5,item.list6,item.list7,item.list8,item.list9,item.list10,item.list11];
                    item.logolist=item.logolist.filter(item=>item!=null);
                })
                console.log(this.list);
            }
        });
    }
}
</script>