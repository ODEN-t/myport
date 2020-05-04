<template>
  <footer class="p-footer">
    <div class="p-footer__content">
      <p>My Portforio</p>
      <small>Copyright &copy; 2020 T.K. All Rights Reserved.</small>
    </div>
  </footer>
</template>

<script></script>

<style lang="scss">
.p-footer {
  color: #fffffe;
  background-color: #2a2a2a;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__content {
    text-align: center;

    > p {
      font-size: 18px;
      letter-spacing: 0.1em;
      @include mq {
        font-size: 24px;
      }
    }

    > small {
      display: inline-block;
      margin-top: 10px;
      font-size: 8px;
      letter-spacing: 0.1em;
      @include mq {
        font-size: 10px;
      }
    }
  }
}
</style>
