<template>
  <div class="message">

    <div class="message-item" @click="gtcar">
      <img src="../image/car.png" alt="">
      <div>我的购物车</div>
    </div>

    <div class="message-item">
      <img src="../image/APP.png" alt="">
      <div>下载购物APP</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SupermallMessage',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    gtcar() {
      this.$router.replace('/cart')
    }
  },
};
</script>

<style scoped>
.message {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.message-item {
  width: 100%;
  height: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #F0F0F0;
}
.message-item img {
  width: 20px;
  height: 20px;
  margin-left: 20px;
  margin-right: 10px;
}

</style>