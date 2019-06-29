<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper" ref="menuwrapper">
        <ul>
          <li class="menu-item" :class="{'current':currentIndex === 0}" @click="selectMenu(0)">
            <span class="test">刚上市</span>
          </li>
          <li class="menu-item" :class="{'current':currentIndex === 1}" @click="selectMenu(1)">
            <span class="test">苹果</span>
          </li>
          <li class="menu-item" :class="{'current':currentIndex === 2}" @click="selectMenu(2)">
            <span class="test">华为</span>
          </li>
          <li class="menu-item" :class="{'current':currentIndex === 3}" @click="selectMenu(3)">
            <span class="test">vivo</span>
          </li>
          <li class="menu-item">
            <span class="test">步步高</span>
          </li>
          <li class="menu-item">
            <span class="test">LG</span>
          </li>
          <li class="menu-item" :class="{'current':currentIndex === 3}" @click="selectMenu(3)">
            <span class="test">vivo</span>
          </li>
          <li class="menu-item">
            <span class="test">步步高</span>
          </li>
          <li class="menu-item">
            <span class="test">LG</span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodswrapper">
        <ul>
          <li class="food-list food-list-hook">
            <h1 class="title">刚上市</h1>
            <ul>
              <li class="food-item">
                <div class="icon">
                  <img src="../assets/img/iphone/iphone1.png" alt>
                </div>
                <div class="content">
                  <h2 class="name">iphonex</h2>
                  <p class="desc">好用</p>
                  <div class="extra">
                    <span>月售100份</span>
                    <span>好评率98%</span>
                  </div>
                  <div class="price">
                    <span>￥48.00</span>
                  </div>
                </div>
              </li>
              <li class="food-item">
                <div class="icon">
                  <img src="../assets/img/iphone/iphone2.png" alt>
                </div>
                <div class="content">
                  <h2 class="name">iphonex</h2>
                  <p class="desc">好用</p>
                  <div class="extra">
                    <span>月售100份</span>
                    <span>好评率98%</span>
                  </div>
                  <div class="price">
                    <span>￥48.00</span>
                  </div>
                </div>
              </li>
              <li class="food-item">
                <div class="icon">
                  <img src="../assets/img/iphone/iphone3.png" alt>
                </div>
                <div class="content">
                  <h2 class="name">iphonex</h2>
                  <p class="desc">好用</p>
                  <div class="extra">
                    <span>月售100份</span>
                    <span>好评率98%</span>
                  </div>
                  <div class="price">
                    <span>￥48.00</span>
                  </div>
                </div>
              </li>
              <li class="food-item">
                <div class="icon">
                  <img src="../assets/img/iphone/iphone4.png" alt>
                </div>
                <div class="content">
                  <h2 class="name">iphonex</h2>
                  <p class="desc">好用</p>
                  <div class="extra">
                    <span>月售100份</span>
                    <span>好评率98%</span>
                  </div>
                  <div class="price">
                    <span>￥48.00</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li class="food-list food-list-hook">
            <h1 class="title">苹果</h1>
            <ul>
              <li class="food-item">
                <div class="icon">
                  <img src="../assets/img/iphone/iphone1.png" alt>
                </div>
                <div class="content">
                  <h2 class="name">iphonex</h2>
                  <p class="desc">好用</p>
                  <div class="extra">
                    <span>月售100份</span>
                    <span>好评率98%</span>
                  </div>
                  <div class="price">
                    <span>￥48.00</span>
                  </div>
                </div>
              </li>
              <li class="food-item">
                <div class="icon">
                  <img src="../assets/img/iphone/iphone1.png" alt>
                </div>
                <div class="content">
                  <h2 class="name">iphonex</h2>
                  <p class="desc">好用</p>
                  <div class="extra">
                    <span>月售100份</span>
                    <span>好评率98%</span>
                  </div>
                  <div class="price">
                    <span>￥48.00</span>
                  </div>
                </div>
              </li>
              <li class="food-item">
                <div class="icon">
                  <img src="../assets/img/iphone/iphone1.png" alt>
                </div>
                <div class="content">
                  <h2 class="name">iphonex</h2>
                  <p class="desc">好用</p>
                  <div class="extra">
                    <span>月售100份</span>
                    <span>好评率98%</span>
                  </div>
                  <div class="price">
                    <span>￥48.00</span>
                  </div>
                </div>
              </li>
              <li class="food-item">
                <div class="icon">
                  <img src="../assets/img/iphone/iphone1.png" alt>
                </div>
                <div class="content">
                  <h2 class="name">iphonex</h2>
                  <p class="desc">好用</p>
                  <div class="extra">
                    <span>月售100份</span>
                    <span>好评率98%</span>
                  </div>
                  <div class="price">
                    <span>￥48.00</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li class="food-list food-list-hook">
            <h1 class="title">华为</h1>
            <ul>
              <li class="food-item">
                <div class="icon">
                  <img src="../assets/img/iphone/iphone1.png" alt>
                </div>
                <div class="content">
                  <h2 class="name">iphonex</h2>
                  <p class="desc">好用</p>
                  <div class="extra">
                    <span>月售100份</span>
                    <span>好评率98%</span>
                  </div>
                  <div class="price">
                    <span>￥48.00</span>
                  </div>
                </div>
              </li>
              <li class="food-item">
                <div class="icon">
                  <img src="../assets/img/iphone/iphone1.png" alt>
                </div>
                <div class="content">
                  <h2 class="name">iphonex</h2>
                  <p class="desc">好用</p>
                  <div class="extra">
                    <span>月售100份</span>
                    <span>好评率98%</span>
                  </div>
                  <div class="price">
                    <span>￥48.00</span>
                  </div>
                </div>
              </li>
              <li class="food-item">
                <div class="icon">
                  <img src="../assets/img/iphone/iphone1.png" alt>
                </div>
                <div class="content">
                  <h2 class="name">iphonex</h2>
                  <p class="desc">好用</p>
                  <div class="extra">
                    <span>月售100份</span>
                    <span>好评率98%</span>
                  </div>
                  <div class="price">
                    <span>￥48.00</span>
                  </div>
                </div>
              </li>
              <li class="food-item">
                <div class="icon">
                  <img src="../assets/img/iphone/iphone1.png" alt>
                </div>
                <div class="content">
                  <h2 class="name">iphonex</h2>
                  <p class="desc">好用</p>
                  <div class="extra">
                    <span>月售100份</span>
                    <span>好评率98%</span>
                  </div>
                  <div class="price">
                    <span>￥48.00</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li class="food-list food-list-hook">
            <h1 class="title">vivo</h1>
            <ul>
              <li class="food-item">
                <div class="icon">
                  <img src="../assets/img/iphone/iphone1.png" alt>
                </div>
                <div class="content">
                  <h2 class="name">iphonex</h2>
                  <p class="desc">好用</p>
                  <div class="extra">
                    <span>月售100份</span>
                    <span>好评率98%</span>
                  </div>
                  <div class="price">
                    <span>￥48.00</span>
                  </div>
                </div>
              </li>
              <li class="food-item">
                <div class="icon">
                  <img src="../assets/img/iphone/iphone1.png" alt>
                </div>
                <div class="content">
                  <h2 class="name">iphonex</h2>
                  <p class="desc">好用</p>
                  <div class="extra">
                    <span>月售100份</span>
                    <span>好评率98%</span>
                  </div>
                  <div class="price">
                    <span>￥48.00</span>
                  </div>
                </div>
              </li>
              <li class="food-item">
                <div class="icon">
                  <img src="../assets/img/iphone/iphone1.png" alt>
                </div>
                <div class="content">
                  <h2 class="name">iphonex</h2>
                  <p class="desc">好用</p>
                  <div class="extra">
                    <span>月售100份</span>
                    <span>好评率98%</span>
                  </div>
                  <div class="price">
                    <span>￥48.00</span>
                  </div>
                </div>
              </li>
              <li class="food-item">
                <div class="icon">
                  <img src="../assets/img/iphone/iphone1.png" alt>
                </div>
                <div class="content">
                  <h2 class="name">iphonex</h2>
                  <p class="desc">好用</p>
                  <div class="extra">
                    <span>月售100份</span>
                    <span>好评率98%</span>
                  </div>
                  <div class="price">
                    <span>￥48.00</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
   <add-shop ></add-shop>
  </div>
</template>
<script>
//引入better-scroller;
import BScroll from "better-scroll";

import addShop from "../components/addcarZujian/test1";
import { constants } from "crypto";
export default {
  name: "Goods",
  data: function() {
    return {
      listHeight: [],
      scrollY: 0
    };
  },
  components: {
    addShop 
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrollY >= height1 && height2 > this.scrollY)) {
          return i;
        }
      }
      return 0;
    }
  },
  methods: {
    _initScroller() {
      this.meunScroll = new BScroll(this.$refs.menuwrapper, {
        click: true
      });
      this.foodScroll = new BScroll(this.$refs.foodswrapper, {
        probeType: 3
      });
      this.foodScroll.on("scroll", pos => {
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    _calculateHeight() {
      let foodlist = this.$refs.foodswrapper.getElementsByClassName(
        "food-list-hook"
      );
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < foodlist.length; i++) {
        let item = foodlist[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    },
    selectMenu(index) {
      console.log(index);
      let foodList = this.$refs.foodswrapper.getElementsByClassName(
        "food-list-hook"
      );
      let el = foodList[index];
      this.foodScroll.scrollToElement(el, 300);
    }
  },
  created() {
    //nextTick结束后 dom才真正进行渲染结束
    this.$nextTick(() => {
      this._initScroller();
      this._calculateHeight();
    });
    console.log(this.currentIndex);
  }
};
</script>
<style lang="scss">
img {
  width: 75px;
  height: 75px;
}
.shopcart {
  position: absolute;
  bottom: 55px;
  // background: red;
}
.goods {
  position: absolute;
  width: 100%;
  top: 226px;
  bottom: 55px;
  width: 100%;
  overflow: hidden;
  display: flex;

  .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background-color: #f3f5f7;
    padding: 0 12px;
    ul {
      padding: 0;
      margin: 0;
      .current {
        background: white;
        span {
          font-weight: 700;
        }
      }
      .menu-item {
        display: table;
        height: 54px;
        width: 56px;
        line-height: 14px;

        .test {
          font-size: 12px;
          display: table-cell;
          width: 56px;
          vertical-align: middle;
        }
      }
    }
  }
  .foods-wrapper {
    flex: 1;
    .title {
      padding-left: 14px;
      height: 26px;
      line-height: 26px;
      border-left: 2px solid #d9dde1;
      font-size: 12px;
      color: rgb(147, 153, 159);
      background-color: #f3f5f7;
    }
    .food-item {
      background-color: white;
      display: flex;
      margin-top: 10px;
      // padding-bottom: 18px;
      box-sizing: content-box;

      .icon {
        flex: 0 0 57px;
        margin-left: 10px;
        margin-right: 10px;
        img {
          margin-top: 5px;
        }
      }
      .content {
        flex: 1;
        .name {
          margin: 2px 0 8px 0;
          height: 14px;
          line-height: 14px;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }
        .desc,
        .extra {
          margin-bottom: 8px;
          line-height: 10px;
          font-size: 10px;
          color: rgb(147, 153, 159);
          span {
            margin-right: 5px;
          }
        }
        .desc {
          margin-bottom: 8px;
        }
        .extra {
          margin-right: 12px;
        }
        .price {
          font-weight: 700;
          line-height: 24px;
          span {
            margin-right: 8px;
            font-size: 14px;
            color: rgb(240, 20, 20);
          }
        }
      }
    }
  }
  .food-item:last-child {
    margin-bottom: 0px;
    padding-bottom: 0px;
  }
  .food-item:first-child {
    margin-top: 0px;
    padding-top: 0px;
  }
}
</style>
