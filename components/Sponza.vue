<template>
  <div class="sponza">
    <p class="sponsor-title">
      Sponsors
    </p>
    <BecomeSponsorButton />
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
  </div>
</template>

<script>
import SponsorImage from '~/components/SponsorImage'
import BecomeSponsorButton from '~/components/becomeSponsorButton'
export default {
  components: { SponsorImage, BecomeSponsorButton },
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

h2 {
  font-family: $heading-font;
  font-size: 48px;
  line-height: 60px;
}
.sponsor-title {
  font-family: Zilla Slab;
  font-style: normal;
  font-size: 48px;
  line-height: 37px;
  font-weight: bold;
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
  .sponsorCategory {
    flex-direction: column;
  }
  .sponsorWrapper {
    max-width: 300px;
    margin: 15px;
  }
}
</style>
