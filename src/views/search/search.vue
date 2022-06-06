<template>
  <div>
    <nav-bar class="navbar">
      <div slot="left" class="left">
        <img @click="back" src="./img/jiantou-fff.png" alt="" />
      </div>
    </nav-bar>
    <div class="search">
      <input type="text" name="" id="" v-model="content" />
      <img src="./img/search-p.png" alt="" @click="search" />
    </div>
    <div class="liuxing">
      <div
        v-for="(item, index) in result"
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
    <div class="zzp"></div>
  </div>
</template>

<script>
import navBar from "../../components/common/navbar/NavBar.vue";
import axios from "axios";
import { Toast } from "mint-ui";
export default {
  name: "SupermallSearch",
  data() {
    return {
      content: "",
      result: [],
    };
  },
  components: {
    navBar,
  },
  created() {
    console.log(this.$route.query.content)
    if (this.$route.query.content) {
      this.content = this.$route.query.content;
      this.search()
    } else {
    }
  },

  mounted() {
  },

  methods: {
    back() {
      this.$router.back();
    },
    search() {
      if (this.content == "") {
        Toast("请输入你要查找的商品名");
      } else {
        axios
          .get("http://127.0.0.1/search", {
            params: {
              spname: this.content,
            },
          })
          .then((res) => {
            this.result = res.data;
          });
      }
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
.search {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
input {
  width: 85%;
  margin-right: 10px;
}
.search img {
  width: 25px;
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
</style>