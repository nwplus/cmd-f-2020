<template>
  <div id="sponzaButtonContainer">
    <img
      src="~/assets/graphics/leafLeft.svg"
    >
    <a id="sponzaButton" href="mailto:logistics@nwplus.io?subject=CMD-F Sponsorship">
      Become a Sponsor
    </a>
    <img
      src="~/assets/graphics/leafRight.svg"
    >
  </div>
</template>

<style scoped lang="scss">
@import "bulma/bulma.sass";
#sponzahref {
    width: 100%;
    height: 100%;
}

#sponzoButtonWrapper {
  display: inline-block;
  margin: auto;
}
#sponzaButton {
  text-decoration: none;
  transition-duration: 0.3s;
  position: relative;
  bottom: 30px;
  background: #2F4246;
  border-radius: 120px;
  padding: 10px 50px;
  color: white;
  margin: auto 10px;
  font-family: Zilla Slab;
  font-style: normal;
  font-weight: 600;
  font-size: 1.3em;
  line-height: 31px;
  color: #E9E8E0;
}
#sponzaButton:hover {
  color: #ECAA1E;
}
@include until($tablet) {
  #sponzaButton {
  padding: 8px 40px;
  font-size: 1em;
  }
}
</style>
