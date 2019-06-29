<template>
  <div class="gg">
    <img src="../assets/img/iphone/guanggao.jpg" alt>
    <div class="content">
     <span>广告只剩{{num}}s </span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.gg {
  width: 100%;
  height: 750px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
  .content{
      width:100px;
      height: 30px;
      border: 1px solid black;
      border-radius: 10px;
      position:absolute;
      top: 0px;
      right: 0px;
      text-align: center;
      span{
          color: blue;
          line-height: 30px;
      }
  }
}
</style>
 <script>
 import { setTimeout, setInterval, clearInterval } from "timers";
 export default {
   data() {
     return {
       num: 3,
       cleardata: null
     };
   },
   created() {
     this.cleardata = setInterval(() => {
       if (this.num == 0) {
         this.$router.push("/home");
         console.log(11);
       } else {
         this.num--;
       }
     }, 1000);
   },
   beforeDestroy() {
     //销毁数据与方法
     clearInterval(this.cleardata);
   }
 };

</script>
