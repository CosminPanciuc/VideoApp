<script lang="ts">
import NavBar from './components/NavBar.vue'
import AuthAndRegi from './components/AuthAndRegi.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    AuthAndRegi
  }
}
</script>

<template>
  <NavBar></NavBar>
  <AuthAndRegi></AuthAndRegi>
</template>

<style scoped></style>
