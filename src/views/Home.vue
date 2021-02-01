<template>
  <div class="home">
    <app-bar title="TODO" left="bars" right="search" />
    <Avatar />
  </div>
</template>

<script>
import AppBar from '../components/AppBar.vue'
import Avatar from '../components/Avatar.vue'
export default {
  components: {
    AppBar,
    Avatar,
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
