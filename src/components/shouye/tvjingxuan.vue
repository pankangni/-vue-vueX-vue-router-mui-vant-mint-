<template>
  <div class="jingxuan">
    <div class="title">
      <span>酷米电视</span>
    </div>
    <div class="content">
      <div class="img">
        <img src="../../assets/img/iphone/tv.png" alt srcset>
      </div>
    </div>
    <div class="tvs">
      <div class="tv" v-for="(item,i) in $store.state.shouye.tvjingxuan" :key="i">
        <input type="hidden" :value="item.goodid">
        <img class="imglogo1" :src="item.goodimg" alt @click="to($event)">

        <div class="name">
          <span>{{item.goodName}}</span>
        </div>
        <div class="content1">
          <span>{{item.goodContent}}</span>
        </div>
        <div class="price">
          <span class="new">￥{{item.goodPrice}}</span>
          <span class="old">￥{{item.oldPrice}}</span>
        </div>
      </div>
    </div>
    <div class="ti">更多酷米电视产品 &gt;</div>
  </div>
</template>
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
    height: 230px;
    margin-top: 2px;
    .img {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .tvs {
    // margin-top: 20px;
    background: white;

    .tv {
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
<script>
export default {
  methods: {
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
};
</script>

