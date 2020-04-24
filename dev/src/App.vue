<template>
  <div id="app">
    <Calculator />
    <div>
      <router-link to="/">
        Calculator
      </router-link>
      <router-link to="/Calculator2">
        Calculator2
      </router-link>
      <router-link to="/Calculator3">
        Calculator3
      </router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Calculator from './components/Calculator.vue';
import 'normalize.css';

export default {
  name: 'app',
  components: {
    Calculator
  }
}
</script>
