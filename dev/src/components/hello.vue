<template>
  <div class="text">{{ message }}</div>
</template>

<style lang="scss">
  $red: blue;
  body {
    .text {
      color: $red;
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        message: "hello うんち"
      };
    }
  };
</script>