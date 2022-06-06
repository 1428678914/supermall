<template>
  <div class="pinglun">
    <!-- 头部 -->
    <div class="head">
      <div>用户评论</div>
      <div class="qb" @click="pl">全部 ></div>
    </div>

    <div v-for="(item, index) in pinglun" :key="index" class="body">
      <!-- 用户头像和名字 -->
      <div class="user">
        <img src="./img/user.png" alt="" />
        <div class="name">{{item.username}}</div>
      </div>
      <!-- 评论内容 -->
      <div class="content">
        <div class="text">{{item.text}}</div>
        <div class="shangpin">{{item.time}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SupermallPinglun",

  created() {
    // console.log(this.$route.query.name);
    axios.get('http://127.0.0.1/pinglun', {
      params: {
        spname: this.$route.query.name
      }
    }).then((res) => {
      // console.log(res.data)
      this.pinglun = res.data.reverse().slice(0, 2)
    })
  },

  data() {
    return {
      pinglun: [],
    };
  },

  mounted() {},

  methods: {
    pl() {
      this.$router.push({path: '/pinglun', query: {name: this.$route.query.name}});
    },
  },
};
</script>

<style scoped>
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