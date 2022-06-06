<template>
  <div class="shangpin">
    <!-- 轮播图 -->
    <mt-swipe :auto="0" class="swipe">
      <mt-swipe-item
        ><img :src="require(`./img/${sp.name}.png`)" alt=""
      /></mt-swipe-item>

      <mt-swipe-item
        ><img :src="require(`./img/${sp.name}.png`)" alt=""
      /></mt-swipe-item>
    </mt-swipe>

    <!-- 商品名称 -->
    <div class="name">{{ sp.name }}</div>

    <div class="price">
      <div class="now">¥{{ sp.price }}</div>
      <div class="previous">¥{{ sp.oldprice }}</div>
      <div class="logo">活动价</div>
    </div>

    <!-- 销量 -->
    <div class="data">
      <!-- <div class="xiaoliang">销量 {{ sp.xiaoliang }}</div>
      <div class="shoucang">收藏{{ sp.shoucang }}人</div>
      <div class="fahuo">72小时发货</div> -->
    </div>

    <!-- 运费 -->
    <div class="yunfei">
      <div class="yf-item">
        <img src="../image/duihao.png" alt="" />
        <div class="text">退货补运费</div>
      </div>
      <div class="yf-item">
        <img src="../image/duihao.png" alt="" />
        <div class="text">全国包邮</div>
      </div>
      <div class="yf-item">
        <img src="../image/duihao.png" alt="" />
        <div class="text">7天无理由退货</div>
      </div>
    </div>

    <!-- 分隔线 -->
    <div class="line"></div>

    <!-- 店铺信息 -->
    <!-- <div class="store">
      <div class="store-head">
        <img
          src="https://img2.baidu.com/it/u=1814268193,3619863984&fm=253&fmt=auto&app=138&f=JPEG?w=632&h=500"
          alt=""
        />
        <div>{{ sp.shop }}</div>
      </div>

      <div class="store-message">
        <div class="left">
          <div class="left-item">
            <div class="count">5.8万</div>
            <div class="text">总销量</div>
          </div>
          <div class="left-item">
            <div class="count">99</div>
            <div class="text">全部宝贝</div>
          </div>
        </div>
        <div class="center"></div>
        <div class="right">
          <div class="right-item">
            <div class="name">描述相符</div>
            <div class="number">4.64</div>
            <div class="rank">低</div>
          </div>
          <div class="right-item change">
            <div class="name">价格合理</div>
            <div class="number">5</div>
            <div class="rank">高</div>
          </div>
          <div class="right-item">
            <div class="name">质量满意</div>
            <div class="number">4.62</div>
            <div class="rank">低</div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- 进入店铺 -->
    <!-- <div class="enter">进店逛逛</div> -->
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

import { Swipe, SwipeItem } from "mint-ui";

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  name: "SupermallShangpin",

  data() {
    return {
      sp: [],
    };
  },

  created() {
    axios
      .get("http://127.0.0.1/detail/shangpin", {
        params: {
          name: this.$route.query.name,
        },
      })
      .then((res) => {
        this.sp = res.data[0];
        this.$store.commit('setspname', this.sp.name)
        this.$store.commit('setspprice', this.sp.price)
        this.$store.commit('setdianpu', this.sp.shop)
      });
      window.scrollTo({top:0})
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.shangpin {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/* 轮播图 */
.swipe {
  width: 100%;
  height: 350px;
}
.swipe img {
  width: 100%;
  height: 100%;
}
/* 商品名称 */
.name {
  width: 95%;
  margin: 10px 0;
  color: #363c45;
}
/* 商品价格 */
.price {
  width: 95%;
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: flex-end;
}
.price .now {
  color: var(--color-tint);
  font-size: 20px;
}
.price .previous {
  color: #363c45;
  font-size: 10px;
  margin-left: 5px;
  text-decoration: line-through gray;
}
.price .logo {
  width: 50px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-tint);
  border-radius: 10px;
  font-size: 10px;
  color: #fff;
  position: absolute;
  left: 120px;
  top: 0;
}
/* 销量 */
.data {
  width: 95%;
  height: 30px;
  display: flex;
  align-items: center;
  color: grey;
  border-bottom: 1px solid #f5f5f8;
  font-size: 13px;
  margin-top: 15px;
}
.data .shoucang {
  margin-left: 85px;
  margin-right: 90px;
}
/* 运费 */
.yunfei {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.yf-item {
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #363c45;
}
.yf-item img {
  width: 15px;
}
/* 分隔线 */
.line {
  width: 100%;
  height: 5px;
  background-color: #f5f5f8;
  margin-top: 20px;
}
/* 店铺信息 */
.store {
  width: 100%;
  margin-top: 30px;
}
.store-head {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: gray;
}
.store-head img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 10px;
  margin-right: 10px;
}
.store-message {
  width: 100%;
  color: #363c45;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.store-message .left {
  width: 49%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.store-message .left-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.store-message .left-item .count {
  margin-bottom: 10px;
  font-size: 18px;
}
.store-message .left-item .text {
  font-size: 13px;
}
.store-message .center {
  height: 40px;
  border: 1px solid #f5f5f8;
}
.store-message .right {
  width: 49%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.store-message .right .right-item {
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 13px;
}
.store-message .right .number {
  color: #5a893b;
  margin-right: 10px;
}
.store-message .right .rank {
  background-color: #5a893b;
  color: #fff;
}
.store-message .right .change .number {
  color: #f64848;
}
.store-message .right .change .rank {
  background-color: #f64848;
}
/* 进入店铺 */
.enter {
  width: 170px;
  height: 30px;
  border-radius: 20px;
  background-color: #f2f3fb;
  color: #363c45;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  margin-top: 10px;
}
</style>