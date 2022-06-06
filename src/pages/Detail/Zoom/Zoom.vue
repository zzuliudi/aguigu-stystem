<template>
  <div class="spec-preview">
    <img :src="imgObj.imgUrl" ref="smarll" />
    <div class="event" @mousemove="hander" ref="eve"></div>
    <div class="big">
      <img :src="imgObj.imgUrl" ref="big" />
    </div>
    <!-- 遮罩层 -->
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: ["skuImageList"],
  mounted() {
    this.$bus.$on("getIndex", (index) => {
      this.currentIndex = index;
    });
  },
  computed: {
    imgObj() {
      return this.skuImageList[this.currentIndex] || {};
    },
  },
  methods: {
    hander(event) {
      let mask = this.$refs.mask;
      let eve = this.$refs.eve;
      let big = this.$refs.big;
      let smarll = this.$refs.smarll;
      let left = event.offsetX - mask.offsetWidth / 2;
      let top = event.offsetY - mask.offsetHeight / 2;
      let maxleft = eve.offsetWidth - mask.offsetWidth;
      let maxHeight = eve.offsetHeight - mask.offsetHeight;
      if (left <= 0) {
        left = 0;
      }
      if (left >= maxleft) {
        left = maxleft;
      }
      mask.style.left = left + "px";
      if (top <= 0) {
        top = 0;
      }
      if (top >= maxHeight) {
        top = maxHeight;
      }
      mask.style.top = top + "px";
      big.style.left = -left * (big.offsetWidth / smarll.offsetWidth) + "px";
      big.style.top = -top * (big.offsetHeight / smarll.offsetHeight) + "px";
    },
  },
};
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>