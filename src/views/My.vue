<template>
  <div class="my">
 <img class="user-poster" src="//i8.mifile.cn/v1/a1/2537f7da-0b30-eb56-7798-184fb9840c94!720x360.webp">
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" />
        待付款
      </van-col>
      <van-col span="6">
        <van-icon name="records" />
        待接单
      </van-col>
      <van-col span="6">
        <van-icon name="tosend" />
        待发货
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" />
        已发货
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link @click="orderpath()" />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="points" title="我的积分" is-link />
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
      <van-cell icon="gift-o" title="我收到的礼物" is-link />
    </van-cell-group>

  <!--底部导航-->
    <bottom-tab></bottom-tab>
    <!--底部导航-->
  
  </div>
</template>
<script>
import bottomTab from "@/components/bottomTab.vue"

export default {
components:{
  bottomTab  
},
methods:{
  orderpath(){
    this.$router.push("/order")
  }
}
}
</script>
<style lang="scss" scoped>
.user {
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }
  &-group {
    margin-bottom: 15px;
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>
