<template>
  <div>
    <div class="shangping">
      <!--开头图片-->
      <div class="header">
        <img src="../assets/img/header.png" alt>
        <div class="right">
          <h2>小二买手机店铺</h2>
        <span>实体店店址：广州市白云区街道101号</span>
        <h3>好评率：<span>4.9</span></h3>
        <h4>公告:618大促进店铺领取优惠价满1000-100</h4>
        </div>
      </div>
      <!--开头图片end-->
      <!--组件里导航栏-->
      <div class="mint-navbar">
        <router-link to="/shangping/good" class="mint-tab-item">
          <div class="mint-tab-item-icon"></div>
          <div class="mint-tab-item-label">商品</div>
        </router-link>
        <router-link to="/shangping/pinglun" class="mint-tab-item">
          <div class="mint-tab-item-icon"></div>
          <div class="mint-tab-item-label">评论</div>
        </router-link>
      </div>
    </div>
  <router-view></router-view>

  <!--组件里导航栏end-->
  </div>
</template>
<script>
import Goods from "@/components/Good.vue";
// import shopCart from "@/components/shopCart.vue"
export default {

};
</script>


<style lang="scss" scoped>
.shangping {
  position: relative;
  width: 100%;
  height: 100%;
  .header {
    img{
      display: inline-block;
      width:100px;
      height:100px;
      text-align: center;
      margin-top:20px;
      border-radius: 25px;
      float: left;
    }
    .right{
       float: left;
      display: inline-block;
      margin-left: 10px;
      // text-align: center;
      margin-top: 20px; 
       
      h2{
        color: slategrey;
        font-size:14px;
      }
      span{
        color: slategrey;

        font-size: 12px;
      }
      h3{
        font-size:14px;
        color:slategrey;
        span{
          font-size:16px;
          color: red;
        }
      }
      h4{
        font-size: 14px;
        color:red;
        width: 220px;
      
      }
    
    }
    width: 100%;
    height: 140px;
    background-color: bisque;
    
  }
}
</style>
