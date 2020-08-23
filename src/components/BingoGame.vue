<template>
  <div class="gameWrap">
    <h2 class="gameWrap__title gameWrap__title--textWhite">ビンゴゲーム</h2>
    <p class="gameWrap__leadText gameWrap__leadText--textWhite">
      30回以内の抽選でビンゴになればクリア！
    </p>
    <div class="bingoGame">
      <div class="bingoCard">
        <ul class="bingoNumbers">
          <li class="bingoTitle">B</li>
          <li class="bingoTitle">I</li>
          <li class="bingoTitle">N</li>
          <li class="bingoTitle">G</li>
          <li class="bingoTitle">O</li>
          <li
            v-for="card in cards"
            class="bingoNum"
            v-bind:class="{ 'is-punched': card.isPunched }"
            :key="card.id"
          >
            {{ card.num }}
          </li>
        </ul>
      </div>
      <div class="lottery">
        <div class="mi1">
          <span class="num">{{ selectedNum }}</span>
        </div>
        <div
          class="buttonCTA btn-flat btn-flat--red mod-white"
          @click="selectNum"
        >
          <span>抽選</span>
        </div>
      </div>
      <span class="restNum">残り<br />{{ restNum }} 回</span>
    </div>
    <div :class="{ 'is-active': isActive }" class="result result-bingo">
      <p>{{ result }}</p>
      <div @click="reload" class="buttonCTA btn-flat btn-flat--red mod-white">
        <span>再挑戦</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BingoGame',
  data() {
    return {
      min: 1,
      max: 50,
      click: 0,
      maxClick: 30,
      selectedNum: null,
      randomNums: [],
      cardNums: [],
      result: '',
      isActive: false,
      cards: [
        {
          id: 1,
          num: null,
          isPunched: false
        },
        {
          id: 2,
          num: null,
          isPunched: false
        },
        {
          id: 3,
          num: null,
          isPunched: false
        },
        {
          id: 4,
          num: null,
          isPunched: false
        },
        {
          id: 5,
          num: null,
          isPunched: false
        },
        {
          id: 6,
          num: null,
          isPunched: false
        },
        {
          id: 7,
          num: null,
          isPunched: false
        },
        {
          id: 8,
          num: null,
          isPunched: false
        },
        {
          id: 9,
          num: null,
          isPunched: false
        },
        {
          id: 10,
          num: null,
          isPunched: false
        },
        {
          id: 11,
          num: null,
          isPunched: false
        },
        {
          id: 12,
          num: null,
          isPunched: false
        },
        {
          id: 'free',
          num: '',
          isPunched: false
        },
        {
          id: 14,
          num: null,
          isPunched: false
        },
        {
          id: 15,
          num: null,
          isPunched: false
        },
        {
          id: 16,
          num: null,
          isPunched: false
        },
        {
          id: 17,
          num: null,
          isPunched: false
        },
        {
          id: 18,
          num: null,
          isPunched: false
        },
        {
          id: 19,
          num: null,
          isPunched: false
        },
        {
          id: 20,
          num: null,
          isPunched: false
        },
        {
          id: 21,
          num: null,
          isPunched: false
        },
        {
          id: 22,
          num: null,
          isPunched: false
        },
        {
          id: 23,
          num: null,
          isPunched: false
        },
        {
          id: 24,
          num: null,
          isPunched: false
        },
        {
          id: 25,
          num: null,
          isPunched: false
        }
      ]
    };
  },
  created: function() {
    this.randomArry();
    this.cardNums.sort(function(a, b) {
      return a - b;
    });
  },
  mounted: function() {
    this.numOnCards();
    this.cards[12].isPunched = true;
  },
  computed: {
    restNum() {
      return this.maxClick - this.click;
    }
  },
  methods: {
    init() {
      this.click = 0;
      this.selectedNum = null;
      this.randomNums = [];
      this.cardNums = [];
      this.result = '';
      this.isActive = false;
      for (let i = 0; i < this.cards.length; i++) {
        if (!(this.cards[i].id == 'free')) {
          this.cards[i].num = null;
          this.cards[i].isPunched = false;
        }
      }

      this.randomArry();
      this.cardNums.sort(function(a, b) {
        return a - b;
      });

      this.numOnCards();
      this.cards[12].isPunched = true;
    },
    intRandom() {
      return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    },
    randomArry() {
      // 1 ~ 50 の重複なし乱数
      for (let i = this.min; i <= this.max; i++) {
        for (;;) {
          let tmp = this.intRandom();
          if (!this.randomNums.includes(tmp)) {
            this.randomNums.push(tmp);
            break;
          }
        }
      }
      // bingoカード表示用の数字 25個 (13番目はfreeの為表示されない)
      for (let i = 0; i < this.cards.length; i++) {
        this.cardNums.push(this.randomNums[i]);
      }
      // 数字ソート
      this.cardNums.sort((a, b) => a - b);
    },
    numOnCards() {
      for (let i = 0; i < this.cardNums.length; i++) {
        if (!(this.cards[i].id == 'free')) {
          this.cards[i].num = this.cardNums[i];
        }
      }
    },
    selectNum() {
      let r = Math.floor(Math.random() * this.randomNums.length);
      this.selectedNum = this.randomNums.splice(r, 1)[0];
      for (let i = 0; i < this.cards.length; i++) {
        if (this.cards[i].num == this.selectedNum) {
          this.cards[i].isPunched = true;
        }
      }
      // 横
      this.checkHLine(1, 5);
      this.checkHLine(6, 10);
      this.checkHLine(11, 15);
      this.checkHLine(16, 20);
      this.checkHLine(21, 25);
      // // 縦
      this.checkVLine([0, 5, 10, 15, 20]);
      this.checkVLine([1, 6, 11, 16, 21]);
      this.checkVLine([2, 7, 12, 17, 22]);
      this.checkVLine([3, 8, 13, 18, 23]);
      this.checkVLine([4, 9, 14, 19, 24]);
      // 斜め
      this.checkVLine([4, 8, 12, 16, 20]);
      this.checkVLine([0, 6, 12, 18, 24]);

      this.click++;
      if (this.click >= this.maxClick) this.finish('残念 ...');
    },
    checkHLine(from, to) {
      let punch = [];
      for (let i = from - 1; i < to; i++) {
        punch.push(this.cards[i].isPunched);
      }
      if (punch.every(v => v)) this.finish('BINGO！');
    },
    checkVLine(arr) {
      let punch = [];
      for (let i = 0; i < arr.length; i++) {
        punch.push(this.cards[arr[i]].isPunched);
      }
      if (punch.every(v => v)) this.finish('BINGO！');
    },
    finish(str) {
      this.result = str;
      this.isActive = true;
    },
    reload() {
      this.init();
    }
  }
};
</script>

<style lang="scss">
.bingoGame {
  .bingoCard {
    position: relative;
    width: 72%;
    margin: calc(17 / 320 * 100vw) auto;
    background: #fff;
    border: solid 5px #cf0404;
    z-index: 10;
    @include mq {
      width: 43%;
      margin-top: 3%;
      margin-left: 5%;
    }
    &:before {
      content: '';
      display: block;
      padding-top: calc(4 / 3 * 100%);
    }
  }

  .bingoNumbers {
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    > li {
      width: calc(100% / 5);
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    > li:not(:nth-child(n + 26)) {
      border-bottom: solid 5px #cf0404;
    }

    > li:not(:nth-child(5n)):nth-child(n + 6) {
      border-right: solid 5px #cf0404;
    }

    > li:nth-child(18) {
      font-size: calc(20 / 720 * 100vw);
    }
  }

  .bingoTitle {
    font-size: calc(28 / 320 * 100vw);
    line-height: 0.2;
    font-weight: 700;
    background: -webkit-linear-gradient(top, #ff3019 20%, #cf0404 88%);
    color: #fff;
    @include mq {
      font-size: calc(30 / 1024 * 100vw);
    }
  }

  .bingoNum {
    font-size: calc(17 / 320 * 100vw);
    line-height: 0.2;
    z-index: 1;
    @include mq {
      font-size: calc(22 / 1024 * 100vw);
    }
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 5%;
      right: 5%;
      bottom: 5%;
      left: 5%;
      border-radius: 50%;
      background: aliceblue;
      z-index: -1;
    }

    &.is-punched:after {
      background: #000;
      z-index: 10;
    }
  }

  .lottery {
    position: absolute;
    @include mq(lt-lg) {
      display: flex;
      align-items: center;
      justify-content: center;
      bottom: 3%;
      left: 2%;
      right: 0;
    }
    @include mq {
      top: 43%;
      left: 52.6%;
      text-align: center;
    }
    @media screen and (min-width: 1200px) {
      left: 55.6%;
    }
  }

  .restNum {
    position: absolute;
    bottom: 9%;
    left: 4%;
    line-height: 1.3;
    text-align: center;
    font-size: calc(12 / 320 * 100vw);
    color: #cf0404;
    font-weight: 700;
    @include mq {
      bottom: 62%;
      left: 83%;
      font-size: calc(20 / 1024 * 100vw);
    }
  }

  .mi1 {
    width: calc(45 / 320 * 100vw);
    height: calc(45 / 320 * 100vw);
    background-color: #fff;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    margin-right: calc(15 / 320 * 100vw);
    @include mq(md) {
      margin-right: calc(35 / 600 * 100vw);
    }
    @include mq {
      width: calc(100 / 1024 * 100vw);
      height: calc(100 / 1024 * 100vw);
      margin: auto;
    }
    &:after {
      display: block;
      content: '';
      width: calc(45 / 320 * 100vw);
      height: calc(45 / 320 * 100vw);
      top: 0px;
      left: 0px;
      position: absolute;
      filter: blur(5px);
      background-color: transparent;
      z-index: 1;
      box-shadow: inset -10px -10px 0 -4px #400;
      border-radius: 50%;
      @include mq {
        width: calc(100 / 1024 * 100vw);
        height: calc(100 / 1024 * 100vw);
        box-shadow: inset -10px -10px 0 3px #400;
      }
    }
  }

  .num {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: calc(17 / 320 * 100vw);
    @include mq {
      font-size: calc(40 / 1024 * 100vw);
    }
  }

  .buttonCTA {
    @include mq {
      margin-top: 1em;
    }
  }

  p {
    font-size: calc(50 / 1024 * 100vw);
    letter-spacing: 0.1em;
    color: #fff;
  }
}
</style>
