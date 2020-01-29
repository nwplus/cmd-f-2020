<template>
  <div class="mainContainer ">
    <div class="headerText">
      Main Values
    </div>
    <div class="subText">
      cmd-f was established according to our 3 main values:
    </div>
    <div class="no-overflow columns is-3-tablet">
      <div v-for="item in sortedEvents" :key="item.order">
        <div
          class="events column"
        >
          <div class="image-container">
            <img :src="item.imageLink" class="image">
          </div>
          <h3 class="title">
            {{ item.title }}
          </h3>
          <p class="valuesText">
            {{ item.text }}
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
  }
}
</script>

<style lang="scss" scoped>
@import "bulma/bulma.sass";
.mainContainer {
  margin: 0% auto 50px auto;
  padding-top: 17%;
}

#scaledSection h3.title {
  margin-bottom: 12px; // #scaledSection to overwrite default 1.5rem
  text-align: center;
  display: block;
}

#scaledSection div.columns {
  display: flex;
  align-items: flex-start;
}

.valuesText {
  font-family: 'Arapey', serif;
  font-size: 20px;
  line-height: 25px;
  color: #2F4246;
}

.events {
  text-align: center;
  padding: 0;
}

div.columns {
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
}

div.events.column {
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.image-container {
  max-width: 250px;
  max-height: 250px;
  border: 2px solid blue;
  margin: 0 auto;
}
.image {
  width: 80%;
  height: 80%;
  margin: 0 auto;
}

.title {
  font-family: 'Zilla Slab', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  margin-bottom: 10px;
}

.headerText {
  font-family: 'Zilla Slab', serif;
  font-size: 48px;
  font-weight: 700;
  color: #2F4246;
  text-align: center;
}

.subText {
  font-family: 'Zilla Slab', serif;
  font-size: 28px;
  color: #2F4246;
  text-align: center;
  margin-bottom: 30px;
}
@include until($tablet){
  .no-overflow {
    max-width: 100vw;
  }
  .mainContainer {
    margin: 0% 10% 50px 10%;
  }
}
</style>
