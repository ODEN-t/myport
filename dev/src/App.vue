<template>
  <div id="app">
    <Header></Header>
    <router-link to="/">Home</router-link> |
    <router-link to="/info">Info</router-link>
    <router-view></router-view> <!-- pages以下のコンテンツ内容 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import 'normalize.css';

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>
