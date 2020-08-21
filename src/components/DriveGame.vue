<template>
  <div class="gameWrap">
    <h2 class="gameWrap__title">電池残量は？</h2>
    <p class="gameWrap__leadText">
      ボタン押下で電気自動車を動かしてみよう！
    </p>
    <div class="carGame">
      <div class="btnWrap">
        <div name="btn" class="buttonCTA-round" @click="carBack">
          <span>バック</span>
        </div>
        <div name="btn" class="buttonCTA-round" @click="carForward">
          <span>前進</span>
        </div>
      </div>
      <div class="carGame__carParts">
        <img
          class="battery"
          src="../assets/images/minigame/battery_mark1-min.png"
          alt="バッテリー"
        />
        <img
          class="car"
          src="../assets/images/minigame/car-min.png"
          alt="電気自動車"
        />
        <div class="townBg"></div>
      </div>
      <div id="init" class="init">
        <p>初期化中。。。</p>
      </div>
      <div class="result result-car">
        <p class="resultText-car"></p>
        <div class="buttonCTA btn-flat" @click="carReload">
          <span>もう一度</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DriveGame from './DriveGame.js';

export default {
  name: 'DriveGame',
  data: function() {
    return {
      storage: {
        car: null
      }
    };
  },
  mounted() {
    this.storage.car = new DriveGame(
      this.initParam().speed,
      this.initParam().center,
      require('@/assets/images/minigame/battery_mark1-min.png'),
      require('@/assets/images/minigame/battery_mark2-min.png'),
      require('@/assets/images/minigame/battery_mark3-min.png'),
      require('@/assets/images/minigame/battery_mark4-min.png'),
      require('@/assets/images/minigame/battery_mark5-min.png'),
      require('@/assets/images/minigame/battery_mark6-min.png')
    );
    this.storage.car.init();
  },
  methods: {
    initParam: function() {
      let bgWidth = document.querySelector('.townBg').clientWidth;
      let speed = window.innerWidth * 1.5;
      let center = (bgWidth + window.innerWidth) / 2;
      return { speed, center };
    },
    carForward: function() {
      this.storage.car.forward();
    },
    carBack: function() {
      this.storage.car.back();
    },
    carReload: function() {
      document.querySelector('.result').classList.remove('is-active');
      this.storage.car = null;
      this.storage.car = new DriveGame(
        this.initParam().speed,
        this.initParam().center,
        require('@/assets/images/minigame/battery_mark1-min.png'),
        require('@/assets/images/minigame/battery_mark2-min.png'),
        require('@/assets/images/minigame/battery_mark3-min.png'),
        require('@/assets/images/minigame/battery_mark4-min.png'),
        require('@/assets/images/minigame/battery_mark5-min.png'),
        require('@/assets/images/minigame/battery_mark6-min.png')
      );
      this.storage.car.init();
    }
  }
};
</script>

<style lang="scss">
.carGame {
  height: 100%;
  overflow: hidden;
  &__carParts {
    height: calc(100% - calc(18 / 320 * 100vw) - 0.5em - 3%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
    @include mq {
      height: calc(100% - calc(28 / 1024 * 100vw) - calc(17 / 1024 * 100vw));
    }

    .battery {
      position: absolute;
      top: 42%;
      width: 20%;
      z-index: 5;
      right: 0;
      transform: translateX(-50%);
      @include mq {
        top: 45%;
        right: -4%;
      }
    }
    .car {
      position: absolute;
      left: 50%;
      bottom: -7%;
      transform: translateX(-50%);
      width: 50%;
      z-index: 10;
      @include mq {
        bottom: -11.1%;
      }
    }
    .townBg {
      background-image: url('../assets/images/minigame/town-min.png');
      background-size: contain;
      background-repeat: repeat-x;
      background-position-y: bottom;
      width: 70000px;
      height: 80%;
      transition: transform 1s ease-in-out;
      margin-bottom: 3%;
      &.is-forward {
        transform: translateX(-10%);
      }
    }
  }

  .btnWrap {
    position: absolute;
    display: flex;
    justify-content: space-evenly;
    top: 22%;
    right: 0;
    left: 0;
    z-index: 20;
  }

  .buttonCTA-round.is-prevent {
    pointer-events: none;
  }
}
</style>
