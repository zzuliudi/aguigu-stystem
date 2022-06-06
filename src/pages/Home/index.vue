<template>
  <div>
    <!-- 三级联动全局组件 无需再引入-->
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor v-for="floor in FloorList" :key="floor.id" :list="floor"/>
    <Brand />
  </div>
</template>

<script>
import Recommend from "@/pages/Home/Recommend";
import ListContainer from "@/pages/Home/ListContainer";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
// ---------------------------------------
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    Recommend,
    ListContainer,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted() {
    // 楼梯信息
    this.$store.dispatch("getFloorList");
   
  },
  computed: {
    ...mapState({
      FloorList: (state) => state.home.FloorList,
    }),
  },
};
</script>

<style>
</style>