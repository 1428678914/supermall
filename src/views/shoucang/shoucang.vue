<template>
  <div>
    <nav-bar class="navbar">
      <div slot="left" class="left">
        <img @click="back" src="./img/jiantou-fff.png" alt="" />
      </div>
      <div slot="center">我的收藏</div>
    </nav-bar>
    <div class="zzp"></div>
    <div class="qb">
    <div v-for="(item, index) in sp" :key="index" class="item" @click="gotodetail(item)">
      <div class="content">
        <img
          :src="
            require(`/Users/liuboshuo/Desktop/vue+node商城项目/supermall/src/views/category/img/${item.spname}.png`)
          "
          alt=""
        />
        <div class="message">
          <div class="name">{{ item.spname }}</div>
          <div class="count">¥{{ item.price }}</div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import navBar from "../../components/common/navbar/NavBar.vue";
export default {
  name: "SupermallShoucang",

  data() {
    return {
      sp: [],
    };
  },
  components: {
    navBar
  },
  created() {
    axios
      .get("http://127.0.0.1/getsc", {
        params: {
          username: sessionStorage.getItem("username"),
          status: "qb",
        },
      })
      .then((res) => {
        this.sp = res.data.reverse();
      });
  },

  mounted() {},

  methods: {
     gotodetail(item) {
      this.$router.push({path: '/detail', query: {name: item.spname}})
    },
    back() {
      this.$router.back();
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
.qb {
  margin-bottom: 58px;
}
.item {
  color: #5b5b5b;
  border-bottom: 1px solid #e6e6e6;
  border-top: 1px solid #e6e6e6;
  padding-top: 10px;
}
.time {
  margin-left: 20px;
}
.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
}
.content img {
  width: 100px;
  height: 100px;
  border-radius: 10px;
}
.message {
  position: relative;
  width: 60%;
  height: 70px;
  margin-left: 20px;
}
.name {
  position: absolute;
  top: 0;
  left: 0;
  width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.total {
  position: absolute;
  top: 0;
  right: 0;
  color: var(--color-tint);
}
.count {
  position: absolute;
  bottom: 0;
  right: 0;
  color: var(--color-tint);
}
</style>