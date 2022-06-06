<template>
  <div id="app">
    <!-- <h1 v-upper="msg"></h1> -->
   <Header/>
   <router-view></router-view>
   <!-- 在home和search是显示的 -->
   <Footer v-show="$route.meta.show"/>
  </div>
</template>

<script>
import Header from "./components/Header/index.vue"
import Footer from "./components/Footer/index.vue"
export default {
  name: 'App',
  data() {
    return {
      msg:"ABC"
    }
  },
  components: {
   Header,
   Footer
  },
  mounted(){
    // 通知vuex发起请求，获取数据，存储仓库当中
    this.$store.dispatch("categoryList");
  }
}
</script>