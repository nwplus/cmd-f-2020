<template>
  <div class="mainContainer ">
    <div class="headerText">
      Main Values
    </div>
    <div class="subText">
      cmd-f was established according to our 3 main values:
    </div>
    <div class="columns is-3-tablet">
      <div v-for="item in sortedEvents" :key="item.order">
        <div
          class="events column"
        >
          <img :src="item.imageLink" class="images">
          <div class="title">
            {{ item.title }}
          </div>
          {{ item.text }}
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
@import url('https://fonts.googleapis.com/css?family=Arapey|Zilla+Slab:400,700&display=swap');
.mainContainer {
  margin: 0% auto 50px auto;
}

.events {
  text-align: center;
}

.images {
  max-width: 250px;
  max-height: 250px;
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
</style>
