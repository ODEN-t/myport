<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
@import './styles/reset.css';
@import url('https://fonts.googleapis.com/css?family=Lato|Noto+Sans+JP&display=swap');
#app {
  font-family: 'lato_noto', 'Lato', 'Noto Sans JP', 'ヒラギノ角ゴ ProN',
    'Hiragino Kaku Gothic ProN', 'メイリオ', 'Meiryo', 'ＭＳ Ｐゴシック',
    'MS PGothic', 'sans-serif';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
