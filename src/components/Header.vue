<template>
  <header class="header" :class="{ isInKv: isInKv }" id="header">
    <nav class="p-nav">
      <router-link class="p-nav__title" to="/">
        T.K
      </router-link>
    </nav>
  </header>
</template>

<script>
import EventBus from '../lib/EventBus';

export default {
  name: 'Header',
  data() {
    return {
      isInKv: ''
    };
  },
  mounted() {
    EventBus.$on('changeBg-event', this.changeHeaderState);
  },
  methods: {
    changeHeaderState(isInKv) {
      this.isInKv = isInKv;
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  z-index: 9999;
  transition: all 0.2s linear;
  background-color: #0d0d0d;

  .p-nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    padding: 0 20px;
    @include mq(md) {
      padding: 0 25px;
    }
    @include mq {
      padding: 0 1.5em;
    }

    &__title {
      font-size: 20px;
      color: #eff0f3;
      letter-spacing: 6px;
      display: flex;
      align-items: center;
      height: 50px;
      @include mq(gt-md) {
        font-size: 23px;
        letter-spacing: 8px;
      }
    }
  }
}

.header.isInKv {
  background-color: transparent;
}
</style>
