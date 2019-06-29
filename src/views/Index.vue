<template>
  <div>
    

  <!-- Swiper -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
            <img src="../assets/img/iphone/shouye1.jpg" alt=""> 
            <!-- <h3>渐进式JavaScript 框架</h3> -->
      </div>
      <div class="swiper-slide">
        <!-- <img   src="../assets/webpack.png" alt=""> -->
            <img src="../assets/img/iphone/shouye2.jpg" alt=""> 

      </div>
      <div class="swiper-slide">
        <!-- <img src="../assets/vant.png" alt=""> -->
            <img src="../assets/img/iphone/shouye3.jpg" alt=""> 

<van-button type="default" @click="tohome()">立即体验</van-button>
      </div>
    </div>
    
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>

  </div>
</template>

<script>
import Swiper from "swiper";
export default {
    mounted(){
      new Swiper('.swiper-container',{
        pagination: {
          el: '.swiper-pagination',
        },
      });
    },
    methods:{
tohome(){
  this.$router.push("/home")
}
    },
     created(){
       location.one = true
       if(localStorage.One){
          this.$router.push("/gg");
       }else{
         localStorage.One = true;
       }
  
     }
};
</script>

<style lang="scss" scoped>
    .swiper-container {
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      text-align: center;
      position: relative;
      img{
        width: 100%;
        height: 100%;
      }
      .van-button{
        position:absolute;
        bottom: 100px;
        left: 50%;
        margin-left: -40px;
        background-color:transparent;
      }
      h3{
        color:#808080;
      }
    }
</style>
