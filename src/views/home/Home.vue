<template>
  <div>
    <!-- 导航栏 -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

    <!-- 轮播图 -->
    <swipe />

    <!-- 分类 -->
    <fenlei />

    <!-- 分隔线 -->
    <div class="fenge"></div>

    <!-- 本周流行 -->
    <bzlx />

    <!-- 导航栏 -->
    <dhl />

  </div>
</template>

<script>


import NavBar from "components/common/navbar/NavBar";
import swipe from "./components/swipe.vue";
import fenlei from "./components/fenlei.vue";
import bzlx from "./components/bzlx.vue";
import dhl from "./components/dhl.vue";


// import {getHomeMultidata} from 'network/home';
export default {
  name: "Home",
  components: {
    NavBar,
    fenlei,
    swipe,
    bzlx,
    dhl
  },
  data() {
    return {
      path: ''
      // banners: [],
      // recommends: []
    };
  },
  created() {
    
  },
  activated() {
    // console.log('keepalive激活')
    this.$router.push(this.path).catch((err) => {});
  },
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path
    next()
  }
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.fenge {
  width: 100%;
  height: 10px;
  background-color: #e6e6e6;
}
</style>