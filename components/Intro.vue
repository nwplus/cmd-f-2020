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
        <img
          id="white-logo"
          alt="cmd-f logo in white"
          src="../assets/nwlogos/cmdf-white.svg"
        >
        <p>Join us on <strong>International Women*'s Day</strong> at British Columbia's first and largest all-female* hackathon to explore new technologies and celebrate women* in tech.</p>
      </div>
      <div class="subheader-content-body">
        <p id="subheader-body-main">
          We're here to break stereotypes and create a safe space for women* where they can learn new skills, build confidence, and discover a supportive community. Whether you're a first time hacker or a veteran, we want to help you take your next steps in tech. Come join us for a fun weekend of hacking with amazing workshops, social events, and food!
        </p>
        <p id="acknowledgement">
          * The cmd-f team would like to acknowledge that "female" or "women" is not an accurate description for many people and may make some feel unwelcome. We use * to include cis and trans women, as well as non-binary, agender and intersex people.
        </p>
      </div>
      <img
        alt="graphic under about section"
        src="../assets/graphics/about-bottom.svg"
      >
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
.subheader-content-body {
  font-family: 'Arapey';
  color: #E9E8E0;
  font-size: 20px;
  font-weight: normal;
  line-height: 25px;
}
.subheader-content-body p#subheader-body-main {
  margin-right: 12px;
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
  max-width: 184px;
  line-height: 20px;
  margin-left: 12px;
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
  .subheader {
    background: url("~@/assets/graphics/clouds.svg") left top no-repeat, linear-gradient(#2F4246, #E9E8E0 130%);
    background-size: 100vw;
  }
  .subheader-content #white-logo {
    margin-bottom: 56px;
    max-height: 150px;
  }
  .subheader-content-body {
    max-width: 525px;
    display: flex;
    flex-direction: row;
    margin: 40px auto;
  }
  .subheader-content-body p#subheader-body-main {
  max-width: 315px;
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
  .subheader {
    background: url("~@/assets/graphics/clouds-mobile.svg") left top no-repeat, #2F4246;
    background-size: 100vw;
  }
  .subheader-content p {
  line-height: 22px;
  max-width: 350px;
  font-size: 18px;
  margin: 20px auto;
  }

  .subheader-content-body {
    max-width: 325px;
    margin: 10px auto;
  }

  .subheader-content-body #acknowledgement {
    max-width: 325px;
    margin: 10px auto;
  }
}
</style>
