<template>
  <div>
    <nav-bar class="navbar">
      <div slot="left" class="left">
        <img @click="back" src="./img/jiantou-fff.png" alt="" />
      </div>
    </nav-bar>
    <div class="zzp"></div>
    <div class="head">
      <img src="./img/dianpu.png" alt="" />
      <div>{{ dianpu }}</div>
    </div>
    <div class="liuxing">
      <div
        v-for="(item, index) in sp"
        :key="index"
        class="liuxing-item"
        @click="gtsp(item)"
      >
        <img
          :src="
            require(`/Users/liuboshuo/Desktop/vue+node商城项目/supermall/src/views/category/img/${item.name}.png`)
          "
          alt=""
        />
        <div class="liuxing-item-text">{{ item.name }}</div>
        <div class="price">{{ item.price }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "../../components/common/navbar/NavBar.vue";
import axios from "axios";
export default {
  name: "SupermallDianpu",

  data() {
    return {
      sp: [],
      dianpu: "",
    };
  },
  components: {
    navBar,
  },
  created() {
    this.dianpu = this.$store.state.dianpu;
    axios
      .get("http://127.0.0.1/dianpu", {
        params: {
          dianpu: this.$store.state.dianpu,
        },
      })
      .then((res) => {
        this.sp = res.data;
      });
  },
  mounted() {},

  methods: {
    back() {
      this.$router.back();
    },
    gtsp(item) {
      this.$router.push({ path: "/detail", query: { name: item.name } });
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: var(--color-tint);
  width: 100%;
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
.liuxing {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 59px;
}
.liuxing-item {
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.liuxing-item img {
  width: 100%;
  height: 200px;
  border-radius: 10px;
}
.liuxing-item-text {
  width: 100%;
  color: #252b32;
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 5px;
  margin-bottom: 2px;
}
.price {
  width: 100%;
  color: var(--color-tint);
  font-size: 10px;
  text-align: center;
  margin-bottom: 5px;
}
.head {
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 20px;
  border-bottom: 1px solid #b5b5b5;
  margin-bottom: 10px;
}
.head img {
  width: 30px;
  margin: 0 10px;
}
</style>