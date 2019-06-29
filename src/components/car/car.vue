<template>
  <div class="carzhuye">
    <div
      class="mui-card"
      style="height:auto;"
      v-for="(item,i) in $store.state.car"
      :key="i"
      v-show="item.goods.length > 0"
    >
      <div class="mui-input-row mui-checkbox mui-left">
        <div class="logo1">
          <span class="iconfont icon-shuipingzuo"></span>
          <input type="hidden" :id="item.storeId">
          <span>{{item.store}}</span>
        </div>
      </div>
      <div class="mui-input-row mui-checkbox mui-left" v-for="(good,k) in item.goods" :key="k">
        <div class="neirong">
          <div class="left">
            <img :src="good.goodimg" alt>
          </div>
          <div class="right">
            <input type="hidden" :value="item.storeId">
            <input type="hidden" :value="good.goodid">
            <span class="content">{{good.goodContent}}</span>
            <div class="bottom">
              <span class="price">
                ￥
                <span>{{good.goodPrice}}</span>
              </span>
              <div>
                <span class="jia" @click="add($event)">+</span>
                <span class="shu">{{good.num}}</span>
                <span class="jian" @click="jian($event)">-</span>
                <span class="lajitong iconfont icon-lajitong" @click="del($event)"></span>
              </div>
            </div>
          </div>
        </div>
        <input
          name="checkbox"
          value="Item 2"
          type="checkbox"
          :key="i"
          class="checkfenlei"
        
          @click="checkchange($event)"
        >
           
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.carzhuye {
  margin-top: 10px;
}
.mui-card {
  height: 150px;
  border-radius: 20px;
  bottom: 55px;
  .mui-left {
    .logo1 {
      margin-left: 50px;
      margin-top: 10px;
    }
    .neirong {
      width: 350px;
      height: 100%;
      margin-left: 50px;
      margin-top: 10px;
      display: flex;
      .left {
        flex: 0 0 100px;
      }
      .right {
        flex: 1;
        .content {
          display: inline-block;
          width: 200px;
          height: 30px;
          font-size: 12px;
          color: black;
          //   overflow: hidden;
        }
        .bottom {
          margin-top: 20px;
          .price {
            color: #f60;
            font-size: 16px;
          }
          div {
            display: inline-block;
            .jia {
              margin-left: 50px;
              width: 20px;
              height: 20px;
              display: inline-block;
              text-align: center;
              line-height: 20px;
              color: #f60;
              border: 1px solid #f60;
            }
            .shu {
              width: 20px;
              height: 20px;
              display: inline-block;
              text-align: center;
              line-height: 20px;
              color: #f60;
              border: 1px solid #f60;
            }
            .jian {
              //    margin-left: 90px;
              width: 20px;
              height: 20px;
              display: inline-block;
              text-align: center;
              line-height: 20px;
              color: #f60;
              border: 1px solid #f60;
            }
            .lajitong {
              font-size: 23px;
              width: 30px;
              height: 30px;
              display: inline-block;
              text-align: center;
              line-height: 20px;
              color: #f62;
            }
          }
        }
      }
    }
  }
}
.mui-checkbox input[type="checkbox"]:checked:before,
.mui-radio input[type="radio"]:checked:before {
  color: #f60;
}
</style>
<script>
export default {
  data() {
    return {
      checkData: []
    };
  },
  mounted() {},
  watch: {
    getUserData: function() {
      // var checkx = document.querySelectorAll("input[class='checkfenlei']");
      // if (this.$store.state.checkSum == true) {
      //   for (var i = 0; i < checkx.length; i++) {
      //     checkx[i].checked = true;
      //   }
      // } else {
      //   for (var i = 0; i < checkx.length; i++) {
      //     checkx[i].checked = false;
      //     this.$store.state.checkSum = false;
      //   }
      // }
    },
    getcarData: function() {

      this.$nextTick(() => {
        var check = true;
        var checkx = document.querySelectorAll("input[class='checkfenlei']");

        for (var i = 0; i < checkx.length; i++) {
          if (checkx[i].checked == false) {
            check = false;
            this.$store.state.checkSum = false;

            break;
          }
        }
         this.$store.state.checkSum = check;
        document.querySelector("input[class='sum']").checked = check;
      });
    }
  },
  computed: {
    getUserData() {
      return this.$store.state.checkSum;
    },
    getcarData() {
      return this.$store.state.cars;
    }
  },
  methods: {
    checkchange(e) {
    console.log(e.target.checked)
      var checkx = document.querySelectorAll("input[class='checkfenlei']");
      var check = true;
     
      for (var i = 0; i < checkx.length; i++) {
        if (checkx[i].checked == false) {
          var check = false;
          break;
        }
      }
      this.$store.state.checkSum = check;
      document.querySelector("input[class='sum']").checked = check;
      this.$nextTick(() => {
        this.jisuan();
      });
      // 得到被点击的id
      var id1 =  e.target.previousElementSibling.children[1].children[1].value;
//在购物车里遍历 得到这个good
       var car = this.$store.state.car;
          for (var i = 0; i < car.length; i++) {
            for (var j = 0; j < car[i].goods.length; j++) {
              if (car[i].goods[j].goodid == id1) {
              car[i].goods[j].checked = e.target.checked
              }
            }
          }
          this.$store.state.car = car
          console.log("car======>", this.$store.state.car)
    },
    add(e) {
      var storeid =
        e.target.parentElement.parentElement.previousSibling.previousSibling
          .previousSibling.value;
      console.log(storeid);

      var goodid =
        e.target.parentElement.parentElement.previousSibling.previousSibling
          .value;
    
      var price =
        e.target.parentElement.previousElementSibling.children[0].innerHTML;

    
      var content =
        e.target.parentElement.parentElement.previousSibling.innerHTML;
    

      var num = parseInt(e.target.nextSibling.innerHTML) + 1;
      e.target.nextSibling.innerHTML = num;
      this.$nextTick(() => {

for(var i  = 0; i<this.$store.state.car.length;i++){
  for(var j = 0;j < this.$store.state.car[i].goods.length ;j++){
    if(this.$store.state.car[i].goods[j].goodid == goodid){
      this.$store.state.car[i].goods[j].num = num 
      console.log("num======>",  this.$store.state.car[i].goods[j].num)

    }
  }

}


        this.jisuan();
      });
    },
    jian(e) {
      var price =
        e.target.parentElement.previousElementSibling.children[0].innerHTML;

      console.log(price);
      var content =
        e.target.parentElement.parentElement.previousSibling.innerHTML;
      console.log(content);

      var num = parseInt(e.target.previousSibling.innerHTML) - 1;
      if (num <= 1) {
        e.target.previousSibling.innerHTML = 1;
      } else {
        e.target.previousSibling.innerHTML = num;
      }
      this.$nextTick(() => {
        for(var i  = 0; i<this.$store.state.car.length;i++){
  for(var j = 0;j < this.$store.state.car[i].goods.length ;j++){
    if(this.$store.state.car[i].goods[j].goodid == goodid){
      this.$store.state.car[i].goods[j].num = num 
      console.log("num======>",  this.$store.state.car[i].goods[j].num)
    }
  }

}
        this.jisuan();
      });
    },
    del(e) {
     
     
     this.$store.state.cars = [];
      //goodid 得到要删除的货物的id
      var goodid =
        e.target.parentElement.parentElement.previousSibling.previousSibling
          .value;
      console.log(goodid);
      var cars = this.$store.state.car;
      for (var i = 0; i < cars.length; i++) {
        for (var j = 0; j < cars[i].goods.length; j++) {
          if (cars[i].goods[j].goodid == goodid) {
            this.$store.state.car[i].goods.splice(j, 1);
            this.$store.state.cars = this.$store.state.car;
          }
        }
      }
           this.$nextTick(() => {
        this.jisuan();
      });
    },
    jisuan() {
      var checkx = document.querySelectorAll("input[class='checkfenlei']");
      var sum = 0;
      for (var i = 0; i < checkx.length; i++) {
        if (checkx[i].checked == true) {
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
  created(){
    console.log(this.$store.state.cars1)
  }
};
</script>

