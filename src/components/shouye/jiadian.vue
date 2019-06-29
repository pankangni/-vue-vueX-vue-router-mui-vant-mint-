<template>
  <div class="jingxuan">
    <div class="content">
      <div class="top">
        <img
          src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a56394373382e7d98a395b25c709cfcb.jpg?thumb=1&w=720&h=280"
          alt
        >
      </div>
      <div class="bottom">
        <img
          src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/50173aad762248f7b6018d1952b51348.jpg?thumb=1&w=720&h=440"
          alt
        >
      </div>
    </div>
    <div class="zhinengs">
      <div class="zhineng" v-for="(item,i) in $store.state.shouye.zhineng" :key="i" >
        <div class="left">
          <input type="hidden" :value="item.goodid">
          <img
            :src="item.goodimg"
            alt
              @click="to($event)"
          >
        </div>
        <div class="right">
          <div class="name">{{item.goodName}}</div>
          <div class="content">{{item.goodContent}}</div>
          <div class="price">
            <span class="new">￥<span>{{item.goodPrice}}</span></span>
            <span class="old">￥<span>{{item.oldPrice}}</span></span>
          </div>
        </div>
      </div>
       <!-- <div class="zhineng">
      
        <div class="right">
          <div class="name">小米蓝牙耳机Air</div>
          <div class="content">真无线 乐享无限自由</div>
          <div class="price">
            <span class="new">￥<span>379</span></span>
            <span class="old">￥<span>399</span></span>
          </div>
        </div> 
         <div class="left">
          <img
            src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/484318ef4e069d5587b6526024fc6ebf.jpg?thumb=1&w=360&h=360"
            alt
          >
        </div>
      </div>
      <div class="zhineng">
        <div class="left">
          <img
            src="http://i8.mifile.cn/b2c-mimall-media/5e37245e3204118bebc3e6082f00fafb!360x360.jpg"
            alt
          >
        </div>
        <div class="right">
          <div class="name">小米手环3 NFC版</div>
          <div class="content">能刷公交卡的触摸大屏手环</div>
          <div class="price">
            <span class="new">￥<span>189</span></span>
            <span class="old">￥<span>199</span></span>
          </div>
        </div>
      </div> -->
    </div>
    <div class="ti">更多酷米智能产品 &gt;</div>
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

    .top {
      height: 146px;
      width: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .bottom {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .zhinengs {
    .zhineng {
      width: 100%;
      height: 190px;
      .left {
        display: inline-block;
        float: left;
        width: 50%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .right {
        width: 50%;
        height: 100%;
        display: inline-block;
        float: left;
        // text-align: center;
        padding-left: 20px;
        padding-top: 20px;
        .name {
          font-size: 0.28rem;
          color: rgba(0, 0, 0, 0.87);
        }
        .content {
          margin-top: 0.2rem;
          font-size: 0.22rem;
          line-height: 0.35rem;
          color: rgba(0, 0, 0, 0.54);
        }
        .price {
          margin-top: 10px;
          .new {
            font-size: 1rem;
            color: #ea625b;
            height: 1.5em;
            line-height: 1.5em;
            position: relative;
            display: inline-block;
          }
          .old {
            font-size: 0.22rem;
            color: rgba(0, 0, 0, 0.54);
            margin-left: 3px;
            text-decoration: line-through;
          }
        }
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
  mounted(){
    console.log(this.$store.state.shouye.zhineng)
  },
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

