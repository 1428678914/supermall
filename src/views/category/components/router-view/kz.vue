<template>
  <div class="yrf">

    <div v-for="(item, index) in sp" :key="index" class="yrf-item" @click="gotodetail(item)">
      <img :src="require(`../../img/${item.name}.png`)" alt="">
      <div class="text">{{item.name}}</div>
      <div class="price">{{item.price}}</div>
    </div>
    
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'SupermallYrf',

  data() {
    return {
      sp: []
    };
  },

  created() {
    axios.get('http://127.0.0.1/category/kz').then((res) => {
      this.sp = res.data
    })
  },

  mounted() {
    
  },

  methods: {
    gotodetail(item) {
      this.$router.push({path: '/detail', query: {name: item.name}})
    }
  },
};
</script>

<style scoped>
.yrf {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
.yrf-item {
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
}
.yrf-item img {
  width: 100%;
  height: 170px;
  border-radius: 5px;
}
.text {
  width: 100%;
  color: #252B32;
  font-size: 10px;
  overflow:hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
  margin-top: 2px;
}
.price {
  width: 100%;
  color: var(--color-tint);
  font-size: 10px;
  text-align: center;
}
</style>