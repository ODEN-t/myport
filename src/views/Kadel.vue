<template>
  <main class="KADeL" v-bind:class="{ 'is-black': isInAwards }">
    <section class="p-main">
      <div class="p-main__text">
        <h1>
          <span class="air">Air</span>で堪能する<br />ヨーロッパ旅行・ツアー
        </h1>
      </div>
      <div class="p-main__scrollBtn" @click="smoothScroll">
        SCROLL
        <span></span>
      </div>
      <figure class="p-main__figure"></figure>
    </section>

    <section class="p-30th" id="smooth">
      <div class="p-30th__text p-fadeIn js-fadeIn">
        <h2>
          水の都ヴェネチアと、<br />オランダを象徴する<br />風車とチューリップ
        </h2>
        <h3>自然を堪能する</h3>
        <p>
          テキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキスト
        </p>
      </div>
      <ul class="p-30th__images" id="smooth">
        <li class="p-fadeIn js-fadeIn">
          <img
            src="../assets/images/town/venice-2845272_1920.jpg"
            alt="KADeL カデル 30周年 環境共生住宅"
          />
        </li>
        <li class="p-fadeIn p-fadeIn--delay js-fadeIn">
          <img
            src="../assets/images/town/windmill-858143_1920.jpg"
            alt="KADeL カデル 30周年 環境共生住宅"
          />
        </li>
      </ul>
    </section>

    <section class="p-mainBlock p-mainBlock--design p-fadeIn js-fadeIn">
      <h2 class="p-mainBlock__title p-mainBlock--design__title">
        大自然を満喫する
      </h2>
      <p class="p-mainBlock__desc p-mainBlock--design__desc">
        テキストテキストテキストテキストテキストテキスト<br />テキストテキストテキストテキストテキストテキスト
      </p>
      <div class="p-mainBlock__tabWrap p-mainBlock--design__tabWrap for-lg">
        <slot v-for="(tab, index) in design.tabs">
          <h3
            class="p-mainBlock__concept"
            :key="tab"
            @click="changeTab(index, design)"
            v-bind:class="[
              { 'is-noPointer': isProcess },
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
            <h3 class="p-mainBlock__concept for-tb">
              アムステルダム
            </h3>
            <transition name="slide-text" v-on:after-enter="afterEnter">
              <p v-show="design.show[0]">
                テキストテキストテキストテキストテキストテキスト<br />テキストテキストテキストテキストテキストテキスト<br
                  class="for-pc"
                />テキストテキストテキストテキストテキストテキスト<br />テキストテキストテキストテキストテキストテキスト
              </p>
            </transition>
          </div>
          <ul
            class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--design__imageBlock"
          >
            <li
              v-for="imageSet in design.slide1"
              :key="imageSet.img"
              v-bind:class="{ 'is-lowLayer': design.show[0] }"
            >
              <a :href="require('@/' + imageSet.modal)" :key="imageSet.modal">
                <transition name="slide-image">
                  <img
                    :src="require('@/' + imageSet.img)"
                    :alt="imageSet.alt"
                    :key="imageSet.id"
                    v-show="checkMq || design.show[0]"
                  />
                </transition>
              </a>
            </li>
          </ul>
        </div>

        <div class="p-mainBlock__content p-mainBlock--design__content">
          <div class="p-mainBlock__textBlock p-mainBlock--design__textBlock">
            <h3 class="p-mainBlock__concept for-tb">
              繊細な住宅設計
            </h3>
            <transition name="slide-text" v-on:after-enter="afterEnter">
              <p v-show="checkMq || design.show[1]">
                テキストテキストテキストテキストテキストテキスト<br />テキストテキストテキストテキストテキストテキスト
              </p>
            </transition>
          </div>
          <ul
            class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--design__imageBlock"
          >
            <li
              v-for="imageSet in design.slide2"
              :key="imageSet.img"
              v-bind:class="{ 'is-lowLayer': design.show[1] }"
            >
              <a :href="require('@/' + imageSet.modal)" :key="imageSet.modal">
                <transition name="slide-image">
                  <img
                    :src="require('@/' + imageSet.img)"
                    :alt="imageSet.alt"
                    :key="imageSet.id"
                    v-show="checkMq || design.show[1]"
                  />
                </transition>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="p-mainBlock p-mainBlock--passive p-fadeIn js-fadeIn">
      <h2 class="p-mainBlock__title p-mainBlock--passive__title">
        中世の街並と歴史を満喫する
      </h2>
      <p class="p-mainBlock__desc p-mainBlock--passive__desc">
        テキストテキストテキストテキストテキストテキスト<br />テキストテキストテキストテキストテキストテキスト
      </p>
      <div class="p-mainBlock__tabWrap p-mainBlock--passive__tabWrap for-lg">
        <slot v-for="(tab, index) in passive.tabs">
          <h3
            class="p-mainBlock__concept"
            :key="tab"
            @click="changeTab(index, passive)"
            v-bind:class="[
              { 'is-noPointer': isProcess },
              index == passive.currentTab ? 'is-current' : ''
            ]"
          >
            {{ tab }}
          </h3>
        </slot>
      </div>
      <div class="p-mainBlock__wrap">
        <div class="p-mainBlock__content p-mainBlock--passive__content">
          <div class="p-mainBlock__textBlock p-mainBlock--passive__textBlock">
            <h3 class="p-mainBlock__concept for-tb">
              パッシブデザイン
            </h3>
            <transition name="slide-text" v-on:after-enter="afterEnter">
              <p v-show="checkMq || passive.show[0]">
                テキストテキストテキストテキストテキストテキストテキストテキスト<br />テキストテキストテキストテキストテキストテキストテキストテキスト<br
                  class="for-pc"
                />テキストテキストテキストテキストテキストテキストテキストテキスト<br />テキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </transition>
          </div>
          <ul
            class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--passive__imageBlock"
          >
            <li
              v-for="imageSet in passive.slide1"
              :key="imageSet.img"
              v-bind:class="{ 'is-lowLayer': passive.show[0] }"
            >
              <a :href="require('@/' + imageSet.modal)" :key="imageSet.modal">
                <transition name="slide-image">
                  <img
                    :src="require('@/' + imageSet.img)"
                    :alt="imageSet.alt"
                    :key="imageSet.id"
                    v-show="checkMq || passive.show[0]"
                  />
                </transition>
              </a>
            </li>
          </ul>
        </div>

        <div class="p-mainBlock__content p-mainBlock--passive__content">
          <div class="p-mainBlock__textBlock p-mainBlock--passive__textBlock">
            <h3 class="p-mainBlock__concept for-tb">
              四季と共に生きる
            </h3>
            <transition name="slide-text" v-on:after-enter="afterEnter">
              <p v-show="checkMq || passive.show[1]">
                テキストテキストテキストテキストテキストテキストテキストテキスト<br />テキストテキストテキストテキストテキストテキストテキストテキスト<br
                  class="for-pc"
                />テキストテキストテキストテキストテキストテキストテキストテキスト<br />テキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </transition>
          </div>
          <ul
            class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--passive__imageBlock"
          >
            <li
              v-for="imageSet in passive.slide2"
              :key="imageSet.img"
              v-bind:class="{ 'is-lowLayer': passive.show[1] }"
            >
              <a :href="require('@/' + imageSet.modal)" :key="imageSet.modal">
                <transition name="slide-image">
                  <img
                    :src="require('@/' + imageSet.img)"
                    :alt="imageSet.alt"
                    :key="imageSet.id"
                    v-show="checkMq || passive.show[1]"
                  />
                </transition>
              </a>
            </li>
          </ul>
        </div>

        <div class="p-mainBlock__content p-mainBlock--passive__content">
          <div class="p-mainBlock__textBlock p-mainBlock--passive__textBlock">
            <h3 class="p-mainBlock__concept for-tb">
              土地を活かす
            </h3>
            <transition name="slide-text" v-on:after-enter="afterEnter">
              <p v-show="checkMq || passive.show[2]">
                テキストテキストテキストテキストテキストテキストテキストテキスト<br />テキストテキストテキストテキストテキストテキストテキストテキスト<br
                  class="for-pc"
                />テキストテキストテキストテキストテキストテキストテキストテキスト<br />テキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </transition>
          </div>
          <ul
            class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--passive__imageBlock"
          >
            <li
              v-for="imageSet in passive.slide3"
              :key="imageSet.img"
              v-bind:class="{ 'is-lowLayer': passive.show[2] }"
            >
              <a :href="require('@/' + imageSet.modal)" :key="imageSet.modal">
                <transition name="slide-image">
                  <img
                    :src="require('@/' + imageSet.img)"
                    :alt="imageSet.alt"
                    :key="imageSet.id"
                    v-show="checkMq || passive.show[2]"
                  />
                </transition>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="p-mainBlock p-mainBlock--support p-fadeIn js-fadeIn">
      <h2 class="p-mainBlock__title p-mainBlock--support__title">
        美しい街でのひと時を満喫する
      </h2>
      <p class="p-mainBlock__desc p-mainBlock--support__desc">
        各分野のプロフェッショナルが<br
          class="for-tb"
        />それぞれの知識と技術を活かし、<br />お客様の理想の生活を<br
          class="for-tb"
        />サポートいたします。
      </p>
      <div class="p-mainBlock__tabWrap p-mainBlock--support__tabWrap for-lg">
        <slot v-for="(tab, index) in support.tabs">
          <h3
            class="p-mainBlock__concept"
            :key="tab"
            @click="changeTab(index, support)"
            v-bind:class="[
              { 'is-noPointer': isProcess },
              index == support.currentTab ? 'is-current' : ''
            ]"
          >
            {{ tab }}
          </h3>
        </slot>
      </div>
      <div class="p-mainBlock__wrap">
        <div class="p-mainBlock__content p-mainBlock--support__content">
          <div class="p-mainBlock__textBlock p-mainBlock--support__textBlock">
            <h3 class="p-mainBlock__concept for-tb">土地探し</h3>
            <transition name="slide-text" v-on:after-enter="afterEnter">
              <p v-show="checkMq || support.show[0]">
                KADeLの母体でもある、土地を扱うプロ「富国ハウジング」と建築デザインのプロ<br
                  class="for-pc"
                />「KADeL」が、それぞれの目線からお手伝いさせていただきます。<br />関西全域にある不動産会社とのネットワークを活かし、<br
                  class="for-pc"
                />お客様の想い描く理想の暮らしの実現を土地探しから実現いたします。
              </p>
            </transition>
          </div>
          <ul
            class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--support__imageBlock"
          >
            <li
              v-for="imageSet in support.slide1"
              :key="imageSet.img"
              v-bind:class="{ 'is-lowLayer': support.show[0] }"
            >
              <a :href="require('@/' + imageSet.modal)" :key="imageSet.modal">
                <transition name="slide-image">
                  <img
                    :src="require('@/' + imageSet.img)"
                    :alt="imageSet.alt"
                    :key="imageSet.id"
                    v-show="checkMq || support.show[0]"
                  />
                </transition>
              </a>
            </li>
          </ul>
        </div>

        <div class="p-mainBlock__content p-mainBlock--support__content">
          <div class="p-mainBlock__textBlock p-mainBlock--support__textBlock">
            <h3 class="p-mainBlock__concept for-tb">インテリア</h3>
            <transition name="slide-text" v-on:after-enter="afterEnter">
              <p v-show="checkMq || support.show[1]">
                KADeLでは、インテリアが入って初めて空間デザインの完成と考えています。<br />そのため、空間デザインの専門家による家具や照明などのコーディネートから<br
                  class="for-pc"
                />選び方、配置の仕方などのアドバイスまで承っています。
              </p>
            </transition>
          </div>
          <ul
            class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--support__imageBlock"
          >
            <li
              v-for="imageSet in support.slide2"
              :key="imageSet.img"
              v-bind:class="{ 'is-lowLayer': support.show[1] }"
            >
              <a :href="require('@/' + imageSet.modal)" :key="imageSet.modal">
                <transition name="slide-image">
                  <img
                    :src="require('@/' + imageSet.img)"
                    :alt="imageSet.alt"
                    :key="imageSet.id"
                    v-show="checkMq || support.show[1]"
                  />
                </transition>
              </a>
            </li>
          </ul>
        </div>

        <div class="p-mainBlock__content p-mainBlock--support__content">
          <div class="p-mainBlock__textBlock p-mainBlock--support__textBlock">
            <h3 class="p-mainBlock__concept for-tb">長期保証</h3>
            <transition name="slide-text" v-on:after-enter="afterEnter">
              <p v-show="checkMq || support.show[2]">
                お客様に快適に生活していただくためにKADeLでは、<br />「地盤保証20年」「住宅瑕疵担保責任保険10年」「防蟻保証5年」に加え、<br />最長20年の建物保証や完成保証にも対応しています。<br />また細やかな対応でサポートする「短期保証」や専任の各担当による「随時点検サービス」など、<br />万全のサポートシステムで末永くご家族の暮らしをケアいたします。
              </p>
            </transition>
          </div>
          <ul
            class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--support__imageBlock"
          >
            <li
              v-for="imageSet in support.slide3"
              :key="imageSet.img"
              v-bind:class="{ 'is-lowLayer': support.show[2] }"
            >
              <a :href="require('@/' + imageSet.modal)" :key="imageSet.modal">
                <transition name="slide-image">
                  <img
                    :src="require('@/' + imageSet.img)"
                    :alt="imageSet.alt"
                    :key="imageSet.id"
                    v-show="checkMq || support.show[2]"
                  />
                </transition>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section
      class="p-mainBlock p-mainBlock--award p-fadeIn js-fadeIn"
      id="js-background"
    >
      <h2 class="p-mainBlock__mark p-mainBlock--award__mark">
        AWARDS<span class="mod-small">受賞歴</span>
      </h2>
      <dl class="p-mainBlock__awardList">
        <dt class="p-mainBlock__awardYear">2007</dt>
        <dd class="p-mainBlock__awardName">
          第9回「あたたかな住空間デザイン」コンペティション
          住宅デザイン部門・新築の部<br class="for-tb" />
          特別賞受賞
        </dd>
        <dt class="p-mainBlock__awardYear">2009</dt>
        <dd class="p-mainBlock__awardName">
          ２１世紀の環境グランドデザインコンテスト<br class="for-tb" />
          総合部門入選 ゴールドメンバー賞受賞
        </dd>
        <dt class="p-mainBlock__awardYear">2011</dt>
        <dd class="p-mainBlock__awardName">
          住まいの環境デザイン・アワード2011<br class="for-tb" />
          特別賞受賞
        </dd>
        <dt class="p-mainBlock__awardYear">2013</dt>
        <dd class="p-mainBlock__awardName">
          LIXIL MEMBERS CONTEST 2013<br class="for-tb" />
          準グランプリ受賞
        </dd>
        <dt class="p-mainBlock__awardYear">2015</dt>
        <dd class="p-mainBlock__awardName">
          LIXIL MEMBERS CONTEST 2015<br class="for-tb" />
          新築部門 関西地域最優秀賞受賞
        </dd>
        <dt class="p-mainBlock__awardYear">2015-2018</dt>
        <dd class="p-mainBlock__awardName">
          LIXIL MEMBERS CONTEST 2015-2018<br class="for-tb" />
          敢闘賞 8作品
        </dd>
        <dt class="p-mainBlock__awardYear">2018</dt>
        <dd class="p-mainBlock__awardName">
          WOODONE 2018 空間デザイン<br class="for-tb" />施工例コンテスト<br
            class="for-tb"
          />
          最優秀賞／伊東豊雄賞 受賞
        </dd>
      </dl>

      <div class="p-mainBlock__wrap p-mainBlock--award__wrap">
        <div class="p-mainBlock__content p-mainBlock--award__content">
          <div class="p-mainBlock__textBlock p-mainBlock--award__textBlock">
            <transition name="contest-title">
              <h3
                class=" p-mainBlock__contestTitle"
                v-show="checkMq || awards.show[0]"
              >
                LIXIL MEMBERS CONTEST 2017<br class="for-sp" /><span
                  >新築部門 敢闘賞</span
                >
              </h3>
            </transition>
            <transition name="contest-data" v-on:after-enter="afterEnter">
              <dl
                class="p-mainBlock__contestList"
                v-show="checkMq || awards.show[0]"
              >
                <dt>住まい</dt>
                <dd>自然環境を取り込むフィルターの家</dd>
                <dt>地域</dt>
                <dd>OSAKA</dd>
                <dt>敷地面積</dt>
                <dd>約202.71㎡ (約61.31坪)</dd>
                <dt>延床面積</dt>
                <dd>約148.88㎡（約45.03坪）</dd>
              </dl>
            </transition>
          </div>
          <ul
            class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--award__imageBlock"
          >
            <li
              v-for="imageSet in awards.slide1"
              :key="imageSet.img"
              v-bind:class="{ 'is-lowLayer': awards.show[0] }"
            >
              <a :href="require('@/' + imageSet.modal)" :key="imageSet.modal">
                <transition name="slide-image">
                  <img
                    :src="require('@/' + imageSet.img)"
                    :alt="imageSet.alt"
                    :key="imageSet.id"
                    v-show="checkMq || awards.show[0]"
                  />
                </transition>
              </a>
            </li>
          </ul>
        </div>

        <div class="p-mainBlock__content p-mainBlock--award__content">
          <div class="p-mainBlock__textBlock p-mainBlock--award__textBlock">
            <transition name="contest-title">
              <h3
                class="p-mainBlock__contestTitle"
                v-show="checkMq || awards.show[1]"
              >
                LIXIL MEMBERS CONTEST 2015<span
                  >新築部門 関西地域最優秀賞受賞</span
                >
              </h3>
            </transition>
            <transition name="contest-data" v-on:after-enter="afterEnter">
              <dl
                class="p-mainBlock__contestList"
                v-show="checkMq || awards.show[1]"
              >
                <dt>住まい</dt>
                <dd>囲炉裏の住宅</dd>
                <dt>地域</dt>
                <dd>OSAKA</dd>
                <dt>敷地面積</dt>
                <dd>約175.57㎡ (約53.10坪)</dd>
                <dt>延床面積</dt>
                <dd>約125.23㎡（約37.88坪）</dd>
              </dl>
            </transition>
          </div>
          <ul
            class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--award__imageBlock"
          >
            <li
              v-for="imageSet in awards.slide2"
              :key="imageSet.img"
              v-bind:class="{ 'is-lowLayer': awards.show[1] }"
            >
              <a :href="require('@/' + imageSet.modal)" :key="imageSet.modal">
                <transition name="slide-image">
                  <img
                    :src="require('@/' + imageSet.img)"
                    :alt="imageSet.alt"
                    :key="imageSet.id"
                    v-show="checkMq || awards.show[1]"
                  />
                </transition>
              </a>
            </li>
          </ul>
        </div>

        <div class="p-mainBlock__content p-mainBlock--award__content">
          <div class="p-mainBlock__textBlock p-mainBlock--award__textBlock">
            <transition name="contest-title">
              <h3
                class="p-mainBlock__contestTitle"
                v-show="checkMq || awards.show[2]"
              >
                LIXIL MEMBERS CONTEST 2013<span>準グランプリ受賞</span>
              </h3>
            </transition>
            <transition name="contest-data" v-on:after-enter="afterEnter">
              <dl
                class="p-mainBlock__contestList"
                v-show="checkMq || awards.show[2]"
              >
                <dt>住まい</dt>
                <dd>とおり庭の家</dd>
                <dt>地域</dt>
                <dd>NARA</dd>
                <dt>敷地面積</dt>
                <dd>約196.88㎡ (約59.55坪)</dd>
                <dt>延床面積</dt>
                <dd>約119.60㎡（約36.18坪）</dd>
              </dl>
            </transition>
          </div>
          <ul
            class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--award__imageBlock"
          >
            <li
              v-for="imageSet in awards.slide3"
              :key="imageSet.img"
              v-bind:class="{ 'is-lowLayer': awards.show[2] }"
            >
              <a :href="require('@/' + imageSet.modal)" :key="imageSet.modal">
                <transition name="slide-image">
                  <img
                    :src="require('@/' + imageSet.img)"
                    :alt="imageSet.alt"
                    :key="imageSet.id"
                    v-show="checkMq || awards.show[2]"
                  />
                </transition>
              </a>
            </li>
          </ul>
        </div>

        <div class="p-mainBlock__content p-mainBlock--award__content">
          <div class="p-mainBlock__textBlock p-mainBlock--award__textBlock">
            <transition name="contest-title">
              <h3
                class="p-mainBlock__contestTitle"
                v-show="checkMq || awards.show[3]"
              >
                住まいの環境デザイン・アワード2011<span>新築部門 敢闘賞</span>
              </h3>
            </transition>
            <transition name="contest-data" v-on:after-enter="afterEnter">
              <dl
                class="p-mainBlock__contestList"
                v-show="checkMq || awards.show[3]"
              >
                <dt>住まい</dt>
                <dd>凛椛 Classic</dd>
                <dt>地域</dt>
                <dd>OSAKA</dd>
                <dt>敷地面積</dt>
                <dd>約106.17㎡ (約32.11坪)</dd>
                <dt>延床面積</dt>
                <dd>約110.66㎡（約33.47坪）</dd>
              </dl>
            </transition>
          </div>
          <ul
            class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--award__imageBlock"
          >
            <li
              v-for="imageSet in awards.slide4"
              :key="imageSet.img"
              v-bind:class="{ 'is-lowLayer': awards.show[3] }"
            >
              <a :href="require('@/' + imageSet.modal)" :key="imageSet.modal">
                <transition name="slide-image">
                  <img
                    :src="require('@/' + imageSet.img)"
                    :alt="imageSet.alt"
                    :key="imageSet.id"
                    v-show="checkMq || awards.show[3]"
                  />
                </transition>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <ul class="p-mainBlock__nav">
        <li
          class="p-mainBlock__navBtn"
          v-for="(nav, index) of 4"
          :key="nav"
          @click="changeTab(index, awards)"
          v-bind:class="[
            { 'is-noPointer': isProcess },
            index == awards.currentTab ? 'is-current' : ''
          ]"
        ></li>
      </ul>
    </section>

    <section class="p-staff">
      <h2>スタッフ<span>Staff</span></h2>
      <p class="p-fadeIn js-fadeIn">
        お客さまをの家づくりをお手伝いさせていただく<br
          class="for-pc"
        />スタッフを一部ご紹介いたします。<br />その他土地探しのプロや営業として<br
          class="for-sp"
        />サポートさせていただく<br />スタッフ約25名が在籍しております。
      </p>
      <ul class="p-staff__list">
        <li class="p-fadeIn js-fadeIn">
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
        <li class="p-fadeIn js-fadeIn">
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
        <li class="p-fadeIn js-fadeIn">
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
  </main>
</template>

<script>
export default {
  name: 'Kadel',
  methods: {
    smoothScroll() {
      let target = document.getElementById('smooth');
      const headerHeight = document.getElementById('header').clientHeight;
      let offsetTop = window.pageYOffset; // documentを上端からのスクロール量
      let rectTop = target.getBoundingClientRect().top; // viewport左上端からのdocumentを全体とした相対位置
      let top = rectTop + offsetTop - headerHeight - 20;

      window.scrollTo({
        top, // 変数名は top で固定されている
        behavior: 'smooth'
      });
    },
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
    },
    afterTransitionEnter() {
      this.isLoadedWidth = true;
    },
    observing() {
      const options = {
        background: {
          root: null,
          rootMargin: '-25% 0px',
          threshold: 0
        },
        fadeIn: {
          root: null,
          rootMargin: '-30% 0px',
          threshold: 0
        }
      };
      const targets = {
        background: document.getElementById('js-background'),
        fadeIn: document.querySelectorAll('.js-fadeIn')
      };

      const changeBackGround = entry =>
        entry[0].isIntersecting
          ? (this.isInAwards = true)
          : (this.isInAwards = false);

      const scrollFadeIn = entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-onScreen');
            scrollFadeInObserver.unobserve(entry.target);
          }
        });
      };

      const backGroundObserver = new IntersectionObserver(
        changeBackGround,
        options.background
      );
      const scrollFadeInObserver = new IntersectionObserver(
        scrollFadeIn,
        options.fadeIn
      );

      backGroundObserver.observe(targets.background);
      targets.fadeIn.forEach(target => {
        scrollFadeInObserver.observe(target);
      });
    }
  },
  computed: {
    checkMq: function() {
      return this.windowWidth < 1025 ? true : false;
    }
  },
  mounted() {
    this.$nextTick(() => {
      // ビュー全体(子コンポーネントも含め)がレンダリングされてから$nextTickでaddEvent mount → vue描画 → addEvent → ブラウザに表示(ここで制御がブラウザに移る)
      window.addEventListener('resize', this.onResize);
    });
    this.observing();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  data() {
    return {
      isLoadedWidth: false,
      isProcess: false,
      isInAwards: false,
      pointerNone: false,
      windowWidth: window.innerWidth,
      design: {
        show: [true, false], // tab, imageの初期値
        tabs: ['雄大な大自然', 'ビーチリゾート'],
        currentTab: 0,
        slide1: [
          {
            id: 'Design1-1',
            img: 'assets/images/airtravel/alps_switzerland-min.jpg',
            alt: '',
            modal: 'assets/images/kadel/popup/design_block01_img01-l.jpg'
          },
          {
            id: 'Design1-2',
            img: 'assets/images/airtravel/strokkur_iceland-min.jpg',
            alt: 'オランダ アムステルダム ',
            modal: 'assets/images/kadel/popup/design_block01_img02-l.jpg'
          },
          {
            id: 'Design1-3',
            img: 'assets/images/airtravel/plitviceLakes_croatia-min.jpg',
            alt: 'KADeL カデル 想い描いた理想をかたちに とおり庭の家',
            modal: 'assets/images/kadel/popup/design_block01_img03-l.jpg'
          }
        ],
        slide2: [
          {
            id: 'Design2-1',
            img: 'assets/images/airtravel/beach_sicily-min.jpg',
            alt: 'KADeL カデル 想い描いた理想をかたちに 眺望の家',
            modal: 'assets/images/kadel/popup/design_block02_img01-l.jpg'
          },
          {
            id: 'Design2-2',
            img: 'assets/images/airtravel/beach_mallorca-min.jpg',
            alt: 'KADeL カデル 想い描いた理想をかたちに 中庭を囲むロの字型の家',
            modal: 'assets/images/kadel/popup/design_block02_img02-l.jpg'
          },
          {
            id: 'Design2-3',
            img: 'assets/images/airtravel/beach_zakynthos-min.jpg',
            alt: 'KADeL カデル 想い描いた理想をかたちに 大きな土庇と縁側の家',
            modal: 'assets/images/kadel/popup/design_block02_img03-l.jpg'
          }
        ]
      },
      passive: {
        show: [true, false, false], // tab, imageの初期値
        tabs: ['歴史を感じる街並', '宮殿・大聖堂', '美術館・博物館'],
        currentTab: 0,
        slide1: [
          {
            id: 'Passive1-1',
            img: 'assets/images/airtravel/town_czech-min.jpg',
            alt: 'KADeL 環境と共に生きる 瓦の家',
            modal: 'assets/images/kadel/popup/passive_block01_img01-l.jpg'
          },
          {
            id: 'Passive1-2',
            img: 'assets/images/airtravel/town_germany-min.jpg',
            alt: 'KADeL 環境と共に生きる 集う家',
            modal: 'assets/images/kadel/popup/passive_block01_img02-l.jpg'
          },
          {
            id: 'Passive1-3',
            img: 'assets/images/airtravel/town_belgium-min.jpg',
            alt: 'KADeL 環境と共に生きる 囲炉裏の住宅',
            modal: 'assets/images/kadel/popup/passive_block01_img03-l.jpg'
          }
        ],
        slide2: [
          {
            id: 'Passive2-1',
            img: 'assets/images/airtravel/palace_germany-min.jpg',
            alt: 'KADeL 環境と共に生きる 紀美野町の平屋',
            modal: 'assets/images/kadel/popup/passive_block01_img03-l.jpg'
          },
          {
            id: 'Passive2-2',
            img: 'assets/images/airtravel/palace_british-min.jpg',
            alt: 'KADeL 環境と共に生きる とおり庭の家',
            modal: 'assets/images/kadel/popup/passive_block01_img03-l.jpg'
          },
          {
            id: 'Passive2-3',
            img: 'assets/images/airtravel/catedral_france-min.jpg',
            alt: 'KADeL 環境と共に生きる 囲炉裏の住宅',
            modal: 'assets/images/kadel/popup/passive_block01_img03-l.jpg'
          }
        ],
        slide3: [
          {
            id: 'Passive3-1',
            img: 'assets/images/airtravel/museum_british-min.jpg',
            alt: 'KADeL 環境と共に生きる 瓦の家',
            modal: 'assets/images/kadel/popup/passive_block01_img03-l.jpg'
          },
          {
            id: 'Passive3-2',
            img: 'assets/images/airtravel/museum_france-min.jpg',
            alt: 'KADeL 環境と共に生きる 囲炉裏の住宅',
            modal: 'assets/images/kadel/popup/passive_block01_img03-l.jpg'
          },
          {
            id: 'Passive3-3',
            img: 'assets/images/airtravel/museum_vatican-min.jpg',
            alt: 'KADeL 環境と共に生きる 3角敷地に3角な3階建の家',
            modal: 'assets/images/kadel/popup/passive_block01_img03-l.jpg'
          }
        ]
      },
      support: {
        show: [true, false, false], // tab, imageの初期値
        tabs: ['地中海を望む街並み', 'カフェ文化', 'グルメ巡り'],
        currentTab: 0,
        slide1: [
          {
            id: 'Support1-1',
            img: 'assets/images/kadel/support_block01_img01.jpg',
            alt: 'KADeL カデル 想い描いた理想をかたちに とおり庭の家',
            modal: 'assets/images/kadel/popup/support_block01_img01-l.jpg'
          },
          {
            id: 'Support1-2',
            img: 'assets/images/kadel/support_block01_img02.jpg',
            alt:
              'KADeL カデル 想い描いた理想をかたちに A型スリットからつづくコートハウス',
            modal: 'assets/images/kadel/popup/support_block01_img02-l.jpg'
          },
          {
            id: 'Support1-3',
            img: 'assets/images/kadel/support_block01_img03.jpg',
            alt: 'KADeL カデル 想い描いた理想をかたちに 集う家',
            modal: 'assets/images/kadel/popup/support_block01_img03-l.jpg'
          }
        ],
        slide2: [
          {
            id: 'Support2-1',
            img: 'assets/images/kadel/support_block02_img01.jpg',
            alt: 'KADeL カデル プロフェッショナルによるサポート 囲炉裏の住宅',
            modal: 'assets/images/kadel/popup/support_block02_img01-l.jpg'
          },
          {
            id: 'Support2-2',
            img: 'assets/images/kadel/support_block02_img02.jpg',
            alt:
              'KADeL カデル プロフェッショナルによるサポート 自然環境を取り込むフィルターの家',
            modal: 'assets/images/kadel/popup/support_block02_img02-l.jpg'
          },
          {
            id: 'Support2-3',
            img: 'assets/images/kadel/support_block02_img03.jpg',
            alt: 'KADeL カデル プロフェッショナルによるサポート terrace',
            modal: 'assets/images/kadel/popup/support_block02_img03-l.jpg'
          }
        ],
        slide3: [
          {
            id: 'Support3-1',
            img: 'assets/images/kadel/support_block03_img01.jpg',
            alt: 'KADeL カデル 想い描いた理想をかたちに 都市に住まう大家族の家',
            modal: 'assets/images/kadel/popup/support_block03_img01-l.jpg'
          },
          {
            id: 'Support3-2',
            img: 'assets/images/kadel/support_block03_img02.jpg',
            alt: 'KADeL カデル 想い描いた理想をかたちに 旗竿地の白い家',
            modal: 'assets/images/kadel/popup/support_block03_img02-l.jpg'
          },
          {
            id: 'Support3-3',
            img: 'assets/images/kadel/support_block03_img03.jpg',
            alt: 'KADeL カデル 想い描いた理想をかたちに 凛椛 Organic',
            modal: 'assets/images/kadel/popup/support_block03_img03-l.jpg'
          }
        ]
      },
      awards: {
        show: [true, false, false, false], // tab, imageの初期値
        currentTab: 0,
        slide1: [
          {
            id: 'Awards1-1',
            img: 'assets/images/kadel/awards_slide01_img01.jpg',
            alt:
              'LIXIL MEMBERS CONTEST2017 新築部門 敢闘賞受賞 大阪府 自然環境を取り込むフィルターの家',
            modal: 'assets/images/kadel/popup/awards_slide01_img01-l.jpg'
          },
          {
            id: 'Awards1-2',
            img: 'assets/images/kadel/awards_slide01_img02.jpg',
            alt:
              'LIXIL MEMBERS CONTEST2017 新築部門 敢闘賞受賞 大阪府 自然環境を取り込むフィルターの家',
            modal: 'assets/images/kadel/popup/awards_slide01_img02-l.jpg'
          },
          {
            id: 'Awards1-3',
            img: 'assets/images/kadel/awards_slide01_img03.jpg',
            alt:
              'LIXIL MEMBERS CONTEST2017 新築部門 敢闘賞受賞 大阪府 自然環境を取り込むフィルターの家',
            modal: 'assets/images/kadel/popup/awards_slide01_img03-l.jpg'
          },
          {
            id: 'Awards1-4',
            img: 'assets/images/kadel/awards_slide01_img04.jpg',
            alt:
              'LIXIL MEMBERS CONTEST2017 新築部門 敢闘賞受賞 大阪府 自然環境を取り込むフィルターの家',
            modal: 'assets/images/kadel/popup/awards_slide01_img04-l.jpg'
          }
        ],
        slide2: [
          {
            id: 'Awards2-1',
            img: 'assets/images/kadel/awards_slide02_img01.jpg',
            alt:
              'KADeL カデル LIXIL MEMBERS CONTEST2015 新築部門 関西地域最優秀賞受賞 大阪府 囲炉裏の住宅',
            modal: 'assets/images/kadel/popup/awards_slide02_img01-l.jpg'
          },
          {
            id: 'Awards2-2',
            img: 'assets/images/kadel/awards_slide02_img02.jpg',
            alt:
              'KADeL カデル LIXIL MEMBERS CONTEST2015 新築部門 関西地域最優秀賞受賞 大阪府 囲炉裏の住宅',
            modal: 'assets/images/kadel/popup/awards_slide02_img02-l.jpg'
          },
          {
            id: 'Awards2-3',
            img: 'assets/images/kadel/awards_slide02_img03.jpg',
            alt:
              'KADeL カデル LIXIL MEMBERS CONTEST2015 新築部門 関西地域最優秀賞受賞 大阪府 囲炉裏の住宅',
            modal: 'assets/images/kadel/popup/awards_slide02_img03-l.jpg'
          },
          {
            id: 'Awards2-4',
            img: 'assets/images/kadel/awards_slide02_img04.jpg',
            alt:
              'KADeL カデル LIXIL MEMBERS CONTEST2015 新築部門 関西地域最優秀賞受賞 大阪府 囲炉裏の住宅',
            modal: 'assets/images/kadel/popup/awards_slide02_img04-l.jpg'
          }
        ],
        slide3: [
          {
            id: 'Awards3-1',
            img: 'assets/images/kadel/awards_slide03_img01.jpg',
            alt:
              'KADeL カデル LIXIL MEMBERS CONTEST2013 準グランプリ受賞 奈良県 とおり庭の家',
            modal: 'assets/images/kadel/popup/awards_slide03_img01-l.jpg'
          },
          {
            id: 'Awards3-2',
            img: 'assets/images/kadel/awards_slide03_img02.jpg',
            alt:
              'KADeL カデル LIXIL MEMBERS CONTEST2013 準グランプリ受賞 奈良県 とおり庭の家',
            modal: 'assets/images/kadel/popup/awards_slide03_img02-l.jpg'
          },
          {
            id: 'Awards3-3',
            img: 'assets/images/kadel/awards_slide03_img03.jpg',
            alt:
              'KADeL カデル LIXIL MEMBERS CONTEST2013 準グランプリ受賞 奈良県 とおり庭の家',
            modal: 'assets/images/kadel/popup/awards_slide03_img03-l.jpg'
          },
          {
            id: 'Awards3-4',
            img: 'assets/images/kadel/awards_slide03_img04.jpg',
            alt:
              'KADeL カデル LIXIL MEMBERS CONTEST2013 準グランプリ受賞 奈良県 とおり庭の家',
            modal: 'assets/images/kadel/popup/awards_slide03_img04-l.jpg'
          }
        ],
        slide4: [
          {
            id: 'Awards4-1',
            img: 'assets/images/kadel/awards_slide04_img01.jpg',
            alt:
              'KADeL カデル LIXIL MEMBERS CONTEST 2013準グランプリ受賞 大阪府 凛椛 Classic',
            modal: 'assets/images/kadel/popup/awards_slide04_img01-l.jpg'
          },
          {
            id: 'Awards4-2',
            img: 'assets/images/kadel/awards_slide04_img02.jpg',
            alt:
              'KADeL カデル LIXIL MEMBERS CONTEST 2013準グランプリ受賞 大阪府 凛椛 Classic',
            modal: 'assets/images/kadel/popup/awards_slide04_img02-l.jpg'
          },
          {
            id: 'Awards4-3',
            img: 'assets/images/kadel/awards_slide04_img03.jpg',
            alt:
              'KADeL カデル LIXIL MEMBERS CONTEST 2013準グランプリ受賞 大阪府 凛椛 Classic',
            modal: 'assets/images/kadel/popup/awards_slide04_img03-l.jpg'
          },
          {
            id: 'Awards4-4',
            img: 'assets/images/kadel/awards_slide04_img04.jpg',
            alt:
              'KADeL カデル LIXIL MEMBERS CONTEST 2013準グランプリ受賞 大阪府 凛椛 Classic',
            modal: 'assets/images/kadel/popup/awards_slide04_img04-l.jpg'
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss">
.KADeL {
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Red+Rose:wght@300;400;700&display=swap');
  font-family: 'Red Rose', cursive, 'Noto Sans JP', sans-serif,
    'Hiragino Kaku Gothic ProN', メイリオ;
  padding-top: 30px;
  color: rgb(38, 38, 38);
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.1em;
  line-height: 1.7;
  background-color: #fff;
  padding-bottom: 40px;
  position: relative;
  z-index: 1500;
  @include mq(kadel-sm) {
    padding-top: 60px;
    border-right: 10px solid #fff;
    border-left: 10px solid #fff;
  }
  @include mq(kadel-gt-md) {
    padding-top: 50px;
    border-right: 20px solid #fff;
    border-left: 20px solid #fff;
    &:before {
      background-color: #fff;
      content: '';
      display: block;
      height: 20px;
      top: 0;
      width: 100%;
      z-index: 10;
    }
  }

  /* -----------------
        共通
  ------------------- */
  h1,
  h2,
  h3 {
    font-weight: 300;
  }

  ul {
    list-style: none !important;
  }

  .en {
    font-size: 1.15em;
  }

  .p-fadeIn {
    opacity: 0;
    transform: translateY(50px);
    transition: transform 1.15s, opacity 1.15s;
    &--delay {
      transition-delay: 0.2s;
    }
    &.is-onScreen {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* -----------------
        p-main
  ------------------- */
  .p-main {
    position: relative;
    @include mq(kadel-gt-md) {
      display: flex;
      flex-direction: row-reverse;
      height: calc(100vh - 90px);
      width: 100%;
    }

    &__text {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      text-align: center;
      transform: translateY(-50%);

      > h1 {
        color: #fff;
        font-size: calc(43 / 1025 * 100vw);
        font-weight: 500;
        letter-spacing: 3px;
      }

      .air {
        font-size: 2em;
      }
    }

    &__figure {
      @include mq(kadel-gt-md) {
        background: url('../assets/images/town/paris.jpg') no-repeat
          center/cover;
        transition: width 1.4s cubic-bezier(0.86, 0, 0.07, 1);
        width: 100%;
        transform: translate3D(0, 0, 0);
        z-index: -1;
      }
    }

    &__scrollBtn {
      position: absolute;
      bottom: 0;
      right: 1em;
      font-size: calc(14 / 1025 * 100vw);
      font-weight: 600;
      padding-bottom: 168px;
      z-index: 900;
      color: #fff;
      cursor: pointer;
      writing-mode: vertical-rl;
      @include mq(kadel-gt-md) {
        color: #fff;
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
            background-color: #fff;
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

  /* -----------------
        p-30th
  ------------------- */
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

  /* -----------------
      p-mainBlock
  ------------------- */
  .p-mainBlock {
    margin-top: 80px;
    @include mq(kadel-lg) {
      position: relative;
      margin-top: 160px;
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
        font-size: calc(14 / 1025 * 100vw);
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
        font-size: calc(15 / 1025 * 100vw);
        margin-top: 6.7%;
      }
    }

    &__wrap {
      position: relative;
    }

    &__content {
      @include mq(kadel-lg) {
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
        @include mq(kadel-lt-lg) {
          padding-left: 0.5em;
        }
        @include mq(kadel-lg) {
          font-size: calc(13 / 1025 * 100vw);
          margin: 0;
        }
      }
    }

    &__imageBlock {
      overflow: hidden;
      li {
        opacity: 1;
        @include mq(kadel-lg) {
          overflow: hidden;
        }
      }
    }

    &__scrollImage {
      @include mq(kadel-lt-lg) {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
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

        > li:not(:last-child) {
          margin-right: 10px;
        }

        img {
          height: 130px;
          width: auto;
        }
      }
      @include mq(kadel-md) {
        > li {
          width: 100%;
          min-width: 100%;
          height: 130px;
        }

        img {
          height: 130px;
          width: 100%;
        }
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

    &__contestTitle {
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
        opacity: 0;
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
      &.is-current {
        background-color: #262626;
        &:before {
          opacity: 1;
        }
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
          top: -6px;
          &:after {
            position: absolute;
            bottom: -8px;
            width: 200%;
          }
        }

        &__tabWrap {
          margin-top: 46.9%;
          margin-left: 24.1%;
        }

        &__desc {
          margin-left: 24%;
          margin-top: 38.3%;
        }

        &__wrap {
          margin-left: auto;
          width: 76.5%;
        }

        &__content {
          opacity: 1;
        }

        &__textBlock {
          position: absolute;
          top: 79%;
        }

        &__imageBlock > li {
          margin-left: auto;
          line-height: 0;
          &:nth-child(1) {
            width: 100%;
          }
          &:nth-child(2) {
            width: 31%;
            margin-top: 0.9%;
          }
          &:nth-child(3) {
            width: 31%;
            margin-top: 0.9%;
          }
        }
      }
    }

    &--passive {
      @include mq(kadel-lg) {
        height: 66.373vw;
        margin-top: 11.7%;

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
          padding-right: 39px;
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
          position: absolute;
          top: 55%;
          left: 49%;
        }

        &__imageBlock {
          display: flex;
          > li {
            padding: 0 1em;
            &:nth-child(1) {
              order: 3;
            }
            &:nth-child(2) {
              order: 2;
            }
            &:nth-child(3) {
              order: 1;
              width: 100%;
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

  /* -----------------
        p-staff
  ------------------- */
  .p-staff {
    background: url('../assets/images/kadel/staff_img01.jpg') no-repeat left
      320px top 720px;
    background-position: left top;
    margin: 130px auto 0;
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
        @include mq(kadel-gt-md) {
          flex-direction: row-reverse;
        }
      }

      > li:not(:last-child) {
        margin-bottom: 40px;
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

  /* ディスプレイスタイル */
  .for-pc {
    // min-width: 769px displayBlock
    @include mq(kadel-sm) {
      display: none !important;
    }
  }

  .for-sp {
    // max-width: 768px displayBlock
    @include mq(kadel-gt-md) {
      display: none !important;
    }
  }

  .for-tb {
    // max-width: 1024px displayBlock
    @include mq(kadel-lg) {
      display: none !important;
    }
  }

  .for-lg {
    // min-width: 1025px displayBlock
    @include mq(kadel-lt-lg) {
      display: none !important;
    }
  }

  /* トランジションスタイル */
  .loaded-logo {
    &-enter-active {
      transition: opacity 2s cubic-bezier(0.86, 0, 0.07, 1);
      transition-delay: 0.8s;
    }
    &-enter {
      opacity: 0;
    }
    &-enter-to {
      opacity: 1;
    }
  }

  @include mq(kadel-gt-md) {
    .loaded-title-area {
      &-leave,
      &-leave-active,
      &-leave-to {
        width: 0;
      }
      &-enter-active {
        transition: width 1.4s cubic-bezier(0.165, 0.84, 0.44, 1),
          opacity 1.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        transition-delay: 1s;
      }
      &-enter {
        width: 0;
        opacity: 0;
      }
      &-enter-to {
        width: 17.64706%;
        opacity: 1;
      }
    }
  }

  .loaded-title-mobile {
    &-leave,
    &-leave-active,
    &-leave-to {
      opacity: 0;
      transform: translateY(-20px);
    }
    &-enter {
      opacity: 0;
      transform: translateY(-20px);
    }
    &-enter-active {
      transition: opacity 1.3s ease, transform 1.3s ease;
      transition-delay: 1.8s;
    }
    &-enter-to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .loaded-subtitle-mobile {
    &-leave,
    &-leave-active,
    &-leave-to {
      opacity: 0;
      transform: translateY(-20px);
    }
    &-enter {
      opacity: 0;
      transform: translateY(-20px);
    }
    &-enter-active {
      transition: opacity 1.1s ease, transform 1.1s ease;
      transition-delay: 1.75s;
    }
    &-enter-to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .slide-text {
    &-leave-active,
    &-enter-active {
      transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1);
      transition-delay: 1s;
    }
    &-leave-active {
      position: absolute;
      opacity: 0;
    }
    &-leave-to {
      transform: translateX(-100%);
    }
    &-enter {
      transform: translateX(100%);
      opacity: 1;
    }
  }

  .slide-image {
    &-leave-active,
    &-enter-active {
      transition: transform 1s ease-in-out;
    }
    &-leave {
      transform: translateX(0);
    }
    &-leave-active {
      transform: translateX(-50%);
    }
    &-leave-to {
      transform: translateX(-100%);
    }
    &-enter {
      transform: scale(1.2);
    }
    &-enter-active {
      transform: scale(1.1);
    }
    &-enter-to {
      transform: scale(1);
    }
  }

  .passive-image {
    &-enter {
      opacity: 0;
    }
    &-enter-active {
      transition: opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1);
      transition-delay: 1.6s;
    }
    &-enter-to {
      opacity: 1;
    }
  }

  .contest {
    &-title {
      &-leave-active {
        transition: opacity 0.1s cubic-bezier(0.23, 1, 0.32, 1);
      }
      &-enter-active {
        transition: opacity 1.5s cubic-bezier(0.23, 1, 0.32, 1);
        transition-delay: 1s;
      }
      &-leave-to {
        opacity: 0;
      }
      &-enter {
        opacity: 0;
      }
      &-enter-active {
        opacity: 0;
      }
      &-enter-to {
        opacity: 1;
      }
    }

    &-data {
      &-leave-active {
        transition: transform 0.1s cubic-bezier(0.23, 1, 0.32, 1),
          opacity 0.1s cubic-bezier(0.23, 1, 0.32, 1);
      }
      &-enter-active {
        transition: transform 1.5s cubic-bezier(0.23, 1, 0.32, 1),
          opacity 1.5s cubic-bezier(0.23, 1, 0.32, 1);
        transition-delay: 1.2s;
      }
      &-leave {
        opacity: 0;
        transform: translateY(10px);
      }
      &-leave-to {
        opacity: 0;
      }
      &-enter {
        opacity: 0;
        transform: translateY(10px);
      }
      &-enter-to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  /* 状態変化スタイル */
  &.is-black {
    background-color: #000;
    color: #fff;
    .is-current {
      border-color: #fff;
    }
    .p-mainBlock__mark {
      border-color: #fff;
    }
    .p-mainBlock__tabWrap {
      border-color: #000;
    }
    .p-mainBlock__navBtn.is-current {
      background-color: #fff;
      border: none;
    }
  }

  .is-lowLayer {
    @include mq(kadel-lg) {
      position: relative;
      z-index: -1;
    }
  }

  .is-noPointer {
    pointer-events: none;
  }

  .is-current {
    border-bottom: 1px solid #000;
  }
}
</style>
