<template>
  <div class="jingxuan">
    <div class="title">
      <span>手机精选</span>
    </div>
    <div class="content">
      <div class="left">
        <img
          src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e842faaddebf768a7021864db6dd2b42.jpg?thumb=1&w=358&h=508"
          alt
          srcset
        >
      </div>
      <div class="right">
        <div class="top">
          <img
            src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b7b2063a4f85d95b37ec3a061c47b9c1.jpg?thumb=1&w=358&h=252"
            alt
            srcset
          >
        </div>
        <div class="bottom">
          <img
            src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1a77888b7de61b81e962b0e5b2f0835c.jpg?thumb=1&w=358&h=252"
            alt
            srcset
          >
        </div>
      </div>
    </div>
    <div class="iphones">
      <div class="iphone" v-for="(item,i) in  $store.state.shouye.jiadian" :key="i">
          <input type="hidden" :value="item.goodid">
        <img
          class="imglogo1"
          :src="item.goodimg"
          alt
           @click="to($event)"
        >

        <img
          class="imglogo2"
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7e68ed30375367ea4c4a8200dc92d56e.png?w=167&h=167"
          alt
          
        >

        <div class="name">
          <span>{{item.goodName}}</span>
        </div>
        <div class="content1">
          <span>{{item.goodContent}}</span>
        </div>
        <div class="price">
          <span class="new">￥{{item.goodPrice}}起</span>
          <span class="old">￥{{item.oldPrice}}起</span>
        </div>
      </div>
      <!-- <div class="iphone">
        <img
          class="imglogo1"
          src="http://i8.mifile.cn/v1/a1/5cba31dd-3cda-1975-7d9c-e95363fc311e!360x360.webp"
          alt
        >
        <img
          class="imglogo2"
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7e68ed30375367ea4c4a8200dc92d56e.png?w=167&h=167"
          alt
        >
        <div class="name">
          <span>小米8 青春版</span>
        </div>
        <div class="content1">
          <span>索尼2400万自拍，超级夜景</span>
        </div>
        <div class="price">
          <span class="new">￥1099起</span>
          <span class="old">￥2000起</span>
        </div>
      </div>
      <div class="iphone">
        <img
          class="imglogo1"
          src="http://i8.mifile.cn/v1/a1/5cba31dd-3cda-1975-7d9c-e95363fc311e!360x360.webp"
          alt
        >
        <img
          class="imglogo2"
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7e68ed30375367ea4c4a8200dc92d56e.png?w=167&h=167"
          alt
        >
        <div class="name">
          <span>小米8 青春版</span>
        </div>
        <div class="content1">
          <span>索尼2400万自拍，超级夜景</span>
        </div>
        <div class="price">
          <span class="new">￥1099起</span>
          <span class="old">￥2000起</span>
        </div>
      </div>
      <div class="iphone">
        <img
          class="imglogo1"
          src="http://i8.mifile.cn/v1/a1/5cba31dd-3cda-1975-7d9c-e95363fc311e!360x360.webp"
          alt
        >
        <img
          class="imglogo2"
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7e68ed30375367ea4c4a8200dc92d56e.png?w=167&h=167"
          alt
        >
        <div class="name">
          <span>小米8 青春版</span>
        </div>
        <div class="content1">
          <span>索尼2400万自拍，超级夜景</span>
        </div>
        <div class="price">
          <span class="new">￥1099起</span>
          <span class="old">￥2000起</span>
        </div>
      </div> -->
    </div>
    <div class="ti">更多酷米手机产品 &gt;</div>
  </div>
</template>
<script>
export default {
  methods:{
       to(e) {
      console.log(e.target.previousSibling.value);
      var id = e.target.previousSibling.value;
      var path = "/xiangqing?goodid=" + id;
      // console.log()

      var obj = this.$store.state.shouye;
      var _this = this;
      Object.keys(obj).forEach(function(key) {
        var arr = obj[key];
        console.log(arr);
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].goodid == id) {
            _this.$store.state.xqData = arr[i];
            break;
          }
        }
      });

      this.$router.push(path);
    }
  }
}
</script>

<style lang="scss" scoped>
.jingxuan {
  .title {
    margin-top: 5px;
    background-color: white;
    width: 100%;
    height: 50px;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.54);

    span {
      font-weight: 1000;
      margin-left: 20px;
      line-height: 50px;
      font-family: "黑体";
    }
  }
  .content {
    width: 100%;
    height: 265px;
    .left {
      display: inline-block;
      width: 50%;
      height: 265px;
      float: left;

      img {
        width: 100%;
        height: 100%;
      }
    }
    .right {
      display: inline-block;
      float: left;
      width: 50%;
      height: 265px;

      .top {
        img {
          width: 100%;
          height: 130px;
        }
      }
      .bottom {
        img {
          width: 100%;
          height: 130px;
        }
      }
    }
  }
  .iphones {
    // margin-top: 20px;
    background: white;

    .iphone {
      position: relative;
      display: inline-block;
      width: 50%;
      height: 260px;
      border: 2px solid white;

      .imglogo1 {
        width: 100%;
        height: 187px;
      }
      .imglogo2 {
        top: 0px;
        right: 0px;
        position: absolute;
        width: 75px;
        height: 75px;
        z-index: 200;
      }
      .name {
        padding-left: 10px;
        font-size: 0.28rem;
        color: rgba(0, 0, 0, 0.87);
      }
      .price {
        padding-left: 10px;
        font-size: 14px;
        color: #ea625b;
        .new {
        }
        .old {
          font-size: 0.18rem;
          text-decoration: line-through;

          color: rgba(0, 0, 0, 0.54);
        }
      }
      .content1 {
        padding-left: 10px;
        font-size: 0.22rem;

        color: rgba(0, 0, 0, 0.54);
      }
    }
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
}
</style>

