<template>
  <div class="bottom">
    <div class="item">
      <img src="../image/kefu.png" alt="" />
      <div class="text">客服</div>
    </div>

    <div class="item" @click="dianpu">
      <img src="../image/dianpu.png" alt="" />
      <div class="text">店铺</div>
    </div>

    <div class="item" @click="shoucang">
      <img src="../image/shoucang.png" alt="" />
      <div class="text">收藏</div>
    </div>

    <div class="add" @click="add">加入购物车</div>
    <div class="buy" @click="buy">购买</div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import axios from 'axios';
export default {
  name: "SupermallDetailBottom",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    buy() {
      if (!sessionStorage.getItem("username")) {
        Toast('请先登录');
      } else {
        this.$router.push({
          path: "/shopping",
          query: {
            type: "buy",
            price: this.$store.state.spprice,
            name: this.$store.state.spname,
          },
        });
      }
    },
    add() {
      if (!sessionStorage.getItem("username")) {
        Toast('请先登录');
      } else {
        this.$router.push({
          path: "/shopping",
          query: {
            type: "add",
            price: this.$store.state.spprice,
            name: this.$store.state.spname,
          },
        });
      }
    },
    shoucang() {
      if (!sessionStorage.getItem("username")) {
        Toast('请先登录');
      } else {
        axios.get('http://127.0.0.1/shoucang', {
          params: {
            username: sessionStorage.getItem('username'),
            spname: this.$store.state.spname,
            price: this.$store.state.spprice
          }
        }).then((res) => {
          Toast(res.data)
        })
      }
    },
    dianpu() {
      this.$router.push({
        path: '/dianpu',
        query: {
          dianpu: this.$store.state.dianpu
        }
      })
    }
  },
};
</script>

<style scoped>
.bottom {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  z-index: 9999999;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.item {
  width: 17%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
img {
  width: 25px;
  height: 25px;
}
.text {
  color: #514a45;
  font-size: 12px;
  margin-top: 5px;
}

.add {
  width: 25%;
  height: 50px;
  background-color: #feda11;
  line-height: 50px;
  text-align: center;
}
.buy {
  width: 25%;
  height: 50px;
  background-color: #ff8198;
  color: #fff;
  line-height: 50px;
  text-align: center;
}
</style>