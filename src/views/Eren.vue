<template>
  <div>
    <div class="hidarikikinoEren">
      <svg display="none">
        <defs>
          <symbol id="arrow" viewBox="0 0 40 23">
            <path
              d="M40,11.523L0,23v-5.088l22.151-6.457L0,4.999V0L40,11.523z"
            ></path>
          </symbol>
          <symbol id="iconTwitter" viewBox="0 0 40 40">
            <path
              d="M39,8.213c-1.397,0.621-2.901,1.039-4.477,1.229c1.611-0.965,2.847-2.494,3.427-4.313c-1.507,0.893-3.173,1.54-4.952,1.889 c-1.419-1.514-3.447-2.461-5.69-2.461c-4.303,0-7.793,3.494-7.793,7.798c0,0.613,0.066,1.205,0.2,1.775 C13.236,13.803,7.493,10.703,3.646,5.98C2.975,7.137,2.59,8.477,2.59,9.905c0,2.701,1.377,5.09,3.469,6.489 c-1.278-0.039-2.481-0.392-3.533-0.974v0.096c0,3.779,2.687,6.931,6.256,7.645c-0.655,0.183-1.343,0.275-2.055,0.275 c-0.502,0-0.992-0.046-1.466-0.137c0.991,3.095,3.869,5.352,7.281,5.413c-2.668,2.091-6.03,3.337-9.682,3.337 c-0.629,0-1.251-0.035-1.86-0.107c3.45,2.211,7.548,3.502,11.95,3.502c14.342,0,22.181-11.88,22.181-22.187 c0-0.338-0.007-0.675-0.021-1.008C36.635,11.149,37.958,9.777,39,8.213"
            ></path>
          </symbol>
          <symbol id="iconFacebook" viewBox="0 0 40 40">
            <path
              d="M11.134,13.567h3.928V9.75c0-1.684,0.043-4.28,1.265-5.888C17.615,2.158,19.383,1,22.424,1c4.955,0,7.042,0.707,7.042,0.707 l-0.982,5.82c0,0-1.637-0.473-3.164-0.473c-1.528,0-2.896,0.547-2.896,2.074v4.439h6.264l-0.437,5.685h-5.827V39h-7.362V19.252 h-3.928V13.567z"
            ></path>
          </symbol>
          <symbol id="iconLine" viewBox="0 0 40 40">
            <path
              d="M40,17.174c0-8.949-8.972-16.23-20-16.23c-11.027,0-20,7.281-20,16.23c0,8.023,7.115,14.742,16.726,16.013 c0.651,0.141,1.538,0.429,1.762,0.986c0.202,0.505,0.132,1.298,0.065,1.808c0,0-0.235,1.411-0.285,1.712 c-0.087,0.505-0.402,1.978,1.732,1.078c2.135-0.899,11.518-6.782,15.714-11.612h-0.001C38.611,23.981,40,20.756,40,17.174z M12.944,21.952c0,0.215-0.174,0.39-0.389,0.39H6.951H6.95c-0.104,0-0.199-0.041-0.269-0.109c-0.002-0.002-0.004-0.003-0.006-0.005 c-0.002-0.002-0.004-0.004-0.005-0.006c-0.067-0.07-0.109-0.164-0.109-0.269v-0.001v-8.714c0-0.215,0.175-0.389,0.39-0.389h1.403 c0.215,0,0.389,0.174,0.389,0.389v6.921h3.812c0.215,0,0.389,0.175,0.389,0.39V21.952z M16.326,21.953 c0,0.215-0.175,0.389-0.39,0.389h-1.403c-0.215,0-0.39-0.174-0.39-0.389v-8.715c0-0.215,0.175-0.389,0.39-0.389h1.403 c0.215,0,0.39,0.174,0.39,0.389V21.953z M25.982,21.953c0,0.215-0.174,0.389-0.39,0.389H24.19c-0.035,0-0.068-0.005-0.1-0.013 c-0.002,0-0.004-0.001-0.006-0.001c-0.009-0.003-0.017-0.005-0.027-0.009c-0.004-0.001-0.008-0.003-0.012-0.004 c-0.007-0.003-0.013-0.005-0.019-0.008c-0.006-0.003-0.013-0.006-0.019-0.009c-0.004-0.002-0.007-0.004-0.011-0.006 c-0.008-0.004-0.016-0.009-0.024-0.015c-0.001-0.001-0.003-0.002-0.004-0.003c-0.037-0.025-0.071-0.057-0.099-0.096l-3.998-5.4 v5.176c0,0.215-0.175,0.389-0.39,0.389h-1.403c-0.215,0-0.39-0.174-0.39-0.389v-8.715c0-0.215,0.175-0.389,0.39-0.389h1.403 c0.005,0,0.009,0.001,0.014,0.001c0.007,0,0.014,0.001,0.02,0.001c0.007,0.001,0.014,0.001,0.021,0.003 c0.005,0.001,0.011,0.001,0.016,0.002c0.008,0.002,0.015,0.003,0.022,0.005c0.005,0.001,0.009,0.002,0.014,0.003 c0.008,0.002,0.015,0.005,0.023,0.008c0.004,0.001,0.008,0.003,0.013,0.004c0.008,0.003,0.015,0.006,0.022,0.009 c0.004,0.002,0.008,0.004,0.012,0.006c0.007,0.003,0.014,0.008,0.021,0.012c0.004,0.002,0.008,0.004,0.012,0.007 c0.007,0.004,0.014,0.009,0.02,0.014c0.003,0.003,0.007,0.005,0.01,0.008c0.007,0.005,0.014,0.011,0.021,0.017 c0.003,0.002,0.005,0.004,0.007,0.007c0.008,0.008,0.016,0.015,0.023,0.024c0.001,0.001,0.002,0.002,0.003,0.003 c0.011,0.013,0.021,0.026,0.03,0.039l3.994,5.393v-5.177c0-0.215,0.174-0.389,0.39-0.389h1.403c0.215,0,0.39,0.174,0.39,0.389 V21.953z M33.728,14.642c0,0.215-0.174,0.39-0.389,0.39h-3.812v1.473h3.812c0.215,0,0.389,0.175,0.389,0.39v1.403 c0,0.215-0.174,0.39-0.389,0.39h-3.812v1.473h3.812c0.215,0,0.389,0.175,0.389,0.39v1.403c0,0.215-0.174,0.39-0.389,0.39h-5.604 h-0.001c-0.104,0-0.199-0.042-0.269-0.109c-0.002-0.002-0.004-0.003-0.006-0.005c-0.002-0.002-0.004-0.004-0.005-0.006 c-0.067-0.07-0.109-0.164-0.109-0.269v-0.001v-8.713v-0.001c0-0.104,0.041-0.199,0.108-0.268c0.002-0.002,0.004-0.004,0.006-0.007 c0.001-0.001,0.003-0.003,0.004-0.004c0.07-0.068,0.165-0.11,0.27-0.11h0.001h5.604c0.215,0,0.389,0.175,0.389,0.39V14.642z"
            ></path>
          </symbol>
        </defs>
      </svg>
      <div class="p-loading js-loading" :class="{ 'is-loaded': isLoaded }">
        <div
          class="p-loading__wrap js-loadingWrap"
          :style="{ transform: `translate(-50%, ${center}px)` }"
        >
          <div class="p-loadingInner">
            <div
              class="p-loadingInner__item p-loadingInner__item--item1 js-scaleItem"
              :style="{ transform: `scaleX(${scaleX})` }"
              :class="{ 'is-loaded': isLoaded }"
            ></div>
            <div
              class="p-loadingInner__item p-loadingInner__item--item2 js-scaleItem"
              :style="{ transform: `scaleX(${scaleX})` }"
              :class="{ 'is-loaded': isLoaded }"
            ></div>
            <div
              class="p-loadingInner__item p-loadingInner__item--item3 js-scaleItem"
              :style="{ transform: `scaleX(${scaleX})` }"
              :class="{ 'is-loaded': isLoaded }"
            ></div>
            <div
              class="p-loadingInner__item p-loadingInner__item--item4 js-scaleItem"
              :style="{ transform: `scaleX(${scaleX})` }"
              :class="{ 'is-loaded': isLoaded }"
            ></div>
          </div>
        </div>
        <p class="p-loading__text"></p>
      </div>
      <header class="p-header js-header">
        <div class="p-headerTicker"></div>
      </header>
      <button class="p-menuBtn js-menuBtn u-blockS-h">
        <div class="p-menuBtn__open">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="p-menuBtn__close js-btn"></div>
      </button>
      <div class="p-menu js-menu">
        <div class="p-menu__wrap">
          <nav class="p-menu__nav">
            <ul>
              <li
                class="c-squareButton--animeV c-squareButton--vText p-menuNavItem js-menuNav"
              >
                <a class="c-squareButton__inner" href="">
                  <span class="c-squareButton__label">トップ</span>
                  <svg
                    class="c-squareButton__leftArrow p-menuNavItem__leftArrow"
                  >
                    <use xlink:href="#arrow"></use>
                  </svg>
                </a>
              </li>
              <li
                class="c-squareButton--animeV c-squareButton--vText p-menuNavItem js-menuNav"
              >
                <a class="c-squareButton__inner" href="">
                  <span class="c-squareButton__label">あらすじ</span>
                  <svg
                    class="c-squareButton__leftArrow p-menuNavItem__leftArrow"
                  >
                    <use xlink:href="#arrow"></use>
                  </svg>
                </a>
              </li>
              <li
                class="c-squareButton--animeV c-squareButton--vText p-menuNavItem js-menuNav"
              >
                <a class="c-squareButton__inner" href="">
                  <span class="c-squareButton__label">ストーリー</span>
                  <svg
                    class="c-squareButton__leftArrow p-menuNavItem__leftArrow"
                  >
                    <use xlink:href="#arrow"></use>
                  </svg>
                </a>
              </li>
              <li
                class="c-squareButton--animeV c-squareButton--vText p-menuNavItem p-menuNavItem--vote js-menuNav"
              >
                <a class="c-squareButton__inner" href="">
                  <span class="c-squareButton__label p-menuNavItem__label"
                    >投票結果</span
                  >
                  <svg
                    class="c-squareButton__leftArrow p-menuNavItem__leftArrow"
                  >
                    <use xlink:href="#arrow"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
          <div class="p-menu__sns">
            <button class="c-squareButton--animeH p-snsButton">
              <svg class="c-squareButton__squareIcon">
                <use xlink:href="#iconTwitter"></use>
              </svg>
            </button>
            <button class="c-squareButton--animeH p-snsButton">
              <svg class="c-squareButton__squareIcon">
                <use xlink:href="#iconFacebook"></use>
              </svg>
            </button>
            <button class="c-squareButton--animeH p-snsButton">
              <svg class="c-squareButton__squareIcon">
                <use xlink:href="#iconLine"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <main>
        <section
          class="p-kv js-kv js-fadeIn is-onScreenItem"
          :class="{ 'is-onScreen': isOnScreen }"
        >
          <ul class="p-kv__characters js-charaList is-step1">
            <li class="p-character p-character--item3 u-blockS-h">
              <div class="p-character__inner"></div>
            </li>
            <li class="p-character p-character--item4 u-blockS-h">
              <div class="p-character__inner"></div>
            </li>
            <li class="p-character p-character--item1">
              <div class="p-character__inner"></div>
            </li>
            <li class="p-character p-character--item2">
              <div class="p-character__inner"></div>
            </li>
            <li class="p-character p-character--item3">
              <div class="p-character__inner"></div>
            </li>
            <li class="p-character p-character--item4">
              <div class="p-character__inner"></div>
            </li>
            <li class="p-character p-character--item1 u-blockS-h">
              <div class="p-character__inner"></div>
            </li>
            <li class="p-character p-character--item2 u-blockS-h">
              <div class="p-character__inner"></div>
            </li>
          </ul>
          <h1>
            <span class="p-kv__title p-kv__title--title1"
              ><img
                src="../assets/images/eren/kv_title1.png"
                loading="eager"
                alt="新聞広告の日"
            /></span>
            <span class="p-kv__title p-kv__title--title2"
              ><img
                src="../assets/images/eren/kv_title2.png"
                loading="eager"
                alt="THE NEWS FOR THE TEAM"
            /></span>
          </h1>
          <div class="p-kv__name">
            <img
              src="../assets/images/eren/kv_names.png"
              loading="eager"
              alt="朝日新聞社 ✕ 左利きのエレン Powered by JINS"
            />
          </div>
        </section>
        <section class="p-summery">
          <div class="p-summery__heading js-fadeIn">
            <div class="p-summery__headingInner">
              <h2 class="p-summery__title">
                <img
                  src="../assets/images/eren/summary_title.png"
                  loading="eager"
                  alt="あらすじ"
                />
              </h2>
              <div class="p-summery__headingDesc">
                <p class="p-summery__descLine">目黒広告社の朝倉CDのもとに、</p>
                <p class="p-summery__descLine">
                  日本を代表するアイウエアカンパニーJINSから、
                </p>
                <p class="p-summery__descLine">
                  新聞広告をテーマにした競合プレゼンのオファーが。
                </p>
                <p class="p-summery__descLine">
                  しかし、ライバルは、ニュースになる広告を仕掛け続ける
                </p>
                <p class="p-summery__descLine">The Breakthrough Company GO</p>
                <p class="p-summery__descLine">
                  代表の三浦は相手にもならないとうそぶく、、、
                </p>
                <p class="p-summery__descLine">
                  商品であるバイオレットプラスは画期的ゆえに
                </p>
                <p class="p-summery__descLine">
                  広告では表現できないことも多い。
                </p>
                <p class="p-summery__descLine u-blockS-h">
                  混迷を極める状況のなか、
                </p>
                <p class="p-summery__descLine u-blockS-h">
                  二つのチームが出した企画とはー。
                </p>
                <p class="p-summery__descLine u-blockM-h">
                  混迷を極める状況のなか、二つのチームが出した企画とはー。
                </p>
              </div>
            </div>
          </div>
          <div class="p-summery__relation js-relation">
            <a class="p-summery__relationInner">
              <figure>
                <picture>
                  <source
                    srcset="../assets/images/eren/summary_relation_l.jpg"
                    media="(min-width: 800px)"
                  />
                  <img
                    src="../assets/images/eren/summary_relation.jpg"
                    loading="eager"
                    alt=""
                  />
                </picture>
              </figure>
              <div class="c-squareButton--animeH p-squareButton">
                <div class="c-squareButton__inner">
                  <img
                    src="../assets/images/eren/summary_icon_zoom.png"
                    loading="eager"
                    alt="人物相関図"
                  />
                </div>
              </div>
            </a>
          </div>
        </section>
        <section class="p-story is-prologue js-story">
          <div class="p-story__inner">
            <div class="p-story__tabs">
              <button class="p-story__tab tab js-tab is-active">
                <div class="p-tab__inner">
                  <svg class="p-tab__inner__arrow">
                    <use xlink:href="#arrow"></use>
                  </svg>
                  <span class="p-tab__inner__label"
                    >プロローグ<br /><span
                      >「新聞広告の日<br class="u-blockS-h" />THE NEWS FOR NEW
                      TEAM」</span
                    ></span
                  >
                </div>
              </button>
              <button class="p-story__tab tab js-tab">
                <div class="p-tab__inner">
                  <svg class="p-tab__inner__arrow">
                    <use xlink:href="#arrow"></use>
                  </svg>
                  <span class="p-tab__inner__label"
                    >本編<br /><span
                      >「新聞広告の日<br class="u-blockS-h" />THE NEWS FOR NEW
                      TEAM」</span
                    ></span
                  >
                </div>
              </button>
            </div>
            <div class="p-story__wrap">
              <ol
                class="p-story__pages p-story__pages--prologue js-pages is-active"
              >
                <li>
                  <img
                    src="../assets/images/eren/prologue/01.png"
                    loading="eager"
                    alt="プロローグ ページ 01"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/prologue/02.png"
                    loading="eager"
                    alt="プロローグ ページ 02"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/prologue/03.png"
                    loading="eager"
                    alt="プロローグ ページ 03"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/prologue/04.png"
                    loading="eager"
                    alt="プロローグ ページ 04"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/prologue/05.png"
                    loading="eager"
                    alt="プロローグ ページ 05"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/prologue/06.png"
                    loading="eager"
                    alt="プロローグ ページ 06"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/prologue/07.png"
                    loading="eager"
                    alt="プロローグ ページ 07"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/prologue/08.png"
                    loading="eager"
                    alt="プロローグ ページ 08"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/prologue/09.png"
                    loading="eager"
                    alt="プロローグ ページ 09"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/prologue/10.png"
                    loading="eager"
                    alt="プロローグ ページ 10"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/prologue/11.png"
                    loading="eager"
                    alt="プロローグ ページ 11"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/prologue/12.png"
                    loading="eager"
                    alt="プロローグ ページ 12"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/prologue/13.png"
                    loading="eager"
                    alt="プロローグ ページ 13"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/prologue/14.png"
                    loading="eager"
                    alt="プロローグ ページ 14"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/prologue/15.png"
                    loading="eager"
                    alt="プロローグ ページ 15"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/prologue/16.png"
                    loading="eager"
                    alt="プロローグ ページ 16"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/prologue/17.png"
                    loading="eager"
                    alt="プロローグ ページ 17"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/prologue/18.png"
                    loading="eager"
                    alt="プロローグ ページ 18"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/prologue/19.png"
                    loading="eager"
                    alt="プロローグ ページ 19"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/prologue/20.png"
                    loading="eager"
                    alt="プロローグ ページ 20"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/prologue/21.png"
                    loading="eager"
                    alt="プロローグ ページ 21"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/prologue/22.png"
                    loading="eager"
                    alt="プロローグ ページ 22"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/prologue/23.png"
                    loading="eager"
                    alt="プロローグ ページ 23"
                  />
                </li>
              </ol>
              <ol class="p-story__pages p-story__pages--main js-pages">
                <li>
                  <img
                    src="../assets/images/eren/main/01.png"
                    loading="eager"
                    alt="本編 ページ 01"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/main/02.png"
                    loading="eager"
                    alt="本編 ページ 02"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/main/03.png"
                    loading="eager"
                    alt="本編 ページ 03"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/main/04.png"
                    loading="eager"
                    alt="本編 ページ 04"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/main/05.png"
                    loading="eager"
                    alt="本編 ページ 05"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/main/06.png"
                    loading="eager"
                    alt="本編 ページ 06"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/main/07.png"
                    loading="eager"
                    alt="本編 ページ 07"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/main/08.png"
                    loading="eager"
                    alt="本編 ページ 08"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/main/09.png"
                    loading="eager"
                    alt="本編 ページ 09"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/main/10.png"
                    loading="eager"
                    alt="本編 ページ 10"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/main/11.png"
                    loading="eager"
                    alt="本編 ページ 11"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/main/12.png"
                    loading="eager"
                    alt="本編 ページ 12"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/main/13.png"
                    loading="eager"
                    alt="本編 ページ 13"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/main/14.png"
                    loading="eager"
                    alt="本編 ページ 14"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/main/15.png"
                    loading="eager"
                    alt="本編 ページ 15"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/main/16.png"
                    loading="eager"
                    alt="本編 ページ 16"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/main/17.png"
                    loading="eager"
                    alt="本編 ページ 17"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/eren/main/18.png"
                    loading="eager"
                    alt="本編 ページ 18"
                  />
                </li>
              </ol>
            </div>
            <div class="p-story__tabs p-story__tabs--bottom">
              <button
                class="p-story__tab p-story__tab--bottom js-tab is-active"
              >
                <div class="p-tab__inner">
                  <svg class="p-tab__inner__arrow">
                    <use xlink:href="#arrow"></use>
                  </svg>
                  <span class="p-tab__inner__label"
                    >プロローグ<br /><span
                      >「新聞広告の日<br class="u-blockS-h" />THE NEWS FOR NEW
                      TEAM」</span
                    ></span
                  >
                </div>
              </button>
              <button class="p-story__tab p-story__tab--bottom js-tab">
                <div class="p-tab__inner">
                  <svg class="p-tab__inner__arrow">
                    <use xlink:href="#arrow"></use>
                  </svg>
                  <span class="p-tab__inner__label"
                    >本編<br /><span
                      >「新聞広告の日<br class="u-blockS-h" />THE NEWS FOR NEW
                      TEAM」</span
                    ></span
                  >
                </div>
              </button>
            </div>
          </div>
        </section>
        <section class="p-result">
          <div class="p-result__bgWrap">
            <div class="bgItem bgItem--top"></div>
            <div class="bgItem bgItem--bottom"></div>
          </div>
          <div class="p-result__inner js-fadeIn">
            <h2 class="p-resultTitle">
              <span class="p-resultTitle__inner u-blockS-h"
                ><img
                  src="../assets/images/eren/result_title1.png"
                  loading="eager"
                  alt="朝日新聞掲載・"
              /></span>
              <span class="p-resultTitle__inner u-blockS-h"
                ><img
                  src="../assets/images/eren/result_title2.png"
                  loading="eager"
                  alt="JINS広告が決定！"
              /></span>
              <span class="p-resultTitle__inner u-blockM-h"
                ><img
                  src="../assets/images/eren/result_title_l.png"
                  loading="eager"
                  alt="朝日新聞掲載・JINS広告が決定！"
              /></span>
            </h2>
            <div class="p-resultDesc">
              <p class="p-resultDesc__line u-blockS-h">
                10/20〜10/28の投票期間で
              </p>
              <p class="p-resultDesc__line u-blockS-h">
                およそ2342人の参加ありがとうございました!
              </p>
              <p class="p-resultDesc__line u-blockS-h">
                みなさんの投票の結果、採用されたのは
              </p>
              <p class="p-resultDesc__line u-blockS-h">
                「目黒広告社」の広告でした!
              </p>
              <p class="p-resultDesc__line u-blockS-h">
                実際の掲載を楽しみにしていてください。
              </p>
              <p class="p-resultDesc__line u-blockM-h">
                10/20〜10/28の投票期間でおよそ2342人の参加ありがとうございました!
              </p>
              <p class="p-resultDesc__line u-blockM-h">
                みなさんの投票の結果、採用されたのは「目黒広告社」の広告でした!
              </p>
              <p class="p-resultDesc__line u-blockM-h">
                実際の掲載を楽しみにしていてください。
              </p>
            </div>
            <div class="p-resultLogo">
              <img
                src="../assets/images/eren/result_logo_meguro.png"
                loading="eager"
                alt="目黒広告社"
              />
            </div>
            <div class="p-resultImg1">
              <img
                src="../assets/images/eren/result_img1.png"
                loading="eager"
                alt=""
              />
            </div>
            <div class="p-resultImg2">
              <img
                src="../assets/images/eren/result_img2.png"
                loading="eager"
                alt=""
              />
            </div>
            <div class="p-resultDate">
              <p class="p-resultDate__label">
                <picture>
                  <source
                    srcset="../assets/images/eren/result_info_label_l.png"
                    media="(min-width: 800px)"
                  />
                  <img
                    src="../assets/images/eren/result_info_label.png"
                    loading="eager"
                    alt="広告掲載日"
                  />
                </picture>
              </p>

              <p class="p-resultDate__day">
                <picture>
                  <source
                    srcset="../assets/images/eren/result_date_l.png"
                    media="(min-width: 800px)"
                  />
                  <img
                    src="../assets/images/eren/result_date.png"
                    loading="eager"
                    alt="2019 11/21"
                  />
                </picture>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
    <div class="p-modal js-modal" data-modal="modalClose">
      <button class="c-squareButton--animeH p-squareButton">
        <span
          class="p-modalCloseIcon js-modalCloseIcon"
          data-modal="modalClose"
        ></span>
      </button>
      <div class="p-modalContents">
        <p class="p-modalContents__title">
          <span class="p-modalContents__titleInner"
            ><img
              src="../assets/images/eren/modal_title.png"
              loading="eager"
              alt="登場人物"
          /></span>
        </p>
        <div class="p-modalContentsInner">
          <img
            src="../assets/images/eren/summary_chart_zoom.jpg"
            loading="eager"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="p-modalBg js-modalBg"></div>
  </div>
</template>

<script>
export default {
  name: 'Eren',

  methods: {
    wait: function(ms) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, ms);
      });
    },
    toCenter: function() {
      const elem = document.querySelector('.js-loadingWrap');
      this.center =
        (window.innerHeight - elem.clientHeight) / 2 - elem.offsetTop;
    },
    loading: function() {
      const images = document.querySelectorAll('img');
      let originImageSrc = [];

      for (let i = 0; i < images.length; i++) {
        originImageSrc.push(images[i].src);
        images[i].src = '';
      }

      images.forEach(img => {
        img.addEventListener(
          'load',
          () => {
            this.scaleX += 1 / images.length;
            if (this.scaleX >= 1) {
              this.wait(1000)
                .then(() => {
                  this.isLoaded = true;
                  return this.wait(1200);
                })
                .then(() => {
                  this.isOnScreen = true;
                  return this.wait(2000);
                })
                .finally(() => {
                  console.log('loop開始');
                });
            }
          },
          { once: true }
        );
      });

      for (let i = 0; i < images.length; i++) {
        images[i].src = originImageSrc[i];
      }
    }
  },

  mounted() {
    this.toCenter();
    this.loading();
  },

  data() {
    return {
      center: 0,
      scaleX: 0,
      isLoaded: false,
      isOnScreen: false
    };
  }
};
</script>

<style lang="scss">
body {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: YakuHanJP, Noto Sans JP, sans-serif;
  font-weight: 500;
  line-height: 1;
  background-color: #e50013;
  -webkit-font-smoothing: antialiased; //フォント アンチエイリアス調整
  text-rendering: optimizeLegibility; //レンダリング時のテキスト最適化方法
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 300;
}

button {
  outline: none;
  padding: 0;
  border: none;
}

ol {
  list-style: none;
}

.hidarikikinoEren {
  position: relative;

  @mixin textFadeIN($scale: scaleX(1), $transform-origin: right bottom) {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: 100%;
    height: 100%;
    transform: $scale;
    transform-origin: $transform-origin;
    transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1) 0.2s;
    background-color: #000;
  }

  /* ------------------
		p-loading 
--------------------- */
  .p-loading {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #e50013;
    z-index: 1000;
    transition: visibility 0.2s linear, opacity 0.2s linear;

    &__wrap {
      position: absolute;
      top: 26.93333vw;
      left: 50%;
      transform: translate(-50%);
      width: 203.6vw;
      height: 112.26667vw;
      @include mq(eren-gt-sm) {
        top: 9.13194vw;
        width: 98.33333vw;
        height: 40.69444vw;
      }
      @include mq(eren-lg) {
        top: 146.11111px;
        width: 1573.33333px;
        height: 651.11111px;
      }
    }

    &__text {
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      margin: 0 auto;
      background: url('../assets/images/eren/loading_txt.png') 50% no-repeat;
      background-size: contain;
      transform: translateY(150%);
      width: 28.53333vw;
      height: 2.66667vw;
      transition: opacity 0.2s linear;
      @include mq(eren-gt-sm) {
        transform: translateY(400%);
        width: 7.43056vw;
        height: 0.69444vw;
      }
      @include mq(eren-lg) {
        width: 118.88889px;
        height: 11.11111px;
      }
    }
  }

  .p-loadingInner {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1);

    &__item {
      display: block;
      width: 203.6vw;
      height: 100%;
      transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
      &:before {
        transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0.4s;
      }

      &--item1 {
        order: 2;
        transform: scaleX(0);
        &:before {
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          background-color: #0e6cb2;
          transition-delay: 0s;
          transform: scaleY(0.006);
        }
        @include mq(eren-gt-sm) {
          order: 1;
        }
      }

      &--item2 {
        order: 3;
        &:before {
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          background-color: #fe3c00;
          transition-delay: 0.2s;
          transform: scaleY(0);
        }
        @include mq(eren-gt-sm) {
          order: 2;
          transform: scaleX(0);
          &:before {
            transform: scaleY(0.005);
            transition-delay: 0.1s;
          }
        }
      }

      &--item3 {
        @include mq(eren-sm) {
          display: none;
        }
        &:before {
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          background-color: #deff00;
          transition-delay: 0.2s;
          transform: scaleY(0);
        }
        @include mq(eren-gt-sm) {
          order: 3;
          transform: scaleX(0);
          &:before {
            transform: scaleY(0.005);
            transition-delay: 0.2s;
          }
        }
      }

      &--item4 {
        order: 1;
        &:before {
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          background-color: #02d0d0;
          transition-delay: 0.2s;
          transform: scaleY(0);
        }
        @include mq(eren-gt-sm) {
          order: 4;
          transform: scaleX(0);
          &:before {
            transform: scaleY(0.005);
            transition-delay: 0.3s;
          }
        }
      }
    }
  }

  /* ------------------
		p-header 
--------------------- */
  .p-header {
    width: 100%;
    background-color: #fff;
    position: fixed;
    top: 50px; /* 0 */
    left: 0;
    z-index: 5;
    cursor: pointer;
    overflow: hidden;
    height: 12vw;
    transition: visibility 0.4s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 0.4s cubic-bezier(0.19, 1, 0.22, 1),
      transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    @include mq(eren-gt-sm) {
      height: 4.0625vw;
    }
    @include mq(eren-lg) {
      height: 65px;
    }
  }

  .p-headerTicker {
    background-image: url('../assets/images/eren/header_ticker.png');
    background-repeat: repeat-x;
    background-size: 49.64103vw 12vw;
    width: 100%;
    height: 100%;
    animation: headerMovingS 6s linear infinite;
    @include mq(eren-gt-sm) {
      background-size: 16.80556vw 4.0625vw;
      animation: headerMovingL 6s linear infinite;
    }

    @include mq(eren-lg) {
      background-size: 268.88889px 65px;
      animation: headerMovingLL 6s linear infinite;
    }
    @keyframes headerMovingS {
      0% {
        background-position: 0 0;
      }

      100% {
        background-position: 49.64103vw 0;
      }
    }
    @keyframes headerMovingL {
      0% {
        background-position: 0 0;
      }

      100% {
        background-position: 16.80556vw 0;
      }
    }
    @keyframes headerMovingLL {
      0% {
        background-position: 0 0;
      }

      100% {
        background-position: 268.88889px 0;
      }
    }
  }

  /* ------------------
		p-menuBtn
--------------------- */
  .p-menuBtn {
    position: fixed;
    right: 0;
    top: 0;
    width: 14vw;
    height: 14vw;
    background-color: #000;
    transition: background-color 0.2s cubic-bezier(0.19, 1, 0.22, 1);
    z-index: 10;

    &__open {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 5.6vw;
      height: 4.26667vw;

      > span {
        position: absolute;
        left: 0;
        right: 0;
        background-color: #fff;
        width: 100%;
        height: 0.533vw;
        transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1) 0.2s;
      }
      > span:nth-child(1) {
        transform-origin: left center;
        top: 0;
      }
      > span:nth-child(2) {
        transform-origin: center center;
        top: 0;
        bottom: 0;
        margin: auto;
      }
      > span:nth-child(3) {
        transform-origin: right center;
        bottom: 0;
      }
    }

    &__close {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      transform: rotate(45deg);
      width: 5.33333vw;
      height: 5.33333vw;
      &:before,
      &:after {
        content: '';
        transform-origin: top left;
        background-color: #fff;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
      }
      &:before {
        width: 0.5333vw;
        height: 100%;
        transform: scaleY(0);
      }
      &:after {
        height: 0.5333vw;
        width: 100%;
        transform: scaleX(0);
      }
    }
  }

  /* ------------------
		p-menu
--------------------- */
  .p-menu {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 82.4vw;
    background-color: #000;
    opacity: 0;
    visibility: hidden;
    z-index: -1;
    transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 0.4s cubic-bezier(0.19, 1, 0.22, 1),
      visibility 0.4s cubic-bezier(0.19, 1, 0.22, 1),
      z-index 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    @include mq(eren-sm) {
      transform: translateX(100%);
    }
    @include mq(eren-gt-sm) {
      height: 4.0625vw;
      width: auto;
      opacity: 1;
      visibility: visible;
      overflow: visible;
      z-index: 5;
    }
    @include mq(eren-lg) {
      height: 65px;
    }
    &__wrap {
      position: absolute;
      width: 100%;
      height: 100%;
      min-height: 146.26667vw;
      padding: 18vw 4vw 4vw;
      display: flex;
      justify-content: center;
      flex-direction: column;
      @include mq(eren-gt-sm) {
        position: relative;
        width: auto;
        min-height: 0;
        padding: 0;
      }
    }

    &__nav {
      position: relative;
      width: 100%;
      z-index: 1;
      @include mq(eren-gt-sm) {
        width: 4.75694vw;
        background-color: #000;
        padding: 0.41667vw;
        position: absolute;
        top: 5.41667vw;
        right: 1.66667vw;
      }
      @include mq(eren-md) {
        width: 6.48649vw;
      }
      @include mq(eren-lg) {
        width: 76.11111px;
        padding: 6.66667px;
        top: 136.66667px; /* 86.66667px; */
        right: 26.66667px;
      }

      > ul {
        width: 100%;
        > .p-menuNavItem {
          height: 7.77778vw;
          border-top-width: 0;
          @include mq(eren-sm) {
            height: 26.4vw;
          }
          @include mq(eren-md) {
            height: 12.10811vw;
          }
          @include mq(eren-lg) {
            height: 124.44444px;
          }
          .p-menuNavItem__leftArrow {
            @include mq(eren-gt-sm) {
              display: none;
            }
          }
        }
        > .p-menuNavItem:first-child {
          border-width: 0.26667vw;
          @include mq(eren-gt-sm) {
            border-width: 0.06944vw;
          }
        }
        > .p-menuNavItem--vote {
          background-color: #02d0d0;
          span {
            color: #e50013;
          }
          &:before,
          &:after {
            background-color: #e50013;
          }
          &:hover {
            .p-menuNavItem__label {
              color: #02d0d0;
            }
            .p-menuNavItem__leftArrow {
              fill: #02d0d0;
            }
          }
        }
      }
    }

    &__sns {
      position: relative;
      width: 100%;
      height: 14.66667vw;
      display: flex;
      @include mq(eren-sm) {
        margin-top: 4vw;
      }
      @include mq(eren-gt-sm) {
        position: absolute;
        right: 0;
        top: 50px; /* 0 */
        background-color: #000;
        width: 10.41667vw;
        height: 100%;
        padding-left: 0.41667vw;
        padding-right: 0.41667vw;
        align-items: center;
      }
      @include mq(eren-lg) {
        width: 166.66667px;
        padding-left: 6.66667px;
        padding-right: 6.66667px;
      }
      > .p-snsButton {
        width: 33%;
        border-right-width: 0;
        @include mq(eren-gt-sm) {
          width: 3.19444vw;
          height: 3.19444vw;
        }
        @include mq(eren-lg) {
          width: 51.11111px;
          height: 51.11111px;
        }
      }
      > .p-snsButton:last-child {
        border-width: 0.26667vw;
        @include mq(eren-gt-sm) {
          border-width: 0.06944vw;
        }
      }
    }
  }

  /* ------------------
		main
--------------------- */
  main {
    position: relative;
    width: 100%;
    padding-top: 12vw;
    @include mq(eren-gt-sm) {
      padding-top: 4.0625vw;
    }
    @include mq(eren-lg) {
      padding-top: 65px;
    }
  }

  /* ------------------
		p-kv
--------------------- */
  .p-kv {
    //動きを見てプロパティ追加
    position: relative;
    width: 100%;
    max-width: 1600px;
    padding-top: 14.933vw;
    overflow: hidden;
    margin: auto;
    backface-visibility: hidden;
    transform: translateZ(0);
    @include mq(eren-gt-sm) {
      height: 49.30556vw;
      padding-top: 5.06944vw;
    }
    @include mq(eren-lg) {
      height: 788.88889px;
      padding-top: 81.11111px;
    }

    &__characters {
      position: relative;
      display: flex;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      width: 542.93333vw;
      height: 112.26667vw;
      margin: auto;
      backface-visibility: hidden;
      transform: translateZ(0);
      @include mq(eren-gt-sm) {
        width: 98.33333vw;
        height: 40.69444vw;
      }
      @include mq(eren-lg) {
        width: 1573.33333px;
        height: 651.11111px;
      }
    }

    .p-character {
      position: relative;
      height: 100%;
      width: 67.86667vw;
      overflow: hidden;
      @include mq(eren-gt-sm) {
        width: 25%;
      }
      &__inner {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%;
        transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1);
        transform: translateZ(0);
        backface-visibility: hidden;
      }
      &__inner:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transform: scaleY(1);
        transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1),
          background-color 0.8s cubic-bezier(0.19, 1, 0.22, 1);
      }

      &--item1 {
        background-color: #0e6cb2;
        .p-character__inner {
          background-image: url('../assets/images/eren/kv_img1.jpg');
          transform: translateY(-20%);
          transition-delay: 0s !important;
        }
        .p-character__inner:after {
          background-color: #0e6cb2;
          transform-origin: bottom center;
          transition-delay: 0s !important;
        }
      }
      &--item2 {
        background-color: #fe3c00;
        .p-character__inner {
          background-image: url('../assets/images/eren/kv_img2.jpg');
          transform: translateY(20%);
          transition-delay: 0.1s !important;
        }
        .p-character__inner:after {
          background-color: #fe3c00;
          transform-origin: top center;
          transition-delay: 0.1s !important;
        }
      }
      &--item3 {
        background-color: #deff00;
        .p-character__inner {
          background-image: url('../assets/images/eren/kv_img3.jpg');
          transform: translateY(-20%);
          transition-delay: 0.2s !important;
        }
        .p-character__inner:after {
          background-color: #deff00;
          transform-origin: bottom center;
          transition-delay: 0.2s !important;
        }
      }
      &--item4 {
        background-color: #02d0d0;
        .p-character__inner {
          background-image: url('../assets/images/eren/kv_img4.jpg');
          transform: translateY(20%);
          transition-delay: 0.3s !important;
        }
        .p-character__inner:after {
          background-color: #02d0d0;
          transform-origin: top center;
          transition-delay: 0.3s !important;
        }
      }
    }

    > h1 {
      position: absolute;
      left: 0;
      bottom: 0;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      transform: translateZ(0);
      @include mq(eren-gt-sm) {
        left: 4.51389vw;
      }
      @include mq(eren-lg) {
        left: 72.22222px;
      }
    }

    &__title {
      background-color: #000;
      font-size: 6.933vw;
      padding: 0.6em;
      display: flex;
      align-items: center;
      backface-visibility: hidden;
      @include mq(eren-gt-sm) {
        font-size: 3.125vw;
      }
      @include mq(eren-lg) {
        font-size: 50px;
      }

      &--title1 {
        position: relative;
        padding-bottom: 0;
        transform-origin: top left;
        transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
        transform: scaleY(0);
        transition-delay: 0.4s;
        transition-duration: 0.2s;
        &:after {
          @include textFadeIN(scaleY(1));
          transition-delay: 0.8s;
        }
        & > img {
          width: 5.73333vw;
          @include mq(eren-gt-sm) {
            width: 2.53472vw;
          }
          @include mq(eren-lg) {
            width: 40.55556px;
          }
        }
      }
      &--title2 {
        position: relative;
        transform-origin: top left;
        transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
        transform: scaleX(0);
        transition-delay: 0.6s;
        &:after {
          @include textFadeIN();
          transition-delay: 1s;
        }
        & > img {
          height: 5.6vw;
          width: auto;
          @include mq(eren-gt-sm) {
            height: 2.91667vw;
          }
          @include mq(eren-lg) {
            height: 46.66667px;
          }
        }
      }
    }

    &__name {
      position: absolute;
      width: 70vw;
      height: 15.333vw;
      top: 2.6667vw;
      left: 2.6667vw;
      @include mq(eren-gt-sm) {
        width: 22.74306vw;
        height: 5.20833vw;
        top: auto;
        bottom: 0;
        left: auto;
        right: 4.51389vw;
      }
      @include mq(eren-lg) {
        width: 363.88889px;
        height: 83.33333px;
        right: 72.22222px;
      }
    }
  }

  /* ------------------
		p-summery
--------------------- */
  .p-summery {
    position: relative;
    width: 100%;
    max-width: 1600px;
    margin: 14.6667vw auto auto;
    @include mq(eren-gt-sm) {
      display: flex;
      margin-top: 5.55556vw;
      padding-top: 2.08333vw;
      padding-left: 7.01389vw;
      padding-right: 4.51389vw;
    }
    @include mq(eren-md) {
      display: block;
    }
    @include mq(eren-lg) {
      margin-top: 88.88889px;
      padding-top: 33.33333px;
      padding-left: 112.22222px;
      padding-right: 72.22222px;
    }

    &__heading {
      position: relative;
      background-color: #deff00;
      background-image: url('../assets/images/eren/summary_heading_bg.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      height: 100vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      overflow: hidden;
      @include mq(eren-gt-sm) {
        width: 50%;
        height: 28.19444vw;
        overflow: visible;
      }
      @include mq(eren-md) {
        width: 100%;
        height: 451.17117px;
        background-image: url('../assets/images/eren/summary_header_bg_l.jpg');
        background-position: 50% 50%;
      }
      @include mq(eren-lg) {
        height: 451.11111px;
      }
    }

    &__headingInner {
      position: relative;
      z-index: 1;
      left: 4vw;
      @include mq(eren-gt-sm) {
        left: -2.43056vw;
      }
      @include mq(eren-md) {
        left: 25.94595px;
      }
      @include mq(eren-lg) {
        left: -38.88889px;
      }
    }

    &__title {
      position: absolute;
      top: -3.33333vw;
      left: 4vw;
      width: 9.73333vw;
      background-color: #000;
      padding: 3.2vw 2.66667vw;
      z-index: 2;
      transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
      transform-origin: top left;
      transform: scaleY(0);
      backface-visibility: hidden;
      @include mq(eren-gt-sm) {
        padding: 1.25vw 1.04167vw;
        top: -1.38889vw;
        left: 1.38889vw;
        width: 3.92361vw;
      }
      @include mq(eren-md) {
        padding: 1.94595vw 1.62162vw;
        top: -2.16216vw;
        left: 2.16216vw;
        width: 6.10811vw;
        display: flex;
        justify-content: center;
      }
      @include mq(eren-lg) {
        padding: 20px 16.66667px;
        top: -22.22222px;
        left: 22.22222px;
        width: 62.77778px;
      }
      &:after {
        position: relative;
        @include textFadeIN(scaleY(1));
        transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1) 0.2s;
        transform-origin: right bottom;
      }

      img {
        display: block;
        width: 3.86667vw;
        @include mq(eren-gt-sm) {
          width: 1.49306vw;
        }
        @include mq(eren-md) {
          width: 2.32432vw;
        }
        @include mq(eren-lg) {
          width: 23.88889px;
        }
      }
    }

    &__headingDesc {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      transform: translateZ(0);
    }

    &__descLine {
      position: relative;
      display: inline-block;
      font-size: 2.93333vw;
      font-weight: bold;
      line-height: 1.8;
      letter-spacing: 0.06em;
      white-space: nowrap;
      margin-top: -0.04em;
      padding: 0.4em 0.4em 0.4em 7.6em;
      background-color: #deff00;
      transform-origin: top left;
      transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
      transform: scaleX(0);
      backface-visibility: hidden;
      @include mq(eren-gt-sm) {
        padding-left: 8em;
        font-size: 0.90278vw;
      }
      @include mq(eren-md) {
        font-size: 1.40541vw;
      }
      @include mq(eren-lg) {
        font-size: 14.44444px;
      }
      &:after {
        @include textFadeIN();
        background-color: #deff00;
      }
    }

    $type: 1;
    $delay: 0.3;
    $delayAfter: 0.5;
    @while $type <= 10 {
      .p-summery__descLine:nth-of-type(#{$type}) {
        transition-delay: #{$delay}s;
        &:after {
          transition-delay: #{$delayAfter}s;
        }
      }
      $type: $type + 1;
      $delay: $delay + 0.1;
      $delayAfter: $delayAfter + 0.1;
    }

    .p-summery__descLine:last-of-type {
      transition-delay: 1.1s;
      &:after {
        transition-delay: 1.3s;
      }
    }

    &__relation {
      position: relative;
      width: 100%;
      @include mq(eren-gt-sm) {
        width: 50%;
        top: 2.70833vw;
      }
      @include mq(eren-md) {
        width: 100%;
        top: 0;
      }
      @include mq(eren-lg) {
        top: 43.33333px;
      }

      &:hover {
        .p-squareButton:before,
        .p-squareButton:after {
          transform: scaleX(1);
        }
      }

      &:before {
        content: '';
        display: block;
        width: 100%;
        padding-top: 100%;
        @include mq(eren-gt-sm) {
          padding-top: 63.57928%;
        }
      }

      figure {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      .p-squareButton {
        display: block;
        position: absolute;
        right: 0.41667vw;
        bottom: 0.41667vw;
        width: 3.92361vw;
        height: 3.92361vw;
        @include mq(eren-sm) {
          display: none;
        }
        @include mq(eren-md) {
          width: 6.10811vw;
          height: 6.10811vw;
        }
        @include mq(eren-lg) {
          right: 6.66667px;
          bottom: 6.66667px;
          width: 62.77778px;
          height: 62.77778px;
        }

        img {
          width: 1.70139vw;
          height: 1.77083vw;
          @include mq(eren-sm) {
            display: none;
          }
          @include mq(eren-md) {
            display: block;
            width: 2.64865vw;
            height: 2.75676vw;
          }
          @include mq(eren-lg) {
            width: 27.22222px;
            height: 28.33333px;
          }
        }
      }
    }

    &__relationInner {
      @include mq(eren-gt-sm) {
        cursor: pointer;
      }
    }
  }

  /* ------------------
		p-story
--------------------- */
  .p-story {
    position: relative;
    width: 100%;
    margin-top: 13.33333vw;
    padding-top: 5.33333vw;
    @include mq(eren-gt-sm) {
      margin-top: 9.375vw;
      padding-top: 2.08333vw;
    }
    @include mq(eren-lg) {
      font-size: 34.44444px;
      margin-top: 150px;
      padding-top: 33.33333px;
    }

    &__inner {
      background-image: url('../assets/images/eren/story_pattern.jpg');
      background-repeat: repeat;
      background-position: 50%;
      background-size: 360px 365px;
      @include mq(eren-gt-sm) {
        background-size: 720px 730px;
      }
    }

    /*  p-story > 	p-story__tabs
	-------------------------------*/
    &__tabs {
      position: relative;
      height: 19.45946vw;
      @include mq(eren-gt-sm) {
        height: 6.66667vw;
      }
      @include mq(eren-lg) {
        height: 106.66667px;
      }

      &:before,
      &:after {
        content: '';
        height: 100%;
        position: absolute;
        background-color: #e50013;
        border-color: #deff00;
        border-width: 0.8vw;
        border-bottom-style: solid;
        box-sizing: inherit;
        @include mq(eren-gt-sm) {
          border-width: 0.20833vw;
        }
        @include mq(eren-lg) {
          border-width: 3.33333px;
        }
      }
      &:before {
        left: 0;
      }
      &:after {
        right: 0;
      }

      &--bottom {
        &:before,
        &:after {
          border-bottom: none;
          border-top-style: solid;
        }

        > button {
          border-top: none;
          border-bottom-style: solid;
        }

        > button:after {
          top: 0;
          bottom: auto;
        }

        .p-tab__inner {
          border-style: none solid solid !important;
        }
      }
    }

    /*  p-story > p-story__tab
	----------------------------*/
    &__tab {
      position: absolute;
      top: 0;
      display: block;
      width: 45.33333vw;
      height: 100%;
      background-color: #000;
      padding: 1.2vw 1.2vw 0;
      z-index: 2;
      @include mq(eren-gt-sm) {
        width: 44.44444vw;
        padding: 0.41667vw 0.41667vw 0;
        cursor: pointer;
      }
      @include mq(eren-lg) {
        width: 711.11111px;
        padding: 6.66667px 6.66667px 0;
      }
      &:hover {
        @include mq(eren-gt-sm) {
          .p-tab__inner > span {
            color: #e50013;
          }
        }
      }
      &:nth-child(1) {
        left: 4vw;
        @include mq(eren-gt-sm) {
          //tab切り替えのstyle
          left: auto;
          right: calc(50% + 1.04167vw);
        }
        @include mq(eren-lg) {
          right: calc(50% + 16.66667px);
        }
      }
      &:nth-child(2) {
        right: 4vw;
        @include mq(eren-gt-sm) {
          //tab切り替えのstyle
          right: auto;
          left: calc(50% + 1.04167vw);
        }
        @include mq(eren-lg) {
          left: calc(50% + 16.66667px);
        }
      }
      &:after {
        content: '';
        width: 100%;
        position: absolute;
        left: 0;
        height: 0.8vw;
        background-color: #deff00;
        bottom: 0;
        @include mq(eren-gt-sm) {
          height: 0.20833vw;
        }
        @include mq(eren-lg) {
          height: 3.33333px;
        }
      }

      &--bottom {
        &.is-active {
          border-top: none !important;
          border-bottom-style: solid;
          .p-tab__inner {
            border-style: none solid solid;
          }
        }
      }
    }

    .p-tab__inner {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 0.26667vw #fff;
      border-style: solid solid none;
      overflow: hidden;
      transition: background-color 0.4s cubic-bezier(0.19, 1, 0.22, 1),
        border-color 0.4s cubic-bezier(0.19, 1, 0.22, 1);
      @include mq(eren-gt-sm) {
        border-width: 0.06944vw;
        &:before,
        &:after {
          position: absolute;
          content: '';
          display: block;
          width: 101%;
          height: 51%;
          background-color: #02d0d0;
          transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
          transform: scaleX(0);
          backface-visibility: hidden;
          z-index: 0;
        }
        &:before {
          top: 0;
          left: 0;
          transform-origin: center right;
        }
        &:after {
          top: auto;
          bottom: 0;
          transform-origin: center left;
        }
        &:hover {
          &:before,
          &:after {
            transform: scaleX(1);
          }
        }
      }

      &__label {
        transform: scaleX(0.85);
        position: relative;
        display: block;
        color: #fff;
        font-size: 4.26667vw;
        font-weight: 500;
        letter-spacing: 0.14em;
        white-space: nowrap;
        line-height: 1;
        transition: color 0.4s cubic-bezier(0.19, 1, 0.22, 1);
        z-index: 2;
        @include mq(eren-gt-sm) {
          font-size: 1.80556vw;
        }
        @include mq(eren-lg) {
          font-size: 28.88889px;
        }

        > span {
          font-size: 58%;
          line-height: 1.4;
          letter-spacing: 0.14em;
          margin-top: 0.8em;
        }
      }

      &__arrow {
        position: absolute;
        top: 0;
        bottom: 0;
        margin-top: auto;
        margin-bottom: auto;
        fill: #e50013;
        display: block;
        transition: fill 0.4s cubic-bezier(0.19, 1, 0.22, 1),
          transform 0.4s cubic-bezier(0.19, 1, 0.22, 1),
          opacity 0.4s cubic-bezier(0.19, 1, 0.22, 1);
        z-index: 2;
        left: 1.46667vw;
        width: 3.6vw;
        height: 2.13333vw;
        @include mq(eren-gt-sm) {
          left: 0.69444vw;
          width: 1.38889vw;
          height: 0.79861vw;
        }
      }
    }

    &__tab.is-active {
      background-color: transparent;
      border-left-style: solid;
      border-right-style: solid;
      border-top-style: solid;
      border-width: 0.8vw;
      border-color: #deff00;
      padding: 0;
      pointer-events: none;
      @include mq(eren-gt-sm) {
        border-width: 0.20833vw;
        cursor: default;
      }
      @include mq(eren-lg) {
        border-width: 3.33333px;
      }

      &:after {
        opacity: 0;
      }

      .p-tab__inner {
        border-color: transparent;
        @include mq(eren-gt-sm) {
          border-width: 0.06944vw;
        }
        @include mq(eren-lg) {
          border-width: 1.11111px;
        }

        &__label {
          color: #deff00;
        }
      }
    }

    /*  p-story > p-story__wrap
	-----------------------------*/
    &__wrap {
      position: relative;
    }

    /*  p-story > p-story__pages
	-----------------------------*/
    &__pages {
      margin: auto;
      padding: 9.33333vw 4vw;
      opacity: 0;
      display: none;
      &:after {
        display: block;
        font-size: 3.46667vw;
        color: #fff;
        text-align: center;
        font-weight: 500;
        transform: scale(0.85);
        letter-spacing: 0.14em;
        line-height: 1.3;
        margin-top: -0.3em;
        white-space: pre;
      }

      li {
        max-width: 640px;
        position: relative;
        margin: 0 auto 5.06667vw;
      }

      li:before {
        display: block;
        content: '';
        width: 100%;
        padding-top: 141.40625%;
        background-color: #fff;
      }

      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: block;
      }

      &--prologue:after {
        content: '※本作品は、2019年10月19日（土）に\A cakesにて掲載されたものになります。';
        @include mq(eren-gt-sm) {
          content: '※本作品は、2019年10月19日（土）にcakesにて掲載されたものになります。';
          font-size: 1.62162vw;
        }
      }

      &--main:after {
        content: '※本作品は、2019年10月20日(日）に\A 朝日新聞 全国朝刊にて掲載されたものになります。';
        @include mq(eren-gt-sm) {
          content: '※本作品は、2019年10月20日(日）に朝日新聞 全国朝刊にて掲載されたものになります。';
          font-size: 1.62162vw;
        }
      }
    }

    .p-story__pages.is-active {
      display: block;
      animation-name: show;
      animation-duration: 1s;
      animation-fill-mode: forwards;
      @keyframes show {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    }
  }
  .p-story.is-prologue {
    //tab切り替えのstyle
    .p-story__tabs:before {
      width: 4.26667vw;
      @include mq(eren-gt-sm) {
        width: auto;
        right: calc(50% + 45.48611vw);
        left: 0;
      }
      @include mq(eren-lg) {
        right: calc(50% + 727.77778px);
      }
    }
    .p-story__tabs:after {
      //tab切り替えのstyle
      width: 50.66667vw;
      @include mq(eren-gt-sm) {
        width: auto;
        left: calc(50% + -1.04167vw);
        right: 0;
      }
      @include mq(eren-lg) {
        left: calc(50% + -16.66667px);
      }
    }
  }

  .p-story.is-main {
    //tab切り替えのstyle
    .p-story__tabs:before {
      width: 50.66667vw;
      @include mq(eren-gt-sm) {
        width: auto;
        right: calc(50% + -1.04167vw);
        left: 0;
      }
      @include mq(eren-lg) {
        right: calc(50% + -16.66667px);
      }
    }
    .p-story__tabs:after {
      //tab切り替えのstyle
      width: 4vw;
      @include mq(eren-gt-sm) {
        width: auto;
        left: calc(50% + 45.48611vw);
        right: 0;
      }
      @include mq(eren-lg) {
        left: calc(50% + 727.77778px);
      }
    }
  }

  /* ------------------
		p-result
--------------------- */
  .p-result {
    position: relative;
    width: 100%;
    max-width: 1455.55556px;
    margin: 18.66667vw auto auto;
    @include mq(eren-gt-sm) {
      width: auto;
      margin-left: 4.51389vw;
      margin-right: 4.51389vw;
      margin-top: 8.33333vw;
    }
    @include mq(eren-lg) {
      margin-left: auto;
      margin-right: auto;
      margin-top: 133.33333px;
    }

    &__bgWrap {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .bgItem {
      position: relative;
      width: 100%;
      height: 50%;

      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-repeat: repeat-x;
        background-size: 327.45725vw 57.86667vw;
        @include mq(eren-gt-sm) {
          background-size: 133.61111vw 23.61111vw;
        }
        @include mq(eren-lg) {
          background-size: 2137.77778px 377.77778px;
        }
      }

      &--top {
        background-color: #0e6cb2;
        &:before {
          background-image: url('../assets/images/eren/result_bg1.jpg');
          animation: moveBgRight 30s linear infinite;
          @include mq(eren-gt-sm) {
            animation: moveBgRightL 30s linear infinite;
          }
          @include mq(eren-lg) {
            animation: moveBgRightLL 30s linear infinite;
          }
        }
      }

      &--bottom {
        background-color: #deff00;
        &:before {
          background-image: url('../assets/images/eren/result_bg2.jpg');
          animation: moveBgLeft 30s linear infinite;
          @include mq(eren-gt-sm) {
            animation: moveBgLeftL 30s linear infinite;
          }
          @include mq(eren-lg) {
            animation: moveBgLeftLL 30s linear infinite;
          }
        }
      }
    }

    @keyframes moveBgRight {
      0% {
        background-position: 0;
      }
      100% {
        background-position: 327.45725vw;
      }
    }

    @keyframes moveBgRightL {
      0% {
        background-position: 0;
      }
      100% {
        background-position: 133.61111vw;
      }
    }

    @keyframes moveBgRightLL {
      0% {
        background-position: 0;
      }
      100% {
        background-position: 2137.77778px;
      }
    }

    @keyframes moveBgLeft {
      0% {
        background-position: 0;
      }
      100% {
        background-position: -327.45725vw;
      }
    }

    @keyframes moveBgLeftL {
      0% {
        background-position: 0;
      }
      100% {
        background-position: -133.61111vw;
      }
    }

    @keyframes moveBgLeftLL {
      0% {
        background-position: 0;
      }
      100% {
        background-position: -2137.77778px;
      }
    }

    &__inner {
      position: relative;
      z-index: 3;
      padding: 18.26667vw 4vw 25.33333vw;
      @include mq(eren-gt-sm) {
        padding: 9.96528vw 13.47222vw 10.17361vw;
      }
      @include mq(eren-lg) {
        padding: 159.44444px 215.55556px 162.77778px;
      }
    }

    .p-resultTitle {
      display: flex;
      z-index: 2;
      margin-bottom: 4vw;
      transform: translateZ(0);
      @include mq(eren-sm) {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }
      @include mq(eren-gt-sm) {
        margin-bottom: 1.66667vw;
      }
      @include mq(eren-lg) {
        margin-bottom: 26.66667px;
      }

      &__inner {
        height: 13.6vw;
        margin-top: -0.1em;
        transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
        transform-origin: top left;
        transform: scaleX(0);
        backface-visibility: hidden;
        @include mq(eren-gt-sm) {
          height: 5.45139vw;
        }
        @include mq(eren-lg) {
          height: 87.22222px;
        }
        &:after {
          transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
          transform-origin: right bottom;
          transform: scaleX(1);
        }
        &:nth-of-type(1) {
          transition-delay: 0.1s;
          &:after {
            transition-delay: 0.3s;
          }
        }
        &:nth-of-type(2) {
          transition-delay: 0.2s;
          &:after {
            transition-delay: 0.4s;
          }
        }
        &:last-of-type {
          transition-delay: 0.1s !important;
          &:after {
            @include textFadeIN;
            background-color: #e50013;
            transition-delay: 0.3s !important;
          }
        }
      }
      &__inner img {
        display: block;
        height: 100%;
        width: auto;
      }
      &__inner:after {
        background-color: #e50013;
      }
    }

    .p-resultDesc {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin-bottom: 9vw;
      z-index: 2;
      @include mq(eren-gt-sm) {
        margin-bottom: 20.48611vw;
      }
      @include mq(eren-lg) {
        margin-bottom: 327.77778px;
      }

      &__line {
        position: relative;
        color: #fff;
        background-color: #e50013;
        font-size: 3.06667vw;
        font-weight: bold;
        font-feature-settings: 'palt';
        line-height: 1.8;
        letter-spacing: 0.06em;
        padding: 0.4em;
        margin-top: -0.04em;
        transform: scaleX(0);
        transform-origin: top left;
        transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
        backface-visibility: hidden;
        @include mq(eren-gt-sm) {
          font-size: 1.86458vw;
          line-height: 1.3;
          padding: 0.1em 0.2em;
          white-space: nowrap;
        }
        @include mq(eren-lg) {
          font-size: 29.83333px;
        }
      }

      &__line:after {
        @include textFadeIN;
        background-color: #e50013;
      }
    }

    $type: 1;
    $delay: 0.7;
    $delayAfter: 0.9;
    @while $type <= 5 {
      .p-resultDesc__line:nth-of-type(#{$type}) {
        transition-delay: #{$delay}s;
        &:after {
          transition-delay: #{$delayAfter}s;
        }
      }
      $type: $type + 1;
      $delay: $delay + 0.1;
      $delayAfter: $delayAfter + 0.1;
    }

    $type: 6;
    $delay: 0.5;
    $delayAfter: 0.7;
    @while $type <= 8 {
      .p-resultDesc__line:nth-of-type(#{$type}) {
        transition-delay: #{$delay}s;
        &:after {
          transition-delay: #{$delayAfter}s;
        }
      }
      $type: $type + 1;
      $delay: $delay + 0.1;
      $delayAfter: $delayAfter + 0.1;
    }

    .p-resultLogo {
      position: absolute;
      width: 21.73333vw;
      height: 24.66667vw;
      top: 58vw;
      right: 6.53333vw;
      z-index: 4;
      @include mq(eren-gt-sm) {
        width: 14.58333vw;
        height: 16.5625vw;
        top: 26.66667vw;
        right: 13.78472vw;
      }
      @include mq(eren-lg) {
        width: 233.33333px;
        height: 265px;
        top: 426.66667px;
        right: 220.55556px;
      }
    }

    .p-resultImg1,
    .p-resultImg2 {
      position: absolute;
    }

    .p-resultImg1 {
      width: 40.4vw;
      height: 27.86667vw;
      bottom: 34.66667vw;
      right: 7.46667vw;
      transform: rotate(-3.5deg);
      @include mq(eren-gt-sm) {
        width: 22.04861vw;
        height: 15.03472vw;
        top: 27.77778vw;
        left: 16.04167vw;
        bottom: auto;
        right: auto;
      }
      @include mq(eren-lg) {
        width: 352.77778px;
        height: 240.55556px;
        top: 444.44444px;
        left: 256.66667px;
      }
    }

    .p-resultImg2 {
      width: 42vw;
      height: 29.6vw;
      bottom: 6.93333vw;
      right: 5.73333vw;
      @include mq(eren-gt-sm) {
        width: 28.47222vw;
        height: 20.3125vw;
        top: 28.19444vw;
        left: 37.98611vw;
        bottom: auto;
        right: auto;
        transform: rotate(3deg);
      }
      @include mq(eren-lg) {
        width: 455.55556px;
        height: 325px;
        top: 451.11111px;
        left: 607.77778px;
      }
    }

    .p-resultDate {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      z-index: 2;
      transform: translateZ(0);
      &__label {
        background-color: #e50013;
        position: relative;
        height: 8.4vw;
        z-index: inherit;
        transform: scaleX(0);
        transform-origin: top left;
        transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
        transition-delay: 1.7s;
        backface-visibility: hidden;
        @include mq(eren-gt-sm) {
          height: 5.10417vw;
          transition-delay: 1.3s;
        }
        @include mq(eren-lg) {
          height: 81.66667px;
        }
        &:after {
          @include textFadeIN;
          transition-delay: 1.9s;
          background-color: #e50013;
          @include mq(eren-gt-sm) {
            transition-delay: 1.5s;
          }
        }
      }

      &__day {
        height: 13.6vw;
        margin-top: -0.1em;
        z-index: inherit;
        transform: scaleX(0);
        transform-origin: top left;
        transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
        transition-delay: 1.8s;
        backface-visibility: hidden;
        @include mq(eren-gt-sm) {
          height: 9.58333vw;
          transition-delay: 1.4s;
        }
        @include mq(eren-lg) {
          height: 153.33333px;
        }
        &:after {
          @include textFadeIN;
          transition-delay: 1.9s;
          background-color: #e50013;
          @include mq(eren-gt-sm) {
            transition-delay: 1.6s;
          }
        }
      }

      &__label img,
      &__day img {
        display: block;
        height: 100%;
        width: auto;
      }
    }
  }

  /* -------------------------------
    アニメーション関係の .is- クラス 
---------------------------------- */
  // opening NowLoading画面 共通
  .p-loading.is-loaded {
    opacity: 0;
    visibility: hidden;
    transition-delay: 1s;

    .p-loading__wrap {
      transform: translate(-50%, 0) !important;
      transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1);
    }

    .p-loading__text {
      opacity: 0;
    }
  }

  // progreess-guage 縦に展開 共通
  .p-loadingInner {
    &__item.is-loaded:before {
      transform: scaleY(1) !important;
    }
  }

  // header sticky 共通
  .p-header.ieren-smide {
    transform: translateY(-100%);
    opacity: 0;
  }

  // menuボタン eren-sm用
  .p-menuBtn.is-open {
    background-color: #e50013;
    .p-menuBtn__open span {
      transform: scaleX(0);
      transition-delay: 0s;
    }
    .p-menuBtn__close:before {
      transform: scaleY(1);
      transition-delay: 0.2s;
    }
    .p-menuBtn__close:after {
      transform: scaleX(1);
      transition-delay: 0.4s;
    }
  }

  // menuOpen eren-sm用
  .p-menu.is-open {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
    z-index: 9;
  }

  // loading後 KVキャラonScreen & h1テキストフェードイン 共通
  .p-kv.is-onScreenItem.is-onScreen {
    .p-character__inner {
      transform: translateY(0);
      &:after {
        transform: scaleY(0);
      }
    }
    .p-kv__title--title1 {
      transform: scaleY(1);
      &:after {
        transform: scaleY(0);
      }
    }
    .p-kv__title--title2 {
      transform: scaleX(1);
      &:after {
        transform: scaleX(0);
      }
    }
  }

  // loop中 KVキャラonScreen & closeを繰り返し eren-sm用
  .p-kv.is-onScreenItem.is-onScreen.is-closed {
    .p-character--item1 > .p-character__inner,
    .p-character--item3 > .p-character__inner {
      transform: translateY(-20%);
    }
    .p-character--item2 > .p-character__inner,
    .p-character--item4 > .p-character__inner {
      transform: translateY(20%);
    }
    .p-character__inner:after {
      transform: scaleY(1) !important; //is-onScreenを上書き
    }
  }

  // p-summury あらすじ部 フェードイン 共通
  .p-summery__heading.is-onScreen {
    .p-summery__title {
      transform: scaleY(1);
      &:after {
        transform: scaleY(0);
      }
    }
    .p-summery__descLine {
      transform: scaleX(0.9);
      &:after {
        transform: scaleX(0);
      }
    }
  }

  // p-result 朝日新聞掲載〜部 フェードイン 共通
  .p-result__inner.is-onScreen {
    .p-resultTitle__inner,
    .p-resultDate__label,
    .p-resultDate__day {
      transform: scaleX(1);
      &:after {
        transform: scaleX(0);
      }
    }
    .p-resultDesc__line {
      transform: scaleX(0.9);
      &:after {
        transform: scaleX(0);
      }
    }
  }

  // loop中ステップ毎の各KVのスタイル eren-sm用
  .is-step1.p-kv__characters {
    @include mq(eren-sm) {
      &:nth-child(3) {
        .p-character__inner,
        &:after {
          transition-delay: 0.1s;
        }
      }

      &:nth-child(7) {
        .p-character__inner,
        &:after {
          transition-delay: 0.1s;
        }
      }

      &:nth-child(4) {
        .p-character__inner,
        &:after {
          transition-delay: 0.2s;
        }
      }

      &:nth-child(8) {
        .p-character__inner,
        &:after {
          transition-delay: 0.2s;
        }
      }

      &:first-child {
        .p-character__inner,
        &:after {
          transition-delay: 0.3s;
        }
      }

      &:nth-child(5) {
        .p-character__inner,
        &:after {
          transition-delay: 0.3s;
        }
      }

      &:nth-child(2) {
        .p-character__inner,
        &:after {
          transition-delay: 0s;
        }
      }

      &:nth-child(6) {
        .p-character__inner,
        &:after {
          transition-delay: 0s;
        }
      }
    }
  }

  .is-step2.p-kv__characters {
    &:nth-child(3) {
      .p-character__inner,
      &:after {
        transition-delay: 0s;
      }
    }

    &:nth-child(7) {
      .p-character__inner,
      &:after {
        transition-delay: 0s;
      }
    }

    &:nth-child(4) {
      .p-character__inner,
      &:after {
        transition-delay: 0.1s;
      }
    }

    &:nth-child(8) {
      .p-character__inner,
      &:after {
        transition-delay: 0.1s;
      }
    }

    &:first-child {
      .p-character__inner,
      &:after {
        transition-delay: 0.2s;
      }
    }

    &:nth-child(5) {
      .p-character__inner,
      &:after {
        transition-delay: 0.2s;
      }
    }

    &:nth-child(2) {
      .p-character__inner,
      &:after {
        transition-delay: 0.3s;
      }
    }

    &:nth-child(6) {
      .p-character__inner,
      &:after {
        transition-delay: 0.3s;
      }
    }
  }

  .is-step3.p-kv__characters {
    &:nth-child(3) {
      .p-character__inner,
      &:after {
        transition-delay: 0.3s;
      }
    }

    &:nth-child(7) {
      .p-character__inner,
      &:after {
        transition-delay: 0.3s;
      }
    }

    &:nth-child(4) {
      .p-character__inner,
      &:after {
        transition-delay: 0s;
      }
    }

    &:nth-child(8) {
      .p-character__inner,
      &:after {
        transition-delay: 0s;
      }
    }

    &:first-child {
      .p-character__inner,
      &:after {
        transition-delay: 0.1s;
      }
    }

    &:nth-child(5) {
      .p-character__inner,
      &:after {
        transition-delay: 0.1s;
      }
    }

    &:nth-child(2) {
      .p-character__inner,
      &:after {
        transition-delay: 0.2s;
      }
    }

    &:nth-child(6) {
      .p-character__inner,
      &:after {
        transition-delay: 0.2s;
      }
    }
  }

  .is-step4.p-kv__characters {
    &:nth-child(3) {
      .p-character__inner,
      &:after {
        transition-delay: 0.2s;
      }
    }

    &:nth-child(7) {
      .p-character__inner,
      &:after {
        transition-delay: 0.2s;
      }
    }

    &:nth-child(4) {
      .p-character__inner,
      &:after {
        transition-delay: 0.3s;
      }
    }

    &:nth-child(8) {
      .p-character__inner,
      &:after {
        transition-delay: 0.3s;
      }
    }

    &:first-child {
      .p-character__inner,
      &:after {
        transition-delay: 0s;
      }
    }

    &:nth-child(5) {
      .p-character__inner,
      &:after {
        transition-delay: 0s;
      }
    }

    &:nth-child(2) {
      .p-character__inner,
      &:after {
        transition-delay: 0.1s;
      }
    }

    &:nth-child(6) {
      .p-character__inner,
      &:after {
        transition-delay: 0.1s;
      }
    }
  }
}

/* ------------------
		p-modal
--------------------- */
.p-modal {
  position: fixed;
  width: 100%;
  opacity: 0;
  z-index: -1;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  margin: auto;

  .p-squareButton {
    position: fixed;
    width: 6.73611vw;
    height: 6.73611vw;
    z-index: 50;
    cursor: pointer;
    right: 0;
    top: 0;
    border: none;
    background-color: #deff00 !important;
    @include mq(eren-lg) {
      width: 107.77778px;
      height: 107.77778px;
    }
    &:hover {
      .p-modalCloseIcon {
        &:before,
        &:after {
          background-color: #e50013;
        }
      }
    }

    .p-modalCloseIcon {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 4;
      &:before,
      &:after {
        position: absolute;
        top: 50%;
        left: 50%;
        content: '';
        width: 5.12821%;
        height: 35.89744%;
        min-height: 1px;
        background-color: #000;
        transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1),
          background-color 0.4s cubic-bezier(0.19, 1, 0.22, 1);
      }
      &:before {
        transform: translate(-50%, -50%) skewX(30deg);
      }
      &:after {
        transform: translate(-50%, -50%) skewX(-30deg);
      }
    }
  }

  .p-modalContents {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 1;
    background-color: #fff;
    width: 761px;
    height: 454px;
    opacity: 0;
    transform: translateY(5%);
    transition: opacity 0.4s cubic-bezier(0.19, 1, 0.22, 1),
      transform 0.4s cubic-bezier(0.19, 1, 0.22, 1),
      z-index 0s cubic-bezier(0.19, 1, 0.22, 1);
    @include mq(eren-gt-sm) {
      width: 761px;
      height: 454px;
    }
    @media screen and (min-width: 1100px) {
      width: 1026px;
      height: 611px;
    }
    @include mq(eren-lg) {
      width: 1200px;
      height: 715px;
    }
    &:after {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      content: '';
      border: 0.10417vw solid #fff;
    }

    &__title {
      position: absolute;
      top: -1.25vw;
      left: 1.38889vw;
      padding: 1.25vw 1.04167vw;
      overflow: hidden;
      background-color: #deff00;
      color: #000;
      z-index: 5;
      @include mq(eren-lg) {
        padding: 20px 16.66667px;
        top: -20px;
        left: 22.22222px;
      }
    }

    &__titleInner {
      transform: translateZ(0);
      backface-visibility: hidden;

      img {
        width: 1.77083vw;
        @include mq(eren-lg) {
          width: 28.33333px;
        }
      }
    }

    .p-modalContentsInner {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #fff;

      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
}
.p-modalBg {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  mix-blend-mode: multiply;
  background-color: #e50013;
  opacity: 0;
  z-index: -1;
  transition: visibility 0.4s cubic-bezier(0.19, 1, 0.22, 1),
    opacity 0.4s cubic-bezier(0.19, 1, 0.22, 1),
    z-index 0s cubic-bezier(0.19, 1, 0.22, 1);
}
.p-modal.is-opened {
  opacity: 1;
  z-index: 51;
  .p-modalContents {
    opacity: 1;
    transform: translateY(0);
  }
}
.p-modalBg.is-opened {
  visibility: visible;
  opacity: 1;
  z-index: 50;
}

/*  特定のサイズのみ表示
-------------------------*/
.u-blockS-h {
  display: none !important;
  @include mq(eren-sm) {
    display: block !important;
  }
}

.u-blockM-h {
  display: none !important;
  @include mq(eren-gt-sm) {
    display: block !important;
  }
}

.u-blockL-h {
  display: none !important;
  @include mq(eren-md) {
    display: block !important;
  }
}

.u-blockXL-h {
  display: none !important;
  @include mq(eren-lg) {
    display: block !important;
  }
}

/*

  * DOM構造
  <li class="c-squareButton">
    <a class="c-squareButton_inner" href="">
      <span class="c-squareButton_label">トップ</span>
      <svg class="c-squareButton_leftArrow"><use xlink:href="#arrow"></svg>
    </a>
  </li>

  * スタイルを上書く場合は各projectファイルで p- で上書く

*/

.c-squareButton {
  //c-squareButton と c-squareButton_innerをセットで使用
  position: relative;
  width: 100%;
  height: 100%;
  border: solid 0.26667vw #fff;
  border-width: 0.26667vw;
  background-color: #000;
  overflow: hidden;
  cursor: pointer;
  @media screen and (min-width: 800px) {
    border: solid 0.06944vw #fff;
    border-width: 0.06944vw;
  }

  &:before,
  &:after {
    position: absolute;
    content: '';
    display: block;
    background-color: #02d0d0;
    transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    backface-visibility: hidden;
    z-index: 0;
  }

  &__inner {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }

  &__label {
    //テキストに付与するクラス
    position: relative;
    color: #fff;
    font-size: 5.06667vw;
    letter-spacing: 0.16em;
    text-indent: 0.16em;
    transition: color 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    transform: scaleX(0.85);
    z-index: 2;
    @media screen and (min-width: 800px) {
      font-size: 0.90278vw;
    }
    @media screen and (min-width: 800px) and (max-width: 1100px) {
      font-size: 1.40541vw;
    }
    @media screen and (min-width: 1600px) {
      font-size: 14.44444px;
    }
  }

  &__squareIcon {
    //svgアイコンに付与するクラス
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 6.93333vw; //正方形
    height: 6.93333vw;
    fill: #fff;
    margin: auto;
    z-index: 2;
    @media screen and (min-width: 800px) {
      width: 1.45833vw;
      height: 1.45833vw;
    }
    @media screen and (min-width: 1600px) {
      width: 23.33333px;
      height: 23.33333px;
    }
  }

  &__leftArrow {
    //svg leftArrowに付与するクラス
    position: absolute;
    top: 0;
    right: auto;
    bottom: 0;
    left: 3.2vw;
    width: 5.33333vw;
    height: 3.06667vw;
    fill: #e50013;
    margin: auto;
    display: block;
    z-index: 2;
  }

  &:hover {
    .c-squareButton__label {
      color: #e50013;
      transition-duration: 0.1s;
    }
    .c-squareButton__squareIcon {
      fill: #e50013;
      transition-duration: 0.1s;
    }
  }
}

.c-squareButton--vText {
  // テキストをPCのみ縦にする
  @extend .c-squareButton;
  .c-squareButton__label {
    @media screen and (min-width: 800px) {
      writing-mode: vertical-rl !important;
      text-align: center !important;
      letter-spacing: 0.2em !important;
      text-indent: 0.2em !important;
    }
  }
}

.c-squareButton--animeH {
  // 横ホバーアニメーション
  @extend .c-squareButton;
  &:before,
  &:after {
    width: 101%;
    height: 51%;
    transform: scaleX(0);
  }
  &:before {
    top: 0;
    left: 0;
    transform-origin: center left;
  }
  &:after {
    top: auto;
    bottom: 0;
    transform-origin: center right;
  }
  &:hover {
    &:before,
    &:after {
      transform: scaleX(1);
    }
  }
}

.c-squareButton--animeV {
  // 縦ホバーアニメーション
  @extend .c-squareButton;
  &:before,
  &:after {
    width: 51%;
    height: 102%;
    transform: scaleY(0);
    transform-origin: top center;
    top: 0;
    left: 0;
  }

  &:after {
    transform-origin: bottom center;
    top: auto;
    right: 0;
    bottom: 0;
    left: auto;
  }
  &:hover {
    &:before,
    &:after {
      transform: scaleY(1);
    }
  }
}
</style>
