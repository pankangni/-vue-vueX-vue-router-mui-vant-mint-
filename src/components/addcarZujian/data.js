/* eslint-disable */
export default {
  goods_id: '946755',
  quota: 15,
  quota_used: 0,
  picture:"",
  goods_info: {
    title: '测试商品',
    picture:"",
    price: 1900
  },
  sku: {
    price: '1900',
    stock_num: 227,
    none_sku: false,
    hide_stock: false,
    collection_id: 2261,
    tree: [
    
      
      {
        k: '尺寸',
        k_id: '2',
        v: [
          {
            id: '1193',
            name: "51寸"
          },
          {
            id: '1194',
            name: '67寸'
          }
        ],
        k_s: 's2',
        count: 10
      }
    ],
    list: [
      {
        id: 2259,
        price: 100000,
       
        code: '',
        s1: '0',
        s2: '1193',
        s3: '0',
        s4: '0',
        s5: '0',
        stock_num: 110,
        goods_id: 946755
      },
      {
        id: 2257,
        price: 100000,
       
        code: '',
        s1: '0',
        s2: '1194',
        s3: '0',
        s4: '0',
        s5: '0',
        stock_num: 111,
        goods_id: 946755
      },
    
    ],
  
 
 
  },
  created() {
    console.log(this.$store.state.xqData)
  },
  mounted() {
    console.log("12")
  },
};
