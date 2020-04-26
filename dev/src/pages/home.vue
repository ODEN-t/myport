<template>
  <main class="home">
    <div class="p-head">
      <div class="p-head__wrap">
        <div class="p-head__background"></div>
        <h1>My Portforio</h1>
      </div>
    </div>
    <div class="p-main">
      <div class="p-main__profile">
        <h2>Profile</h2>
        <div class="p-main__dataBlock">
          <dl class="p-main__dataList">
            <div class="p-main__dataWrap" v-for="dataList in dataBlock.profile" :key="dataList.dt">
              <dt>{{ dataList.dt }}</dt>
              <dd>{{ dataList.dd }}</dd>
            </div>
          </dl>
        </div>
        <div class="p-main__dataBlock p-main__dataBlock--right">
          <dl class="p-main__dataList">
            <div class="p-main__dataWrap" v-for="dataList in dataBlock.profile" :key="dataList.dt">
              <dt>{{ dataList.dt }}</dt>
              <dd>{{ dataList.dd }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'home',
  data: function() {
    return {
      dataBlock: {
        profile: [
          { 
            dt: 'Name',
            dd: 'T.K'
          },
          { 
            dt: 'Address',
            dd: '東京都小平市'
          },
          { 
            dt: 'Tel',
            dd: '080-1480-4979'
          },
          { 
            dt: 'Mail',
            dd: 'xxzera@gmail.com'
          }
        ],
      }
    }
  }
}
</script>

<style lang="scss">
  .home {
    
    .p-head {
      width: 100%;
      height: 640px;
      position: relative;

      &__wrap {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        > h1 {
          font-size: 60px;
          letter-spacing: 5px;
          color: #fff;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%);
        }
      }

      &__background  {
        background-image: url('/images/oceanside-villall-min.jpg');
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: 50% 80%;
        filter: brightness(0.7);
      }
    }

    .p-main {
      width: 100%;

      &__profile {
        color: #fff;
        background-color: #e3d1c0;
        padding: 90px;
        &:after {
        display: block;
        content: '';
        clear: both;
      }

        > h2 {
          font-size: 30px;
          letter-spacing: 2px;
        }
      }

      &__dataBlock {
        width: 65%;
        max-width: 650px;
        background-color: #fff;
        padding: 2.5em;
        margin-top: 20px;
        border-radius: 10px;

        &--right {
          float: right;
        }
      }

      &__dataList {
        width: 100%;
        color: #333;
      }

      &__dataWrap {
        display: flex;
        flex-wrap: wrap;
        font-size: 18px;
        line-height: 1.7;
        
        > dt {
          width: 30%;
          letter-spacing: 2px;
        }

        > dd {
          width: 70%;
        }
      }
    }
  }
</style>