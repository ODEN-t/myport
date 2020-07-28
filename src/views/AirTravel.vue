<template>
  <main class="AirTravel">
    <section class="p-main">
      <div class="p-main__text">
        <h1>
          <span class="air">Air Travel</span><br />ヨーロッパ旅行・ツアー特集
        </h1>
      </div>
      <div class="p-main__scrollBtn" @click="smoothScroll">
        SCROLL
        <span></span>
      </div>
      <figure class="p-main__figure"></figure>
    </section>

    <section class="p-head" id="smooth">
      <div class="p-head__text p-fadeIn js-fadeIn">
        <h2>
          ヨーロッパのみで味わえる<br />文化、芸術、歴史の魅力を<br />存分に味わえる旅にする
        </h2>
        <h3>Air Travelで行くヨーロッパ旅行</h3>
        <p>
          テキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキスト
        </p>
      </div>
      <ul class="p-head__images" id="smooth">
        <li class="p-fadeIn js-fadeIn">
          <img
            src="../assets/images/airtravel/town_venice.jpg"
            alt="イタリア ヴェネツィア 水路"
          />
        </li>
        <li class="p-fadeIn p-fadeIn--delay js-fadeIn">
          <img
            src="../assets/images/airtravel/windmill-858143_1920.jpg"
            alt="オランダ アムステルダム 風車とチューリップ"
          />
        </li>
      </ul>
    </section>

    <section class="p-mainBlock p-mainBlock--nature p-fadeIn js-fadeIn">
      <h2 class="p-mainBlock__title p-mainBlock--nature__title">
        大自然を満喫する
      </h2>
      <p class="p-mainBlock__desc p-mainBlock--nature__desc">
        テキストテキストテキストテキストテキストテキスト<br
          class="for-lg"
        />テキストテキストテキストテキストテキストテキスト
      </p>
      <div class="p-mainBlock__tabWrap p-mainBlock--nature__tabWrap for-lg">
        <slot v-for="(tab, index) in nature.tabs">
          <h3
            class="p-mainBlock__concept"
            :key="tab"
            @click="changeTab(index, nature)"
            v-bind:class="[
              { 'is-noPointer': isProcess },
              index == nature.currentTab ? 'is-current' : ''
            ]"
          >
            {{ tab }}
          </h3>
        </slot>
      </div>
      <div class="p-mainBlock__wrap p-mainBlock--nature__wrap">
        <div class="p-mainBlock__content p-mainBlock--nature__content">
          <div class="p-mainBlock__textBlock p-mainBlock--nature__textBlock">
            <h3 class="p-mainBlock__concept for-tb">
              雄大な大自然
            </h3>
            <transition name="slide-text" v-on:after-enter="afterEnter">
              <p v-show="nature.show[0]">
                テキストテキストテキストテキストテキストテキストテキストテキスト<br
                  class="for-lg"
                />テキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </transition>
          </div>
          <ul
            class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--nature__imageBlock"
          >
            <li
              v-for="imageSet in nature.slide1"
              :key="imageSet.img"
              v-bind:class="{ 'is-lowLayer': nature.show[0] }"
            >
              <transition name="slide-image">
                <img
                  :src="require('@/' + imageSet.img)"
                  :alt="imageSet.alt"
                  :key="imageSet.id"
                  v-show="checkMq || nature.show[0]"
                />
              </transition>
            </li>
          </ul>
        </div>

        <div class="p-mainBlock__content p-mainBlock--nature__content">
          <div class="p-mainBlock__textBlock p-mainBlock--nature__textBlock">
            <h3 class="p-mainBlock__concept for-tb">
              ビーチリゾート
            </h3>
            <transition name="slide-text" v-on:after-enter="afterEnter">
              <p v-show="checkMq || nature.show[1]">
                テキストテキストテキストテキストテキストテキスト<br
                  class="for-lg"
                />テキストテキストテキストテキストテキストテキスト
              </p>
            </transition>
          </div>
          <ul
            class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--nature__imageBlock"
          >
            <li
              v-for="imageSet in nature.slide2"
              :key="imageSet.img"
              v-bind:class="{ 'is-lowLayer': nature.show[1] }"
            >
              <transition name="slide-image">
                <img
                  :src="require('@/' + imageSet.img)"
                  :alt="imageSet.alt"
                  :key="imageSet.id"
                  v-show="checkMq || nature.show[1]"
                />
              </transition>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="p-mainBlock p-mainBlock--history p-fadeIn js-fadeIn">
      <h2 class="p-mainBlock__title p-mainBlock--history__title">
        中世の街並と歴史を満喫する
      </h2>
      <p class="p-mainBlock__desc p-mainBlock--history__desc">
        テキストテキストテキストテキストテキストテキスト<br
          class="for-lg"
        />テキストテキストテキストテキストテキストテキスト
      </p>
      <div class="p-mainBlock__tabWrap p-mainBlock--history__tabWrap for-lg">
        <slot v-for="(tab, index) in history.tabs">
          <h3
            class="p-mainBlock__concept"
            :key="tab"
            @click="changeTab(index, history)"
            v-bind:class="[
              { 'is-noPointer': isProcess },
              index == history.currentTab ? 'is-current' : ''
            ]"
          >
            {{ tab }}
          </h3>
        </slot>
      </div>
      <div class="p-mainBlock__wrap">
        <div class="p-mainBlock__content p-mainBlock--history__content">
          <div class="p-mainBlock__textBlock p-mainBlock--history__textBlock">
            <h3 class="p-mainBlock__concept for-tb">
              歴史を感じる街並
            </h3>
            <transition name="slide-text" v-on:after-enter="afterEnter">
              <p v-show="checkMq || history.show[0]">
                テキストテキストテキストテキストテキストテキストテキストテキスト<br
                  class="for-lg"
                />テキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </transition>
          </div>
          <ul
            class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--history__imageBlock"
          >
            <li
              v-for="imageSet in history.slide1"
              :key="imageSet.img"
              v-bind:class="{ 'is-lowLayer': history.show[0] }"
            >
              <transition name="slide-image">
                <img
                  :src="require('@/' + imageSet.img)"
                  :alt="imageSet.alt"
                  :key="imageSet.id"
                  v-show="checkMq || history.show[0]"
                />
              </transition>
            </li>
          </ul>
        </div>

        <div class="p-mainBlock__content p-mainBlock--history__content">
          <div class="p-mainBlock__textBlock p-mainBlock--history__textBlock">
            <h3 class="p-mainBlock__concept for-tb">
              宮殿・大聖堂
            </h3>
            <transition name="slide-text" v-on:after-enter="afterEnter">
              <p v-show="checkMq || history.show[1]">
                テキストテキストテキストテキストテキストテキストテキストテキスト<br
                  class="for-lg"
                />テキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </transition>
          </div>
          <ul
            class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--history__imageBlock"
          >
            <li
              v-for="imageSet in history.slide2"
              :key="imageSet.img"
              v-bind:class="{ 'is-lowLayer': history.show[1] }"
            >
              <transition name="slide-image">
                <img
                  :src="require('@/' + imageSet.img)"
                  :alt="imageSet.alt"
                  :key="imageSet.id"
                  v-show="checkMq || history.show[1]"
                />
              </transition>
            </li>
          </ul>
        </div>

        <div class="p-mainBlock__content p-mainBlock--history__content">
          <div class="p-mainBlock__textBlock p-mainBlock--history__textBlock">
            <h3 class="p-mainBlock__concept for-tb">
              美術館・博物館
            </h3>
            <transition name="slide-text" v-on:after-enter="afterEnter">
              <p v-show="checkMq || history.show[2]">
                テキストテキストテキストテキストテキストテキストテキストテキスト<br
                  class="for-lg"
                />テキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </transition>
          </div>
          <ul
            class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--history__imageBlock"
          >
            <li
              v-for="imageSet in history.slide3"
              :key="imageSet.img"
              v-bind:class="{ 'is-lowLayer': history.show[2] }"
            >
              <transition name="slide-image">
                <img
                  :src="require('@/' + imageSet.img)"
                  :alt="imageSet.alt"
                  :key="imageSet.id"
                  v-show="checkMq || history.show[2]"
                />
              </transition>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="p-mainBlock p-mainBlock--chill p-fadeIn js-fadeIn">
      <h2 class="p-mainBlock__title p-mainBlock--chill__title">
        美しい街でのひと時を満喫する
      </h2>
      <p class="p-mainBlock__desc p-mainBlock--chill__desc">
        テキストテキストテキストテキストテキストテキスト<br />テキストテキストテキストテキストテキストテキスト
      </p>
      <div class="p-mainBlock__tabWrap p-mainBlock--chill__tabWrap for-lg">
        <slot v-for="(tab, index) in chill.tabs">
          <h3
            class="p-mainBlock__concept"
            :key="tab"
            @click="changeTab(index, chill)"
            v-bind:class="[
              { 'is-noPointer': isProcess },
              index == chill.currentTab ? 'is-current' : ''
            ]"
          >
            {{ tab }}
          </h3>
        </slot>
      </div>
      <div class="p-mainBlock__wrap">
        <div class="p-mainBlock__content p-mainBlock--chill__content">
          <div class="p-mainBlock__textBlock p-mainBlock--chill__textBlock">
            <h3 class="p-mainBlock__concept for-tb">美しい街並</h3>
            <transition name="slide-text" v-on:after-enter="afterEnter">
              <p v-show="checkMq || chill.show[0]">
                テキストテキストテキストテキストテキストテキストテキストテキスト<br
                  class="for-lg"
                />テキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </transition>
          </div>
          <ul
            class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--chill__imageBlock"
          >
            <li
              v-for="imageSet in chill.slide1"
              :key="imageSet.img"
              v-bind:class="{ 'is-lowLayer': chill.show[0] }"
            >
              <transition name="slide-image">
                <img
                  :src="require('@/' + imageSet.img)"
                  :alt="imageSet.alt"
                  :key="imageSet.id"
                  v-show="checkMq || chill.show[0]"
                />
              </transition>
            </li>
          </ul>
        </div>

        <div class="p-mainBlock__content p-mainBlock--chill__content">
          <div class="p-mainBlock__textBlock p-mainBlock--chill__textBlock">
            <h3 class="p-mainBlock__concept for-tb">カフェ文化</h3>
            <transition name="slide-text" v-on:after-enter="afterEnter">
              <p v-show="checkMq || chill.show[1]">
                テキストテキストテキストテキストテキストテキストテキストテキスト<br
                  class="for-lg"
                />テキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </transition>
          </div>
          <ul
            class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--chill__imageBlock"
          >
            <li
              v-for="imageSet in chill.slide2"
              :key="imageSet.img"
              v-bind:class="{ 'is-lowLayer': chill.show[1] }"
            >
              <transition name="slide-image">
                <img
                  :src="require('@/' + imageSet.img)"
                  :alt="imageSet.alt"
                  :key="imageSet.id"
                  v-show="checkMq || chill.show[1]"
                />
              </transition>
            </li>
          </ul>
        </div>

        <div class="p-mainBlock__content p-mainBlock--chill__content">
          <div class="p-mainBlock__textBlock p-mainBlock--chill__textBlock">
            <h3 class="p-mainBlock__concept for-tb">グルメ廻り</h3>
            <transition name="slide-text" v-on:after-enter="afterEnter">
              <p v-show="checkMq || chill.show[2]">
                テキストテキストテキストテキストテキストテキストテキストテキスト<br
                  class="for-lg"
                />テキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </transition>
          </div>
          <ul
            class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--chill__imageBlock"
          >
            <li
              v-for="imageSet in chill.slide3"
              :key="imageSet.img"
              v-bind:class="{ 'is-lowLayer': chill.show[2] }"
            >
              <transition name="slide-image">
                <img
                  :src="require('@/' + imageSet.img)"
                  :alt="imageSet.alt"
                  :key="imageSet.id"
                  v-show="checkMq || chill.show[2]"
                />
              </transition>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="p-mainBlock p-mainBlock--popular p-fadeIn js-fadeIn">
      <h2 class="p-mainBlock__title">人気の観光都市</h2>
      <ul class="p-mainBlock--popular__list">
        <li v-for="imageSet in popular.imgList" :key="imageSet.id">
          <img
            :src="require('@/' + imageSet.img)"
            :alt="imageSet.alt"
            :key="imageSet.cityId"
          />
          <div class="p-mainBlock--popular__city">
            <img
              :src="require('@/' + imageSet.flag)"
              :alt="imageSet.altFlag"
              :key="imageSet.countryId"
            />
            <h4>{{ imageSet.city }}</h4>
          </div>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </li>
      </ul>
    </section>

    <section class="p-mainBlock p-mainBlock--tours">
      <h2 class="p-mainBlock__title">
        <span class="en">Air Travel</span> で行くツアー
      </h2>
      <div class="p-mainBlock__wrap p-mainBlock--tours__wrap">
        <!-- イタリア -->
        <div class="p-mainBlock__content p-mainBlock--tours__content">
          <div class="p-mainBlock__textBlock p-mainBlock--tours__textBlock">
            <transition name="contest-title">
              <h3
                class=" p-mainBlock__tourName"
                v-show="checkMq || tours.show[0]"
              >
                ヴェネツィア <span class="en">&</span> ローマ<span class="en"
                  >7</span
                >日間ツアー
              </h3>
            </transition>
            <div class="p-mainBlock__tourWrap">
              <transition name="contest-data" v-on:after-enter="afterEnter">
                <dl
                  class="p-mainBlock__tourInfoList"
                  v-show="checkMq || tours.show[0]"
                >
                  <div class="p-mainBlock__tourInfo">
                    <dt>ツアー費用</dt>
                    <dd class="price">
                      <span class="en">133,000</span>円
                      <span class="en">〜 163,000</span>円
                    </dd>
                  </div>
                  <div class="p-mainBlock__tourInfo">
                    <dt>注意事項</dt>
                    <dd class="attention">
                      <span>
                        ※
                        テキストテキストテキストテキストテキストテキストテキスト
                      </span>
                    </dd>
                  </div>
                  <div class="p-mainBlock__tourInfo">
                    <dt>ツアー日数</dt>
                    <dd><span class="en">7</span>日間</dd>
                  </div>
                  <div class="p-mainBlock__tourInfo">
                    <dt>ツアー期間</dt>
                    <dd><span class="en">2020/3/1 〜 2020/11/20</span></dd>
                  </div>
                  <div class="p-mainBlock__tourInfo">
                    <dt>出発地</dt>
                    <dd>羽田空港(発着)</dd>
                  </div>
                  <div class="p-mainBlock__tourInfo">
                    <dt>訪問都市</dt>
                    <dd>ローマ・ヴェネツィア</dd>
                  </div>
                </dl>
              </transition>
            </div>
          </div>
          <div class="p-mainBlock__tourFlex">
            <ul
              class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--tours__imageBlock"
            >
              <li
                v-for="imageSet in tours.slide1"
                :key="imageSet.img"
                v-bind:class="{ 'is-lowLayer': tours.show[0] }"
              >
                <transition name="slide-image">
                  <img
                    :src="require('@/' + imageSet.img)"
                    :alt="imageSet.alt"
                    :key="imageSet.id"
                    v-show="checkMq || tours.show[0]"
                  />
                </transition>
              </li>
            </ul>
            <div class="p-mainBlock__countryInfo for-lg">
              <transition name="country-name">
                <h4
                  v-show="checkMq || tours.show[0]"
                  v-bind:class="{ 'is-highLayer': tours.show[0] }"
                >
                  イタリア基本情報
                </h4>
              </transition>

              <transition name="country-data">
                <dl
                  class="infoList"
                  v-show="checkMq || tours.show[0]"
                  v-bind:class="{ 'is-highLayer': tours.show[0] }"
                >
                  <dt>国旗 / 正式名称</dt>
                  <dd>
                    <div class="nationBlock">
                      <img :src="require('@/' + popular.imgList[0].flag)" />
                      <span>イタリア共和国</span>
                    </div>
                  </dd>
                  <dt>首都</dt>
                  <dd>ローマ</dd>
                  <dt>言語</dt>
                  <dd>イタリア語</dd>
                  <dt>時差</dt>
                  <dd>7時間</dd>
                  <dt>現在の天気</dt>
                  <dd>
                    <div class="currentWthBlock">
                      <img :src="weatherIcon(weather.current.rome.icon)" />
                      <p class="desc">
                        {{ weather.current.rome.desc }}
                      </p>
                      <p>
                        気温<span class="degree"
                          >{{ temp(current.rome.temp) }}℃</span
                        >
                      </p>
                      <p>
                        湿度<span class="degree"
                          >{{ current.rome.humidity }}%</span
                        >
                      </p>
                    </div>
                  </dd>
                  <dt>週間天気予報</dt>
                  <dd class="dailyWthWrap">
                    <div v-for="i of 7" :key="i" class="dailyWthBlock">
                      <p class="date">{{ dateTime(daily.rome.dt[i]) }}</p>
                      <img :src="createIcon(weather.daily.rome.icon[i])" />
                      <p class="desc">
                        {{ weather.daily.rome.desc[i] }}
                      </p>
                      <div class="temp">
                        <p class="temp__low">
                          {{ temp(daily.rome.temp.min[i]) }}
                        </p>
                        <span class="temp__line">|</span>
                        <p class="temp__high">
                          {{ temp(daily.rome.temp.max[i]) }}
                        </p>
                      </div>
                    </div>
                  </dd>
                </dl>
              </transition>
            </div>
          </div>
        </div>
        <!-- ドイツ -->
        <div class="p-mainBlock__content p-mainBlock--tours__content">
          <div class="p-mainBlock__textBlock p-mainBlock--tours__textBlock">
            <transition name="contest-title">
              <h3
                class="p-mainBlock__tourName"
                v-show="checkMq || tours.show[1]"
              >
                ぐるっとドイツ周遊<span class="en">10</span>日間
              </h3>
            </transition>
            <div class="p-mainBlock__tourWrap">
              <transition name="contest-data" v-on:after-enter="afterEnter">
                <dl
                  class="p-mainBlock__tourInfoList"
                  v-show="checkMq || tours.show[1]"
                >
                  <div class="p-mainBlock__tourInfo">
                    <dt>ツアー費用</dt>
                    <dd class="price">
                      <span class="en">155,000</span>円
                      <span class="en">〜 193,000</span>円
                    </dd>
                  </div>
                  <div class="p-mainBlock__tourInfo">
                    <dt>注意事項</dt>
                    <dd class="attention">
                      <span>
                        ※
                        テキストテキストテキストテキストテキストテキストテキスト
                      </span>
                    </dd>
                  </div>
                  <div class="p-mainBlock__tourInfo">
                    <dt>ツアー日数</dt>
                    <dd><span class="en">10</span>日間</dd>
                  </div>
                  <div class="p-mainBlock__tourInfo">
                    <dt>ツアー期間</dt>
                    <dd><span class="en">2020/3/1 〜 2021/4/20</span></dd>
                  </div>
                  <div class="p-mainBlock__tourInfo">
                    <dt>出発地</dt>
                    <dd>成田空港(発着)</dd>
                  </div>
                  <div class="p-mainBlock__tourInfo">
                    <dt>訪問都市</dt>
                    <dd>ベルリン・ミュンヘン etc</dd>
                  </div>
                </dl>
              </transition>
            </div>
          </div>
          <div class="p-mainBlock__tourFlex">
            <ul
              class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--tours__imageBlock"
            >
              <li
                v-for="imageSet in tours.slide2"
                :key="imageSet.img"
                v-bind:class="{ 'is-lowLayer': tours.show[1] }"
              >
                <transition name="slide-image">
                  <img
                    :src="require('@/' + imageSet.img)"
                    :alt="imageSet.alt"
                    :key="imageSet.id"
                    v-show="checkMq || tours.show[1]"
                  />
                </transition>
              </li>
            </ul>
            <div class="p-mainBlock__countryInfo for-lg">
              <transition name="country-name">
                <h4
                  v-show="checkMq || tours.show[1]"
                  v-bind:class="{ 'is-highLayer': tours.show[1] }"
                >
                  ドイツ基本情報
                </h4>
              </transition>

              <transition name="country-data">
                <dl
                  class="infoList"
                  v-show="checkMq || tours.show[1]"
                  v-bind:class="{ 'is-highLayer': tours.show[1] }"
                >
                  <dt>国旗 / 正式名称</dt>
                  <dd>
                    <div class="nationBlock">
                      <img :src="require('@/' + popular.imgList[8].flag)" />
                      <span>ドイツ連邦共和国</span>
                    </div>
                  </dd>
                  <dt>首都</dt>
                  <dd>ベルリン</dd>
                  <dt>言語</dt>
                  <dd>ドイツ語</dd>
                  <dt>時差</dt>
                  <dd>7時間</dd>
                  <dt>現在の天気</dt>
                  <dd>
                    <div class="currentWthBlock">
                      <img :src="weatherIcon(weather.current.berlin.icon)" />
                      <p class="desc">
                        {{ weather.current.berlin.desc }}
                      </p>
                      <p>
                        気温<span class="degree"
                          >{{ temp(current.berlin.temp) }}℃</span
                        >
                      </p>
                      <p>
                        湿度<span class="degree"
                          >{{ current.berlin.humidity }}%</span
                        >
                      </p>
                    </div>
                  </dd>
                  <dt>週間天気予報</dt>
                  <dd class="dailyWthWrap">
                    <div v-for="i of 7" :key="i" class="dailyWthBlock">
                      <p class="date">{{ dateTime(daily.berlin.dt[i]) }}</p>
                      <img :src="createIcon(weather.daily.berlin.icon[i])" />
                      <p class="desc">
                        {{ weather.daily.berlin.desc[i] }}
                      </p>
                      <div class="temp">
                        <p class="temp__low">
                          {{ temp(daily.berlin.temp.min[i]) }}
                        </p>
                        <span class="temp__line">|</span>
                        <p class="temp__high">
                          {{ temp(daily.berlin.temp.max[i]) }}
                        </p>
                      </div>
                    </div>
                  </dd>
                </dl>
              </transition>
            </div>
          </div>
        </div>
        <!-- フランス -->
        <div class="p-mainBlock__content p-mainBlock--tours__content">
          <div class="p-mainBlock__textBlock p-mainBlock--tours__textBlock">
            <transition name="contest-title">
              <h3
                class="p-mainBlock__tourName"
                v-show="checkMq || tours.show[2]"
              >
                お得にパリツアー<span class="en">5</span>日間
              </h3>
            </transition>
            <div class="p-mainBlock__tourWrap">
              <transition name="contest-data" v-on:after-enter="afterEnter">
                <dl
                  class="p-mainBlock__tourInfoList"
                  v-show="checkMq || tours.show[2]"
                >
                  <div class="p-mainBlock__tourInfo">
                    <dt>ツアー費用</dt>
                    <dd class="price">
                      <span class="en">78,000</span>円
                      <span class="en">〜 10,5000</span>円
                    </dd>
                  </div>
                  <div class="p-mainBlock__tourInfo">
                    <dt>注意事項</dt>
                    <dd class="attention">
                      <span>
                        ※
                        テキストテキストテキストテキストテキストテキストテキスト
                      </span>
                    </dd>
                  </div>
                  <div class="p-mainBlock__tourInfo">
                    <dt>ツアー日数</dt>
                    <dd><span class="en">5</span>日間</dd>
                  </div>
                  <div class="p-mainBlock__tourInfo">
                    <dt>ツアー期間</dt>
                    <dd><span class="en">2020/5/1 〜 2020/10/30</span></dd>
                  </div>
                  <div class="p-mainBlock__tourInfo">
                    <dt>出発地</dt>
                    <dd>関西空港(発着)</dd>
                  </div>
                  <div class="p-mainBlock__tourInfo">
                    <dt>訪問都市</dt>
                    <dd>パリ</dd>
                  </div>
                </dl>
              </transition>
            </div>
          </div>
          <div class="p-mainBlock__tourFlex">
            <ul
              class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--tours__imageBlock"
            >
              <li
                v-for="imageSet in tours.slide3"
                :key="imageSet.img"
                v-bind:class="{ 'is-lowLayer': tours.show[2] }"
              >
                <transition name="slide-image">
                  <img
                    :src="require('@/' + imageSet.img)"
                    :alt="imageSet.alt"
                    :key="imageSet.id"
                    v-show="checkMq || tours.show[2]"
                  />
                </transition>
              </li>
            </ul>
            <div class="p-mainBlock__countryInfo for-lg">
              <transition name="country-name">
                <h4
                  v-show="checkMq || tours.show[2]"
                  v-bind:class="{ 'is-highLayer': tours.show[2] }"
                >
                  フランス基本情報
                </h4>
              </transition>

              <transition name="country-data">
                <dl
                  class="infoList"
                  v-show="checkMq || tours.show[2]"
                  v-bind:class="{ 'is-highLayer': tours.show[2] }"
                >
                  <dt>国旗 / 正式名称</dt>
                  <dd>
                    <div class="nationBlock">
                      <img :src="require('@/' + popular.imgList[7].flag)" />
                      <span>フランス共和国</span>
                    </div>
                  </dd>
                  <dt>首都</dt>
                  <dd>パリ</dd>
                  <dt>言語</dt>
                  <dd>フランス語</dd>
                  <dt>時差</dt>
                  <dd>7時間</dd>
                  <dt>現在の天気</dt>
                  <dd>
                    <div class="currentWthBlock">
                      <img :src="weatherIcon(weather.current.paris.icon)" />
                      <p class="desc">
                        {{ weather.current.paris.desc }}
                      </p>
                      <p>
                        気温<span class="degree"
                          >{{ temp(current.paris.temp) }}℃</span
                        >
                      </p>
                      <p>
                        湿度<span class="degree"
                          >{{ current.paris.humidity }}%</span
                        >
                      </p>
                    </div>
                  </dd>
                  <dt>週間天気予報</dt>
                  <dd class="dailyWthWrap">
                    <div v-for="i of 7" :key="i" class="dailyWthBlock">
                      <p class="date">{{ dateTime(daily.paris.dt[i]) }}</p>
                      <img :src="createIcon(weather.daily.paris.icon[i])" />
                      <p class="desc">
                        {{ weather.daily.paris.desc[i] }}
                      </p>
                      <div class="temp">
                        <p class="temp__low">
                          {{ temp(daily.paris.temp.min[i]) }}
                        </p>
                        <span class="temp__line">|</span>
                        <p class="temp__high">
                          {{ temp(daily.paris.temp.max[i]) }}
                        </p>
                      </div>
                    </div>
                  </dd>
                </dl>
              </transition>
            </div>
          </div>
        </div>
        <!-- スペイン -->
        <div class="p-mainBlock__content p-mainBlock--tours__content">
          <div class="p-mainBlock__textBlock p-mainBlock--tours__textBlock">
            <transition name="contest-title">
              <h3
                class="p-mainBlock__tourName"
                v-show="checkMq || tours.show[3]"
              >
                マドリード <span class="en">&</span> バルセロナ<span class="en"
                  >7</span
                >日間ツアー
              </h3>
            </transition>
            <div class="p-mainBlock__tourWrap">
              <transition name="contest-data" v-on:after-enter="afterEnter">
                <dl
                  class="p-mainBlock__tourInfoList"
                  v-show="checkMq || tours.show[3]"
                >
                  <div class="p-mainBlock__tourInfo">
                    <dt>ツアー費用</dt>
                    <dd class="price">
                      <span class="en">130,000</span>円
                      <span class="en">〜 161,000</span>円
                    </dd>
                  </div>
                  <div class="p-mainBlock__tourInfo">
                    <dt>注意事項</dt>
                    <dd class="attention">
                      <span>
                        ※
                        テキストテキストテキストテキストテキストテキストテキスト
                      </span>
                    </dd>
                  </div>
                  <div class="p-mainBlock__tourInfo">
                    <dt>ツアー日数</dt>
                    <dd><span class="en">7</span>日間</dd>
                  </div>
                  <div class="p-mainBlock__tourInfo">
                    <dt>ツアー期間</dt>
                    <dd><span class="en">2020/2/1 〜 2021/3/10</span></dd>
                  </div>
                  <div class="p-mainBlock__tourInfo">
                    <dt>出発地</dt>
                    <dd>羽田空港(発着)</dd>
                  </div>
                  <div class="p-mainBlock__tourInfo">
                    <dt>訪問都市</dt>
                    <dd>マドリード・バルセロナ</dd>
                  </div>
                </dl>
              </transition>
            </div>
          </div>
          <div class="p-mainBlock__tourFlex">
            <ul
              class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--tours__imageBlock"
            >
              <li
                v-for="imageSet in tours.slide4"
                :key="imageSet.img"
                v-bind:class="{ 'is-lowLayer': tours.show[3] }"
              >
                <transition name="slide-image">
                  <img
                    :src="require('@/' + imageSet.img)"
                    :alt="imageSet.alt"
                    :key="imageSet.id"
                    v-show="checkMq || tours.show[3]"
                  />
                </transition>
              </li>
            </ul>
            <div class="p-mainBlock__countryInfo for-lg">
              <transition name="country-name">
                <h4
                  v-show="checkMq || tours.show[3]"
                  v-bind:class="{ 'iis-highLayer': tours.show[3] }"
                >
                  スペイン基本情報
                </h4>
              </transition>
              <transition name="country-data">
                <dl
                  class="infoList"
                  v-show="checkMq || tours.show[3]"
                  v-bind:class="{ 'is-highLayer': tours.show[3] }"
                >
                  <dt>国旗 / 正式名称</dt>
                  <dd>
                    <div class="nationBlock">
                      <img :src="require('@/' + popular.imgList[8].flag2)" />
                      <span>スペイン王国</span>
                    </div>
                  </dd>
                  <dt>首都</dt>
                  <dd>マドリード</dd>
                  <dt>言語</dt>
                  <dd>スペイン語</dd>
                  <dt>時差</dt>
                  <dd>7時間</dd>
                  <dt>現在の天気</dt>
                  <dd>
                    <div class="currentWthBlock">
                      <img :src="weatherIcon(weather.current.madrid.icon)" />
                      <p class="desc">
                        {{ weather.current.madrid.desc }}
                      </p>
                      <p>
                        気温<span class="degree"
                          >{{ temp(current.madrid.temp) }}℃</span
                        >
                      </p>
                      <p>
                        湿度<span class="degree"
                          >{{ current.madrid.humidity }}%</span
                        >
                      </p>
                    </div>
                  </dd>
                  <dt>週間天気予報</dt>
                  <dd class="dailyWthWrap">
                    <div v-for="i of 7" :key="i" class="dailyWthBlock">
                      <p class="date">{{ dateTime(daily.madrid.dt[i]) }}</p>
                      <img :src="createIcon(weather.daily.madrid.icon[i])" />
                      <p class="desc">
                        {{ weather.daily.madrid.desc[i] }}
                      </p>
                      <div class="temp">
                        <p class="temp__low">
                          {{ temp(daily.madrid.temp.min[i]) }}
                        </p>
                        <span class="temp__line">|</span>
                        <p class="temp__high">
                          {{ temp(daily.madrid.temp.max[i]) }}
                        </p>
                      </div>
                    </div>
                  </dd>
                </dl>
              </transition>
            </div>
          </div>
        </div>
      </div>

      <ul class="p-mainBlock__nav">
        <li
          class="p-mainBlock__navBtn"
          v-for="(nav, index) of 4"
          :key="nav"
          @click="changeTab(index, tours)"
          v-bind:class="[
            { 'is-noPointer': isProcess },
            index == tours.currentTab ? 'is-current' : ''
          ]"
        ></li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  name: 'AirTravel',
  methods: {
    createIcon(iconID) {
      return 'http://openweathermap.org/img/wn/' + iconID + '@2x.png';
    },
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
        root: null,
        rootMargin: '-30% 0px',
        threshold: 0
      };

      const scrollFadeIn = entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-onScreen');
            scrollFadeInObserver.unobserve(entry.target);
          }
        });
      };

      const scrollFadeInObserver = new IntersectionObserver(
        scrollFadeIn,
        options
      );

      document.querySelectorAll('.js-fadeIn').forEach(target => {
        scrollFadeInObserver.observe(target);
      });
    }
  },
  computed: {
    checkMq: function() {
      return this.windowWidth < 1025 ? true : false;
    },
    dateTime: function() {
      return function(unixtime) {
        let datetime = new Date(unixtime * 1000);
        return datetime.toLocaleDateString('ja-JP').slice(5);
      };
    },
    temp: function() {
      return function(tempature) {
        return Math.round(tempature * 10) / 10;
      };
    },
    weatherIcon: function() {
      return function(iconID) {
        return 'http://openweathermap.org/img/wn/' + iconID + '@2x.png';
      };
    }
  },
  created() {
    this.$axios
      .all([
        this.$axios.get(
          'https://api.openweathermap.org/data/2.5/onecall?lat=41.909986&lon=12.3959157&exclude=minutely,hourly&appid=7d889062a11be4f733c0707b520f4c70&lang=ja&units=metric'
        ), // ローマ
        this.$axios.get(
          'https://api.openweathermap.org/data/2.5/onecall?lat=52.5069704&lon=13.2846498&exclude=minutely,hourly&appid=7d889062a11be4f733c0707b520f4c70&lang=ja&units=metric'
        ), // ベルリン
        this.$axios.get(
          'https://api.openweathermap.org/data/2.5/onecall?lat=48.8589507&lon=2.2770204&exclude=minutely,hourly&appid=7d889062a11be4f733c0707b520f4c70&lang=ja&units=metric'
        ), // パリ
        this.$axios.get(
          'https://api.openweathermap.org/data/2.5/onecall?lat=40.4381311&lon=-3.81962&exclude=minutely,hourly&appid=7d889062a11be4f733c0707b520f4c70&lang=ja&units=metric'
        ) // マドリード
      ])
      .then(
        this.$axios.spread((response1, response2, response3, response4) => {
          this.current.rome = response1.data.current;
          this.current.berlin = response2.data.current;
          this.current.paris = response3.data.current;
          this.current.madrid = response4.data.current;

          response1.data.daily.forEach(d => {
            this.daily.rome.dt.push(d.dt),
              this.daily.rome.temp.min.push(d.temp.min),
              this.daily.rome.temp.max.push(d.temp.max);
          });
          response2.data.daily.forEach(d => {
            this.daily.berlin.dt.push(d.dt),
              this.daily.berlin.temp.min.push(d.temp.min),
              this.daily.berlin.temp.max.push(d.temp.max);
          });
          response3.data.daily.forEach(d => {
            this.daily.paris.dt.push(d.dt),
              this.daily.paris.temp.min.push(d.temp.min),
              this.daily.paris.temp.max.push(d.temp.max);
          });
          response4.data.daily.forEach(d => {
            this.daily.madrid.dt.push(d.dt),
              this.daily.madrid.temp.min.push(d.temp.min),
              this.daily.madrid.temp.max.push(d.temp.max);
          });

          this.weather.current.rome.icon =
            response1.data.current.weather[0].icon;
          this.weather.current.rome.desc =
            response1.data.current.weather[0].description;
          this.weather.current.berlin.icon =
            response2.data.current.weather[0].icon;
          this.weather.current.berlin.desc =
            response2.data.current.weather[0].description;
          this.weather.current.paris.icon =
            response3.data.current.weather[0].icon;
          this.weather.current.paris.desc =
            response3.data.current.weather[0].description;
          this.weather.current.madrid.icon =
            response4.data.current.weather[0].icon;
          this.weather.current.madrid.desc =
            response4.data.current.weather[0].description;

          response1.data.daily.forEach(d => {
            this.weather.daily.rome.icon.push(d.weather[0].icon),
              this.weather.daily.rome.desc.push(d.weather[0].description);
          });
          response2.data.daily.forEach(d => {
            this.weather.daily.berlin.icon.push(d.weather[0].icon),
              this.weather.daily.berlin.desc.push(d.weather[0].description);
          });
          response3.data.daily.forEach(d => {
            this.weather.daily.paris.icon.push(d.weather[0].icon),
              this.weather.daily.paris.desc.push(d.weather[0].description);
          });
          response4.data.daily.forEach(d => {
            this.weather.daily.madrid.icon.push(d.weather[0].icon),
              this.weather.daily.madrid.desc.push(d.weather[0].description);
          });
        })
      )
      .catch(error => console.log(error));
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
      title: 'Air Travel のヨーロッパ観光・ツアー特集',
      description:
        'ヨーロッパのみで味わえる文化、芸術、歴史の魅力を存分に味わえるあなただけの旅を提供します。',
      current: {
        rome: [],
        berlin: [],
        paris: [],
        madrid: []
      },
      daily: {
        rome: {
          dt: [],
          temp: {
            min: [],
            max: []
          }
        },
        berlin: {
          dt: [],
          temp: {
            min: [],
            max: []
          }
        },
        paris: {
          dt: [],
          temp: {
            min: [],
            max: []
          }
        },
        madrid: {
          dt: [],
          temp: {
            min: [],
            max: []
          }
        }
      },
      weather: {
        current: {
          rome: {
            icon: null,
            desc: null
          },
          berlin: {
            icon: null,
            desc: null
          },
          paris: {
            icon: null,
            desc: null
          },
          madrid: {
            icon: null,
            desc: null
          }
        },
        daily: {
          rome: {
            icon: [],
            desc: []
          },
          berlin: {
            icon: [],
            desc: []
          },
          paris: {
            icon: [],
            desc: []
          },
          madrid: {
            icon: [],
            desc: []
          }
        }
      },
      isLoadedWidth: false,
      isProcess: false,
      pointerNone: false,
      windowWidth: window.innerWidth,
      nature: {
        show: [true, false], // tab, imageの初期値
        tabs: ['雄大な大自然', 'ビーチリゾート'],
        currentTab: 0,
        slide1: [
          {
            id: 'Nature1-1',
            img: 'assets/images/airtravel/alps_switzerland-min.jpg',
            alt: 'スイス アルプス山脈',
            modal: 'assets/images/kadel/popup/design_block01_img01-l.jpg'
          },
          {
            id: 'Nature1-2',
            img: 'assets/images/airtravel/strokkur_iceland-min.jpg',
            alt: 'アイスランド ストロックル間欠泉',
            modal: 'assets/images/kadel/popup/design_block01_img02-l.jpg'
          },
          {
            id: 'Nature1-3',
            img: 'assets/images/airtravel/plitviceLakes_croatia-min.jpg',
            alt: 'クロアチア プリトヴィツェ湖群国立公園',
            modal: 'assets/images/kadel/popup/design_block01_img03-l.jpg'
          }
        ],
        slide2: [
          {
            id: 'Nature2-1',
            img: 'assets/images/airtravel/beach_sicily-min.jpg',
            alt: 'イタリア シチリア島 ビーチ',
            modal: 'assets/images/kadel/popup/design_block02_img01-l.jpg'
          },
          {
            id: 'Nature2-2',
            img: 'assets/images/airtravel/beach_mallorca-min.jpg',
            alt: 'スペイン マヨルカ島 ビーチ',
            modal: 'assets/images/kadel/popup/design_block02_img02-l.jpg'
          },
          {
            id: 'Nature2-3',
            img: 'assets/images/airtravel/beach_zakynthos-min.jpg',
            alt: 'ギリシャ ザキントス島 ビーチ',
            modal: 'assets/images/kadel/popup/design_block02_img03-l.jpg'
          }
        ]
      },
      history: {
        show: [true, false, false], // tab, imageの初期値
        tabs: ['歴史を感じる街並', '宮殿・大聖堂', '美術館・博物館'],
        currentTab: 0,
        slide1: [
          {
            id: 'History1-1',
            img: 'assets/images/airtravel/town_belgium-min.jpg',
            alt: 'ベルギー ブルージュの鐘楼',
            modal: 'assets/images/kadel/popup/passive_block01_img01-l.jpg'
          },
          {
            id: 'History1-2',
            img: 'assets/images/airtravel/town_germany-min.jpg',
            alt: 'ドイツ ローデンブルグ 旧市街',
            modal: 'assets/images/kadel/popup/passive_block01_img02-l.jpg'
          },
          {
            id: 'History1-3',
            img: 'assets/images/airtravel/town_czech-min.jpg',
            alt: 'ベルギー プラハ 旧市街広場',
            modal: 'assets/images/kadel/popup/passive_block01_img03-l.jpg'
          }
        ],
        slide2: [
          {
            id: 'History2-1',
            img: 'assets/images/airtravel/catedral_france-min.jpg',
            alt: 'フランス パリ ノートルダム大聖堂',
            modal: 'assets/images/kadel/popup/passive_block01_img03-l.jpg'
          },
          {
            id: 'History2-2',
            img: 'assets/images/airtravel/palace_british-min.jpg',
            alt: 'イギリス ロンドン バッキンガム宮殿',
            modal: 'assets/images/kadel/popup/passive_block01_img03-l.jpg'
          },
          {
            id: 'History2-3',
            img: 'assets/images/airtravel/palace_germany-min.jpg',
            alt: 'ドイツ バイエルン ノイシュバンシュタイン城',
            modal: 'assets/images/kadel/popup/passive_block01_img03-l.jpg'
          }
        ],
        slide3: [
          {
            id: 'History3-1',
            img: 'assets/images/airtravel/museum_vatican-min.jpg',
            alt: 'バチカン市国 サン・ピエトロ大聖堂',
            modal: 'assets/images/kadel/popup/passive_block01_img03-l.jpg'
          },
          {
            id: 'History3-2',
            img: 'assets/images/airtravel/museum_france-min.jpg',
            alt: 'フランス パリ ルーブル美術館',
            modal: 'assets/images/kadel/popup/passive_block01_img03-l.jpg'
          },
          {
            id: 'History3-3',
            img: 'assets/images/airtravel/museum_british-min.jpg',
            alt: 'イギリス ロンドン 大英博物館',
            modal: 'assets/images/kadel/popup/passive_block01_img03-l.jpg'
          }
        ]
      },
      chill: {
        show: [true, false, false], // tab, imageの初期値
        tabs: ['美しい街並', 'カフェ文化', 'グルメ巡り'],
        currentTab: 0,
        slide1: [
          {
            id: 'Chill1-1',
            img: 'assets/images/airtravel/town_portugal-min.jpg',
            alt: 'ポルトガル リスボン 市街地',
            modal: 'assets/images/kadel/popup/support_block01_img01-l.jpg'
          },
          {
            id: 'Chill1-2',
            img: 'assets/images/airtravel/town_greece-min.jpg',
            alt: 'ギリシャ サントリーニ島',
            modal: 'assets/images/kadel/popup/support_block01_img02-l.jpg'
          },
          {
            id: 'Chill1-3',
            img: 'assets/images/airtravel/town_denmark-min.jpg',
            alt: 'デンマーク コペンハーゲン ニューハウン',
            modal: 'assets/images/kadel/popup/support_block01_img03-l.jpg'
          }
        ],
        slide2: [
          {
            id: 'Chill2-1',
            img: 'assets/images/airtravel/cafe_germany-min.jpg',
            alt: 'ドイツ リューベック カフェ',
            modal: 'assets/images/kadel/popup/support_block02_img01-l.jpg'
          },
          {
            id: 'Chill2-2',
            img: 'assets/images/airtravel/cafe_france-min.jpg',
            alt: 'フランス パリ カフェ',
            modal: 'assets/images/kadel/popup/support_block02_img02-l.jpg'
          },
          {
            id: 'Chill2-3',
            img: 'assets/images/airtravel/cafe_vienna-min.jpg',
            alt: 'オーストリア ウィーン カフェ',
            modal: 'assets/images/kadel/popup/support_block02_img03-l.jpg'
          }
        ],
        slide3: [
          {
            id: 'Chill3-1',
            img: 'assets/images/airtravel/food_france-min.jpg',
            alt: 'フランス料理',
            modal: 'assets/images/kadel/popup/support_block03_img01-l.jpg'
          },
          {
            id: 'Chill3-2',
            img: 'assets/images/airtravel/food_italy-min.jpg',
            alt: 'イタリア料理',
            modal: 'assets/images/kadel/popup/support_block03_img02-l.jpg'
          },
          {
            id: 'Chill3-3',
            img: 'assets/images/airtravel/food_spain-min.jpg',
            alt: 'スペイン料理',
            modal: 'assets/images/kadel/popup/support_block03_img03-l.jpg'
          }
        ]
      },
      popular: {
        imgList: [
          {
            cityId: 'rome',
            countryId: 'italy',
            img: 'assets/images/airtravel/rome-min.jpg',
            alt: 'ローマ コロッセオ',
            flag: 'assets/images/airtravel/Italy.png',
            altFlag: 'イタリア国旗',
            city: 'ローマ'
          },
          {
            id: 'viene',
            countryId: 'austria',
            img: 'assets/images/airtravel/vienna-min.jpg',
            flag: 'assets/images/airtravel/Austria.png',
            alt: 'ウィーン 聖シュテファン大聖堂',
            altFlag: 'オーストリア国旗',
            city: 'ウィーン'
          },
          {
            id: 'zurich',
            countryId: 'switzerland',
            img: 'assets/images/airtravel/zurich-min.jpg',
            flag: 'assets/images/airtravel/Switzerland.png',
            alt: 'チューリッヒ 街並み',
            altFlag: 'スイス国旗',
            city: 'チューリッヒ'
          },
          {
            id: 'warsaw',
            countryId: 'poland',
            img: 'assets/images/airtravel/warsaw-min.jpg',
            flag: 'assets/images/airtravel/Poland.png',
            alt: 'ワルシャワ 街並み',
            altFlag: 'ポーランド国旗',
            city: 'ワルシャワ'
          },
          {
            id: 'budapest',
            countryId: 'hungary',
            img: 'assets/images/airtravel/budapest-min.jpg',
            flag: 'assets/images/airtravel/Hungary.png',
            alt: 'ブダペスト 夜景',
            altFlag: 'ハンガリー国旗',
            city: 'ブダペスト'
          },
          {
            id: 'amsterdam',
            countryId: 'netherlands',
            img: 'assets/images/airtravel/amsterdam-min.jpg',
            flag: 'assets/images/airtravel/Netherlands.png',
            alt: 'アムステルダム 運河',
            altFlag: 'オランダ国旗',
            city: 'アムステルダム'
          },
          {
            id: 'split',
            countryId: 'croatia',
            img: 'assets/images/airtravel/split-min.jpg',
            flag: 'assets/images/airtravel/Croatia.png',
            alt: 'スプリト 旧市街地',
            altFlag: 'クロアチア国旗',
            city: 'スプリト'
          },
          {
            id: 'paris',
            countryId: 'france',
            img: 'assets/images/airtravel/paris-min.jpg',
            flag: 'assets/images/airtravel/France.png',
            alt: 'パリ エッフェル塔',
            altFlag: 'フランス国旗',
            city: 'パリ'
          },
          {
            id: 'munich',
            countryId: 'germany',
            img: 'assets/images/airtravel/munich-min.jpg',
            flag: 'assets/images/airtravel/Germany.png',
            flag2: 'assets/images/airtravel/Spain.png',
            alt: 'ミュンヘン 市街地',
            altFlag: 'ドイツ国旗',
            city: 'ミュンヘン'
          }
        ]
      },
      tours: {
        show: [true, false, false, false], // tab, imageの初期値
        currentTab: 0,
        slide1: [
          {
            id: 'Tours1-1',
            img: 'assets/images/airtravel/tours_italy_colosseum-min.jpg',
            alt: 'イタリア ローマ コロッセオ'
          },
          {
            id: 'Tours1-2',
            img: 'assets/images/airtravel/tours_italy_stpeters-min.jpg',
            alt: 'イタリア ローマ サン・ピエトロ大聖堂'
          },
          {
            id: 'Tours1-3',
            img: 'assets/images/airtravel/tours_italy_santamaria-min.jpg',
            alt: 'イタリア ヴェネツィア サンタ・マリア・デッラ・サルーテ聖堂'
          },
          {
            id: 'Tours1-4',
            img: 'assets/images/airtravel/tours_italy_grand-canal-min.jpg',
            alt: 'イタリア ヴェネツィア 運河'
          }
        ],
        slide2: [
          {
            id: 'Tours2-1',
            img: 'assets/images/airtravel/tours_germany_dresden-min.jpg',
            alt: 'ドイツ ドレスデン'
          },
          {
            id: 'Tours2-2',
            img:
              'assets/images/airtravel/tours_germany_brandenburg-gate-min.jpg',
            alt: 'ドイツ ベルリン ブランデンブルク門'
          },
          {
            id: 'Tours2-3',
            img: 'assets/images/airtravel/tours_germany_cologne-min.jpg',
            alt: 'ドイツ ケルン ケルン大聖堂'
          },
          {
            id: 'Tours2-4',
            img: 'assets/images/airtravel/tours_germany_munich-min.jpg',
            alt: 'ドイツ ミュンヘン'
          }
        ],
        slide3: [
          {
            id: 'Tours3-1',
            img: 'assets/images/airtravel/tours_paris_tuileries-min.jpg',
            alt: 'フランス パリ テュイルリー宮殿'
          },
          {
            id: 'Tours3-2',
            img: 'assets/images/airtravel/tours_paris_louvre-museum-min.jpg',
            alt: 'フランス パリ ルーブル美術館'
          },
          {
            id: 'Tours3-3',
            img: 'assets/images/airtravel/tours_paris_triumphal-arch-min.jpg',
            alt: 'フランス パリ エトワール凱旋門'
          },
          {
            id: 'Tours3-4',
            img: 'assets/images/airtravel/tours_paris_eiffel-tower-min.jpg',
            alt: 'フランス パリ エッフェル塔'
          }
        ],
        slide4: [
          {
            id: 'Tours4-1',
            img: 'assets/images/airtravel/tours_spain_granvia-min.jpg',
            alt: 'スペイン マドリード グランビア'
          },
          {
            id: 'Tours4-2',
            img: 'assets/images/airtravel/tours_spain_triumphal-arch-min.jpg',
            alt: 'スペイン バルセロナ 凱旋門'
          },
          {
            id: 'Tours4-3',
            img: 'assets/images/airtravel/tours_spain_toro-min.jpg',
            alt: 'スペイン マドリード 闘牛'
          },
          {
            id: 'Tours4-4',
            img: 'assets/images/airtravel/tours_spain_park-guell-min.jpg',
            alt: 'スペイン バルセロナ グエル公園'
          }
        ]
      }
    };
  },
  head: {
    title: function() {
      return {
        inner: this.title,
        separator: '|',
        complement: 'My Portforio'
      };
    },
    meta: function() {
      return [
        { property: 'og:title', content: this.title + ' | My Portforio' },
        { property: 'og:description', content: this.description },
        { name: 'description', content: this.description }
      ];
    }
  }
};
</script>

<style lang="scss">
.AirTravel {
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Roboto:wght@300;400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500;600;700&family=Vollkorn:wght@400;500;600;700&display=swap');
  font-family: 'Roboto', 'Noto Sans JP', sans-serif, 'Hiragino Kaku Gothic ProN',
    メイリオ;
  color: #333333;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.1em;
  line-height: 1.7;
  background-color: #fff;
  padding-top: 30px;
  padding-bottom: 80px;
  position: relative;
  z-index: 1500;
  @include mq(air-sm) {
    padding-top: 60px;
    border-right: 10px solid #fff;
    border-left: 10px solid #fff;
  }
  @include mq(air-gt-md) {
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
    font-weight: 400;
  }

  ul {
    list-style: none !important;
  }

  img {
    backface-visibility: hidden;
  }

  .en {
    font-size: 1.05em;
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
    height: calc(100vh - 70px);
    width: 100%;
    @include mq(air-gt-md) {
      display: flex;
      flex-direction: row-reverse;
      height: calc(100vh - 90px);
    }

    &__text {
      position: absolute;
      top: 15%;
      left: 0;
      right: 4%;
      color: #000;
      @include mq(air-gt-md) {
        top: 11%;
        right: 13%;
      }

      > h1 {
        font-family: 'Vollkorn', 'Noto Serif JP', serif;
        font-size: calc(20 / 320 * 100vw);
        font-weight: 600;
        text-align: right;
        line-height: 1.5;
        @include mq(air-gt-md) {
          font-size: calc(38 / 1025 * 100vw);
          letter-spacing: 3px;
        }
      }

      .air {
        font-size: 2em;
      }

      > p {
        font-size: calc(18 / 1025 * 100vw);
        font-weight: 500;
        margin-top: 50px;
      }
    }

    &__figure {
      background: url('../assets/images/airtravel/mobile/main-min.jpg')
        no-repeat;
      background-size: cover;
      width: 100%;
      height: 100%;
      @include mq(air-gt-md) {
        background: url('../assets/images/airtravel/main-min.jpg') no-repeat
          center/cover;
        width: 100%;
        transform: translate3D(0, 0, 0);
        z-index: -1;
      }
    }

    &__scrollBtn {
      position: absolute;
      bottom: 0;
      right: 1em;
      font-size: calc(12 / 320 * 100vw);
      font-family: 'Vollkorn', 'Noto Serif JP', serif;
      font-weight: 600;
      padding-bottom: 168px;
      z-index: 900;
      color: #fff;
      cursor: pointer;
      writing-mode: vertical-rl;
      @include mq(air-gt-md) {
        font-size: calc(14 / 1025 * 100vw);
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
          @include mq(air-gt-md) {
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
        p-head
  ------------------- */
  .p-head {
    margin-top: 5.5em;
    @include mq(air-gt-md) {
      display: flex;
      justify-content: space-between;
      flex-direction: row-reverse;
      margin-top: 10em;
    }

    &__text {
      @include mq(air-gt-md) {
        width: 50%;
        margin-top: 10.8em;
        padding-top: 2.5em;
        text-align: right;
      }
      > h2 {
        font-size: calc(22 / 320 * 100vw);
        text-align: center;
        @include mq(air-md) {
          font-size: calc(26 / 769 * 100vw);
        }
        @include mq(air-gt-md) {
          font-size: calc(30 / 1025 * 100vw);
          font-weight: 500;
          line-height: 1.5;
          text-align: right;
          margin-bottom: 1em;
        }
      }
      > h3 {
        position: relative;
        font-size: calc(19 / 320 * 100vw);
        font-weight: 500;
        @include mq(air-sm) {
          margin: 4em 0 2em;
          text-align: center;
        }
        @include mq(air-md) {
          font-size: calc(19 / 769 * 100vw);
          margin-bottom: 1em;
        }
        @include mq(air-lg) {
          font-size: calc(18 / 1025 * 100vw);
          margin-bottom: 2em;
        }
        &:before {
          content: '';
          display: block;
          position: absolute;
          top: -3em;
          width: 1px;
          height: 40px;
          background-color: #262626;
          @include mq(air-sm) {
            left: 50%;
          }
          @include mq(air-gt-md) {
            top: 50%;
            width: calc(100% - 17em);
            height: 1px;
          }
        }
      }

      > p {
        font-size: calc(16 / 320 * 100vw);
        text-align: center;
        line-height: 2.3;
        @include mq(air-md) {
          text-align: right;
          font-size: calc(17 / 769 * 100vw);
        }
        @include mq(air-lg) {
          font-size: calc(15 / 1025 * 100vw);
          text-align: right;
        }
      }
    }

    &__images {
      display: flex;
      margin-top: 80px;
      @include mq(air-gt-md) {
        width: 50%;
        margin-top: 0;
      }

      > li {
        width: calc(100% - 10px / 2);
        &:nth-child(2) {
          margin-top: 80px;
        }
        @include mq(air-sm) {
          &:nth-child(1) {
            margin-right: 10px;
          }
        }
        @include mq(air-gt-md) {
          width: 47%;
          margin-right: 3%;
          &:nth-child(2) {
            margin-top: 7em;
          }
        }
      }
    }
  }

  /* -----------------
      p-mainBlock
  ------------------- */
  .p-mainBlock {
    margin-top: 6em;
    @include mq(air-lg) {
      position: relative;
      margin-top: 11.7%;
    }

    &__title {
      position: relative;
      font-size: calc(20 / 320 * 100vw);
      font-weight: 600;
      line-height: 1.7;
      @include mq(air-md) {
        font-size: calc(25 / 769 * 100vw);
      }
      @include mq(air-lt-lg) {
        text-align: center;
      }
      @include mq(air-lg) {
        font-size: calc(24 / 1025 * 100vw);
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
      font-weight: 400;
      @include mq(air-sm) {
        font-size: calc(18 / 320 * 100vw);
      }
      @include mq(air-md) {
        font-size: calc(21 / 769 * 100vw);
      }
      @include mq(air-lt-lg) {
        margin-top: 2em;
        padding-bottom: 0.4em;
        border-bottom: solid 1px #d5d5d5;
      }
      @include mq(air-lg) {
        font-size: calc(14 / 1025 * 100vw);
        line-height: 2;
        cursor: pointer;
        padding: 0 1.7em;
        margin-bottom: -1px;
        &:hover {
          opacity: 0.7;
        }
      }
    }

    &__tabWrap {
      @include mq(air-lg) {
        position: absolute;
        display: flex;
        line-height: 2;
        padding-right: 5.7em;
        border-bottom: 1px solid #d5d5d5;
        z-index: 400;
      }
    }

    &__desc {
      font-size: calc(15 / 320 * 100vw);
      margin-top: 1.5em;
      @include mq(air-md) {
        font-size: calc(17 / 769 * 100vw);
      }
      @include mq(air-lt-lg) {
        text-align: center;
      }
      @include mq(air-lg) {
        position: absolute;
        font-size: calc(15 / 1025 * 100vw);
        margin-top: 6.7%;
      }
    }

    &__wrap {
      position: relative;
    }

    &__content {
      @include mq(air-lg) {
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
      @include mq(air-lg) {
        overflow: hidden;
      }
      > p {
        font-size: calc(14 / 320 * 100vw);
        line-height: 2;
        letter-spacing: 1px;
        margin-top: 1em;
        @include mq(air-md) {
          font-size: calc(17 / 769 * 100vw);
        }
        @include mq(air-lt-lg) {
          padding-left: 0.5em;
        }
        @include mq(air-lg) {
          font-size: calc(13 / 1025 * 100vw);
          margin: 0;
        }
      }
    }

    &__imageBlock {
      overflow: hidden;
      li {
        opacity: 1;
        @include mq(air-lg) {
          overflow: hidden;
        }
      }
    }

    &__scrollImage {
      @include mq(air-lt-lg) {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        margin-top: 1.5em;
        padding-bottom: 1.3em;
        overflow-x: scroll;

        &::-webkit-scrollbar {
          background-color: #acacac;
          height: 2px;
          border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb {
          background-color: #262626;
        }

        > li:not(:last-child) {
          margin-right: 0.7em;
        }

        img {
          height: 100%;
          width: auto;
        }
      }
      @include mq(air-sm) {
        > li {
          height: calc(130 / 320 * 100vw);
        }
      }
      @include mq(air-md) {
        > li {
          height: calc(260 / 769 * 100vw);
        }
      }
    }

    &__tourName {
      position: relative;
      font-size: calc(15 / 320 * 100vw);
      font-family: 'Noto Serif JP', serif;
      font-weight: 700;
      padding-left: 1.5em;
      margin-top: 0.7em;
      @include mq(air-md) {
        font-size: calc(25 / 769 * 100vw);
        padding-left: 3.5em;
      }
      @include mq(air-lg) {
        font-size: calc(20 / 1025 * 100vw);
        margin-top: 0;
        padding-left: 3.5em;
      }
      &:before {
        position: absolute;
        content: '';
        display: block;
        background-color: #262626;
        top: 50%;
        left: 0;
        width: 1em;
        height: 1.5px;
        @include mq(air-gt-md) {
          height: 2px;
          width: 2.5em;
        }
      }
    }

    &__tourInfoList {
      width: 100%;
      padding: 1em;
      @include mq(air-gt-md) {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
    }

    &__tourInfo {
      @include mq(air-sm) {
        &:not(:first-of-type) {
          margin-top: 1em;
        }
      }
      @include mq(air-lg) {
        display: flex;
        flex-direction: column;
        width: fit-content;
      }
      > dt {
        font-size: calc(14 / 320 * 100vw);
        font-weight: 600;
        @include mq(air-md) {
          font-size: calc(17 / 769 * 100vw);
        }
        @include mq(air-lg) {
          font-size: calc(16 / 1025 * 100vw);
        }
      }
      > dd {
        font-weight: 400;
        font-size: calc(13 / 320 * 100vw);
        @include mq(air-md) {
          font-size: calc(16 / 769 * 100vw);
        }
        @include mq(air-lg) {
          font-size: calc(15 / 1025 * 100vw);
        }
      }
      .price {
        color: red;
        font-size: calc(15 / 320 * 100vw);
        font-weight: 600;
        @include mq(air-md) {
          font-size: calc(24 / 769 * 100vw);
        }
        @include mq(air-lg) {
          font-size: calc(20 / 1025 * 100vw);
        }
      }
      .attention {
        color: #000;
        font-size: calc(12 / 320 * 100vw);
        font-weight: 400;
        @include mq(air-md) {
          font-size: calc(13 / 769 * 100vw);
        }
        @include mq(air-gt-md) {
          font-size: calc(12 / 1025 * 100vw);
          padding-left: 1em;
        }
      }
    }

    &__tourInfo:first-of-type {
      @include mq(air-gt-md) {
        width: 50%;
        margin-bottom: 1.5em;
      }
    }

    &__tourInfo:nth-of-type(2) {
      @include mq(air-gt-md) {
        width: 50%;
        margin-bottom: 1.5em;
      }
    }

    &__tourFlex {
      @include mq(air-lg) {
        display: flex;
        justify-content: space-between;
        height: calc(523 / 1025 * 100vw);
      }
    }

    &__tourWrap {
      background-color: #fff5ee;
      margin-top: 0.3em;
      border-radius: 3px;
    }

    &__countryInfo {
      width: 25.5%;
      padding: 1em;
      background-color: #fffaf0;
      overflow-y: scroll;
      > h4 {
        font-size: calc(20 / 1025 * 100vw);
      }

      .infoList {
        margin-top: 1em;
        > dt {
          font-size: calc(15 / 1025 * 100vw);
          font-weight: 600;
          line-height: 2.2;
        }
        > dd {
          font-size: calc(14 / 1025 * 100vw);
          font-weight: 400;
        }
        > dd:not(:last-of-type) {
          margin-bottom: 1em;
        }
      }

      .nationBlock {
        display: flex;
        align-items: center;
        > img {
          width: auto;
        }
        > span {
          padding-left: 0.5em;
        }
      }

      .currentWthBlock {
        > img {
          width: auto;
          margin: 0 auto;
        }
        > p {
          font-size: calc(14 / 1025 * 100vw);
          font-weight: 400;
          line-height: 1.7;
          text-align: center;
        }
        .desc {
          margin-bottom: 1em;
        }
        .degree {
          font-size: calc(18 / 1025 * 100vw);
          font-weight: 700;
          padding-left: 0.5em;
        }
      }

      .dailyWthWrap {
        display: flex;
        overflow-x: scroll;
      }

      .dailyWthBlock {
        padding: 0.8em;
        text-align: center;
        > img {
          width: auto;
        }
        .date {
          font-size: calc(16 / 1025 * 100vw);
          font-weight: 500;
        }
        .desc {
          font-size: calc(14 / 1025 * 100vw);
          font-weight: 400;
          margin-bottom: 1em;
        }
        .temp {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: calc(15 / 1025 * 100vw);
          font-weight: 500;
          &__high {
            width: 45%;
            color: red;
          }
          &__low {
            width: 45%;
            color: blue;
          }
          &__line {
            color: gray;
          }
        }
      }
    }

    &__nav {
      display: none;
      @include mq(air-lg) {
        font-size: calc(14 / 1025 * 100vw);
        display: flex;
        justify-content: center;
        margin: 1em auto 0;
        text-align: center;
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

    &--nature {
      @include mq(air-lg) {
        height: calc(670 / 1025 * 100vw);

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

    &--history {
      @include mq(air-lg) {
        height: calc(605 / 1025 * 100vw);

        &__title {
          position: absolute;
          left: 43.3%;
          margin-top: 20%;
          &:after {
            right: 0;
          }
        }

        &__tabWrap {
          margin-left: 43.4%;
          margin-top: 35.3%;
        }

        &__desc {
          position: absolute;
          left: 43.3%;
          margin-top: 27.5%;
        }

        &__content {
          opacity: 1;
          display: flex;
          flex-direction: row-reverse;
        }

        &__textBlock {
          position: absolute;
          top: 68%;
          left: 43.3%;
        }

        &__imageBlock {
          display: flex;
          > li {
            margin: 0 1em;
            overflow: hidden;
            &:first-child {
              width: 40%;
            }
            &:not(:first-child) {
              width: 30%;
              height: fit-content;
            }
          }
        }
      }
    }

    &--chill {
      @include mq(air-lg) {
        height: calc(610 / 1025 * 100vw);

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

    &--popular {
      > h2:after {
        @include mq(air-lg) {
          width: 60%;
        }
      }

      &__list {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin-top: 1em;
        @include mq(air-lg) {
          margin-top: 2.5em;
        }

        > li {
          width: 100%;
          text-align: left;
          padding: 0.5em;
          border-radius: 3px;
          box-shadow: 0 3px 5px rgba(0, 0, 0, 0.15);
          transition: all 0.25s ease-out;
          cursor: pointer;
          @include mq(air-md) {
            width: 48%;
          }
          @include mq(air-lg) {
            width: 30.5%;
          }
          &:hover {
            box-shadow: 0 3px 20px rgba(0, 0, 0, 0.25);
          }

          > p {
            font-size: calc(14 / 320 * 100vw);
            margin-top: 0.5em;
            @include mq(air-md) {
              font-size: calc(14 / 769 * 100vw);
            }
            @include mq(air-lg) {
              font-size: calc(14 / 1025 * 100vw);
            }
          }
        }

        @include mq(air-sm) {
          > li:not(:first-child) {
            margin-top: 1em;
          }
        }
        @include mq(air-md) {
          > li:nth-child(n + 3) {
            margin-top: 2em;
          }
        }

        @include mq(air-lg) {
          > li:nth-child(n + 4) {
            margin-top: 2em;
          }
        }
      }

      &__city {
        display: flex;
        margin-top: 0.5em;
        height: 30px;
        line-height: 30px;
        align-items: center;
        > h4 {
          font-size: calc(15 / 320 * 100vw);
          font-weight: 500;
          padding-left: 0.5em;
          @include mq(air-md) {
            font-size: calc(18 / 769 * 100vw);
          }
          @include mq(air-lg) {
            font-size: calc(18 / 1025 * 100vw);
          }
        }
        img {
          width: auto;
        }
      }
    }

    &--tours {
      > h2:after {
        @include mq(air-lg) {
          width: 60%;
        }
      }

      &__wrap {
        @include mq(air-lg) {
          text-align: left;
          margin-top: 2.5em;
          height: calc(768 / 1025 * 100vw);
        }
      }

      &__content {
        opacity: 1;
        @include mq(air-lt-lg) {
          display: flex;
          flex-direction: column-reverse;
        }
        @include mq(air-lg) {
          position: absolute;
        }
      }

      &__content:not(:first-of-type) {
        @include mq(air-lt-lg) {
          margin-top: 2.5em;
        }
      }

      &__textBlock {
        @include mq(air-lg) {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-end;
          position: absolute;
          padding-top: 54.9%;
          z-index: -1;
        }
      }

      &__imageBlock {
        width: 100%;

        @include mq(air-sm) {
          > li {
            height: calc(145 / 320 * 100vw);
          }
        }
        @include mq(air-md) {
          > li {
            height: calc(300 / 769 * 100vw);
          }
        }
        @include mq(air-lg) {
          font-size: 0;
          width: 73.5%;
          > li {
            display: inline-block;
          }
          > li:first-child {
            width: 100%;
            margin-bottom: 1.5%;
          }
          > li:nth-child(n + 2) {
            width: calc(100% / 3 - 1.1%);
          }
          > li:nth-child(n + 3) {
            margin-left: calc(3.3% / 2);
          }
        }
      }
    }
  }

  /* ディスプレイスタイル */
  .for-pc {
    // min-width: 769px displayBlock
    @include mq(air-sm) {
      display: none !important;
    }
  }

  .for-sp {
    // max-width: 768px displayBlock
    @include mq(air-gt-md) {
      display: none !important;
    }
  }

  .for-tb {
    // max-width: 1024px displayBlock
    @include mq(air-lg) {
      display: none !important;
    }
  }

  .for-lg {
    // min-width: 1025px displayBlock
    @include mq(air-lt-lg) {
      display: none !important;
    }
  }

  /* トランジションスタイル */
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

  .country {
    &-name {
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
    @include mq(air-lg) {
      position: relative;
      z-index: -1;
    }
  }

  .is-highLayer {
    @include mq(air-lg) {
      position: relative;
      z-index: 1;
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
