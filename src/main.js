import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "swiper/dist/css/swiper.css"
import $ from 'jquery'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
import { RadioGroup, Radio } from 'vant';

Vue.use(RadioGroup);
Vue.use(Radio);




import "mint-ui/lib/style.css";
//引入阿里字体图标
import "./assets/font/iconfont.css"
import "./assets/font/demo.css"
//引入mui样式
import "./assets/mui/css/mui.css"

import Mint from "mint-ui";
 Vue.use(Mint);
import { Header } from 'mint-ui';
Vue.use(Header);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
