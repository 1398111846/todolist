<template>
  <transition name="show" @enter="handleEnter" @leave="handleLeave">
    <div class="todo_detail" v-if="selected">
      <app-bar @left="unselectTodo" />
      <todo :todo="selected.todo" />
    </div>
  </transition>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import AppBar from "./AppBar.vue";
import Todo from "./Todo.vue";
export default {
  components: {
    AppBar,
    Todo,
  },
  computed: {
    ...mapState(["selected", "unselect"]),
  },
  methods: {
    ...mapMutations(["unselectTodo"]),
    handleEnter(el) {
      Object.assign(el.style, {
        top: `${this.selected.rect.top}px`,
        left: `${this.selected.rect.left}px`,
        width: `${this.selected.rect.width}px`,
        height: `${this.selected.rect.height}px`,
      });
      setTimeout(() => {
        //console.log(this.selected.rect);
        Object.assign(el.style, {
          top: 0,
          left: 0,
          //todo
          width: `${this.selected.rect.appWidth}px`,
          height: `${this.selected.rect.appHeight}px`,
        });
      }, 0);
    },

    handleLeave(el) {
      Object.assign(el.style, {
        top: 0,
        left: 0,
        width: `${this.unselect.rect.appWidth}px`,
        height: `${this.unselect.rect.appHeight}px`,
      });
      setTimeout(() => {
        Object.assign(el.style, {
          top: `${this.unselect.rect.top}px`,
          left: `${this.unselect.rect.left}px`,
          width: `${this.unselect.rect.width}px`,
          height: `${this.unselect.rect.height}px`,
        });
      }, 0);
    },
  },
};
</script>

<style lang="scss">
.todo_detail {
  position: fixed;
  display: flex;
  flex-direction: column;
  border-radius: 0;
  background-color: white;
  color: #666;
  will-change: top, left, width, height;

  .todo {
    margin: 0;
    margin-top: -44px;
    padding: 0 20px;
    box-shadow: none;
  }
  .todo_head, 
  .todo_body {
    transform:translate3d(0, 88px, 0);
  }
}
</style>