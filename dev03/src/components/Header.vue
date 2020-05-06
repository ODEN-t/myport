<template>
  <header class="header" :class="{ isInKv: isInKv }">
    <nav class="p-nav">
      <router-link class="p-nav__title" to="/">
        T.K
      </router-link>
      <ul class="p-nav__list">
        <li>
          <router-link to="kadel" id="" class="p-nav__anchor">
            kadel
          </router-link>
        </li>
        <li>
          <a href="" id="" class="p-nav__anchor">
            テスト
          </a>
        </li>
      </ul>
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
      padding: 0 50px;
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

    &__list {
      height: 50px;

      > li {
        display: inline-block;
      }

      > li:not(:last-child) {
        padding-right: 20px;
        @include mq(gt-md) {
          padding-right: 30px;
        }
      }
    }

    &__anchor {
      font-size: 14px;
      color: #eff0f3;
      letter-spacing: 1px;
      height: 50px;
      display: flex;
      align-items: center;
      @include mq(gt-md) {
        font-size: 17px;
        letter-spacing: 2px;
      }
    }
  }
}

.header.isInKv {
  background-color: transparent;
}
</style>
