<template>
  <div class="container">
    <h1 class="faq-title">
      Frequently Asked Questions
    </h1>
    <div class="columns">
      <!-- Left column begin -->
      <div class="column is-half is-multiline">
        <!--  -->
        <p class="label">
          🤔 General
        </p>
        <div v-for="item in sortedItems" :key="`General-${item.question}`">
          <div v-if="item.selected && item.category == 'General'">
            <button class="accordion" @click="openSesame">
              {{ item.question }}
            </button>
            <div class="panel">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
        <!--  -->
      </div>
      <!-- Left column end -->
      <!-- Right column begin -->
      <div class="column is-half is-multiline">
        <!-- logistics start -->
        <p class="label">
          💻 Teams &amp; Projects
        </p>
        <div v-for="item in items" :key="`Teams-${item.question}`">
          <div v-if="item.selected && item.category == 'Teams'">
            <button class="accordion" @click="openSesame">
              {{ item.question }}
            </button>
            <div class="panel">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
        <!-- logistics end -->
        <!-- logistics 2 start -->
        <p class="label">
          🎒 Logistics
        </p>
        <div v-for="item in items" :key="`Logistics-${item.question}`">
          <div v-if="item.selected && item.category == 'Logistics'">
            <button class="accordion" @click="openSesame">
              {{ item.question }}
            </button>
            <div class="panel">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
        <!-- logistics 2 end -->
      </div>
      <!-- Right column end -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  computed: {
    sortedItems() {
      return [...this.items].sort((a, b) => {
        if (a.question === 'What is a hackathon?') {
          return -1
        } else if (b.question === 'What is a hackathon?') {
          return 1
        } else {
          return 0
        }
      })
    }
  },
  methods: {
    openSesame: (e) => {
      e.target.classList.toggle('active')
      const panel = e.target.nextElementSibling
      if (panel.style.display === 'block') {
        panel.style.display = 'none'
      } else {
        panel.style.display = 'block'
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "bulma/bulma.sass";
@import url("https://fonts.googleapis.com/css?family=Caveat+Brush&display=swap");
@import url("https://fonts.googleapis.com/css?family=Apercu+Pro&display=swap");

.container {
  width: 90%;
  margin: 0 auto;
}
.faq {
  margin-top: 5%;
}
.faq-title {
  font-family: Apercu Pro;
  font-size: 36px;
  line-height: 37px;
  font-weight: bold;
  letter-spacing: 0.05em;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  color: transparent;
  -webkit-text-fill-color: transparent;
  background: -webkit-linear-gradient(180deg, #91e9ee 0%, #06c1c0 100%);
  margin-bottom: 3%;
  text-align: center;
}
.label {
  font-family: "Apercu Pro";
  color: #f9c2e3;
  font-size: 20px;
}
//Desktop CSS:
button.accordion {
  background-color: transparent;
  color: #06c1c0;
  // background: -webkit-linear-gradient(180deg, #91e9ee 0%, #06c1c0 100%);
  // background-clip: text;
  // -webkit-text-fill-color: transparent;
  // -webkit-text-stroke: 1px rgb(0, 0, 0);

  cursor: pointer;
  padding: 18px;
  width: 93%;
  // transition: 0.3s;
  margin: 10px auto;
  text-align: left;
  outline: none;
  border: 2px solid #06c1c0;
  // border-width: 3px;
  // border-image: -webkit-linear-gradient(180deg, #91E9EE 0%, #06C1C0 100%);
  border-radius: 5px;
  font-size: 18px;
  font-family: "Apercu Pro";
  font-weight: bold;
  @include until($desktop) {
    width: 100%;
  }
}

button.accordion:after {
  float: right;
}

button.accordion.active {
  border-bottom: none;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  margin-bottom: 0px;
}

button.accordion.active:after {
}
.panel {
  padding: 18px;
  padding-top: 0;
  // background-color: white;
  background: -webkit-linear-gradient(180deg, #91e9ee 0%, #06c1c0 100%);
  background-clip: text;
  color: #06c1c0;
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
  // image-rendering: -webkit-optimize-contrast;
  display: none;
  overflow: hidden;
  border: 2px solid #06c1c0;
  border-top: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  margin: 0 0;
  margin-bottom: 2%;
  width: 93%;
  @include until($desktop) {
    width: 100%;
  }
}
//Mobile CSS:
@include until($desktop) {
}
</style>
