<template>
  <div :class="{visible: isTimeout}" class="header">
    <div class="header-content" />
  </div>
</template>

<script>

export default {
  props: {
    shadowValues: {
      type: String,
      default: () => {
        return '0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0'
      }
    },
    isTimeout: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },

  mounted: function () {
    setTimeout(() => {
      this.isTimeout = true
    }, 600)
  }
}
</script>

<style lang="scss" scoped>
@import "bulma/bulma.sass";
.signupText {
  max-width: 60%;
  text-align: center;
  margin: 0 20%;
}
.header {
  opacity: 0;
  transition: opacity 600ms linear 0ms;
  min-height: 105vw; // the bg image is _almost_ a square
  background-position: left top;
  background-repeat: no-repeat;
  background-size: 100vw;
}
.billboard #billboard {
  fill: #fff;
  transition: fill .2s ease;
}
.billboard:hover #white-glow {
  opacity: 100%;
}
.billboard:hover #billboard {
  fill: #FFD154;
}
.visible {
  opacity: 1;
}
//Desktop CSS:
@include from($desktop) {
  .header {
  }
  .header-content {
    padding: 24vw 0 0 68vw;
  }
}
//Mobile CSS:
@include until($desktop) {
  .header {
    min-height: 264vw; // the bg image is height compared to width
  }
  .header-content {
    padding: 90vw 0 0 59vw;
  }
}
</style>
