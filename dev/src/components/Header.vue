<template>
  <header class="header">
    <nav class="p-nav">
      <router-link 
        class="p-nav__title" 
        to="/">
        T.K
      </router-link>
      <ul class="p-nav__list">
        <li>
          <a 
            href=""
            id="#profile"
            class="p-nav__anchor">
            Profile
          </a>
        </li>
        <li>
          <a 
            href=""
            id="#profile"
            class="p-nav__anchor">
            Works
          </a>
        </li>
        <li>
          <a 
            href=""
            id="#profile"
            class="p-nav__anchor">
            Skills
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    z-index: 1;
    @include mq(gt-md) {
      height: 80px;
    }

    .p-nav {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 60px;
      padding: 0 20px;
      @include mq(md) {
        height: 80px;
        padding: 0 25px;
      }
      @include mq {
        height: 80px;
        padding: 0 50px;
      }

      &__title {
        font-size: 20px;
        color: #fff;
        letter-spacing: 6px;
        display: flex;
        align-items: center;
        height: 60px;
        @include mq(gt-md) {
          font-size: 23px;
          letter-spacing: 8px;
          height: 80px;
        }
      }

      &__list {
        height: 60px;
        @include mq(gt-md) {
          height: 80px; 
        }

        > li {
          display: inline-block;
        }

        > li:not(:last-child) {
          padding-right: 20px;
          @include mq(gt-md) {
            padding-right: 30px;
          }
        } 
      }

      &__anchor {
        font-size: 14px;
        color: #fff;
        letter-spacing: 1px;
        height: 60px;
        display: flex;
        align-items: center;
        @include mq(gt-md) {
          font-size: 17px;
          letter-spacing: 2px;
          height: 80px;
        }
      }
    }
  }
</style>>
