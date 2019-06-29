<template>
  <div class="app-container">
    <!--顶部导航-->
    <van-nav-bar
      title="酷米商城"
      v-show="fanhuiIsshow == true && tabbarshow==true"
      
      left-text
      @click-left="onClickLeft"
      left-arrow
    />
    <van-nav-bar title="酷米商城" v-show="fanhuiIsshow == false && tabbarshow==true" @click-left="onClickLeft"/>
   
    <!--顶部导航end-->
    <transition mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
.app-container {
  //
  overflow: hidden;
  margin-bottom: 55px;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
// .v-leave-to{
//   opacity: 0;
//   transform: translateX(100%)
// }
.v-leave-active,
.v-enter-active {
  transition: all 0.5s ease;
}
</style>
<script>
import { create } from "domain";
export default {
  data() {
    return {
      tabbarshow:true,
      fanhuiIsshow: false
    };
  },
  methods: {
    onClickLeft() {
      console.log(this.$route);
      if (this.$route.query.goindex === "true") {
        this.$router.push("/");
      } else {
        this.$router.back(-1);
      }
    }
  },
  created() {
    if(this.$route.path == "/"){
        this.tabbarshow = false;
      }else{
        this.tabbarshow = true;
      }
  
  },
  mounted() {},
  watch: {
    "$route.path": function(newpath, oldpath) {
      console.log(newpath);
      if (newpath == "/xiangqing" || newpath =="/shangping" || newpath == "/order") {
        this.fanhuiIsshow = true;
      } else {
        this.fanhuiIsshow= false;
      }

    }
  }
};
</script>

