<template>
    <div class="mine">
        <afterLogin v-if="isLogin"></afterLogin>
        <beforeLogin v-else></beforeLogin>
    </div>
</template>
<script>
import AfterLogin from "../views/AfterLogin";
import BeforeLogin from "../views/BeforeLogin";
export default {
    data(){
        return{
            isLogin:false
        }
    },
    components:{
        "beforeLogin":BeforeLogin,
        "afterLogin":AfterLogin,
    },
    created(){
        let loginInfo = JSON.parse(window.localStorage.getItem('loginInfo'));
        if(loginInfo){
            this.isLogin=true;
        }else{
            this.isLogin=false;
        }
    }
}
</script>