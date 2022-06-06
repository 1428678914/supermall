<template>
  <div class="liuxing">
    
    <!-- <div class="liuxing-item">
      <img src="https://img0.baidu.com/it/u=3394198057,1537756690&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">
      <div class="liuxing-item-text">2021新款打底撒的撒阿萨达大厦大大啊啊啊师大</div>
      <div class="price">69.00</div>
    </div>

    <div class="liuxing-item">
      <img src="https://img0.baidu.com/it/u=3394198057,1537756690&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">
      <div class="liuxing-item-text">2021新款打底撒的撒阿萨达大厦大大啊啊啊师大</div>
      <div class="price">69.00</div>
    </div>

    <div class="liuxing-item">
      <img src="https://img0.baidu.com/it/u=3394198057,1537756690&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">
      <div class="liuxing-item-text">2021新款打底撒的撒阿萨达大厦大大啊啊啊师大</div>
      <div class="price">69.00</div>
    </div>

    <div class="liuxing-item">
      <img src="https://img0.baidu.com/it/u=3394198057,1537756690&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">
      <div class="liuxing-item-text">2021新款打底撒的撒阿萨达大厦大大啊啊啊师大</div>
      <div class="price">69.00</div>
    </div> -->

  </div>
</template>

<script>
export default {
  name: 'SupermallTuijian',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
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
  height: 250px;
  border-radius: 5px;
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