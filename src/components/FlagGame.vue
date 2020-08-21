<template>
  <div class="gameWrap">
    <h2 class="gameWrap__title">
      旗上げゲーム
    </h2>
    <p class="gameWrap__leadText">
      女海賊の指示に従って海賊旗を上げ下げしよう！
    </p>
    <div class="flagGame">
      <div class="balloon">
        <div class="balloon__content">
          <span class="order" id="order"></span><br />
          <span class="da">だ!!</span>
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
        name="angleSwitch"
        class="round round-0"
      ></span>
      <span
        data-angle="r30"
        data-point="2"
        name="angleSwitch"
        class="round round-30"
      ></span>
      <span
        data-angle="r60"
        data-point="1"
        name="angleSwitch"
        class="round round-60"
      ></span>
      <span
        data-angle="r90"
        data-point="0"
        name="angleSwitch"
        class="round round-90 active"
      ></span>
      <span
        data-angle="r120"
        data-point="-1"
        name="angleSwitch"
        class="round round-120"
      ></span>
      <span
        data-angle="r150"
        data-point="-2"
        name="angleSwitch"
        class="round round-150"
      ></span>
      <span
        data-angle="r180"
        data-point="-3"
        name="angleSwitch"
        class="round round-180"
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
      document.getElementsByName('angleSwitch').forEach(a => {
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
    top: 25%;
    right: 1%;
    &__content {
      position: relative;
      width: calc(100 / 320 * 100vw);
      height: calc(100 / 320 * 100vw);
      border-radius: 50%;
      text-align: center;
      color: #ffffff;
      letter-spacing: 0.2em;
      font-size: calc(14 / 320 * 100vw);
      background-color: #f26651;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      &:before {
        content: '';
        position: absolute;
        display: block;
        width: 0;
        height: 0;
        left: calc(10 / 720 * 100vw);
        bottom: calc(2 / 720 * 100vw);
        border-right: calc(20 / 320 * 100vw) solid #f26651;
        border-top: calc(10 / 320 * 100vw) solid transparent;
        border-bottom: calc(10 / 320 * 100vw) solid transparent;
        transform: rotate(60deg);
      }
    }
  }

  .kaizoku {
    width: 45%;
    position: absolute;
    top: 60%;
    right: -5%;
  }

  .order {
    font-size: calc(40 / 720 * 100vw);
    font-style: italic;
    font-weight: 500;
  }

  .da {
    font-size: 20px;
  }

  .flag {
    width: 55%;
    position: absolute;
    top: 15%;
    transform-origin: left bottom;
    left: 12%;
  }

  .r90 {
    transform: rotate(90deg);
  }

  .r60 {
    transform: rotate(60deg);
  }

  .r30 {
    transform: rotate(30deg);
  }

  .r0 {
    transform: rotate(0deg);
  }

  .r120 {
    transform: rotate(120deg);
  }

  .r150 {
    transform: rotate(150deg);
  }

  .r180 {
    transform: rotateZ(180deg);
  }

  .round {
    position: absolute;
    width: calc(12.5 / 340 * 100vw);
    height: calc(12.5 / 340 * 100vw);
    background: #f26651;
    display: inline-block;
    border: 1px solid #f26651;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
    &-0 {
      right: 80%;
      top: 20%;
    }
    &-30 {
      right: 55%;
      top: 25%;
    }
    &-60 {
      right: 40%;
      top: 40%;
    }
    &-90 {
      right: 35%;
      top: 57%;
    }
    &-120 {
      right: 40%;
      top: 75%;
    }
    &-150 {
      right: 60%;
      top: 92%;
    }
    &-180 {
      right: 90%;
      top: 95%;
    }
  }
}
</style>
