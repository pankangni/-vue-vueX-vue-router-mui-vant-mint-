<template>
  <div class="xiangqingzhuye">
    <!--轮播组件-->
    <lunbo/>
    <!--轮播组件end-->
    <!--基本资料组件-->
    <jieshao/>
    <!--基本资料组件end-->
    <!--地址型号选择组件-->
    <select-buy/>
    <!--地址型号选择组件end-->
    <!--相关推荐-->
    <tuijian></tuijian>
    <!--end-->
    <!--评论滑动组件-->
    <pinglun></pinglun>
    <!---->
    <!--商品详情组件-->
    <xiangqing-img/>
    <!--商品详情组件end-->
    <!--加入购物车组件-->
    <add-shop/>
    <!--加入购物车组件end-->
  </div>
</template>
<style lang="scss" scoped>
.mint-tabbar {
  bottom: 55px;
  height: 55px;
  border-radius: 35px;
  .addcar {
    background-color: #f60;
    color: white;
    line-height: 55px;
    width: 150px;
    border-radius: 25px;
    text-align: center;
    margin-left: 60px;
  }
  .car,
  .dianpu,
  .kefu {
    margin-left: 10px;
  }
  .car {
    width: 40px;
    height: 40px;
    color: #666;
    border-radius: 20px;
    span {
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto 0.04rem;
    }
    div {
      font-size: 4px;
    }
  }
  .dianpu {
    width: 40px;
    height: 40px;
    color: #666;
    border-radius: 20px;

    span {
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto 0.04rem;
    }
    div {
      font-size: 4px;
    }
  }
  .kefu {
    width: 40px;
    height: 40px;
    color: #666;
    border-radius: 20px;
    span {
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto 0.04rem;
    }
    div {
      font-size: 4px;
    }
  }
}
</style>


<script>
import lunbo from "../components/xiangqing/lunbo.vue";
import jieshao from "../components/xiangqing/jieshao.vue";
import selectbuy from "../components/xiangqing/select.vue";
import xiangqingImg from "../components/xiangqing/xiangqingImg";
import pinglun from "../components/xiangqing/pinglun";
import tuijian from "../components/xiangqing/tuijian";

import addshop from "../components/addcarZujian/test1";
export default {
  components: {
    lunbo: lunbo,
    jieshao: jieshao,
    selectBuy: selectbuy,
    xiangqingImg: xiangqingImg,
    addShop: addshop,
    pinglun: pinglun,
    tuijian: tuijian
  },
  created(){
   console.log("goodid"+this.$route.query.goodid);
 var id = this.$route.query.goodid
   var obj = this.$store.state.shouye
   var _this= this
 Object.keys(obj).forEach(function(key){

  
var arr = obj[key] 
  console.log(arr);
  for(var i = 0;i<arr.length;i++){
    if(arr[i].goodid == id){
      _this.$store.state.xqData = arr[i]
      break;
    }
  }
 })
  }
};
</script>
