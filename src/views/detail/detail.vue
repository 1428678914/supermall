<template>
  <div class="detail">
    <!-- 导航栏 -->
    <nav-bar>
      <div slot="left" class="left">
        <img @click="back" src="./image/jiantou-left.png" alt="" />
      </div>
    </nav-bar>
    <shangpin />
    <canshu />
    <pinglun />
    <tuijian />
    <!-- 底部购买栏 -->
    <detailbottom />

  </div>
</template>

<script>
import navBar from '../../components/common/navbar/NavBar.vue'
import detailbottom from "./components/detail-bottom.vue"
import shangpin from './components/shangpin.vue'
import canshu from './components/canshu.vue'
import pinglun from './components/pinglun.vue'
import tuijian from './components/tuijian.vue'
export default {
  name: "SupermallDetail",
  components: {
    detailbottom,
    shangpin,
    canshu,
    pinglun,
    tuijian,
    navBar
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {
    back() {
      this.$router.back()
    }
  },
};
</script>

<style scoped>
.left{ 
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  height: 20px;
}
</style>