<template>
  <main>
    <h3>Home</h3>
    <router-link :to="{ name: 'info' }">リンク</router-link>
  </main>
</template>

<script>
export default {
  name: 'home'
}
</script>