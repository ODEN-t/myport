<template>
  <main class="KADeL">
    <div class="header">
      <h1 class="header-logo js-header-logo">
        <a href="">
          <svg
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 133.76 133.76"
          >
            <title>株式会社KADeL</title>
            <rect width="133.76" height="133.76" style="fill:#221f20"></rect>
            <polyline
              points="41.68 56.48 44.73 56.48 36.28 65.68 44.66 75.33 41.35 75.33 34.06 66.72 34.06 75.33 31.76 75.33 31.76 56.48 34.06 56.48 34.06 65.11 41.68 56.48"
              style="fill:#fff"
            ></polyline>
            <path
              d="M58.94,71h-8.5l-1.65,4.38H46.26l7.43-18.85h2l7.42,18.85H60.59L58.94,71M54.69,59.6l-3.45,9.27h6.91Z"
              style="fill:#fff"
            ></path>
            <path
              d="M66,56.48h6a8.57,8.57,0,0,1,6.08,2.63,9.76,9.76,0,0,1,0,13.47,9,9,0,0,1-6.64,2.75H66V56.48m5.4,16.63a6.39,6.39,0,0,0,5-2.16,7.49,7.49,0,0,0,1.93-5.25,6.78,6.78,0,0,0-2-5,7.1,7.1,0,0,0-5.08-2H68.29v14.4Z"
              style="fill:#fff"
            ></path>
            <path
              d="M96.08,72.83a7.23,7.23,0,0,1-5.64,2.81,6.49,6.49,0,0,1-5.07-2.11,7.16,7.16,0,0,1,0-9.44,6.16,6.16,0,0,1,4.68-2,6,6,0,0,1,4.72,2.1,8.11,8.11,0,0,1,1.83,5.54H85.91a4.4,4.4,0,0,0,1.5,2.69,4.28,4.28,0,0,0,3,1.12,5.13,5.13,0,0,0,4-2.08l1.64,1.36M94.19,67.9a4.07,4.07,0,0,0-1.29-2.7,4.22,4.22,0,0,0-2.85-1,3.74,3.74,0,0,0-3,1.16,4.58,4.58,0,0,0-1.18,2.55Z"
              style="fill:#fff"
            ></path>
            <polyline
              points="99.99 56.48 102.29 56.48 102.29 73.11 108.71 73.11 108.71 75.33 99.99 75.33 99.99 56.48"
              style="fill:#fff"
            ></polyline>
          </svg>
        </a>
      </h1>
    </div>

    <section class="lp-hero">
      <div class="lp-hero_text js-hero_text">
        <h2 v-html="handleNewLine(kadel.hero.title)"></h2>
        <h3>{{ kadel.hero.subTitle }}</h3>
        <a href="#smooth" class="lp-hero_text_scroll-btn">
          SCROLL
          <span></span>
        </a>
      </div>
      <figure class="lp-hero_figure"></figure>
    </section>

    <section class="lp-30th">
      <div class="lp-30th_text common-fadein js-fadein">
        <h2 v-html="handleNewLine(kadel.thirtyth.title)"></h2>
        <h3>{{ kadel.thirtyth.subTitle }}</h3>
        <p v-html="handleNewLine(kadel.thirtyth.leadText)"></p>
        <p>{{ kadel.thirtyth.textAnswer }}</p>
      </div>
      <ul class="lp-30th_images" id="smooth">
        <li
          class="common-fadein js-fadein"
          v-for="image in kadel.images.thirtyth"
          :key="image.src"
        >
          <img :src="require('@/' + image.src)" :alt="image.alt" />
        </li>
      </ul>
    </section>

    <section class="lp-design common-fadein js-fadein js-offset-pc">
      <span class="common-mark">
        <span>KADeL</span>
        <span>Design</span>
      </span>
      <h2 class="common-title" v-html="handleNewLine(kadel.design.title)"></h2>
      <p class="common-desc" v-html="handleNewLine(kadel.design.leadText)"></p>
      <div class="common-tab for-lg">
        <h3
          class="common-concept js-tab add-current-tab"
          v-html="handleNewLine(kadel.design.slideBlockA.tabText)"
        ></h3>
        <h3 class="common-concept js-tab">
          {{ kadel.design.slideBlockB.tabText }}
        </h3>
      </div>
      <div class="lp-design_content">
        <div class="lp-design_content_block add-active">
          <div class="lp-design_content_block_text">
            <h3 class="common-concept for-sp">
              理想をかたちに
            </h3>
            <p
              class="common-detail"
              v-html="handleNewLine(kadel.design.slideBlockA.text)"
            ></p>
          </div>
          <ul class="common-scroll-image lp-design_content_block_images">
            <li
              v-for="imageSet in kadel.images.design.slideBlockA"
              :key="imageSet.img"
            >
              <a :href="require('@/' + imageSet.modal)">
                <img :src="require('@/' + imageSet.img)" :alt="imageSet.alt" />
              </a>
            </li>
          </ul>
        </div>
        <div class="lp-design_content_block">
          <div class="lp-design_content_block_text">
            <h3 class="common-concept for-sp">
              繊細な住宅設計
            </h3>
            <p
              class="common-detail"
              v-html="handleNewLine(kadel.design.slideBlockB.text)"
            ></p>
          </div>
          <ul
            class="common-scroll-image lp-design_content_block_images js-offset-mobile-child"
          >
            <li
              v-for="imageSet in kadel.images.design.slideBlockB"
              :key="imageSet.img"
            >
              <a :href="require('@/' + imageSet.modal)">
                <img :src="require('@/' + imageSet.img)" :alt="imageSet.alt" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="lp-passive common-fadein js-fadein">
      <span class="common-mark">
        <span>KADeL</span>
        <span class="mod-small">環境共生住宅</span>
      </span>
      <h2 class="common-title">{{ kadel.passive.title }}</h2>
      <p class="common-desc" v-html="handleNewLine(kadel.passive.leadText)"></p>
      <div class="common-tab for-lg">
        <h3 class="common-concept js-tab add-current-tab">
          {{ kadel.passive.slideBlockA.tabText }}
        </h3>
        <h3 class="common-concept js-tab">
          {{ kadel.passive.slideBlockB.tabText }}
        </h3>
        <h3 class="common-concept js-tab">
          {{ kadel.passive.slideBlockC.tabText }}
        </h3>
      </div>
      <div class="lp-passive_content">
        <div class="lp-passive_content_block add-active">
          <div class="lp-passive_content_block_text">
            <h3 class="common-concept for-sp">パッシブデザイン</h3>
            <p
              class="common-detail"
              v-html="handleNewLine(kadel.passive.slideBlockA.text)"
            ></p>
            <figure class="js-offset-pc-child">
              <img
                class="passiveImage"
                :src="require('@/' + kadel.images.passive.passiveFigure.img)"
                :alt="kadel.images.passive.passiveFigure.alt"
              />
            </figure>
          </div>
          <ul class="common-scroll-image lp-passive_content_block_images">
            <li
              v-for="imageSet in kadel.images.passive.slideBlockA"
              :key="imageSet.img"
            >
              <a :href="require('@/' + imageSet.modal)">
                <img :src="require('@/' + imageSet.img)" :alt="imageSet.alt" />
              </a>
            </li>
          </ul>
        </div>

        <div class="lp-passive_content_block">
          <div class="lp-passive_content_block_text">
            <h3 class="common-concept for-sp">四季と共に生きる</h3>
            <p
              class="common-detail"
              v-html="handleNewLine(kadel.passive.slideBlockB.text)"
            ></p>
          </div>
          <ul class="common-scroll-image lp-passive_content_block_images">
            <li
              v-for="imageSet in kadel.images.passive.slideBlockB"
              :key="imageSet.img"
            >
              <a :href="require('@/' + imageSet.modal)">
                <img :src="require('@/' + imageSet.img)" :alt="imageSet.alt" />
              </a>
            </li>
          </ul>
        </div>

        <div class="lp-passive_content_block">
          <div class="lp-passive_content_block_text">
            <h3 class="common-concept for-sp">土地を活かす</h3>
            <p
              class="common-detail"
              v-html="handleNewLine(kadel.passive.slideBlockC.text)"
            ></p>
          </div>
          <ul
            class="common-scroll-image lp-passive_content_block_images js-offset-mobile-child"
          >
            <li
              v-for="imageSet in kadel.images.passive.slideBlockC"
              :key="imageSet.img"
            >
              <a :href="require('@/' + imageSet.modal)">
                <img :src="require('@/' + imageSet.img)" :alt="imageSet.alt" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="lp-support common-fadein js-fadein js-offset-pc">
      <span class="common-mark mod-supportPart_mark">
        <span>KADeL</span>
        <span>Support</span>
      </span>
      <h2 class="common-title" v-html="handleNewLine(kadel.support.title)"></h2>
      <p class="common-desc" v-html="handleNewLine(kadel.support.leadText)"></p>
      <div class="common-tab for-lg">
        <h3 class="common-concept js-tab add-current-tab">
          {{ kadel.support.slideBlockA.tabText }}
        </h3>
        <h3 class="common-concept js-tab">
          {{ kadel.support.slideBlockB.tabText }}
        </h3>
        <h3 class="common-concept js-tab">
          {{ kadel.support.slideBlockC.tabText }}
        </h3>
      </div>
      <div class="lp-support_content">
        <div class="lp-support_content_block add-active">
          <div class="lp-support_content_block_text">
            <h3 class="common-concept for-sp">土地探し</h3>
            <p
              class="common-detail"
              v-html="handleNewLine(kadel.support.slideBlockA.text)"
            ></p>
          </div>
          <ul class="common-scroll-image lp-support_content_block_images">
            <li
              v-for="imageSet in kadel.images.support.slideBlockA"
              :key="imageSet.img"
            >
              <a :href="require('@/' + imageSet.modal)">
                <img :src="require('@/' + imageSet.img)" :alt="imageSet.alt" />
              </a>
            </li>
          </ul>
        </div>

        <div class="lp-support_content_block">
          <div class="lp-support_content_block_text">
            <h3 class="common-concept for-sp">インテリア</h3>
            <p
              class="common-detail"
              v-html="handleNewLine(kadel.support.slideBlockB.text)"
            ></p>
          </div>
          <ul class="common-scroll-image lp-support_content_block_images">
            <li
              v-for="imageSet in kadel.images.support.slideBlockB"
              :key="imageSet.img"
            >
              <a :href="require('@/' + imageSet.modal)">
                <img :src="require('@/' + imageSet.img)" :alt="imageSet.alt" />
              </a>
            </li>
          </ul>
        </div>

        <div class="lp-support_content_block">
          <div class="lp-support_content_block_text">
            <h3 class="common-concept for-sp">長期保証</h3>
            <p
              class="common-detail"
              v-html="handleNewLine(kadel.support.slideBlockC.text)"
            ></p>
          </div>
          <ul
            class="common-scroll-image lp-support_content_block_images js-offset-mobile-child"
          >
            <li
              v-for="imageSet in kadel.images.support.slideBlockC"
              :key="imageSet.img"
            >
              <a :href="require('@/' + imageSet.modal)">
                <img :src="require('@/' + imageSet.img)" :alt="imageSet.alt" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section
      class="lp-awards common-fadein js-changeStart js-fadein js-offset-pc"
    >
      <h2 class="common-mark mod-awards-mark" v-html="kadel.awards.title"></h2>
      <dl class="lp-awards_data-list">
        <slot v-for="awards in kadel.awards.awardsList">
          <dt
            class="lp-awards_data-list_title"
            :key="awards.year"
            v-html="handleNewLine(awards.year)"
          ></dt>
          <dd
            class="lp-awards_data-list_data"
            :key="awards.content"
            v-html="handleNewLine(awards.content)"
          ></dd>
        </slot>
      </dl>

      <div class="lp-awards_content">
        <div class="lp-awards_content_block add-active">
          <div class="lp-awards_content_block_text">
            <h3
              class="js-contest-name"
              v-html="handleNewLine(kadel.awards.contest.slideBlockA.title)"
            ></h3>
            <dl class="lp-awards_content_block_text_data-list">
              <slot v-for="contest in kadel.awards.contest.slideBlockA.data">
                <dt :key="contest.title">{{ contest.title }}</dt>
                <dd :key="contest.content">{{ contest.content }}</dd>
              </slot>
            </dl>
          </div>
          <ul class="lp-awards_content_block_images common-scroll-image">
            <li
              v-for="imageSet in kadel.images.awards.slideBlockA"
              :key="imageSet.img"
            >
              <a :href="require('@/' + imageSet.modal)">
                <img :src="require('@/' + imageSet.img)" :alt="imageSet.alt" />
              </a>
            </li>
          </ul>
        </div>

        <div class="lp-awards_content_block">
          <div class="lp-awards_content_block_text">
            <h3
              class="js-contest-name"
              v-html="handleNewLine(kadel.awards.contest.slideBlockB.title)"
            ></h3>
            <dl class="lp-awards_content_block_text_data-list">
              <slot v-for="contest in kadel.awards.contest.slideBlockB.data">
                <dt :key="contest.title">{{ contest.title }}</dt>
                <dd :key="contest.content">{{ contest.content }}</dd>
              </slot>
            </dl>
          </div>
          <ul class="lp-awards_content_block_images common-scroll-image">
            <li
              v-for="imageSet in kadel.images.awards.slideBlockB"
              :key="imageSet.img"
            >
              <a :href="require('@/' + imageSet.modal)">
                <img :src="require('@/' + imageSet.img)" :alt="imageSet.alt" />
              </a>
            </li>
          </ul>
        </div>

        <div class="lp-awards_content_block">
          <div class="lp-awards_content_block_text">
            <h3
              class="js-contest-name"
              v-html="handleNewLine(kadel.awards.contest.slideBlockC.title)"
            ></h3>
            <dl class="lp-awards_content_block_text_data-list">
              <slot v-for="contest in kadel.awards.contest.slideBlockC.data">
                <dt :key="contest.title">{{ contest.title }}</dt>
                <dd :key="contest.content">{{ contest.content }}</dd>
              </slot>
            </dl>
          </div>
          <ul class="lp-awards_content_block_images common-scroll-image">
            <li
              v-for="imageSet in kadel.images.awards.slideBlockC"
              :key="imageSet.img"
            >
              <a :href="require('@/' + imageSet.modal)">
                <img :src="require('@/' + imageSet.img)" :alt="imageSet.alt" />
              </a>
            </li>
          </ul>
        </div>

        <div class="lp-awards_content_block">
          <div class="lp-awards_content_block_text">
            <h3
              class="js-contest-name"
              v-html="handleNewLine(kadel.awards.contest.slideBlockD.title)"
            ></h3>
            <dl class="lp-awards_content_block_text_data-list">
              <slot v-for="contest in kadel.awards.contest.slideBlockD.data">
                <dt :key="contest.title">{{ contest.title }}</dt>
                <dd :key="contest.content">{{ contest.content }}</dd>
              </slot>
            </dl>
          </div>
          <ul class="lp-awards_content_block_images common-scroll-image">
            <li
              v-for="imageSet in kadel.images.awards.slideBlockD"
              :key="imageSet.img"
            >
              <a :href="require('@/' + imageSet.modal)">
                <img :src="require('@/' + imageSet.img)" :alt="imageSet.alt" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ul class="lp-awards_nav for-lg">
        <li class="nav-btn js-tab js-nav add-current-nav"></li>
        <li class="nav-btn js-tab js-nav"></li>
        <li class="nav-btn js-tab js-nav"></li>
        <li class="nav-btn js-tab js-nav"></li>
      </ul>
    </section>

    <section class="lp-staff js-changeEnd">
      <h2 v-html="kadel.staff.title"></h2>
      <p
        class="common-fadein js-fadein"
        v-html="handleNewLine(kadel.staff.leadText)"
      ></p>
      <ul class="lp-staff_list">
        <li
          class="common-fadein js-fadein"
          v-for="staff in kadel.staff.staffData"
          :key="staff.name"
        >
          <div class="staff-main">
            <h3 v-html="staff.name"></h3>
            <p v-html="handleNewLine(staff.feature)"></p>
          </div>
          <figure class="staff-picture">
            <img :src="require('@/' + staff.figure)" :alt="staff.alt" />
          </figure>
        </li>
      </ul>
    </section>

    <div class="modal-bg js-modal-bg"></div>
    <div class="modal js-modal">
      <div class="outer">
        <figure class="image-holder">
          <button type="button" class="close">×</button>
        </figure>
      </div>
    </div>
  </main>
</template>

<script>
import kadelData from '../assets/kadel.json';

export default {
  data() {
    return {
      kadel: kadelData
    };
  },
  methods: {
    handleNewLine: function(str) {
      return str
        .replace(/\n/g, '<br class="for-pc">')
        .replace(/\r/g, '<br class="for-sp">')
        .replace(/\f/g, '<br>');
    }
  }
};
</script>

<style lang="scss">
.KADeL {
  @import url('https://fonts.googleapis.com/css?family=Ubuntu+Condensed&display=swap');
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Yu Gothic',
    YuGothic, 'Hiragino Kaku Gothic ProN', メイリオ, sans-serif;
  padding-top: 50px;
  color: rgb(38, 38, 38);
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.1em;
  line-height: 1.7;
  background-color: #fff;
  transition: background-color 0.85s ease-in-out, color 0.85s ease-in-out;
  border: 10px solid #fff;
  position: relative;
  z-index: 1500;

  // min-width: 769px
  .for-pc {
    display: none !important;
    @include mq(kadel-gt-md) {
      display: block !important;
    }
  }
  // max-width: 768px
  .for-sp {
    display: none !important;
    @include mq(kadel-sm) {
      display: block !important;
    }
  }
  // min-width: 1025px
  .for-lg {
    display: none !important;
    @include mq(kadel-lg) {
      display: block !important;
    }
  }
  @include mq(kadel-gt-md) {
    padding-top: 60px;
    border: 20px solid #fff;
    &:before {
      background-color: #fff;
      content: '';
      display: block;
      height: 20px;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 999;
    }
  }

  img {
    display: block;
  }

  ul {
    list-style: none !important;
  }

  .add-bg-b {
    background-color: #000;
    color: #fff;
  }
  .header {
    position: relative;
    .header-logo {
      position: absolute;
      right: 10px;
      top: 10px;
      width: 80px;
      z-index: 10;
      // opacity: 0;
      transition: opacity 2s cubic-bezier(0.86, 0, 0.07, 1);
      transition-delay: 0.8s;

      & > a:hover {
        opacity: 0.7;
      }

      @include mq(kadel-gt-md) {
        right: 0;
        top: 0;
        width: 104px;
      }
    }

    .header-logo.add-load {
      opacity: 1;
    }
  }

  .common-mark {
    width: 120px;
    height: 120px;
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    border: solid 1px #000;
    font-family: 'Ubuntu Condensed', sans-serif;
    transition: border 0.85s ease-in-out;
    @include mq(kadel-lt-lg) {
      margin: 0 auto;
    }
    @include mq(kadel-lg) {
      width: 140px;
      height: 140px;
    }

    > span {
      display: block;
      width: 100%;
      font-size: 18px;
      font-weight: 400;
      @include mq(kadel-lg) {
        font-size: 20px;
      }
    }

    &:before,
    &:after {
      content: '';
      height: 20px;
      width: 1px;
      background-color: #262626;
      display: block;
    }

    &:before {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3D(-50%, -50%, 0) rotate(45deg);
    }

    &:after {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3D(-50%, -50%, 0) rotate(-45deg);
    }
  }

  .common-mark.add-border-w {
    border: solid 1px #fff;
  }

  .common-title {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.67;
    position: relative;
    @include mq(kadel-lt-lg) {
      text-align: center;
      margin-top: 40px;
    }
    @include mq(kadel-lg) {
      &:after {
        background: #262626;
        content: '';
        display: block;
        height: 1px;
        width: 200%;
        position: absolute;
        bottom: -8px;
        z-index: 11;
      }
    }
  }

  .common-desc {
    font-size: 18px;
    line-height: 2;
    @include mq(kadel-lt-lg) {
      text-align: center;
      letter-spacing: 1.4px;
      margin-top: 40px;
    }
    @include mq(kadel-lg) {
      position: absolute;
      font-size: 1.4vw;
      margin-top: 6.7%;
    }
  }

  .common-concept {
    display: flex;
    @include mq(kadel-lt-lg) {
      margin-top: 40px;
      padding-bottom: 7px;
      font-size: 18px;
      border-bottom: solid 1px #d5d5d5;
    }

    @include mq(kadel-lg) {
      font-size: 1.1vw;
      line-height: 2;
      cursor: pointer;
      padding: 0 24px;
      margin-bottom: -1px;
      &:hover {
        opacity: 0.7;
      }
    }
  }

  .common-detail {
    font-size: 14px;
    line-height: 2;
    letter-spacing: 1px;
    margin-top: 16px;
    @include mq(kadel-lt-lg) {
      padding-left: 0.5em;
    }
    @include mq(kadel-lg) {
      font-size: 1vw;
      margin: 0;
    }
  }

  .common-fadein {
    // opacity: 0;
    transform: translateY(50px);
    transition: transform 1.15s, opacity 1.15s;
  }

  .common-fadein-delay {
    // opacity: 0;
    transform: translateY(50px);
    transition: transform 1.15s, opacity 1.15s;
    transition-delay: 0.2s;
  }

  .common-fadein.add-in {
    opacity: 1;
    transform: translateY(0);
  }

  .common-fadein-delay.add-in {
    opacity: 1;
    transform: translateY(0);
  }

  .modal-bg {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.5);
    width: 100%;
    z-index: 1050;
    cursor: zoom-out;
  }

  .modal {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    @include mq(kadel-lg) {
      padding: 0 8px;
    }

    .outer {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: zoom-out;

      .image-holder {
        position: relative;
        display: inline-block;
        z-index: 1060;
      }

      img {
        display: block;
        width: auto;
        height: auto;
        padding: 40px 0;
        @include mq(kadel-lt-lg) {
          max-width: 95%;
          margin: 0 auto;
        }
        @include mq(kadel-lg) {
          max-width: 100%;
        }
      }

      .close {
        position: absolute;
        right: 2.5%;
        padding: 0;
        border-style: none;
        background-color: transparent;
        font-size: 28px;
        color: #000;
        opacity: 0.65;
        height: 44px;
        line-height: 44px;
        user-select: none;
        outline: 0;
        cursor: zoom-out;
        @include mq(kadel-lg) {
          right: 0;
        }
        &:hover {
          opacity: 1;
        }
      }
    }
  }

  .add-current-tab {
    border-bottom: solid 1px #000;
    opacity: 1;
  }

  @include mq(kadel-lt-lg) {
    .common-scroll-image {
      display: flex;
      margin-top: 24px;
      overflow-x: scroll;
      padding-bottom: 16px;

      &::-webkit-scrollbar {
        background-color: #acacac;
        height: 2px;
        border-radius: 10px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #262626;
      }

      img {
        height: 130px;
        width: auto;
        margin-right: 10px;
        @include mq(kadel-md) {
          width: 85vw;
        }
      }
    }
  }

  @include mq(kadel-lg) {
    .common-tab {
      border-bottom: 1px solid #d5d5d5;
      display: flex;
      font-size: 1.1vw;
      line-height: 2;
      padding-right: 80px;
      position: absolute;
      z-index: 400;
    }
  }

  /* ---------------------------
            lp-hero 
  ------------------------------ */
  .lp-hero {
    @include mq(kadel-gt-md) {
      display: flex;
      flex-direction: row-reverse;
      height: calc(
        100vh - 40px
      ); //CSS変数をサポートしていない場合のフォールバック値
      height: calc(
        (var(--vh, 1vh) * 100) - 40px
      ); //setPropertyHeight()で取得した変数vhを利用
      margin: 0 0 20px;
      width: 100%;

      &_figure {
        background: url('../assets/images/kadel/hero_img.jpg') no-repeat
          center/cover;
        transition: width 1.4s cubic-bezier(0.86, 0, 0.07, 1);
        width: 100%;
      }
    }

    &_text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      -ms-writing-mode: tb-rl;
      writing-mode: vertical-rl;
      position: relative;
      width: 100%;
      @include mq(kadel-sm) {
        align-items: center;
        height: 100%;
        background: url('../assets/images/kadel/hero_img-sp.jpg') no-repeat
          center/cover;
        color: #fff;
      }
      @include mq(kadel-gt-md) {
        justify-content: flex-end;
        padding-top: 120px;
        // opacity: 0;
        width: 0;
        transition: width 1.4s cubic-bezier(0.165, 0.84, 0.44, 1),
          opacity 1.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        transition-delay: 1s;
      }

      > h2 {
        font-size: 32px;
        line-height: 1.5;
        @include mq(kadel-sm) {
          letter-spacing: 1.4px;
          transition: opacity 1.3s ease, transform 1.3s ease;
          transition-delay: 0.8s;
          // opacity: 0;
          transform: translateY(-20px);
        }
      }

      > h3 {
        font-size: 20px;
        @include mq(kadel-sm) {
          padding-top: 6em;
          margin-left: -1.5em;
          margin-right: 0.5em;
          transition: opacity 1.1s ease, transform 1.1s ease;
          transition-delay: 0.75s;
          // opacity: 0;
          transform: translateY(-20px);
        }
        @include mq(kadel-gt-md) {
          text-align: right;
          margin: 0 1em 0 1.5em;
        }
      }

      @include mq(kadel-sm) {
        > h2.add-load,
        > h3.add-load {
          opacity: 1;
          transform: translateY(0);
        }
      }

      &_scroll-btn {
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 12px;
        font-weight: 400;
        font-family: 'Ubuntu Condensed', sans-serif;
        padding-bottom: 168px;
        z-index: 900;
        color: #fff;
        @include mq(kadel-gt-md) {
          color: #262626;
        }

        &:hover {
          opacity: 0.7;
        }

        > span {
          position: absolute;
          bottom: 0;
          left: 50%;
          content: '';
          height: 140px;
          width: 1px;
          overflow: hidden;

          &:after {
            content: '';
            display: block;
            height: 160px;
            width: 1px;
            position: absolute;
            background-color: #fff;
            -webkit-animation-duration: 2.6s;
            animation-duration: 2.6s;
            -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
            -webkit-animation-name: scrollLine;
            animation-name: scrollLine;
            -webkit-animation-timing-function: cubic-bezier(
              0.97,
              0.02,
              0.59,
              0.98
            );
            animation-timing-function: cubic-bezier(0.97, 0.02, 0.59, 0.98);
            @include mq(kadel-gt-md) {
              background-color: #262626;
            }
          }

          @keyframes scrollLine {
            0% {
              -webkit-transform: translateY(-100%);
            }
            5% {
              -webkit-transform: translateY(-100%);
            }
            25% {
              -webkit-transform: translateY(0);
            }
            55% {
              -webkit-transform: translateY(1%);
            }
            95% {
              -webkit-transform: translateY(100%);
            }
            100% {
              -webkit-transform: translateY(100%);
            }
          }
        }
      }
    }

    @include mq(kadel-gt-md) {
      &_text.add-load {
        opacity: 1;
        width: 17.6%;
      }
    }
  }

  /* ---------------------------
        lp-30th  START 
  ------------------------------ */

  .lp-30th {
    margin-top: 80px;
    @include mq(kadel-gt-md) {
      margin-top: 120px;
      display: flex;
      justify-content: space-between;
      flex-direction: row-reverse;
    }

    &_text {
      @include mq(kadel-gt-md) {
        width: 50%;
        margin-right: 3.5%;
        margin-top: 144px;
        padding-top: 32px;
        text-align: right;
      }

      > h2 {
        font-size: 7vw;
        text-align: center;
        @include mq(kadel-gt-md) {
          font-size: 32px;
          line-height: 1.5;
          margin-bottom: 40px;
          text-align: right;
        }
      }

      > h3 {
        font-size: 18px;
        font-family: 'Ubuntu Condensed', sans-serif;
        position: relative;
        @include mq(kadel-sm) {
          margin: 80px 0 32px;
          text-align: center;
        }
        @include mq(kadel-gt-md) {
          margin-bottom: 40px;
        }

        &:before {
          content: '';
          display: block;
          position: absolute;
          top: -40px;
          width: 1px;
          height: 40px;
          background-color: #262626;
          @include mq(kadel-sm) {
            left: 50%;
          }
          @include mq(kadel-gt-md) {
            top: 50%;
            width: calc(100% - 10em);
            height: 1px;
          }
        }
      }

      > p {
        font-size: 16px;
        text-align: center;
        line-height: 2.3;
        margin-bottom: 2em;
        @include mq(kadel-gt-md) {
          font-size: 1.3vw;
          text-align: right;
        }
      }
    }

    &_images {
      list-style: none !important;
      display: flex;
      margin-top: 80px;
      @include mq(kadel-gt-md) {
        width: 50%;
        margin-top: 0;
      }

      > li {
        width: calc(100% - 10px / 2);
        &:nth-child(2) {
          margin-top: 80px;
        }
        @include mq(kadel-sm) {
          &:nth-child(1) {
            margin-right: 10px;
          }
        }
        @include mq(kadel-gt-md) {
          width: 47%;
          margin-right: 3%;
          &:nth-child(2) {
            margin-top: 160px;
          }
        }
      }
    }
  }

  /* ---------------------------
        lp-design START
  ------------------------------ */

  .lp-design {
    margin-top: 80px;

    @include mq(kadel-lg) {
      position: relative;
      height: 65.204vw;
      margin-top: 160px;
      .common-mark {
        margin-left: 56px;
      }
      .common-title {
        position: absolute;
        left: 40px;
        top: 172px;
        &:after {
          position: absolute;
          bottom: -8px;
          width: 200%;
        }
      }
      .common-desc {
        margin-left: 23.5%;
        margin-top: 32.3%;
      }
      .common-tab {
        margin-left: 23.5%;
        margin-top: 42.9%;
      }

      &_content {
        position: relative;
        margin-left: auto;
        margin-top: -70px;
        width: 76.4%;
      }

      &_content_block {
        // opacity: 0;
        position: absolute;
        width: 100%;
        height: auto;

        &_text {
          position: absolute;
          top: 86%;
          overflow: hidden;
        }

        &_images {
          > li {
            margin-left: auto;
            overflow: hidden;
            line-height: 0;
            &:nth-child(1) {
              width: 100%;
              margin-bottom: 10px;
            }
            &:nth-child(2) {
              width: 31.1%;
              margin-top: 0.9%;
            }
            &:nth-child(3) {
              width: 21.9%;
              margin-right: 32.1%;
              margin-top: 0.9%;
            }
          }
        }
      }

      &_content_block.add-active {
        opacity: 1;
        z-index: 10;
      }
    }
  }

  /* ---------------------------
        lp-design END
  ------------------------------ */

  /* ---------------------------
        lp-passive START
  ------------------------------ */
  .lp-passive {
    .mod-small {
      font-size: 16px;
    }

    @include mq(kadel-lt-lg) {
      margin-top: 80px;
      .passiveImage {
        width: 46%;
        margin-top: 16px;
      }
    }

    @include mq(kadel-lg) {
      height: 56.673vw;
      position: relative;
      margin-top: 11.7%;
      .common-mark {
        position: absolute;
        left: 47.7%;
        margin-top: 3.9%;
      }
      .common-title::after {
        right: 0;
      }
      .common-tab {
        margin-left: 47.7%;
        margin-top: 32.3%;
      }

      > h2 {
        position: absolute;
        left: 47.7%;
        margin-top: 17%;
      }
      > p {
        position: absolute;
        left: 47.7%;
        margin-top: 23.5%;
      }

      &_content {
        position: relative;
      }

      &_content_block {
        opacity: 0;
        position: absolute;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row-reverse;

        &_text {
          overflow: hidden;
          padding-left: 2.9%;
          padding-top: 36.7%;
          width: 55.1%;
          > figure {
            width: 46%;
          }
        }

        &_images {
          width: 44.8%;
          > li {
            overflow: hidden;
            &:nth-child(1) {
              width: 37.3%;
              margin-bottom: 10px;
            }
            &:nth-child(2) {
              width: 37.3%;
              margin-top: 1.6%;
            }
            &:nth-child(3) {
              width: 60.6%;
              margin-left: 39%;
              margin-top: -22.9%;
            }
          }
        }
      }
      &_content_block.add-active {
        opacity: 1;
        z-index: 10;
      }
    }
  }

  /* ---------------------------
        lp-passive END
  ------------------------------ */

  /* ---------------------------
        lp-support START
  ------------------------------ */

  .lp-support {
    margin-top: 80px;

    @include mq(kadel-lg) {
      height: 66.062vw;
      margin-top: 11.7%;
      position: relative;
      .common-mark {
        margin-left: 3.5%;
      }
      .common-title {
        position: absolute;
        margin-top: 4.7%;
        margin-left: 1.4%;
      }
      .common-desc {
        margin-top: 11.1%;
        margin-left: 1.4%;
      }
      .common-tab {
        margin-top: 20%;
        margin-left: 1.4%;
      }

      &_content {
        position: relative;
      }

      &_content_block {
        // opacity: 0;
        position: absolute;
        height: auto;
        width: 100%;
        display: flex;
        justify-content: space-between;

        &_text {
          overflow: hidden;
          margin-left: 1.4%;
          padding-top: 25%;
          width: 44.8%;
        }

        &_images {
          width: 47.7%;
          > li {
            overflow: hidden;
            &:nth-child(1) {
              width: 100%;
              margin-bottom: 10px;
            }
            &:nth-child(2) {
              width: 49.2%;
              margin-top: 1.5%;
              margin-left: 50.7%;
            }
            &:nth-child(3) {
              width: 49.2%;
              margin-top: 1.5%;
              margin-right: 50.7%;
            }
          }
        }
      }
      &_content_block.add-active {
        opacity: 1;
        z-index: 10;
      }
    }
  }

  .lp-awards {
    text-align: center;
    margin-top: 120px;
    @include mq(kadel-lg) {
      margin-top: 200px;
    }

    .mod-awards-mark {
      width: 140px;
      height: 140px;
      flex-direction: column;
      font-size: 22px;
      margin: 0 auto;
      &:before,
      &:after {
        display: none;
      }
      @include mq(kadel-lg) {
        width: 160px;
        height: 160px;
        font-size: 28px;
      }
    }

    .mod-small {
      font-size: 14px;
      @include mq(kadel-lg) {
        font-size: 16px;
      }
    }

    &_data-list {
      width: 90%;
      margin: 72px auto 96px;
      @include mq(kadel-lg) {
        max-width: 1018px;
        margin: 88px auto 96px;
        display: inline-block;
        overflow: hidden;
        text-align: left;
      }

      &_title {
        font-size: 18px;
        line-height: 3.1;
        @include mq(kadel-lg) {
          float: left;
          line-height: 3;
          text-align: right;
          width: 7em;
        }
      }

      &_data {
        font-size: 14px;
        line-height: 2.28;
        margin-bottom: 24px;
        @include mq(kadel-lg) {
          font-size: 18px;
          line-height: 3;
          margin-left: 8.5em;
          margin-bottom: 0;
        }
      }
    }

    &_content {
      position: relative;
      text-align: left;
      @include mq(kadel-lg) {
        height: 45.941vw;
      }
    }

    &_content_block {
      // opacity: 0;
      width: 100%;
      height: auto;
      @include mq(kadel-lt-lg) {
        display: flex;
        flex-direction: column-reverse;
      }
      @include mq(kadel-lg) {
        position: absolute;
      }
    }
    &_content_block:not(:first-of-type) {
      @include mq(kadel-lt-lg) {
        margin-top: 40px;
      }
    }
    &_content_block.add-active {
      opacity: 1;
      z-index: 10;
    }

    &_content_block_text {
      margin-left: 1.47%;
      padding-left: 12px;
      @include mq(kadel-lg) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-end;
        position: absolute;
        padding-top: 38.9%;
        padding-left: 0;
        width: 75.7%;
        z-index: -1;
      }

      > h3 {
        font-size: 18px;
        font-family: 'Ubuntu Condensed', sans-serif;
        position: relative;
        margin-top: 32px;
        margin-bottom: 1em;
        @include mq(kadel-lg) {
          font-size: 18px;
          padding-left: 80px;
          margin: 0 0 10px 8px;
        }

        &:before {
          content: '';
          display: block;
          width: 64px;
          height: 2px;
          background-color: #000;
          position: absolute;
          top: -8px;
          left: 0;
          @include mq(kadel-lg) {
            top: 50%;
          }
        }
      }

      > .add-border-w {
        &:before {
          background-color: #fff;
        }
      }

      > h3 span {
        font-size: 14px;
        font-weight: 600;
        @include mq(kadel-lg) {
          padding-left: 8px;
        }
      }
    }

    &_content_block_text_data-list {
      @include mq(kadel-lg) {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
      }

      > dt {
        font-size: 12px;
        font-weight: 600;
        margin-top: 16px;
        color: #a9a9a9;
        @include mq(kadel-lg) {
          margin: 0;
          order: -1;
          &:nth-of-type(1) {
            width: 40%;
          }
          &:nth-of-type(2) {
            width: 10%;
          }
          &:nth-of-type(3),
          &:nth-of-type(4) {
            width: 25%;
          }
        }
      }

      > dd {
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 2px;
        margin-top: 0.5em;
        @include mq(kadel-lg) {
          font-size: 14px;
          &:nth-of-type(1) {
            width: 40%;
          }
          &:nth-of-type(2) {
            width: 10%;
          }
          &:nth-of-type(3),
          &:nth-of-type(4) {
            width: 25%;
          }
        }
      }

      .mod-city-name {
        font-size: 16px;
        font-weight: 400;
        font-family: 'Ubuntu Condensed', sans-serif;
        margin-top: 0.4em;
      }

      .mod-work-title {
        font-size: 18.2px;
        font-weight: 600;
        margin-top: 0;
        @include mq(kadel-lg) {
          font-size: 20px;
        }
      }
    }

    &_content_block_images {
      width: 97%;
      margin: 0 auto;
      @include mq(kadel-lt-lg) {
        img {
          height: 170px;
        }
      }
      @include mq(kadel-md) {
        img {
          width: auto;
        }
      }
      @include mq(kadel-lg) {
        > li {
          line-height: 0;
        }
        > li:nth-child(1) {
          float: left;
          width: 78%;
        }
        > li:nth-child(2),
        li:nth-child(3),
        li:nth-child(4) {
          float: right;
          width: 20.4%;
          margin-bottom: 1.5%;
        }
      }
    }

    &_nav {
      font-size: 14px;
      font-family: 'Ubuntu Condensed', sans-serif;
      display: flex;
      justify-content: center;
      margin: 64px auto 0;

      .nav-btn {
        position: relative;
        width: 56px;
        height: 4px;
        background-color: #6c6c6c;
        margin: 0 4px;
        cursor: pointer;
        transition: background-color 0.85s cubic-bezier(0.23, 1, 0.32, 1);
        &:hover {
          background-color: #9c9c9c;
          &:before {
            color: #9c9c9c;
            opacity: 1;
          }
        }

        &:before {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 8px;
          display: block;
          font-size: 14px;
          font-weight: 400;
          // opacity: 0;
        }

        &:nth-of-type(1):before {
          content: '01';
        }
        &:nth-of-type(2):before {
          content: '02';
        }
        &:nth-of-type(3):before {
          content: '03';
        }
        &:nth-of-type(4):before {
          content: '04';
        }
      }

      .add-current-nav {
        background-color: #000;
        &:before {
          color: #000;
          opacity: 1;
        }
        &:hover {
          background: #000;
          &:before {
            color: #000;
          }
        }
      }
      .add-current-nav-w {
        background-color: #fff;
        &:before {
          color: #fff;
          opacity: 1;
        }
        &:hover {
          background: #fff;
          &:before {
            color: #fff;
          }
        }
      }
    }
  }
  /* ---------------------------
        lp-awards END
  ------------------------------ */

  /* ---------------------------
        lp-staff START
  ------------------------------ */

  .lp-staff {
    background: url('../assets/images/kadel/staff_img01.jpg') no-repeat left
      320px top 720px;
    background-position: left top;
    margin: 130px auto 110px;
    padding-left: 0;
    padding-top: 120px;
    @include mq(kadel-sm) {
      background-size: 40% auto;
      width: 90%;
    }
    @include mq(kadel-gt-md) {
      margin: 120px 0;
      padding-left: 23.5%;
      padding-top: 14.7%;
    }

    > h2 {
      font-size: 20px;
      text-align: right;
      line-height: 1.6;
      @include mq(kadel-gt-md) {
        font-size: 32px;
        line-height: 1.5;
        text-align: left;
      }
    }
    > h2 span {
      font-size: 40px;
      font-weight: 400;
      font-family: 'Ubuntu Condensed', sans-serif;
      color: #e5e5e5;
      margin-left: 0.5em;
      @include mq(kadel-gt-md) {
        font-size: 60px;
      }
    }
    > p {
      font-size: 16px;
      line-height: 2;
      text-align: right;
      @include mq(kadel-gt-md) {
        font-size: 18px;
        line-height: 2.2;
        text-align: left;
        margin-bottom: 40px;
      }
    }

    &_list {
      margin-top: 40px;
      @include mq(kadel-gt-md) {
        margin: 0 3.8% 0 36.5%;
      }

      > li {
        display: flex;
        flex-direction: column-reverse;
        margin-bottom: 40px;
        @include mq(kadel-gt-md) {
          flex-direction: row-reverse;
        }
      }
    }

    .staff-picture {
      width: 64px;
      margin-bottom: -46px;
      @include mq(kadel-gt-md) {
        width: 20.6%;
        margin: 0;
      }
    }

    .staff-main {
      @include mq(kadel-gt-md) {
        padding-left: 4.8%;
        width: 79.4%;
      }

      > h3 {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 8px;
        padding-left: 80px;
        @include mq(kadel-gt-md) {
          padding-left: 0;
        }
      }
      > h3 span {
        display: block;
        font-size: 12px;
        @include mq(kadel-gt-md) {
          display: inline;
          padding-left: 2em;
        }
      }

      > p {
        font-size: 14px;
        letter-spacing: 1px;
        line-height: 1.7;
      }
    }
  }
  /* ---------------------------
        lp-staff END
  ------------------------------ */
}
</style>
