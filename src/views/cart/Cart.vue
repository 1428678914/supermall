<template>
  <div>
    <!-- 导航栏 -->
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>

    <!-- 商品展示 -->
    <shangpin />
    

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import shangpin from './component/shangpin.vue'

export default {
  name: 'Cart',
  components: {
    NavBar,
    shangpin
  }
};
</script>

<style scoped>
.home-nav { 
  background-color: var(--color-tint);
  color: #fff;
}
</style>