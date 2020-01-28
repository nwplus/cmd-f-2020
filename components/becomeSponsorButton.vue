<template>
  <div id="buttonWrapper">
    <img src="~/assets/graphics/leafLeft.svg">
    <a
      id="sponzaButton"
      href="mailto:logistics@nwplus.io?subject=cmd-f Sponsorship"
    >
      Become a Sponsor
    </a>
    <img src="~/assets/graphics/leafRight.svg">
  </div>
</template>

<style scoped lang="scss">
@import "bulma/bulma.sass";
#sponzaButton {
  text-decoration: none;
  transition-duration: 0.2s;
  position: relative;
  bottom: 30px;
  background: #2f4246;
  border-radius: 120px;
  padding: 14px 50px;
  color: white;
  margin: auto 24px;
  font-family: Zilla Slab;
  font-weight: 600;
  font-size: 24px;
  line-height: 31px;
  color: #e9e8e0;
}
#sponzaButton:hover {
  color: #ecaa1e;
}
@include until($tablet) {
  #sponzaButton {
    padding: 8px 40px;
    margin: 0 5px;
    font-size: 1em;
  }
}
@include until(323px) {
  #sponzaButton {
    padding: 8px 25px;
    margin: 0;
    font-size: 1em;
  }
}
</style>
