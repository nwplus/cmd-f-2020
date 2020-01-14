<template>
  <div class="mainContainer">
    <div v-for="item in sortedEvents" :key="item.order">
      <div
        class="columns is-desktop is-vcentered white singleEvent"
        :class="{ flipped: isFlipped(item) }"
      >
        <img
          v-if="item.title === 'Connect, .Collaborate, and Create'"
          id="about-graphic"
          class="column imgResize graphic"
          src=""
        >
        <img
          v-else-if="isWestCoast(item.title)"
          id="smiley-graphic"
          class="column imgResize graphic"
          src=""
        >
        <div class="column allEvents" :class="{ flipped: isFlipped(item) }">
          <div v-if="item.title === 'Connect, .Collaborate, and Create'" id="focus">
            <h1>nwHacks 2020</h1>
            <p>Western Canada's Largest Hackathon</p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScvpElp3ugHdV0wMT-FBGSGZ4DYC4ecQ1fsXM4d-J238eK_Dg/viewform "
              target="blank"
              rel="noopener"
            >
              <button class="button">Become a Mentor</button>
            </a>
            <a
              href="https://forms.gle/qRECZF3fzJPGYfc1A"
              target="blank"
              rel="noopener"
            >
              <button class="button">Become a Volunteer</button>
            </a>
          </div>
          <div class="titleParts" :class="{centered: isWestCoast(item.title)}">
            <h2
              v-for="titlePart in item.title.split('.')"
              :key="titlePart"
              class="title"
              :class="{equalsSymbols: isEqualsSymbols(titlePart)}"
            >
              {{ titlePart }}
            </h2>
          </div>
          <p class="events">
            {{ item.blurb }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import orderBy from 'lodash.orderby'
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  computed: {
    sortedEvents: function () {
      return orderBy(this.items, 'order')
    }
  },
  methods: {
    isFlipped(item) {
      return item.title === 'Connect, .Collaborate, and Create'
    },
    isWestCoast(title) {
      return title === '"WEST COAST" .== ."BEST COAST"'
    },
    isEqualsSymbols(titlePart) {
      return titlePart.trim() === '=='
    }
  }
}
</script>

<style lang="scss" scoped>
@import "bulma/bulma.sass";
$heading-color: #f9c2e3;
$body-color: #69dde1;
$red: #ff7676;
$heading-font: "Apercu Pro", sans-serif;
$body-font: "Apercu Pro", sans-serif;
$button-text-color: #262662;
.mainContainer {
  justify-content: right;
}
#focus {
  text-align: right;
  margin-bottom: 20px;
  button {
    background: linear-gradient(180deg, #7dc8de 50.1%, #643198 164.06%);
    border-radius: 11px;
    border: none;
    color: $button-text-color;
    font-family: $body-font;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    padding: 0 15px;
    height: 50px;
    transition-duration: 0.5s;
    @include until($desktop) {
      display: block;
      margin: 13px auto;
    }
    @include from($desktop) {
      margin: 5% 2%;
    }
  }
  button:hover {
    transform: scale(1.1);
  }
  h1 {
    font-size: 48px;
    line-height: 60px;
  }
  h1,
  p {
    font-weight: bold;
    background: -webkit-linear-gradient(270deg, #91e9ee 0%, #06c1c0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    letter-spacing: 0.05em;
    font-size: 24px;
  }
  @include until($desktop) {
    h1 {
      font-size: 36px;
      line-height: 37px;
      margin: 5% 5%;
    }
    p {
      line-height: 103.3%;
      margin: 5% 5%;
    }
    text-align: center;
    margin-bottom: 50px;
  }
}

#events .singleEvent {
  margin: 7%;
  @include until($desktop) {
    img {
      margin: 0 auto;
    }
    h2 {
      text-align: center;
    }
    #smiley-graphic {
      margin-bottom: 30px;
    }
  }
  @include from($desktop) {
    margin-top: 0;
    h2,
    p {
      margin: 0;
    }
    #smiley-graphic {
      transform: translateY(100px);
    }
  }
}

#events .singleEvent.flipped {
  @include from($desktop) {
    display: flex;
    flex-direction: row-reverse;
    h2,
    p {
      text-align: right;
      margin: 0;
    }
    margin-bottom: 76px;
    max-height: 500px;
    #about-graphic {
      transform: translateY(-170px);
    }
  }
}
.allEvents {
  @include from($desktop) {
    margin-left: 47px;
  }
}

.allEvents.flipped {
  @include from($desktop) {
    margin-right: 47px;
    margin-left: 0px;
  }
}

.allEvents .title {
  color: $heading-color;
  font-family: $heading-font;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 37px;
  margin-bottom: 0;
  letter-spacing: 0.05em;
}

h2.title {
  display: table;
  @include until($desktop) {
    display: block;
  }
}

.titleParts {
  display: inline-block;
  margin-bottom: 10px;
  @include until($desktop) {
    display: block;
  }
}

.flipped .titleParts {
  @include from($desktop) {
    display: block;
  }
}

.flipped .titleParts h2.title {
  @include from($desktop) {
    display: block;
    text-align: right;
  }
}

.title.equalsSymbols {
  display: block;
  margin: 0 auto;
}

.centered {
  text-align: center;
}
.events {
  color: $body-color;
  font-family: $body-font;
  font-size: 20px;
  line-height: 28px;
  margin: 0;
  width: 100%;
}
</style>
