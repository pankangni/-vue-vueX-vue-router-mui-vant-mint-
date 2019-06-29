<template>
  <div class="category">
    <iphone-category/>
   <!--底部导航-->
    <bottom-tab></bottom-tab>
    <!--底部导航-->
  </div>
</template>
<script>
import iphoneCategory from "@/components/iphoneCategory.vue";
import bottomTab from "@/components/bottomTab.vue"
export default {
  components: {
    iphoneCategory,
        bottomTab
  }
};
</script>
