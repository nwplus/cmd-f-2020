<template>
  <div id="main-page" style="position: relative; width: 100%;">
    <NavBar v-if="screenWidth > 768" id="navbar" :faq="faqFlag" />
    <section id="mainSection">
      <div class="mainContent">
        <Intro id="intro" :intro="intro" />
        <Events id="events" :items="events" />
        <img src="~@/assets/branch.png" class="branch">
        <FAQ v-if="faqFlag" id="faq" :items="FAQs" />
        <img src="~@/assets/birdAndBranch.png" class="bird-branch">
        <Sponza v-if="sponsorFlag" id="sponza" :items="sponsors" />
      </div>
    </section>
    <Footer :text="footer" />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import Intro from '~/components/Intro.vue'
import Sponza from '~/components/Sponza.vue'
import Footer from '~/components/Footer.vue'
import fireDb from '~/plugins/firebase.js'
import Events from '~/components/Events.vue'
import FAQ from '~/components/Faq.vue'
export default {
  components: {
    NavBar,
    Intro,
    Footer,
    Sponza,
    Events,
    FAQ
  },
  computed: {
    screenWidth() {
      return screen.width
    }
  },
  asyncData: async () => {
    const Sponsors = 'Sponsors'
    const Events = 'Events'
    const FAQ = 'Faq'
    // functions
    const getSponsorImage = async (sponsor) => {
      sponsor.imageURL = await fireDb.getImageUrl(sponsor.image)
      if (sponsor.altImage) {
        sponsor.altImageUrl = await fireDb.getImageUrl(sponsor.altImage)
      }
      return sponsor
    }
    // data
    const data = await fireDb.get()
    const listOfSponsors = await fireDb.get(Sponsors)
    const listOfEvents = await fireDb.get(Events)
    const FaqQuestions = await fireDb.get(FAQ)
    // Populate sponsors with their image urls
    const populatedSponsors = (
      await Promise.all(listOfSponsors.map(sponsor => getSponsorImage(sponsor)))
    ).filter(sponsor => sponsor.imageURL !== '')
    return {
      info: data.WelcomeText,
      sponsors: populatedSponsors,
      outro: data.OutroText,
      footer: data.FooterText,
      events: listOfEvents,
      intro: {
        text: data.IntroText,
        introButtonEnabled: data.IntroButtonEnabled,
        introLink: data.IntroButtonLink,
        signUpText: data.SignUpText
      },
      FAQs: FaqQuestions,
      ...data.featureFlags
    }
  }
}
</script>

<style lang="scss">
@import "bulma/bulma.sass";
//Desktop CSS:
@font-face {
  font-family: 'Zilla Slab';
  src: url(https://fonts.gstatic.com/s/zillaslab/v5/dFa6ZfeM_74wlPZtksIFajo6_Q.woff2) format('woff2');
}
@font-face {
  font-family: 'Arapey';
  src: url(https://fonts.gstatic.com/s/arapey/v8/-W__XJn-UDDA2RCKYNod.woff2) format('woff2');
}
#main-page {
  background-color: #e9e8e0;
}
@include from($tablet) {
  #mainSection {
    margin: auto;
  }
}
.branch-image-container {
  position: relative;
}
.branch {
  margin-left: -10%;
  margin-top: -8%;
  width: 40%;
}
.bird-branch {
  margin-left: 70%;
  margin-top: -5%;
  margin-bottom: -100px;
  width: 40%;
}
//Mobile CSS:
@include until($tablet) {
  .branch {
    margin-left: 0;
    width: 60%;
  }
  .bird-branch {
    margin-left: 45%;
    width: 60%;
    margin-top: 0px;
    margin-bottom: 0;
  }
}
</style>
