<template>
  <div class="bzlx">
    <div class="bzlx-text">本周流行</div>
    <div class="bzlx-group">

      <div class="bzlx-item">
        <img src="../image/fenlei/1.png" alt="">
        <div>时尚懒人套装</div>
      </div>

      <div class="bzlx-item">
        <img src="../image/fenlei/2.png" alt="">
        <div>绅士休闲套装</div>
      </div>

      <div class="bzlx-item">
        <img src="../image/fenlei/3.png" alt="">
        <div>都市男孩套装</div>
      </div>

      <div class="bzlx-item">
        <img src="../image/fenlei/4.png" alt="">
        <div>夏季清新套装</div>
      </div>

      <div class="bzlx-item">
        <img src="../image/fenlei/5.png" alt="">
        <div>复古绅士套装</div>
      </div>

      <div class="bzlx-item">
        <img src="../image/fenlei/6.png" alt="">
        <div>清爽干净套装</div>
      </div>

      <div class="bzlx-item">
        <img src="../image/fenlei/7.png" alt="">
        <div>简约清爽套装</div>
      </div>

      <div class="bzlx-item">
        <img src="../image/fenlei/8.png" alt="">
        <div>显高街拍套装</div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'SupermallBzlx',

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
.bzlx-text {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #252B32;
}
.bzlx-group {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
.bzlx-item {
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  color: #252B32;
  margin-bottom: 10px;
}
.bzlx-item img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>