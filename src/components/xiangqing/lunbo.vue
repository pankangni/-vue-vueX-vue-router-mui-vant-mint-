<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,i) in $store.state.xqData.imgs " :key="i">
        <img :src="item" alt class="lunboimg">
      </mt-swipe-item>
    </mt-swipe> 
   
  </div>
</template>
<script>
export default {
  data() {
    return {
        imgList:["../../assets/img/iphone/iphone_lun1.jpg",
        "../../assets/img/iphone/iphone_lun2.jpg",
        "../../assets/img/iphone/iphone_lun3.webp",
        ]
    }
  },
  created(){
    // console.log(this.$store.state.xqData)
  }
};
</script>
<style lang="scss" scoped>
.mint-swipe{
    height: 300px;
    width: 100%;
}
.lunboimg{
    width: 100%;
    height: 300px;
}
</style>

