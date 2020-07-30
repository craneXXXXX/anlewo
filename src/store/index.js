import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        flag: true,
        backpath: '',
        cartlist: [],
        avator: 'https://m.anlewo.com/static/img/head-img@2x.1e518.png'
    },
    mutations: {
        updateFlag(state, flag1) {
            state.flag = flag1;
        }
    },
    actions: {
        asyncUpdateFlag(context, flag1) {
            setTimeout(() => {
                context.commit('updateFlag', flag1);
            }, 1000)
        }
    },
    modules: {}
})