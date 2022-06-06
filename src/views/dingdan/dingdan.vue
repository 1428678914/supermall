<template>
  <div>
    <nav-bar class="navbar">
      <div slot="left" class="left">
        <img @click="back" src="./img/jiantou-fff.png" alt="" />
      </div>
      <div slot="center">我的订单</div>
    </nav-bar>
    <div class="dhl">
      <div @click="qb" class="choose" :style="lxstyle">全部</div>
      <div @click="wcl" class="choose" :style="xkstyle">未处理</div>
      <div @click="ycl" class="choose" :style="jxstyle">已处理</div>
    </div>
    <router-view></router-view>
    <div class="zzp"></div>
  </div>
</template>

<script>
import navBar from "../../components/common/navbar/NavBar.vue";
export default {
  name: "SupermallDingdan",

  data() {
    return {};
  },
  components: {
    navBar,
  },
  created() {},

  mounted() {},
  computed: {
    lxstyle() {
      return this.$route.path.indexOf("/dingdan/quanbu") == -1
        ? { color: "#5b5b5b" }
        : { color: "var(--color-tint)" };
    },
    xkstyle() {
      return this.$route.path.indexOf("/dingdan/wcl") == -1
        ? { color: "#5b5b5b" }
        : { color: "var(--color-tint)" };
    },
    jxstyle() {
      return this.$route.path.indexOf("/dingdan/ycl") == -1
        ? { color: "#5b5b5b" }
        : { color: "var(--color-tint)" };
    },
  },

  methods: {
    back() {
      this.$router.back();
    },
    qb() {
      this.$router.replace("/dingdan/quanbu");
    },
    wcl() {
      this.$router.replace("/dingdan/wcl");
    },
    ycl() {
      this.$router.replace("/dingdan/ycl");
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: var(--color-tint);
  width: 100%;
  color: #fff;
}
.left {
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar img {
  width: 20px;
}
.zzp {
  width: 100%;
  height: 58px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  z-index: 998;
}
.dhl {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 10px 0;
}
</style>