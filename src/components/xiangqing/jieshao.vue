<template>
  <div class="jieshao">
    <div class="youhui1">
      <span class="youhui">{{$store.state.xqData.goodName}}</span>
      <span
        class="neirong"
      >{{$store.state.xqData.goodContent}}</span>
    </div>
    <div class="price">
      <span class="new">￥{{$store.state.xqData.goodPrice}}</span>
      <span class="old">￥{{$store.state.xqData.oldPrice}}</span>
    </div>
    <!-- Swiper -->
    <div class="swiper-container1">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,i) in lists" :key="i" style="width: 130px; margin-right: 0px;">
          <div class="img">
            <img :src="item.img" alt>
          </div>
          <div class="name">
            <span>{{item.name}}</span>
          </div>
          <div class="content">
            <span>{{item.content}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      lists: [
        {
          img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f0c04e138bfed2b1ebb589de615236d1.png",
          name: "CPU",
          content: "骁龙660八核"
        },
        {
          img:
            "https://i8.mifile.cn/b2c-mimall-media/7692726e7a1dd34a3b1b4ede8aca020d.png",
          name: "三摄像头",
          content: "4800万+800万+1300万像素"
        },

        {
          img:
            "https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png",
          name: "超大屏",
          content: "6.39英寸"
        },
        {
          img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f0c04e138bfed2b1ebb589de615236d1.png",
          name: "CPU",
          content: "骁龙660八核"
        },
        {
          img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f0c04e138bfed2b1ebb589de615236d1.png",
          name: "CPU",
          content: "骁龙660八核"
        }
      ]
    };
  },
  mounted() {
    new Swiper(".swiper-container1", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
};
</script>
<style lang="scss" scoped>
.jieshao {
  background-color: white;
  div {
  }
  .youhui1 {
    margin-top: 10px;
    margin-left: 10px;
    .youhui {
      font-size: 0.24rem !important;
      color: rgb(255, 74, 0);
    }
  }

  .neirong {
    margin-top: 10px;
    margin-left: 10px;
    font-size: 0.24rem !important;
    color: rgba(0, 0, 0, 0.54);
  }
  .price {
    margin-top: 10px;
    margin-left: 10px;
    .new {
      padding-bottom: 10px;
      font-size: 30px;
      margin-top: 20px;
      color: rgb(255, 74, 0);
    }
    .old {
      font-size: 15px;
      margin-left: 5px;
      text-decoration: line-through;
      color: rgba(0, 0, 0, 0.54);
    }
  }
  .swiper-container1 {
    margin-top: 5px;
    .swiper-wrapper {
      .swiper-slide {
        text-align-last: center;
        width: 87px;
        height: 60px;
        border-right: 1px solid #3c3c3c;
        margin: 0px;
        .img {
          height: 21px;
          padding: 0;
          margin: 0;
          img {
            height: 21px;
            width: 21px;
          }
        }
        .name {
          height: 18px;

          padding: 0;
          margin: 0;
          color: #3c3c3c;
          font-size: 0.24rem !important;
        }
        .content {
          height: 18px;

          padding: 0;
          margin: 0;
          color: #676767;
          font-size: 0.2rem;
          overflow: hidden;
        }
      }
    }
  }
}
</style>

