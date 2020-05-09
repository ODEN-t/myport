<template>
  <main class="KADeL">
    <div class="p-head">
      <h1 class="p-head__logo js-header-logo">
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

    <section class="p-main">
      <div class="p-main__text js-hero_text">
        <h2>想い描いた、<br class="for-sp" />理想の住まいをかたちに</h2>
        <h3>KADeLの注文住宅</h3>
        <a href="#smooth" class="p-main__scrollBtn">
          SCROLL
          <span></span>
        </a>
      </div>
      <figure class="p-main__figure"></figure>
    </section>

    <section class="p-30th">
      <div class="p-30th__text common-fadein js-fadein">
        <h2>
          目に見えない光や風、<br />熱や空気をデザインする<br />KADeLの「環境共生住宅」
        </h2>
        <h3>30th anniversary</h3>
        <p>
          住宅が大好きで、人生をかけて<br
            class="for-sp"
          />住宅を追求していきたい<br />そんな情熱を持った建築デザイナーが<br />お客様の意向を丁寧に汲み取りながら<br />プロとしての提案がしっかりできる会社を<br
            class="for-sp"
          />作りたいと考え<br
            class="for-pc"
          />立ち上げたのがKADeLです。<br />KADeL設立より設計の力を信じて30年、<br
            class="for-sp"
          />そして辿り着いた住まい。
        </p>
        <p>それが「環境共生住宅」でした。</p>
      </div>
      <ul class="p-30th__images" id="smooth">
        <li class="common-fadein js-fadein">
          <img
            src="../assets/images/kadel/lede_img01.jpg"
            alt="KADeL カデル 30周年 環境共生住宅"
          />
        </li>
        <li class="common-fadein-delay js-fadein">
          <img
            src="../assets/images/kadel/lede_img02.jpg"
            alt="KADeL カデル 30周年 環境共生住宅"
          />
        </li>
      </ul>
    </section>

    <section class="p-mainBlock p-mainBlock--design common-fadein">
      <span class="p-mainBlock__mark p-mainBlock--design__mark">
        <span>KADeL</span>
        <span>Design</span>
      </span>
      <h2 class="p-mainBlock__title p-mainBlock--design__title">
        想い描いた理想を<br />かたちに
      </h2>
      <p class="p-mainBlock__desc p-mainBlock--design__desc">
        従来の規格型住宅では表現できない<br />ご家族のためだけに考えられた<br
          class="for-sp"
        />世界にたったひとつの住まいを
      </p>
      <div class="p-mainBlock__tabWrap p-mainBlock--design__tabWrap for-lg">
        <slot v-for="(tab, index) in textContents.designTab">
          <h3
            class="p-mainBlock__concept"
            :key="tab"
            @click="changeTab(index, design)"
            v-bind:class="[
              { handlePointer: isProcess },
              index == design.currentTab ? 'is-current' : ''
            ]"
          >
            {{ tab }}
          </h3>
        </slot>
      </div>
      <div class="p-mainBlock__wrap p-mainBlock--design__wrap">
        <div class="p-mainBlock__content p-mainBlock--design__content">
          <div class="p-mainBlock__textBlock p-mainBlock--design__textBlock">
            <h3 class="p-mainBlock__concept for-sp">
              理想をかたちに
            </h3>
            <transition name="text" v-on:after-enter="afterEnter">
              <p v-show="design.show[0]">
                数多くの賞を受賞する建築デザイナーが<br />お聞かせいただいたご家族のたくさんの想いとご希望を<br
                  class="for-pc"
                />自由な設計とプラスアルファなご提案で<br />理想の住まいへとかたちにいたします。
              </p>
            </transition>
          </div>
          <ul
            class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--design__imageBlock"
          >
            <li
              v-for="imageSet in design.slideA"
              :key="imageSet.img"
              v-bind:class="{ handleLayer: design.show[0] }"
            >
              <a :href="require('@/' + imageSet.modal)" :key="imageSet.modal">
                <transition name="image">
                  <img
                    :src="require('@/' + imageSet.img)"
                    :alt="imageSet.alt"
                    :key="imageSet.title"
                    v-show="checkMq || design.show[0]"
                  />
                </transition>
              </a>
            </li>
          </ul>
        </div>

        <div class="p-mainBlock__content p-mainBlock--design__content">
          <div class="p-mainBlock__textBlock p-mainBlock--design__textBlock">
            <h3 class="p-mainBlock__concept for-sp">
              繊細な住宅設計
            </h3>
            <transition name="text" v-on:after-enter="afterEnter">
              <p v-show="design.show[1]">
                「暮らしやすい間取り」「快適な家事動線」<br />綿密なヒアリングをもとに実際の暮らしを<br
                  class="for-sp"
                />しっかりと配慮し、<br
                  class="for-pc"
                />ご家族の笑顔であふれる<br
                  class="for-sp"
                />快適な住まいを設計いたします。
              </p>
            </transition>
          </div>
          <ul
            class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--design__imageBlock"
          >
            <li
              v-for="imageSet in design.slideB"
              :key="imageSet.img"
              v-bind:class="{ handleLayer: design.show[1] }"
            >
              <a :href="require('@/' + imageSet.modal)" :key="imageSet.modal">
                <transition name="image">
                  <img
                    :src="require('@/' + imageSet.img)"
                    :alt="imageSet.alt"
                    :key="imageSet.title"
                    v-show="checkMq || design.show[1]"
                  />
                </transition>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="p-mainBlock p-mainBlock--passive common-fadein js-fadein">
      <span class="p-mainBlock__mark p-mainBlock--passive__mark">
        <span>KADeL</span>
        <span>環境共生住宅</span>
      </span>
      <h2 class="p-mainBlock__title p-mainBlock--passive__title">
        環境と共に生きる
      </h2>
      <p class="p-mainBlock__desc p-mainBlock--passive__desc">
        エアコンなどの設備に頼らず、<br
          class="for-sp"
        />自然の力を利用した<br />木造モダン建築で快適な暮らしを
      </p>
      <div class="p-mainBlock__tabWrap p-mainBlock--passive__tabWrap for-lg">
        <h3 class="p-mainBlock__concept">パッシブデザイン</h3>
        <h3 class="p-mainBlock__concept">四季と共に生きる</h3>
        <h3 class="p-mainBlock__concept">土地を活かす</h3>
      </div>
      <div class="p-mainBlock__wrap">
        <div class="p-mainBlock__content p-mainBlock--passive__content">
          <div class="p-mainBlock__textBlock p-mainBlock--passive__textBlock">
            <h3 class="p-mainBlock__concept for-sp">
              パッシブデザイン
            </h3>
            <p>
              パッシブデザインとは日本建築を下敷きにした自然のエネルギーを生かした建築計画で、<br
                class="for-pc"
              />目に見えない光や風・熱・空気をデザインすることで快適な暮らしを実現することができます。<br />パッシブデザインを取り入れることで、地球環境だけでなく、大切なご家族の健康面にも効果的です。<br />また、断熱性能が高い「環境共生住宅」では、部屋感の温度差がほとんどなく、<br
                class="for-pc"
              />冷暖房にかかるコストを大幅に削減できるなど家計への負担も軽減されるため、経済面にも非常に効果的です。
            </p>
            <figure>
              <img
                class="passiveImage"
                src="@/assets/images/kadel/passive_block01_img01.png"
                alt="KADeL カデル 環境共生住宅 パッシブデザイン イメージ"
              />
            </figure>
          </div>
          <ul
            class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--passive__imageBlock"
          >
            <!-- <li
              v-for="imageSet in images.passive.slideBlockA"
              :key="imageSet.img"
            >
              <a :href="require('@/' + imageSet.modal)">
                <img :src="require('@/' + imageSet.img)" :alt="imageSet.alt" />
              </a>
            </li> -->
          </ul>
        </div>
      </div>
    </section>

    <section class="p-mainBlock p-mainBlock--support common-fadein js-fadein">
      <span class="p-mainBlock__mark p-mainBlock--support__mark">
        <span>KADeL</span>
        <span>Support</span>
      </span>
      <h2 class="p-mainBlock__title p-mainBlock--support__title">
        プロフェッショナルによる<br class="for-sp" />サポート
      </h2>
      <p class="p-mainBlock__desc p-mainBlock--support__desc">
        各分野のプロフェッショナルが<br
          class="for-sp"
        />それぞれの知識と技術を活かし、<br />お客様の理想の生活を<br
          class="for-sp"
        />サポートいたします。
      </p>
      <div class="p-mainBlock__tabWrap p-mainBlock--support__tabWrap for-lg">
        <h3 class="p-mainBlock__concept">
          土地探し
        </h3>
        <h3 class="p-mainBlock__concept">
          インテリア
        </h3>
        <h3 class="p-mainBlock__concept">
          長期保証
        </h3>
      </div>
      <div class="p-mainBlock__wrap">
        <div
          class="p-mainBlock__content p-mainBlock--support__content add-active"
        >
          <div class="p-mainBlock__textBlock p-mainBlock--support__textBlock">
            <h3 class="p-mainBlock__concept for-sp">土地探し</h3>
            <p>
              KADeLの母体でもある、土地を扱うプロ「富国ハウジング」と建築デザインのプロ<br
                class="for-pc"
              />「KADeL」が、それぞれの目線からお手伝いさせていただきます。<br />関西全域にある不動産会社とのネットワークを活かし、<br
                class="for-pc"
              />お客様の想い描く理想の暮らしの実現を土地探しから実現いたします。
            </p>
          </div>
          <ul
            class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--support__imageBlock"
          >
            <!-- <li
              v-for="imageSet in images.support.slideBlockA"
              :key="imageSet.img"
            >
              <a :href="require('@/' + imageSet.modal)">
                <img :src="require('@/' + imageSet.img)" :alt="imageSet.alt" />
              </a>
            </li> -->
          </ul>
        </div>
      </div>
    </section>

    <section
      class="p-mainBlock p-mainBlock--award common-fadein js-changeStart js-fadein"
    >
      <h2 class="p-mainBlock__mark p-mainBlock--award__mark">
        AWARDS<span class="mod-small">受賞歴</span>
      </h2>
      <dl class="p-mainBlock__awardList">
        <dt class="p-mainBlock__awardYear">2007</dt>
        <dd class="p-mainBlock__awardName">
          第9回「あたたかな住空間デザイン」コンペティション
          住宅デザイン部門・新築の部<br class="for-sp" />
          特別賞受賞
        </dd>
        <dt class="p-mainBlock__awardYear">2009</dt>
        <dd class="p-mainBlock__awardName">
          ２１世紀の環境グランドデザインコンテスト<br class="for-sp" />
          総合部門入選 ゴールドメンバー賞受賞
        </dd>
        <dt class="p-mainBlock__awardYear">2011</dt>
        <dd class="p-mainBlock__awardName">
          住まいの環境デザイン・アワード2011<br class="for-sp" />
          特別賞受賞
        </dd>
        <dt class="p-mainBlock__awardYear">2013</dt>
        <dd class="p-mainBlock__awardName">
          LIXIL MEMBERS CONTEST 2013<br class="for-sp" />
          準グランプリ受賞
        </dd>
        <dt class="p-mainBlock__awardYear">2015</dt>
        <dd class="p-mainBlock__awardName">
          LIXIL MEMBERS CONTEST 2015<br class="for-sp" />
          新築部門 関西地域最優秀賞受賞
        </dd>
        <dt class="p-mainBlock__awardYear">2015-2018</dt>
        <dd class="p-mainBlock__awardName">
          LIXIL MEMBERS CONTEST 2015-2018<br class="for-sp" />
          敢闘賞 8作品
        </dd>
        <dt class="p-mainBlock__awardYear">2018</dt>
        <dd class="p-mainBlock__awardName">
          WOODONE 2018 空間デザイン<br class="for-sp" />施工例コンテスト<br
            class="for-sp"
          />
          最優秀賞／伊東豊雄賞 受賞
        </dd>
      </dl>

      <div class="p-mainBlock__wrap p-mainBlock--award__wrap">
        <div
          class="p-mainBlock__content p-mainBlock--award__content add-active"
        >
          <div class="p-mainBlock__textBlock p-mainBlock--award__textBlock">
            <h3 class="js-contest-name p-mainBlock__contestName">
              LIXIL MEMBERS CONTEST 2017<br
                class="mod-displayNone_desktop"
              /><span>新築部門 敢闘賞</span>
            </h3>
            <dl class="p-mainBlock__contestList">
              <dt>住まい</dt>
              <dd class="mod-work-title">自然環境を取り込むフィルターの家</dd>
              <dt>地域</dt>
              <dd class="mod-city-name">OSAKA</dd>
              <dt>敷地面積</dt>
              <dd>約202.71㎡ (約61.31坪)</dd>
              <dt>延床面積</dt>
              <dd class="js-offset-mobile-child">約148.88㎡（約45.03坪）</dd>
            </dl>
          </div>
          <ul
            class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--award__imageBlock"
          >
            <!-- <li
              v-for="imageSet in images.awards.slideBlockA"
              :key="imageSet.img"
            >
              <a :href="require('@/' + imageSet.modal)">
                <img :src="require('@/' + imageSet.img)" :alt="imageSet.alt" />
              </a>
            </li> -->
          </ul>
        </div>
      </div>
      <ul class="p-mainBlock__nav">
        <li class="p-mainBlock__navBtn"></li>
        <li class="p-mainBlock__navBtn"></li>
        <li class="p-mainBlock__navBtn"></li>
        <li class="p-mainBlock__navBtn"></li>
      </ul>
    </section>

    <section class="p-staff js-changeEnd">
      <h2>スタッフ<span>Staff</span></h2>
      <p class="common-fadein js-fadein">
        お客さまをの家づくりをお手伝いさせていただく<br
          class="for-pc"
        />スタッフを一部ご紹介いたします。<br />その他土地探しのプロや営業として<br
          class="for-sp"
        />サポートさせていただく<br />スタッフ約25名が在籍しております。
      </p>
      <ul class="p-staff__list">
        <li class="common-fadein js-fadein">
          <div class="p-staff__text">
            <h3>黒瀬 信幸<span>副社長</span></h3>
            <p>
              科学的アプローチを元に自然エネルギーを生かしたパッシブな建築計画、時代に押し流されることのない真摯な取り組みで和と洋の統合を目指しています。住まいの原型である居間が中心となる計画、連続する空間構成、緩やかな境界等、古き良き日本建築の手法を現代的解釈で提案。
            </p>
          </div>
          <figure class="p-staff__figure">
            <img
              src="@/assets/images/kadel/staff_icon_kurose.png"
              alt="副社長 黒瀬 信幸"
            />
          </figure>
        </li>
        <li class="common-fadein js-fadein">
          <div class="p-staff__text">
            <h3>秋山 かず子<span>本社 心斎橋 統括所長</span></h3>
            <p>
              バランスのとれた計画が特徴。住宅では特に機能美と空間美を追求。<br />自然との関わり、空間スケール、陰影、各要素を考えながら、良い答えを見つけられるまで積極的に迷うことを諦めない。
            </p>
          </div>
          <figure class="p-staff__figure">
            <img
              src="@/assets/images/kadel/staff_icon_akiyama.png"
              alt="本社 心斎橋 統括所長 秋山 かず子"
            />
          </figure>
        </li>
        <li class="common-fadein js-fadein">
          <div class="p-staff__text">
            <h3>西尾 真一<span>本社 所長</span></h3>
            <p>
              私は、お引渡しのときの施主様の笑顔をたくさん見てきました。<br />そこに住まうご家族がいつまでも仲良く、笑顔で、愉しく暮らし、優しい思い出が刻み込まれる、そんな住まいを設計したいと思っています。
            </p>
          </div>
          <figure class="p-staff__figure">
            <img
              src="@/assets/images/kadel/staff_icon_nishio.png"
              alt="本社 所長 西尾 真一"
            />
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
export default {
  name: 'Kadel',
  methods: {
    changeTab: function(index, section) {
      this.section = section;
      if (this.section.currentTab == index) return false;

      this.isProcess = true;
      const self = this;
      for (let i = 0; i < this.section.show.length; i++) {
        i == index
          ? self.$set(self.section.show, index, true)
          : self.$set(self.section.show, i, false);
      }
      this.section.currentTab = index;
    },
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    afterEnter() {
      this.isProcess = false;
    }
  },
  computed: {
    checkMq: function() {
      return this.windowWidth < 1025 ? true : false;
    }
  },
  mounted() {
    this.$nextTick(() => {
      // vue起動時、ビュー全体がレンダリングされてから$nextTickでaddEvent mount → vue描画 → addEvent → ブラウザに表示(ここで制御がブラウザに移る)
      window.addEventListener('resize', this.onResize);
    });
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  data() {
    return {
      isProcess: false,
      pointerNone: false,
      textContents: {
        designTab: ['理想をかたちに', '繊細な住宅設計'],
        designText: [
          '数多くの賞を受賞する建築デザイナーが<br />お聞かせいただいたご家族のたくさんの想いとご希望を<br />自由な設計とプラスアルファなご提案で<br />理想の住まいへとかたちにいたします。',
          '「暮らしやすい間取り」「快適な家事動線」<br>綿密なヒアリングをもとに実際の暮らしを<br class="for-sp">しっかりと配慮し、<br class="for-pc">ご家族の笑顔であふれる<br class="for-sp">快適な住まいを設計いたします。'
        ]
      },
      windowWidth: window.innerWidth,
      design: {
        show: [true, false], // tab, imageの初期値
        currentTab: 0,
        currentTabBorder: '',
        slideA: [
          {
            title: 'a',
            img: 'assets/images/kadel/design_block01_img01.jpg',
            alt: 'KADeL カデル 想い描いた理想をかたちに 囲炉裏の住宅',
            modal: 'assets/images/kadel/popup/design_block01_img01-l.jpg'
          },
          {
            title: 'b',
            img: 'assets/images/kadel/design_block01_img02.jpg',
            alt: 'KADeL カデル 想い描いた理想をかたちに 瓦の家',
            modal: 'assets/images/kadel/popup/design_block01_img02-l.jpg'
          },
          {
            title: 'c',
            img: 'assets/images/kadel/design_block01_img03.jpg',
            alt: 'KADeL カデル 想い描いた理想をかたちに とおり庭の家',
            modal: 'assets/images/kadel/popup/design_block01_img03-l.jpg'
          }
        ],
        slideB: [
          {
            title: 'd',
            img: 'assets/images/kadel/design_block02_img01.jpg',
            alt: 'KADeL カデル 想い描いた理想をかたちに 眺望の家',
            modal: 'assets/images/kadel/popup/design_block02_img01-l.jpg'
          },
          {
            title: 'e',
            img: 'assets/images/kadel/design_block02_img02.jpg',
            alt: 'KADeL カデル 想い描いた理想をかたちに 中庭を囲むロの字型の家',
            modal: 'assets/images/kadel/popup/design_block02_img02-l.jpg'
          },
          {
            title: 'f',
            img: 'assets/images/kadel/design_block02_img03.jpg',
            alt: 'KADeL カデル 想い描いた理想をかたちに 大きな土庇と縁側の家',
            modal: 'assets/images/kadel/popup/design_block02_img03-l.jpg'
          }
        ]
      }
      // passive: {
      //   slideBlockA: [
      //     {
      //       img: 'assets/images/kadel/passive_block01_img01.jpg',
      //       alt: 'KADeL 環境と共に生きる 瓦の家',
      //       modal: 'assets/images/kadel/popup/passive_block01_img01-l.jpg'
      //     },
      //     {
      //       img: 'assets/images/kadel/passive_block01_img02.jpg',
      //       alt: 'KADeL 環境と共に生きる 集う家',
      //       modal: 'assets/images/kadel/popup/passive_block01_img02-l.jpg'
      //     },
      //     {
      //       img: 'assets/images/kadel/passive_block01_img03.jpg',
      //       alt: 'KADeL 環境と共に生きる 囲炉裏の住宅',
      //       modal: 'assets/images/kadel/popup/passive_block01_img03-l.jpg'
      //     }
      //   ],
      //   slideBlockB: [
      //     {
      //       img: 'assets/images/kadel/passive_block02_img01.jpg',
      //       alt: 'KADeL 環境と共に生きる 紀美野町の平屋',
      //       modal: 'assets/images/kadel/popup/passive_block02_img01-l.jpg'
      //     },
      //     {
      //       img: 'assets/images/kadel/passive_block02_img02.jpg',
      //       alt: 'KADeL 環境と共に生きる とおり庭の家',
      //       modal: 'assets/images/kadel/popup/passive_block02_img02-l.jpg'
      //     },
      //     {
      //       img: 'assets/images/kadel/passive_block02_img03.jpg',
      //       alt: 'KADeL 環境と共に生きる 囲炉裏の住宅',
      //       modal: 'assets/images/kadel/popup/passive_block02_img03-l.jpg'
      //     }
      //   ],
      //   slideBlockC: [
      //     {
      //       img: 'assets/images/kadel/passive_block03_img01.jpg',
      //       alt: 'KADeL 環境と共に生きる 瓦の家',
      //       modal: 'assets/images/kadel/popup/passive_block03_img01-l.jpg'
      //     },
      //     {
      //       img: 'assets/images/kadel/passive_block03_img02.jpg',
      //       alt: 'KADeL 環境と共に生きる 囲炉裏の住宅',
      //       modal: 'assets/images/kadel/popup/passive_block03_img02-l.jpg'
      //     },
      //     {
      //       img: 'assets/images/kadel/passive_block03_img03.jpg',
      //       alt: 'KADeL 環境と共に生きる 3角敷地に3角な3階建の家',
      //       modal: 'assets/images/kadel/popup/passive_block03_img03-l.jpg'
      //     }
      //   ]
      // },
      // support: {
      //   slideBlockA: [
      //     {
      //       img: 'assets/images/kadel/support_block01_img01.jpg',
      //       alt: 'KADeL カデル 想い描いた理想をかたちに とおり庭の家',
      //       modal: 'assets/images/kadel/popup/support_block01_img01-l.jpg'
      //     },
      //     {
      //       img: 'assets/images/kadel/support_block01_img02.jpg',
      //       alt:
      //         'KADeL カデル 想い描いた理想をかたちに A型スリットからつづくコートハウス',
      //       modal: 'assets/images/kadel/popup/support_block01_img02-l.jpg'
      //     },
      //     {
      //       img: 'assets/images/kadel/support_block01_img03.jpg',
      //       alt: 'KADeL カデル 想い描いた理想をかたちに 集う家',
      //       modal: 'assets/images/kadel/popup/support_block01_img03-l.jpg'
      //     }
      //   ],
      //   slideBlockB: [
      //     {
      //       img: 'assets/images/kadel/support_block02_img01.jpg',
      //       alt: 'KADeL カデル プロフェッショナルによるサポート 囲炉裏の住宅',
      //       modal: 'assets/images/kadel/popup/support_block02_img01-l.jpg'
      //     },
      //     {
      //       img: 'assets/images/kadel/support_block02_img02.jpg',
      //       alt:
      //         'KADeL カデル プロフェッショナルによるサポート 自然環境を取り込むフィルターの家',
      //       modal: 'assets/images/kadel/popup/support_block02_img02-l.jpg'
      //     },
      //     {
      //       img: 'assets/images/kadel/support_block02_img03.jpg',
      //       alt: 'KADeL カデル プロフェッショナルによるサポート terrace',
      //       modal: 'assets/images/kadel/popup/support_block02_img03-l.jpg'
      //     }
      //   ],
      //   slideBlockC: [
      //     {
      //       img: 'assets/images/kadel/support_block03_img01.jpg',
      //       alt:
      //         'KADeL カデル 想い描いた理想をかたちに 都市に住まう大家族の家',
      //       modal: 'assets/images/kadel/popup/support_block03_img01-l.jpg'
      //     },
      //     {
      //       img: 'assets/images/kadel/support_block03_img02.jpg',
      //       alt: 'KADeL カデル 想い描いた理想をかたちに 旗竿地の白い家',
      //       modal: 'assets/images/kadel/popup/support_block03_img02-l.jpg'
      //     },
      //     {
      //       img: 'assets/images/kadel/support_block03_img03.jpg',
      //       alt: 'KADeL カデル 想い描いた理想をかたちに 凛椛 Organic',
      //       modal: 'assets/images/kadel/popup/support_block03_img03-l.jpg'
      //     }
      //   ]
      // },
      // awards: {
      //   slideBlockA: [
      //     {
      //       img: 'assets/images/kadel/awards_slide01_img01.jpg',
      //       alt:
      //         'LIXIL MEMBERS CONTEST2017 新築部門 敢闘賞受賞 大阪府 自然環境を取り込むフィルターの家',
      //       modal: 'assets/images/kadel/popup/awards_slide01_img01-l.jpg'
      //     },
      //     {
      //       img: 'assets/images/kadel/awards_slide01_img02.jpg',
      //       alt:
      //         'LIXIL MEMBERS CONTEST2017 新築部門 敢闘賞受賞 大阪府 自然環境を取り込むフィルターの家',
      //       modal: 'assets/images/kadel/popup/awards_slide01_img02-l.jpg'
      //     },
      //     {
      //       img: 'assets/images/kadel/awards_slide01_img03.jpg',
      //       alt:
      //         'LIXIL MEMBERS CONTEST2017 新築部門 敢闘賞受賞 大阪府 自然環境を取り込むフィルターの家',
      //       modal: 'assets/images/kadel/popup/awards_slide01_img03-l.jpg'
      //     },
      //     {
      //       img: 'assets/images/kadel/awards_slide01_img04.jpg',
      //       alt:
      //         'LIXIL MEMBERS CONTEST2017 新築部門 敢闘賞受賞 大阪府 自然環境を取り込むフィルターの家',
      //       modal: 'assets/images/kadel/popup/awards_slide01_img04-l.jpg'
      //     }
      //   ],
      //   slideBlockB: [
      //     {
      //       img: 'assets/images/kadel/awards_slide02_img01.jpg',
      //       alt:
      //         'KADeL カデル LIXIL MEMBERS CONTEST2015 新築部門 関西地域最優秀賞受賞 大阪府 囲炉裏の住宅',
      //       modal: 'assets/images/kadel/popup/awards_slide02_img01-l.jpg'
      //     },
      //     {
      //       img: 'assets/images/kadel/awards_slide02_img02.jpg',
      //       alt:
      //         'KADeL カデル LIXIL MEMBERS CONTEST2015 新築部門 関西地域最優秀賞受賞 大阪府 囲炉裏の住宅',
      //       modal: 'assets/images/kadel/popup/awards_slide02_img02-l.jpg'
      //     },
      //     {
      //       img: 'assets/images/kadel/awards_slide02_img03.jpg',
      //       alt:
      //         'KADeL カデル LIXIL MEMBERS CONTEST2015 新築部門 関西地域最優秀賞受賞 大阪府 囲炉裏の住宅',
      //       modal: 'assets/images/kadel/popup/awards_slide02_img03-l.jpg'
      //     },
      //     {
      //       img: 'assets/images/kadel/awards_slide02_img04.jpg',
      //       alt:
      //         'KADeL カデル LIXIL MEMBERS CONTEST2015 新築部門 関西地域最優秀賞受賞 大阪府 囲炉裏の住宅',
      //       modal: 'assets/images/kadel/popup/awards_slide02_img04-l.jpg'
      //     }
      //   ],
      //   slideBlockC: [
      //     {
      //       img: 'assets/images/kadel/awards_slide03_img01.jpg',
      //       alt:
      //         'KADeL カデル LIXIL MEMBERS CONTEST2013 準グランプリ受賞 奈良県 とおり庭の家',
      //       modal: 'assets/images/kadel/popup/awards_slide03_img01-l.jpg'
      //     },
      //     {
      //       img: 'assets/images/kadel/awards_slide03_img02.jpg',
      //       alt:
      //         'KADeL カデル LIXIL MEMBERS CONTEST2013 準グランプリ受賞 奈良県 とおり庭の家',
      //       modal: 'assets/images/kadel/popup/awards_slide03_img02-l.jpg'
      //     },
      //     {
      //       img: 'assets/images/kadel/awards_slide03_img03.jpg',
      //       alt:
      //         'KADeL カデル LIXIL MEMBERS CONTEST2013 準グランプリ受賞 奈良県 とおり庭の家',
      //       modal: 'assets/images/kadel/popup/awards_slide03_img03-l.jpg'
      //     },
      //     {
      //       img: 'assets/images/kadel/awards_slide03_img04.jpg',
      //       alt:
      //         'KADeL カデル LIXIL MEMBERS CONTEST2013 準グランプリ受賞 奈良県 とおり庭の家',
      //       modal: 'assets/images/kadel/popup/awards_slide03_img04-l.jpg'
      //     }
      //   ],
      //   slideBlockD: [
      //     {
      //       img: 'assets/images/kadel/awards_slide04_img01.jpg',
      //       alt:
      //         'KADeL カデル LIXIL MEMBERS CONTEST 2013準グランプリ受賞 大阪府 凛椛 Classic',
      //       modal: 'assets/images/kadel/popup/awards_slide04_img01-l.jpg'
      //     },
      //     {
      //       img: 'assets/images/kadel/awards_slide04_img02.jpg',
      //       alt:
      //         'KADeL カデル LIXIL MEMBERS CONTEST 2013準グランプリ受賞 大阪府 凛椛 Classic',
      //       modal: 'assets/images/kadel/popup/awards_slide04_img02-l.jpg'
      //     },
      //     {
      //       img: 'assets/images/kadel/awards_slide04_img03.jpg',
      //       alt:
      //         'KADeL カデル LIXIL MEMBERS CONTEST 2013準グランプリ受賞 大阪府 凛椛 Classic',
      //       modal: 'assets/images/kadel/popup/awards_slide04_img03-l.jpg'
      //     },
      //     {
      //       img: 'assets/images/kadel/awards_slide04_img04.jpg',
      //       alt:
      //         'KADeL カデル LIXIL MEMBERS CONTEST 2013準グランプリ受賞 大阪府 凛椛 Classic',
      //       modal: 'assets/images/kadel/popup/awards_slide04_img04-l.jpg'
      //     }
      //   ]
      // }
    };
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

  /* トランジション用スタイル */
  .text-leave-active,
  .text-enter-active {
    transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .text-leave-active {
    position: absolute;
    opacity: 0;
  }
  .text-enter {
    transform: translateX(100%);
    opacity: 1;
  }
  .text-leave-to {
    transform: translateX(-100%);
  }

  .image-leave-active,
  .image-enter-active {
    transition: transform 1s ease-in-out;
  }

  .image-leave {
    transform: translateX(0);
  }

  .image-leave-active {
    transform: translateX(-50%);
  }

  .image-leave-to {
    transform: translateX(-100%);
  }

  .image-enter {
    transform: scale(1.2);
  }

  .image-enter-active {
    transform: scale(1.1);
  }

  .image-enter-to {
    transform: scale(1);
  }

  .handleLayer {
    @include mq(kadel-lg) {
      position: relative;
      z-index: -1;
    }
  }

  .handlePointer {
    pointer-events: none;
  }

  .is-current {
    border-bottom: 1px solid #000;
  }

  .p-mainBlock__imageBlock li {
    @include mq(kadel-lg) {
      overflow: hidden;
    }
  }

  h1,
  h2,
  h3 {
    font-weight: 300;
  }

  ul {
    list-style: none !important;
  }

  .add-bg-b {
    background-color: #000;
    color: #fff;
  }
  .p-head {
    position: relative;
    &__logo {
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

  .p-mainBlock__mark.add-border-w {
    border: solid 1px #fff;
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

  /* ---------------------------
            p-main
  ------------------------------ */
  .p-main {
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
    }

    &__figure {
      @include mq(kadel-gt-md) {
        background: url('../assets/images/kadel/hero_img.jpg') no-repeat
          center/cover;
        transition: width 1.4s cubic-bezier(0.86, 0, 0.07, 1);
        width: 100%;
      }
    }

    &__text {
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
    }

    &__scrollBtn {
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

    &__text.add-load {
      @include mq(kadel-gt-md) {
        opacity: 1;
        width: 17.6%;
      }
    }
  }

  .p-30th {
    margin-top: 80px;
    @include mq(kadel-gt-md) {
      margin-top: 120px;
      display: flex;
      justify-content: space-between;
      flex-direction: row-reverse;
    }

    &__text {
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

    &__images {
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

  .p-mainBlock {
    margin-top: 80px;
    @include mq(kadel-lg) {
      position: relative;
      margin-top: 160px;
    }

    &__mark {
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

    &__title {
      position: relative;
      font-size: 24px;
      font-weight: 600;
      line-height: 1.67;
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

    &__concept {
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

    &__tabWrap {
      @include mq(kadel-lg) {
        border-bottom: 1px solid #d5d5d5;
        display: flex;
        font-size: 1.1vw;
        line-height: 2;
        padding-right: 80px;
        position: absolute;
        z-index: 400;
      }
    }

    &__desc {
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

    &__wrap {
      position: relative;
    }

    &__content {
      @include mq(kadel-lg) {
        // overflow: hidden;
        position: absolute;
        width: 100%;
        height: auto;
      }
    }
    &__content.is-active {
      opacity: 1;
      z-index: 10;
    }

    &__textBlock {
      @include mq(kadel-lg) {
        overflow: hidden;
      }

      > p {
        font-size: 14px;
        line-height: 2;
        letter-spacing: 1px;
        margin-top: 16px;
        transition-delay: 1s;
        @include mq(kadel-lt-lg) {
          padding-left: 0.5em;
        }
        @include mq(kadel-lg) {
          font-size: 1vw;
          margin: 0;
        }
      }
    }

    &__imageBlock {
      overflow: hidden;
      li {
        opacity: 1;
      }
    }

    &__scrollImage {
      @include mq(kadel-lt-lg) {
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
        }
      }
      @include mq(kadel-md) {
        width: 85vw;
      }
    }

    .passiveImage {
      @include mq(kadel-lt-lg) {
        width: 46%;
        margin-top: 16px;
      }
    }

    &__awardList {
      width: 90%;
      margin: 72px auto 96px;
      @include mq(kadel-lg) {
        max-width: 1018px;
        margin: 88px auto 96px;
        display: inline-block;
        overflow: hidden;
        text-align: left;
      }
    }

    &__awardYear {
      font-size: 18px;
      line-height: 3.1;
      @include mq(kadel-lg) {
        float: left;
        line-height: 3;
        text-align: right;
        width: 7em;
      }
    }

    &__awardName {
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

    &__contestName {
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

      > span {
        font-size: 14px;
        font-weight: 600;
        @include mq(kadel-lg) {
          padding-left: 8px;
        }
      }

      > .add-border-w {
        &:before {
          background-color: #fff;
        }
      }
    }

    &__contestList {
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

      > dd:first-of-type {
        font-size: 18.2px;
        font-weight: 600;
        margin-top: 0;
        @include mq(kadel-lg) {
          font-size: 20px;
        }
      }

      > dd:nth-of-type(2) {
        font-size: 16px;
        font-weight: 400;
        font-family: 'Ubuntu Condensed', sans-serif;
        margin-top: 0.4em;
      }
    }

    &__nav {
      display: none;
      @include mq(kadel-lg) {
        font-size: 14px;
        font-family: 'Ubuntu Condensed', sans-serif;
        display: flex;
        justify-content: center;
        margin: 64px auto 0;

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

    &__navBtn {
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

    &--design {
      @include mq(kadel-lg) {
        height: 65.204vw;
        margin-top: 160px;

        &__mark {
          margin-left: 56px;
        }

        &__title {
          position: absolute;
          left: 40px;
          top: 172px;
          &:after {
            position: absolute;
            bottom: -8px;
            width: 200%;
          }
        }

        &__tabWrap {
          margin-left: 23.5%;
          margin-top: 42.9%;
        }

        &__desc {
          margin-left: 23.5%;
          margin-top: 32.3%;
        }

        &__wrap {
          margin-left: auto;
          margin-top: -70px;
          width: 76.4%;
        }

        &__content {
          opacity: 1;
        }

        &__textBlock {
          position: absolute;
          top: 86%;
        }

        &__imageBlock > li {
          margin-left: auto;
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

    &--passive {
      &__mark > span:last-child {
        font-size: 16px;
      }
      @include mq(kadel-lg) {
        height: 56.673vw;
        margin-top: 11.7%;

        &__mark {
          position: absolute;
          left: 47.7%;
          margin-top: 3.9%;
        }

        &__title {
          position: absolute;
          left: 47.7%;
          margin-top: 17%;
          &:after {
            right: 0;
          }
        }

        &__tabWrap {
          margin-left: 47.7%;
          margin-top: 32.3%;
        }

        &__desc {
          position: absolute;
          left: 47.7%;
          margin-top: 23.5%;
        }

        &__content {
          opacity: 1;
          display: flex;
          flex-direction: row-reverse;
        }

        &__textBlock {
          padding-left: 2.9%;
          padding-top: 36.7%;
          width: 55.1%;
          > figure {
            width: 46%;
          }
        }

        &__imageBlock {
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
    }

    &--support {
      @include mq(kadel-lg) {
        height: 66.062vw;
        margin-top: 11.7%;

        &__mark {
          margin-left: 3.5%;
        }

        &__title {
          position: absolute;
          margin-top: 4.7%;
          margin-left: 1.4%;
        }

        &__desc {
          margin-top: 11.1%;
          margin-left: 1.4%;
        }

        &__tabWrap {
          margin-top: 20%;
          margin-left: 1.4%;
        }

        &__content {
          opacity: 1;
          display: flex;
          justify-content: space-between;
        }

        &__textBlock {
          margin-left: 1.4%;
          padding-top: 25%;
          width: 44.8%;
        }

        &__imageBlock {
          width: 47.7%;
          > li {
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
    }

    &--award {
      text-align: center;
      margin-top: 120px;
      @include mq(kadel-lg) {
        margin-top: 200px;
      }

      &__mark {
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

      &__mark > span {
        font-size: 14px;
        @include mq(kadel-lg) {
          font-size: 16px;
        }
      }

      &__wrap {
        text-align: left;
        @include mq(kadel-lg) {
          height: 45.941vw;
        }
      }

      &__content {
        opacity: 1;
        @include mq(kadel-lt-lg) {
          display: flex;
          flex-direction: column-reverse;
        }
        @include mq(kadel-lg) {
          position: absolute;
        }
      }

      &__content:not(:first-of-type) {
        @include mq(kadel-lt-lg) {
          margin-top: 40px;
        }
      }

      &__textBlock {
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
      }

      &__imageBlock {
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
    }
  }

  .p-staff {
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

    &__list {
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

    &__figure {
      width: 64px;
      margin-bottom: -46px;
      @include mq(kadel-gt-md) {
        width: 20.6%;
        margin: 0;
      }
    }

    &__text {
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
        font-weight: 300;
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

  // min-width: 769px
  .for-pc {
    @include mq(kadel-sm) {
      display: none !important;
    }
  }
  // max-width: 768px
  .for-sp {
    @include mq(kadel-gt-md) {
      display: none !important;
    }
  }
  // min-width: 1025px
  .for-lg {
    @include mq(kadel-lt-lg) {
      display: none !important;
    }
  }
}
</style>
