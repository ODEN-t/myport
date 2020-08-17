<template>
  <main class="miniGame">
    <section class="gameFrame gameFrame--odd">
      <div class="gameFrame__content a">
        <DriveGame></DriveGame>
      </div>
    </section>
    <section class="gameFrame gameFrame--even">
      <div class="gameFrame__content b"></div>
    </section>
    <section class="gameFrame gameFrame--odd">
      <div class="gameFrame__content a"></div>
    </section>
    <section class="gameFrame gameFrame--even">
      <div class="gameFrame__content b"></div>
    </section>
    <section class="gameFrame gameFrame--odd">
      <div class="gameFrame__content a"></div>
    </section>
    <section class="gameFrame gameFrame--even">
      <div class="gameFrame__content b"></div>
    </section>
  </main>
</template>

<script>
import DriveGame from '../components/DriveGame.vue';

export default {
  name: 'MiniGame',
  components: {
    DriveGame
  }
};
</script>

<style lang="scss">
.miniGame {
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  padding: 5% 0;
  @include mq {
    justify-content: space-evenly;
    padding: 1.5% 0;
  }

  .gameFrame {
    position: relative;
    width: 100%;
    @include mq {
      width: calc((100% - 9%) / 2);
    }
    &:before {
      content: '';
      display: block;
      padding-top: 75%; // 4:3
    }
    &__content {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
    &--odd {
      margin: 5% 10%;
      @include mq {
        margin: 1.5% 1.5% 1.5% 3%;
      }
    }
    &--even {
      margin: 5% 10%;
      @include mq {
        margin: 1.5% 3% 1.5% 1.5%;
      }
    }
    .a {
      background: lightblue;
    }
    .b {
      background: lightpink;
    }
  }

  .gameWrap {
    height: 100%;
    padding: 3%;
    position: relative;

    &__title {
      font-size: calc(28 / 1024 * 100vw);
      text-align: center;
      margin-bottom: 0.5em;
    }

    &__leadText {
      font-size: calc(17 / 1024 * 100vw);
      text-align: center;
    }
  }

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
}
</style>
