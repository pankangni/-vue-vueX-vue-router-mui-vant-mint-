<template>
  <div>
    <div class="mint-tabbar is-fixed">
      <div class="priceSum">
        <div class="mui-input-row mui-checkbox mui-left">
          <div class="logo1">
            全选
            <span>￥{{$store.state.sumPrice}}</span>
          </div>
          <input
            name="checkbox"
            value="Item 1"
            type="checkbox"
            class="sum"
            @click="quanxuan($event)"
            v-model=" $store.state.checkSum"
          >
        </div>
      </div>
      <div class="addcar" @click="paycart($event)">立即结账</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mint-tabbar {
  // position: relative;
  bottom: 55px;
  height: 55px;
  border-radius: 35px;

  .priceSum {
    // width: 50px;
    height: 55px;
    text-align: center;
    line-height: 55px;
    .mui-checkbox {
      height: 55px;
      text-align: center;
      .sum {
        top: 10px;
        color: #f60;
      }

      .logo1 {
        color: #f60;
        margin-left: 55px;
      }
    }
  }
  .addcar {
    background-color: #f60;
    color: white;
    line-height: 55px;
    width: 150px;
    border-radius: 25px;
    text-align: center;
    position: absolute;
    right: 0px;
  }
}
.xiangqingzhuye {
  margin-bottom: 55px;
}
.mui-radio input[type="radio"]:checked:before,
.mui-checkbox input[type="checkbox"]:checked:before {
  color: #f60;
}
</style>
<script>
export default {
  methods: {
    quanxuan(e) {
      this.$store.state.checkSum = !this.$store.state.checkSum;

      var checkx = document.querySelectorAll("input[class='checkfenlei']");
      if (this.$store.state.checkSum == true) {
        for (var i = 0; i < checkx.length; i++) {
          checkx[i].checked = true;
        }
      } else {
        for (var i = 0; i < checkx.length; i++) {
          checkx[i].checked = false;
          this.$store.state.checkSum = false;
        }
      }

      this.$nextTick(() => {
        if (this.$store.state.checkSum == true) {
          this.jisuan();
        } else {
          this.$store.state.sumPrice = 0;
        }
      });
      console.log(this.$store.state.checkSum);
    },
    paycart(e) {
      var checked = [];
      var cars = this.$store.state.car;
      var checkx = document.querySelectorAll("input[class='checkfenlei']");
      for (var i = 0; i < checkx.length; i++) {
        if (checkx[i].checked == true) {
          checkx[i].checked = false;
          console.log(
            checkx[i].previousElementSibling.children[1].children[1].value
          );
          var goodid =
            checkx[i].previousElementSibling.children[1].children[1].value;
          var car = this.$store.state.car;
          for (var i = 0; i < car.length; i++) {
            for (var j = 0; j < car[i].goods.length; j++) {
              if (car[i].goods[j].goodid == goodid) {
                checked.push(car[i].goods[j]);
                cars[i].goods.splice(j, 1);
                checkx[i].checked = false;
                this.$store.state.car = cars;
                cars = this.$store.state.car;
              }
            }
          }
        }
      }
      this.$store.state.sumPrice = 0;
      this.$toast("进入订单页查看订单");
      console.log(checked);
      var neworder = {};
      var orderid = "ww" + Math.floor(Math.random() * 256 + 10000);
      neworder.orderid = orderid;
      neworder.goods = [];
      for (var i = 0; i < checked.length; i++) {
        neworder.goods.push(checked[i]);
      }
      this.$store.state.order.push(neworder);
      console.log(this.$store.state.order);
    },
    jisuan() {
      var checkx = document.querySelectorAll("input[class='checkfenlei']");

      let checked = [];
      var sum = 0;
      for (var i = 0; i < checkx.length; i++) {
        if (checkx[i].checked == true) {
          checked.push(checkx[i]);
          var price =
            checkx[i].previousElementSibling.children[1].children[3].children[0]
              .children[0].innerHTML;
          price = parseFloat(price);
          var num =
            checkx[i].previousElementSibling.children[1].children[3].children[1]
              .children[1].innerHTML;
          num = parseInt(num);
          var pricesum = num * price;
          sum += pricesum;
        }
      }
      this.$store.state.sumPrice = sum;
    }
  },
  watch: {},
  computed: {}
};
</script>

