import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import HomeCompute from "../views/HomeCompute";
import HomeMall from "../views/HomeMall";
import HomeCraft from "../views/HomeCraft";
import HomeKnow from "../views/HomeKnow";
import HomeBrandPri from "../views/HomeBrandPri";
import HomeManyBrand from "../views/HomeManyBrand";
import SwiperDetail from "../views/SwiperDetail";

import Experience from "../views/Experience.vue";
import ExperienceDetail from "../views/ExperienceDetail";

import Mall from "../views/Mall";
import MallStore from "../views/MallStore";
import MallDetail from "../views/MallDetail";
import AddCollect from "../views/AddCollect";
import CollectList from "../views/CollectList";
import Order from "../views/Order";

import RevisePerson from "../views/RevisePerson";
import Mine from "../views/Mine";
import MineAppointment from "../views/MineAppointment";

import NotFound from "../views/NotFound";

import MallSelect1 from '@/components/mall/mallselect/MallSelect1';
import MallSelect2 from '@/components/mall/mallselect/MallSelect2';
import MallSelect3 from '@/components/mall/mallselect/MallSelect3';
import MallSelect4 from '@/components/mall/mallselect/MallSelect4';
import MallSelect5 from '@/components/mall/mallselect/MallSelect5';
import MallSelect6 from '@/components/mall/mallselect/MallSelect6';
import MallSelect7 from '@/components/mall/mallselect/MallSelect7';
import MallSelect8 from '@/components/mall/mallselect/MallSelect8';
import MallSelect9 from '@/components/mall/mallselect/MallSelect9';

Vue.use(VueRouter);

const routes = [{
        path: "/mineappointment",
        name: "mineappointment",
        component: MineAppointment
    }, {
        path: "/swiperdetail",
        name: "swiperdetail",
        component: SwiperDetail
    }, {
        path: "/order",
        name: "order",
        component: Order,
        beforeEnter: (to, from, next) => {
            next();
        }
    }, {
        path: "/collectlist",
        name: "collectlist",
        component: CollectList
    }, {
        path: "/addcollect/:id",
        name: "addcollect",
        component: AddCollect
    }, {
        path: "/malldetail/:id",
        name: "malldetail",
        component: MallDetail
    }, {
        path: "/mallstore",
        name: "mallstore",
        component: MallStore,
        children: [{
            path: "",
            name: "mallselect1",
            component: MallSelect1,
        }, {
            path: "mallselect1",
            name: "mallselect1",
            component: MallSelect1,
        }, {
            path: "mallselect2",
            name: "mallselect2",
            component: MallSelect2,
        }, {
            path: "mallselect3",
            name: "mallselect3",
            component: MallSelect3,
        }, {
            path: "mallselect4",
            name: "mallselect4",
            component: MallSelect4,
        }, {
            path: "mallselect5",
            name: "mallselect5",
            component: MallSelect5,
        }, {
            path: "mallselect6",
            name: "mallselect6",
            component: MallSelect6,
        }, {
            path: "mallselect7",
            name: "mallselect7",
            component: MallSelect7,
        }, {
            path: "mallselect8",
            name: "mallselect8",
            component: MallSelect8,
        }, {
            path: "mallselect9",
            name: "mallselect9",
            component: MallSelect9,
        }]
    }, {
        path: "/homemanybrand",
        name: "homemanybrand",
        component: HomeManyBrand
    }, {
        path: "/mine",
        name: "mine",
        component: Mine
    }, {
        path: "/reviseperson/:id",
        name: "reviseperson",
        component: RevisePerson
    }, {
        path: "/homebrandpri",
        name: "homebrandpri",
        component: HomeBrandPri
    }, {
        path: "/homeknow",
        name: "homeknow",
        component: HomeKnow
    }, {
        path: "/homecraft",
        name: "homecraft",
        component: HomeCraft
    },
    {
        path: "/homemall",
        name: "homemall",
        component: HomeMall
    },
    {
        path: "/homecompute",
        name: "homecompute",
        component: HomeCompute
    },
    {
        path: "/experiencedetail",
        name: "experiencedetail",
        component: ExperienceDetail
    },
    {
        path: "/home",
        name: "home",
        component: Home
    },
    {
        path: "/mall",
        name: "mall",
        component: Mall
    },
    {
        path: "/experience",
        name: "experience",
        // component: Experience
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ("../views/Experience.vue")
    },
    {
        path: "/",
        component: Home
    },
    {
        path: "*",
        component: NotFound
    }
];

const router = new VueRouter({
    routes,
    mode: "hash",
    base: process.env.BASE_URL,
});

export default router;