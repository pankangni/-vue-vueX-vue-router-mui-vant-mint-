import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    checkData: [],
    xqData: 1,
    jilu:null,
    checkSum: false,
    checksum1: null,
    shouye: {
      zhineng: [

        {
          store: "小二买手店",
          storeId: "a01",
          conment:[
          {
            name:"pkn2",
            img:"http://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/c0f6a1da90e5a6d0448b02898c3807f4.webp",
         comments:"之前本来想买米九的，一直没有抢到。还好k20来救场了，买了高配版，相当不错..."
          },
          {
            name:"pkn3",
            img:"http://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/c0f6a1da90e5a6d0448b02898c3807f4.webp",
         comments:"之前本来想买米九的，一直没有抢到。还好k20来救场了，买了高配版，相当不错..."
          },
          {
            name:"pkn4",
            img:"http://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/c0f6a1da90e5a6d0448b02898c3807f4.webp",
         comments:"之前本来想买米九的，一直没有抢到。还好k20来救场了，买了高配版，相当不错..."
          },

          ],
          goodid: "0001",
          goodName: "米家直流变频落地扇1X",
          goodContent: "模拟自然风算法 支持AI语音",
          goodPrice: 289,
          oldPrice: 299,
          imgs:["http:////cdn.cnbj1.fds.api.mi-img.com/mi-mall/143e77c56713dbf4e0c0099330d5b6ec.jpg"],
          
          goodimg: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdeb112cc683ea56dead55806cb78a55.jpg?thumb=1&w=360&h=360",
         

        },
        {
          store: "小二买手店",
          storeId: "a01",
  
          goodid: "0002",
          goodName: "小米手环3 NFC版",
          goodContent: "能刷公交卡的触摸大屏手环",
          goodPrice: 189,
          oldPrice: 199,
          imgs:["http://i8.mifile.cn/b2c-mimall-media/5e37245e3204118bebc3e6082f00fafb!360x360.jpg"],
          goodimg: "http://i8.mifile.cn/b2c-mimall-media/5e37245e3204118bebc3e6082f00fafb!360x360.jpg",
        },
        {
          store: "小二买手店",
          storeId: "a01",
  
          goodid: "0003",
          goodName: "小米蓝牙耳机Air",
          goodContent: "真无线 乐享无限自由",
          goodPrice: 379,
          oldPrice: 399,
          imgs: ["http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9d91e13c28b193e8e9d643bbe98567a7.jpg", "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b839a98cf987279c25da5f11ac1e63a5.jpg"],
          goodimg: "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/484318ef4e069d5587b6526024fc6ebf.jpg?thumb=1&w=360&h=360",
        },

      ],
      jiadian: [
        {
          store: "小二买手店",
          storeId: "a01",
          
          goodid: "40001",
          goodName: "黑鲨游戏手机 Helo",
          goodContent: "双液冷，更能打",
          goodPrice: 3199,
          oldPrice: 3499,
          imgs:["//cdn.cnbj1.fds.api.mi-img.com/mi-mall/354cea8ad076cee24738091c68f95b07.jpg?thumb=1&w=360&h=360","http://i8.mifile.cn/b2c-mimall-media/5e37245e3204118bebc3e6082f00fafb!360x360.jpg"],
          goodimg: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/354cea8ad076cee24738091c68f95b07.jpg?thumb=1&w=360&h=360",
        },
        {
          store: "小二买手店",
          storeId: "a01",
  
          goodid: "40002",
          goodName: "红米6",
          goodContent: "小屏高性能的双摄手机",
          goodPrice: 729,
          oldPrice: 799,
          imgs:["http://i8.mifile.cn/v1/a1/38a0996b-d3b7-a8f7-6997-b97004599a8e!360x360.webp","http://i8.mifile.cn/b2c-mimall-media/5e37245e3204118bebc3e6082f00fafb!360x360.jpg"],
          goodimg: "http://i8.mifile.cn/v1/a1/38a0996b-d3b7-a8f7-6997-b97004599a8e!360x360.webp",
        },
        {
          store: "小二买手店",
          storeId: "a01",
  
          goodid: "40003",
          goodName: "红米6A",
          goodContent: "好看耐用/轻巧省心",
          goodPrice: 549,
          oldPrice: 599,
          imgs:["http://i8.mifile.cn/b2c-mimall-media/5e37245e3204118bebc3e6082f00fafb!360x360.jpg"],
          goodimg: "http://i8.mifile.cn/v1/a1/2c506517-9477-c928-8e77-bee18b6818a1!360x360.webp",
        },
        {
          store: "小二买手店",
          storeId: "a01",
  
          goodid: "40005",
          goodName: "小米6X",
          goodContent: "前置2000万，后置2000万",
          goodPrice: 999,
          oldPrice: 1799,
          imgs:["http://i8.mifile.cn/b2c-mimall-media/5e37245e3204118bebc3e6082f00fafb!360x360.jpg"],
          goodimg: "//i8.mifile.cn/v1/a1/a20cff3d-2bd4-b98f-4eb5-fb08d8b43a2e!360x360.webp",
        },
      ],
      tvjingxuan: [
        {
          storeId: "a03",
          store: "小二买手店3",
          goodid: "2001",
          goodName: "电视4A 43 青春版",
          goodContent: "人工智能语音，FHD全高清屏",
          goodPrice: 1299,
          oldPrice: 1499,
          num: 99,

          data: "全高清屏 / 人工智能语音 / 1GB+8GB大内存 / 海量片源 / PatchWall",
          goodimg: "http://i8.mifile.cn/v1/a1/6017d231-019c-a76d-e54a-0bb6948bfd0d!360x360.webp",
          imgs: ["http://i8.mifile.cn/v1/a1/9b34c0de-7407-fbba-8dde-ef40947f1ac5.webp", "http://i8.mifile.cn/v1/a1/67031c46-8c12-133e-25b7-56cbbc277939.webp"]
        },
        {
          storeId: "a02",
          store: "小二买手店2",
          goodid: "2002",
          goodName: "小米电视4A 32英寸",
          goodContent: "人工智能系统，高清液晶屏",
          goodPrice: 769,
          oldPrice: 899,
          num: 99,
          data: "64位四核处理器 / 1GB+4GB大内存 / 高清液晶屏 / 第6代画质引擎 / 人工智能系统PatchWall / 轻至4kg",
          goodimg: "http://i8.mifile.cn/v1/a1/d342ccbf-e3d6-2dcc-47a3-18656f28a0cc!360x360.webp",
          imgs: ["http://i8.mifile.cn/v1/a1/9b34c0de-7407-fbba-8dde-ef40947f1ac5.webp", "http://i8.mifile.cn/v1/a1/67031c46-8c12-133e-25b7-56cbbc277939.webp"]
        },
        {
          goodid: "2003",
          storeId: "a03",
          store: "小二买手店3",
          goodName: "小米电视4A 58英寸",
          goodContent: "64位四核处理器 ",
          goodPrice: 2190,
          oldPrice: 2999,
          num: 99,

          data: "4K HDR / 语音搜片 / 海量片源 / 震撼音效 / 高性能 / 大储存",
          goodimg: "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7d4d94788f8591e5557a4c23c3ba4307.jpg?thumb=1&w=360&h=360",
          imgs: ["http://i8.mifile.cn/v1/a1/8bc57432-97b8-2a53-1806-a72b3f58f1f0.webp", "http://i8.mifile.cn/v1/a1/99c74004-5aa8-2c1f-6fe2-581ea2661a6d.webp", "http://i8.mifile.cn/v1/a1/9fd60730-764d-2ea9-c983-161f3de3d107.webp"]
        }
        ,
        {
          storeId: "a05",
          store: "小二买手店5",
          goodid: "2004",
          goodName: "小米电视4C 50英寸",
          goodContent: "4K HDR，钢琴烤漆",
          num: 99,

          data: "4K HDR / 语音搜片 / 海量片源 / 震撼音效 / 高性能 / 大储存",
          goodPrice: 1599,
          oldPrice: 2099,
          goodimg: "http://i8.mifile.cn/v1/a1/c547c9f7-1703-a6ae-79e0-4e27912595f8!360x360.webp",
          imgs: ["http://i8.mifile.cn/v1/a1/75f16be7-4b60-c4ee-1cbb-529dba3d78fa.webp"]
        }
      ],
    },
    //用来检测car是否改变
    cars: [],
    order:[],
    cars1: [1, 2],
    sumPrice: 0,
    car: [
      {
        store: "小二买手店",
        storeId: "a01",

        goods: [
          {
            goodimg: "http://i8.mifile.cn/v1/a1/38a0996b-d3b7-a8f7-6997-b97004599a8e!360x360.webp",

            goodid: "a01b01",
            goodName: "iphoneX",
            goodContent: "【12期免息】微软 Surface Laptop 2 i5 8GB 256GB 笔记本电脑",
            goodPrice: 4999,
            num: 3,
            checked:false,
            

          },
          {
            goodimg: "http://i8.mifile.cn/v1/a1/a20cff3d-2bd4-b98f-4eb5-fb08d8b43a2e!360x360.webp",

            goodid: "a01b02",
            goodName: "iphoneX",
            goodContent: "【12期免息】微软 Surface Laptop 2 i5 8GB 256GB 笔记本电脑",
            goodPrice: 3250,
            num: 3,
            checked:false,
           


          },
          {
            goodimg: "http://i8.mifile.cn/v1/a1/a20cff3d-2bd4-b98f-4eb5-fb08d8b43a2e!360x360.webp",

            goodid: "a01b03",
            goodName: "iphoneX",
            goodContent: "【12期免息】微软 Surface Laptop 2 i5 8GB 256GB 笔记本电脑",
            goodPrice: 3100,
            num: 3,
            checked:false,
         

          }]
      },
      {
        store: "小二买手店2",
        storeId: "a02",
        goods: [
          {
            goodimg: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a5be84661f1b82d1edef18f3a50a1b6f.jpg?thumb=1&w=360&h=360",
            checked:false,

            goodid: "a02b01",
            goodName: "iphoneX",
            goodContent: "【12期免息】微软 Surface Laptop 2 i5 8GB 256GB 笔记本电脑",
            goodPrice: 8001,
            num: 3,

          },
          {
            goodimg: "http://i8.mifile.cn/v1/a1/a20cff3d-2bd4-b98f-4eb5-fb08d8b43a2e!360x360.webp",
            checked:false,

            goodid: "a02b02",
            goodName: "iphoneX",
            goodContent: "【12期免息】微软 Surface Laptop 2 i5 8GB 256GB 笔记本电脑",
            goodPrice: 9002.1,
            num: 3,

          },
          {
            goodimg: "http://i8.mifile.cn/v1/a1/38a0996b-d3b7-a8f7-6997-b97004599a8e!360x360.webp",
            checked:false,
         

            goodid: "a02b03",
            goodName: "iphoneX",
            goodContent: "【12期免息】微软 Surface Laptop 2 i5 8GB 256GB 笔记本电脑",
            goodPrice: 3240.99,
            num: 3,

          },
        ]
      }
    ]
  },
  mutations: {
    checkAll(e, state) {
      // 点击全选事件
      var data = [];
      for (var i = 0; i < state.car; i++) {
        for (var j = 0; j < state.car[i].goods; j++) {
          data.push(state.car[i].goods[j]);
        }
      }
      console.log(data);
      if (e.target.checked) {
      } else {
        // 全不选选则清空绑定的数组

        this.checkData = [];
      }
    },
    sumPrice(state) {


    }


  },
  actions: {}
});
