<template>
  <main class="home">
    <section class="p-head js-head">
      <div class="p-head__wrap">
        <div class="p-head__background"></div>
        <h1>My Portforio</h1>
      </div>
    </section>

    <section class="p-contents p-contents--works">
      <div class="p-contents__wrap">
        <h2>Works</h2>
        <ul class="p-contents__workList">
          <li class="p-contents__workCards">
            <router-link to="airtravel">
              <img
                src="../assets/images/home/thumbnail_airtravel-min.png"
                alt=""
              />
              <div class="p-contents__workCards__textBox">
                <p>
                  架空の旅行会社のヨーロッパ旅行の特集ページを作成しました。魅力が伝わるように写真を多く使用しました。
                </p>
                <span class="p-contents__workCards__tag">Vue.js</span>
                <span class="p-contents__workCards__tag"
                  >OpenWeatherMap API</span
                >
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
// import AppIcon from '../components/AppIcon';
import EventBus from '../lib/EventBus';
export default {
  name: 'Home',
  // components: {
  //   AppIcon
  // },
  mounted: function() {
    this.textFadein();
    this.headerBgChange();
  },
  data: function() {
    return {
      title: 'My Portforio',
      description: 'T.Kのポートフォリオサイトです。Web制作がメインです。',
      size: 'medium',
      color: 'primary',
      isInKv: ''
    };
  },
  methods: {
    textFadein: function() {
      const targets = document.querySelectorAll('.js-fadeIn');
      const options = {
        root: null,
        rootMargin: '-50% 0px',
        threshold: 0
      };
      const whenIntersect = entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-onScreen');
            observer.unobserve(entry.target); //add後、監視停止
          }
        });
      };
      const observer = new IntersectionObserver(whenIntersect, options);
      targets.forEach(target => observer.observe(target));
    },
    emitToHeader(eventName, targetData, enterData) {
      let changedData = (targetData = enterData);
      EventBus.$emit(eventName, changedData); // EventBusを通じて兄弟コンポーネント Header.vue に変更を通知
    },
    headerBgChange() {
      const target = document.querySelector('.js-head');
      const options = {
        root: null,
        rootMargin: '',
        threshold: 0
      };
      const whenIntersect = entry =>
        entry[0].isIntersecting
          ? this.emitToHeader('changeBg-event', this.isInKv, true)
          : this.emitToHeader('changeBg-event', this.isInKv, false);
      const observer = new IntersectionObserver(whenIntersect, options);
      observer.observe(target);
    }
  },
  head: {
    meta: function() {
      return [
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description },
        { name: 'description', content: this.description }
      ];
    }
  }
};
</script>

<style lang="scss">
.home {
  .js-fadeIn {
    opacity: 0;
    transform: translateY(50px);
    transition: all 2s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .is-onScreen {
    opacity: 1;
    transform: translateY(0);
  }
  .p-head {
    width: 100%;
    height: 640px;
    position: relative;
    &__wrap {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      > h1 {
        font-size: 34px;
        text-align: center;
        letter-spacing: 0.1em;
        color: #eff0f3;
        position: absolute;
        top: 50%;
        right: 0;
        left: 0;
        transform: translateY(-50%);
        @include mq(md) {
          font-size: 50px;
        }
        @include mq {
          font-size: 60px;
        }
      }
    }
    &__background {
      background-image: url('../assets/images/home/mobile/oceanside-min.jpg');
      background-repeat: no-repeat;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: 30%;
      filter: brightness(0.7);
      @include mq(gt-md) {
        background-image: url('../assets/images/home/oceanside-min.jpg');
        background-position: 50% 80%;
      }
    }
  }
  .p-contents {
    width: 100%;
    background-color: $background;
    &--bgMain {
      background-color: $main;
    }
    &__wrap {
      color: $headLine;
      padding: 3em 1.5em;
      @include mq {
        max-width: 1300px;
        padding: 5em 2.5em;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      > h2 {
        width: 100%;
        font-size: 30px;
        letter-spacing: 0.1em;
        text-align: center;
        @include mq(gt-md) {
          font-size: 40px;
        }
      }
    }
    &__card {
      background-color: #ffffff;
      padding: 1.5em;
      margin-top: 1.5em;
      border-radius: 3px;
      @include mq {
        width: calc(50% - 0.75em);
        margin-top: 2.5em;
      }
      > h3 {
        color: $headLine;
        font-size: 22px;
        letter-spacing: 2px;
        line-height: 1.7;
        font-weight: 700;
        @include mq(gt-md) {
          font-size: 26px;
        }
      }
      > h3:nth-of-type(n + 2) {
        margin-top: 1.5em;
        @include mq(gt-md) {
          margin-top: 1em;
        }
      }
    }
    &__dataList {
      width: 100%;
      color: $paragraph;
      margin-top: 0.5em;
      @include mq(gt-md) {
        margin-top: 1em;
      }
    }
    &__dataWrap {
      font-size: 13px;
      font-weight: 200;
      line-height: 1.7;
      &:nth-of-type(n + 2) {
        margin-top: 1.2em;
        @include mq(gt-md) {
          margin-top: 1em;
        }
      }
      @include mq(gt-md) {
        font-size: 15px;
        display: flex;
        flex-wrap: wrap;
      }
      &--mobileFlex {
        @include mq(sm) {
          display: flex;
          flex-wrap: wrap;
        }
      }
    }
    &__dataTitle {
      font-size: 16px;
      font-weight: 700;
      @include mq(gt-md) {
        width: 35%;
      }
      @include mq {
        font-size: 17px;
      }
      &--letterSpaceWide {
        letter-spacing: 0.13em;
      }
      &--widthWide {
        width: 100%;
      }
      &--widthHalf {
        width: 50%;
      }
      &--alignCenter {
        display: flex;
        align-items: center;
      }
    }
    &__data {
      font-size: 14px;
      @include mq {
        font-size: 16px;
      }
      @include mq(gt-md) {
        width: 65%;
      }
      &--widthWide {
        width: 100%;
        margin-top: 0.25em;
        padding-left: 1em;
        text-indent: -1em;
      }
      &--widthHalf {
        @include mq(gt-md) {
          width: 50%;
        }
      }
    }
    svg[class^='svg-'] {
      padding: 0 0.2em;
    }
    &__workList {
      display: flex;
      flex-wrap: wrap;
      margin-top: 1.5em;
      @include mq {
        margin-top: 2.5em;
      }
    }
    &__workCards {
      background-color: #ffffff;
      width: 100%;
      border-radius: 8px;
      overflow: hidden;
      transition: transform 200ms ease;
      &:hover {
        box-shadow: 0 5px 15px -10px #000;
        transform: translate(0px, -4px);
      }
      @include mq(sm) {
        &:not(:first-of-type) {
          margin-top: 1.5em;
        }
      }
      @include mq(md) {
        width: calc(50% - 0.75em);
      }
      @include mq(gt-md) {
        &:not(:last-child) {
          margin-right: calc(0.75em * 3 / 2);
        }
      }
      @include mq {
        width: calc(33% - 0.75em);
      }
      &__textBox {
        padding: 0.5em 0.5em 1em;
        > p {
          font-size: 14px;
          color: $paragraph;
          margin-bottom: 0.5em;
          line-height: 1.6;
          @include mq {
            font-size: 16px;
          }
        }
      }
      &__tag {
        font-size: 12px;
        font-weight: 600;
        background: $secondary;
        color: #fff;
        padding: 0.4em;
        border-radius: 3px;
      }
      &__tag:not(:first-of-type) {
        margin-left: 0.5em;
      }
    }
    &__workCards--textContent {
      padding: 1em;
      > p {
        font-size: 16px;
        color: $paragraph;
        margin-bottom: 1.5em;
        line-height: 1.8;
        @include mq {
          font-size: 16px;
        }
      }
      > h4 {
        font-size: 20px;
        margin-bottom: 2em;
      }
      > h5 {
        font-size: 18px;
        margin-bottom: 0.5em;
      }
    }
  }
}
</style>
