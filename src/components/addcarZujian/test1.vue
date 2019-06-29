<template>
  <div>
    <van-goods-action style="z-index:1000">
      <!-- <van-goods-action-icon icon="chat-o" text="客服"/> -->
      <van-goods-action-icon :info="num" icon="cart-o" text="购物车" @click="toshop"/>
      <van-goods-action-icon icon="shop-o" text="店铺" url="/shangping"/>
      <van-goods-action-button type="warning" text="加入购物车" @click="showBase=true"/>
      <van-goods-action-button type="danger" text="立即购买" @click="showBase=true"/>
    </van-goods-action>
    <!-- 基础用法 -->

    <div class="sku-container">
      <van-sku
        v-model="showBase"
        :sku="skuData.sku"
        :goods="skuData.goods_info"
        :goods-id="skuData.goods_id"
        :hide-stock="skuData.sku.hide_stock"
        :quota="skuData.quota"
        :quota-used="skuData.quota_used"
        reset-stepper-on-hide
        reset-selected-sku-on-hide
        disable-stepper-input
        :close-on-click-overlay="closeOnClickOverlay"
        :message-config="messageConfig"
        :custom-sku-validator="customSkuValidator"
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
      />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";
import { Sku } from "vant";
import skuData from "./data.js";
import { LIMIT_TYPE } from "./constants.js";

Vue.use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton)
  .use(Sku);

export default {
  data() {
    this.skuData = skuData;
    return {
      num: 0,
      showBase: false,
      showCustom: false,
      showStepper: false,
      showSoldout: false,
      closeOnClickOverlay: true,
      initialSku: {
        s2: "1193",
        selectedNum: 3
      },
      customSkuValidator: () => "请选择xxx",
      customStepperConfig: {
        quotaText: "单次限购100件",
        stockFormatter: stock => `剩余${stock}件`,
        handleOverLimit: data => {
          const { action, limitType, quota } = data;

          if (action === "minus") {
            this.$toast("至少选择一件商品");
          } else if (action === "plus") {
            if (limitType === LIMIT_TYPE.QUOTA_LIMIT) {
              this.$toast(`限购${quota}件`);
            } else {
              this.$toast("库存不够了");
            }
          }
        }
      },
      messageConfig: {
        uploadImg: (file, img) =>
          new Promise(resolve => {
            setTimeout(() => resolve(img), 1000);
          }),
        uploadMaxSize: 3
      }
    };
  },

  methods: {
    onBuyClicked(data) {
      this.$toast("buy:" + JSON.stringify(data));
    },

    onAddCartClicked(data) {
      console.log(data);
      var obj = this.$store.state.xqData;

      obj.num = data.selectedNum;
      console.log(obj);
      var dian = { dian: false, index: "" };
      var cars = this.$store.state.car;
      var jilu = 0
      for (var i = 0; i < cars.length; i++) {
        if (obj.storeId == cars[i].storeId) {
          dian.dian = true;
          dian.index = i;
        }
      }
      console.log(dian);

      if (dian.dian == true) {
        var good = {
          id: false,
          index: ""
        };
        var item = dian.index;
        console.log(cars[item]);
        for (var i = 0; i < cars[item].goods.length; i++) {
          if (cars[item].goods[i].goodid == obj.goodid) {
            good.id = true;
            good.index = i;
          }
        }
        if (good.id == true) {

          var newjilu = obj.num
          var oldjilu =  this.$store.state.jilu
          this.$store.state.jilu =  oldjilu + obj.num
          console.log(this.$store.state.jilu)
          var i = good.index
          cars[item].goods[i].num = this.$store.state.jilu
          console.log("test"+cars[item].goods[i].num)
          this.$store.state.car = cars;

        } else {
          console.log("123")
          cars[item].goods.push(obj);
          this.$store.state.car = cars;
          jilu =  data.selectedNum;
          console.log(data.selectedNum)
          this.$store.state.jilu = jilu
        cars = [];

        }
      } else {
        var newobj = {};
        newobj.store = obj.store;
        newobj.storeId = obj.storeId;
        newobj.goods = [];
        newobj.goods.push(obj);
        cars.push(newobj);
        this.$store.state.car = cars;
        cars = []
      }
      this.jisuan()
    },

    onPointClicked() {
      this.$toast("积分兑换");
    },
    //计算购物车的件数
    jisuan() {
      var car = this.$store.state.car;
      var num = 0;
      for (var i = 0; i < car.length; i++) {
        for (var j = 0; j < car[i].goods.length; j++) {
          num = num + car[i].goods[j].num;
        }
      }
      this.num = num;
    },
    toshop() {
      this.$router.push("/car");
    }
  },
  mounted() {
    this.jisuan();
  },
  created() {
    this.skuData.goods_info.picture = this.$store.state.xqData.goodimg;
    console.log(this.skuData);
    this.skuData.goods_info.title = this.$store.state.xqData.goodName;
    // this.skuData.goods_info.price = this.$store.state.xqData.goodPrice;
    this.skuData.sku.price = this.$store.state.xqData.goodPrice;
    var objprice = this.skuData.sku.list;
    for (var i = 0; i < objprice.length; i++) {
      this.skuData.sku.list[i].price =
        parseFloat(this.$store.state.xqData.goodPrice) * 100;
    }
  }
};
</script>

<style lang="scss" scoped>
.van-stepper__input[disabled] {
  height: 28px;
  width: 28px;
  padding: 0px;
  margin: 0px;
}

.van-goods-action {
  // bottom: 55px;
  height: 50px;
}

.demo-sku {
  background-color: white;

  .sku-container {
    padding: 0 15px;
  }
}
</style>
