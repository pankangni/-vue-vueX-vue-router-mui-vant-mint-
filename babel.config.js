module.exports = {
  presets: ["@vue/app"],
  ignore: ["./src/assets/mui/js/*.js"],
  "plugins": [["component", 
    {
      "libraryName": "mint-ui",
      "style": true
    }
  ],
]
};
