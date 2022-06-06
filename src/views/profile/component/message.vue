<template>
  <div class="message">

    <div class="message-item">
      <img src="../image/message.png" alt="">
      <div>我的消息</div>
    </div>

    <div class="message-item">
      <img src="../image/jfsc.png" alt="">
      <div>积分商城</div>
    </div>

    <div class="message-item">
      <img src="../image/hy.png" alt="">
      <div>会员卡</div>
    </div>

    <div class="message-item" @click="gtdd">
      <img src="../image/dd.png" alt="">
      <div>我的订单</div>
    </div>
    
    <div class="message-item" @click="gtsc">
      <img src="../image/sc.png" alt="">
      <div>我的收藏</div>
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
    gtdd() {
      this.$router.push('/dingdan')
    },
    gtsc() {
      this.$router.push('/shoucang')
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