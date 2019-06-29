<template>
  <div class="orders">
    <div class="order" v-for="(item,i) in $store.state.order" :key="i" v-show="$store.state.order.length != 0">
      <div class="id">
        订单编号：
        <span>{{item.orderid}}</span>
      </div>
      <div class="zujian" v-for="(index,k) in item.goods" :key="k">
        <van-card
          :num="index.num"
          :price="index.goodPrice"
          :desc="index.goodContent"
          :title="index.goodName"
          :thumb="index.goodimg"
        />
      </div>
    

    </div>
     <div class="order" v-show="$store.state.order.length == 0">
     <span><h1>没有任何订单生成</h1></span>
    </div>

      <!--电视精选-->
    <tvjingxuan/>
    <!--电视精选end-->
      <!--家电-->
    <jiadian/>
    <!--家电-->
  </div>
</template>
<script>
import jiadian from "@/components/shouye/jiadian";
import tvjingxuan from "@/components/shouye/tvjingxuan"

export default {
  created() {
    console.log(this.$store.state.order.length);
  },
  components:{
    jiadian,
    tvjingxuan,
  }
};
</script>
<style lang="scss" scoped>
.order {
  background: white;
  .id {
    padding-top: 8px;
    margin-left: 20px;
    width: 100%;
    height: 30px;
    line-height: 30px;
    background: white;
    span {
      font-weight: 1000;
      color: #f60;
    }
  }
  .zujian {
    margin-top: 5px;
  }
}
</style>


