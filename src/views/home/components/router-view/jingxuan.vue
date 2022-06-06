<template>
  <div class="liuxing">
    
    <div v-for="(item, index) in sp" :key="index" class="liuxing-item" @click="gtsp(item)">
      <img :src="require(`./image/jingxuan/${item.name}.png`)" alt="">
      <div class="liuxing-item-text">{{item.name}}</div>
      <div class="price">{{item.price}}</div>
    </div>

  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'SupermallLiuxing',

  data() {
    return {
      sp: [],
    };
  },

  created() {
    axios.get('http://127.0.0.1/home/jingxuan').then((res) => {
      this.sp = res.data
    })
  },

  mounted() {
    
  },

  methods: {
    gtsp(item) {
      this.$router.push({path: '/detail', query: {name: item.name}})
    }
  },
};
</script>

<style scoped>
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
.liuxing-item img{
  width: 100%;
  height: 200px;
  border-radius: 10px;
}
.liuxing-item-text {
  width: 100%;
  color: #252B32;
  font-size: 10px;
  overflow:hidden;
	text-overflow:ellipsis;
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