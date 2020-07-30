import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'lib-flexible'
import './assets/iconfont/iconfont.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://47.101.143.43';

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

import { Area } from 'vant';
Vue.use(Area)
import { ActionSheet } from 'vant';
Vue.use(ActionSheet);
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
import { Toast } from 'vant';
Vue.use(Toast);

import { Form } from 'vant';
import { Button } from 'vant';
import { Field } from 'vant';
Vue.use(Field);
Vue.use(Form);
Vue.use(Button);

import { Cell, CellGroup } from 'vant';
Vue.use(Cell);
Vue.use(CellGroup);


import { PullRefresh } from 'vant';
Vue.use(PullRefresh);

import { List } from 'vant';
Vue.use(List);

import { Loading } from 'vant';
Vue.use(Loading);

import infiniteScroll from 'vue-infinite-scroll';
Vue.use(infiniteScroll);