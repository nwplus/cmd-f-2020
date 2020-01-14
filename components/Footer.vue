<template>
  <div class="footer-content">
    <img class="footer-image" src="">
    <br>
    <p class="join-us-section">
      nwPlus is always looking for new ventures, opportunities, and connections. If you are interested in working with us, joining us or speaking at one of our events, feel free to reach out to us at
      <a class="mail-to" href="mailto:hello@nwplus.io">hello@nwplus.io</a>
    </p>
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
}
.footer-image {
    max-width: 90%;
}
.join-us-section {
    width: 70%;
    margin: 25px auto;
    color: #69DDE1;
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
