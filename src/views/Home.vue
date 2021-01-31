<template>
  <div class="home">
    <app-bar title="TODO" left="bars" right="search" />
  </div>
</template>

<script>
import AppBar from '../components/AppBar.vue'
export default {
  components: {
    AppBar,
  }
}
</script>

<style>
  .home {
    height: 100%;
    width: 100%;
    overflow: hidden;
    color: black;
  }
</style>
