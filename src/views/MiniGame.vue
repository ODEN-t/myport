<template>
  <main class="miniGame">
    <section class="gameFrame gameFrame--odd">
      <div class="gameFrame__content a">
        <DriveGame></DriveGame>
      </div>
    </section>
    <section class="gameFrame gameFrame--even">
      <div class="gameFrame__content gameFrame__content--bgBlack">
        <BingoGame></BingoGame>
      </div>
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
import BingoGame from '../components/BingoGame.vue';

export default {
  name: 'MiniGame',
  components: {
    DriveGame,
    BingoGame
  }
};
</script>

<style lang="scss">
.miniGame {
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  padding: 0 5% 5%;
  @include mq {
    justify-content: space-evenly;
    padding: 1.5% 0;
  }

  .gameFrame {
    position: relative;
    width: 100%;
    @include mq(lt-lg) {
      margin-top: 5%;
    }
    @include mq {
      width: calc((100% - 9%) / 2);
    }
    &:before {
      content: '';
      display: block;
      padding-top: 125vw;
      @include mq {
        padding-top: 75%; // 4:3
      }
    }

    &__content {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      &--bgBlack {
        background: #000;
      }
    }

    &--odd {
      @include mq {
        margin: 1.5% 1.5% 1.5% 3%;
      }
    }
    &--even {
      @include mq {
        margin: 1.5% 3% 1.5% 1.5%;
      }
    }
    .a {
      background: lightblue;
    }
  }

  // 各ゲームのrootクラス、各ゲーム共通
  .gameWrap {
    height: 100%;
    padding: 3%;
    position: relative;

    &__title {
      font-size: calc(18 / 320 * 100vw);
      line-height: 1.2;
      text-align: center;
      margin-bottom: 0.5em;
      @include mq {
        font-size: calc(23 / 1024 * 100vw);
      }
      &--textWhite {
        color: #fff;
      }
    }

    &__leadText {
      font-size: calc(13 / 320 * 100vw);
      text-align: center;
      @include mq {
        font-size: calc(15 / 1024 * 100vw);
      }
      &--textWhite {
        color: #fff;
      }
    }
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
    font-size: calc(30 / 320 * 100vw);
    font-weight: 600;
    letter-spacing: 6px;
    @include mq(md) {
      font-size: calc(40 / 1024 * 100vw);
    }
    @include mq {
      font-size: calc(36 / 1024 * 100vw);
    }
  }

  .showresult > .buttonCTA {
    margin-top: 1.5em;
  }
}
</style>
