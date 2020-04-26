<template>
  <header>
    <nav>
      <a href="/">My Portforio</a>
      <ul>
        <li>menu</li>
        <li>menu</li>
        <li>menu</li>
        <li>menu</li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: 'unchi'
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    @include font_family;
    
    ul {
      list-style: none;
    }
  }
</style>>
