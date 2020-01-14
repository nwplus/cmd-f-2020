<template>
  <a class="link" :href="formatURL(item.url)" target="_blank" rel="noopener noreferrer">
    <img
      :class="{hasAlt: item.altImageUrl, [item.rank]: true, default: !item.altImageUrl}"
      :src="item.imageURL"
      :alt="item.name"
    >
    <img
      v-if="item.altImageUrl"
      :class="{[item.rank]: true, altImage: true}"
      :src="item.altImageUrl"
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
.default {
  transition: 0.5s, -moz-filter 0.5s, -o-filter 0.5s, filter 0.5s;
  filter: brightness(0) invert(1);
}
img {
  display: block;
}
.default:hover {
  filter: none;
}
.link {
  display: block;
  position: relative;
}
.link img {
  transition: 0.5s, -moz-filter 0.5s, -o-filter 0.5s, filter 0.5s;
}
.link .hasAlt {
  opacity: 0;
}
.link:hover .hasAlt {
  opacity: 1;
}
.link .altImage {
  top: 0;
  left: 0;
  position: absolute;
  opacity: 1;
}
.link:hover .altImage {
  opacity: 0;
}
.tera {
  max-width: 400px;
  max-height: 260px;
}
.giga {
  max-width: 360px;
  max-height: 240px;
}
.mega {
  max-width: 320px;
  max-height: 220px;
}
.kilo {
  max-width: 280px;
  max-height: 200px;
}
.in-kind {
  max-width: 240px;
  max-height: 180px;
}
//Mobile CSS:
@include until($tablet) {
  img {
    display: inline;
    max-width: 200px !important;
  }
}
</style>
