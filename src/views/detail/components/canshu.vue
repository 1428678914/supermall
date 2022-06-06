<template>
  <div class="canshu">
    <!-- 尺寸上半部分 -->
    <div class="item">
      <div class="key">尺码</div>
      <div class="value">
        <div>M</div>
        <div>L</div>
        <div>XL</div>
      </div>
    </div>

    <div class="item">
      <div class="key">肩宽</div>
      <div class="value">
        <div>0</div>
        <div>0</div>
        <div>0</div>
      </div>
    </div>

    <div class="item">
      <div class="key">衣长</div>
      <div class="value">
        <div>0</div>
        <div>0</div>
        <div>0</div>
      </div>
    </div>

    <div class="item">
      <div class="key">胸围</div>
      <div class="value">
        <div>0</div>
        <div>0</div>
        <div>0</div>
      </div>
    </div>

    <!-- 分割线  -->
    <div class="fenge"></div>

    <!-- 尺寸下半部分 -->
    <div class="item">
      <div class="key">图案</div>
      <div class="pink">字母/文字/数字</div>
    </div>

    <div class="item">
      <div class="key">厂名</div>
      <div class="pink">黑龙江科技大学</div>
    </div>

    <div class="item">
      <div class="key">季节</div>
      <div class="pink">夏季</div>
    </div>
    
    <div class="item">
      <div class="key">颜色</div>
      <div class="pink">经典</div>
    </div>

    <div class="item">
      <div class="key">厂址</div>
      <div class="pink">黑龙江科技大学</div>
    </div>

    <div class="item">
      <div class="key">材质</div>
      <div class="pink">棉</div>
    </div>

    <div class="item">
      <div class="key">领型</div>
      <div class="pink">圆领</div>
    </div>

    <div class="item">
      <div class="key">袖长</div>
      <div class="pink">短袖</div>
    </div>

    <div class="item">
      <div class="key">风格</div>
      <div class="pink">小清新</div>
    </div>

    <div class="item">
      <div class="key">尺码</div>
      <div class="pink">XL.L.M</div>
    </div>

    <div class="item">
      <div class="key">衣长</div>
      <div class="pink">短款（41.50cm ）</div>
    </div>

    <div class="item">
      <div class="key">版型</div>
      <div class="pink">宽松</div>
    </div>

  </div>
</template>

<script>
export default {
  name: "SupermallCanshu",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.canshu {
  width: 100%;
  color: #6d6d6d;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.item {
  width: 95%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
}
.key {
  width: 20%;
}
.value {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.fenge {
  width: 95%;
  border: 1px solid #f1f1f1;
}
.pink {
  width: 80%;
  color: var(--color-tint);
  word-wrap: break-word;
}
</style>