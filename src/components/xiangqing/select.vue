<template>
  <div>
      
    <div class="mui-card">
      <ul class="mui-table-view mui-table-view-chevron">
       
         <li class="mui-table-view-cell mui-collapse">
          <a class="mui-navigate-right" href="#">
              <span class="qitian"><img class="selectimg" src="../../assets/img/iphone/gougou.png" alt=""><span>七天无理由</span></span>
              <span class="qitian"><img class="selectimg" src="../../assets/img/iphone/gougou.png" alt=""><span>顺丰发货</span></span>
         
          </a>
          
        </li>
       
       
       
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.mui-table-view{
     background-color: #e5e5e5;
}
.selectimg{
    width:10px;
    height: 10px;
}
.mui-navigate-right{
    color:#666;
    font-size: 12px;
}
.qitian{
    margin-left: 10px;
    span{
        margin-left: 10px;
    }

}
.qitian:last-child{

}
</style>

<script>
import mui from "../../assets/mui/js/mui.min.js";
export default {
  mounted() {
    // 关于如何在vue-cli3.0中引入mui.js和相关扩展
    // http://ask.dcloud.net.cn/article/13509

    mui.init();
    window.addEventListener("toggle", function(event) {
      if (event.target.id === "M_Toggle") {
        var isActive = event.detail.isActive;
        var table = document.querySelector(".mui-table-view");
        var card = document.querySelector(".mui-card");
        if (isActive) {
          card.appendChild(table);
          card.style.display = "";
        } else {
          var content = document.querySelector(".mui-content");
          content.insertBefore(table, card);
          card.style.display = "none";
        }
      }
    });
    
	mui(".mui-slider").slider({interval:4000});
	
  }
};
</script>

