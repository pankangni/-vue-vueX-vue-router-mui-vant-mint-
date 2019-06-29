<template>
    <div>

    <!--底部导航-->
    <div class="mint-tabbar is-fixed"  style="z-index: 1000;">
      <router-link to="/home" class="mint-tab-item ">
        <div class="mint-tab-item-icon">
          <span class="iconfont icon-tiaoshi" style="color:#f60"></span>
        </div>
        <div class="mint-tab-item-label" style="color:#f60">首页</div>
      </router-link>
      <router-link to="/category" class="mint-tab-item">
        <div class="mint-tab-item-icon">
         <span class="iconfont icon-icon-test1" style="color:#f60"></span>
        </div>
        <div class="mint-tab-item-label" style="color:#f60">分类</div>
      </router-link>
      <router-link to="/car" class="mint-tab-item">
        <div class="mint-tab-item-icon">
         <span class="iconfont icon-shuipingzuo" style="color:#f60"></span>
        </div>
        <div class="mint-tab-item-label" style="color:#f60">购物车</div>
      </router-link>
      <router-link to="/my" class="mint-tab-item">
        <div class="mint-tab-item-icon">
        <span class="iconfont icon-wode" style="color:#f60"></span>
        </div>
        <div class="mint-tab-item-label" style="color:#f60">我的</div>
      </router-link>
    </div>
    <!--底部导航end-->


    </div>
</template>
