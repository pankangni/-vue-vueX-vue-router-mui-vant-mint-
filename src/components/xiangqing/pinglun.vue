<template>
  <div class="pinglun">
    <!-- Swiper -->
    <div class="swiper-container2">
      <div class="swiper-wrapper">
        <!-- <div class="swiper-slide" style="width: 330px !important; height:250px !important; margin-right: 5px !important;">
          <div class="top">
            <div class="left">
              <img
                src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/c0f6a1da90e5a6d0448b02898c3807f4.webp"
                alt
              >
              <div class="text">
                <span class="name">探索未来</span>
                <span class="day">2019-06-05</span>
              </div>
            </div>
            <div class="right">
              <span></span>
            </div>
          </div>
          <div class="content">
            <div class="text">之前本来想买米九的，一直没有抢到。还好k20来救场了，买了高配版，相当不错...</div>
            <div class="img">
              <img
                src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/b985f79dd526c80d9326737403c9e8c8.webp"
                alt
              >
              <img
                src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/fe8d004dfbe25f1abe96a49de4aee6e7.webp"
                alt
                srcset
              >
              <img
                src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/fe8d004dfbe25f1abe96a49de4aee6e7.webp"
                alt
                srcset
              >
            </div>
          </div>
          <div class="huifu">
            官方回复：
            <span class="text">因为米，所以米，拍照才那么美腻~~~感谢您对小米的支持。</span>
          </div>
        </div>-->

        <div
          class="swiper-slide"
          style="height:250px; width:350px!important;margin-right: 5px ;"
          v-for="(item,i) in list"
          :key="i"
        >
          <div class="top">
            <div class="left">
              <img :src="item.nameimg" alt>
              <div class="text">
                <span class="name">{{item.name}}</span>
                <span class="day">{{item.day}}</span>
              </div>
            </div>
            <div class="right">
              <span></span>
            </div>
          </div>
          <div class="content">
            <div class="text">{{item.content}}</div>
            <div class="img">
              <img :src="img" alt v-for="(img,k) in item.img" :key="k">
            </div>
          </div>
          <div class="huifu">
            官方回复：
            <span class="text">{{item.huifu}}</span>
          </div>
        </div>
      </div>
    </div>
        <div class="ti">查看更多评论 &gt;</div>
  </div>
</template>
<script>
import Swiper1 from "swiper";

export default {
  data() {
    return {
      list: [
        {
          nameimg:
            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/c0f6a1da90e5a6d0448b02898c3807f4.webp",
          name: "pknjevw",
          daya: "2019-09-06",
          content:
            "之前本来想买米九的，一直没有抢到。还好k20来救场了，买了高配版，相当不错...",
          img: [
            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/b985f79dd526c80d9326737403c9e8c8.webp",
            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/fe8d004dfbe25f1abe96a49de4aee6e7.webp",
            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/fe8d004dfbe25f1abe96a49de4aee6e7.webp"
          ],
          huifu: "因为米，所以米，拍照才那么美腻~~~感谢您对小米的支持。"
        },
        {
          nameimg:
            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/c0f6a1da90e5a6d0448b02898c3807f4.webp",

          name: "pknjevw",
          daya: "2019-09-06",
          content:
            "之前本来想买米九的，一直没有抢到。还好k20来救场了，买了高配版，相当不错...",
          img: [
            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/b985f79dd526c80d9326737403c9e8c8.webp",
            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/fe8d004dfbe25f1abe96a49de4aee6e7.webp",
            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/fe8d004dfbe25f1abe96a49de4aee6e7.webp"
          ],
          huifu: "因为米，所以米，拍照才那么美腻~~~感谢您对小米的支持。"
        },
        {
          nameimg:
            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/c0f6a1da90e5a6d0448b02898c3807f4.webp",

          name: "pknjevw",
          daya: "2019-09-06",
          content: "因为小米所以精彩",
          img: [
            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/b985f79dd526c80d9326737403c9e8c8.webp",
            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/fe8d004dfbe25f1abe96a49de4aee6e7.webp",
            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/fe8d004dfbe25f1abe96a49de4aee6e7.webp"
          ],
          huifu: "因为米，所以米，拍照才那么美腻~~~感谢您对小米的支持。"
        },
        {
          nameimg:
            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/c0f6a1da90e5a6d0448b02898c3807f4.webp",

          name: "pknjevw",
          daya: "2019-09-06",
          content: "因为小米所以精彩",
          img: [
            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/b985f79dd526c80d9326737403c9e8c8.webp",
            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/fe8d004dfbe25f1abe96a49de4aee6e7.webp",
            "http://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/fe8d004dfbe25f1abe96a49de4aee6e7.webp"
          ],
          huifu: "因为米，所以米，拍照才那么美腻~~~感谢您对小米的支持。"
        }
      ]
    };
  },
  created(){
console.log("xqdata"+this.$store.state.xqData.conment)
  },
  mounted() {
    new Swiper1(".swiper-container2", {
      slidesPerView: 1.3,
      spaceBetween: 5,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
};
</script>
<style lang="scss" scoped>
.pinglun{
    margin-top: 5px;
}
  .ti {
    color: rgba(0, 0, 0, 0.6);
    line-height: 40px;
    font-size: 0.28rem;
    text-align: center;
    height: 40px;
    background-color: white;
    margin-top: 2px;
  }
.swiper-container2 {
//   width: 2000px;
  .swiper-wrapper {
    .swiper-slide {
      // width: 330px !important;
      //   height: 250px !important;
      //   margin-left: 5px !important;
      background-color: #fafafa;
      border-radius: 20px;
      .top {
        margin-left: 10px;
        margin-top: 10px;
        height: 55px;
        .left {
          img {
            float: left;
            width: 50px;
            height: 50px;
            border-radius: 30px;
          }
          .text {
            float: left;
            margin-left: 11px;
            height: 50px;

            .name {
              display: block;
              color: rgba(0, 0, 0, 0.87);
              font-size: 0.24rem !important;
            }
            .day {
              display: block;
              margin-top: 0.05rem;
              color: rgba(0, 0, 0, 0.54);
              font-size: 0.2rem !important;
            }
          }
        }
      }
      .content {
        display: block;
        height: auto;
        margin-left: 10px;
        margin-top: 10px;
        .text {
          //   line-height: 15px;
          font-size: 0.5rem;
          height: 3em;
          overflow: hidden;

          color: rgba(0, 0, 0, 0.87);
        }
        .img {
          img {
            border-radius: 10px;
            margin-top: 5px;
            margin-left: 10px;
          }
        }
      }
      .huifu {
        margin-left: 10px;
        color: #ff6700;

        font-size: 0.24rem !important;
        .text {
          color: #3c3c3c;
        }
      }
    }
  }
}
</style>

