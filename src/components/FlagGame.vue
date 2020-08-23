<template>
  <div class="gameWrap">
    <h2 class="gameWrap__title">
      旗上げゲーム
    </h2>
    <p class="gameWrap__leadText">
      女海賊の指示に従って<br class="for-sp" />海賊旗を上げ下げしよう！
    </p>
    <div class="flagGame">
      <div class="balloon">
        <div class="balloon__content">
          <p><span class="order" id="order"></span><br /><span>だ!!</span></p>
        </div>
      </div>
      <div id="flag" class="flag r90">
        <img src="../assets/images/minigame/flag.png" alt="海賊旗" />
      </div>
      <div class="kaizoku">
        <img src="../assets/images/minigame/kaizoku_woman.png" alt="女海賊" />
      </div>
      <span
        data-angle="r0"
        data-point="3"
        name="angles"
        class="square square-0"
      ></span>
      <span
        data-angle="r30"
        data-point="2"
        name="angles"
        class="square square-30"
      ></span>
      <span
        data-angle="r60"
        data-point="1"
        name="angles"
        class="square square-60"
      ></span>
      <span
        data-angle="r90"
        data-point="0"
        name="angles"
        class="square square-90 is-active"
      ></span>
      <span
        data-angle="r120"
        data-point="-1"
        name="angles"
        class="square square-120"
      ></span>
      <span
        data-angle="r150"
        data-point="-2"
        name="angles"
        class="square square-150"
      ></span>
      <span
        data-angle="r180"
        data-point="-3"
        name="angles"
        class="square square-180"
      ></span>
      <div class="result result-flag">
        <p class="resultText-flag"></p>
        <div class="buttonCTA btn-flat" @click="reloadFlag">
          <span class="c-button_inner c-button_inner__reload">リトライ</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FlagGame from './FlagGame.js';

export default {
  name: 'FlagGame',
  data() {
    return {
      instance: null
    };
  },
  mounted() {
    this.init();
    this.addClickEvent();
  },
  methods: {
    init() {
      let num = this.setInitNum();
      this.instance = new FlagGame(num);
      Math.sign(num) == 1
        ? (document.getElementById('order').textContent = '+' + num)
        : (document.getElementById('order').textContent = num);
    },
    setInitNum: function() {
      let h = Math.round(Math.random() * 3),
        l = Math.round(Math.random() * -3);
      let random = h + l;
      return random;
    },
    addClickEvent: function() {
      document.getElementsByName('angles').forEach(a => {
        a.addEventListener('click', () => {
          this.instance.changeAngle(a);
          this.instance.updateNum(a.dataset.point);
          this.instance.judgment();
          this.instance.order();
        });
      });
    },
    reloadFlag() {
      this.instance.reload();
      this.instance = null;
      this.init();
    }
  }
};
</script>

<style lang="scss">
.flagGame {
  overflow: hidden;
  .balloon {
    position: absolute;
    top: 35%;
    right: 1%;
    z-index: 10;
    @include mq {
      top: 21%;
      right: 6%;
    }
    &__content {
      position: relative;
      width: calc(85 / 320 * 100vw);
      height: calc(85 / 320 * 100vw);
      border-radius: 50%;
      text-align: center;
      color: #ffffff;
      font-size: calc(18 / 320 * 100vw);
      letter-spacing: 0.2em;
      line-height: 1.4;
      background-color: #f26651;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      @include mq {
        width: calc(85 / 1024 * 100vw);
        height: calc(85 / 1024 * 100vw);
        font-size: calc(18 / 1024 * 100vw);
      }
      &:before {
        content: '';
        position: absolute;
        display: block;
        width: 0;
        height: 0;
        left: calc(10 / 320 * 100vw);
        bottom: calc(2 / 320 * 100vw);
        border-right: calc(20 / 320 * 100vw) solid #f26651;
        border-top: calc(10 / 320 * 100vw) solid transparent;
        border-bottom: calc(10 / 320 * 100vw) solid transparent;
        transform: rotate(60deg);
        @include mq {
          left: calc(10 / 1024 * 100vw);
          bottom: calc(2 / 1024 * 100vw);
          border-right: calc(20 / 1024 * 100vw) solid #f26651;
          border-top: calc(10 / 1024 * 100vw) solid transparent;
          border-bottom: calc(10 / 1024 * 100vw) solid transparent;
        }
      }
    }
  }

  .for-sp {
    @include mq {
      display: none;
    }
  }

  .kaizoku {
    position: absolute;
    width: 45%;
    top: 60%;
    right: -5%;
    @include mq {
      width: 38%;
      top: 46%;
      right: 10%;
    }
  }

  .order {
    font-size: 1.2em;
    font-style: italic;
    font-weight: 700;
  }

  .flag {
    position: absolute;
    top: 15%;
    left: 12%;
    width: 55%;
    transform-origin: left bottom;
    transition: transform 0.5s ease-in-out;
    @include mq {
      top: 24%;
      left: 12%;
      transform-origin: left bottom;
      width: 27%;
    }
    &.r90 {
      transform: rotate(90deg);
    }

    &.r60 {
      transform: rotate(60deg);
    }

    &.r30 {
      transform: rotate(30deg);
    }

    &.r0 {
      transform: rotate(0deg);
    }

    &.r120 {
      transform: rotate(120deg);
    }

    &.r150 {
      transform: rotate(150deg);
    }

    &.r180 {
      transform: rotateZ(180deg);
    }
  }

  .square {
    position: absolute;
    width: calc(12.5 / 340 * 100vw);
    height: calc(12.5 / 340 * 100vw);
    background: transparent;
    display: inline-block;
    border: 2px solid #f26651;
    cursor: pointer;
    @include mq {
      width: calc(12.5 / 1024 * 100vw);
      height: calc(12.5 / 1024 * 100vw);
    }
    &:hover {
      @include mq {
        opacity: 0.6;
      }
    }
    &.is-active {
      background: #f26651;
    }
    &-0 {
      right: 80%;
      top: 20%;
      @include mq {
        right: 82%;
        top: 22%;
      }
    }
    &-30 {
      right: 55%;
      top: 25%;
      @include mq {
        right: 70%;
        top: 30%;
      }
    }
    &-60 {
      right: 40%;
      top: 40%;
      @include mq {
        right: 61%;
        top: 43%;
      }
    }
    &-90 {
      right: 35%;
      top: 57%;
      @include mq {
        right: 59%;
        top: 62%;
      }
    }
    &-120 {
      right: 45%;
      top: 75%;
      @include mq {
        right: 64%;
        top: 78%;
      }
    }
    &-150 {
      right: 65%;
      top: 89%;
      @include mq {
        right: 76%;
        top: 90%;
      }
    }
    &-180 {
      right: 90%;
      top: 95%;
      @include mq {
        right: 89%;
        top: 94%;
      }
    }
  }
}
</style>
