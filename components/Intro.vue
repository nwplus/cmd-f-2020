<template>
  <div class="intro-section">
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
    <div class="subheader">
      <div class="subheader-content">
        <p>Join us on <strong>International Women*'s Day</strong> at British Columbia's first and largest all-female* hackathon to explore new technologies and celebrate women* in tech.</p>
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
.intro-section {
  font-family: 'Zilla Slab';
  color: #2F4246;
  font-size: 23px;
  font-weight: normal;
}
.header {
  opacity: 0;
  transition: opacity 400ms linear 0ms;
  min-height: 74vw; // this is svg dimensions
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
.subheader {
  min-height: 100vh;
  color: white;
  background: url("~@/assets/graphics/clouds.svg") left top no-repeat, linear-gradient(#2F4246, #E9E8E0 130%);
  background-size: 100vw;
}
.subheader-content {
  max-width: 900px;
  padding-top: 30vw;
  margin: auto;
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
