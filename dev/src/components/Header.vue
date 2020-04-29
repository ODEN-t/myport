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
    height: 80px;
    z-index: 1;

    .p-nav {
      display: flex;
      justify-content: space-between;
      padding: 0 50px;
      width: 100%;
      height: 80px;
      background-color: rgba(255, 255, 255, 0);

      &__title {
        font-size: 23px;
        color: #fff;
        letter-spacing: 8px;
        display: flex;
        align-items: center;
        height: 80px;
        z-index: 1; 
      }

      &__list {
        height: 80px;
        z-index: 1;

        > li {
          display: inline-block;
        }

        > li:not(:last-child) {
          padding-right: 30px;
        } 
      }

      &__anchor {
        font-size: 18px;
        color: #fff;
        letter-spacing: 2px;
        height: 80px;
        display: flex;
        align-items: center;
      }
    }
  }
</style>>
