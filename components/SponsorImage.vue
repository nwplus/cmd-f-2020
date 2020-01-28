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
      console.log(this.item.altImage)
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
  min-height: 210px;
  min-width: 350px;
  max-width: 400px;
  max-height: 260px;
}
.giga {
  min-height: 190px;
  min-width: 310px;
  max-width: 360px;
  max-height: 240px;
}
.mega {
  min-height: 170px;
  min-width: 270px;
  max-width: 320px;
  max-height: 220px;
}
.kilo {
  min-height: 150px;
  min-width: 230px;
  max-width: 280px;
  max-height: 200px;
}
.in-kind {
  min-height: 130px;
  min-width: 190px;
  max-width: 240px;
  max-height: 180px;
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
