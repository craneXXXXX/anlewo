<template>
    <div class="homeCompute">
        <i class="el-icon-back" id='back' @click="back"></i>
        <div class="computeDetail">
            <div class="selecctIpt">
                <el-radio v-model="computeDetailRadio" label="1">新房装修</el-radio>
                <el-radio v-model="computeDetailRadio" label="2">旧房装修</el-radio>
            </div>
            <van-action-sheet v-model="show">
                <van-area title="标题" :area-list="areaList" @confirm='confirm' @cancel='cancel' :actions="areaList" />
            </van-action-sheet>
            <div class="computeIpt">
                <el-input
                  placeholder="您所在的城市"
                  v-model="currentCity"
                  clearable @focus="selectCity">
                  </el-input>
                <div class="outerm">
                <el-input
                  placeholder="我家面积"
                  v-model="balconyArea"
                  clearable >
                </el-input><span class="innerm">m<sup>2</sup></span></div>
            </div>
        </div>
        <div class="budget">
            <h2 class="budgetTitle"><span>您家的户型</span></h2>
            <div class="counter">
                <div class="counter-one">
                    <div><input type="text" v-model="room">室<button @click="roomDel" :disabled="this.room<=0">-</button><button @click="roomAdd">+</button></div>
                    <div><input type="text" v-model="hall"> 厅 <button @click="hallDel" :disabled="this.hall<=0">-</button> <button @click="hallAdd">+</button></div>
                </div>
                <div class="counter-two">
                    <div><input type="text" v-model="restroom">卫<button @click="restroomDel" :disabled="this.restroom<=0">-</button><button @click="restroomAdd">+</button></div>
                    <div><input type="text" v-model="balcony">阳台<button @click="balconyDel" :disabled="this.balcony<=0">-</button><button @click="balconyAdd">+</button></div>
                </div>
                <div class="submitPrice" @click="submitInfo">免费获取报价明细 <i class="el-icon-thumb"></i></div>
            </div>
        
        </div>
        <div class="adInfo"><img src="https://m.anlewo.com/special/calculator/img/statistics.jpg"></div>
        <div class="footer"><img src="https://m.anlewo.com/special/calculator/img/logo.png"></div>
        <h2>买建材 找装修 就上安乐窝</h2>
        <h6>安乐窝服务热线：400-626-1688</h6>
       
    </div>
</template>
<script>
import { ActionSheet, Toast } from 'vant';
export default {
    data(){
        return {
            room:1,
            hall:1,
            restroom:1,
            balcony:1,
            currentCity:"北京市北京市东城区",
            balconyArea:"",
            computeDetailRadio: "1",
            show:false,
            areaList:{
                province_list:{},
                city_list:{},
                county_list: {}
            },
        }
    },
    created(){
        this.$axios.get("/anlewo/city.php").then(res=>{
            console.log(res.data);
            let provincelist=res.data[0].filter(item=>item.provincelist!=null);
            let citylist=res.data[1].filter(item=>item.citylist!=null);
            let countylist=res.data[2].filter(item=>item.countylist!=null);
            provincelist.forEach((item,index)=>{
                this.areaList.province_list[index]=item.provincelist;
            });
            citylist.forEach((item,index)=>{
                this.areaList.city_list[index]=item.citylist;
            });
            countylist.forEach((item,index)=>{
                this.areaList.county_list[index]=item.countylist;
            });
        });
    },
    beforeCreate(){
        this.$store.dispatch("asyncUpdateFlag",false);
    },
    beforeDestroy(){
        this.$store.commit("updateFlag",true);
    },
    methods:{
        back(){
            this.$router.push('/');
        },
        cancel(){
            this.show=false;
        },
        confirm(data){
            let str='';
            data.forEach(item=>{
                str+=item.name;
            })
            this.currentCity=str;
            this.show=false;
            console.log(data);
        },
        submitInfo(){
            if(this.currentCity==""){
                Toast("请选择您所在的城市");
            }else if(this.balconyArea==""){
                Toast("请选择面积");
            }else{
                let total=parseInt(this.balconyArea)*28000;
                Toast(`${total}元`);
            }
        },
        onSelect(item) {
            this.show = !this.show;
            Toast(item.name);
        },
        handleChange(value) {
            // console.log(value);
        },
        roomDel(){
            this.room--;
        },
        roomAdd(){
            this.room++;
        },
        hallDel(){
            this.hall--;
        },
        hallAdd(){
            this.hall++;
        },
        restroomDel(){
            this.restroom--;
        },
        restroomAdd(){
            this.restroom++;
        },
        balconyDel(){
            this.balcony--;
        },
        balconyAdd(){
            this.balcony++;
        },
        selectCity(){
            this.show=true;
        }
    },
    components:{
        'van-action-sheet':ActionSheet
    }
}
</script>
<style lang="scss">
.outerm{
    position: relative;
}
.innerm{
    position: absolute;
    right: 10px;
    top: 8px;
    font-size: 16px;
    color: #999;
    sup{
        font-size: 10px;
    }
}
#back{
    position: fixed;
    left: 8px;
    top: 8px;
    font-size: 24px;
    background: rgb(248, 174, 90);
    border-radius: 50%;
    padding: 2px;
    color: white;
}
    .homeCompute{
        background:rgba(245, 217, 164, 0.836) url("https://m.anlewo.com/special/calculator/img/bg.png") no-repeat 100%;
        padding:15px;
    }
    .computeDetail{
        text-align: left;
        padding: 15px;
        background: #e8e8e8;
        border-radius: 4px;
    }
    .computeDetail .selecctIpt{
        margin: 10px 0;
    }
    .computeDetail .computeIpt{
        display: flex;
    }
    .budget{
        background: white;
        padding-bottom: 20px;
    }
    .budget .budgetTitle{
        height: 30px;
        border-bottom: 1px solid #ccc;
        line-height: 60px;
    }
    .budget .budgetTitle span{
        background: white;
        padding: 0 8px;
    }
    .budget .counter{
        margin-top: 40px;
    }
    .budget .counter input{
        text-indent: 4px;
        width: 30px;
        height: 30px;
    }
    .budget .counter button{
        width: 30px;
        height: 30px;
        border: 1px solid #ccc;
        border-radius: 50%;
        font-weight: bold;
    }
    .budget .counter-one{
        display: flex;
        width: 100%;
        justify-content: space-around;
    }
    .budget .counter-two{
        display: flex;
        width: 100%;
        justify-content: space-around;
    }
    .submitPrice{
        background: #ff5153;
        border-radius: 4px;
        height: 44px;
        line-height: 44px;
        color: white;
        font-size: 16px;
        margin: 20px 0;
    }
    .submitPrice i{
        font-size: 24px;
    }
    .adInfo{
        width: 100%;
        margin-bottom: 20px;
    }
    .adInfo img{
        width: 100%;
    }
    h6{
        margin-bottom: 50px;
        margin-top: 10px;
    }
</style>