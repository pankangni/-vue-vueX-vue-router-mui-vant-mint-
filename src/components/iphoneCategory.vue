<template>
  <div>
    <div class="goods2">
      <!-- <img src="//i8.mifile.cn/b2c-mimall-media/17dbc837b82de528f8f4abf4ede0753a!500x200.jpg" alt="" srcset=""> -->
      <div class="menu-wrapper" ref="menuwrapper">
        <ul>
          <li
            class="menu-item"
            v-for="(item,i) in category"
            :key="i"
            :class="{'current':currentIndex === i}"
            @click="selectMenu(i)"
          >
            <span class="test">{{item.categoryname}}</span>
          </li>
          <!-- <li class="menu-item" :class="{'current':currentIndex === 1}" @click="selectMenu(1)">
            <span class="test">苹果</span>
          </li>
          <li class="menu-item" :class="{'current':currentIndex === 2}" @click="selectMenu(2)">
            <span class="test">华为</span>
          </li>
          <li class="menu-item" :class="{'current':currentIndex === 3}" @click="selectMenu(3)">
            <span class="test">vivo</span>
          </li>
          <li class="menu-item">
            <span class="test">索尼</span>
          </li>
          <li class="menu-item">
            <span class="test">三星</span>
          </li>
          <li class="menu-item">
            <span class="test">LG</span>
          </li>
          <li class="menu-item">
            <span class="test">步步高</span>
          </li>
          <li class="menu-item">
            <span class="test">猜你喜欢</span>
          </li>
          <li class="menu-item">
            <span class="test">超值优惠</span>
          </li>
          <li class="menu-item">
            <span class="test">咖啡时光</span>
          </li>-->
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodswrapper">
        <!-- <img src="//i8.mifile.cn/b2c-mimall-media/17dbc837b82de528f8f4abf4ede0753a!500x200.jpg" alt="" srcset=""> -->
        <ul class="foodsurl">
          <li class="food-list food-list-hook" v-for="(item,i) in category" :key="i">
            <div name="m1" class="category_title">
              <span>{{item.categoryname}}</span>
            </div>
            <ul>
              <div class="food-items" v-for="(good,k) in item.good" :key="k">
                <img :src="good.goodimg" alt>

                <div class="name">{{good.goodid}}</div>
            
              </div>
              <!-- <div class="food-items">
                <img src="../assets/img/iphone/iphone1.png" alt>

                <div class="name">苹果6s</div>
                <div class="dianjia">
                  <span>小二买手店</span>
                </div>
              </div>
              <div class="food-items">
                <img src="../assets/img/iphone/iphone1.png" alt>

                <div class="name">苹果6s</div>
                <div class="dianjia">
                  <span>小二买手店</span>
                </div>
              </div>-->
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
//引入better-scroller;
import BScroll from "better-scroll";

import { constants } from "crypto";
export default {
  data: function() {
    return {
      listHeight: [],
      scrollY: 0,
      category: [
        {
          categoryname: "手机",
          good: [
            {
              goodid: "Redmi k20 Pro",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c7616c2ddc8ca4546caf1f48bc31b24c.png?thumb=1&w=120&h=120"
            },
            {
              goodid: "Redmi K20",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/728ffa7ec37de1e6a4badac29fdf3a0f.png?thumb=1&w=120&h=120"
            },
            {
              goodid: "Redmi 7A",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/20838b39f8bc6bab9eabb519d50cf2dd.png?thumb=1&w=120&h=120"
            },
            {
              goodid: "小米9",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png?thumb=1&w=120&h=120"
            },
            {
              goodid: "小米9 SE",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a1948c1bea112bee09a4a9b2f6bfcbad.png?thumb=1&w=120&h=120"
            },
            {
              goodid: "Redmi Note 7 Pro",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4ce436f7215e54bff6d8e34b02c6b124.png?thumb=1&w=120&h=120"
            },
            {
              goodid: "Redmi k20 Pro",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c7616c2ddc8ca4546caf1f48bc31b24c.png?thumb=1&w=120&h=120"
            },
            {
              goodid: "Redmi K20",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/728ffa7ec37de1e6a4badac29fdf3a0f.png?thumb=1&w=120&h=120"
            },
            {
              goodid: "Redmi 7A",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/20838b39f8bc6bab9eabb519d50cf2dd.png?thumb=1&w=120&h=120"
            },
            {
              goodid: "小米9",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png?thumb=1&w=120&h=120"
            },
            {
              goodid: "小米9 SE",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a1948c1bea112bee09a4a9b2f6bfcbad.png?thumb=1&w=120&h=120"
            },
            {
              goodid: "Redmi Note 7 Pro",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4ce436f7215e54bff6d8e34b02c6b124.png?thumb=1&w=120&h=120"
            }
          ]
        },
        {
          categoryname: "电视",
          good: [
            {
              goodid: "32-40英寸",
              goodimg:
                "//i8.mifile.cn/b2c-mimall-media/033cfa4ab48b9d776dcb69e730022561!120x120.png"
            },
            {
              goodid: "43英寸",
              goodimg:
                "//i8.mifile.cn/b2c-mimall-media/e84d9b98b558bb57632be6dc794455e7!120x120.png"
            },
            {
              goodid: "49-45英寸",
              goodimg:
                "//i8.mifile.cn/b2c-mimall-media/54fc8e14d50a2abde556a30b74c41a99!120x120.jpg"
            },

            {
              goodid: "32-40英寸",
              goodimg:
                "//i8.mifile.cn/b2c-mimall-media/90553f751c9eb6bda9a2ae7c4bce012b!120x120.jpg"
            },
            {
              goodid: "65-75英寸",
              goodimg:
                "//i8.mifile.cn/b2c-mimall-media/bf2dc71cbf6fa8413b7ade09719155a0!120x120.jpg"
            },
            {
              goodid: "激光投影电视",
              goodimg:
                "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1fcf86a09e362a6a7bc3ded8f9124749.jpg?thumb=1&w=120&h=120"
            },
            {
              goodid: "32-40英寸",
              goodimg:
                "//i8.mifile.cn/b2c-mimall-media/033cfa4ab48b9d776dcb69e730022561!120x120.png"
            },
            {
              goodid: "43英寸",
              goodimg:
                "//i8.mifile.cn/b2c-mimall-media/e84d9b98b558bb57632be6dc794455e7!120x120.png"
            },
            {
              goodid: "49-45英寸",
              goodimg:
                "//i8.mifile.cn/b2c-mimall-media/54fc8e14d50a2abde556a30b74c41a99!120x120.jpg"
            },

            {
              goodid: "32-40英寸",
              goodimg:
                "//i8.mifile.cn/b2c-mimall-media/90553f751c9eb6bda9a2ae7c4bce012b!120x120.jpg"
            }
          ]
        },
        {
          categoryname: "电脑",
          good: [
            {
              goodid: "小米Air 12.5",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9da19c26b55c0c22fea23c3b8a31dc28.jpg?thumb=1&w=120&h=120"
            },
            {
              goodid: "小米Air 13.3",
              goodimg:
                "//i8.mifile.cn/b2c-mimall-media/3385f8309f3e90669d7ea94ad7d3bab4!120x120.jpg"
            },
            {
              goodid: "笔记本 15.6独显",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/680bb5c805d29e9ef2f968866124c288.png?thumb=1&w=120&h=120"
            },
            {
              goodid: "RedmiBook 14",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2336dfe3fa9f1b1deb228745a6ac1fab.jpg?thumb=1&w=120&h=120"
            },
            {
              goodid: "笔记本15.6 集显",
              goodimg:
                "//i8.mifile.cn/b2c-mimall-media/0643559b70964014c1d672cc783121d2!120x120.jpg"
            },
            {
              goodid: "小米Pro 15.6",
              goodimg:
                "//i8.mifile.cn/b2c-mimall-media/9b232bbf863196f3a76094b538442d13!120x120.jpg"
            }
          ]
        },
        {
          categoryname: "智能",
          good: [
            {
              goodid: "小爱老师",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f7627c0014e279da55829cee0b51672c.png?thumb=1&w=120&h=120"
            },
            {
              goodid: "小爱音箱",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9946e252a7c49662376c056ced004a20.jpg?thumb=1&w=120&h=120"
            },
            {
              goodid: "手环",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2ed49efd47937690ceec6330ffe9f764.png?thumb=1&w=120&h=120"
            },
            {
              goodid: "照片打印机",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/906df61431e627a11c1e784256863cab.jpg?thumb=1&w=120&h=120"
            },
            {
              goodid: "小爱智能闹钟",
              goodimg:
                "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b9ed4f0f0bc26f45ddc1b72f7fede673.jpg?thumb=1&w=120&h=120"
            },
            {
              goodid: "照相机",
              goodimg:
                "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1099b7c4bf8ec9650130ac7b801556fd.jpg?thumb=1&w=120&h=120"
            },
            {
              goodid: "小爱老师",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f7627c0014e279da55829cee0b51672c.png?thumb=1&w=120&h=120"
            },
            {
              goodid: "小爱音箱",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9946e252a7c49662376c056ced004a20.jpg?thumb=1&w=120&h=120"
            },
            {
              goodid: "手环",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2ed49efd47937690ceec6330ffe9f764.png?thumb=1&w=120&h=120"
            },
            {
              goodid: "照片打印机",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/906df61431e627a11c1e784256863cab.jpg?thumb=1&w=120&h=120"
            },
            {
              goodid: "小爱智能闹钟",
              goodimg:
                "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b9ed4f0f0bc26f45ddc1b72f7fede673.jpg?thumb=1&w=120&h=120"
            },
            {
              goodid: "照相机",
              goodimg:
                "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1099b7c4bf8ec9650130ac7b801556fd.jpg?thumb=1&w=120&h=120"
            }
          ]
        },
        {
          categoryname: "家用电器",
          good: [
            {
              goodid: "壁挂空调",
              goodimg:
                "//i8.mifile.cn/b2c-mimall-media/3f00551566f5b5f08f843403d8688a84!120x120.png"
            },
            {
              goodid: "立式空调",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7bdf9ac76bed032d94a638e88aa8aa0d.png?thumb=1&w=120&h=120"
            },
            {
              goodid: "洗衣机",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/46342e7fb6975ab24c1365948a8bed99.png?thumb=1&w=120&h=120"
            },
            {
              goodid: "吸尘器",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c11fd92e902f3d7ae6f4d25e577c52b.png?thumb=1&w=120&h=120"
            },
            {
              goodid: "净水器",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/648c4899d76ed5730d5eceadbd180382.jpg?thumb=1&w=120&h=120"
            },
            {
              goodid: "扫地机",
              goodimg:
                "//i8.mifile.cn/v1/a1/101e2128-624d-ce9f-973f-50b868f8036a!120x120.png"
            }
          ]
        },
        {
          categoryname: "家居家装",
          good: [
            {
              goodid: "Redmi k20 Pro",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c7616c2ddc8ca4546caf1f48bc31b24c.png?thumb=1&w=120&h=120"
            },
            {
              goodid: "Redmi K20",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/728ffa7ec37de1e6a4badac29fdf3a0f.png?thumb=1&w=120&h=120"
            },
            {
              goodid: "Redmi 7A",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/20838b39f8bc6bab9eabb519d50cf2dd.png?thumb=1&w=120&h=120"
            },
            {
              goodid: "小米9",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png?thumb=1&w=120&h=120"
            },
            {
              goodid: "小米9 SE",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a1948c1bea112bee09a4a9b2f6bfcbad.png?thumb=1&w=120&h=120"
            },
            {
              goodid: "Redmi Note 7 Pro",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4ce436f7215e54bff6d8e34b02c6b124.png?thumb=1&w=120&h=120"
            },
            {
              goodid: "Redmi k20 Pro",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c7616c2ddc8ca4546caf1f48bc31b24c.png?thumb=1&w=120&h=120"
            },
            {
              goodid: "Redmi K20",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/728ffa7ec37de1e6a4badac29fdf3a0f.png?thumb=1&w=120&h=120"
            },
            {
              goodid: "Redmi 7A",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/20838b39f8bc6bab9eabb519d50cf2dd.png?thumb=1&w=120&h=120"
            },
            {
              goodid: "小米9",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png?thumb=1&w=120&h=120"
            },
            {
              goodid: "小米9 SE",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a1948c1bea112bee09a4a9b2f6bfcbad.png?thumb=1&w=120&h=120"
            },
            {
              goodid: "Redmi Note 7 Pro",
              goodimg:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4ce436f7215e54bff6d8e34b02c6b124.png?thumb=1&w=120&h=120"
            }
          ]
        }
      ]
    };
  },
  components: {},
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
<style lang="scss" >
img {
  width: 75px;
  height: 75px;
}
.shopcart {
  position: absolute;
}

.goods2 {
  position: absolute;
  width: 100%;
  top: 38px;
  bottom: 55px;
  width: 100%;
  overflow: hidden;
  display: flex;

  .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background-color: #f3f5f7;
    padding: 0 0px;
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
        width:100%;
        line-height: 14px;
        text-align: center;
        

        .test {
          // font-size: 12px;
              font-size: 15px;
          display: table-cell;
          width: 56px;
          vertical-align: middle;
        }
      }
    }
  }
  .foods-wrapper {
    background: white;
    flex: 1;

    width: 100%;
    .title {
      padding-left: 14px;
      height: 26px;
      line-height: 26px;
      border-left: 2px solid #d9dde1;
      font-size: 12px;
      color: rgb(147, 153, 159);
      background-color: #f3f5f7;
    }

    ul.foodsurl {
      width: 100%;
      // margin-top: 50px;
      .category_title {
        position: relative;
        background: #fff;
        font-size: 0.28rem;
        height: 30px;
        text-align: center;
        font-weight: 400;
        margin-top: 1rem;
        // height: 1.28rem;
        line-height: 30px;
        overflow: hidden;
        span {
          position: relative;
              font-size: 16px;
                  font-weight: 400;
        }
        span:after {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          width: 30px;

          border-top: 1px solid #e0e0e0;
          transform: translate3d(-150%, -50%, 0);
          -webkit-transform: translate3d(-150%, -50%, 0);
        }
           span:before {
          content: "";
          position: absolute;
          top: 50%;
          right: 0;
          width: 30px;

          border-top: 1px solid #e0e0e0;
          transform: translate3d(150%, -50%, 0);
      
        }
      }
      // .zuo,
      // .you {
      //   position: absolute;
      //   top: 50%;
      //   left: 0px;
      //   width: 50px;
      //   left: 90px;

      //   border-bottom: 1px solid black;
      // }
      .you {
        top: 50%;
        left: 180px;
      }
      .food-items {
        width: 33%;
        display: inline-block;
        text-align: center;
        // float: left;
        img {
          width: 55px;
          height: 55px;
        }
        .name {
          // margin-left: 10px;
          // font-weight: 500;
          font-size: 12px;
          color: #666
        }
        .dianjia {
          font-size: 8px;
          color: #666;
          margin-left: 10px;
        }
        .price {
          font-size: 14px;
          color: red;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>


