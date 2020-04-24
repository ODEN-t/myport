<template>
  <div id="app">
    <Home />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Home from './pages/home.vue';
import 'normalize.css';

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>
