<template>
  <main class="miniGame">
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
    <section class="gameFrame gameFrame--odd">
      <div class="gameFrame__content a"></div>
    </section>
    <section class="gameFrame gameFrame--even">
      <div class="gameFrame__content b"></div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'MiniGame'
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
}
</style>
