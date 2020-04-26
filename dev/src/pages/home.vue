<template>
  <main class="home">
    <div class="p-head">
      <div class="p-head__wrap">
        <div class="p-head__background"></div>
        <h1>My Portforio</h1>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'home'
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
  }
</style>