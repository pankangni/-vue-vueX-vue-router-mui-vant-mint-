<template>
    <div>
        <div class="mint-tabbar is-fixed">
      <div class="car">
        <span class="iconfont icon-gouwu"></span>
        <div>购物车</div>
      </div>
      <router-link to="shangping" tag="div" class="dianpu">
   
        <span class="iconfont icon-shuipingzuo"></span>
        <div>店铺</div>
      </router-link>
      <div class="kefu">
        <span class="iconfont icon-star"></span>
        <div>客服</div>
      </div>
      <div class="addcar">
       加入购物车
      </div>
    </div>
    </div>
</template>

<style lang="scss" scoped>
.mint-tabbar {
  bottom: 55px;
  height: 55px;
  border-radius: 35px;
.addcar{
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
.kefu{
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
.xiangqingzhuye {
  margin-bottom: 55px;
}
</style>
