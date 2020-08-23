<template>
  <div class="gameWrap">
    <h2 class="gameWrap__title">
      ことわざジェネレーター
    </h2>
    <p class="gameWrap__leadText">
      正しい組み合わせのことわざ作成しよう！
    </p>
    <div class="sayingGame">
      <div class="balloon">
        <div class="balloon__content">
          <span class="for-sp">タップ</span>
          <span class="for-pc">クリック</span>
        </div>
      </div>
      <div class="sayingWrap">
        <p class="saying">
          <span class="saying__first" @click="sayingFirst">{{
            sayingOnDisplay.first
          }}</span>
          <span class="saying__second" @click="sayingSecond">{{
            sayingOnDisplay.second
          }}</span>
        </p>
        <div class="buttonCTA btn-flat" @click="judge">
          <span>解答</span>
        </div>
      </div>
      <div class="afterAns">
        <p>
          結果：<span :class="{ 'is-correct': isCorrect }">{{ result }}</span>
        </p>
        <p>意味：{{ meaning }}</p>
        <p>ことわざ成立数：{{ correct }} / 6</p>
      </div>
    </div>
    <div :class="{ 'is-active': isActive }" class="result result-saying">
      <p>クリア！</p>
      <div @click="reload" class="buttonCTA btn-flat">
        <span>再挑戦</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SayingGame',
  data() {
    return {
      click: {
        first: 0,
        second: 0
      },
      sayingOnDisplay: {
        first: '',
        second: ''
      },
      result: '',
      meaning: '',
      correct: 0,
      isActive: false,
      isCorrect: false,
      copy: null,
      sayings: [
        {
          saying: ['可愛い子には', '旅をさせよ'],
          meaning:
            '子供が可愛いのなら、甘やかさずに世の中の厳しさを経験させたほうがいい。'
        },
        {
          saying: ['弘法も', '筆の誤り'],
          meaning:
            '弘法大師のような筆の達人でも書き損じることがあることから、どんな達人でも失敗することがるというたとえ。'
        },
        {
          saying: ['人間万事', '塞翁が馬'],
          meaning:
            '世の中は広く、死んで骨を埋める場所はたくさんあるのだから、どこにでも行って大いに活躍するといい。'
        },
        {
          saying: ['火のない所に', '煙は立たぬ'],
          meaning: 'まったく根拠がないところから噂がたつことはない。'
        },
        {
          saying: ['柳に', '雪折れなし'],
          meaning: '柔軟なものは、固いものよりもよく耐えたり丈夫である。'
        },
        {
          saying: ['禍を転じて', '福と為す'],
          meaning:
            '自分にふりかかった禍を、うまく利用して自分の有利になるようにすること。'
        }
      ]
    };
  },
  created: function() {
    this.copy = this.sayings.concat();
  },
  mounted: function() {
    this.sayingOnDisplay.first = this.sayings[0].saying[0];
    this.sayingOnDisplay.second = this.sayings[4].saying[1];
  },
  methods: {
    sayingFirst() {
      this.click.first++;
      let index = this.click.first % this.sayings.length;
      this.sayingOnDisplay.first = this.sayings[index].saying[0];
    },
    sayingSecond() {
      this.click.second++;
      let index = this.click.second % this.sayings.length;
      this.sayingOnDisplay.second = this.sayings[index].saying[1];
    },
    judge() {
      let ans = this.sayingOnDisplay.first.concat(this.sayingOnDisplay.second);
      for (const [i, v] of this.sayings.entries()) {
        if (ans == v.saying.join('')) {
          this.result = '正解';
          this.meaning = v.meaning;
          this.isCorrect = true;
          this.correct++;
          this.$delete(this.sayings, i);
          if (this.sayings.length == 0) {
            this.finish();
          }
          break;
        } else {
          this.isCorrect = false;
          this.result = '不正解';
          this.meaning = '';
        }
      }
    },
    finish() {
      this.isActive = true;
    },
    reload() {
      this.sayings = this.copy.concat();
      this.sayingOnDisplay.first = this.sayings[0].saying[0];
      this.sayingOnDisplay.second = this.sayings[4].saying[1];
      this.result = '';
      this.meaning = '';
      this.correct = 0;
      this.isActive = false;
      this.isCorrect = false;
    }
  }
};
</script>

<style lang="scss">
.sayingGame {
  @import url('https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap');
  font-family: 'Sawarabi Mincho', sans-serif;
  @include mq(lt-lg) {
    margin-top: 1em;
  }

  .balloon {
    display: flex;
    justify-content: flex-end;
    @include mq {
      position: absolute;
      right: 1%;
      top: 7%;
    }
    &__content {
      position: relative;
      width: calc(60 / 320 * 100vw);
      height: calc(60 / 320 * 100vw);
      border-radius: 50%;
      text-align: center;
      color: #ffffff;
      font-size: calc(15 / 320 * 100vw);
      line-height: 1.4;
      background-color: orange;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      @include mq {
        width: calc(80 / 1024 * 100vw);
        height: calc(80 / 1024 * 100vw);
        font-size: calc(17 / 1024 * 100vw);
      }
      &:before {
        content: '';
        position: absolute;
        display: block;
        width: 0;
        height: 0;
        left: calc(10 / 320 * 100vw);
        bottom: calc(2 / 320 * 100vw);
        border-right: calc(20 / 320 * 100vw) solid orange;
        border-top: calc(10 / 320 * 100vw) solid transparent;
        border-bottom: calc(10 / 320 * 100vw) solid transparent;
        transform: rotate(60deg);
        @include mq {
          left: calc(10 / 1024 * 100vw);
          bottom: calc(2 / 1024 * 100vw);
          border-right: calc(20 / 1024 * 100vw) solid orange;
          border-top: calc(10 / 1024 * 100vw) solid transparent;
          border-bottom: calc(10 / 1024 * 100vw) solid transparent;
        }
      }
    }
  }

  .sayingWrap {
    text-align: center;
    margin-top: 0.5em;
    @include mq {
      margin-top: 2em;
    }
  }

  .saying {
    font-size: calc(19 / 320 * 100vw);
    line-height: 1.5;
    user-select: none;
    width: 100%;
    display: flex;
    @include mq {
      font-size: calc(30 / 1024 * 100vw);
    }
    &__first:before,
    &__second:before {
      position: absolute;
      font-size: calc(13 / 320 * 100vw);
      top: 0;
      left: 0;
      @include mq {
        font-size: calc(13 / 1024 * 100vw);
      }
    }
    &__first {
      position: relative;
      cursor: pointer;
      width: 50%;
      &:before {
        content: '1';
        left: -6px;
      }
    }
    &__second {
      position: relative;
      width: 50%;
      cursor: pointer;
      &:before {
        content: '2';
      }
    }
  }

  .buttonCTA {
    margin-top: 1em;
  }

  .afterAns {
    margin-top: 1em;
    > p {
      font-size: calc(14 / 320 * 100vw);
      line-height: 1.7;
      @include mq {
        font-size: calc(15 / 1024 * 100vw);
      }
    }
    > p:nth-child(2) {
      height: calc(3em * 1.7);
      @include mq {
        height: calc(2em * 1.7);
      }
    }
    > p:not(:first-child) {
      margin-top: 0.5em;
    }
    > p span {
      color: blue;
    }
    > p span.is-correct {
      color: red;
    }
  }

  .for-sp {
    @include mq {
      display: none;
    }
  }

  .for-pc {
    @include mq(lt-lg) {
      display: none;
    }
  }
}
</style>
