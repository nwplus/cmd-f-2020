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
        <button>Apply Now</button>
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
  min-height: 157vw; // this is 2272 / 1440 (svg dimensions)
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
//Desktop CSS:
@include from($desktop) {
  .header {
    background-image: url("~@/assets/header.svg");
  }
  .header-content {
    padding: 30vw 14vw 0 0;
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
