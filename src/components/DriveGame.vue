<template>
  <div class="gameWrap">
    <h2 class="gameWrap__title">電池残量は？</h2>
    <p class="gameWrap__leadText">
      ボタン押下で電気自動車を動かしてみよう！
    </p>
    <div class="carGame">
      <div class="btnWrap">
        <div name="btn" class="c-button" @click="carForward">
          <span class="c-button_inner">前進する</span>
        </div>
        <div name="btn" class="c-button" @click="carBack">
          <span class="c-button_inner">バックする</span>
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
      <div id="showresult" class="showresult">
        <p id="result"></p>
        <div class="c-button reload-btn" @click="carReload">
          <span class="c-button_inner c-button_inner__reload">もう一度</span>
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
      document.getElementById('showresult').classList.remove('is-active');
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
    height: calc(100% - calc(28 / 1024 * 100vw) - calc(17 / 1024 * 100vw));
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;

    .battery {
      position: absolute;
      top: 37%;
      width: 20%;
      z-index: 5;
      right: 0;
      transform: translateX(-50%);
    }
    .car {
      position: absolute;
      left: 50%;
      bottom: -10.5%;
      transform: translateX(-50%);
      width: 40%;
      z-index: 10;
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
}

.btnWrap {
  position: absolute;
  top: 22%;
  left: 50%;
  transform: translate(-50%);
  display: flex;
}

.c-button.is-prevent {
  pointer-events: none;
}

.c-button:first-child {
  margin-right: 30px;
}

.showresult,
.init {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.showresult.is-active,
.init.is-active {
  z-index: 50;
  opacity: 1;
}

.showresult > p,
.init > p {
  color: #fff;
  font-size: calc(35 / 720 * 100vw);
}

.reload-btn {
  margin-top: calc(15 / 720 * 100vw);
}
</style>
