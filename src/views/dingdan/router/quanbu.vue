<template>
  <div class="qb">
    <div v-for="(item, index) in sp" :key="index" class="item">
      <div class="time">{{ item.time }}</div>
      <div class="content">
        <img
          :src="
            require(`/Users/liuboshuo/Desktop/vue+node商城项目/supermall/src/views/category/img/${item.spname}.png`)
          "
          alt=""
        />
        <div class="message">
          <div class="name">{{ item.spname }}</div>
          <div class="total">¥{{ item.total }}</div>
          <div class="count">x{{ item.count }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SupermallQuanbu",

  data() {
    return {
      sp: [],
    };
  },
  created() {
    axios
      .get("http://127.0.0.1/getdd", {
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

  methods: {},
};
</script>

<style scoped>
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
  overflow:hidden;
	text-overflow:ellipsis;
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
}
</style>