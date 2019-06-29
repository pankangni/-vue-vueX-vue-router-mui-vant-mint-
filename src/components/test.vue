<template>
    <div>
        <h3>发表留言</h3>
        <hr>
        <input type="text" placeholder="姓名" v-model="name" >
        <textarea name="" id="" cols="30" rows="10" placeholder="留言内容。。。" v-model="content"></textarea>
        <mt-button size="large" @click="add">发表留言</mt-button>

    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="(item,i) in lists" :key="i">
        <a href="javascript:;">
          <div class="mui-media-body">
            {{item.name}}
            <p class="mui-ellipsis">{{item.content}}</p>
          </div>
        </a>
      </li>
    </ul>


    </div>
</template>

<script>
export default {
    data:function(){
        return {
            lists:[
                {
                    name:"张三",
                    content:"vue框架太好用。。。"
                },
                {
                    name:"李四",
                    content:"vue框架太难用，都想哭。。。"
                }
            ],
            name:"",
            content:""
        }
    },
    methods:{
        add(){
            this.lists.push({name:this.name,content:this.content});
            this.name = this.content = "";

            console.log(this);

            // axios get post 
            // this.$axios.get("https://api.apiopen.top/musicBroadcasting").then((data)=>{
            //     console.log(data);
            // }).catch(function(error){
            //     console.log(error)
            // })

            // vue-jsonp  jsonp跨域请求
            // this.$jsonp("https://www.baidu.com/his",{
            //     pwd:"node",
            //     callbackQuery: 'cb', //百度api接口名字不叫callback
            //     callbackName: 'jsonpFunc'
            // }).then(data=>{
            //     console.log(data);
            // })

        }
    }
}
</script>

<style lang="scss">
    
</style>
