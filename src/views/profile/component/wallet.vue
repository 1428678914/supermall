<template>
  <div class="wallet">

    <div class="wallet-item">
      <div class="top">
        <div class="count">0.00</div>
        <div class="danwei">元</div>
      </div>
      <div>我的余额</div>
    </div>

    <div class="wallet-item">
      <div class="top">
        <div class="count">0</div>
        <div class="danwei">个</div>
      </div>
      <div>我的优惠</div>
    </div>

    <div class="wallet-item">
      <div class="top">
        <div class="count">0</div>
        <div class="danwei">分</div>
      </div>
      <div>我的积分</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SupermallWallet',

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
.wallet {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #F0F0F0;
}
.wallet-item {
  width: 33%;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  font-size: 10px;
  color: #464D57;
}
.top {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 5px;
}
.count {
  color: #FD493F;
  font-size: 20px;
}
</style>