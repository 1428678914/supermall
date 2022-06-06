<template>
  <div>
    <!-- 导航栏 -->
    <nav-bar class="home-nav"><div slot="center">我的</div></nav-bar>

    <!-- 用户登录/注册 -->
    <user />

    <!-- 钱包 -->
    <wallet />

    <!-- 分隔线 -->
    <div class="line"></div>
    
    <!-- 消息 -->
    <message />

    <!-- 分隔线 -->
    <div class="line"></div>

    <!-- 购物车 -->
    <car />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import user from "./component/user.vue";
import wallet from "./component/wallet.vue";
import message from './component/message.vue'
import car from './component/car.vue'
export default {
  name: "Profile",
  components: {
    NavBar,
    user,
    wallet,
    message,
    car
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.line {
  width: 100%;
  height: 12px;
  background-color: #F0F0F0;
}
</style>