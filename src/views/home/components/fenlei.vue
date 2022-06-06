<template>
  <div class="fenlei">
    <div class="fenlei-item">
      <img src="../image/fenlei/sdqj.png" alt="">
      <div>十点抢劵</div>
    </div>
    <div class="fenlei-item">
      <img src="../image/fenlei/hwtm.png" alt="">
      <div>好物特卖</div>
    </div>
    <div class="fenlei-item">
      <img src="../image/fenlei/ngfl.png" alt="">
      <div>内购福利</div>
    </div>
    <div class="fenlei-item">
      <img src="../image/fenlei/cdsx.png" alt="">
      <div>初夏上新</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SupermallFenlei',

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
.fenlei {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;
  color: #252B32;
}
.fenlei-item {
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.fenlei-item img {
  width: 70px;
  height: 70px;
}
</style>