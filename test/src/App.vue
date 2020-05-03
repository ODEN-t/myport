<template>
  <div id="app">
    <Header />
    <div class="test">
      <router-link to="/">Home</router-link> |
      <router-link to="/info">Info</router-link>
    </div>
    <router-view />
    <!-- pages以下のコンテンツ内容 -->
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import './styles/reset.css';
#app {
  @include font_family;
}
.test {
  margin-top: 200px;
  z-index: 100;
}
</style>
