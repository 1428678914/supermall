<template>
  <div class="dhl">
    <div class="left">
      <router-link :to="yrfpath" class="left-item" :style="yrfstyle"
        >羽绒服</router-link
      >
      <router-link :to="mypath" class="left-item" :style="mystyle"
        >毛衣</router-link
      >
      <router-link :to="kzpath" class="left-item" :style="kzstyle"
        >裤子</router-link
      >
      <router-link :to="xzpath" class="left-item" :style="xzstyle"
        >鞋子</router-link
      >
      <router-link :to="wypath" class="left-item" :style="wystyle"
        >卫衣</router-link
      >
    </div>
    <div class="right">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "SupermallDhl",

  data() {
    return {
      yrfpath: "yrf",
      mypath: "my",
      kzpath: "kz",
      xzpath: "xz",
      wypath: "wy",
    };
  },
  computed: {
    yrfstyle() {
      return this.$route.path.indexOf(this.yrfpath) == -1
        ? { color: "#6E6E6E" }
        : { color: "var(--color-tint)", backgroundColor: '#fff' };
    },
    mystyle() {
      return this.$route.path.indexOf(this.mypath) == -1
        ? { color: "#6E6E6E" }
        : { color: "var(--color-tint)", backgroundColor: '#fff' };
    },
    kzstyle() {
      return this.$route.path.indexOf(this.kzpath) == -1
        ? { color: "#6E6E6E" }
        : { color: "var(--color-tint)", backgroundColor: '#fff' };
    },
    xzstyle() {
      return this.$route.path.indexOf(this.xzpath) == -1
        ? { color: "#6E6E6E" }
        : { color: "var(--color-tint)", backgroundColor: '#fff' };
    },
    wystyle() {
      return this.$route.path.indexOf(this.wypath) == -1
        ? { color: "#6E6E6E" }
        : { color: "var(--color-tint)", backgroundColor: '#fff' };
    },
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.dhl {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.left {
  width: 20%;
}
.right {
  width: 80%;
}
.left-item {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: #6e6e6e;
  text-decoration: none;
  background-color: #f5f5f5;
}
</style>