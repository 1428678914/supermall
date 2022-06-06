<template>
  <div class="pinglun">
    <nav-bar class="navbar">
      <div slot="left" class="left">
        <img @click="back" src="./img/jiantou-fff.png" alt="" />
      </div>
      <div slot="center">全部评论</div>
    </nav-bar>
    <div class="zzp">
      <textarea name="" id="" cols="30" rows="3" v-model="context"></textarea>
      <div class="button" @click="submit">我要评论</div>
    </div>

    <div v-for="(item, index) in pinglun" :key="index" class="body">
      <!-- 用户头像和名字 -->
      <div class="user">
        <img src="./img/user.png" alt="" />
        <div class="name">{{ item.username }}</div>
      </div>
      <!-- 评论内容 -->
      <div class="content">
        <div class="text">{{ item.text }}</div>
        <div class="shangpin">{{ item.time }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import navBar from "../../components/common/navbar/NavBar.vue";
import { Toast } from "mint-ui";
export default {
  name: "SupermallPinglun",

  data() {
    return {
      pinglun: [],
      context: "",
    };
  },
  components: {
    navBar,
  },
  created() {
    axios
      .get("http://127.0.0.1/pinglun", {
        params: {
          spname: this.$route.query.name,
        },
      })
      .then((res) => {
        // console.log(res.data)
        this.pinglun = res.data.reverse();
      });
  },

  mounted() {},

  methods: {
    back() {
      this.$router.back();
    },
    submit() {
      if (!sessionStorage.getItem("username")) {
        Toast('请先登录！')
      }else if(!this.context) {
        Toast('评论不能为空！')
      }else {
        axios
          .get("http://127.0.0.1/addpl", {
            params: {
              spname: this.$route.query.name,
              username: sessionStorage.getItem("username"),
              text: this.context,
            },
          })
          .then((res) => {
            Toast(res.data);
            location.reload()
          });
      }
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.button {
  color: #fff;
  background-color: var(--color-tint);
  width: 100px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
}
.pinglun {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.head {
  width: 95%;
  border-bottom: 1px solid #f1f1f1;
  color: #292929;
  font-size: 15px;
  height: 45px;
  line-height: 45px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.qb {
  color: #5b5b5b;
  font-size: 13px;
}
.body {
  width: 100%;
  border-bottom: 3px solid #f1f1f1;
}

.user {
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 60px;
  align-items: center;
  padding: 0 20px;
}
.user img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 10px;
}
.name {
  color: #292929;
  font-size: 15px;
}

.content {
  width: 100%;
  padding: 0 20px;
}
.text {
  color: #6e6e6e;
  margin: 10px 0;
  font-size: 14px;
}
.shangpin {
  color: #a7a6a6;
  font-size: 10px;
  margin-bottom: 30px;
}
</style>