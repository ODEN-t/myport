<template>
  <header class="header" :class="{ isScrolled: isScrolled }">
    <nav class="p-nav">
      <router-link class="p-nav__title" to="/">
        T.K
      </router-link>
      <ul class="p-nav__list">
        <li>
          <a href="" id="#profile" class="p-nav__anchor">
            Profile
          </a>
        </li>
        <li>
          <a href="" id="#profile" class="p-nav__anchor">
            Works
          </a>
        </li>
        <li>
          <a href="" id="#profile" class="p-nav__anchor">
            Skills
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
      isScrolled: '',
    };
  },
  mounted() {
    EventBus.$on('changeBg-event', this.change);
  },
  methods: {
    change(isScrolled) {
      this.isScrolled = isScrolled;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  z-index: 1;
  transition: all 1s linear;
  @include mq {
    height: 60px;
  }

  .p-nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    padding: 0 20px;
    @include mq(md) {
      padding: 0 25px;
      height: 60px;
    }
    @include mq {
      padding: 0 50px;
      height: 60px;
    }

    &__title {
      font-size: 20px;
      color: #fff;
      letter-spacing: 6px;
      display: flex;
      align-items: center;
      height: 50px;
      @include mq(gt-md) {
        font-size: 23px;
        letter-spacing: 8px;
        height: 60px;
      }
    }

    &__list {
      height: 50px;
      @include mq {
        height: 60px;
      }

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
      color: #fff;
      letter-spacing: 1px;
      height: 50px;
      display: flex;
      align-items: center;
      @include mq(gt-md) {
        font-size: 17px;
        letter-spacing: 2px;
        height: 60px;
      }
    }
  }
}

.header.isScrolled {
  background-color: rgba(13, 13, 13, 0.8);
}</style
>>
