<template>
  <div class="header" :class="{visible: isTimeout}">
    <div class="header-content">
      <div>
        <img
          alt="cmd-f logo"
          src="../assets/nwlogos/cmdf.svg"
        >
        <p><strong>March 07-08, 2020</strong></p>
        <p>Vancouver’s all-female* hackathon</p>
        <a><button>Apply Now</button></a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
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
    }, 300)
  }
}
</script>

<style lang="scss" scoped>
@import "bulma/bulma.sass";
.header {
  font-family: 'Zilla Slab';
  color: #2F4246;
  opacity: 0;
  font-size: 23px;
  font-weight: normal;
  transition: opacity 400ms linear 0ms;
  min-height: 82vw; // this is 1188 / 1440 * 100 (svg dimensions)
  background-position: left top;
  background-repeat: no-repeat;
  background-size: 100vw;
}
.header-content {
  text-align: right;
}
.visible {
  opacity: 1;
}
.header button {
  vertical-align: top;
  transition-duration: 0.3s;
  width: auto;
  background: #2F4246;
  border-radius: 120px;
  border: none;
  color: white;
  margin-top: 10px;
  width: 311px;
  height: 48px;
  font-family: Zilla Slab;
  font-weight: bold;
  font-style: normal;
  font-size: 23px;
  color: #E9E8E0;
}
.header button:hover {
  background: #969D8D;
}
//Desktop CSS:
@include from($desktop) {
  .header {
    background-image: url("~@/assets/header.svg");
  }
  .header-content {
    padding: 31vw 14vw 0 0;
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
