<template>
  <div class="container">
    <h1 class="faq-title">
      FAQ
    </h1>
    <div class="columns">
      <!-- Left column begin -->
      <div class="column is-half is-multiline">
        <!--  -->
        <p class="label">
          General
        </p>
        <div v-for="item in sortedItems" :key="`General-${item.question}`">
          <div v-if="item.selected && item.category == 'General'">
            <button @click="openSesame" class="accordion">
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
          Teams &amp; Projects
        </p>
        <div v-for="item in items" :key="`Teams-${item.question}`">
          <div v-if="item.selected && item.category == 'Teams'">
            <button @click="openSesame" class="accordion">
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
          Logistics
        </p>
        <div v-for="item in items" :key="`Logistics-${item.question}`">
          <div v-if="item.selected && item.category == 'Logistics'">
            <button @click="openSesame" class="accordion">
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
@import url('https://fonts.googleapis.com/css?family=Arapey|Zilla+Slab:400,700&display=swap');
.container {
  width: 90%;
  margin: 0 auto;
}
.faq {
  margin-top: 5%;
}
.faq-title {
  font-family: 'Zilla Slab', serif;
  font-size: 48px;
  line-height: 37px;
  font-weight: bold;
  letter-spacing: 0.05em;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  color: transparent;
  -webkit-text-fill-color: transparent;
  background: #2F4246;
  margin-bottom: 3%;
  text-align: center;
}
.label {
  font-family: 'Zilla Slab', serif;
  color: #8ABAB5;
  font-weight: 600;
  font-size: 36px;
  margin-top: 15px;
}
//Desktop CSS:
button.accordion {
  background-color: transparent;
  color: #2F4246;
  border-radius: 12px;
  cursor: pointer;
  padding: 18px;
  width: 93%;
  margin: 10px auto;
  text-align: left;
  outline: none;
  border: 2px solid #2F4246;
  font-size: 20px;
  font-family: 'Arapey', serif;
  @include until($desktop) {
    width: 100%;
  }
}

button.accordion:after {
  content: url("~@/assets/arrow.svg");
  float: right;
}

button.accordion:after {
  float: right;
}

button.accordion.active:after {
  content: url("~@/assets/upside-down-arrow.svg");
}

button.accordion.active {
  border-bottom: none;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  margin-bottom: 0px;
}

.panel {
  padding: 18px;
  padding-top: 0;
  background: white;
  background-clip: text;
  color: #2F4246;
  display: none;
  overflow: hidden;
  border: 2px solid #2F4246;
  border-top: none;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
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
