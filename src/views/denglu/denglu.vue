<template>
  <div>
    <div class="zzp"></div>
    <nav-bar class="navbar">
      <div slot="left" class="left">
        <img @click="back" src="./img/jiantou-fff.png" alt="" />
      </div>
    </nav-bar>
    <div class="denglu">
      <input type="text" placeholder="请输入账号" v-model="zh" />
      <input type="password" placeholder="请输入密码" v-model="mm" />
      <div @click="submit" class="button">登录/注册</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import navBar from "../../components/common/navbar/NavBar.vue";
import { Toast } from "mint-ui";

export default {
  name: "SupermallDenglu",

  data() {
    return {
      zh: "",
      mm: "",
    };
  },
  components: {
    navBar,
  },

  mounted() {},

  methods: {
    submit() {
      axios
        .post("http://127.0.0.1/login", {
          zh: this.zh,
          mm: this.mm,
        })
        .then((res) => {
          Toast(res.data);
          if (res.data == "登录成功" || res.data == "注册成功") {
            sessionStorage.setItem("username", this.zh);
            this.$router.replace({
              path: "/profile",
            });
          }
        });
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
}
.left {
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  height: 20px;
}
.denglu {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  width: 80%;
  height: 30px;
  margin-top: 20px;
}
.button {
  background-color: var(--color-tint);
  color: #fff;
  width: 120px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 5px;
  font-size: 15px;
  margin-top: 50px;
}
.zzp {
  width: 100%;
  height: 58px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  z-index: 998;
}
</style>