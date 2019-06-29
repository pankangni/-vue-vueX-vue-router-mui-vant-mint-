<template>
  <div class="car">
    <div class="top">
      <span>
        <span class="name">购物车</span>
        <span class="guanli">管理</span>
      </span>
    </div>
    <div class="count">共61件宝贝</div>
    <div class="youhui">
      <span>领618津贴，享受每满300减30，立即领取</span>
    </div>
    <car/>
    <carshop/>
       <!--底部导航-->
    <bottom-tab></bottom-tab>
    <!--底部导航-->
  </div>
</template>

<style lang="scss" scoped>
.car {
 bottom: 110px;
  background: #f60;
   car{
    margin-top: 10px;
  }
  .top {
    font-size: 20px;
    line-height: 22px;
    padding: 20px;

    color: white;
    .name {
    }
    .guanli {
      float: right;
      padding-top: -10px;
      font-size: 14px;
    }
   
  }
   .count{
      font-size: 12px;
      padding-left: 20px;
      
      color: white
    }
    .youhui{
      height: 100px;
      padding-left: 10px;
      span{
        background-color: rgb(255, 248, 244);
        display: inline-block;
        width: 100%;
        border-radius: 25px;
        height: 50px;
        color: red;
        font-size: 14px;
        padding-right: 10px;
        text-align: center;
        line-height: 50px;
      }
    }
}
</style>
<script>
import carshop  from "@/components/car/paycar.vue"
import car from "@/components/car/car.vue";
import bottomTab from "@/components/bottomTab.vue"

export default {
  components: {
    car,
    carshop,
    bottomTab
  }
};
</script>

