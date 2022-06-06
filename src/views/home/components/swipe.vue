<template>
  <div>
    <mt-swipe :auto="0" class="swipe">
      <mt-swipe-item
        ><img src="../image/swipe/swipe1.jpeg" alt=""
      /></mt-swipe-item>

      <mt-swipe-item
        ><img src="../image/swipe/swipe2.jpeg" alt=""
      /></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import Vue from "vue";

import { Swipe, SwipeItem } from "mint-ui";

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default {
  name: "SupermallSwipe",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.swipe {
  width: 100%;
  height: 250px;
}
.swipe img {
  width: 100%;
}
</style>