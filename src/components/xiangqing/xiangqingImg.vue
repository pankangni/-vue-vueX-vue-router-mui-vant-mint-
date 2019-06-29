<template>
    <div>
        <div class="kaitou">商品详情</div>
        <div class="changtu">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/95fd2ec827ed5f8a2fdbff3cda05ab5c.jpg" alt="">
       <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/083a4ef6965eec69d060388a66186904.jpg" alt="" srcset="">
        </div>
        <jingxuan/>
    </div>
</template>
<style lang="scss" scoped>
.kaitou{
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: white;
    font-size:16px;
    color: #007aff; 
}
.changtu{
    img{
        width: 100%;
        height:400px;
    }
}
</style>

<script>
import jingxuan from "@/components/shouye/jingxuan";
export default {
    components:{
        jingxuan,
    }
}
</script>
