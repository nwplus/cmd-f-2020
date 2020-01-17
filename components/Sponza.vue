<template>
  <div class="sponza">
    <p class="sponsor-title">
      Sponsors
    </p>
    <div id="sponzaButtonContainer">
      <img
        src="~/assets/graphics/leafLeft.svg"
      >
      <a href="mailto:logistics@nwplus.io?subject=CMD-F Sponsorship">
        <button id="sponzaButton">
          Become a Sponsor
        </button>
      </a>
      <img
        src="~/assets/graphics/leafRight.svg"
      >
    </div>
    <br>
    <div id="sponsors-list" class="sponsorCategory">
      <div v-for="item in listOfTera" :key="item.name" class="sponsorWrapper">
        <SponsorImage :item="item" />
      </div>
    </div>
    <div id="sponsors-list" class="sponsorCategory">
      <div v-for="item in listOfGiga" :key="item.name" class="sponsorWrapper">
        <SponsorImage :item="item" />
      </div>
    </div>
    <div id="sponsors-list" class="sponsorCategory">
      <div v-for="item in listOfMega" :key="item.name" class="sponsorWrapper">
        <SponsorImage :item="item" />
      </div>
    </div>
    <div id="sponsors-list" class="sponsorCategory">
      <div v-for="item in listOfKilo" :key="item.name" class="sponsorWrapper">
        <SponsorImage :item="item" />
      </div>
    </div>
    <div id="sponsors-list" class="sponsorCategory">
      <div v-for="item in listOfInKind" :key="item.name" class="sponsorWrapper">
        <SponsorImage :item="item" />
      </div>
    </div>
    <!--  -->
    <a href="mailto:sponsorship@nwplus.io">
      <img
        class="becomeSponsor"
        src=""
        style="margin-top: 15px;"
        title="Become a Sponsor"
      >
    </a>
  </div>
</template>

<script>
import SponsorImage from '~/components/SponsorImage'
export default {
  components: { SponsorImage },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  computed: {
    listOfTera: function () {
      return this.items.filter(item => item.rank === 'tera')
    },
    listOfGiga: function () {
      return this.items.filter(item => item.rank === 'giga')
    },
    listOfMega: function () {
      return this.items.filter(item => item.rank === 'mega')
    },
    listOfKilo: function () {
      return this.items.filter(item => item.rank === 'kilo')
    },
    listOfInKind: function () {
      return this.items.filter(item => item.rank === 'in-kind')
    }
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Zilla+Slab&display=swap');
@import "bulma/bulma.sass";
$heading-font: "Caveat Brush";
//Desktop CSS:

#sponzoButtonWrapper {
  display: inline-block;
  margin: auto;
}
#sponzaButton {
  vertical-align: top;
  transition-duration: 0.3s;
  width: auto;
  background: #2F4246;
  border-radius: 120px;
  color: white;
  margin: auto 10px;
  margin-top: 10px;
  width: 311px;
  height: 48px;
  font-family: Zilla Slab;
  font-style: normal;
  font-weight: 600;
  font-size: 1.3em;
  line-height: 31px;
  color: #E9E8E0;
}
#sponzaButton:hover {
  transform: scale(1.1);
}
h2 {
  font-family: $heading-font;
  font-size: 48px;
  line-height: 60px;
}
.sponsor-title {
  font-family: Zilla Slab;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 37px;
  letter-spacing: 0.05em;
  color: #2F4246;
  margin-bottom: 20px;
}
.sponsorCategory {
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.sponsorWrapper {
  margin: 30px;
}
.sponza {
  margin-top: 5%;
  text-align: center;
}
//Mobile CSS:
@include until($tablet) {
  #sponzaButton {
  width: 50%;
  height: 48px;
  font-size: 1em;
  }
  .sponsorCategory {
    flex-direction: column;
  }
  .sponsorWrapper {
    max-width: 300px;
    margin: 15px;
  }
}
</style>
