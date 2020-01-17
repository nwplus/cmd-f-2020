<template>
  <div class="footer-content">
    <p class="join-us-section">
      nwPlus is always looking for new ventures, opportunities, and connections. If you are interested in working with us, joining us or speaking at one of our events, feel free to reach out to us at
      <a class="mail-to" href="mailto:hello@nwplus.io">hello@nwplus.io</a>
    </p>
    <img src="/backgroundSvg/footer_graphic.svg">
    <div id="footer-social">
      <div id="social">
        <p>Social Here</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Organized and held by nwPlus. Copyright © nwHacks 2019'
    }
  },
  mounted() {
    this.text = this.text.split('.')
  }
}
</script>

<style lang="scss" scoped>
@import "bulma/bulma.sass";
//Desktop CSS:
.footer-content {
  text-align: center;
  min-width: 90vw;
  background: linear-gradient(180.6deg, #E9E8E0 0.51%, #2F4246 73.63%);
}
.footer-image {
    max-width: 90%;
}
.join-us-section {
    width: 70%;
    margin: 25px auto;
    color: #FFFFFF;
    padding-top: 200px;
    padding-bottom: 100px;
}
#footer-social {
  position: absolute;
  bottom: 9vw;
  right: 50%;
}
#social {
  position: relative;
  right: -50%;
  text-align: center;
  min-width: 90vw;
  margin-top: -25%;
}
.mail-to {
    color: white;
}
.links {
  margin: 15px;
}
.links a {
  color: #48BCCD;
  margin: 20px;
  text-decoration: underline;
  transition-duration: .2s;
}

.line {
  color: #48BCCD;
}

a:hover {
  color: white;
}

svg {
  height: 30px;
  width: 90px;
}

svg path {
  fill: #48BCCD;
  transition-duration: .2s;
}

svg:hover path {
  fill: white;
}

//Mobile CSS:
@include until ($desktop) {
    .links {
      margin: 7px;
    }
  }
@include until ($tablet) {
  .footer-content {
    font-size: 12px;
  }
  .links a {
    margin: 10px;
  }
  svg {
    height: 26px;
    width: 60px;
  }
  .join-us-section {
      width: 90%;
      margin: 40px auto;
  }
}
</style>
