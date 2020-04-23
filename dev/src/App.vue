<template>
  <div id="app">
    <Calculator />
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
