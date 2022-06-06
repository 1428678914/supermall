<template>
  <div>
    <div class="dhl">
      <div @click="gotolx" :style="lxstyle">流行</div>
      <div @click="gotoxk" :style="xkstyle">新款</div>
      <div @click="gotojx" :style="jxstyle">精选</div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "SupermallDhl",
  components: {},

  data() {
    return {
      lxpath: "/home/liuxing",
      xkpath: "/home/xinkuan",
      jxpath: "/home/jingxuan",
    };
  },
  computed: {
    lxstyle() {
      return this.$route.path.indexOf(this.lxpath) == -1
        ? { color: "#252B32" }
        : { color: "var(--color-tint)" };
    },
    xkstyle() {
      return this.$route.path.indexOf(this.xkpath) == -1
        ? { color: "#252B32" }
        : { color: "var(--color-tint)" };
    },
    jxstyle() {
      return this.$route.path.indexOf(this.jxpath) == -1
        ? { color: "#252B32" }
        : { color: "var(--color-tint)" };
    },
  },

  methods: {
    gotolx() {
      this.$router.replace(this.lxpath).catch((err) => {});
    },
    gotoxk() {
      this.$router.replace(this.xkpath).catch((err) => {});
    },
    gotojx() {
      this.$router.replace(this.jxpath).catch((err) => {});
    },
  }
};
</script>

<style scoped>
.dhl {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.dhl div {
  width: 33%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #252b32;
}
</style>