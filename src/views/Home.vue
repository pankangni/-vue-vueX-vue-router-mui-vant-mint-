<template>
  <div class="home">
    <div>

   
    <van-row class="topsearch">
      <van-col span="3">
        <!-- <van-icon name="fire-o" class="icontop">
        </van-icon> -->
        <img style="width:27px;height:18px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAyCAYAAAD2vz2aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjQ2OUE2MkU0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjQ2OUE2MkY0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCOUQ0QkM2RjREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCOUQ0QkM3MDREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiL8gcIAAAF1SURBVHja7Ju/LwRRFEbf+FVsQ0dBdJKNSksUSqVCr6AhKxGVwn+gVUpQEI1So5XoZUOhEbKMDiESIeOTzPbvzpoxz5wvOd3duzsn++7cSXajZMU9OOeGXPmTiHtxIU7FoYh/oe+ZmPKsjSMJS1yY+RS7YrNDcTdi1Le4y4WbHrEorsRcUW8asrB2BsSxWEeYLVtiCWG2bIsJhPmnV+zkeV3/TZhLv2HzCLNlFWG2TIqRvHYZa97FR84XXEvnUSeZEft/LexZDIvXnIVFop6uCQ3RnaHHeBmO5FMBstrPjZdiTUyLlww9Bqs6w87FcobX9Vd56B+IZoZjXVlhP0f0qAwfJKS1ookw+w0HYaEFYQVs+j4ZE7Oed6o3sVfA00OphW2IBUN9S5xU+Uhad6A+ZhhDnyAMYQhDGMIQRhCGMIQhDGEEYQhDGMIQhjCCMIQhDGEIIwhDWFHCLP81vPOsezT0/BK3nj0tP1i59qxrGXrG3wIMAK5yNsqRAjAyAAAAAElFTkSuQmCC" alt="" srcset="">
      </van-col>
      <van-col span="18">
        <van-search placeholder="请输入关键词"/>
      </van-col>
      <van-col span="3">
        <van-icon name="setting-o" class="icontop"></van-icon>
      </van-col>
    </van-row>
 </div>
    <!--轮播图-->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,i) in imgList " :key="i">
        <img :src="item" alt>
      </mt-swipe-item>
    </mt-swipe>
    <!--轮播图end-->
    <!--分类菜单-->
    <div class="mui-content">
      <div class="mui-row">
        <div class="mui-col-sm-3 mui-col-xs-3" v-for="(item,i) in imgCategory" :key="i">
          <div class="img_content">
            <img :src="item.img" alt>
            <p>{{item.name}}</p>
          </div>
        </div>
      </div>
    </div>
    <!--分类菜单end-->
    <!--精选-->
    <jingxuan/>
    <!--精选end-->
        <!--电视精选-->
    <tvjingxuan/>
    <!--电视精选end-->
      <!--家电-->
    <jiadian/>
    <!--家电-->
    <!--分类-->
    <category/>
    <!--分类end-->
    <!--底部导航-->
    <bottom-tab style="z-index: 300;"></bottom-tab>
    <!--底部导航-->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import test from "@/components/test.vue";
import jingxuan from "@/components/shouye/jingxuan";
import tvjingxuan from "@/components/shouye/tvjingxuan"
import category from "@/components/shouye/categoryiphone";
import bottomTab from "@/components/bottomTab.vue";
import jiadian from "@/components/shouye/jiadian";

import Vue from "vue";
import { Row, Col } from "vant";
import { Icon } from "vant";

Vue.use(Icon);

Vue.use(Row).use(Col);

export default {
  data() {
    return {
      imgList: [
        "../assets/img/1.jpg",
        "../assets/img/2.jpg",
        "../assets/img/list5.webp",
        "../assets/img/list6.webp"
      ],
      imgCategory: [
        { img: "../assets/img/iphone/iPhone1.png", name: "新品发布" },
        { img: "../assets/img/iphone/iPhone2.png", name: "酷米众筹" },
        { img: "../assets/img/iphone/iPhone3.png", name: "浪漫白色" },
        { img: "../assets/img/iphone/iPhone4.png", name: "已旧换新" },
        { img: "../assets/img/iphone/iPhone1.png", name: "超值特卖" },
        { img: "../assets/img/iphone/iPhone2.png", name: "小米秒杀" },
        { img: "../assets/img/iphone/iPhone3.png", name: "笔记本热卖" },
        { img: "../assets/img/iphone/iPhone4.png", name: "电视热卖" }
      ]
    };
  },
  name: "home",
  components: {
    HelloWorld: HelloWorld,
    test: test,
    jingxuan: jingxuan,
    category: category,
    bottomTab: bottomTab,
     tvjingxuan: tvjingxuan,
     jiadian:jiadian,
  }
};
</script>
 <style lang="scss" scoped>
 .mint-tabbar{
   z-index: 300;
 }
 .van-col{
   
   img{
     margin-top: 10px;
     margin-right: 5px;

   }

 }
// .tosearch {
//   background-color: white;
//   height:40px;
//   .van-col{
//     text-align: center;
//     .van-search{
//       height: 40px;
//       .van-search__content{
//         height: 40px;
//         .van-field__right-icon{
//           .van-icon{
//             line-height: 37px !important;
//           }
//         }
//       }
//     }
//     .icontop{
//       color: #f60;
//       font-size: 30px;
//       line-height: 40px;

//     }
  
//   }

  
// }

  .topsearch{
    height: 40px;
    .icontop{
      text-align: center;
      font-size:30px;
      display: block;
      line-height: 40px;
    }
    .van-search{
      padding: 5px;
      height:40px;
    }
  }
.mint-swipe {
  height: 200px;
  // width: 100%;
  img {
    height: 200px;
    width: 100%;
  }
}
.mui-content {
  background-color: #ffff;
}
.img_content {
  text-align: center;
  background-color: #fff;
  padding-top: 0.5rem;
  p {
    margin: 0px;
    color: rgba(0,0,0,.54);
    font-size: 13px;

  }
  img {
    width: 2.5rem;
    height: 2.5rem;
  }
}
.van-field__left-icon .van-icon, .van-field__right-icon .van-icon{
  line-height: 36px;
}
</style>

