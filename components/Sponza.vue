<template>
  <div class="sponza">
    <p class="sponsor-title">
      Sponsors
    </p>
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
@import "bulma/bulma.sass";
$heading-font: "Caveat Brush";
//Desktop CSS:
.becomeSponsor {
  transition-duration: 0.3s;
  width: auto;
}
.becomeSponsor:hover {
  transform: scale(1.1);
}
h2 {
  font-family: $heading-font;
  font-size: 48px;
  line-height: 60px;
}
.sponsor-title {
  font-family: Apercu Pro;
  font-size: 36px;
  line-height: 37px;
  letter-spacing: 0.05em;
  font-weight: bold;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  color: transparent;
  -webkit-text-fill-color: transparent;
  background: -webkit-linear-gradient(180deg, #91e9ee 0%, #06c1c0 100%);
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
  .sponsorCategory {
    flex-direction: column;
  }
  .sponsorWrapper {
    max-width: 300px;
    margin: 15px;
  }
}
</style>
