<template>
  <main class="home">
    <section class="p-head js-head">
      <div class="p-head__wrap">
        <div class="p-head__background"></div>
        <h1>My Portforio</h1>
      </div>
    </section>

    <section class="p-contents">
      <div class="p-contents__wrap js-fadeIn">
        <h2>Profile</h2>
        <div class="p-contents__card">
          <h3>Basic</h3>
          <dl class="p-contents__dataList">
            <div
              class="p-contents__dataWrap"
              v-for="basic in dataBlock.basicProfile"
              :key="basic.dt"
            >
              <dt
                class="p-contents__dataTitle p-contents__dataTitle--letterSpaceWide"
              >
                {{ basic.dt }}
              </dt>
              <dd class="p-contents__data">{{ basic.dd }}</dd>
            </div>
          </dl>
          <h3>Development</h3>
          <dl class="p-contents__dataList">
            <div
              class="p-contents__dataWrap"
              v-for="dev in dataBlock.development"
              :key="dev.dt"
            >
              <dt
                class="p-contents__dataTitle p-contents__dataTitle--letterSpaceWide"
              >
                {{ dev.dt }}
              </dt>
              <dd class="p-contents__data">{{ dev.dd }}</dd>
            </div>
          </dl>
        </div>
        <div class="p-contents__card">
          <h3>Career</h3>
          <dl class="p-contents__dataList">
            <div
              class="p-contents__dataWrap"
              v-for="career in dataBlock.carrerSummary"
              :key="career.dt"
            >
              <dt class="p-contents__dataTitle">{{ career.dt }}</dt>
              <dd class="p-contents__data">{{ career.dd }}</dd>
            </div>
          </dl>
          <h3>Details</h3>
          <dl class="p-contents__dataList">
            <div
              class="p-contents__dataWrap"
              v-for="details in dataBlock.carrerDetails"
              :key="details.dt"
            >
              <dt class="p-contents__dataTitle">{{ details.dt }}</dt>
              <dd
                class="p-contents__data p-contents__data--widthWide"
                v-for="worksContents in details.dd"
                :key="worksContents"
              >
                {{ worksContents }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <section class="p-contents p-contents--bgMain">
      <div class="p-contents__wrap js-fadeIn">
        <h2>Skills</h2>
        <div class="p-contents__card">
          <h3>Rate</h3>
          <dl class="p-contents__dataList">
            <div
              class="p-contents__dataWrap p-contents__dataWrap--mobileFlex"
              v-for="skill in dataBlock.skillRate"
              :key="skill.dt"
            >
              <dt
                class="p-contents__dataTitle p-contents__dataTitle--widthHalf p-contents__dataTitle--alignCenter p-contents__dataTitle--letterSpaceWide"
              >
                {{ skill.dt }}
              </dt>
              <dd
                class="p-contents__data p-contents__data--widthHalf p-contents__dataTitle--alignCenter"
              >
                <app-icon
                  v-bind:name="star"
                  v-bind:size="size"
                  v-bind:color="color"
                  v-bind:desc="skill.svgDescription"
                  v-for="(star, index) in skill.dd"
                  :key="index"
                />
              </dd>
            </div>
          </dl>
        </div>
        <div class="p-contents__card">
          <h3>What I can do</h3>
          <dl class="p-contents__dataList">
            <div
              class="p-contents__dataWrap"
              v-for="skill in dataBlock.skillRateContents"
              :key="skill.dt"
            >
              <dt
                class="p-contents__dataTitle p-contents__dataTitle--widthHalf p-contents__dataTitle--letterSpaceWide"
              >
                {{ skill.dt }}
              </dt>
              <dd class="p-contents__data p-contents__data--widthHalf">
                {{ skill.dd }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
    <section class="p-contents p-contents--works">
      <div class="p-contents__wrap">
        <h2>Works</h2>
        <ul class="p-contents__workList">
          <li class="p-contents__workCards">
            <router-link to="kadel">
              <img src="../assets/images/home/screen-kadel-min.png" alt="" />
              <div class="p-contents__workCards__textBox">
                <p>
                  Webページの見た目(HTML・CSS)はdevToolで確認しながらコーディングし、動き(JavaScript)は見本の動きを見て自身で考え実装しました。
                </p>
                <span class="p-contents__workCards__tag">LP写経</span>
                <span class="p-contents__workCards__tag">Vue.js</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
import AppIcon from '../components/AppIcon';
import EventBus from '../lib/EventBus';

export default {
  name: 'Home',
  components: {
    AppIcon
  },
  mounted: function() {
    this.textFadein();
    this.headerBgChange();
  },
  data: function() {
    return {
      size: 'medium',
      color: 'primary',
      isInKv: '',
      dataBlock: {
        basicProfile: [
          {
            dt: 'Name',
            dd: 'T.K'
          },
          {
            dt: 'Sex',
            dd: '男'
          },
          {
            dt: 'Age',
            dd: '28（1991. 11. 30 〜）'
          },
          {
            dt: 'Education',
            dd: '立命館大学国際関係学部国際関係学科卒業'
          },
          {
            dt: 'Certifications',
            dd: 'DELE B1（スペイン語の資格）'
          },
          {
            dt: 'Tel',
            dd: '080 - 1480 - 4979'
          },
          {
            dt: 'Mail',
            dd: 'xxzera@gmail.com'
          }
        ],
        development: [
          {
            dt: 'OS',
            dd: 'Mac OS'
          },
          {
            dt: 'Tools',
            dd: 'git、 npm、 webpack、 gulp'
          },
          {
            dt: 'Language',
            dd: 'HTML / Sass、 JavaScript（jQuery）'
          },
          {
            dt: 'Framework',
            dd: 'Vue.js'
          },
          {
            dt: 'Library',
            dd: 'jQuery.js'
          }
        ],
        carrerSummary: [
          {
            dt: '2016. 4 - 2018. 8',
            dd: 'スズキ株式会社にて営業職として従事（BtoB / BtoC)'
          },
          {
            dt: '2019. 2 - 2019. 4',
            dd: '株式会社アウトソーシングデザイナーに入社し研修を受ける'
          },
          {
            dt: '2019. 5 - 2020. 4',
            dd: '某社にて大手ECサイトの保守・運用業務に携わる'
          }
        ],
        carrerDetails: [
          {
            dt: '研修内容',
            dd: [
              '・PHP5におけるオブジェクト指向プログラムの基礎と応用',
              '・JavaScriptを用いた動的なWebサイトの構築',
              '・MySQLの基礎と応用、PHPからの実行',
              '・illustrator、photoshopの基礎・応用'
            ]
          },
          {
            dt: '業務内容',
            dd: [
              '・カンプを元にLPの新規作成、更新',
              '・サイト内コンポーネントの保守',
              '・CMSを利用したサイト更新、NL管理、アプリ更新'
            ]
          }
        ],
        skillRate: [
          {
            dt: 'HTML',
            dd: [
              'star-full',
              'star-full',
              'star-full',
              'star-full',
              'star-empty'
            ],
            svgDescription: 'HTMLのスキル, 星の数'
          },
          {
            dt: 'Sass（CSS）',
            dd: [
              'star-full',
              'star-full',
              'star-full',
              'star-full',
              'star-empty'
            ],
            svgDescription: 'Sass（CSS）のスキル, 星の数'
          },
          {
            dt: 'PHP',
            dd: [
              'star-full',
              'star-full',
              'star-empty',
              'star-empty',
              'star-empty'
            ],
            svgDescription: 'PHPのスキル, 星の数'
          },
          {
            dt: 'JavaScript',
            dd: [
              'star-full',
              'star-full',
              'star-full',
              'star-half',
              'star-empty'
            ],
            svgDescription: 'JavaScriptのスキル, 星の数'
          },
          {
            dt: 'Vue.js',
            dd: [
              'star-full',
              'star-full',
              'star-half',
              'star-empty',
              'star-empty'
            ],
            svgDescription: 'Vue.jsのスキル, 星の数'
          },
          {
            dt: 'WordPress',
            dd: [
              'star-full',
              'star-full',
              'star-empty',
              'star-empty',
              'star-empty'
            ],
            svgDescription: 'WordPressのスキル, 星の数'
          }
        ],
        skillRateContents: [
          {
            dt: 'HTML',
            dd: '基本的マークアップ、SVGの利用'
          },
          {
            dt: 'Sass（CSS）',
            dd: 'レスポンシブ化、アニメーション、CSS設計'
          },
          {
            dt: 'PHP',
            dd: '研修の基礎知識のみ、実務経験なし'
          },
          {
            dt: 'JavaScript',
            dd: 'DOM操作、関数化、非同期処理、プラグインの利用'
          },
          {
            dt: 'Vue',
            dd: '基礎、実務経験なし'
          },
          {
            dt: 'WordPress',
            dd: 'テーマを用いたサイト構築、DB連携、サイトの更新'
          }
        ],
        works: [
          {
            path: '',
            alt: 'title',
            description: ''
          }
        ]
      }
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
  }
}
</style>
