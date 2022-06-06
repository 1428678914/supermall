<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="home-nav"
      ><div slot="center">分类</div>
      <div slot="right" class="right">
        <img src="./img/sousuo.png" alt="" @click="gtsearch">
      </div>
    ></nav-bar>

    <!-- 竖向导航栏 -->
    <dhl />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import dhl from "./components/dhl.vue";

export default {
  name: "Category",
  data() {
    return {
      path: "",
    };
  },
  components: {
    NavBar,
    dhl,
  },
  methods: {
    gtsearch() {
      this.$router.push('/search')
    }
  },
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path;
    next();
  },
  activated() {
    this.$router.push(this.path).catch((err) => {});
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.right {
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-nav img {
  width: 20px;
}
</style>