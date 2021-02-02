<template>
  <div class="todo">
    <div class="todo_head">
      <div class="todo_icon">
        <i :class="['fa', `fa-${todo.icon}`]"></i>
      </div>
      <div class="todo_menu">
        <i :class="['fa', 'fa-bars']"></i>
      </div>
    </div>
    <div class="todo_body">
      <p class="todo_tips">{{ todo.length }} Tasks</p>
      <h1>{{ todo.type }}</h1>
      <div class="todo_progress">
        <span class="todo_progress_line">
          <i :style="{ width: progress, backgroundImage: progressColor }"></i>
        </span>
        <span class="todo_progress_num">{{ progress }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {today, tomorrow} from '../store/shared.js'
export default {
    props: {
        todo: {
            type: Object,
            required: true,
        },
        selected: {
            type: String,
        }
    },
    computed: {
        color() {
            return this.todo.colors[0];
        },
        progress() {
            const totalCount = this.todo.tasks.filter(t => !t.deleted).length;
            const doneCount = this.todo.tasks.filter(t => !t.deleted && t.done).length;
            return `${Math.round(doneCount / totalCount) * 100}%`;
        },
        progressColor() {
            const colorBottom = `color-stop(30%, ${this.todo.colors[0]})`;
            const colorTop = `to(${this.todo.colors[1]})`;
            return `-webkit-gradient(linear, left bottom, left top, ${colorBottom}, ${colorTop})`
        }

    }
}
</script>

