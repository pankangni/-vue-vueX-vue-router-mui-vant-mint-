const webpack = require("webpack");
const path = require("path");
module.exports = {

  outputDir: '../nodeServer/dist', // 构建输出目录
  // 配置mui插件
  chainWebpack: config => {
    config.resolve.alias
      .set("@", path.resolve(__dirname, "./src"))
      .set("mui", path.resolve(__dirname, "./src/assets/mui/js/mui.js"));
  },
  configureWebpack: {
    // 增加一个plugins
    plugins: [
      new webpack.ProvidePlugin({
        mui: "mui",
        "window.mui": "mui",
        
        $:"jquery",
        
        jQuery:"jquery",

        "windows.jQuery":"jquery"
      }),
    
    ]
  },
  devServer:{
      host:"192.168.31.14",  //ip
      port:8080,             //端口
  },
  lintOnSave:false  //取消 eslint 验证
};
