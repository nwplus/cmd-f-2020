<template>
  <nav>
    <nav :class="{navbar: true, visible: visible}" role="navigation" aria-label="main navigation">
      <a
        href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=black"
        target="_blank"
        rel="noopener"
      >
        <img
          id="MLH-badge"
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-black.svg"
          alt="Major League Hacking 2020 Hackathon Season"
          class="navbar-item"
        ></a>
      <div id="navbar" class="navbar-menu">
        <div class="navbar-start" />
        <div class="navbar-end">
          <div class="buttons">
            <a v-scroll-to="'#events'" href="#" class="navbar-item">About</a>
            <a v-if="faq" v-scroll-to="'#faq'" href="#" class="navbar-item">FAQ</a>
            <a v-scroll-to="'#sponza'" href="#" class="navbar-item">Sponsors</a>
            <a href="https://2019.nwhacks.io/#/" rel="noopener" target="_blank" class="navbar-item">nwHacks 2019</a>
          </div>
          <a v-scroll-to="'#intro'" href="#" target="_blank" rel="noopener">
            <img
              id="navbar-logo"
              class="navbar-item"
              src="~@/assets/nwlogos/nwHacks_Logo.svg"
              alt="nwPlus logo"
            >
          </a>
        </div>
      </div>
    </nav>
  </nav>
</template>

<script>
export default {
  props: {
    faq: {
      required: true,
      type: Boolean
    }
  },
  data() {
    return {
      visible: true,
      scrollFunc: () => {}
    }
  },
  mounted() {
    this.scrollFunc = this.handleScroll()
    window.addEventListener('scroll', this.scrollFunc)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollFunc)
  },
  methods: {
    handleScroll() {
      let lastScroll = 0
      return (event) => {
        const scroll = window.pageYOffset || document.documentElement.scrollTop
        if (scroll <= 0) {
          this.visible = true
        } else if (scroll > lastScroll) {
          this.visible = false
        } else {
          this.visible = true
        }
        lastScroll = scroll
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "bulma/bulma.sass";

.navbar {
  background: none;
  color: rgba(1, 1, 1, 0);
  position: fixed;
  top: 0%;
  width: 100%;
  padding: 0;
  opacity: 0;
  transition: 0.5s;
}
.visible {
  opacity: 1;
}
.navbar-item {
    display: inline-block;
    text-decoration: none;
    font-size: 18px;
    padding: 0px 32px;
    color: #fff;
    padding-top: 15px;
}
.navbar-item::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #fff;
    transition: width .3s;
}
.navbar-item:hover::after {
    width: 100%;
}
a.navbar-item:hover,
a.navbar-item:focus,
a.navbar-item:focus-within {
  background: none;
  color: #fff
}
.buttons {
  margin-right: 78px;
  margin-top: -15px;
}
#MLH-badge {
  max-height: none;
  height: 120px;
  width: auto;
  top: -15%;
}
#navbar-logo {
  max-height: none;
  height: 45px;
  width: auto;
  box-sizing: border-box;
  padding: 2px 0 0 0;
  right: 100%;
  top: 25%;
}

.a {
  font-size: 24px;
}
.is-active .buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 0;
}
.is-active .buttons .navbar-item {
  color: #fff;
}

@include until ($desktop) {
  .navbar {
    background: none;
  }
  #MLH-badge {
    height: 100px;
    position: absolute;
    top: -15px;
    left: 0%;
  }
  #navbar-logo {
    height: 30px;
  }
}
</style>
