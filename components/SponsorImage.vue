<template>
  <a :href="formatURL(item.url)" class="link" target="_blank" rel="noopener noreferrer">
    <img
      :class="{[item.rank]: true}"
      :src="item.imageURL"
      :alt="item.name"
    >
  </a>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatURL(url) {
      if (!url.includes('http')) {
        return `http://${url}`
      } else {
        return url
      }
    }
  }
}
</script>
<style scoped lang="scss">
@import "bulma/bulma.sass";

img {
  margin: auto;
  display: block;
  transition-duration: 0.2s;
}

img:hover {
  transform: scale(1.08);
}

.tera {
  min-width: 480px;
  max-width: 500px;
  max-height: 260px;
}
.giga {
  min-width: 330px;
  max-width: 350px;
  max-height: 240px;
}
.mega {
  min-width: 280px;
  max-width: 300px;
  max-height: 220px;
}
.kilo {
  min-width: 230px;
  max-width: 250px;
  max-height: 200px;
}
.in-kind {
  min-width: 150px;
  max-width: 150px;
  max-height: 150px;
}
//Mobile CSS:
@include until($tablet) {
  img {
    display: inline;
    max-width: 200px !important;
        min-width: unset !important;
  }
}
</style>
