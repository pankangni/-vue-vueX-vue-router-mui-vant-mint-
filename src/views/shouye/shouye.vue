<template>
  <div class="app-container">
    <!--顶部导航-->
    <mt-header style="background:#f60" fixed title="酷米手机商城"></mt-header>
    <!--顶部导航end-->
    <transition mode="out-in">
    <router-view/>
    
    </transition>

    <!--底部导航-->
 <div class="mint-tabbar is-fixed">
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

<style lang="scss">
.app-container{
 
  overflow: hidden;
  margin-bottom: 55px;
}
.v-enter{
  opacity: 0;
  transform: translateX(100%)
}
// .v-leave-to{
//   opacity: 0;
//   transform: translateX(100%)
// }
.v-leave-active,
.v-enter-active{
  transition: all 0.5s ease
}
</style>
<script>

</script>
