<template>
  <div class="tuijian">
    <div class="title">相关推荐</div>

    <div class="swiper-container3">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,i) in lists" :key="i" style="margin-right: 0px !important;">
          <div class="top">
            <img
              :src="item.img"
              alt
            >
          </div>
          <div class="bottom">
            <div class="name">{{item.name}}</div>
            <div class="price">
              ￥
              <span>{{item.price}}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import Swiper2 from "swiper";
export default {
    data(){
return{
    lists:[{
        name:"k20 贴膜",
        price:"19",
        img:"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/34dece6cf2527f6aeb87e2b892e17376.jpg"

    },
    {
        name:"k20 保护膜",
        price:"39",
        img:"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef2338aeff31f0840b945694d3641fe7.jpg"


    },
     {
        name:"真无线蓝牙耳机",
        price:"99.9",
        img:"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d39a4ad7456ebd9b6ea2ebeabe00e069.jpg"


    },
     {
        name:"分体蓝牙耳机",
        price:"199.9",
        img:"http://i8.mifile.cn/b2c-mimall-media/751c071fb4b3a63af404a6980814b8a8.jpg"


    },
    ]
}
    },
  mounted() {
    new Swiper2(".swiper-container3", {
      slidesPerView: 2.5,
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
};
</script>
<style lang="scss" scoped>
.tuijian {
    border-radius:30px;
  .title {
    width: 100%;
    height: 50px;
    color: #ff6700;
    font-size: 0.26rem;
    line-height: 50px;
    background: white;
    text-align: center;
    border-bottom:1px solid rgba(0, 0, 0, .3);
  }
  .swiper-container3 {
       background: white;
      padding-top:20px;
    .swiper-wrapper {
      .swiper-slide {
        background: white;
        text-align: center;
        .top {
          img {
            width: 80px;
            height: 80px;
            border-radius: 20px;
          }
        }
        .bottom{
            .name{
                font-size: .24rem;
                    color: #3c3c3c;

            }
            .price{
                font-size: .2rem;
    // display: inline-block;
    color: #ff6700;

            }
        }
      }
    }
  }
}
</style>


