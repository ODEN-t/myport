<template>
  <main class="home">
    <section class="p-head">
      <div class="p-head__wrap">
        <div class="p-head__background"></div>
        <h1>My Portforio</h1>
      </div>
    </section>
    <section class="p-contents">
      <div class="p-contents__wrap">
        <h2>Profile</h2>
        <div class="p-contents__card">
          <h3>Basic</h3>
          <dl class="p-contents__dataList">
            <div
              class="p-contents__dataWrap" 
              v-for="basic in dataBlock.basicProfile"
              :key="basic.dt"
            >
              <dt class="p-contents__dataTitle p-contents__dataTitle--letterSpaceWide">{{ basic.dt }}</dt>
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
              <dt class="p-contents__dataTitle p-contents__dataTitle--letterSpaceWide">{{ dev.dt }}</dt>
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
    <section class="p-contents p-contents--bgWhite">
      <div class="p-contents__wrap">
        <h2>Skills</h2>
        <div class="p-contents__card p-contents__card--bgGray">
          <h3>Rate</h3>
          <dl class="p-contents__dataList">
            <div
              class="p-contents__dataWrap" 
              v-for="skill in dataBlock.skillRate" 
              :key="skill.dt"
            >
              <dt class="p-contents__dataTitle p-contents__dataTitle--widthHalf p-contents__dataTitle--alignCenter p-contents__dataTitle--letterSpaceWide">{{ skill.dt }}</dt>
              <dd class="p-contents__data p-contents__data--widthHalf p-contents__dataTitle--alignCenter">
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
        <div class="p-contents__card p-contents__card--bgGray">
          <h3>What I can do</h3>
          <dl class="p-contents__dataList">
            <div class="p-contents__dataWrap"
              v-for="skill in dataBlock.skillRateContents" 
              :key="skill.dt"
            >
              <dt class="p-contents__dataTitle p-contents__dataTitle--widthHalf p-contents__dataTitle--letterSpaceWide">{{ skill.dt }}</dt>
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
      </div>
    </section>
  </main>
</template>

<script>
import AppIcon from '../components/AppIcon';


export default {
  name: 'Home',
  components: { 
    AppIcon 
  },
  data: function() {
    return {
      size: 'medium',
      color: 'primary',
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
            dd: 'Git、 GitHub Pages、NPM、 Webpack、 Gulp'
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
            dd: '株式会社キューにて大手ECサイトの保守・運用業務に携わる'
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
            dd: 'レスポンシブ化、アニメーション、flocssを用いたCSS設計'
          },
          {
            dt: 'PHP',
            dd: '研修の基礎知識のみ、実務経験なし'
          },
          {
            dt: 'JavaScript（jQuery）',
            dd: 'DOM操作、関数化、非同期処理、jQueryプラグインの利用'
          },
          {
            dt: 'Vue',
            dd: '基礎'
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
    }
  }
}
</script>

<style lang="scss">

  .home {

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
          font-size: 60px;
          letter-spacing: 5px;
          color: #eff0f3;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%);
        }
      }

      &__background  {
        background-image: url('/images/oceanside-villall-min.jpg');
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: 50% 80%;
        filter: brightness(0.7);
      }
    }

    .p-contents {
      width: 100%;
      background-color: #eff0f3;

      &--bgWhite {
        background-color: #fffffe;
      }

      &__wrap {
        max-width: 1300px;
        color: #0d0d0d;
        padding: 5em 2.5em;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        > h2 {
          width: 100%;
          font-size: 40px;
          letter-spacing: 2px;
          text-align: center;
        }
      }

      &__card {
        width: calc(50% - 0.75em);
        background-color: #fffffe;
        padding: 2.5em;
        margin-top: 2.5em;
        border-radius: 3px;

        > h3 {
          color: #0d0d0d;
          font-size: 22px;
          letter-spacing: 2px;
          line-height: 1.7;
          font-weight: 700;
        }

        > h3:last-of-type{
          margin-top: 1em;
        }

        &--bgGray {
          background-color: #eff0f3;
        }
      }

      &__dataList {
        width: 100%;
        color: #2a2a2a;
        margin-top: 1em;
      }

      &__dataWrap {
        display: flex;
        flex-wrap: wrap;
        font-size: 15px;
        font-weight: 200;
        line-height: 1.7;
        &:nth-of-type(n+2) {
          margin-top: 1em;
        }
      }

      &__dataTitle {
        width: 35%;
        font-weight: 700;

        &--letterSpaceWide {
          letter-spacing: 2px;
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
        width: 65%;

        &--widthWide {
          width: 100%;
          margin-top: 0.25em;
          padding-left: 1em;
          text-indent: -1em;
        }

        &--widthHalf {
          width: 50%;
        }
      }

      svg[class^="svg-"] {
        padding: 0 0.2em;
      }
    }
  }
</style>