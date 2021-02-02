<template>
  <div class="home">
    <app-bar title="TODO" left="bars" right="search" />
    <Avatar />
    <Gradient />
    <TodoList />
  </div>
</template>

<script>
import AppBar from '../components/AppBar.vue'
import Avatar from '../components/Avatar.vue'
import Gradient from '../components/Gradient.vue'
import TodoList from '../components/TodoList.vue';
export default {
  components: {
    AppBar,
    Avatar,
    Gradient,
    TodoList,
  }
}
</script>

<style>
  .home {
    height: 100%;
    width: 100%;
    overflow: hidden;
    color: white;
  }
</style>
