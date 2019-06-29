import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import My from "./views/My.vue";
import Car from "./views/Car.vue";
import test from "./views/test.vue"
import order from "./views/order.vue"

import Category from "./views/Category.vue";
import shouye from "./views/shouye/shouye.vue";

import xiangqing from "./views/xiangqing.vue"
 import index from "./views/Index.vue"
 import gg from "./views/Gg.vue"


Vue.use(Router);

export default new Router({
  mode: "history",

  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      component: index,
    },
    {
      path:"/gg",
      name:"gg",
      component:gg,
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/category",
      name: "category",
      component: Category
    },
    {
      path: "/test",
      name: "test",
      component: () => import("./views/test.vue"),
    },
    {
      path: "/my",
      name: "my",
      component: () =>
        /*   import( webpackChunkName: "about" )*/
        import("./views/My.vue")
    },
    {
      path: "/car",
      name: "car",

      component: Car,
    }
    ,
    {
      path: "/shangping",
      name: "shangping",
      component: () => import("./views/shangping.vue"),
      children: [
        { path: "/shangping/", component: () => import("./components/Good.vue") },
        { path: "/shangping/good", component: () => import("./components/Good.vue") },
        { path: "/shangping/pinglun", component: () => import("./components/pinglun.vue") }
      ]
    },
    {
      
      path: "/xiangqing",
      name: "xiangqing",
      component:xiangqing,
    },
    {
      path: "/order",
      name: "订单页",
      component:order,

    }
  ],
  linkActiveClass: "is-selected"
});
