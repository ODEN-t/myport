<template>
  <main class="home">
    <section class="p-head">
      <div class="p-head__wrap">
        <div class="p-head__background"></div>
        <h1>My Portforio</h1>
      </div>
    </section>
    <section class="p-profile">
      <div class="p-profile__wrap">
        <h2>Profile</h2>
        <div class="p-profile__dataBlock">
          <h3>Basic</h3>
          <dl class="p-profile__dataList">
            <div class="p-profile__dataWrap" v-for="basic in dataBlock.basicProfile" :key="basic.dt">
              <dt class="p-profile__dataTitle p-profile__dataTitle--letterSpaceWide">{{ basic.dt }}</dt>
              <dd class="p-profile__data">{{ basic.dd }}</dd>
            </div>
          </dl>
          <h3>Development</h3>
          <dl class="p-profile__dataList">
            <div class="p-profile__dataWrap" v-for="dev in dataBlock.development" :key="dev.dt">
              <dt class="p-profile__dataTitle p-profile__dataTitle--letterSpaceWide">{{ dev.dt }}</dt>
              <dd class="p-profile__data">{{ dev.dd }}</dd>
            </div>
          </dl>
        </div>
        <div class="p-profile__dataBlock p-profile__dataBlock--right">
          <h3>Career</h3>
          <dl class="p-profile__dataList">
            <div class="p-profile__dataWrap" v-for="career in dataBlock.carrerSummary" :key="career.dt">
              <dt class="p-profile__dataTitle">{{ career.dt }}</dt>
              <dd class="p-profile__data">{{ career.dd }}</dd>
            </div>
          </dl>
          <h3>Details</h3>
          <dl class="p-profile__dataList">
            <div class="p-profile__dataWrap" v-for="details in dataBlock.carrerDetails" :key="details.dt">
              <dt class="p-profile__dataTitle p-profile__dataTitle--workDetails">{{ details.dt }}</dt>
              <dd class="p-profile__data p-profile__data--widthWide" v-for="worksContents in details.dd" :key="worksContents">{{ worksContents }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
    <section class="p-skills">
      <div class="p-profile__wrap p-profile__wrap--skills">
        <h2>Skills</h2>
        <div class="p-profile__dataBlock p-profile__dataBlock--skills">
          <h3>Rate</h3>
          <dl class="p-profile__dataList">
            <div class="p-profile__dataWrap p-profile__dataWrap--skills" v-for="skill in dataBlock.skillRate" :key="skill.dt">
              <dt class="p-profile__dataTitle p-profile__dataTitle--skills">{{ skill.dt }}</dt>
              <dd class="p-profile__data p-profile__data--skills" v-html="skill.dd"></dd>
            </div>
          </dl>
        </div>
        <div class="p-profile__dataBlock p-profile__dataBlock--skills">
          <h3>What I can do</h3>
          <dl class="p-profile__dataList">
            <div class="p-profile__dataWrap p-profile__dataWrap--skills" v-for="skill in dataBlock.skillRateContents" :key="skill.dt">
              <dt class="p-profile__dataTitle p-profile__dataTitle--skills">{{ skill.dt }}</dt>
              <dd class="p-profile__data p-profile__data--skills" v-html="skill.dd"></dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <svg display="none">
      <defs>
        <symbol id="icon-star-empty" viewBox="0 0 32 32">
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"></path>
        </symbol>
        <symbol id="icon-star-full" viewBox="0 0 32 32">
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
        </symbol>
        <symbol id="icon-star-half" viewBox="0 0 32 32">
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-0.029 0.015 0.029-17.837 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"></path>
        </symbol>
      </defs>  
    </svg>  
  </main>
</template>

<script>
export default {
  name: 'home',
  data: function() {
    return {
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
            dd: '<svg class="p-skills__star"><use xlink:href="#icon-star-full"></svg><svg class="p-skills__star"><use xlink:href="#icon-star-full"></svg><svg class="p-skills__star"><use xlink:href="#icon-star-full"></svg><svg class="p-skills__star"><use xlink:href="#icon-star-full"></svg><svg class="p-skills__star"><use xlink:href="#icon-star-empty"></svg>'
          },
          {
            dt: 'Sass（CSS）',
            dd: '<svg class="p-skills__star"><use xlink:href="#icon-star-full"></svg><svg class="p-skills__star"><use xlink:href="#icon-star-full"></svg><svg class="p-skills__star"><use xlink:href="#icon-star-full"></svg><svg class="p-skills__star"><use xlink:href="#icon-star-full"></svg><svg class="p-skills__star"><use xlink:href="#icon-star-empty"></svg>'
          },
          {
            dt: 'PHP',
            dd: '<svg class="p-skills__star"><use xlink:href="#icon-star-full"></svg><svg class="p-skills__star"><use xlink:href="#icon-star-full"></svg><svg class="p-skills__star"><use xlink:href="#icon-star-empty"></svg><svg class="p-skills__star"><use xlink:href="#icon-star-empty"></svg><svg class="p-skills__star"><use xlink:href="#icon-star-empty"></svg>'
          },
          {
            dt: 'JavaScript',
            dd: '<svg class="p-skills__star"><use xlink:href="#icon-star-full"></svg><svg class="p-skills__star"><use xlink:href="#icon-star-full"></svg><svg class="p-skills__star"><use xlink:href="#icon-star-full"></svg><svg class="p-skills__star"><use xlink:href="#icon-star-half"></svg><svg class="p-skills__star"><use xlink:href="#icon-star-empty"></svg>'
          },
          {
            dt: 'Vue',
            dd: '<svg class="p-skills__star"><use xlink:href="#icon-star-full"></svg><svg class="p-skills__star"><use xlink:href="#icon-star-full"></svg><svg class="p-skills__star"><use xlink:href="#icon-star-half"></svg><svg class="p-skills__star"><use xlink:href="#icon-star-empty"></svg><svg class="p-skills__star"><use xlink:href="#icon-star-empty"></svg>'
          },
          {
            dt: 'WordPress',
            dd: '<svg class="p-skills__star"><use xlink:href="#icon-star-full"></svg><svg class="p-skills__star"><use xlink:href="#icon-star-full"></svg><svg class="p-skills__star"><use xlink:href="#icon-star-empty"></svg><svg class="p-skills__star"><use xlink:href="#icon-star-empty"></svg><svg class="p-skills__star"><use xlink:href="#icon-star-empty"></svg>'
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

    .p-profile {
      width: 100%;
      background-color: #eff0f3;

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

      &__dataBlock {
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

        &--skills {
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
        line-height: 1.7;
        &:nth-of-type(n+2) {
          margin-top: 1em;
        }
      }

      &__dataTitle {
        width: 35%;

        &--letterSpaceWide {
          letter-spacing: 2px;
        }
        &--widthWide {
          width: 100%;
        }
        &--workDetails {
          font-weight: 700;
          margin-bottom: 0.25em;
        }
        &--skills {
          width: 50%;
          font-weight: 700;
          letter-spacing: 2px;
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

        &--skills {
          width: 50%;
        }
      }
    }

    .p-skills {
      width: 100%;
      background-color: #fffffe;

      &__star {
        display: inline-block;
        fill: #d9376e;
        width: 28px;
        height: 28px;
        padding: 0.3em;
      }
    }
  }
</style>