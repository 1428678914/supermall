<template>
  <div class="user" @click="gtdl">
    <div class="head">
      <img src="../image/user.png" alt="" />
    </div>
    <div class="right">
      <div class="login">
        <div v-if="username">{{username}}</div>
        <div v-else>登录/注册</div>
        <div class="phone">
          <img src="../image/phone.png" alt="" />
          <div>暂无绑定手机号</div>
        </div>
      </div>
      <img class="jiantou" src="../image/jiantou.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SupermallUser",

  data() {
    return {
      username: ''
    };
  },
  created() {
    this.username = sessionStorage.getItem('username')
  },

  mounted() {},

  methods: {
    gtdl() {
      this.$router.push('/denglu')
    }
  },
};
</script>

<style scoped>
.user {
  width: 100%;
  height: 70px;
  background-color: var(--color-tint);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: #fff;
}
.head {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #C1C1C1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}
.head img {
  width: 120%;
  height: 120%;
}
.right {
  width: 75%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
}
.phone {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 10px;
  margin-top: 5px;
}
.phone img {
  width: 15px;
}
.right .jiantou {
  width: 15px;
  position: absolute;
  right: 2%;
}
</style>