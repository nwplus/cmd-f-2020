<template>
  <div class="wrapper">
    <a :href="url" :class="`but-wrapped ${!disabled ? 'hoverable' : ''}`">
      <p :class="`but-text ${disabled ? 'disabled' : ''}`">{{ title }}</p>
      <img
        src="~@/assets/button.png"
        :class="`but ${disabled ? 'disabled' : ''} ${isWide ? 'wide' : ''}`"
      >
    </a>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Hello World'
    },
    url: {
      type: String,
      default: '#'
    },
    isWide: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  text-align: center;
  display: inline-block;
  margin: 0 5px 0 5px;
}
.but-wrapped {
  display: inline-block;
  transition: all 0.2s ease-in-out;
  margin: auto;
  width: 142px;
  height: 53px;
  color: #425e96;
}
.hoverable:hover {
  transform: scale(1.1);
}
.wide {
  transform: scaleX(1.2);
}
.but-text {
  position: relative;
  top: 20px;
  z-index: 3;
}
.disabled {
  color: grey;
  pointer-events: none;
  cursor: default;
}
.but {
  position: relative;
  margin-top: -20px;
  z-index: 0;
}
</style>
