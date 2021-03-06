<template>
  <div class="intro-section">
    <kinesis-container :duration="parallaxDelay" event="scroll" easing="cubic-bezier(0.250, 0.250, 0.750, 0.750)">
      <div :class="{visible: isTimeout}" class="header">
        <div class="header-content">
          <div class="mobile-h1-wrapper">
            <h1 class="mobile-h1">
              change the norm
            </h1>
          </div>
          <img
            id="cmdf-logo"
            alt="cmd-f logo"
            src="../assets/nwlogos/cmdf.png"
          >
          <p><strong>March 6-7, 2021</strong></p>
          <p>Check back in Feb for more information!</p>
          <a href="https://linktr.ee/nwplusubc" rel="noopener" target="_blank"><button class="hackerButton">Keep in Touch</button></a>
          <a v-if="mentorOpen" href="https://docs.google.com/forms/d/e/1FAIpQLScAldaf6ABAEI6rVNH6xjjmuBr_dq6fQFviKxMyTURNeV696g/viewform" rel="noopener" target="_blank">Interested in Mentoring?</a>
          <a v-if="volunteerOpen" href="https://docs.google.com/forms/d/e/1FAIpQLSeT1GHNpahF8hYyJiEneFzazKCJddT9M72a_-jmGdInP6NLHw/viewform" rel="noopener" target="_blank">I want to volunteer!</a>
        </div>
      </div>
      <div class="subheader">
        <div class="subheader-content">
          <kinesis-element
            :strength="textParallaxStrength"
            type="translate"
            axis="y"
          >
            <img
              id="white-logo"
              alt="cmd-f logo in white"
              src="../assets/nwlogos/cmdf-white.svg"
            >
            <p>Join us on International Women*'s Day at British Columbia's largest all-women* hackathon to explore new technologies and celebrate women* in tech!</p>
          </kinesis-element>
        </div>
        <div class="subheader-content-body">
          <kinesis-element
            :strength="textParallaxStrength"
            type="translate"
            axis="y"
          >
            <p id="subheader-body-main">
              We're here to break stereotypes and create a safe space for women* where they can learn new skills, build confidence, and discover a supportive community. Whether you're a first time hacker or a veteran, we want to help you take your next steps in tech. Come join us for a fun weekend of hacking with amazing workshops, social events, and food!
            </p>
          </kinesis-element>
          <kinesis-element
            :strength="textParallaxStrength"
            type="translate"
            axis="y"
          >
            <p id="acknowledgement">
              * The cmd-f team would like to acknowledge that "female" or "women" is not an accurate description for many people and may make some feel unwelcome. We use * to include cis and trans women, as well as non-binary, agender and intersex people.
            </p>
          </kinesis-element>
        </div>
        <kinesis-element
          :strength="backgroundParallaxStrength"
          type="translate"
          axis="y"
        >
          <img
            id="background-graphic"
            alt="Person cheering on mountain"
            src="../assets/graphics/mountain-and-person.svg"
          >
        </kinesis-element>
        <kinesis-element
          :strength="foregroundParallaxStrength"
          type="translate"
          axis="y"
        >
          <img
            id="foreground-graphic"
            alt="A mountain and a lake"
            src="../assets/graphics/foreground.png"
          >
        </kinesis-element>
      </div>
    </kinesis-container>
  </div>
</template>

<script>
import Vue from 'vue'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

Vue.component('kinesis-container', KinesisContainer)
Vue.component('kinesis-element', KinesisElement)
export default {
  props: {
    isTimeout: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    volunteerOpen: {
      type: Boolean,
      default: () => false
    },
    mentorOpen: {
      type: Boolean,
      default: () => false
    }
  },
  data: function () {
    return {
      parallaxDelay: 150
    }
  },
  computed: {
    textParallaxStrength() {
      return screen.width > 768 ? -350 : -100
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
  background-color: #2F4246;
  height: auto;
}
.mobile-h1 {
  font-size: 36px;
  font-weight: bold;
  line-height: 40px;
}
.subheader-content {
  position: relative;
}
.subheader-content p {
  text-align: center;
  line-height: 34px;
  max-width: 740px;
  margin: 0 auto;
  font-size: 28px;
}
.subheader-content #white-logo {
  margin: 0 auto;
  display: block;
  margin-bottom: 20px;
  max-height: 77px;
}
#background-graphic {
  position: absolute;
  transform: translateY(-45%);
  top: 5vh;
  width: 100vw;
}
#foreground-graphic {
  position: absolute;
  transform: translateY(-35%);
  top: 5vh;
  width: 100vw;
}
.subheader-content-body {
  font-family: 'Arapey';
  color: #E9E8E0;
  font-size: 20px;
  font-weight: normal;
  line-height: 25px;
}
.subheader-content-body p#subheader-body-main:first-letter {
  font-size: 2.9em;
  display: block;
  float: left;
  line-height: .6;
  margin-right: 1px;
  margin-top: 7px;
}
.subheader-content-body #acknowledgement {
  color: #FFB5A6;
  font-size: 16px;
  min-width: 184px;
  line-height: 20px;
  margin-left: 12px;
}
.header {
  opacity: 0;
  transition: opacity 400ms linear 0ms;
  min-height: 77vw; // this is svg dimensions
  background-position: left top;
  background-repeat: no-repeat;
  background-size: 100vw;
}
.header-content {
  text-align: right;
}
.header-content a {
  display: block;
  text-decoration: underline;
  color: #2F4246;
  transition-duration: 0.3s;
  margin-bottom: 5px;
}
.header-content a:hover {
  color: #969D8D;
}
#cmdf-logo {
  width: 7vw;
}
.visible {
  opacity: 1;
}
.header .hackerButton {
  vertical-align: top;
  transition-duration: 0.3s;
  width: auto;
  background: #2F4246;
  border-radius: 120px;
  border: none;
  margin: 14px 0;
  width: 20vw;
  height: 48px;
  cursor: pointer;
  font-family: Zilla Slab;
  font-weight: bold;
  font-style: normal;
  font-size: 23px;
  color: #E9E8E0;
}
.header .hackerButton:hover {
  background: #969D8D;
}
.subheader {
  min-height: 100vh;
  color: white;
  padding-bottom: 10%;
}
.subheader-content {
  max-width: 900px;
  padding-top: 30vw;
  margin: auto;
}
//Desktop CSS:
@include from($tablet) {
  .mobile-h1 {
    display: none
  }
  .header {
    background-image: url("~@/assets/header.svg");
  }
  .header-content {
    padding: 31vw 14vw 0 0;
    width: 40vw;
    float: right;
  }
  .subheader {
    background: url("~@/assets/graphics/clouds.svg") left top no-repeat, linear-gradient(#2F4246, #E9E8E0 130%);
    background-size: 100vw;
  }
  .subheader-content #white-logo {
    margin-bottom: 56px;
    max-height: 150px;
  }
  .subheader-content-body p#subheader-body-main {
  margin-right: 12px;
}
  .subheader-content-body {
    max-width: 525px;
    display: flex;
    flex-direction: row;
    margin: 40px auto;
    margin-bottom: 0;
  }
}
//Mobile CSS:
@include until($tablet) {
  .mobile-h1 {
    display: block;
    width: 25vw;
  }
  .intro-section {
    font-size: 16px;
    line-height: 20px;
  }
  .header .hackerButton {
    font-size: 16px;
    line-height: 20px;
    width: 40vw;
    height: 36px;
    margin: 7px 0;
  }
  .header {
    background-image: url("~@/assets/mobile-header.svg");
    min-height: 170vw; // the bg image is height compared to width
    background-size: 100vw;
  }
  .header-content {
    text-align: left;
    padding: 25vw 0 0 4vw;
    width: 56vw;
  }
  #cmdf-logo {
    width: 15vw;
    margin-top: 8px;
    margin-bottom: 30px;
    display: block;
  }
  .subheader {
    background: url("~@/assets/graphics/clouds-mobile.svg") left top no-repeat,linear-gradient(#2F4246, #E9E8E0 160%);
    background-size: 100vw;
    padding-bottom: 15%;
  }
  .subheader-content p {
  line-height: 22px;
  min-width: 300px;
  width: 80%;
  font-size: 18px;
  margin: 20px auto;
  }
  #background-graphic {
    top: 0vh;
  }
  #foreground-graphic {
    top: 0vh;
  }
  .subheader-content-body {
    min-width: 275px;
    width: 80%;
    margin: 10px auto;
  }
  .subheader-content-body #acknowledgement {
    width: 100%;
    margin: 10px auto;
  }
}
// end of life smol iphones
@include until(323px) {
  .mobile-h1 {
    font-size: 28px;
    line-height: 30px;
  }
  .header-content {
    text-align: left;
    padding: 20vw 0 0 3vw;
    width: 56vw;
  }
  #cmdf-logo {
    margin-bottom: 25px;
  }
}
</style>
